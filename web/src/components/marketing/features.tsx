import { Braces, Layers, RadioTower, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: Array<{ title: string; description: string; Icon: LucideIcon }> = [
  { title: "RAG-Powered Design", description: "Searches a design-pattern knowledge base before generating screens.", Icon: Layers },
  { title: "Agent Workflows", description: "Runs critique, competitor analysis, and accessibility audits.", Icon: Workflow },
  { title: "API-First", description: "Use VibeUI from the dashboard or programmatically with scoped API keys.", Icon: Braces },
  { title: "Real-Time Streaming", description: "Watch design steps and screens arrive through SSE.", Icon: RadioTower },
];

export function Features() {
  return (
    <section id="features" className="border-y border-slate-200 bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-4">
        {features.map(({ title, description, Icon }) => (
          <article key={title} className="rounded-lg border border-slate-200 p-5">
            <Icon className="h-5 w-5 text-slate-900" />
            <h2 className="mt-4 font-semibold text-slate-950">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
