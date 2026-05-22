from fastapi import APIRouter, Depends, HTTPException, Request

from app.middleware.auth import generate_api_key, require_user
from app.models.schemas import CreateApiKeyRequest

router = APIRouter()


@router.get("/api-keys")
async def list_api_keys(request: Request, user: dict = Depends(require_user)):
    rows = await request.app.state.pool.fetch(
        """
        select id, name, key_prefix, is_active, last_used_at, created_at
        from api_keys where user_id = $1 order by created_at desc
        """,
        user["user_id"],
    )
    return [dict(row) for row in rows]


@router.post("/api-keys")
async def create_api_key(request: Request, body: CreateApiKeyRequest, user: dict = Depends(require_user)):
    full_key, key_hash, key_prefix = generate_api_key()
    row = await request.app.state.pool.fetchrow(
        """
        insert into api_keys (user_id, name, key_hash, key_prefix)
        values ($1, $2, $3, $4)
        returning id, name, key_prefix, is_active, last_used_at, created_at
        """,
        user["user_id"],
        body.name,
        key_hash,
        key_prefix,
    )
    data = dict(row)
    data["key"] = full_key
    return data


@router.delete("/api-keys/{key_id}")
async def revoke_api_key(request: Request, key_id: str, user: dict = Depends(require_user)):
    result = await request.app.state.pool.execute(
        "update api_keys set is_active = false where id = $1 and user_id = $2",
        key_id,
        user["user_id"],
    )
    if not result.endswith("1"):
        raise HTTPException(status_code=404, detail="API key not found")
    return {"revoked": True}

