import Navbar from "@/components/data-trust-accelerator/navbar";
import Hero from "@/components/data-trust-accelerator/hero";
import LogoWall from "@/components/data-trust-accelerator/logo-wall";
import Problem from "@/components/data-trust-accelerator/problem";
import Flow from "@/components/data-trust-accelerator/flow";
import Bento from "@/components/data-trust-accelerator/bento";
import ReviewQueue from "@/components/data-trust-accelerator/review-queue";
import Governance from "@/components/data-trust-accelerator/governance";
import Cta from "@/components/data-trust-accelerator/cta";

export default function DataTrustAcceleratorPage() {
  return (
    <main id="dta-main">
      <Navbar />
      <Hero />
      <LogoWall />
      <Problem />
      <Flow />
      <Bento />
      <ReviewQueue />
      <Governance />
      <Cta />
      {/* Simple footer */}
      <footer
        className="border-t px-4 py-8 md:px-8"
        style={{ borderColor: "var(--dta-border)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs md:flex-row">
          <span style={{ color: "var(--dta-muted)" }}>
            &copy; 2026 Data Trust Accelerator. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" style={{ color: "var(--dta-muted)" }} className="hover:underline">
              Privacy
            </a>
            <a href="#" style={{ color: "var(--dta-muted)" }} className="hover:underline">
              Terms
            </a>
            <a href="#" style={{ color: "var(--dta-muted)" }} className="hover:underline">
              SOC 2
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
