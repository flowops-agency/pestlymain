import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServicePageView from "@/components/service-page-view";
import type { Locale } from "@/lib/i18n/dictionaries";
import {
  absoluteUrl,
  buildPageMetadata,
  localePath,
  serializeJsonLd,
  siteName,
  siteUrl,
} from "@/lib/seo";
import {
  getServicePage,
  isServiceSlug,
  servicePath,
  serviceSlugs,
} from "@/lib/service-pages";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isServiceSlug(slug)) return {};
  const locale = raw as Locale;
  const page = getServicePage(locale, slug);
  return buildPageMetadata({
    locale,
    title: page.title,
    description: page.description,
    path: servicePath(slug),
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isServiceSlug(slug)) notFound();
  const locale = raw as Locale;
  const page = getServicePage(locale, slug);
  const homeLabel = locale === "de" ? "Start" : "Home";
  const hubLabel = locale === "de" ? "Leistungen" : "Services";
  const termsLabel = locale === "de" ? "Begriffe" : "Terms";
  const pageUrl = absoluteUrl(localePath(locale, servicePath(slug)));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: homeLabel,
            item: absoluteUrl(localePath(locale)),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: hubLabel,
            item: absoluteUrl(localePath(locale, "leistungen")),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.h1,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        name: page.h1,
        description: page.description,
        provider: { "@type": "Organization", name: siteName, url: siteUrl },
        url: pageUrl,
        areaServed: locale === "de" ? "DE" : "US",
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Navbar />
      <ServicePageView
        page={page}
        homeLabel={homeLabel}
        hubLabel={hubLabel}
        termsLabel={termsLabel}
      />
      <Footer />
    </main>
  );
}
