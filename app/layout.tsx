import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
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
  title: "Pestly — KI-Telefonassistent für Ihr Handwerk",
  description:
    "Pestly beantwortet Anrufe, WhatsApp, SMS und E-Mails für Ihr Handwerk — automatisch. Nie wieder einen Auftrag verpassen.",
  icons: { icon: "/pestly-icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
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
        {children}
      </body>
    </html>
  );
}
