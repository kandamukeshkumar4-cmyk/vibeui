import { ArrowRight, Lightbulb, MousePointerClick, Repeat2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: Array<{
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}> = [
  {
    number: "01",
    title: "Describe your idea",
    description: "Type a natural-language prompt — 'a fitness app with dark mode and animated charts' — as specific or vague as you like.",
    Icon: Lightbulb,
  },
  {
    number: "02",
    title: "AI designs it instantly",
    description: "Our model generates complete, pixel-ready mobile screens with layouts, colors, typography, and realistic content.",
    Icon: Rocket,
  },
  {
    number: "03",
    title: "Iterate in seconds",
    description: "Ask for changes in plain English, swap color palettes, or regenerate individual screens until the design is exactly right.",
    Icon: Repeat2,
  },
  {
    number: "04",
    title: "Export and ship",
    description: "Copy screen specs, share a preview link, or call the API to integrate VibeUI into your own product pipeline.",
    Icon: MousePointerClick,
  },
];

export function HowItWorks() {
  return (
    <section id="demo" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-600">How it works</p>
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            From prompt to product in minutes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
            Four simple steps — no design background, no Figma license, no friction.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-6 md:grid-cols-4">
          {/* Connector line (desktop only) */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] hidden h-px bg-slate-200 md:block" />

          {steps.map(({ number, title, description, Icon }, index) => (
            <div key={number} className="relative flex flex-col items-center text-center">
              {/* Step badge */}
              <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-violet-100 bg-white shadow-sm">
                <Icon className="h-6 w-6 text-violet-600" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-950">{title}</h3>
              <p className="text-sm leading-6 text-slate-500">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-16 flex justify-center">
          <a
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-violet-200 hover:bg-violet-700 transition-colors"
          >
            Start for free <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
