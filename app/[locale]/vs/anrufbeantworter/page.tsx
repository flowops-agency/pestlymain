import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContentPageView from "@/components/content-page";
import { getContentPage } from "@/lib/content-pages";
import type { Locale } from "@/lib/i18n/dictionaries";
import {
  absoluteUrl,
  buildPageMetadata,
  localePath,
  serializeJsonLd,
  siteName,
  siteUrl,
} from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };
const path = "vs/anrufbeantworter" as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const page = getContentPage(locale, path);
  return buildPageMetadata({
    locale,
    title: page.title,
    description: page.description,
    path,
  });
}

export default async function VsAnrufbeantworterPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const page = getContentPage(locale, path);
  const homeLabel = locale === "de" ? "Start" : "Home";
  const pageUrl = absoluteUrl(localePath(locale, path));
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
            name: page.h1,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        headline: page.h1,
        description: page.description,
        author: { "@type": "Organization", name: siteName, url: siteUrl },
        publisher: { "@type": "Organization", name: siteName, url: siteUrl },
        mainEntityOfPage: pageUrl,
        inLanguage: locale === "de" ? "de-DE" : "en-US",
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
      <ContentPageView page={page} homeLabel={homeLabel} />
      <Footer />
    </main>
  );
}
