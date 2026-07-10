"use client";

import { m as motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";
import LocalizedLink from "./localized-link";
import { useDeviceAnimation } from "@/components/animation-wrappers";
import HeroPhone from "@/components/hero-phone";

export default function Hero() {
  const { dict } = useTranslation();
  const t = dict.hero;
  const { shouldAnimate } = useDeviceAnimation();

  return (
    <div
      id="home"
      className="relative mx-auto my-2 flex max-w-7xl flex-col items-center justify-center overflow-hidden rounded-b-3xl border border-black px-4 pb-8 pt-16 md:my-8 md:border-0 md:px-8 md:pb-6 md:pt-20"
      style={{
        background:
          "linear-gradient(to top, rgba(247,135,67,1) 0%, rgba(255,244,239,1) 50%, rgba(255,255,255,1) 100%)",
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(247,135,67,0.15) 0%, rgba(255,244,239,0.1) 50%, transparent 100%)",
        }}
        animate={
          shouldAnimate ? { opacity: [0, 0.4, 0] } : { opacity: 0.15 }
        }
        transition={
          shouldAnimate
            ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0 }
        }
      />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-20 mx-auto mb-2 max-w-6xl text-balance text-center font-semibold tracking-tight text-gray-700 md:mb-1"
        style={{ fontSize: "var(--text-display)" }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="block bg-gradient-to-b from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)] bg-clip-text text-transparent"
        >
          <span className="block">
            {t.line1Before}{" "}
            <span className="bg-gradient-to-b from-[rgba(255,167,86,1)] to-[rgba(238,96,44,1)] bg-clip-text text-transparent">
              {t.line1Highlight}
            </span>
          </span>
          {(t.line2Before || t.line2Highlight || t.line2After) && (
            <span className="mt-0 block bg-gradient-to-b from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)] bg-clip-text py-2 text-transparent">
              {t.line2Before}{" "}
              <span className="bg-gradient-to-b from-[rgba(255,167,86,1)] to-[rgba(238,96,44,1)] bg-clip-text text-transparent">
                {t.line2Highlight}
              </span>{" "}
              {t.line2After}
            </span>
          )}
        </motion.h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="relative z-20 mx-auto mt-3 max-w-xl px-4 text-center text-sm font-medium text-gray-700 md:mt-2 md:text-base"
      >
        {t.tagline}
      </motion.p>

      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
        className="relative z-20 mx-auto mt-4 grid w-full max-w-md gap-2 px-4 text-left md:mt-3 md:max-w-lg md:gap-1.5"
      >
        {t.bullets.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 rounded-lg border border-black/5 bg-white/70 px-3 py-2 text-sm text-gray-800 shadow-sm backdrop-blur-sm md:py-1.5 md:text-[13px]"
          >
            <span
              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FB4C01] text-[10px] font-bold text-white"
              aria-hidden
            >
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="z-20 mb-6 mt-5 flex w-full flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:px-8 md:mb-6 md:mt-4"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(251,76,1,0)",
              "0 0 24px 6px rgba(251,76,1,0.18)",
              "0 0 0 0 rgba(251,76,1,0)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-[6px]"
        >
          <LocalizedLink
            href="#demo"
            className="inline-flex h-12 w-full items-center justify-center rounded-[6px] bg-[linear-gradient(181deg,#5E5E5E_18.12%,#000_99.57%)] px-6 py-3 text-sm font-bold text-white shadow-[0px_4px_8px_0px_rgba(3,7,18,0.06),0px_2px_4px_0px_rgba(3,7,18,0.06),0px_0px_0px_1px_rgba(3,7,18,0.08),0px_1px_1px_2px_rgba(255,255,255,0.40)_inset,0px_-1px_5px_2px_rgba(255,255,255,0.40)_inset] transition duration-200 hover:-translate-y-0.5 sm:w-48"
          >
            {t.cta}
          </LocalizedLink>
        </motion.div>
      </motion.div>

      <HeroPhone t={t} />
    </div>
  );
}
