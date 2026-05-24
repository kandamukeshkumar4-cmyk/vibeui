"""NVIDIA NIM image generation module.

Uses FLUX.1-Schnell (default) via the NVIDIA Inference Microservices API.
Returns base64-encoded PNG images suitable for embedding directly in HTML as data URLs.

Available models (set NIM_IMAGE_MODEL env var to switch):
  black-forest-labs/flux-1-schnell   — fast, great quality (default)
  black-forest-labs/flux-1-dev       — higher quality, slower
  stabilityai/stable-diffusion-xl-base-1.0
  stabilityai/sdxl-turbo             — very fast SDXL
"""

from __future__ import annotations

import base64
import re
from typing import Literal

import httpx

from app.config import settings


# ── Prompt templates per image context ──────────────────────────────────────

CONTEXT_PROMPTS: dict[str, str] = {
    "product":      "professional product photo, clean white background, studio lighting, high quality",
    "hero":         "cinematic wide shot, beautiful natural lighting, lifestyle photography",
    "avatar":       "professional headshot portrait, neutral background, friendly expression",
    "food":         "delicious food photography, overhead shot, vibrant colors, restaurant quality",
    "fitness":      "athletic lifestyle photography, gym or outdoor setting, energetic, dynamic",
    "travel":       "beautiful travel photography, scenic landscape, golden hour lighting",
    "fashion":      "fashion editorial photo, clean background, professional model",
    "social":       "candid lifestyle photography, natural lighting, authentic moment",
    "map":          "aerial city view, urban landscape, clean and modern",
    "chart":        "clean data visualization, modern design, minimal style",
    "default":      "high quality photography, clean composition, professional lighting",
}

SIZE_MAP: dict[str, str] = {
    "square":    "1024x1024",
    "portrait":  "832x1216",
    "landscape": "1216x832",
    "wide":      "1344x768",
}


