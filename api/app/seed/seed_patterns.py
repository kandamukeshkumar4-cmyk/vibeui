"""Seed design patterns.

Usage:
  uv run python -m app.seed.seed_patterns
  uv run python -m app.seed.seed_patterns --patterns-file path/to/patterns.json
"""

from __future__ import annotations

import argparse
import asyncio
import json
from pathlib import Path

import asyncpg

from app.config import settings
from app.core.rag import create_embeddings_batch


def _default_patterns_path() -> Path:
    return Path(__file__).with_name("design_patterns.json")


async def seed(patterns_file: Path) -> None:
    patterns = json.loads(patterns_file.read_text(encoding="utf-8"))
    texts = [
        f"{p['name']}. {p['description']}. {p['category']} {p.get('subcategory', '')}. "
        f"Use cases: {', '.join(p.get('use_cases', []))}. Tags: {', '.join(p.get('tags', []))}"
        for p in patterns
    ]
    embeddings = await create_embeddings_batch(texts)
    conn = await asyncpg.connect(settings.database_url)
    try:
        for pattern, embedding in zip(patterns, embeddings, strict=True):
            await conn.execute(
                """
                insert into design_patterns (slug, category, subcategory, name, description, use_cases, code_template, tags, embedding)
                values ($1,$2,$3,$4,$5,$6,$7,$8,$9::vector)
                on conflict (slug) do update set
                  category = excluded.category,
                  subcategory = excluded.subcategory,
                  name = excluded.name,
                  description = excluded.description,
                  use_cases = excluded.use_cases,
                  code_template = excluded.code_template,
                  tags = excluded.tags,
                  embedding = excluded.embedding
                """,
                pattern["slug"],
                pattern["category"],
                pattern.get("subcategory", ""),
                pattern["name"],
                pattern["description"],
                pattern.get("use_cases", []),
                pattern["code_template"],
                pattern.get("tags", []),
                embedding,
            )
    finally:
        await conn.close()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--patterns-file", type=Path, default=_default_patterns_path())
    args = parser.parse_args()
    asyncio.run(seed(args.patterns_file))


if __name__ == "__main__":
    main()
