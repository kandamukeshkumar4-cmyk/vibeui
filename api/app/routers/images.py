"""POST /v1/generate-image — Direct NIM image generation endpoint.

Lets the frontend request individual images for any purpose:
  - app icons / logos
  - screen hero images
  - placeholder replacement
  - standalone image generation

Also exposes POST /v1/enhance-screens which takes an existing generation ID
and injects NIM images into all its screens.
"""

from __future__ import annotations

import asyncio
from typing import Literal

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field

from app.core.nim_images import (
    generate_image,
    generate_screen_images,
    inject_images_into_html,
)
from app.middleware.auth import get_optional_user
from app.utils.supabase import get_supabase

router = APIRouter()


# ── Request / Response schemas ───────────────────────────────────────────────

class ImageGenerateRequest(BaseModel):
    prompt: str = Field(..., min_length=3, max_length=500)
    context: str = Field(
        default="default",
        description="Style context: product, fitness, food, travel, avatar, hero, fashion, social, default",
    )
    size: Literal["square", "portrait", "landscape", "wide"] = "square"
    steps: int = Field(default=4, ge=1, le=20)


class ImageGenerateResponse(BaseModel):
    data_url: str
    model: str
    prompt: str


class EnhanceScreensRequest(BaseModel):
    generation_id: str = Field(..., description="ID of a saved generation to enhance with real images")
    images_per_screen: int = Field(default=2, ge=1, le=4)


class EnhanceScreensResponse(BaseModel):
    generation_id: str
    screens_enhanced: int
    images_generated: int


# ── Endpoints ────────────────────────────────────────────────────────────────

@router.post("/generate-image", response_model=ImageGenerateResponse)
async def generate_single_image(
    body: ImageGenerateRequest,
    user: dict | None = Depends(get_optional_user),
):
    """Generate a single image via NVIDIA NIM FLUX.1.

    Works authenticated and unauthenticated (public demo).
    Returns a base64 data URL ready to use in <img src="..."/>.
    """
    from app.config import settings

    data_url = await generate_image(
        prompt=body.prompt,
        context=body.context,
        size=body.size,
        steps=body.steps,
    )
    return ImageGenerateResponse(
        data_url=data_url,
        model=settings.nim_image_model,
        prompt=body.prompt,
    )


@router.post("/enhance-screens", response_model=EnhanceScreensResponse)
async def enhance_screens_with_images(
    body: EnhanceScreensRequest,
    user: dict | None = Depends(get_optional_user),
):
    """Take an existing saved generation and replace all gray placeholder divs
    with real NIM-generated images. Updates the generation in Supabase.

    Call this after /v1/generate completes to upgrade a design with real images.
    """
    sb = get_supabase()

    gen = sb.table("generations").select("*").eq("id", body.generation_id).single().execute()
    if not gen.data:
        raise HTTPException(status_code=404, detail="Generation not found")

    generation = gen.data
    screens: list[dict] = generation.get("screens", [])
    app_name: str = generation.get("app_name", "App")

    enhanced_screens = []
    total_images = 0

    # Generate images for each screen in parallel batches of 3
    async def enhance_one(screen: dict) -> dict:
        nonlocal total_images
        imgs = await generate_screen_images(
            screen_name=screen.get("name", "Screen"),
            screen_description=screen.get("description", ""),
            app_name=app_name,
            count=body.images_per_screen,
        )
        enhanced_html = inject_images_into_html(screen.get("html", ""), imgs)
        total_images += len(imgs)
        return {**screen, "html": enhanced_html}

    # Process in batches of 3 to avoid overwhelming the API
    batch_size = 3
    for i in range(0, len(screens), batch_size):
        batch = screens[i : i + batch_size]
        results = await asyncio.gather(*[enhance_one(s) for s in batch])
        enhanced_screens.extend(results)

    # Save enhanced screens back to DB
    sb.table("generations").update({"screens": enhanced_screens}).eq(
        "id", body.generation_id
    ).execute()

    return EnhanceScreensResponse(
        generation_id=body.generation_id,
        screens_enhanced=len(enhanced_screens),
        images_generated=total_images,
    )


@router.get("/nim-models")
async def list_nim_models():
    """List available NVIDIA NIM image generation models."""
    return {
        "models": [
            {
                "id": "black-forest-labs/flux-1-schnell",
                "name": "FLUX.1 Schnell",
                "description": "Fast, high quality. Best for real-time generation. (Default)",
                "steps_recommended": 4,
                "default": True,
            },
            {
                "id": "black-forest-labs/flux-1-dev",
                "name": "FLUX.1 Dev",
                "description": "Higher quality, slower. Best for final renders.",
                "steps_recommended": 20,
                "default": False,
            },
            {
                "id": "stabilityai/stable-diffusion-xl-base-1.0",
                "name": "Stable Diffusion XL",
                "description": "Classic SDXL. Wide style range.",
                "steps_recommended": 30,
                "default": False,
            },
            {
                "id": "stabilityai/sdxl-turbo",
                "name": "SDXL Turbo",
                "description": "Very fast SDXL variant.",
                "steps_recommended": 1,
                "default": False,
            },
        ]
    }
