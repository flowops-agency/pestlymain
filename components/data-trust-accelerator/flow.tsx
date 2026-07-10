"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animation-wrappers";
import { Scan, ShieldCheck, FileCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: Scan,
    label: "Scan",
    title: "Inspect every row",
    desc: "Drop any file: CSV, Parquet, XML, JSON. The engine profiles schemas, detects PII, flags null thresholds, and scores overall health.",
    accent: "var(--dta-accent)",
  },
  {
    icon: ShieldCheck,
    label: "Review",
    title: "Resolve before release",
    desc: "Quarantine rules catch outliers, duplicates, and policy violations. Your team reviews flagged rows, adds lineage notes, and approves or rejects.",
    accent: "var(--dta-warn)",
  },
  {
    icon: FileCheck,
    label: "Govern",
    title: "Lock the contract",
    desc: "Approved runs publish with a schema contract, column-level lineage, and immutable audit log. No more silent changes to prod data.",
    accent: "var(--dta-accent)",
  },
  {
    icon: Rocket,
    label: "Publish",
    title: "Ship trusted products",
    desc: "Consumers access certified data products via API, catalog, or direct export. Every dataset carries a trust score and freshness badge.",
    accent: "var(--dta-accent)",
  },
];

export default function Flow() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28" style={{ backgroundColor: "var(--dta-surface)" }}>
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-heading mb-4 font-bold leading-[1.1] tracking-[-0.03em]" style={{ color: "var(--dta-text)", textWrap: "balance" }}>
            From messy file to trusted product.
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed" style={{ color: "var(--dta-muted)" }}>
            Four steps. No black boxes. Every transformation is reviewable, every decision is logged, every dataset ships with a verifiable trust score.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-4 md:grid-cols-4" staggerDelay={0.1}>
          {steps.map((step, i) => (
            <StaggerItem key={step.label}>
              <div className="relative rounded-xl border p-6" style={{ backgroundColor: "var(--dta-bg)", borderColor: "var(--dta-border)" }}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: `${step.accent}14` }}>
                    <step.icon size={16} style={{ color: step.accent }} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: step.accent }}>
                    {step.label}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold" style={{ color: "var(--dta-text)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--dta-muted)" }}>
                  {step.desc}
                </p>
                <div className="mt-4 flex items-center gap-1">
                  {[0, 1, 2, 3].map((dot) => (
                    <span
                      key={dot}
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: dot <= i ? step.accent : "var(--dta-border)" }}
                    />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
