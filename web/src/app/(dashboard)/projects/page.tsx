"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { apiFetch } from "@/lib/api-client";
import { createClient } from "@/lib/supabase/client";

interface Project {
  id: string;
  name: string;
  description: string;
  generation_count: number;
  created_at: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    async function load() {
      const { data } = await createClient().auth.getSession();
      if (!data.session?.access_token) return;
      setProjects(await apiFetch<Project[]>("/v1/projects", data.session.access_token));
    }
    load().catch(() => setProjects([]));
  }, []);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Projects</h2>
        <Link className="rounded-lg bg-slate-950 px-3 py-2 text-sm font-semibold text-white" href="/projects/new">New project</Link>
      </div>
      <div className="mt-6 divide-y divide-slate-100">
        {projects.length === 0 ? <p className="text-sm text-slate-500">Saved projects will appear here after connecting Supabase credentials.</p> : null}
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="block py-3">
            <p className="font-medium">{project.name}</p>
            <p className="text-sm text-slate-500">{project.description || `${project.generation_count} generations`}</p>
          </Link>
        ))}
      </div>
    </Card>
  );
}
