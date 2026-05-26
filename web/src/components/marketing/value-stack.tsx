import { MessageSquare, Share2, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  Icon: LucideIcon;
  accent: string;
  glow: string;
  eyebrow: string;
  title: string;
  body: string;
  stat: string;
  statLabel: string;
};

const features: Feature[] = [
  {
    Icon: Zap,
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.08)",
    eyebrow: "Instant",
    title: "Idea to screen in seconds",
    body: "Type a prompt — natural language, rough notes, anything. VibeUI generates a complete, pixel-ready mobile UI before you finish reading this sentence.",
    stat: "<10s",
    statLabel: "avg generation time",
  },
  {
    Icon: MessageSquare,
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.08)",
    eyebrow: "Conversational",
    title: "Refine with plain English",
    body: "No Figma skills needed. Say \"make the header bigger\" or \"switch to dark mode\" and watch your design update in real time.",
    stat: "∞",
    statLabel: "revisions, no extra cost",
  },
  {
    Icon: Share2,
    accent: "#10b981",
    glow: "rgba(16,185,129,0.08)",
    eyebrow: "Export anywhere",
    title: "Ship to any destination",
    body: "Copy specs, grab a shareable preview link, or hit the API to drop VibeUI into your own pipeline. Design is just the start.",
    stat: "API",
    statLabel: "ready out of the box",
  },
];

function FeatureTile({
  feat,
  large = false,
}: {
  feat: Feature;
  large?: boolean;
}) {
  const { Icon, accent, glow, eyebrow, title, body, stat, statLabel } = feat;
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border flex flex-col ${large ? "p-8 justify-between md:row-span-2" : "p-7 gap-4"}`}
      style={{
        borderColor: `${accent}30`,
        background: glow,
      }}
    >
      {/* Corner glow */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-2xl opacity-35"
        style={{ background: accent }}
      />

      <div className="relative">
        {/* Icon */}
        <div
          className={`${large ? "mb-5" : "mb-3"} inline-flex ${large ? "h-12 w-12" : "h-10 w-10"} items-center justify-center rounded-xl`}
          style={{
            background: `${accent}20`,
            border: `1px solid ${accent}35`,
          }}
        >
          <Icon
            className={large ? "h-5 w-5" : "h-4 w-4"}
            style={{ color: accent }}
          />
        </div>

        <p
          className="mb-1 text-xs font-bold uppercase tracking-widest"
          style={{ color: accent }}
        >
          {eyebrow}
        </p>
        <h3
          className={`${large ? "mb-3 text-xl" : "mb-2 text-base"} font-bold text-white`}
        >
          {title}
        </h3>
        <p className="text-sm leading-6 text-slate-400">{body}</p>
      </div>

      {/* Stat */}
      <div
        className={`relative ${large ? "mt-8 py-5 text-center" : "self-start py-2 px-4"} rounded-xl`}
        style={{
          background: `${accent}12`,
          border: `1px solid ${accent}25`,
        }}
      >
        <span
          className={`font-black ${large ? "text-4xl tracking-tight block" : "text-xl"}`}
          style={{ color: accent }}
        >
          {stat}
        </span>
        <span
          className={`text-xs text-slate-500 ${large ? "mt-1 block" : "ml-2"}`}
        >
          {statLabel}
        </span>
      </div>
    </div>
  );
}

export function ValueStack() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Blue glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(ellipse,#3b82f6 0%,transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Why VibeUI
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The AI-native design stack
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Everything you need to go from concept to shippable UI — without
            hiring a design team.
          </p>
        </div>

        {/* Bento grid: 1 large left + 2 stacked right */}
        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
          <FeatureTile feat={features[0]} large />
          <FeatureTile feat={features[1]} />
          <FeatureTile feat={features[2]} />
        </div>
      </div>
    </section>
  );
}
