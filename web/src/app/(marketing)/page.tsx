import { DesignStream } from "@/components/design/design-stream";
import { Features } from "@/components/marketing/features";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { PricingCards } from "@/components/marketing/pricing-cards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <section id="demo" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight text-slate-950">Live demo</h2>
        <DesignStream />
      </section>
      <HowItWorks />
      <PricingCards />
    </>
  );
}
