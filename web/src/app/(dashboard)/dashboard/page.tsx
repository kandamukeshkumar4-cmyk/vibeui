"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { apiFetch } from "@/lib/api-client";
import { createClient } from "@/lib/supabase/client";

interface Usage {
  total_generations: number;
  total_projects: number;
  api_keys_count: number;
  generations_this_month: number;
  generation_limit: number;
}

export default function DashboardPage() {
  const [usage, setUsage] = useState<Usage | null>(null);

  useEffect(() => {
    async function loadUsage() {
      const { data } = await createClient().auth.getSession();
      const token = data.session?.access_token;
      if (!token) return;
      setUsage(await apiFetch<Usage>("/v1/usage", token));
    }
    loadUsage().catch(() => setUsage(null));
  }, []);

  const stats = [
    ["Generations", String(usage?.total_generations ?? 0)],
    ["Projects", String(usage?.total_projects ?? 0)],
    ["API Keys", String(usage?.api_keys_count ?? 0)],
    ["This month", `${usage?.generations_this_month ?? 0} / ${usage?.generation_limit ?? 10}`],
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([label, value]) => (
          <Card key={label} className="p-5"><p className="text-sm text-slate-500">{label}</p><p className="mt-2 text-3xl font-semibold">{value}</p></Card>
        ))}
      </div>
      <Card className="p-6">
        <h2 className="text-lg font-semibold">Quick actions</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white" href="/playground">New generation</Link>
          <Link className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold" href="/projects/new">Create project</Link>
          <Link className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold" href="/api-keys">Get API key</Link>
        </div>
      </Card>
    </div>
  );
}
