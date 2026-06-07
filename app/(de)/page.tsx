import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import ProblemSection from "@/components/sections/problem-section";
import HowItWorks from "@/components/sections/how-it-works";
import FeaturesSection from "@/components/sections/features-section";
import UspBar from "@/components/sections/usp-bar";
import PricingSection from "@/components/sections/pricing-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CalculatorSection from "@/components/sections/calculator-section";
import FaqSection from "@/components/sections/faq-section";
import CtaSection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <UspBar />
      <PricingSection />
      <TestimonialsSection />
      <CalculatorSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
