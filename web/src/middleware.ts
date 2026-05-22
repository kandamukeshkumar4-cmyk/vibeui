import type { NextRequest } from "next/server";
import { updateSession } from "./proxy";

export async function middleware(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: ["/dashboard/:path*", "/playground/:path*", "/projects/:path*", "/api-keys/:path*", "/history/:path*", "/agents/:path*", "/settings/:path*"],
};
