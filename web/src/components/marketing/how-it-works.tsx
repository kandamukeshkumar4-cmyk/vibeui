import {
  Lightbulb,
  MousePointerClick,
  Repeat2,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: Array<{
  number: string;
  accent: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
}> = [
  {
    number: "01",
    accent: "#3b82f6",
    Icon: Lightbulb,
    title: "Describe your vision",
    description:
      "Type a natural-language prompt describing your app, audience, and style. Rough notes work just as well as detailed specs.",
    badge: "Any idea",
  },
  {
    number: "02",
    accent: "#8b5cf6",
    Icon: Rocket,
    title: "AI builds the UI",
    description:
      "Our model generates complete, pixel-ready screens — layouts, typography, color palettes, and realistic content — in under 10 seconds.",
    badge: "Under 10s",
  },
  {
    number: "03",
    accent: "#06b6d4",
    Icon: Repeat2,
    title: "Iterate in plain English",
    description:
      "Ask for changes conversationally. Swap themes, resize elements, regenerate individual screens. No Figma skills required.",
    badge: "Unlimited revisions",
  },
  {
    number: "04",
    accent: "#10b981",
    Icon: MousePointerClick,
    title: "Export and ship",
    description:
      "Copy screen specs, share a live preview link, or hit the API to integrate VibeUI into your own product pipeline and move faster.",
    badge: "API ready",
  },
];

export function HowItWorks() {
  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      {/* Background grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            How it works
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From idea to shipped UI
            <br />
            <span className="text-slate-500">in four simple steps</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            No design background needed. No tool to learn. Just describe what
            you want — VibeUI handles the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-6 md:grid-cols-4">
          {/* Connector line (desktop only) */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] hidden h-px bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-emerald-500/30 md:block" />

          {steps.map(({ number, accent, Icon, title, description, badge }) => (
            <div
              key={number}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div
                className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
                style={{
                  background: `${accent}18`,
                  border: `1px solid ${accent}40`,
                  boxShadow: `0 0 20px ${accent}20`,
                }}
              >
                <Icon className="h-6 w-6" style={{ color: accent }} />
                {/* Number badge */}
                <span
                  className="absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ background: accent }}
                >
                  {number.replace("0", "")}
                </span>
              </div>

              {/* Inline badge */}
              <span
                className="mb-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: `${accent}18`,
                  color: accent,
                  border: `1px solid ${accent}30`,
                }}
              >
                {badge}
              </span>

              <h3 className="mb-2 text-base font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm leading-6 text-slate-400">{description}</p>
            </div>
          ))}
        </div>

        {/* Bottom transformation callout */}
        <div
          className="mt-16 rounded-2xl border border-white/10 p-8 text-center"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <p className="text-lg font-semibold text-white">
            Before VibeUI:{" "}
            <span className="text-slate-500">days of design work</span>
            {"  ·  "}
            After VibeUI:{" "}
            <span className="text-blue-400">10 seconds to a real UI</span>
          </p>
          <p className="mt-2 text-sm text-slate-500">
            The same result. 99% less time. Zero design skills required.
          </p>
        </div>
      </div>
    </section>
  );
}
