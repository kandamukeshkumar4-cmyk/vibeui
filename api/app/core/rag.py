"""Embedding search and RAG context formatting."""

import asyncpg

from app.config import settings
from app.core.openai_client import get_openai_client


async def create_embedding(text: str) -> list[float]:
    client = get_openai_client()
    response = await client.embeddings.create(input=text, model=settings.embedding_model)
    return response.data[0].embedding


async def create_embeddings_batch(texts: list[str]) -> list[list[float]]:
    client = get_openai_client()
    response = await client.embeddings.create(input=texts, model=settings.embedding_model)
    return [item.embedding for item in response.data]


async def search_design_patterns(
    pool: asyncpg.Pool,
    query: str,
    top_k: int = 5,
    threshold: float = 0.35,
    category: str | None = None,
    tags: list[str] | None = None,
) -> list[dict]:
    embedding = await create_embedding(query)
    rows = await pool.fetch(
        """
        select * from match_design_patterns($1::vector, $2, $3, $4, $5)
        """,
        embedding,
        top_k,
        threshold,
        category,
        tags,
    )
    return [dict(row) for row in rows]


def build_rag_context(patterns: list[dict]) -> str:
    if not patterns:
        return "No specific design patterns matched. Use general mobile UI best practices."

    blocks = []
    for index, pattern in enumerate(patterns, start=1):
        blocks.append(
            f"--- Pattern {index}: {pattern['name']} (Category: {pattern['category']}) ---\n"
            f"Description: {pattern['description']}\n"
            f"Use cases: {', '.join(pattern.get('use_cases') or [])}\n"
            f"HTML/CSS Template:\n{pattern['code_template']}\n"
        )
    return "\n".join(blocks)

