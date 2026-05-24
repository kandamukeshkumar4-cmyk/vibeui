"""asyncpg pool lifecycle and helpers."""

from collections.abc import AsyncIterator
from contextlib import asynccontextmanager
import json
import logging

import asyncpg
from fastapi import FastAPI, HTTPException, Request

from app.config import settings

logger = logging.getLogger(__name__)


async def _init_connection(conn: asyncpg.Connection) -> None:
    for typename in ("json", "jsonb"):
        await conn.set_type_codec(
            typename,
            encoder=json.dumps,
            decoder=json.loads,
            schema="pg_catalog",
            format="text",
        )


async def create_pool() -> asyncpg.Pool:
    return await asyncpg.create_pool(settings.database_url, min_size=2, max_size=10, init=_init_connection)


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    try:
        app.state.pool = await create_pool()
        logger.info("Database pool created successfully")
    except Exception as exc:
        logger.warning("Database pool failed at startup (DATABASE_URL may be missing): %s", exc)
        app.state.pool = None
    try:
        yield
    finally:
        if getattr(app.state, "pool", None) is not None:
            await app.state.pool.close()


def get_pool(request: Request) -> asyncpg.Pool:
    pool = getattr(request.app.state, "pool", None)
    if pool is None:
        raise HTTPException(status_code=503, detail="Database unavailable — DATABASE_URL not configured")
    return pool
