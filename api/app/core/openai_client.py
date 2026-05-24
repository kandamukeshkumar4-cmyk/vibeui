"""LLM client factory — Groq (preferred) or OpenAI fallback.

Reads the active key and base URL from settings so callers never need to
know which provider is in use.  The returned client is OpenAI-SDK-compatible;
Groq exposes an OpenAI-compatible Chat Completions endpoint.
"""

from functools import lru_cache

from fastapi import HTTPException
from openai import AsyncOpenAI

from app.config import settings


@lru_cache
def get_openai_client() -> AsyncOpenAI:
    if not settings.active_llm_key:
        raise HTTPException(
            status_code=503,
            detail="No LLM API key configured. Set GROQ_API_KEY or OPENAI_API_KEY.",
        )
    return AsyncOpenAI(
        api_key=settings.active_llm_key,
        base_url=settings.active_llm_base_url,  # None → OpenAI default
    )

