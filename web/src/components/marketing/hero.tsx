"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { btnGhost, btnPrimary } from "@/lib/marketing-styles";
import {
  HeroFeaturedPhone,
  MARQUEE_PHONES,
  PhoneFrame,
  SHOWCASE_PHONES,
} from "./phone-showcase";

export function Hero() {
  const featured = SHOWCASE_PHONES[0];
  const sideLeft = SHOWCASE_PHONES[1];
  const sideRight = SHOWCASE_PHONES[2];

  return (
    <section className="relative overflow-hidden hero-wash">
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Copy */}
          <div className="marketing-reveal text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              AI-native mobile design
            </div>

            <h1 className="font-serif text-5xl font-semibold tracking-[-0.03em] text-foreground sm:text-[3.25rem] sm:leading-[1.05]">
              App screens that look shipped, not sketched
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted lg:mx-0">
              VibeUI generates full mobile interfaces — cards, maps, tab bars, real
              content hierarchy — ready for your team to build on.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link href="/signup" className={btnPrimary}>
                Start creating <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#demo" className={btnGhost}>
                View examples
              </a>
            </div>

            <div className="mx-auto mt-8 max-w-lg lg:mx-0">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-white/80 px-4 py-3.5 text-left shadow-[0_4px_20px_rgba(28,28,28,0.06)] backdrop-blur-sm">
                <span className="flex-1 text-sm text-muted">
                  A premium fintech app with virtual card, spending insights, and iOS tab navigation...
                </span>
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-foreground">
                  <ArrowRight className="h-4 w-4 text-[#fcfbf8]" />
                </div>
              </div>
            </div>
          </div>

          {/* Featured phones */}
          <div className="relative flex items-center justify-center min-h-[420px] marketing-reveal-delayed">
            <div className="absolute left-0 top-8 hidden opacity-90 sm:block lg:left-2">
              <PhoneFrame phone={sideLeft} width={160} />
            </div>
            <div className="absolute right-0 top-12 hidden opacity-90 sm:block lg:right-2">
              <PhoneFrame phone={sideRight} width={160} />
            </div>
            <HeroFeaturedPhone phone={featured} />
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative mt-4 overflow-hidden pb-24 pt-4">
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 sm:w-40"
          style={{ background: "linear-gradient(to right, #f7f4ed, transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 sm:w-40"
          style={{ background: "linear-gradient(to left, #f7f4ed, transparent)" }}
        />

        <div
          className="marquee-track flex gap-8"
          style={{ width: "max-content", paddingLeft: 16 }}
        >
          {MARQUEE_PHONES.map((phone, i) => (
            <PhoneFrame key={`${phone.id}-${i}`} phone={phone} width={188} />
          ))}
        </div>
      </div>
    </section>
  );
}
