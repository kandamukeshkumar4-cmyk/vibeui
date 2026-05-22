"""In-memory rate limiting for single-instance Railway deployment."""

from slowapi import Limiter
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)

