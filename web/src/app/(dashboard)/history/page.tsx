"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { apiFetch } from "@/lib/api-client";
import { createClient } from "@/lib/supabase/client";

interface Generation {
  id: string;
  prompt: string;
  app_name: string;
  num_screens: number;
  created_at: string;
}

export default function HistoryPage() {
  const [generations, setGenerations] = useState<Generation[]>([]);
  useEffect(() => {
    async function load() {
      const { data } = await createClient().auth.getSession();
      if (!data.session?.access_token) return;
      setGenerations(await apiFetch<Generation[]>("/v1/generations", data.session.access_token));
    }
    load().catch(() => setGenerations([]));
  }, []);

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold">Generation history</h2>
      <div className="mt-4 divide-y divide-slate-100">
        {generations.length === 0 ? <p className="text-sm text-slate-500">All saved generations appear here.</p> : null}
        {generations.map((generation) => (
          <article key={generation.id} className="py-3">
            <p className="font-medium">{generation.app_name || "Untitled app"}</p>
            <p className="text-sm text-slate-500">{generation.num_screens} screens - {generation.prompt}</p>
          </article>
        ))}
      </div>
    </Card>
  );
}
