import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import DemoCta from "@/components/demo-cta";
import SetupService from "@/components/setup-service";
import FeaturesBento from "@/components/features-bento";
import AiIntegration from "@/components/ai-integration";
import Faq from "@/components/faq";
import Founder from "@/components/founder";
import CookieBanner from "@/components/cookie-banner";
import Footer from "@/components/footer";
import { getDictionary, type Locale } from "@/lib/i18n/dictionaries";
import { buildHomeJsonLd, buildPageMetadata, serializeJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return buildPageMetadata({
    locale,
    title: dict.seo.title,
    description: dict.seo.description,
    ogImageAlt: dict.seo.ogImageAlt,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const jsonLd = buildHomeJsonLd({
    locale,
    description: dict.seo.description,
    faqItems: dict.faq.items,
  });

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <DemoCta />
      <SetupService />
      <section className="relative w-full px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-bold" style={{ fontSize: "var(--text-heading)" }}>
            {dict.stats.headingBefore}{" "}
            <span className="text-[oklch(0.65_0.25_30)]">{dict.stats.headingHighlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">{dict.stats.subtitle}</p>
        </div>
      </section>
      <FeaturesBento />
      <AiIntegration />
      <Faq />
      <Founder />
      <CookieBanner />
      <Footer />
    </main>
  );
}
