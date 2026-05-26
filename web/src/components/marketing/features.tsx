import { Braces, Layers, RadioTower, Sparkles, Wand2, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  bg: string;
}> = [
  {
    title: "AI-Powered Generation",
    description: "Describe any app concept in plain English and watch fully-formed screens appear in seconds — no design experience needed.",
    Icon: Sparkles,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    title: "RAG Design Intelligence",
    description: "Every generation is backed by a curated knowledge base of design patterns, ensuring results that are both beautiful and usable.",
    Icon: Layers,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "One-Click Iteration",
    description: "Not happy with a result? Tweak the prompt or regenerate with a single click. Iterate until it's exactly right.",
    Icon: Wand2,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    title: "Agent Workflows",
    description: "Automated critique, accessibility audits, and competitor analysis agents run in the background to refine every screen.",
    Icon: Workflow,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Real-Time Streaming",
    description: "Watch your UI materialize step by step through live streaming — no waiting for a batch job to finish.",
    Icon: RadioTower,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "API-First Platform",
    description: "Integrate VibeUI directly into your workflow with scoped API keys and a clean REST interface.",
    Icon: Braces,
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">Features</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need to ship faster
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            VibeUI combines AI generation, design intelligence, and iteration tools into one seamless workflow.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, Icon, color, bg }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-violet-500/30 hover:bg-white/8 hover:shadow-lg hover:shadow-violet-900/20"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/20 border border-violet-500/20">
                <Icon className="h-5 w-5 text-violet-400" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
