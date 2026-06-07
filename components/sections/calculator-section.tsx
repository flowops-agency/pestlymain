"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { siteConfigUs } from "@/data/site-config-us";

interface CalculatorSectionProps {
  locale?: "de" | "us";
}

export default function CalculatorSection({ locale = "de" }: CalculatorSectionProps) {
  const isUs = locale === "us";
  const config = isUs ? siteConfigUs : siteConfig;

  const [callsRaw, setCallsRaw] = useState(10);
  const [orderValue, setOrderValue] = useState(150);

  // Exponential mapping: small steps on the left, bigger jumps on the right
  const callsPerWeek = Math.round(Math.pow(callsRaw / 100, 2) * 200);
  const missedJobsPerYear = Math.round(callsPerWeek * 52 * 0.7);
  const annualLoss = missedJobsPerYear * orderValue;

  const currency = isUs ? "$" : "€";
  const numberFormat = isUs ? "en-US" : "de-DE";
  const maxOrder = isUs ? 3000 : 2000;
  const orderStep = isUs ? 50 : 50;

  const title = isUs ? "The Revenue Loss Calculator" : "Der Umsatz-Verlust-Rechner";
  const heading = isUs
    ? "What are you losing to competitors right now?"
    : "Was verlierst du gerade an die Konkurrenz?";
  const subheading = isUs
    ? "Calculate how much revenue you leave on the table from missed calls every year."
    : "Berechne, wie viel Umsatz du jedes Jahr durch verpasste Anrufe liegen lässt.";
  const callsLabel = isUs ? "Missed calls per week" : "Verpasste Anrufe pro Woche";
  const orderLabel = isUs ? "Average order value" : "Durchschnittlicher Auftragswert";
  const resultLabel = isUs
    ? "Your estimated annual revenue loss to competitors:"
    : "Dein geschätzter jährlicher Umsatzverlust an die Konkurrenz:";
  const footnote = isUs
    ? "* Based on 70 % booking probability from missed calls"
    : "* Basierend auf 70 % Buchungswahrscheinlichkeit bei verpassten Anrufen";
  const tip = isUs
    ? "💡 Tip: Just estimate – the calculator shows you the potential in your missed calls."
    : "💡 Tipp: Einfach schätzen – der Rechner zeigt dir, welches Potenzial in deinen verpassten Anrufen steckt.";
  const ctaText = isUs
    ? "Request Demo"
    : "Individuelle Demo-Anfragen";
  const ctaUrl = config.tallyUrl;

  // Slider styling
  const sliderTrack = "w-full h-2 rounded-full appearance-none cursor-pointer bg-[var(--color-border)] accent-[var(--color-primary)]";
  const sliderThumb = "appearance-none w-5 h-5 rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-bg)] shadow-md cursor-pointer transition-transform hover:scale-110";

  return (
    <section id="calculator" className="section-padding bg-[var(--color-bg)] border-t border-b border-[var(--color-border)]">
      <div className="container-main">
        <div className="section-header text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <ScrollReveal>
            <span className="tag mb-4">{title}</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              {heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {subheading}
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={250}>
          <div className="max-w-2xl mx-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 md:p-12 flex flex-col gap-8">
            {/* Inputs */}
            <div className="flex flex-col gap-6">
              {/* Missed calls slider */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center font-medium text-[var(--color-text)]">
                  <label className="text-sm md:text-base">{callsLabel}</label>
                  <span className="text-xl md:text-2xl font-bold text-[var(--color-primary)] bg-[var(--color-primary-bg)] px-3 py-1 rounded-lg">
                    {callsPerWeek}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={callsRaw}
                  onChange={(e) => setCallsRaw(Number(e.target.value))}
                  className={sliderTrack}
                  style={{
                    background: `linear-gradient(to right, var(--color-primary) ${callsRaw}%, var(--color-border) ${callsRaw}%)`,
                  }}
                />
              </div>

              {/* Order value slider */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center font-medium text-[var(--color-text)]">
                  <label className="text-sm md:text-base">{orderLabel}</label>
                  <span className="text-xl md:text-2xl font-bold text-[var(--color-primary)] bg-[var(--color-primary-bg)] px-3 py-1 rounded-lg">
                    {isUs ? "$" : ""}{orderValue.toLocaleString(numberFormat)}{isUs ? "" : " €"}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={maxOrder}
                  step={orderStep}
                  value={orderValue}
                  onChange={(e) => setOrderValue(Number(e.target.value))}
                  className={sliderTrack}
                  style={{
                    background: `linear-gradient(to right, var(--color-primary) ${(orderValue / maxOrder) * 100}%, var(--color-border) ${(orderValue / maxOrder) * 100}%)`,
                  }}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[var(--color-border)] w-full" />

            {/* Result */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 p-5 rounded-xl border border-[rgba(255,77,77,0.3)] bg-[rgba(255,77,77,0.05)]">
                <span className="text-base md:text-lg text-[var(--color-text)] font-medium">
                  {resultLabel}
                </span>
                <strong className="text-2xl md:text-3xl font-bold font-display text-[#ff4d4d]">
                  {isUs ? "$" : ""}{annualLoss.toLocaleString(numberFormat)}{isUs ? "" : " €"}
                </strong>
              </div>
            </div>

            {/* Footnotes & CTA */}
            <div className="text-center">
              <p className="text-sm text-[var(--color-muted)] mb-3">
                {footnote}
              </p>
              <p className="text-sm text-[var(--color-muted)] mb-6 italic">
                {tip}
              </p>
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange text-base px-8 py-3.5 inline-flex"
              >
                {ctaText}
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
