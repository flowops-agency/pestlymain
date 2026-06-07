import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pestly.de"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    template: "%s | Pestly",
    default: "Pestly | AI Customer Service for Pest Control & Exterminators",
  },
  description:
    "Never miss a lead again. AI customer service for pest control businesses – 24/7, under 15 seconds response time. 48h setup, 14-day free trial.",
  keywords: [
    "AI customer service",
    "pest control",
    "exterminator",
    "AI secretary",
    "automatic appointment booking",
    "WhatsApp AI",
    "Pestly",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pestly",
    title: "Pestly | AI Customer Service for Pest Control & Exterminators",
    description:
      "Never miss a lead again. AI customer service for pest control – 24/7, under 15 seconds response time.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pestly AI Customer Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pestly | AI Customer Service for Pest Control",
    description:
      "Never miss a lead again. AI customer service for pest control – 24/7, under 15 seconds response time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
