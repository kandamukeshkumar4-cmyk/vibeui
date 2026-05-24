"""VibeUI API entrypoint."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded

from app.config import settings
from app.db import lifespan
from app.middleware.logging import RequestLoggingMiddleware
from app.middleware.rate_limit import limiter
from app.routers import agents, api_keys, chat, generate, health, history, images, projects, usage

app = FastAPI(
    title="VibeUI API",
    description="AI-powered mobile app design generation API",
    version=settings.app_version,
    lifespan=lifespan,
)

app.add_middleware(RequestLoggingMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

app.include_router(health.router)
app.include_router(generate.router, prefix="/v1", tags=["Generate"])
app.include_router(chat.router, prefix="/v1", tags=["Chat"])
app.include_router(projects.router, prefix="/v1", tags=["Projects"])
app.include_router(api_keys.router, prefix="/v1", tags=["API Keys"])
app.include_router(history.router, prefix="/v1", tags=["History"])
app.include_router(usage.router, prefix="/v1", tags=["Usage"])
app.include_router(agents.router, prefix="/v1", tags=["Agents"])
app.include_router(images.router, prefix="/v1", tags=["Images (NIM)"])

