"""Chat Completions request builders (OpenAI-compatible, Groq-compatible).

Replaces the previous Responses-API builders.  Groq does not support the
OpenAI Responses API, so all LLM calls use the standard Chat Completions
endpoint: client.chat.completions.create(**build_*(...))

Response text is accessed via:  response.choices[0].message.content
"""

import json
from typing import Any

from app.config import settings

SYSTEM_INSTRUCTIONS = """You are VibeUI's design engine.
Return production-quality static mobile app UI. Generated previews must be static HTML/CSS only:
no script tags, no event-handler attributes, no external links, no external resources.
Prefer accessible semantic markup and realistic product copy."""


def build_generate_response_input(
    prompt: str,
    num_screens: int,
    style: str,
    platform: str,
    rag_context: str,
) -> dict[str, Any]:
    """Build a Chat Completions payload for full design generation."""
    return {
        "model": settings.active_llm_model,
        "messages": [
            {"role": "system", "content": SYSTEM_INSTRUCTIONS},
            {
                "role": "user",
                "content": (
                    f"Design a {platform} mobile app in a {style} style.\n"
                    f"Prompt: {prompt}\n"
                    f"Number of screens: {num_screens}\n\n"
                    f"Relevant design patterns:\n{rag_context}\n\n"
                    "Return JSON with keys app_name, app_description, design_system, screens. "
                    "Each screen must have name, description, html, order."
                ),
            },
        ],
        "response_format": {"type": "json_object"},
    }


def build_chat_response_input(generation: dict[str, Any], message: str) -> dict[str, Any]:
    """Build a Chat Completions payload for iterative design chat."""
    current_context = {
        "app_name": generation.get("app_name"),
        "app_description": generation.get("app_description"),
        "design_system": generation.get("design_system"),
        "screens": generation.get("screens"),
    }
    return {
        "model": settings.active_llm_model,
        "messages": [
            {"role": "system", "content": SYSTEM_INSTRUCTIONS},
            {
                "role": "user",
                "content": (
                    "Modify this existing generated app design.\n"
                    f"Current generation JSON:\n{json.dumps(current_context)}\n\n"
                    f"User request: {message}\n"
                    "Return JSON with keys: message, updated_screens, design_system_changes."
                ),
            },
        ],
        "response_format": {"type": "json_object"},
    }
