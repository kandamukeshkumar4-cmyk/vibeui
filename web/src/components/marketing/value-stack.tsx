import { MessageSquare, Share2, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  marketingCard,
  marketingEyebrow,
  marketingH2,
  marketingLead,
} from "@/lib/marketing-styles";

type Feature = {
  Icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  stat: string;
  statLabel: string;
};

const features: Feature[] = [
  {
    Icon: Zap,
    eyebrow: "Instant",
    title: "Idea to screen in seconds",
    body: "Type a prompt — natural language, rough notes, anything. VibeUI generates a complete, pixel-ready mobile UI before you finish reading this sentence.",
    stat: "<10s",
    statLabel: "avg generation time",
  },
  {
    Icon: MessageSquare,
    eyebrow: "Conversational",
    title: "Refine with plain English",
    body: 'No Figma skills needed. Say "make the header bigger" or "switch to dark mode" and watch your design update in real time.',
    stat: "∞",
    statLabel: "revisions, no extra cost",
  },
  {
    Icon: Share2,
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
  const { Icon, eyebrow, title, body, stat, statLabel } = feat;
  return (
    <div
      className={`${marketingCard} flex flex-col ${large ? "justify-between p-8 md:row-span-2" : "gap-4 p-7"}`}
    >
      <div>
        <div
          className={`${large ? "mb-5 h-12 w-12" : "mb-3 h-10 w-10"} inline-flex items-center justify-center rounded-xl border border-border bg-[rgba(28,28,28,0.04)]`}
        >
          <Icon className={large ? "h-5 w-5" : "h-4 w-4"} />
        </div>

        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted">
          {eyebrow}
        </p>
        <h3
          className={`${large ? "mb-3 text-xl" : "mb-2 text-base"} font-semibold text-foreground`}
        >
          {title}
        </h3>
        <p className="text-sm leading-6 text-muted">{body}</p>
      </div>

      <div
        className={`rounded-lg border border-border bg-[rgba(28,28,28,0.04)] ${large ? "mt-8 py-5 text-center" : "self-start px-4 py-2"}`}
      >
        <span
          className={`font-semibold tracking-[-0.02em] text-foreground ${large ? "block text-4xl" : "text-xl"}`}
        >
          {stat}
        </span>
        <span className={`text-xs text-muted ${large ? "mt-1 block" : "ml-2"}`}>
          {statLabel}
        </span>
      </div>
    </div>
  );
}

export function ValueStack() {
  return (
    <section id="features" className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <p className={marketingEyebrow}>Why VibeUI</p>
          <h2 className={marketingH2}>The AI-native design stack</h2>
          <p className={marketingLead}>
            Everything you need to go from concept to shippable UI — without
            hiring a design team.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
          <FeatureTile feat={features[0]} large />
          <FeatureTile feat={features[1]} />
          <FeatureTile feat={features[2]} />
        </div>
      </div>
    </section>
  );
}
