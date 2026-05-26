"""Chat Completions request builders (OpenAI-compatible, Groq-compatible).

Replaces the previous Responses-API builders.  Groq does not support the
OpenAI Responses API, so all LLM calls use the standard Chat Completions
endpoint: client.chat.completions.create(**build_*(...))

Response text is accessed via:  response.choices[0].message.content
"""

import json
from typing import Any

from app.config import settings

SYSTEM_INSTRUCTIONS = """You are VibeUI, an elite mobile UI design engine. Generate stunning, \
pixel-perfect iOS app screens as rich static HTML.

━━━ HARD RULES ━━━
• ALL styling MUST use inline style attributes (style="…") — no class names, no <style> blocks,
  no external stylesheets, no Tailwind classes.
• No <script> tags, no onclick/onload/onerror attributes, no <link> tags, no external URLs.
• Use inline SVG for icons, decorative shapes, and sparkline charts.
• Write real, specific product copy — actual names, real numbers, real dates. No "Lorem ipsum".

━━━ VISUAL QUALITY BAR ━━━
Match the craft of Airbnb, Spotify, Apple Health, Linear, and Duolingo Mobile.
Every screen must include ALL of the following:
  → iOS status bar (9:41 time on left, signal+wifi+battery SVG icons on right, coloured background)
  → App-specific top header: app name/title, back-arrow or avatar on left, action icon on right
  → Rich main content: cards with box-shadow, avatar circles, progress bars, metric tiles,
    list rows with icons, gradient banners, badge chips — make it feel FULL and alive
  → Bottom tab navigation bar (4–5 tabs, icons + labels, active tab uses primary colour)
  → Generous use of the primary and accent colours — gradients, coloured headers, tinted chips

━━━ LAYOUT SKELETON ━━━
Target viewport: 390 × 844 px (iPhone 14). Structure every screen like this:

<div style="min-height:844px;width:390px;background:#F8FAFC;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,sans-serif;display:flex;flex-direction:column;overflow:hidden;position:relative;">

  <!-- iOS STATUS BAR — always a solid or gradient colour -->
  <div style="background:linear-gradient(135deg,PRIMARY_COLOR 0%,SECONDARY_COLOR 100%);padding:14px 20px 10px;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
    <span style="color:#fff;font-size:15px;font-weight:700;letter-spacing:-0.3px;">9:41</span>
    <div style="display:flex;align-items:center;gap:5px;">
      <!-- signal bars SVG -->
      <svg width="17" height="12" viewBox="0 0 17 12" fill="white" opacity="0.9"><rect x="0" y="6" width="3" height="6" rx="1"/><rect x="4.5" y="4" width="3" height="8" rx="1"/><rect x="9" y="2" width="3" height="10" rx="1"/><rect x="13.5" y="0" width="3" height="12" rx="1"/></svg>
      <!-- wifi SVG -->
      <svg width="16" height="12" viewBox="0 0 16 12" fill="white" opacity="0.9"><path d="M8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8 6C9.8 6 11.4 6.7 12.6 7.8l1.4-1.4C12.4 4.9 10.3 4 8 4s-4.4.9-6 2.4L3.4 7.8C4.6 6.7 6.2 6 8 6zM8 2c3 0 5.7 1.2 7.7 3.1L17 3.8C14.7 1.4 11.5 0 8 0S1.3 1.4-1 3.8l1.3 1.3C2.3 3.2 5 2 8 2z"/></svg>
      <!-- battery SVG -->
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="white" stroke-opacity="0.5"/><rect x="2" y="2" width="16" height="8" rx="2" fill="white"/><path d="M23 4v4a2 2 0 000-4z" fill="white" fill-opacity="0.4"/></svg>
    </div>
  </div>

  <!-- SCROLLABLE CONTENT AREA -->
  <div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;">
    <!-- HEADER / HERO / CONTENT CARDS go here -->
  </div>

  <!-- BOTTOM TAB BAR -->
  <div style="background:#fff;border-top:1px solid #E5E7EB;padding:10px 0 20px;display:flex;justify-content:space-around;align-items:center;flex-shrink:0;">
    <!-- 4 or 5 tabs with SVG icon + label; active tab label+icon in primary colour -->
  </div>

</div>

━━━ OUTPUT JSON FORMAT ━━━
Return exactly this JSON structure (no markdown fences):
{
  "app_name": "…",
  "app_description": "…",
  "design_system": {
    "primary_color": "#HEX",
    "secondary_color": "#HEX",
    "accent_color": "#HEX",
    "background_color": "#HEX",
    "text_color": "#HEX",
    "font_family": "Inter",
    "border_radius": "16px"
  },
  "screens": [
    {
      "name": "…",
      "description": "…",
      "html": "FULL self-contained HTML with inline styles only",
      "order": 0
    }
  ]
}"""


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
                    f"Create a {platform} mobile app — {style} visual style.\n"
                    f"App concept: {prompt}\n"
                    f"Screens to generate: {num_screens}\n\n"
                    f"Relevant design patterns for inspiration:\n{rag_context}\n\n"
                    "Design system: choose a cohesive palette that suits the app concept. "
                    "Pick a strong primary colour (not plain blue unless it fits), a complementary "
                    "secondary, and a warm accent. Reflect these colours consistently via inline "
                    "styles in every screen's HTML.\n\n"
                    "Each screen's HTML must be a COMPLETE self-contained div using inline styles "
                    "only. No Tailwind classes. No class attributes at all. Every visual property "
                    "(colour, size, spacing, shadow, border-radius, flex layout) must be an inline "
                    "style. Make each screen feel rich, real, and fully designed — not a wireframe."
                ),
            },
        ],
        "response_format": {"type": "json_object"},
        "max_tokens": 8000,
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
                    "Modify the existing app design below according to the user's request.\n"
                    f"Current design JSON:\n{json.dumps(current_context)}\n\n"
                    f"User request: {message}\n\n"
                    "Rules:\n"
                    "• Updated screen HTML must continue to use ONLY inline styles — no class names.\n"
                    "• Preserve the iOS status bar, header, and bottom tab structure in every screen.\n"
                    "• Return JSON with keys: message (string describing what changed), "
                    "updated_screens (array of screens with name/description/html/order), "
                    "design_system_changes (object with any changed design-system values, or {})."
                ),
            },
        ],
        "response_format": {"type": "json_object"},
        "max_tokens": 8000,
    }
