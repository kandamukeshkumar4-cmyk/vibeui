# VibeUI — Codex Agent Guide

> Read this file before touching any code. It tells you what the project is,
> where everything lives, and what you must never break.

## What This Project Is

VibeUI is an AI-powered mobile app UI generator.
A user describes their app in plain English and gets full HTML screen designs back instantly.

Stack:
- **Frontend**: Next.js 15 App Router — `web/`
- **Backend**: FastAPI (Python 3.12, asyncpg, uv) — `api/`
- **Database**: Supabase Postgres + pgvector — migrations in `supabase/migrations/`
- **LLM**: Groq (`llama-3.3-70b-versatile`) via OpenAI-compatible base URL
- **Image gen**: NVIDIA NIM FLUX.1 Schnell
- **Auth**: Supabase Auth (JWT + API keys prefixed `vui_live_`)
- **Hosting**: Render (API) + Vercel (web)

## Repo Layout

```
vibeui/
├── api/                  # FastAPI backend
│   ├── app/
│   │   ├── main.py       # FastAPI app, lifespan, router mounts
│   │   ├── config.py     # Settings (pydantic-settings, reads .env)
│   │   ├── db.py         # asyncpg pool lifecycle + get_pool helper
│   │   ├── routers/      # One file per endpoint group
│   │   │   ├── generate.py       # POST /v1/generate (SSE stream)
│   │   │   ├── images.py         # POST /v1/generate-image, /v1/enhance-screens
│   │   │   ├── generations.py    # GET/DELETE /v1/generations
│   │   │   ├── api_keys.py       # API key CRUD
│   │   │   └── agents.py         # Agent workflow endpoints
│   │   ├── core/
│   │   │   ├── llm.py            # Groq LLM calls
│   │   │   ├── nim_images.py     # NVIDIA NIM image generation
│   │   │   └── rag.py            # pgvector RAG search
│   │   ├── middleware/
│   │   │   └── auth.py           # JWT + API key auth middleware
│   │   └── models/               # Pydantic request/response models
│   ├── tests/            # pytest tests
│   ├── Dockerfile        # python:3.12-slim + uv
│   ├── pyproject.toml    # dependencies + tool config
│   └── uv.lock
├── web/                  # Next.js 15 frontend
│   ├── src/app/
│   │   ├── (marketing)/  # Public landing page routes
│   │   ├── (auth)/       # Login / signup flows
│   │   └── (dashboard)/  # Authenticated app routes
│   ├── src/components/   # Shared React components
│   ├── src/lib/          # Client utilities, API wrappers, Supabase client
│   └── package.json
├── supabase/
│   └── migrations/       # SQL migration files — apply in order
├── docs/                 # Architecture + settings docs
└── .github/
    ├── workflows/        # CI — backend tests, frontend lint/build
    └── PULL_REQUEST_TEMPLATE.md
```

## Environment Variables

### API (`api/.env`) — never commit this file

```
DATABASE_URL=postgresql://postgres.PROJECT_ID:PASSWORD@aws-1-us-east-2.pooler.supabase.com:5432/postgres
SUPABASE_URL=https://PROJECT_ID.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...
GROQ_API_KEY=...
NVIDIA_NIM_API_KEY=...
CORS_ORIGINS=http://localhost:3000,https://vibeui-web.vercel.app
```

`DATABASE_URL` must use the **Session Pooler** host (pooler.supabase.com), not the
direct host — Render is IPv4-only, Supabase direct connections require IPv6.

### Web (`web/.env.local`) — never commit this file

```
NEXT_PUBLIC_API_URL=https://vibeui-api.onrender.com
NEXT_PUBLIC_SUPABASE_URL=https://PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
```

## Critical Rules

### Never break these

1. **`api/.env` and `web/.env.local` must never be committed.** Both are in `.gitignore`.
2. **The asyncpg pool is the DB authority.** All DB access goes through `app.state.pool`
   (set in `db.py` lifespan). Do not introduce a second DB connection pattern.
3. **`db.py` lifespan is fault-tolerant.** If `DATABASE_URL` is missing, the pool is `None`
   and `get_pool()` raises HTTP 503. Do not change this to a hard crash.
4. **Generated HTML is rendered in a sandboxed iframe.** Never relax the iframe
   `sandbox=""` attribute or the strict CSP. Script execution in previews is intentionally blocked.
5. **Auth middleware is on all `/v1/` routes except `/v1/generate` (public demo).**
   Do not accidentally add auth to the public generate route or remove it from protected routes.
6. **Rate limiting is in-memory (`slowapi`).** Acceptable for single-instance Render deploy.
   Do not remove it — it protects the public demo endpoint.

### Code style

- Python: follow existing patterns, use `async/await` throughout, type-annotate everything.
- TypeScript: strict mode is on. No `any`. Use the existing `src/lib/` utilities.
- One PR per logical change. Keep diffs small and reviewable.
- All new API endpoints need a test in `api/tests/`.

## Local Dev

```bash
# Backend
cd api
cp .env.example .env   # fill in your keys
uv sync
uv run uvicorn app.main:app --reload --port 8000

# Frontend (separate terminal)
cd web
cp .env.local.example .env.local   # fill in your keys
npm install
npm run dev
```

Health check: `curl http://localhost:8000/health`

## Running Tests

```bash
cd api
uv run pytest
```

## Deployment

- **API**: Render (`vibeui-api`, service `srv-d89jat8jo6nc73dtgi60`). Push to `main` triggers auto-deploy.
- **Web**: Vercel (`vibeui-web`). Push to `main` triggers auto-deploy.
- Set all environment variables in each platform's dashboard — never in source code.
