import { ArrowRight, Image, LayoutTemplate, Wand2 } from "lucide-react";
import Link from "next/link";
import {
  marketingCard,
  marketingEyebrow,
  marketingH2,
  marketingLead,
} from "@/lib/marketing-styles";
import {
  PhoneCaption,
  PhoneFrameCompact,
  PhonePreviewStage,
  SHOWCASE_PHONES,
} from "./phone-showcase";

const demos = [
  {
    Icon: Wand2,
    title: "Design from scratch",
    description:
      "Crypto dashboards, charts, watchlists, and trade flows — the kind of UI you see in shipped fintech apps.",
    tag: "Fintech",
    phone: SHOWCASE_PHONES[0],
  },
  {
    Icon: Image,
    title: "Any vertical",
    description:
      "Grocery, sports, real estate, banking, flights, retail — full screens with nav, cards, and real content density.",
    tag: "Multi-category",
    phone: SHOWCASE_PHONES[2],
  },
  {
    Icon: LayoutTemplate,
    title: "Production patterns",
    description:
      "Seat maps, property cards, mint bank cards, jewelry grids — not wireframes, actual app chrome.",
    tag: "Ship-ready",
    phone: SHOWCASE_PHONES[9],
  },
] as const;

export function SeeInAction() {
  return (
    <section id="demo" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <p className={marketingEyebrow}>See it in action</p>
          <h2 className={`${marketingH2} font-serif`}>Real apps, not placeholders</h2>
          <p className={marketingLead}>
            Every example follows your design system — editorial typography, warm
            neutrals, and patterns you would ship to the App Store.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {demos.map(({ Icon, title, description, tag, phone }) => (
            <article key={title} className={`${marketingCard} flex flex-col p-6`}>
              <PhonePreviewStage className="mb-4 min-h-[340px] flex-col">
                <PhoneFrameCompact phone={phone} width={180} />
                <PhoneCaption phone={phone} />
              </PhonePreviewStage>

              <span className="mb-3 inline-flex self-start rounded-full border border-border bg-[rgba(28,28,28,0.04)] px-2.5 py-0.5 text-xs font-semibold text-muted">
                {tag}
              </span>

              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-[rgba(28,28,28,0.04)]">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
              </div>

              <p className="flex-1 text-sm leading-6 text-muted">{description}</p>

              <Link
                href="/signup"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
              >
                Try it free <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
