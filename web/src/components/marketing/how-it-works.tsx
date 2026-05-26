import { Lightbulb, MousePointerClick, Repeat2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: Array<{
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}> = [
  {
    number: "01",
    title: "Describe Your App",
    description:
      "Type a natural-language prompt — describe your app concept, target audience, and desired style. Be as specific or as broad as you like.",
    Icon: Lightbulb,
  },
  {
    number: "02",
    title: "AI Generation",
    description:
      "Our AI model instantly generates complete, pixel-ready mobile screens with layouts, colors, typography, and realistic content tailored to your vision.",
    Icon: Rocket,
  },
  {
    number: "03",
    title: "Refine & Iterate",
    description:
      "Ask for changes in plain English, swap color palettes, or regenerate individual screens until every detail is exactly right.",
    Icon: Repeat2,
  },
  {
    number: "04",
    title: "Export Your Design",
    description:
      "Copy screen specs, share a preview link, or call the API to integrate VibeUI into your own product pipeline and ship faster.",
    Icon: MousePointerClick,
  },
];

export function HowItWorks() {
  return (
    <section id="demo" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            How it works
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Transform your app ideas into beautiful UI designs in just a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-6 md:grid-cols-4">
          {/* Connector line (desktop only) */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] hidden h-px bg-white/10 md:block" />

          {steps.map(({ number, title, description, Icon }, index) => (
            <div key={number} className="relative flex flex-col items-center text-center">
              {/* Step badge */}
              <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-sm">
                <Icon className="h-6 w-6 text-blue-400" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
