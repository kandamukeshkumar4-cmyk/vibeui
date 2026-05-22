from fastapi import APIRouter, Depends, HTTPException, Query, Request

from app.middleware.auth import get_optional_user, require_user

router = APIRouter()


@router.get("/generations")
async def list_generations(request: Request, user: dict = Depends(require_user), limit: int = Query(25, ge=1, le=100)):
    rows = await request.app.state.pool.fetch(
        """
        select id, prompt, app_name, app_description, num_screens, created_at
        from generations where user_id = $1 order by created_at desc limit $2
        """,
        user["user_id"],
        limit,
    )
    return [dict(row) for row in rows]


@router.get("/generations/{generation_id}")
async def get_generation(request: Request, generation_id: str, user: dict | None = Depends(get_optional_user)):
    row = await request.app.state.pool.fetchrow("select * from generations where id = $1", generation_id)
    if row is None:
        raise HTTPException(status_code=404, detail="Generation not found")
    if not row["is_public"] and (not user or str(row["user_id"]) != user["user_id"]):
        raise HTTPException(status_code=403, detail="Not allowed")
    return dict(row)

