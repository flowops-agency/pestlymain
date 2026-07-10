"use client";

import { FadeIn } from "@/components/animation-wrappers";
import { FileWarning, ShieldAlert, GitBranch } from "lucide-react";

const blockers = [
  {
    icon: FileWarning,
    title: "Chaotic file sources",
    desc: "CSVs with mixed encodings, XML dumps from legacy ERPs, and API extracts with no schema contract. All land in the same inbox.",
  },
  {
    icon: ShieldAlert,
    title: "Silent data quality rot",
    desc: "PII leaks, NULL floods, and schema drifts go unnoticed until a downstream dashboard breaks or a compliance audit flags them.",
  },
  {
    icon: GitBranch,
    title: "No review, no audit trail",
    desc: "Files land in production with no diff, no lineage, and no sign-off. There is only blame when something breaks.",
  },
];

export default function Problem() {
  return (
    <section id="how-it-works" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: bold statement */}
          <FadeIn direction="none">
            <h2
              className="text-heading mb-5 font-bold leading-[1.1] tracking-[-0.03em]"
              style={{ color: "var(--dta-text)", textWrap: "balance" }}
            >
              Messy files land on your team with no context.
            </h2>
            <p className="max-w-md text-base leading-relaxed" style={{ color: "var(--dta-muted)" }}>
              Every data team has that shared folder or Slack channel where files accumulate. Some are clean. Most are not. And nobody knows which is which until something breaks.
            </p>
          </FadeIn>

          {/* Right: problem breakdown */}
          <div className="flex flex-col gap-6">
            {blockers.map((item, i) => (
              <FadeIn key={item.title} delay={0.08 * i} direction="none">
                <div className="group flex gap-4 rounded-xl border p-5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" style={{ backgroundColor: "var(--dta-surface)", borderColor: "var(--dta-border)" }}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(185, 74, 72, 0.08)" }}>
                    <item.icon size={18} style={{ color: "var(--dta-error)" }} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--dta-error)" }}>0{i + 1}</span>
                      <h3 className="text-sm font-semibold" style={{ color: "var(--dta-text)" }}>{item.title}</h3>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--dta-muted)" }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
