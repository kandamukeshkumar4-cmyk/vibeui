from fastapi import APIRouter, Depends, HTTPException, Request
from sse_starlette.sse import EventSourceResponse

from app.config import settings
from app.core.designer import generate_design, parse_sse_payload, sse_event
from app.middleware.auth import get_optional_user
from app.middleware.rate_limit import limiter
from app.models.schemas import GenerateRequest

router = APIRouter()


@router.post("/generate")
@limiter.limit("5/minute")
async def generate(request: Request, body: GenerateRequest, user: dict | None = Depends(get_optional_user)):
    pool = request.app.state.pool
    if user:
        limit = settings.generation_limit_for_plan(user["plan"])
        if user["generations_this_month"] >= limit:
            raise HTTPException(status_code=429, detail=f"Monthly generation limit reached ({limit})")

    async def stream():
        async for event in generate_design(body.prompt, body.num_screens, body.style, body.platform, pool):
            yield event
            parsed = parse_sse_payload(event)
            if parsed["event"] == "done":
                result = parsed["data"]
                async with pool.acquire() as conn:
                    async with conn.transaction():
                        row = await conn.fetchrow(
                            """
                            insert into generations (
                              user_id, project_id, prompt, app_name, app_description,
                              design_system, screens, num_screens, model_used, total_tokens,
                              latency_ms, is_public, openai_response_id
                            )
                            values ($1,$2,$3,$4,$5,$6::jsonb,$7::jsonb,$8,$9,$10,$11,$12,$13)
                            returning id, created_at
                            """,
                            user["user_id"] if user else None,
                            body.project_id if user and body.project_id else None,
                            body.prompt,
                            result["app_name"],
                            result["app_description"],
                            result["design_system"],
                            result["screens"],
                            result["num_screens"],
                            result["model_used"],
                            result["total_tokens"],
                            result["latency_ms"],
                            user is None,
                            result.get("openai_response_id"),
                        )
                        if user:
                            await conn.execute("select increment_generation_usage($1::uuid)", user["user_id"])
                    yield sse_event("saved", {"id": str(row["id"]), "created_at": row["created_at"].isoformat()})

    return EventSourceResponse(stream())
