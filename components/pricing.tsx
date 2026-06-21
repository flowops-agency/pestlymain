"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";
import LocalizedLink from "./localized-link";

export default function Pricing() {
  const { dict } = useTranslation();
  const t = dict.pricing;

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold">
          {t.headingBefore}{" "}
          <span className="text-orange-500">{t.headingHighlight}</span>{" "}
          {t.headingAfter}
        </h2>
        <p className="mx-auto max-w-2xl text-gray-500">{t.subtitle}</p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 items-stretch gap-4 md:grid-cols-2">
        {t.plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
          >
            <div
              className={`relative flex flex-col gap-3 rounded-[37px] p-4 ${
                plan.popular
                  ? "border border-white bg-gradient-to-b from-[#FFA756] via-[#F68441] to-[#EE602C]"
                  : "bg-[#DCDCDC]"
              }`}
            >
              <div className="space-y-8 rounded-[28px] bg-[#F5F5F5] px-4 pb-8 pt-4 shadow-[0px_95px_27px_0px_rgba(0,0,0,0.00),0px_61px_24px_0px_rgba(0,0,0,0.03),0px_34px_21px_0px_rgba(0,0,0,0.11),0px_15px_15px_0px_rgba(0,0,0,0.19),0px_4px_8px_0px_rgba(0,0,0,0.22)]">
                <div className="w-fit rounded-[9999px] border border-[#DCDCDC] bg-white px-[14.32px] py-1 text-[18px] font-medium text-gray-900 flex items-center justify-center">
                  {plan.name}
                </div>

                <p className="text-sm text-gray-500 -mt-4">{plan.description}</p>

                <div className="mt-2 flex items-baseline">
                  <span className="text-[32px] font-bold">{plan.currency}</span>
                  <span className="text-[40px] font-bold">{plan.price}</span>
                  <span className="ml-1 text-gray-500">{t.period}</span>
                </div>

                <LocalizedLink
                  href="#demo"
                  className="inline-flex items-center justify-center rounded-[6px] bg-[linear-gradient(181deg,#5E5E5E_18.12%,#000_99.57%)] px-4 py-2 text-sm font-bold text-white shadow-[0px_4px_8px_0px_rgba(3,7,18,0.06),0px_2px_4px_0px_rgba(3,7,18,0.06),0px_0px_0px_1px_rgba(3,7,18,0.08),0px_1px_1px_2px_rgba(255,255,255,0.40)_inset,0px_-1px_5px_2px_rgba(255,255,255,0.40)_inset] transition duration-200 hover:-translate-y-0.5"
                >
                  {t.cta}
                </LocalizedLink>

                <ul className="space-y-3">
                  {plan.features.map((feature, fi) => (
                    <li
                      key={`${fi}-${feature}`}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mt-0.5 shrink-0 text-green-500"
                      >
                        <path
                          d="M5 12l5 5l10 -10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center text-sm text-gray-400"
      >
        {t.footnote}
      </motion.p>
    </section>
  );
}
