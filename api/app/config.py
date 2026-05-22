"""Application settings.

Defaults keep imports and tests usable without private credentials. Live
integration endpoints still validate required settings at call time.
"""

from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    database_url: str = "postgresql://postgres:postgres@localhost:54322/postgres"
    supabase_url: str = ""
    supabase_jwks_url: str = ""
    supabase_jwt_audience: str = "authenticated"
    openai_api_key: str = ""
    cors_origins: str = "http://localhost:3000"
    port: int = 8000
    environment: str = "development"
    rate_limit_per_minute: int = 10
    free_generations_per_month: int = 10
    pro_generations_per_month: int = 100
    team_generations_per_month: int = 500
    openai_model: str = "gpt-4o"
    embedding_model: str = "text-embedding-3-small"
    app_version: str = "1.0.0"
    api_key_prefix: str = Field(default="vui_live_", min_length=1)

    @property
    def cors_origin_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]

    @property
    def jwks_url(self) -> str:
        if self.supabase_jwks_url:
            return self.supabase_jwks_url
        if self.supabase_url:
            return f"{self.supabase_url.rstrip('/')}/auth/v1/.well-known/jwks.json"
        return ""

    def generation_limit_for_plan(self, plan: str) -> int:
        return {
            "free": self.free_generations_per_month,
            "pro": self.pro_generations_per_month,
            "team": self.team_generations_per_month,
        }.get(plan, self.free_generations_per_month)


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()

