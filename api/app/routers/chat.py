import json

from fastapi import APIRouter, Depends, HTTPException, Request
from sse_starlette.sse import EventSourceResponse

from app.core.openai_client import get_openai_client
from app.core.preview import sanitize_generated_html
from app.core.responses import build_chat_response_input
from app.middleware.auth import get_optional_user
from app.middleware.rate_limit import limiter

router = APIRouter()


@router.post("/chat")
@limiter.limit("10/minute")
async def chat_iterate(request: Request, body: dict, user: dict | None = Depends(get_optional_user)):
    generation_id = body.get("generation_id")
    message = body.get("message", "")
    pool = request.app.state.pool
    generation = await pool.fetchrow("select * from generations where id = $1", generation_id)
    if generation is None:
        raise HTTPException(status_code=404, detail="Generation not found")
    if generation["user_id"] and (not user or str(generation["user_id"]) != user["user_id"]):
        raise HTTPException(status_code=403, detail="Not your generation")

    async def stream():
        generation_dict = dict(generation)
        generation_dict["design_system"] = generation["design_system"]
        generation_dict["screens"] = generation["screens"]
        client = get_openai_client()
        response = await client.responses.create(**build_chat_response_input(generation_dict, message))
        payload = json.loads(response.output_text)
        updated_screens = payload.get("updated_screens") or []
        for screen in updated_screens:
            screen["html"] = sanitize_generated_html(screen.get("html", ""))
            yield f"data: {json.dumps({'event': 'screen_updated', 'data': screen})}\n\n"

        all_screens = list(generation["screens"] or [])
        for updated in updated_screens:
            match = next((i for i, item in enumerate(all_screens) if item.get("name") == updated.get("name")), None)
            if match is None:
                all_screens.append(updated)
            else:
                all_screens[match] = updated
        await pool.execute(
            """
            update generations
            set screens = $2::jsonb, design_system = coalesce($3::jsonb, design_system),
                num_screens = $4, openai_response_id = $5
            where id = $1
            """,
            generation_id,
            all_screens,
            payload.get("design_system_changes") if payload.get("design_system_changes") else None,
            len(all_screens),
            response.id,
        )
        await pool.execute(
            """
            insert into design_messages (generation_id, role, content, updated_screens, openai_response_id)
            values ($1, 'user', $2, null, $3), ($1, 'assistant', $4, $5::jsonb, $3)
            """,
            generation_id,
            message,
            response.id,
            payload.get("message", "Updated the design."),
            updated_screens,
        )
        yield f"data: {json.dumps({'event': 'done', 'data': {'updated_count': len(updated_screens), 'openai_response_id': response.id}})}\n\n"

    return EventSourceResponse(stream())
