"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { pricingTiers, type BillingPeriod } from "@/data/pricing";

function FlipPrice({
  billing,
  isYearly,
}: {
  billing: (typeof pricingTiers)[number]["billing"];
  isYearly: boolean;
}) {
  const option = isYearly ? billing.yearly : billing.monthly;
  const key = isYearly ? "yearly" : "monthly";

  return (
    <div className="flip-wrapper relative" key={key}>
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          {option.price !== null ? (
            <>
              <span className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tabular-nums">
                {option.price.toLocaleString("de-DE")}
              </span>
              <span className="text-[var(--color-muted)] font-medium">
                €{option.priceLabel}
              </span>
            </>
          ) : (
            <span className="text-3xl font-bold text-[var(--color-text)]">
              {option.priceLabel}
            </span>
          )}
        </div>
        {option.yearlyTotal && (
          <p className="text-xs font-medium text-[var(--color-accent)] mt-1">
            {option.yearlyTotal} ·{" "}
            <span className="text-[var(--color-success)]">2 Monate gratis</span>
          </p>
        )}
        <p className="text-xs text-[var(--color-muted)] mt-1">
          {option.setupFeeLabel}:{" "}
          {typeof option.setupFee === "number"
            ? option.setupFee === 0
              ? "Entfällt"
              : `${option.setupFee.toLocaleString("de-DE")} €`
            : String(option.setupFee)}
        </p>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const isYearly = billing === "yearly";

  return (
    <section id="pricing" className="section-padding bg-[var(--color-surface)]">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <ScrollReveal>
            <span className="tag mb-4">Preise</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Einfache Preise, keine versteckten Kosten
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Wähle den Tarif, der zu deinem Betrieb passt. Alle Preise
              zzgl. MwSt.
            </p>
          </ScrollReveal>
        </div>

        {/* Billing Toggle */}
        <ScrollReveal delay={250}>
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex items-center bg-[var(--color-bg)] rounded-full p-1 border border-[var(--color-border)]">
              <button
                onClick={() => setBilling("monthly")}
                className={`relative z-10 px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                  billing === "monthly"
                    ? "text-[var(--color-text-inverse)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                }`}
                aria-pressed={billing === "monthly"}
                type="button"
              >
                Monatlich
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`relative z-10 px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 inline-flex items-center gap-1.5 ${
                  billing === "yearly"
                    ? "text-[var(--color-text-inverse)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                }`}
                aria-pressed={billing === "yearly"}
                type="button"
              >
                Jährlich
                <Sparkles size={14} className="text-[var(--color-accent)]" />
              </button>
              {/* Sliding Pill */}
              <div
                className={`absolute top-1 bottom-1 rounded-full bg-[var(--color-primary)] transition-all duration-400 ease-out ${
                  billing === "monthly"
                    ? "left-1 right-[calc(50%+2px)]"
                    : "left-[calc(50%+2px)] right-1"
                }`}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <ScrollReveal key={tier.id} delay={i * 150}>
              <div
                className={`card-base p-5 md:p-8 flex flex-col h-full relative overflow-hidden ${
                  tier.highlighted
                    ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)] shadow-primary"
                    : ""
                }`}
              >
                {/* Highlighted background glow */}
                {tier.highlighted && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--color-primary-bg)] blur-2xl" />
                  </div>
                )}

                {/* Badge */}
                {tier.badgeText && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                      {tier.badgeText}
                    </span>
                  </div>
                )}

                {/* Yearly star badge */}
                {tier.billing.yearly.badgeText && isYearly && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-[var(--color-accent)] text-[var(--color-text-inverse)] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm inline-flex items-center gap-1">
                      <Sparkles size={10} />
                      {tier.billing.yearly.badgeText}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6 relative z-10">
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    {tier.target}
                  </p>
                </div>

                {/* Animated Price */}
                <div className="relative z-10 flip-section">
                  <FlipPrice
                    key={`${tier.id}-${billing}`}
                    billing={tier.billing}
                    isYearly={isYearly}
                  />
                </div>

                {/* Features */}
                <ul className="space-y-2.5 md:space-y-3 mb-8 flex-1 relative z-10">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          feat.included
                            ? "text-[var(--color-success)]"
                            : "text-[var(--color-muted)]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          feat.included
                            ? "text-[var(--color-text-secondary)]"
                            : "text-[var(--color-muted)] line-through"
                        }`}
                      >
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={tier.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center relative z-10 ${
                    tier.cta.variant === "primary"
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                >
                  {tier.cta.label}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .flip-section {
          perspective: 600px;
        }
        .flip-wrapper {
          animation: flipIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
          transform-origin: center top;
        }
        @keyframes flipIn {
          0% {
            opacity: 0;
            transform: rotateX(-90deg) scale(0.9);
          }
          60% {
            opacity: 1;
            transform: rotateX(8deg) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: rotateX(0deg) scale(1);
          }
        }
        .tabular-nums {
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </section>
  );
}
