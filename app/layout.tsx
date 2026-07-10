import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Geist_Mono } from "next/font/google";
import Analytics from "@/components/analytics";
import MotionProvider from "@/components/motion-provider";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/dictionaries";
import { siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KI-Telefonassistent für Schädlingsbekämpfung | Pestly",
    template: "%s | Pestly",
  },
  description:
    "Pestly beantwortet Anrufe, WhatsApp, SMS und E-Mails für Schädlingsbekämpfer — bucht Termine und leitet Notfälle weiter.",
  icons: {
    icon: [{ url: "/pestly-icon.svg", type: "image/svg+xml" }, { url: "/pestly-icon.png" }],
    apple: "/pestly-icon.png",
  },
  openGraph: {
    siteName,
    type: "website",
  },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

function resolveLang(headerLocale: string | null): Locale {
  if (headerLocale && (locales as readonly string[]).includes(headerLocale)) {
    return headerLocale as Locale;
  }
  return defaultLocale;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const lang = resolveLang(headerList.get("x-pestly-locale"));

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[300] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#FB4C01] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FB4C01]"
        >
          Zum Hauptinhalt springen
        </a>
        <MotionProvider>
          {children}
          <Analytics />
        </MotionProvider>
      </body>
    </html>
  );
}
