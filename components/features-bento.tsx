"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";
import { useDeviceAnimation } from "@/components/animation-wrappers";

export default function FeaturesBento() {
  const { dict } = useTranslation();
  const t = dict.features;
  const { shouldAnimate } = useDeviceAnimation();

  return (
    <section
      id="features"
      className="mx-auto w-full max-w-7xl px-4 py-16 md:my-20 md:px-8 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2 className="font-bold text-balance"
            style={{ fontSize: "var(--text-heading)" }}>
          {t.headingBefore}{" "}
          <span className="text-[#FF7757]">{t.headingHighlight}</span>{" "}
          {t.headingAfter}
        </h2>
        <p className="mx-auto max-w-2xl text-gray-500">{t.subtitle}</p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="mt-20 grid auto-rows-auto gap-4 lg:grid-cols-5"
      >
        {/* Card 1 - Voice AI */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          whileHover={{ y: -6, boxShadow: "0 24px 50px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group isolate relative flex flex-col justify-between overflow-hidden rounded-2xl !bg-[#F9FAFB] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] lg:col-span-3"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
              <svg className="h-full w-full" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {[30, 50, 80, 60, 90, 70, 40, 60, 100, 75, 55, 85, 65, 45, 70].map((h, i) =>
                  shouldAnimate ? (
                    <motion.rect
                      key={i}
                      x={100 + i * 40}
                      y={250 - h}
                      width="20"
                      height={h * 2}
                      rx="10"
                      fill="#FB4C01"
                      opacity={0.3 + (i % 5) * 0.15}
                      animate={{ height: [h * 2, h * 2 + 20, h * 2], y: [250 - h, 250 - h - 10, 250 - h] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
                    />
                  ) : (
                    <rect
                      key={i}
                      x={100 + i * 40}
                      y={250 - h}
                      width="20"
                      height={h * 2}
                      rx="10"
                      fill="#FB4C01"
                      opacity={0.3 + (i % 5) * 0.15}
                    />
                  )
                )}
              </svg>
            </div>
            <div className="absolute top-6 left-6 flex items-center gap-2">
                <motion.div
                  className="h-2 w-2 rounded-full bg-green-500"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.2, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-sm text-gray-600 font-medium">{t.cards.voice.status}</span>
              </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 h-[70%] bg-gradient-to-t from-white via-white to-transparent" />
          <div className="absolute bottom-0 z-10 p-6">
            <h3 className="inline-block text-[22px] font-[500] leading-[31px] text-black">
              {t.cards.voice.title}
            </h3>
            <p className="mt-2 max-w-sm text-sm font-normal tracking-tight text-neutral-400">
              {t.cards.voice.desc}
            </p>
          </div>
        </motion.div>

        {/* Card 2 - Multi-Channel */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          whileHover={{ y: -6, boxShadow: "0 24px 50px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group isolate relative flex flex-col justify-between overflow-hidden rounded-2xl !bg-[#F9FAFB] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] lg:col-span-2"
        >
          <div className="flex h-full flex-col justify-between p-4">
            {/* Channel icons row */}
            <div className="flex justify-center gap-3 p-2">
              {/* Phone */}
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-sm"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" fill="#FB4C01" stroke="none" />
                  </svg>
                </motion.div>
                <span className="text-xs font-medium text-gray-500">{t.cards.multichannel.channels[0]}</span>
              </div>
              {/* WhatsApp */}
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-green-100 shadow-sm"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" fill="#25D366" />
                    <path d="M7 17.5l1.5-4.5A5.5 5.5 0 1 1 17.5 12a5.5 5.5 0 0 1-5.5 5.5H7z" fill="white" />
                    <path d="M9.5 10h5M9.5 12.5h3" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.div>
                <span className="text-xs font-medium text-gray-500">{t.cards.multichannel.channels[1]}</span>
              </div>
              {/* SMS */}
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-sm"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FB4C01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 9h8" /><path d="M8 13h6" />
                  </svg>
                </motion.div>
                <span className="text-xs font-medium text-gray-500">{t.cards.multichannel.channels[2]}</span>
              </div>
              {/* Email */}
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-sm"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FB4C01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="18" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </motion.div>
                <span className="text-xs font-medium text-gray-500">{t.cards.multichannel.channels[3]}</span>
              </div>
            </div>
            {/* Central "one number" visualization */}
            <div className="relative mx-auto h-[160px] w-[240px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {shouldAnimate ? (
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="h-20 w-20 rounded-full border-2 border-orange-200 flex items-center justify-center bg-white shadow-md"
                  >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      P
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-20 w-20 rounded-full border-2 border-orange-200 flex items-center justify-center bg-white shadow-md">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      P
                    </div>
                  </div>
                )}
                {/* Animated connection dots */}
                {[
                  { top: "0%", left: "50%" },
                  { top: "70%", left: "0%" },
                  { top: "70%", left: "100%" },
                  { top: "100%", left: "50%" },
                ].map((dot, i) =>
                  shouldAnimate ? (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{ top: dot.top, left: dot.left }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <div className="h-3 w-3 rounded-full bg-orange-400" />
                    </motion.div>
                  ) : (
                    <div
                      key={i}
                      className="absolute h-3 w-3 rounded-full bg-orange-400"
                      style={{ top: dot.top, left: dot.left }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 h-[40%] bg-gradient-to-t from-white via-white to-transparent" />
          <div className="absolute bottom-0 z-10 p-6">
            <h3 className="inline-block text-[22px] font-[500] leading-[31px] text-black">{t.cards.multichannel.title}</h3>
            <p className="mt-2 max-w-sm text-sm font-normal tracking-tight text-neutral-400">{t.cards.multichannel.desc}</p>
          </div>
        </motion.div>

        {/* Card 3 - Wissensdatenbank */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          whileHover={{ y: -6, boxShadow: "0 24px 50px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group isolate flex flex-col overflow-hidden rounded-2xl !bg-[#F9FAFB] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] lg:col-span-2"
        >
          <div className="flex flex-1 items-center justify-center py-8 min-h-[220px]">
            <div className="relative h-[220px] w-[220px]">
              {/* Zentrale KB Marke */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white font-bold shadow-lg"
                >
                  <span className="text-sm">KB</span>
                </motion.div>
              </div>
              {/* Orbitierende Labels */}
              {t.cards.knowledge.labels.map((label, i) => {
                const angle = (i / t.cards.knowledge.labels.length) * 360;
                const radius = 90;
                const x = 50 + (radius / 220) * 100 * Math.cos((angle * Math.PI) / 180);
                const y = 50 + (radius / 220) * 100 * Math.sin((angle * Math.PI) / 180);
                return (
                <motion.div
                  key={label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                >
                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm text-xs text-gray-600 whitespace-nowrap">
                    <motion.div
                      className="h-1.5 w-1.5 rounded-full bg-orange-400"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                    {label}
                  </div>
                </motion.div>
              );
              })}
            </div>
          </div>
          <div className="px-6 pb-6 pt-0">
            <h3 className="inline-block text-[22px] font-[500] leading-[31px] text-black">{t.cards.knowledge.title}</h3>
            <p className="mt-2 max-w-sm text-sm font-normal tracking-tight text-neutral-400">{t.cards.knowledge.desc}</p>
          </div>
        </motion.div>

        {/* Card 4 - Calendar */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          whileHover={{ y: -6, boxShadow: "0 24px 50px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group isolate flex flex-col overflow-hidden rounded-2xl !bg-[#F9FAFB] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] lg:col-span-3"
        >
          <div className="flex flex-col">
            <div className="flex gap-2 p-4">
              <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <div className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex flex-col gap-4 px-2 md:flex-row md:px-10">
              <div className="flex-shrink-0 rounded-xl bg-[#F9FAFB] p-4 shadow-sm sm:min-w-[200px]">
                <div className="text-center mb-3">
                  <p className="text-sm font-medium">{t.cards.calendar.months.label}</p>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  {t.cards.calendar.months.days.map((d) => (
                    <span key={d} className="text-gray-400 font-medium">{d}</span>
                  ))}
                  {Array.from({ length: 30 }, (_, i) => (
                    <span key={i} className={`p-1 rounded ${i + 1 === 15 ? "bg-orange-500 text-white" : i + 1 === 16 ? "bg-orange-100 text-orange-600" : ""}`}>
                      {i + 1}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-[#F9FAFB] p-6 shadow-sm">
                <div className="space-y-4">
                  {t.cards.calendar.integrations.map((item) => (
                    <div key={item.name} className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <span className="text-sm text-gray-700">{item.name}</span>
                      <span className="text-xs text-green-600">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 pb-6 pt-2">
            <h3 className="inline-block text-[22px] font-[500] leading-[31px] text-black">{t.cards.calendar.title}</h3>
            <p className="mt-2 max-w-sm text-sm font-normal tracking-tight text-neutral-400">{t.cards.calendar.desc}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
