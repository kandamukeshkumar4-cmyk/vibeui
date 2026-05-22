"""API request and response schemas."""

from __future__ import annotations

from datetime import datetime
from typing import Any, Literal

from pydantic import BaseModel, Field


class GenerateRequest(BaseModel):
    prompt: str = Field(..., min_length=5, max_length=2000)
    num_screens: int = Field(default=5, ge=1, le=10)
    style: str = Field(default="modern", max_length=40)
    platform: Literal["ios", "android", "both"] = "ios"
    project_id: str | None = None


class ScreenOutput(BaseModel):
    name: str
    description: str
    html: str
    order: int


class DesignSystemOutput(BaseModel):
    primary_color: str
    secondary_color: str
    accent_color: str
    background_color: str
    text_color: str
    font_family: str
    border_radius: str


class ChatRequest(BaseModel):
    generation_id: str
    message: str = Field(..., min_length=1, max_length=1000)


class CreateProjectRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    description: str = Field(default="", max_length=500)


class CreateApiKeyRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=50)


class AgentRunRequest(BaseModel):
    workflow_type: Literal["design_critique", "competitor_analysis", "accessibility_audit"]
    input: dict[str, Any]


class HealthResponse(BaseModel):
    status: str
    version: str
    environment: str


class UsageResponse(BaseModel):
    plan: str
    generations_this_month: int
    generation_limit: int
    total_generations: int
    total_projects: int
    api_keys_count: int


class GenerationSummary(BaseModel):
    id: str
    prompt: str
    app_name: str
    app_description: str
    num_screens: int
    created_at: datetime

