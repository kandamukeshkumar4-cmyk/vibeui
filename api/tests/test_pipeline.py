import json

from app.core.designer import parse_sse_payload
from app.core.rag import build_rag_context
from app.core.responses import build_chat_response_input


def test_parse_sse_payload_reads_data_events():
    # Old wire format: sse_starlette-wrapped string with "data: " prefix.
    event = 'data: {"event":"done","data":{"id":"abc"}}\n\n'

    parsed = parse_sse_payload(event)

    assert parsed == {"event": "done", "data": {"id": "abc"}}


def test_parse_sse_payload_reads_bare_json():
    # New format from sse_event(): bare JSON without the "data: " prefix.
    # parse_sse_payload must handle both so generate.py can inspect events
    # before they are wrapped by EventSourceResponse.
    event = '{"event":"done","data":{"id":"abc"}}'

    parsed = parse_sse_payload(event)

    assert parsed == {"event": "done", "data": {"id": "abc"}}


def test_sse_event_returns_bare_json():
    from app.core.designer import sse_event

    result = sse_event("step_start", {"message": "ok"})

    # Must be valid JSON without any "data: " prefix or trailing newlines.
    parsed = json.loads(result)
    assert parsed == {"event": "step_start", "data": {"message": "ok"}}
    assert not result.startswith("data: ")


def test_build_rag_context_formats_ranked_patterns():
    context = build_rag_context(
        [
            {
                "name": "Bottom Tabs",
                "category": "navigation",
                "description": "Mobile tab navigation",
                "use_cases": ["fitness", "social"],
                "code_template": "<nav>...</nav>",
            }
        ]
    )

    assert "Pattern 1: Bottom Tabs" in context
    assert "Mobile tab navigation" in context
    assert "<nav>...</nav>" in context


def test_build_chat_response_input_uses_chat_completions_format():
    request = build_chat_response_input(
        generation={
            "app_name": "FitFlow",
            "app_description": "Fitness planning app",
            "design_system": {"primary_color": "#0ea5e9"},
            "screens": [{"name": "Home", "html": "<div>Home</div>"}],
            "openai_response_id": "resp_previous",
        },
        message="Make it darker",
    )

    # Chat Completions format: messages list, response_format, no previous_response_id
    assert "messages" in request
    assert "previous_response_id" not in request
    assert request["response_format"] == {"type": "json_object"}
    assert request["messages"][0]["role"] == "system"
    assert "Make it darker" in json.dumps(request["messages"])
