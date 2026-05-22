from fastapi import APIRouter, Depends, Request

from app.config import settings
from app.middleware.auth import require_user

router = APIRouter()


@router.get("/usage")
async def usage(request: Request, user: dict = Depends(require_user)):
    pool = request.app.state.pool
    profile = await pool.fetchrow("select plan, generations_this_month from profiles where id = $1", user["user_id"])
    counts = await pool.fetchrow(
        """
        select
          (select count(*) from generations where user_id = $1) as total_generations,
          (select count(*) from projects where user_id = $1) as total_projects,
          (select count(*) from api_keys where user_id = $1 and is_active = true) as api_keys_count
        """,
        user["user_id"],
    )
    plan = profile["plan"] if profile else "free"
    return {
        "plan": plan,
        "generations_this_month": profile["generations_this_month"] if profile else 0,
        "generation_limit": settings.generation_limit_for_plan(plan),
        **dict(counts),
    }

