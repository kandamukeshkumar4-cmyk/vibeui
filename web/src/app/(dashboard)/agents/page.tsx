"use client";

import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api-client";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { toast } from "sonner";

export default function AgentsPage() {
  const [workflow, setWorkflow] = useState("design_critique");
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string>("");

  async function run() {
    const { data } = await createClient().auth.getSession();
    const token = data.session?.access_token;
    if (!token) return toast.error("Sign in before running agents.");
    const input = workflow === "competitor_analysis" ? { app_concept: value } : { generation_id: value };
    const response = await apiFetch<{ output?: Record<string, string> }>("/v1/agents/run", token, {
      method: "POST",
      body: JSON.stringify({ workflow_type: workflow, input }),
    });
    setResult(JSON.stringify(response.output ?? response, null, 2));
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2"><Bot className="h-5 w-5" /><h2 className="text-lg font-semibold">Agent workflows</h2></div>
      <div className="mt-4 grid gap-3 md:grid-cols-[240px_1fr_auto]">
        <select value={workflow} onChange={(event) => setWorkflow(event.target.value)} className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm">
          <option value="design_critique">Design Critique</option>
          <option value="competitor_analysis">Competitor Analysis</option>
          <option value="accessibility_audit">Accessibility Audit</option>
        </select>
        <Input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Generation ID or app concept" />
        <Button onClick={run}>Run</Button>
      </div>
      {result ? <pre className="mt-4 overflow-auto rounded-lg bg-slate-950 p-4 text-xs text-white">{result}</pre> : null}
    </Card>
  );
}
