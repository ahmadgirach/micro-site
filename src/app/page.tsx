import { HeroLanding } from "@/components/sections/hero-landing";
import { Features } from "@/components/sections/features";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { NavbarLanding } from "@/components/shared/navbar-landing";
import { FooterLanding } from "@/components/shared/footer-landing";

export default function Home() {
  return (
    <div>
      <NavbarLanding />
      <HeroLanding />
      <Features />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
      <FooterLanding />
    </div>
  );
}
