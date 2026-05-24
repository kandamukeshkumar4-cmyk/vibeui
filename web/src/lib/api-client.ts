const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === "development" ? "http://localhost:8000" : "");

function getApiUrl() {
  if (!API_URL) {
    throw new Error("API backend is not configured. Set NEXT_PUBLIC_API_URL for this deployment.");
  }
  return API_URL.replace(/\/$/, "");
}

export interface GenerateRequest {
  prompt: string;
  num_screens?: number;
  style?: string;
  platform?: "ios" | "android" | "both";
  project_id?: string;
}

export interface SSEEvent<T = unknown> {
  event: string;
  data: T;
}

async function streamJson(response: Response, onEvent: (event: SSEEvent) => void) {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail || "Request failed");
  }
  const reader = response.body?.getReader();
  if (!reader) throw new Error("No response body");
  const decoder = new TextDecoder();
  let buffer = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, "\n");
    const parts = buffer.split("\n\n");
    buffer = parts.pop() || "";
    for (const part of parts) {
      const line = part.split("\n").find((item) => item.startsWith("data: "));
      if (!line) continue;
      onEvent(JSON.parse(line.slice(6)));
    }
  }
}

export async function generateDesign(
  request: GenerateRequest,
  onEvent: (event: SSEEvent) => void,
  token?: string,
  onWarmingUp?: () => void,
) {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const url = `${getApiUrl()}/v1/generate`;
  const body = JSON.stringify(request);

  let response = await fetch(url, { method: "POST", headers, body });

  // Render free tier cold-starts return 503 while the instance wakes up.
  // Retry once after a short delay so the user doesn't see a silent failure.
  if (response.status === 503) {
    onWarmingUp?.();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    response = await fetch(url, { method: "POST", headers, body });
  }

  await streamJson(response, onEvent);
}

export async function chatIterate(generationId: string, message: string, onEvent: (event: SSEEvent) => void, token?: string) {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(`${getApiUrl()}/v1/chat`, { method: "POST", headers, body: JSON.stringify({ generation_id: generationId, message }) });
  await streamJson(response, onEvent);
}

export async function apiFetch<T>(path: string, token?: string, init?: RequestInit): Promise<T> {
  const headers = new Headers(init?.headers);
  headers.set("Content-Type", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);
  const response = await fetch(`${getApiUrl()}${path}`, { ...init, headers, cache: "no-store" });
  if (!response.ok) throw new Error((await response.text()) || "API request failed");
  return response.json();
}
