import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import { LocaleProvider } from "@/lib/i18n/locale-context";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <LocaleProvider locale={locale as Locale} dict={dict}>
      {children}
    </LocaleProvider>
  );
}
