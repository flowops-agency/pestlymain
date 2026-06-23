"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";
import LocalizedLink from "./localized-link";

export default function Testimonials() {
  const { dict } = useTranslation();
  const t = dict.testimonials;

  return (
    <section className="relative w-full overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-0 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 px-4 text-center"
        >
          <h2 className="font-semibold"
            style={{ fontSize: "var(--text-heading)" }}>
            {t.headingBefore}{" "}
            <span className="text-[#FF6B2B]">{t.headingHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {t.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={`https://i.pravatar.cc/80?img=${[12, 11, 10][i]}`}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover border-2 border-orange-100"
                />
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">&bdquo;{item.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <LocalizedLink
            href="#demo"
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(181deg,#5E5E5E_18.12%,#000_99.57%)] px-8 py-4 text-sm font-bold text-white shadow-[0px_4px_8px_0px_rgba(3,7,18,0.06),0px_2px_4px_0px_rgba(3,7,18,0.06),0px_0px_0px_1px_rgba(3,7,18,0.08),0px_1px_1px_2px_rgba(255,255,255,0.40)_inset,0px_-1px_5px_2px_rgba(255,255,255,0.40)_inset] transition-all duration-200 hover:-translate-y-0.5"
          >
            {t.cta}
          </LocalizedLink>
        </motion.div>
      </div>
    </section>
  );
}
