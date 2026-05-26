import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { SeeInAction } from "@/components/marketing/see-in-action";
import { Testimonials } from "@/components/marketing/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <SeeInAction />
      <HowItWorks />
      <FinalCta />
    </>
  );
}
