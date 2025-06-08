import { HeroLanding } from "@/components/sections/hero-landing";
import { Features } from "@/components/sections/features";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <div>
      <HeroLanding />
      <Features />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
    </div>
  );
}
