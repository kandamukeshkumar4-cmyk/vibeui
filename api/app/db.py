"""asyncpg pool lifecycle and helpers."""

from collections.abc import AsyncIterator
from contextlib import asynccontextmanager
import json

import asyncpg
from fastapi import FastAPI, Request

from app.config import settings


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
    app.state.pool = await create_pool()
    try:
        yield
    finally:
        await app.state.pool.close()


def get_pool(request: Request) -> asyncpg.Pool:
    return request.app.state.pool
