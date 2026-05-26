import { Features } from "@/components/marketing/features";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { PricingCards } from "@/components/marketing/pricing-cards";
import { SeeInAction } from "@/components/marketing/see-in-action";
import { Showcase } from "@/components/marketing/showcase";
import { Testimonials } from "@/components/marketing/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Showcase />
      <SeeInAction />
      <Features />
      <Testimonials />
      <HowItWorks />
      <PricingCards />
      <FinalCta />
    </>
  );
}
