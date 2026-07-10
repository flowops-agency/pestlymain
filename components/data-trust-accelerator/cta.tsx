"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Cta() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [help, setHelp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !company) return;
    setSubmitted(true);
  };

  return (
    <section id="get-started" className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative overflow-hidden rounded-xl border p-6 md:p-12"
          style={{
            backgroundColor: "var(--dta-accent-dark)",
            borderColor: "var(--dta-accent)",
          }}
        >
          {/* Decorative bg */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-[0.06] blur-3xl" style={{ backgroundColor: "#fff" }} />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full opacity-[0.04] blur-3xl" style={{ backgroundColor: "#fff" }} />

          <div className="relative grid gap-10 md:grid-cols-5 md:gap-16">
            {/* Left: copy */}
            <div className="flex flex-col justify-center md:col-span-2">
              <h2 className="text-heading mb-4 font-bold leading-[1.1] tracking-[-0.03em] text-white" style={{ textWrap: "balance" }}>
                Ship trusted data in under 10 minutes.
              </h2>
              <p className="mb-2 max-w-sm text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Tell us about your data pipeline. We will set up a personalized demo and a free scan of your first file.
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                No credit card &middot; Free for small teams &middot; SOC 2
              </p>
            </div>

            {/* Right: form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="flex h-full items-center justify-center rounded-xl border p-8 text-center" style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <div>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-white">Thanks, {name.split(" ")[0]}.</h3>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      Our team will reach out to {phone || "you"} within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="dta-name" className="mb-1.5 block text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                        Name <span style={{ color: "var(--dta-error)" }}>*</span>
                      </label>
                      <input
                        id="dta-name"
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Smith"
                        className="w-full rounded-lg border bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all duration-300"
                        style={{ borderColor: "rgba(255,255,255,0.15)", "--tw-ring-color": "rgba(255,255,255,0.3)" } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label htmlFor="dta-phone" className="mb-1.5 block text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                        Phone <span style={{ color: "var(--dta-error)" }}>*</span>
                      </label>
                      <input
                        id="dta-phone"
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 555 123 4567"
                        className="w-full rounded-lg border bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all duration-300"
                        style={{ borderColor: "rgba(255,255,255,0.15)", "--tw-ring-color": "rgba(255,255,255,0.3)" } as React.CSSProperties}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dta-company" className="mb-1.5 block text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Company <span style={{ color: "var(--dta-error)" }}>*</span>
                    </label>
                    <input
                      id="dta-company"
                      required
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Corp"
                      className="w-full rounded-lg border bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ borderColor: "rgba(255,255,255,0.15)", "--tw-ring-color": "rgba(255,255,255,0.3)" } as React.CSSProperties}
                    />
                  </div>

                  <div>
                    <label htmlFor="dta-help" className="mb-1.5 block text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Where do you need help?
                    </label>
                    <textarea
                      id="dta-help"
                      value={help}
                      onChange={(e) => setHelp(e.target.value)}
                      placeholder="Tell us about your data pipeline, file formats, governance challenges..."
                      rows={3}
                      className="w-full resize-none rounded-lg border bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ borderColor: "rgba(255,255,255,0.15)", "--tw-ring-color": "rgba(255,255,255,0.3)" } as React.CSSProperties}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-1 inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
                    style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "var(--dta-accent-dark)", borderColor: "transparent" }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#ffffff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.95)"; }}
                  >
                    <span>Get a free scan</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ backgroundColor: "rgba(9, 91, 58, 0.15)" }}>
                      <ArrowUpRight size={14} strokeWidth={2} style={{ color: "var(--dta-accent-dark)" }} />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
