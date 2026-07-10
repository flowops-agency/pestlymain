import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getDictionary, type Locale } from "@/lib/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import TermsContent from "./content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return buildPageMetadata({
    locale,
    title: `${dict.terms.title} | Pestly`,
    description: dict.seo.termsDescription,
    path: "agb",
  });
}

export default async function AgbPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return (
    <main>
      <Navbar />
      <TermsContent dict={dict.terms} />
      <Footer />
    </main>
  );
}
