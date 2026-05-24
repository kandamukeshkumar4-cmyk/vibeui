"""Simple multi-step agent workflows."""

from __future__ import annotations

import time
from datetime import UTC, datetime
from typing import Any

import asyncpg

from app.core.openai_client import get_openai_client


async def _step(name: str, prompt: str) -> dict[str, Any]:
    started = time.perf_counter()
    client = get_openai_client()
    from app.config import settings

    response = await client.chat.completions.create(
        model=settings.active_llm_model,
        messages=[
            {"role": "system", "content": "You are a practical senior product designer. Be concise and actionable."},
            {"role": "user", "content": prompt},
        ],
    )
    output = response.choices[0].message.content or ""
    return {
        "name": name,
        "status": "completed",
        "input": {"prompt_length": len(prompt)},
        "output": {"text": output},
        "duration_ms": int((time.perf_counter() - started) * 1000),
    }


async def run_agent_workflow(pool: asyncpg.Pool, workflow_type: str, input_data: dict[str, Any], user_id: str | None) -> dict[str, Any]:
    run = await pool.fetchrow(
        """
        insert into agent_runs (user_id, workflow_type, status, input, steps)
        values ($1, $2, 'running', $3::jsonb, '[]'::jsonb)
        returning *
        """,
        user_id,
        workflow_type,
        input_data,
    )
    run_id = run["id"]

    try:
        if workflow_type == "competitor_analysis":
            app_concept = input_data.get("app_concept", "")
            prompts = [
                ("identify_competitors", f"Identify real competitors and UX patterns for: {app_concept}"),
                ("suggest_differentiators", f"Suggest UI differentiators for this concept: {app_concept}"),
            ]
        else:
            generation_id = input_data.get("generation_id")
            generation = await pool.fetchrow("select * from generations where id = $1", generation_id)
            if generation is None:
                raise ValueError("generation_id is required and must exist")
            if workflow_type == "design_critique":
                prompts = [
                    ("analyze_design", f"Critique this app design: {generation['screens']}"),
                    ("recommend_improvements", "Give prioritized improvements for the critique."),
                ]
            elif workflow_type == "accessibility_audit":
                prompts = [
                    ("audit_accessibility", f"Audit this HTML for WCAG 2.1 AA issues: {generation['screens']}"),
                    ("generate_fixes", "Provide concrete accessibility fixes."),
                ]
            else:
                raise ValueError(f"Unknown workflow type: {workflow_type}")

        steps = [await _step(name, prompt) for name, prompt in prompts]
        output = {step["name"]: step["output"]["text"] for step in steps}
        updated = await pool.fetchrow(
            """
            update agent_runs
            set status = 'completed', steps = $2::jsonb, output = $3::jsonb, completed_at = $4
            where id = $1
            returning *
            """,
            run_id,
            steps,
            output,
            datetime.now(UTC),
        )
        return dict(updated)
    except Exception as exc:
        failed = await pool.fetchrow(
            """
            update agent_runs
            set status = 'failed', error_message = $2, completed_at = $3
            where id = $1
            returning *
            """,
            run_id,
            str(exc),
            datetime.now(UTC),
        )
        return dict(failed)
