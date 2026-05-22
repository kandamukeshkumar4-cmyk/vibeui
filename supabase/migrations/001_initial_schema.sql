-- VibeUI initial schema
create extension if not exists vector;
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text default '',
  avatar_url text default '',
  plan text not null default 'free' check (plan in ('free', 'pro', 'team')),
  generations_this_month integer not null default 0,
  generations_reset_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', ''),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create table if not exists public.api_keys (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  key_hash text not null unique,
  key_prefix text not null,
  is_active boolean not null default true,
  last_used_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  description text default '',
  generation_count integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.design_patterns (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  category text not null,
  subcategory text default '',
  name text not null,
  description text not null,
  use_cases text[] not null default '{}',
  code_template text not null,
  tags text[] not null default '{}',
  embedding vector(1536),
  created_at timestamptz not null default now()
);

create table if not exists public.generations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  project_id uuid references public.projects(id) on delete set null,
  prompt text not null,
  app_name text default '',
  app_description text default '',
  design_system jsonb not null default '{}',
  screens jsonb not null default '[]',
  num_screens integer not null default 0,
  model_used text not null default 'gpt-4o',
  total_tokens integer default 0,
  latency_ms integer default 0,
  openai_response_id text,
  is_public boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.design_messages (
  id uuid primary key default gen_random_uuid(),
  generation_id uuid not null references public.generations(id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  updated_screens jsonb,
  openai_response_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.agent_runs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  workflow_type text not null,
  status text not null default 'running' check (status in ('pending', 'running', 'completed', 'failed')),
  input jsonb not null default '{}',
  output jsonb default '{}',
  steps jsonb not null default '[]',
  error_message text,
  started_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists public.request_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  api_key_id uuid references public.api_keys(id) on delete set null,
  method text not null,
  path text not null,
  status_code integer,
  latency_ms integer,
  tokens_used integer default 0,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists idx_api_keys_user_id on public.api_keys(user_id);
create index if not exists idx_api_keys_key_hash on public.api_keys(key_hash);
create index if not exists idx_projects_user_id on public.projects(user_id);
create index if not exists idx_generations_user_id on public.generations(user_id);
create index if not exists idx_generations_project_id on public.generations(project_id);
create index if not exists idx_generations_public on public.generations(is_public) where is_public = true;
create index if not exists idx_design_messages_generation_id on public.design_messages(generation_id);
create index if not exists idx_agent_runs_user_id on public.agent_runs(user_id);
create index if not exists idx_request_logs_user_id on public.request_logs(user_id);
create index if not exists idx_design_patterns_category on public.design_patterns(category);
create index if not exists idx_design_patterns_embedding on public.design_patterns
  using ivfflat (embedding vector_cosine_ops) with (lists = 50);

create or replace function public.match_design_patterns(
  query_embedding vector(1536),
  match_count integer default 5,
  match_threshold float default 0.4,
  filter_category text default null,
  filter_tags text[] default null
)
returns table (
  id uuid,
  slug text,
  category text,
  subcategory text,
  name text,
  description text,
  use_cases text[],
  code_template text,
  tags text[],
  similarity float
)
language sql
stable
as $$
  select
    dp.id,
    dp.slug,
    dp.category,
    dp.subcategory,
    dp.name,
    dp.description,
    dp.use_cases,
    dp.code_template,
    dp.tags,
    1 - (dp.embedding <=> query_embedding) as similarity
  from public.design_patterns dp
  where dp.embedding is not null
    and 1 - (dp.embedding <=> query_embedding) > match_threshold
    and (filter_category is null or dp.category = filter_category)
    and (filter_tags is null or dp.tags && filter_tags)
  order by dp.embedding <=> query_embedding
  limit match_count;
$$;

create or replace function public.increment_generation_usage(profile_id uuid)
returns void
language plpgsql
as $$
begin
  update public.profiles
  set generations_this_month = generations_this_month + 1,
      updated_at = now()
  where id = profile_id;
end;
$$;

create or replace function public.update_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at before update on public.profiles
  for each row execute function public.update_updated_at();

drop trigger if exists set_projects_updated_at on public.projects;
create trigger set_projects_updated_at before update on public.projects
  for each row execute function public.update_updated_at();

alter table public.profiles enable row level security;
alter table public.api_keys enable row level security;
alter table public.projects enable row level security;
alter table public.design_patterns enable row level security;
alter table public.generations enable row level security;
alter table public.design_messages enable row level security;
alter table public.agent_runs enable row level security;
alter table public.request_logs enable row level security;

drop policy if exists "Users can view own profile" on public.profiles;
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

drop policy if exists "Users can manage own api keys" on public.api_keys;
create policy "Users can manage own api keys" on public.api_keys for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Users can manage own projects" on public.projects;
create policy "Users can manage own projects" on public.projects for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Anyone can read design patterns" on public.design_patterns;
create policy "Anyone can read design patterns" on public.design_patterns for select using (true);

drop policy if exists "Users can view own or public generations" on public.generations;
create policy "Users can view own or public generations" on public.generations for select using (auth.uid() = user_id or is_public = true);
drop policy if exists "Users can create own generations" on public.generations;
create policy "Users can create own generations" on public.generations for insert with check (auth.uid() = user_id);
drop policy if exists "Users can update own generations" on public.generations;
create policy "Users can update own generations" on public.generations for update using (auth.uid() = user_id);

drop policy if exists "Users can manage messages for own generations" on public.design_messages;
create policy "Users can manage messages for own generations" on public.design_messages for all using (
  exists (select 1 from public.generations g where g.id = generation_id and g.user_id = auth.uid())
) with check (
  exists (select 1 from public.generations g where g.id = generation_id and g.user_id = auth.uid())
);

drop policy if exists "Users can view own agent runs" on public.agent_runs;
create policy "Users can view own agent runs" on public.agent_runs for select using (auth.uid() = user_id);
drop policy if exists "Users can view own request logs" on public.request_logs;
create policy "Users can view own request logs" on public.request_logs for select using (auth.uid() = user_id);

grant usage on schema public to anon, authenticated;
grant select on public.design_patterns to anon, authenticated;
grant select, insert, update, delete on public.profiles, public.api_keys, public.projects, public.generations, public.design_messages, public.agent_runs, public.request_logs to authenticated;
grant execute on function public.match_design_patterns(vector, integer, float, text, text[]) to anon, authenticated;
grant execute on function public.increment_generation_usage(uuid) to authenticated;
