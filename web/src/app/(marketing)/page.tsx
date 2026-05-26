import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { ProblemAgitate } from "@/components/marketing/problem-agitate";
import { SeeInAction } from "@/components/marketing/see-in-action";
import { Testimonials } from "@/components/marketing/testimonials";
import { ValueStack } from "@/components/marketing/value-stack";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — hook + trust signals */}
      <Hero />

      {/* 2. Success — see it working (3 generation modes) */}
      <SeeInAction />

      {/* 3. Problem-Agitate — old way is broken */}
      <ProblemAgitate />

      {/* 4. Value Stack — why VibeUI wins */}
      <ValueStack />

      {/* 5. Social Proof — testimonials */}
      <Testimonials />

      {/* 6. Transformation — how it works */}
      <HowItWorks />

      {/* 7. Secondary CTA — avatar social proof + signup */}
      <FinalCta />
    </>
  );
}
