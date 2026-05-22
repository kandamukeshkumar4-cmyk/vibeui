"""OpenAI Responses API request builders."""

import json
from typing import Any

DEVELOPER_INSTRUCTIONS = """You are VibeUI's design engine.
Return production-quality static mobile app UI. Generated previews must be static HTML/CSS only:
no script tags, no event-handler attributes, no external links, no external resources.
Prefer accessible semantic markup and realistic product copy."""


def build_chat_response_input(generation: dict[str, Any], message: str) -> dict[str, Any]:
    current_context = {
        "app_name": generation.get("app_name"),
        "app_description": generation.get("app_description"),
        "design_system": generation.get("design_system"),
        "screens": generation.get("screens"),
    }
    return {
        "model": "gpt-4o",
        "previous_response_id": generation.get("openai_response_id"),
        "input": [
            {"role": "developer", "content": DEVELOPER_INSTRUCTIONS},
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
        "text": {"format": {"type": "json_object"}},
    }


def build_generate_response_input(prompt: str, num_screens: int, style: str, platform: str, rag_context: str) -> dict[str, Any]:
    return {
        "model": "gpt-4o",
        "input": [
            {"role": "developer", "content": DEVELOPER_INSTRUCTIONS},
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
        "text": {"format": {"type": "json_object"}},
    }

