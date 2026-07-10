"use client";

import { ArrowUpRight, Play } from "lucide-react";
import { m as motion, useReducedMotion } from "framer-motion";
import { type Easing } from "framer-motion";

const ease: Easing = [0.32, 0.72, 0, 1];

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const shouldAnimate = !prefersReduced;

  const fadeUp = (delay = 0) =>
    shouldAnimate
      ? {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        }
      : {
          initial: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0, delay: 0, ease: [0, 0, 0, 0] as Easing },
        };

  return (
    <section className="relative px-4 pb-20 pt-8 md:px-8 md:pb-32 md:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-xl border md:grid-cols-5" style={{ borderColor: "var(--dta-border)" }}>
          {/* Left: dark emerald panel */}
          <div className="relative flex flex-col justify-center p-8 md:col-span-3 md:p-12 md:pr-16" style={{ backgroundColor: "var(--dta-accent-dark)" }}>
            <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full opacity-[0.05] blur-3xl" style={{ backgroundColor: "#fff" }} />

            <motion.p {...fadeUp(0)} className="mb-3 text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.5)" }}>
              Data governance platform
            </motion.p>

            <motion.h1
              {...fadeUp(0.08)}
              className="font-bold leading-[1.05] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", textWrap: "balance" }}
            >
              Scan messy files.
              <br />
              Quarantine risky rows.
              <br />
              Publish trusted data.
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-5 max-w-lg text-base leading-relaxed md:text-lg"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Turn chaotic CSVs, XML dumps, and legacy exports into reviewable runs. Catch PII leaks, schema drifts, and outliers before they reach production.
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                <span>Scan a file</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                  <ArrowUpRight size={14} strokeWidth={2} />
                </span>
              </a>

              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
                style={{ color: "rgba(255,255,255,0.8)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
              >
                <Play size={14} strokeWidth={2} fill="currentColor" />
                <span>How it works</span>
              </a>
            </motion.div>
          </div>

          {/* Right: product visual panel */}
          <div className="flex items-center bg-white p-6 md:col-span-2 md:p-8">
            <motion.div {...fadeUp(0.12)} className="w-full">
              <div className="overflow-hidden rounded-lg border" style={{ borderColor: "var(--dta-border)" }}>
                <div style={{ backgroundColor: "#f4f5f2" }}>
                  {/* Traffic light header */}
                  <div className="flex items-center gap-1.5 px-3 pt-2.5 pb-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#e05c51]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#e8c340]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#5fc44c]" />
                    <span className="ml-2 font-mono text-[10px] font-medium tracking-tight" style={{ color: "var(--dta-muted)" }}>scan_results__2026-06-30.csv</span>
                  </div>

                  {/* Table */}
                  <div className="px-3 pb-3">
                    <table className="w-full text-left text-[10px]">
                      <thead>
                        <tr style={{ color: "var(--dta-muted)" }}>
                          <th className="pb-1.5 pr-2 font-medium">Row</th>
                          <th className="pb-1.5 pr-2 font-medium">Name</th>
                          <th className="pb-1.5 pr-2 font-medium">Email</th>
                          <th className="pb-1.5 pr-2 font-medium">Status</th>
                          <th className="pb-1.5 font-medium">Flag</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { row: "1,204", name: "j***@corp.com", email: "j***@corp.com", status: "passed", flag: "" },
                          { row: "1,205", name: "jane.smith@acme.org", email: "jane.smith@acme.org", status: "quarantined", flag: "PII" },
                          { row: "1,206", name: "-", email: "-", status: "quarantined", flag: "empty row" },
                          { row: "1,207", name: "billing@bank-xyz.com", email: "billing@bank-xyz.com", status: "quarantined", flag: "unknown domain" },
                        ].map((row, i) => (
                          <tr key={row.row} style={i % 2 === 0 ? { backgroundColor: "rgba(0,0,0,0.02)" } : {}}>
                            <td className="py-1 pr-2 font-mono" style={{ color: "var(--dta-muted)" }}>{row.row}</td>
                            <td className="py-1 pr-2 font-mono">{row.name}</td>
                            <td className="py-1 pr-2 font-mono">{row.email}</td>
                            <td className="py-1 pr-2">
                              {row.status === "passed" ? (
                                <span className="inline-block rounded-full px-1.5 py-0.5 text-[9px] font-medium" style={{ backgroundColor: "rgba(15, 122, 79, 0.1)", color: "var(--dta-accent)" }}>passed</span>
                              ) : (
                                <span className="inline-block rounded-full px-1.5 py-0.5 text-[9px] font-medium" style={{ backgroundColor: "rgba(185, 74, 72, 0.1)", color: "var(--dta-error)" }}>quarantined</span>
                              )}
                            </td>
                            <td className="py-1 font-mono">
                              {row.flag && <span className="inline-block rounded-full px-1.5 py-0.5 text-[9px] font-medium" style={{ backgroundColor: "rgba(183, 121, 31, 0.1)", color: "var(--dta-warn)" }}>{row.flag}</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Scan badge */}
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--dta-accent)" }}>
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--dta-accent)" }} />
                Scanning &middot; 12 flagged
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
