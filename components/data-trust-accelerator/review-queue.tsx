"use client";

import { FadeIn } from "@/components/animation-wrappers";
import { AlertTriangle, ShieldOff, CheckCircle, Clock } from "lucide-react";

const queueItems = [
  {
    icon: AlertTriangle,
    title: "Pending review",
    label: "12 rows",
    desc: "Rows flagged by quarantine rules await steward sign-off. Thresholds: PII match > 80%, null rate > 15%.",
    badge: "amber",
    state: "in review",
  },
  {
    icon: ShieldOff,
    title: "Quarantined",
    label: "4 rows",
    desc: "Rows that failed mandatory checks: exposed emails, empty required fields, unrecognized domain suffixes.",
    badge: "red",
    state: "blocked",
  },
  {
    icon: CheckCircle,
    title: "Approved",
    label: "1,188 rows",
    desc: "Rows that passed all policy gates. Ready to publish into the trusted dataset catalog.",
    badge: "green",
    state: "passed",
  },
  {
    icon: Clock,
    title: "Awaiting second review",
    label: "3 rows",
    desc: "Borderline rows escalated by the first reviewer. A domain expert must confirm or override.",
    badge: "amber",
    state: "escalated",
  },
];

const badgeColors: Record<string, { bg: string; text: string }> = {
  amber: { bg: "rgba(183, 121, 31, 0.1)", text: "var(--dta-warn)" },
  red: { bg: "rgba(185, 74, 72, 0.1)", text: "var(--dta-error)" },
  green: { bg: "rgba(15, 122, 79, 0.1)", text: "var(--dta-accent)" },
};

const statusDotColors: Record<string, string> = {
  "in review": "#b7791f",
  blocked: "#b94a48",
  passed: "#0f7a4f",
  escalated: "#b7791f",
};

export default function ReviewQueue() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28" style={{ backgroundColor: "var(--dta-surface)" }}>
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-heading mb-4 font-bold leading-[1.1] tracking-[-0.03em]" style={{ color: "var(--dta-text)", textWrap: "balance" }}>
            Know what needs your attention. Right now.
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed" style={{ color: "var(--dta-muted)" }}>
            Every file scan produces a review queue. Quarantined rows surface immediately. Approvals are one click away. Nothing ships without a decision.
          </p>
        </FadeIn>

        {/* Queue summary bar */}
        <FadeIn delay={0.1}>
          <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border p-4" style={{ backgroundColor: "var(--dta-bg)", borderColor: "var(--dta-border)" }}>
            <span className="text-xs font-medium uppercase tracking-[0.08em]" style={{ color: "var(--dta-muted)" }}>
              Run #42 &middot; 1,207 rows scanned
            </span>
            <span className="ml-auto flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--dta-warn)" }}>
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--dta-warn)" }} />
              15 need review
            </span>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          {queueItems.map((item, i) => {
            const badge = badgeColors[item.badge];

            return (
              <FadeIn key={item.title} delay={0.08 * i}>
                <div className="group rounded-xl border p-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" style={{ backgroundColor: "var(--dta-surface)", borderColor: "var(--dta-border)" }}>
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: badge.bg }}>
                        <item.icon size={18} style={{ color: badge.text }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold" style={{ color: "var(--dta-text)" }}>{item.title}</h3>
                        <p className="text-xs font-medium" style={{ color: badge.text }}>{item.label}</p>
                      </div>
                    </div>

                    {/* Status dot + state — tied to real states */}
                    <div className="flex items-center gap-1.5">
                      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: statusDotColors[item.state] }} />
                      <span className="text-[11px] font-medium capitalize" style={{ color: "var(--dta-muted)" }}>{item.state}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--dta-muted)" }}>{item.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
