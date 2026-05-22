"""JWT and Vibe API key authentication helpers."""

from __future__ import annotations

import hashlib
import secrets
import time
from typing import Any

import asyncpg
import httpx
import jwt
from fastapi import HTTPException, Request, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jwt import PyJWKClient

from app.config import settings

security = HTTPBearer(auto_error=False)
_jwks_cache: dict[str, Any] = {"client": None, "expires_at": 0.0}


def generate_api_key() -> tuple[str, str, str]:
    random_part = secrets.token_hex(32)
    full_key = f"{settings.api_key_prefix}{random_part}"
    key_hash = hash_api_key(full_key)
    key_prefix = f"{full_key[:16]}..."
    return full_key, key_hash, key_prefix


def hash_api_key(key: str) -> str:
    return hashlib.sha256(key.encode("utf-8")).hexdigest()


def _jwks_client() -> PyJWKClient:
    if not settings.jwks_url:
        raise HTTPException(status_code=503, detail="Supabase JWKS URL is not configured")

    now = time.time()
    if _jwks_cache["client"] is None or now >= _jwks_cache["expires_at"]:
        _jwks_cache["client"] = PyJWKClient(settings.jwks_url)
        _jwks_cache["expires_at"] = now + 600
    return _jwks_cache["client"]


async def verify_supabase_jwt(token: str) -> dict[str, Any]:
    try:
        signing_key = _jwks_client().get_signing_key_from_jwt(token)
        payload = jwt.decode(
            token,
            signing_key.key,
            algorithms=["ES256", "RS256"],
            audience=settings.supabase_jwt_audience,
            options={"verify_iss": False},
        )
        return payload
    except Exception:
        if not settings.supabase_url:
            raise HTTPException(status_code=401, detail="Invalid Supabase session")

    async with httpx.AsyncClient(timeout=10) as client:
        result = await client.get(
            f"{settings.supabase_url.rstrip('/')}/auth/v1/user",
            headers={"Authorization": f"Bearer {token}", "apikey": token},
        )
    if result.status_code >= 400:
        raise HTTPException(status_code=401, detail="Invalid Supabase session")
    user = result.json()
    return {"sub": user["id"], "email": user.get("email"), "role": "authenticated"}


async def get_optional_user(
    request: Request,
    credentials: HTTPAuthorizationCredentials | None = Security(security),
) -> dict[str, Any] | None:
    if credentials is None:
        return None

    token = credentials.credentials
    pool: asyncpg.Pool = request.app.state.pool

    if token.startswith(settings.api_key_prefix):
        key_hash = hash_api_key(token)
        row = await pool.fetchrow(
            """
            update api_keys
            set last_used_at = now()
            where key_hash = $1 and is_active = true
            returning id, user_id
            """,
            key_hash,
        )
        if row is None:
            raise HTTPException(status_code=401, detail="Invalid or revoked API key")
        profile = await pool.fetchrow(
            "select id, plan, generations_this_month from profiles where id = $1",
            row["user_id"],
        )
        return {
            "user_id": str(row["user_id"]),
            "api_key_id": str(row["id"]),
            "plan": profile["plan"] if profile else "free",
            "generations_this_month": profile["generations_this_month"] if profile else 0,
            "auth_type": "api_key",
        }

    payload = await verify_supabase_jwt(token)
    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(status_code=401, detail="Invalid Supabase session")

    profile = await pool.fetchrow(
        "select id, plan, generations_this_month from profiles where id = $1",
        user_id,
    )
    return {
        "user_id": user_id,
        "api_key_id": None,
        "plan": profile["plan"] if profile else "free",
        "generations_this_month": profile["generations_this_month"] if profile else 0,
        "auth_type": "supabase_jwt",
    }


async def require_user(
    request: Request,
    credentials: HTTPAuthorizationCredentials | None = Security(security),
) -> dict[str, Any]:
    user = await get_optional_user(request, credentials)
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication required")
    return user

