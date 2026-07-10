"use client";

import { m as motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";

export default function SocialProof() {
  const { dict } = useTranslation();
  const t = dict.socialProof;

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.heading && (
            <h2 className="mb-12 text-center font-inter text-[22px] font-semibold text-[#3D3D3D]">
              {t.heading}
            </h2>
          )}
        </motion.div>

        <div className="relative mx-auto grid w-full max-w-3xl grid-cols-2 gap-6 px-4 md:grid-cols-4 md:gap-10">
          {t.logos.map((logo, idx) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center justify-center"
            >
              <div className="flex h-16 w-full flex-col items-center justify-center rounded-lg">
                <span className="text-lg font-bold tracking-tight text-[#1a1a2e]">
                  {logo.name}
                </span>
                <span className="mt-1 text-xs text-gray-400">{logo.subtitle}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
