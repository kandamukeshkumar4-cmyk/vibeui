"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { apiFetch } from "@/lib/api-client";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function NewProjectPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function createProject() {
    const { data } = await createClient().auth.getSession();
    const token = data.session?.access_token;
    if (!token) return toast.error("Sign in before creating a project.");
    await apiFetch("/v1/projects", token, { method: "POST", body: JSON.stringify({ name, description }) });
    router.push("/projects");
  }

  return (
    <Card className="max-w-xl p-6">
      <h2 className="text-lg font-semibold">Create project</h2>
      <div className="mt-4 space-y-3">
        <Input placeholder="Project name" value={name} onChange={(event) => setName(event.target.value)} />
        <Textarea placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
        <Button onClick={createProject} disabled={!name.trim()}>Create project</Button>
      </div>
    </Card>
  );
}
