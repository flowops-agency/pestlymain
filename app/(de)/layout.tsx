import type { Metadata } from "next";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import CookieBanner from "@/components/ui/cookie-banner";

export const metadata: Metadata = {
  title: {
    template: "%s | Pestly",
    default:
      "Pestly | KI-Kundenservice für Schädlingsbekämpfer & Kammerjäger",
  },
};

export default function DeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
