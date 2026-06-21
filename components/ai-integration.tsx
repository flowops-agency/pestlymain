"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";

export default function AiIntegration() {
  const { dict } = useTranslation();
  const t = dict.aiIntegration;

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">
            {t.headingBefore}{" "}
            <span className="text-[#FF7757]">{t.headingHighlight}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1: Voice → Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[18px] border border-[#E1E1E1] bg-[#F9FAFB] p-4 shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),_0px_24px_10px_0px_rgba(0,0,0,0.01),_0px_13px_8px_0px_rgba(0,0,0,0.02),_0px_6px_6px_0px_rgba(0,0,0,0.03),_0px_1px_3px_0px_rgba(0,0,0,0.04)]"
          >
            <div className="h-[320px] flex flex-col items-center justify-center rounded-xl border border-[#E1E1E1] bg-white p-4">
              <div className="relative flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FB4C01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  {t.cards.voice.steps[0]}
                </div>
              </div>

              <div className="mt-4 flex flex-col items-center gap-2">
                <div className="text-gray-300">↓</div>
                <div className="rounded-lg bg-orange-50 px-4 py-2 text-sm text-gray-700">
                  {t.cards.voice.steps[1]}
                </div>
                <div className="text-gray-300">↓</div>
                <div className="rounded-lg bg-green-50 px-4 py-2 text-sm text-gray-700">
                  {t.cards.voice.steps[2]}
                </div>
                <div className="text-gray-300">↓</div>
                <div className="rounded-lg bg-blue-50 px-4 py-2 text-sm text-gray-700">
                  {t.cards.voice.steps[3]}
                </div>
              </div>
            </div>
            <h3 className="mb-2 mt-6 text-xl font-bold">{t.cards.voice.title}</h3>
            <p className="text-sm leading-relaxed text-gray-500">{t.cards.voice.desc}</p>
          </motion.div>

          {/* Card 2: Knowledge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[18px] border border-[#E1E1E1] bg-[#F9FAFB] p-4 shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),_0px_24px_10px_0px_rgba(0,0,0,0.01),_0px_13px_8px_0px_rgba(0,0,0,0.02),_0px_6px_6px_0px_rgba(0,0,0,0.03),_0px_1px_3px_0px_rgba(0,0,0,0.04)]"
          >
            <div className="h-[320px] flex flex-col rounded-xl border border-[#E1E1E1] bg-white p-4">
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <span className="text-sm text-gray-400">{t.cards.knowledge.placeholder}</span>
              </div>

              <div className="mt-3 flex-1 space-y-2 overflow-hidden">
                {t.cards.knowledge.qa.map((item, i) => (
                  <div key={i} className="rounded-lg bg-gray-50 p-2">
                    <p className="text-xs font-medium text-gray-800">{item.q}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="mb-2 mt-6 text-xl font-bold">{t.cards.knowledge.title}</h3>
            <p className="text-sm leading-relaxed text-gray-500">{t.cards.knowledge.desc}</p>
          </motion.div>

          {/* Card 3: Escalation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-[18px] border border-[#E1E1E1] bg-[#F9FAFB] p-4 shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),_0px_24px_10px_0px_rgba(0,0,0,0.01),_0px_13px_8px_0px_rgba(0,0,0,0.02),_0px_6px_6px_0px_rgba(0,0,0,0.03),_0px_1px_3px_0px_rgba(0,0,0,0.04)]"
          >
            <div className="h-[320px] flex flex-col rounded-xl border border-[#E1E1E1] bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{t.cards.escalation.mode}</span>
                <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-600">{t.cards.escalation.urgentLabel}</span>
              </div>

              <div className="mt-4 flex-1 space-y-3">
                {t.cards.escalation.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border border-gray-100 p-3">
                    <div>
                      <p className="text-sm text-gray-800">{item.label}</p>
                      <p className="text-xs text-gray-400">{item.time}</p>
                    </div>
                    <div className={`h-2 w-2 rounded-full ${i === 0 ? "bg-red-500" : i === 1 ? "bg-green-500" : "bg-blue-500"}`} />
                  </div>
                ))}

                <div className="mt-4 rounded-lg border border-dashed border-orange-300 bg-orange-50 p-3">
                  <p className="text-sm font-medium text-orange-800">{t.cards.escalation.notification}</p>
                  <p className="text-xs text-orange-600 mt-1">{t.cards.escalation.notificationDetail}</p>
                </div>
              </div>
            </div>
            <h3 className="mb-2 mt-6 text-xl font-bold">{t.cards.escalation.title}</h3>
            <p className="text-sm leading-relaxed text-gray-500">{t.cards.escalation.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
