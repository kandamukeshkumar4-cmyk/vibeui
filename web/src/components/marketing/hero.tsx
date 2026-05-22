import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PhoneMockup } from "@/components/design/phone-mockup";
import { sampleScreenHtml } from "@/components/design/sample-html";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1fr_360px] lg:items-center">
      <div>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          Design any app with AI
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          VibeUI turns a product idea into polished mobile screens, design-system tokens, and iteration-ready previews.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="#demo" className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-semibold text-white">
            Try live demo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/signup" className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800">
            Create account
          </Link>
        </div>
      </div>
      <div className="justify-self-center">
        <PhoneMockup html={sampleScreenHtml} screenName="Generated preview" />
      </div>
    </section>
  );
}

