import json

from app.core.designer import parse_sse_payload
from app.core.rag import build_rag_context
from app.core.responses import build_chat_response_input


def test_parse_sse_payload_reads_data_events():
    event = 'data: {"event":"done","data":{"id":"abc"}}\n\n'

    parsed = parse_sse_payload(event)

    assert parsed == {"event": "done", "data": {"id": "abc"}}


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


def test_build_chat_response_input_resends_developer_instructions_and_previous_id():
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

    assert request["previous_response_id"] == "resp_previous"
    assert "developer" in request["input"][0]["role"]
    assert "Make it darker" in json.dumps(request["input"])
