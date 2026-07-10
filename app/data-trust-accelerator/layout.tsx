import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "../globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data Trust Accelerator: Scan, Review, Govern & Publish Trusted Data Products",
  description:
    "Turn messy files into reviewable runs. Quarantine risky rows. Publish trusted data products your team can rely on.",
  icons: { icon: "/pestly-icon.svg" },
  openGraph: {
    title: "Data Trust Accelerator",
    description:
      "Turn messy files into reviewable runs. Quarantine risky rows. Publish trusted data products.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f7a4f",
};

export default function DataTrustAcceleratorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} h-full antialiased`}
      style={{
        "--dta-bg": "#f7f8f5",
        "--dta-text": "#111412",
        "--dta-muted": "#5f6863",
        "--dta-surface": "#ffffff",
        "--dta-border": "#dfe4dd",
        "--dta-accent": "#0f7a4f",
        "--dta-accent-dark": "#095b3a",
        "--dta-warn": "#b7791f",
        "--dta-error": "#b94a48",
      } as React.CSSProperties}
    >
      <body className="min-h-dvh flex flex-col" style={{ backgroundColor: "var(--dta-bg)", color: "var(--dta-text)", fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif" }}>
        <a
          href="#dta-main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[300] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#0f7a4f] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0f7a4f]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
