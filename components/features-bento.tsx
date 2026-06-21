"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";

export default function FeaturesBento() {
  const { dict } = useTranslation();
  const t = dict.features;

  return (
    <section
      id="features"
      className="mx-auto w-full max-w-7xl px-4 py-4 md:my-20 md:px-8 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold md:text-6xl">
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
        className="mt-20 grid auto-rows-[25rem] gap-4 lg:grid-cols-5"
      >
        {/* Card 1 - Voice AI */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="group isolate relative flex flex-col justify-between overflow-hidden rounded-2xl !bg-[#F9FAFB] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] lg:col-span-3"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
              <svg className="h-full w-full" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {[30, 50, 80, 60, 90, 70, 40, 60, 100, 75, 55, 85, 65, 45, 70].map((h, i) => (
                  <rect key={i} x={100 + i * 40} y={250 - h} width="20" height={h * 2} rx="10" fill="#FB4C01" opacity={0.3 + (i % 5) * 0.15} />
                ))}
              </svg>
            </div>
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
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
          className="group isolate relative flex flex-col justify-between overflow-hidden rounded-2xl !bg-[#F9FAFB] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] lg:col-span-2"
        >
          <div className="flex h-full flex-col justify-between p-4">
            <div className="flex gap-6 p-2">
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="white" />
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" fill="#FB4C01" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500">{t.cards.multichannel.channels[0]}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-50">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="#25D366" />
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="white" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500">{t.cards.multichannel.channels[1]}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="white" />
                    <rect x="3" y="5" width="18" height="14" rx="2" fill="#FB4C01" />
                    <path d="M3 7l9 6 9-6" stroke="white" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500">{t.cards.multichannel.channels[2]}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="white" />
                    <rect x="2" y="4" width="20" height="16" rx="2" fill="#FB4C01" />
                    <path d="M22 7l-10 6L2 7" stroke="white" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500">{t.cards.multichannel.channels[3]}</span>
              </div>
            </div>
            <div className="relative mx-auto h-[160px] w-[240px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full border-2 border-orange-200 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                    P
                  </div>
                </div>
                {[
                  { top: "0%", left: "50%" },
                  { top: "70%", left: "0%" },
                  { top: "70%", left: "100%" },
                  { top: "100%", left: "50%" },
                ].map((dot, i) => (
                  <div key={i} className="absolute" style={{ top: dot.top, left: dot.left }}>
                    <div className="h-3 w-3 rounded-full bg-orange-400" />
                  </div>
                ))}
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
          className="group isolate relative flex flex-col justify-between overflow-hidden rounded-2xl !bg-[#F9FAFB] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] lg:col-span-2"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[200px] w-[200px]">
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white font-bold">KB</div>
              </div>
              {t.cards.knowledge.labels.map((label, i) => {
                const positions = [
                  { top: "0%", left: "50%" },
                  { top: "30%", left: "100%" },
                  { top: "70%", left: "100%" },
                  { top: "100%", left: "50%" },
                  { top: "70%", left: "0%" },
                  { top: "30%", left: "0%" },
                ];
                const pos = positions[i] || positions[0];
                return (
                <div key={label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: pos.top, left: pos.left }}>
                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 shadow-sm text-xs text-gray-600 whitespace-nowrap">
                    {label}
                  </div>
                </div>
              );
              })}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 h-[70%] bg-gradient-to-t from-white via-white to-transparent" />
          <div className="absolute bottom-0 z-10 p-6">
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
          className="group isolate relative flex flex-col justify-between overflow-hidden rounded-2xl !bg-[#F9FAFB] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] lg:col-span-3"
        >
          <div className="flex h-full flex-col">
            <div className="flex gap-2 p-4">
              <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <div className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex h-full flex-col gap-4 px-2 md:flex-row md:px-10">
              <div className="flex-shrink-0 rounded-xl bg-[#F9FAFB] p-4 shadow-sm" style={{ minWidth: "200px" }}>
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
          <div className="absolute inset-x-0 bottom-0 z-10 h-[40%] bg-gradient-to-t from-white via-white to-transparent pointer-events-none" />
          <div className="absolute bottom-0 z-10 p-6">
            <h3 className="inline-block text-[22px] font-[500] leading-[31px] text-black">{t.cards.calendar.title}</h3>
            <p className="mt-2 max-w-sm text-sm font-normal tracking-tight text-neutral-400">{t.cards.calendar.desc}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
