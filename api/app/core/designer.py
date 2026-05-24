"""Design generation and SSE formatting."""

from __future__ import annotations

import json
import time
from collections.abc import AsyncIterator
from typing import Any

import asyncpg

from app.config import settings
from app.core.openai_client import get_openai_client
from app.core.preview import sanitize_generated_html
from app.core.rag import build_rag_context, search_design_patterns
from app.core.responses import build_generate_response_input


def sse_event(event_type: str, data: dict[str, Any]) -> str:
    # Return bare JSON — EventSourceResponse (sse_starlette) adds the
    # "data: " prefix and trailing "\n\n" automatically when it serialises
    # string yields.  Returning a pre-formatted "data: …\n\n" string caused
    # the wire format to become "data: data: …" (double prefix), which made
    # the frontend JSON.parse call throw a SyntaxError and screens never
    # appeared.
    return json.dumps({"event": event_type, "data": data})


def parse_sse_payload(event: str) -> dict[str, Any]:
    # Accepts both bare JSON and the full wire format ("data: {json}").
    for line in event.splitlines():
        if line.startswith("data: "):
            return json.loads(line.removeprefix("data: "))
    # Fallback: treat the whole string as bare JSON.
    return json.loads(event)


def _fallback_design(prompt: str, num_screens: int) -> dict[str, Any]:
    screens = []
    names = ["Home", "Discover", "Details", "Profile", "Settings", "Activity", "Messages", "Checkout", "Calendar", "Summary"]
    for index in range(num_screens):
        name = names[index]
        html = f"""
        <div class="min-h-screen bg-gray-50 p-4">
          <div class="rounded-2xl bg-white p-4 shadow-sm">
            <p class="text-xs text-gray-500">VibeUI preview</p>
            <h1 class="text-2xl font-bold text-gray-900">{name}</h1>
            <p class="text-sm text-gray-500">{prompt[:140]}</p>
          </div>
        </div>
        """
        screens.append({"name": name, "description": f"{name} screen for the generated app.", "html": sanitize_generated_html(html), "order": index})
    return {
        "app_name": "Vibe Concept",
        "app_description": prompt,
        "design_system": {
            "primary_color": "#2563eb",
            "secondary_color": "#0f172a",
            "accent_color": "#f97316",
            "background_color": "#f8fafc",
            "text_color": "#111827",
            "font_family": "Inter",
            "border_radius": "16px",
        },
        "screens": screens,
    }


def normalize_generation_payload(payload: dict[str, Any], prompt: str, num_screens: int) -> dict[str, Any]:
    fallback = _fallback_design(prompt, num_screens)
    design_system = payload.get("design_system") or fallback["design_system"]
    screens = payload.get("screens") or fallback["screens"]
    clean_screens = []
    for index, screen in enumerate(screens[:num_screens]):
        clean_screens.append(
            {
                "name": str(screen.get("name") or f"Screen {index + 1}"),
                "description": str(screen.get("description") or ""),
                "html": sanitize_generated_html(str(screen.get("html") or "")),
                "order": int(screen.get("order", index)),
            }
        )
    return {
        "app_name": str(payload.get("app_name") or fallback["app_name"]),
        "app_description": str(payload.get("app_description") or prompt),
        "design_system": design_system,
        "screens": clean_screens,
    }


async def generate_design(prompt: str, num_screens: int, style: str, platform: str, pool: asyncpg.Pool) -> AsyncIterator[str]:
    started = time.perf_counter()
    total_tokens = 0
    response_id = None

    try:
        yield sse_event("step_start", {"step": "search", "message": "Searching design pattern knowledge base..."})
        try:
            patterns = await search_design_patterns(pool, prompt, top_k=8)
        except Exception:
            patterns = []
        rag_context = build_rag_context(patterns)
        yield sse_event("step_complete", {"step": "search", "data": {"patterns_found": len(patterns)}})

        yield sse_event("step_start", {"step": "generate", "message": "Generating mobile app screens..."})
        client = get_openai_client()
        response = await client.chat.completions.create(
            **build_generate_response_input(prompt, num_screens, style, platform, rag_context)
        )
        response_id = response.id
        usage = getattr(response, "usage", None)
        total_tokens = getattr(usage, "total_tokens", 0) or 0
        text = response.choices[0].message.content or "{}"
        payload = json.loads(text)
        normalized = normalize_generation_payload(payload, prompt, num_screens)
    except Exception as exc:
        if settings.environment == "development":
            normalized = _fallback_design(prompt, num_screens)
            yield sse_event("warning", {"message": f"Using local fallback design: {exc}"})
        else:
            yield sse_event("error", {"message": str(exc)})
            return

    for screen in normalized["screens"]:
        yield sse_event("screen_generated", screen)

    result = {
        **normalized,
        "num_screens": len(normalized["screens"]),
        "model_used": settings.active_llm_model,
        "total_tokens": total_tokens,
        "latency_ms": int((time.perf_counter() - started) * 1000),
        "openai_response_id": response_id,
    }
    yield sse_event("done", result)
