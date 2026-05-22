"use client";

import { Copy, KeyRound, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api-client";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

interface ApiKey {
  id: string;
  name: string;
  key_prefix: string;
  is_active: boolean;
  last_used_at: string | null;
  created_at: string;
  key?: string;
}

export default function ApiKeysPage() {
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [name, setName] = useState("Default");

  async function token() {
    const { data } = await createClient().auth.getSession();
    return data.session?.access_token;
  }

  async function createKey() {
    const accessToken = await token();
    if (!accessToken) return toast.error("Sign in before creating API keys.");
    const created = await apiFetch<ApiKey>("/v1/api-keys", accessToken, { method: "POST", body: JSON.stringify({ name }) });
    setKeys((current) => [created, ...current]);
  }

  async function revoke(id: string) {
    const accessToken = await token();
    if (!accessToken) return;
    await apiFetch(`/v1/api-keys/${id}`, accessToken, { method: "DELETE" });
    setKeys((current) => current.map((key) => key.id === id ? { ...key, is_active: false } : key));
  }

  useEffect(() => {
    async function load() {
      const { data } = await createClient().auth.getSession();
      const accessToken = data.session?.access_token;
      if (!accessToken) return;
      setKeys(await apiFetch<ApiKey[]>("/v1/api-keys", accessToken));
    }
    load().catch(() => setKeys([]));
  }, []);

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2"><KeyRound className="h-5 w-5" /><h2 className="text-lg font-semibold">API Keys</h2></div>
      <div className="mt-4 flex gap-2"><Input placeholder="Key name" value={name} onChange={(event) => setName(event.target.value)} /><Button onClick={createKey}>Create</Button></div>
      <div className="mt-6 space-y-3">
        {keys.length === 0 ? <p className="text-sm text-slate-500">No keys yet.</p> : null}
        {keys.map((apiKey) => (
          <div key={apiKey.id} className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm font-medium">{apiKey.name} {!apiKey.is_active ? <span className="text-red-500">revoked</span> : null}</p>
            <div className="mt-2 flex items-center justify-between rounded-lg bg-slate-50 p-3 font-mono text-xs">
              {apiKey.key || apiKey.key_prefix}
              <div className="flex gap-2">
                <button onClick={() => { navigator.clipboard.writeText(apiKey.key || apiKey.key_prefix); toast.success("Copied"); }}><Copy className="h-4 w-4" /></button>
                <button onClick={() => revoke(apiKey.id)}><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
