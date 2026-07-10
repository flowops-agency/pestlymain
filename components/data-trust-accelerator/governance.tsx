"use client";

import { FadeIn } from "@/components/animation-wrappers";
import {
  FileText,
  ScrollText,
  Fingerprint,
  GitMerge,
  CheckSquare,
  Network,
} from "lucide-react";

const artifacts = [
  { icon: FileText, title: "Schema contract", desc: "Column names, types, nullability, and constraints, versioned and signed at publish time." },
  { icon: ScrollText, title: "Run log", desc: "Every scan, quarantine decision, and approval is timestamped with the reviewer identity." },
  { icon: Fingerprint, title: "Column-level lineage", desc: "Trace any cell back to its source file, row, and the transformation that produced it." },
  { icon: GitMerge, title: "Policy definitions", desc: "YAML-based rules for PII patterns, null thresholds, domain allowlists, and custom validators." },
  { icon: CheckSquare, title: "Compliance report", desc: "Exportable audit package for GDPR, SOX, or internal compliance reviews. One click, complete trail." },
  { icon: Network, title: "Trust score manifest", desc: "Composable score from schema adherence, completeness, freshness, and policy pass rates." },
];

export default function Governance() {
  return (
    <section id="governance" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-heading mb-4 font-bold leading-[1.1] tracking-[-0.03em]" style={{ color: "var(--dta-text)", textWrap: "balance" }}>
            Every dataset ships with its paperwork.
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed" style={{ color: "var(--dta-muted)" }}>
            A governed dataset is not just clean data. It is an auditable package: schema contract, lineage, policy log, and compliance report, all auto-generated.
          </p>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3">
          {artifacts.map((item, i) => (
            <FadeIn key={item.title} delay={0.06 * i}>
              <div
                className="group rounded-xl border p-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{
                  backgroundColor: "var(--dta-surface)",
                  borderColor: "var(--dta-border)",
                }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(15, 122, 79, 0.08)" }}>
                  <item.icon size={18} style={{ color: "var(--dta-accent)" }} strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-base font-semibold" style={{ color: "var(--dta-text)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--dta-muted)" }}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
