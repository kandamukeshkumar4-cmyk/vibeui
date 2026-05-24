# VibeUI — Cursor Rules

## Project Overview

VibeUI is an AI-powered mobile UI generator.
Users describe an app → get full HTML screen designs instantly.

- **Backend**: FastAPI + asyncpg + uv — `api/`
- **Frontend**: Next.js 15 App Router — `web/`
- **DB**: Supabase Postgres + pgvector
- **LLM**: Groq `llama-3.3-70b-versatile` (OpenAI-compatible)
- **Image gen**: NVIDIA NIM FLUX.1 Schnell
- **Hosting**: Render (API) + Vercel (web)

## File Layout Quick Reference

```
api/app/main.py          FastAPI app entrypoint
api/app/config.py        Settings via pydantic-settings
api/app/db.py            asyncpg pool — get_pool(request) is the DB accessor
api/app/routers/         One router per domain
api/app/core/llm.py      Groq LLM calls
api/app/core/nim_images.py  NVIDIA NIM image generation
api/app/middleware/auth.py  JWT + API-key auth
web/src/app/(marketing)/ Public landing page
web/src/app/(auth)/      Login/signup
web/src/app/(dashboard)/ Authenticated user area
web/src/lib/             Shared utilities and API clients
supabase/migrations/     SQL migrations — apply in order
```

## Hard Rules

- **Never commit `api/.env` or `web/.env.local`.** Both are gitignored.
- **DB access only through `app.state.pool`.** Defined in `db.py` lifespan.
  `get_pool(request)` returns the pool or raises HTTP 503 if unconfigured.
- **`DATABASE_URL` must use the Supabase Session Pooler** (`pooler.supabase.com:5432`),
  not the direct host. Render is IPv4-only; direct Supabase requires IPv6.
- **Do not relax the iframe sandbox or CSP** in screen preview components.
  `sandbox=""` and `script-src 'none'` are intentional security boundaries.
- **Public demo endpoint is `POST /v1/generate`** — no auth required.
  All other `/v1/` routes require auth. Do not accidentally swap these.
- **Type-annotate everything in Python.** TypeScript strict mode is on — no `any`.
- **One logical change per PR.** Keep diffs small.

## Database Connection

```
Host:   aws-1-us-east-2.pooler.supabase.com
Port:   5432
User:   postgres.hgyseyzjsveqokuakbpb
DB:     postgres
```

Full URL format:
```
postgresql://postgres.hgyseyzjsveqokuakbpb:PASSWORD@aws-1-us-east-2.pooler.supabase.com:5432/postgres
```

## Local Dev Commands

```bash
# API
cd api && uv run uvicorn app.main:app --reload --port 8000

# Frontend
cd web && npm run dev

# Tests
cd api && uv run pytest

# Health check
curl http://localhost:8000/health
```

## Python Conventions

- All DB queries use asyncpg directly: `pool.fetch(...)`, `pool.fetchrow(...)`, `pool.execute(...)`
- Pydantic v2 models for all request/response shapes
- `async/await` throughout — no blocking calls in async routes
- Import from `app.config import settings` for all config values

## TypeScript Conventions

- Use the Supabase client from `src/lib/supabase/` — do not create new instances
- API calls go through helpers in `src/lib/api.ts`
- Server Components fetch data; Client Components handle interaction
- Use `"use client"` only where browser APIs or event handlers are required

## What Lives Where

| Concern | Location |
|---|---|
| Screen generation logic | `api/app/routers/generate.py` |
| Image generation | `api/app/routers/images.py` + `api/app/core/nim_images.py` |
| Auth (backend) | `api/app/middleware/auth.py` |
| Auth (frontend) | `web/src/app/(auth)/` + `web/src/lib/supabase/` |
| RAG search | `api/app/core/rag.py` |
| DB pool lifecycle | `api/app/db.py` |
| Env config | `api/app/config.py` (reads `api/.env`) |
