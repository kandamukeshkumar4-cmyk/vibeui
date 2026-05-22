"""OpenAI client helpers."""

from functools import lru_cache

from fastapi import HTTPException
from openai import AsyncOpenAI

from app.config import settings


@lru_cache
def get_openai_client() -> AsyncOpenAI:
    if not settings.openai_api_key:
        raise HTTPException(status_code=503, detail="OPENAI_API_KEY is not configured")
    return AsyncOpenAI(api_key=settings.openai_api_key)

