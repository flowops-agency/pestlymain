import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/dictionaries";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://pestly.de";

export const siteName = "Pestly";
export const siteEmail = "info@pestly.de";

export const legalPaths = [
  "impressum",
  "datenschutz",
  "agb",
  "cookie-einstellungen",
] as const;

export type LegalPath = (typeof legalPaths)[number];

export function absoluteUrl(path = ""): string {
  if (!path) return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\//, "");
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

/** Self-referencing + reciprocal hreflang, including x-default → default locale. */
export function languageAlternates(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = localePath(locale, path);
  }
  languages["x-default"] = localePath(defaultLocale, path);
  return languages;
}

export function ogLocale(locale: Locale): string {
  return locale === "de" ? "de_DE" : "en_US";
}

export function buildPageMetadata(opts: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
}): Metadata {
  const path = opts.path ?? "";
  const canonical = localePath(opts.locale, path);
  const url = absoluteUrl(canonical);

  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName,
      locale: ogLocale(opts.locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
    ...(opts.noIndex
      ? { robots: { index: false, follow: true } }
      : undefined),
  };
}

export type FaqItem = { question: string; answer: string };

export function buildHomeJsonLd(opts: {
  locale: Locale;
  description: string;
  faqItems: FaqItem[];
}) {
  const pageUrl = absoluteUrl(localePath(opts.locale));
  const inLanguage = opts.locale === "de" ? "de-DE" : "en-US";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        email: siteEmail,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/pestly-icon.png"),
        },
        sameAs: [
          "https://x.com/pestly",
          "https://linkedin.com/company/pestly",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        inLanguage,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#software`,
        name: siteName,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: opts.description,
        url: pageUrl,
        inLanguage,
        provider: { "@id": `${siteUrl}/#organization` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          description:
            opts.locale === "de"
              ? "Kostenlose Demo verfügbar"
              : "Free demo available",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: opts.faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
