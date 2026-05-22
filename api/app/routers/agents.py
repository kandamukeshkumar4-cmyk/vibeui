from fastapi import APIRouter, Depends, HTTPException, Request

from app.core.agents import run_agent_workflow
from app.middleware.auth import require_user
from app.models.schemas import AgentRunRequest

router = APIRouter()


@router.post("/agents/run")
async def run_agent(request: Request, body: AgentRunRequest, user: dict = Depends(require_user)):
    result = await run_agent_workflow(request.app.state.pool, body.workflow_type, body.input, user["user_id"])
    if result["status"] == "failed":
        raise HTTPException(status_code=400, detail=result.get("error_message", "Workflow failed"))
    return result


@router.get("/agents/runs")
async def list_agent_runs(request: Request, user: dict = Depends(require_user)):
    rows = await request.app.state.pool.fetch(
        "select * from agent_runs where user_id = $1 order by started_at desc limit 25",
        user["user_id"],
    )
    return [dict(row) for row in rows]


@router.get("/agents/runs/{run_id}")
async def get_agent_run(request: Request, run_id: str, user: dict = Depends(require_user)):
    row = await request.app.state.pool.fetchrow(
        "select * from agent_runs where id = $1 and user_id = $2",
        run_id,
        user["user_id"],
    )
    if row is None:
        raise HTTPException(status_code=404, detail="Agent run not found")
    return dict(row)

