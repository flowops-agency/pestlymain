"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/animation-wrappers";
import { useTranslation } from "@/lib/i18n/locale-context";

export default function Stats() {
  const { dict } = useTranslation();
  const t = dict.stats;

  return (
    <section className="relative w-full px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            {t.headingBefore}{" "}
            <span className="text-[oklch(0.65_0.25_30)]">{t.headingHighlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-500">
            {t.subtitle}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 gap-6 px-4 md:grid-cols-3 lg:grid-cols-5"
        >
          {t.stats.map((stat) => (
            <motion.div
              key={`${stat.value}-${stat.label}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="relative rounded-xl border border-gray-200 bg-background/50 p-6 backdrop-blur-sm transition-shadow hover:shadow-xl"
            >
              {/* Accent line — wächst von Mitte aus */}
              <motion.div
                className="absolute left-1/2 top-0 h-[2px] w-12 -translate-x-1/2 origin-center bg-linear-to-r/[in_oklch] from-[oklch(0.65_0.25_30)] to-[oklch(0.75_0.15_30)]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              />
              <div
                className="absolute inset-0 z-0 overflow-hidden rounded-xl"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute inset-0 z-0 h-full rounded-xl bg-radial/[in_oklch] from-white/50 via-white/60 to-white" />
              <div className="relative z-10">
                <h3 className="mb-2 text-4xl font-bold text-[#171717]">
                  <Counter
                    to={Number(stat.value)}
                    prefix={stat.prefix ?? ""}
                    suffix={stat.suffix ?? ""}
                    decimals={stat.decimals ?? 0}
                  />
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
