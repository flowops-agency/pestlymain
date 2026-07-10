"use client";

import { useState } from "react";
import { m as motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { dict } = useTranslation();
  const t = dict.faq;

  return (
    <section id="faq" className="w-full px-4 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-semibold"
            style={{ fontSize: "var(--text-heading)" }}>
            {t.headingBefore}{" "}
            <span className="text-[#FF6B2B]">{t.headingHighlight}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-neutral-600">{t.subtitle}</p>
        </motion.div>

        <div className="space-y-4 rounded-[22px] bg-[#DCDCDC] p-4">
          {t.items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="overflow-hidden rounded-[17px] border border-[#EBEBEB] bg-gradient-to-b from-[#F6F6F6] via-[#FDFDFD] to-[#F6F6F6] shadow-[0px_95px_27px_0px_rgba(0,0,0,0.00),_0px_61px_24px_0px_rgba(0,0,0,0.03),_0px_34px_21px_0px_rgba(0,0,0,0.11),_0px_15px_15px_0px_rgba(0,0,0,0.19),_0px_4px_8px_0px_rgba(0,0,0,0.22)]"
            >
              <button
                type="button"
                className="flex w-full items-center gap-2 px-6 py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#FF6B2B]"
                  >
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                </motion.div>
                <span className="text-lg text-neutral-800">{faq.question}</span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-[#EBEBEB] px-6 py-4 text-sm md:text-base leading-relaxed text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
