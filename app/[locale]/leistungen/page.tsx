import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LocalizedLink from "@/components/localized-link";
import type { Locale } from "@/lib/i18n/dictionaries";
import {
  absoluteUrl,
  buildPageMetadata,
  localePath,
  serializeJsonLd,
} from "@/lib/seo";
import { getServicesHub, servicePath } from "@/lib/service-pages";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const hub = getServicesHub(locale);
  return buildPageMetadata({
    locale,
    title: hub.title,
    description: hub.description,
    path: "leistungen",
  });
}

export default async function LeistungenHubPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const hub = getServicesHub(locale);
  const homeLabel = locale === "de" ? "Start" : "Home";
  const articlesLabel = locale === "de" ? "Wissen" : "Guides";
  const pageUrl = absoluteUrl(localePath(locale, "leistungen"));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: hub.h1,
    description: hub.description,
    url: pageUrl,
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Navbar />
      <article className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
            <LocalizedLink href="/" className="hover:text-[#171717]">
              {homeLabel}
            </LocalizedLink>
            <span className="px-1">/</span>
            <span className="text-[#171717]">{hub.h1}</span>
          </nav>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#171717]">
            {hub.h1}
          </h1>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-600">
            {hub.intro}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {hub.cards.map((card) => (
              <LocalizedLink
                key={card.slug}
                href={`/${servicePath(card.slug)}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-[#171717]">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{card.blurb}</p>
                <span className="mt-4 inline-block text-sm font-medium text-[#FB4C01]">
                  {locale === "de" ? "Mehr erfahren →" : "Learn more →"}
                </span>
              </LocalizedLink>
            ))}
          </div>

          <section className="mt-14 border-t border-gray-200 pt-8">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
              {articlesLabel}
            </h2>
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
              <li>
                <LocalizedLink
                  href="/ki-telefonassistent"
                  className="text-sm font-medium text-[#FB4C01] hover:underline"
                >
                  {locale === "de"
                    ? "KI-Telefonassistent erklärt"
                    : "AI phone assistant explained"}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink
                  href="/vs/anrufbeantworter"
                  className="text-sm font-medium text-[#FB4C01] hover:underline"
                >
                  {locale === "de"
                    ? "Vs. Anrufbeantworter"
                    : "Vs voicemail"}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink
                  href="/dsgvo-ki-telefonie"
                  className="text-sm font-medium text-[#FB4C01] hover:underline"
                >
                  {locale === "de"
                    ? "DSGVO & KI-Telefonie"
                    : "Privacy & AI telephony"}
                </LocalizedLink>
              </li>
            </ul>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
