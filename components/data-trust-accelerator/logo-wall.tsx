"use client";

import { FadeIn } from "@/components/animation-wrappers";

const logos = [
  "Allianz",
  "Siemens",
  "Deutsche Bank",
  "Merck",
  "Munich Re",
  "Bayer",
];

export default function LogoWall() {
  return (
    <section className="border-y px-4 py-10 md:px-8 md:py-14" style={{ borderColor: "var(--dta-border)" }}>
      <FadeIn>
        <div className="mx-auto max-w-7xl">
          <p
            className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--dta-muted)" }}
          >
            Trusted by data teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {logos.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold tracking-tight md:text-base"
                style={{ color: "var(--dta-muted)", opacity: 0.5 }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
