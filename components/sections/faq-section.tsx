"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { faqItems } from "@/data/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <span className="tag mb-4">FAQ</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Häufig gestellte Fragen
            </h2>
          </ScrollReveal>
        </div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card-base overflow-hidden">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm md:text-base font-medium text-[var(--color-text)] pr-4">
                      {item.question}
                    </span>
                    <span className="shrink-0 text-[var(--color-primary)] transition-transform duration-300">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
