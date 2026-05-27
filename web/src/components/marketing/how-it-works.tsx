import {
  Lightbulb,
  MousePointerClick,
  Repeat2,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  marketingCard,
  marketingEyebrow,
  marketingH2,
  marketingLead,
} from "@/lib/marketing-styles";

const steps: Array<{
  number: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
}> = [
  {
    number: "01",
    Icon: Lightbulb,
    title: "Describe your vision",
    description:
      "Type a natural-language prompt describing your app, audience, and style. Rough notes work just as well as detailed specs.",
    badge: "Any idea",
  },
  {
    number: "02",
    Icon: Rocket,
    title: "AI builds the UI",
    description:
      "Our model generates complete, pixel-ready screens — layouts, typography, color palettes, and realistic content — in under 10 seconds.",
    badge: "Under 10s",
  },
  {
    number: "03",
    Icon: Repeat2,
    title: "Iterate in plain English",
    description:
      'Ask for changes conversationally. Swap themes, resize elements, regenerate individual screens. No Figma skills required.',
    badge: "Unlimited revisions",
  },
  {
    number: "04",
    Icon: MousePointerClick,
    title: "Export and ship",
    description:
      "Copy screen specs, share a live preview link, or hit the API to integrate VibeUI into your own product pipeline and move faster.",
    badge: "API ready",
  },
];

export function HowItWorks() {
  return (
    <section id="demo" className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <p className={marketingEyebrow}>How it works</p>
          <h2 className={marketingH2}>
            From idea to shipped UI
            <br />
            <span className="text-muted">in four simple steps</span>
          </h2>
          <p className={marketingLead}>
            No design background needed. No tool to learn. Just describe what
            you want — VibeUI handles the rest.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] hidden h-px bg-border md:block" />

          {steps.map(({ number, Icon, title, description, badge }) => (
            <div
              key={number}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-[rgba(28,28,28,0.04)]">
                <Icon className="h-6 w-6 text-foreground" />
                <span className="absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-[#fcfbf8]">
                  {number.replace("0", "")}
                </span>
              </div>

              <span className="mb-3 inline-block rounded-full border border-border bg-[rgba(28,28,28,0.04)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                {badge}
              </span>

              <h3 className="mb-2 text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-6 text-muted">{description}</p>
            </div>
          ))}
        </div>

        <div className={`${marketingCard} mt-16 p-8 text-center`}>
          <p className="text-lg font-medium text-foreground">
            Before VibeUI:{" "}
            <span className="text-muted">days of design work</span>
            {"  ·  "}
            After VibeUI:{" "}
            <span className="font-semibold">10 seconds to a real UI</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            The same result. 99% less time. Zero design skills required.
          </p>
        </div>
      </div>
    </section>
  );
}
