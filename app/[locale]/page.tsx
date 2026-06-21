import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import DemoCta from "@/components/demo-cta";
import SocialProof from "@/components/social-proof";
import SetupService from "@/components/setup-service";
import Stats from "@/components/stats";
import FeaturesBento from "@/components/features-bento";
import AiIntegration from "@/components/ai-integration";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import Founder from "@/components/founder";
import CookieBanner from "@/components/cookie-banner";
import Footer from "@/components/footer";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return {
    title: locale === "de"
      ? "Pestly — KI-Telefonassistent für Schädlingsbekämpfung"
      : "Pestly — AI Phone Assistant for Pest Control",
    description: dict.hero.subtitle.replace(/<[^>]*>/g, ""),
    alternates: {
      languages: {
        "de": "/de",
        "en": "/en",
      },
    },
  };
}

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DemoCta />
      <SocialProof />
      <SetupService />
      <Stats />
      <FeaturesBento />
      <AiIntegration />
      <Testimonials />
      <Faq />
      <Founder />
      <CookieBanner />
      <Footer />
    </main>
  );
}
