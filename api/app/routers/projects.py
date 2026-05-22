from fastapi import APIRouter, Depends, HTTPException, Request

from app.middleware.auth import require_user
from app.models.schemas import CreateProjectRequest

router = APIRouter()


@router.get("/projects")
async def list_projects(request: Request, user: dict = Depends(require_user)):
    rows = await request.app.state.pool.fetch(
        "select * from projects where user_id = $1 order by created_at desc",
        user["user_id"],
    )
    return [dict(row) for row in rows]


@router.post("/projects")
async def create_project(request: Request, body: CreateProjectRequest, user: dict = Depends(require_user)):
    row = await request.app.state.pool.fetchrow(
        """
        insert into projects (user_id, name, description)
        values ($1, $2, $3)
        returning *
        """,
        user["user_id"],
        body.name,
        body.description,
    )
    return dict(row)


@router.get("/projects/{project_id}")
async def get_project(request: Request, project_id: str, user: dict = Depends(require_user)):
    row = await request.app.state.pool.fetchrow(
        "select * from projects where id = $1 and user_id = $2",
        project_id,
        user["user_id"],
    )
    if row is None:
        raise HTTPException(status_code=404, detail="Project not found")
    generations = await request.app.state.pool.fetch(
        "select id, app_name, prompt, num_screens, created_at from generations where project_id = $1 order by created_at desc",
        project_id,
    )
    data = dict(row)
    data["generations"] = [dict(item) for item in generations]
    return data


@router.delete("/projects/{project_id}")
async def delete_project(request: Request, project_id: str, user: dict = Depends(require_user)):
    result = await request.app.state.pool.execute(
        "delete from projects where id = $1 and user_id = $2",
        project_id,
        user["user_id"],
    )
    return {"deleted": result.endswith("1")}

