import type { Metadata } from "next";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
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
  alternates: {
    canonical: "/us",
  },
};

export default function UsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav locale="us" />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale="us" />
    </>
  );
}
