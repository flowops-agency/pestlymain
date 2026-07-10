"use client";

import { FadeIn } from "@/components/animation-wrappers";
import {
  Shield,
  Eye,
  FileSearch,
  BarChart3,
  History,
  Users,
} from "lucide-react";

const cells = [
  {
    icon: Shield,
    title: "PII & compliance scanning",
    desc: "Regex patterns, ML classifiers, and custom rules flag emails, SSNs, IBANs, and sensitive fields before ingestion.",
    accent: "var(--dta-accent)",
    tall: true,
  },
  {
    icon: Eye,
    title: "Side-by-side diffs",
    desc: "Compare source vs. staged data at the column, row, and summary level before approving a run.",
    accent: "var(--dta-accent)",
    tall: false,
  },
  {
    icon: FileSearch,
    title: "Schema drift detection",
    desc: "New column appeared? Type changed? Null rate spiked? Get alerted before your pipeline breaks.",
    accent: "var(--dta-warn)",
    tall: false,
  },
  {
    icon: BarChart3,
    title: "Health scores & trends",
    desc: "Every dataset gets a composable trust score. Track quality trends across runs and sources over time.",
    accent: "var(--dta-accent)",
    tall: false,
  },
  {
    icon: History,
    title: "Immutable audit trail",
    desc: "Who approved what, when, and why. Every status change, quarantine action, and publish event is signed.",
    accent: "var(--dta-accent)",
    tall: false,
  },
  {
    icon: Users,
    title: "Role-based review queues",
    desc: "Data stewards review flagged rows. Domain experts approve schema contracts. Admins publish. No stepping on each other.",
    accent: "var(--dta-accent)",
    tall: false,
  },
];

export default function Bento() {
  return (
    <section id="features" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-heading mb-4 font-bold leading-[1.1] tracking-[-0.03em]" style={{ color: "var(--dta-text)", textWrap: "balance" }}>
            Everything your data governance team needs.
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed" style={{ color: "var(--dta-muted)" }}>
            Not another catalog. A working platform that turns ingestion chaos into governed, publishable data products.
          </p>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-4">
          {/* Cell 1: tall, spans 2 cols */}
          <FadeIn delay={0.04}>
            <div
              className="relative flex flex-col justify-between rounded-xl border p-6 md:col-span-2 md:row-span-2"
              style={{ backgroundColor: "var(--dta-surface)", borderColor: "var(--dta-border)" }}
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(15, 122, 79, 0.08)" }}>
                  <Shield size={18} style={{ color: "var(--dta-accent)" }} strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-semibold" style={{ color: "var(--dta-text)" }}>
                  PII & compliance scanning
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--dta-muted)" }}>
                  Regex patterns, ML classifiers, and custom rules flag emails, SSNs, IBANs, and sensitive fields before ingestion.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 text-xs" style={{ color: "var(--dta-accent)" }}>
                <span className="rounded-full border px-2.5 py-0.5 font-medium" style={{ borderColor: "var(--dta-accent)" }}>PII detection</span>
                <span className="rounded-full border px-2.5 py-0.5 font-medium" style={{ borderColor: "var(--dta-accent)" }}>Compliance</span>
              </div>
            </div>
          </FadeIn>

          {/* Cell 2: Eye */}
          <FadeIn delay={0.08}>
            <div className="rounded-xl border p-6" style={{ backgroundColor: "var(--dta-surface)", borderColor: "var(--dta-border)" }}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(15, 122, 79, 0.08)" }}>
                <Eye size={18} style={{ color: "var(--dta-accent)" }} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-base font-semibold" style={{ color: "var(--dta-text)" }}>Side-by-side diffs</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--dta-muted)" }}>Compare source vs. staged data at the column, row, and summary level before approving a run.</p>
            </div>
          </FadeIn>

          {/* Cell 3: Schema drift — amber accent */}
          <FadeIn delay={0.12}>
            <div className="rounded-xl border p-6" style={{ backgroundColor: "var(--dta-surface)", borderColor: "rgba(183, 121, 31, 0.2)" }}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(183, 121, 31, 0.08)" }}>
                <FileSearch size={18} style={{ color: "var(--dta-warn)" }} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-base font-semibold" style={{ color: "var(--dta-text)" }}>Schema drift detection</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--dta-muted)" }}>New column appeared? Type changed? Null rate spiked? Get alerted before your pipeline breaks.</p>
            </div>
          </FadeIn>

          {/* Cell 4: Health scores */}
          <FadeIn delay={0.08}>
            <div className="rounded-xl border p-6" style={{ backgroundColor: "var(--dta-surface)", borderColor: "var(--dta-border)" }}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(15, 122, 79, 0.08)" }}>
                <BarChart3 size={18} style={{ color: "var(--dta-accent)" }} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-base font-semibold" style={{ color: "var(--dta-text)" }}>Health scores & trends</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--dta-muted)" }}>Every dataset gets a composable trust score. Track quality trends across runs and sources over time.</p>
            </div>
          </FadeIn>

          {/* Cell 5: Audit trail */}
          <FadeIn delay={0.12}>
            <div className="rounded-xl border p-6" style={{ backgroundColor: "var(--dta-surface)", borderColor: "var(--dta-border)" }}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(15, 122, 79, 0.08)" }}>
                <History size={18} style={{ color: "var(--dta-accent)" }} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-base font-semibold" style={{ color: "var(--dta-text)" }}>Immutable audit trail</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--dta-muted)" }}>Who approved what, when, and why. Every status change, quarantine action, and publish event is signed.</p>
            </div>
          </FadeIn>

          {/* Cell 6: Review queues — spans 2 cols */}
          <FadeIn delay={0.16}>
            <div className="rounded-xl border p-6 md:col-span-2" style={{ backgroundColor: "var(--dta-surface)", borderColor: "var(--dta-border)" }}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(15, 122, 79, 0.08)" }}>
                  <Users size={18} style={{ color: "var(--dta-accent)" }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold" style={{ color: "var(--dta-text)" }}>Role-based review queues</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--dta-muted)" }}>Data stewards review flagged rows. Domain experts approve schema contracts. Admins publish. Nobody steps on each other.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