async def generate_image(
    prompt: str,
    context: str = "default",
    size: Literal["square", "portrait", "landscape", "wide"] = "square",
    steps: int = 4,
) -> str:
    """Generate an image via NVIDIA NIM and return a base64 data URL.

    Args:
        prompt:  Description of the image content (app-specific, e.g. "running shoes product")
        context: Image context category — controls the style suffix appended to the prompt
        size:    Aspect ratio preset
        steps:   Inference steps (4 is ideal for flux-1-schnell; more = slower + sharper)

    Returns:
        A data URL string: "data:image/png;base64,<b64>"
        Falls back to a placeholder SVG on error so screens never break.
    """
    if not settings.nvidia_api_key:
        return _placeholder_svg(prompt)

    style_suffix = CONTEXT_PROMPTS.get(context, CONTEXT_PROMPTS["default"])
    full_prompt = f"{prompt}, {style_suffix}"
    img_size = SIZE_MAP.get(size, settings.nim_image_size)

    payload = {
        "model": settings.nim_image_model,
        "prompt": full_prompt,
        "n": 1,
        "size": img_size,
        "response_format": "b64_json",
        "extra_body": {"num_inference_steps": steps},
    }

    headers = {
        "Authorization": f"Bearer {settings.nvidia_api_key}",
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    try:
        async with httpx.AsyncClient(timeout=60.0) as client:
            response = await client.post(
                f"{settings.nvidia_base_url}/images/generations",
                json=payload,
                headers=headers,
            )
            response.raise_for_status()
            data = response.json()
            b64 = data["data"][0]["b64_json"]
            return f"data:image/png;base64,{b64}"

    except Exception as exc:
        # Never crash a screen generation because of image failure
        return _placeholder_svg(prompt, error=str(exc)[:80])


async def generate_screen_images(
    screen_name: str,
    screen_description: str,
    app_name: str,
    count: int = 3,
) -> list[str]:
    """Generate multiple images for a single screen in parallel.

    Used by the design pipeline to populate image placeholders.
    Returns a list of base64 data URLs.
    """
    import asyncio

    context = _infer_context(screen_name, screen_description)
    prompts = _build_screen_prompts(screen_name, screen_description, app_name, count)

    tasks = [
        generate_image(p, context=context, size="portrait" if i == 0 else "square")
        for i, p in enumerate(prompts)
    ]
    return await asyncio.gather(*tasks)


def inject_images_into_html(html: str, images: list[str]) -> str:
    """Replace gray placeholder divs in generated HTML with real NIM images.

    Matches common Tailwind placeholder patterns:
      - <div class="... bg-gray-200 ..."></div>
      - <div class="... h-48 bg-gray-... ..."></div>

    Replaces up to len(images) placeholders in document order.
    """
    if not images:
        return html

    # Pattern: empty divs with bg-gray-* or bg-zinc-* that look like image placeholders
    placeholder_pattern = re.compile(
        r'<div\s+([^>]*(?:bg-gray-\d+|bg-zinc-\d+|bg-slate-\d+)[^>]*h-\d+[^>]*)>\s*</div>|'
        r'<div\s+([^>]*h-\d+[^>]*(?:bg-gray-\d+|bg-zinc-\d+|bg-slate-\d+)[^>]*)>\s*</div>',
        re.IGNORECASE,
    )

    image_iter = iter(images)
    replaced = 0

    def replacer(match: re.Match) -> str:
        nonlocal replaced
        try:
            img_src = next(image_iter)
            replaced += 1
            classes = (match.group(1) or match.group(2) or "").strip()
            # Extract just the sizing classes
            size_classes = " ".join(
                c for c in classes.split()
                if any(c.startswith(p) for p in ("h-", "w-", "rounded", "overflow", "flex-shrink"))
            )
            return (
                f'<div class="{size_classes} overflow-hidden">'
                f'<img src="{img_src}" class="w-full h-full object-cover" alt="" loading="lazy"/>'
                f'</div>'
            )
        except StopIteration:
            return match.group(0)

    result = placeholder_pattern.sub(replacer, html)
    return result


# ── Helpers ─────────────────────────────────────────────────────────────────

def _infer_context(screen_name: str, description: str) -> str:
    text = (screen_name + " " + description).lower()
    if any(w in text for w in ["product", "item", "shop", "store", "buy", "cart"]):
        return "product"
    if any(w in text for w in ["food", "recipe", "restaurant", "meal", "eat"]):
        return "food"
    if any(w in text for w in ["fitness", "workout", "gym", "exercise", "run", "sport"]):
        return "fitness"
    if any(w in text for w in ["travel", "trip", "destination", "hotel", "flight"]):
        return "travel"
    if any(w in text for w in ["profile", "avatar", "user", "account", "person"]):
        return "avatar"
    if any(w in text for w in ["hero", "welcome", "onboard", "splash"]):
        return "hero"
    if any(w in text for w in ["fashion", "style", "clothing", "outfit"]):
        return "fashion"
    if any(w in text for w in ["social", "feed", "post", "community"]):
        return "social"
    return "default"


def _build_screen_prompts(
    screen_name: str,
    description: str,
    app_name: str,
    count: int,
) -> list[str]:
    base = f"{app_name} app {screen_name}"
    prompts = [
        f"{base} main image, {description[:80]}",
        f"{base} secondary image, supporting visual",
        f"{base} background or texture element",
    ]
    return prompts[:count]


def _placeholder_svg(label: str, error: str = "") -> str:
    """Return a simple SVG placeholder when NIM is unavailable."""
    safe_label = label[:30].replace('"', "'")
    return (
        "data:image/svg+xml;base64,"
        + base64.b64encode(
            f'<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">'
            f'<rect width="400" height="300" fill="#e5e7eb"/>'
            f'<text x="200" y="150" font-family="sans-serif" font-size="14" '
            f'fill="#9ca3af" text-anchor="middle">{safe_label}</text>'
            f"</svg>".encode()
        ).decode()
    )
