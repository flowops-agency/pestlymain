"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import type { FeaturesBentoDict } from "@/lib/i18n/dictionaries";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WAVE_BARS = [
  { id: "w01", h: 28, delay: 0 },
  { id: "w02", h: 48, delay: 0.05 },
  { id: "w03", h: 72, delay: 0.1 },
  { id: "w04", h: 42, delay: 0.15 },
  { id: "w05", h: 90, delay: 0.2 },
  { id: "w06", h: 58, delay: 0.25 },
  { id: "w07", h: 36, delay: 0.3 },
  { id: "w08", h: 78, delay: 0.35 },
  { id: "w09", h: 96, delay: 0.4 },
  { id: "w10", h: 50, delay: 0.45 },
  { id: "w11", h: 64, delay: 0.5 },
  { id: "w12", h: 84, delay: 0.55 },
  { id: "w13", h: 40, delay: 0.6 },
  { id: "w14", h: 70, delay: 0.65 },
  { id: "w15", h: 55, delay: 0.7 },
  { id: "w16", h: 88, delay: 0.75 },
  { id: "w17", h: 46, delay: 0.8 },
  { id: "w18", h: 62, delay: 0.85 },
] as const;

const CHANNEL_NODES = [
  { id: "phone", top: 8, left: 8, color: "from-orange-50 to-orange-100", icon: "phone" as const },
  { id: "wa", top: 8, right: 8, color: "from-green-50 to-green-100", icon: "wa" as const },
  { id: "sms", bottom: 8, left: 8, color: "from-orange-50 to-orange-100", icon: "sms" as const },
  { id: "mail", bottom: 8, right: 8, color: "from-orange-50 to-orange-100", icon: "mail" as const },
];

const WIRE_PATHS = [
  { id: "wire-tl", d: "M40 36 L140 100", delay: 0 },
  { id: "wire-tr", d: "M240 36 L140 100", delay: 0.2 },
  { id: "wire-bl", d: "M40 164 L140 100", delay: 0.4 },
  { id: "wire-br", d: "M240 164 L140 100", delay: 0.6 },
];

type Cards = FeaturesBentoDict["cards"];

export function FeatureVoiceCard({
  card,
  shouldAnimate,
}: {
  card: Cards["voice"];
  shouldAnimate: boolean;
}) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6, boxShadow: "0 24px 50px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group isolate relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl !bg-[#F9FAFB] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] lg:col-span-3"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-8 flex h-[55%] items-end justify-center gap-1.5 px-8 opacity-80 sm:gap-2">
          {WAVE_BARS.map((bar) => (
            <motion.div
              key={bar.id}
              className="w-2 origin-bottom rounded-full bg-gradient-to-t from-[#FB4C01] to-[#FFB088] sm:w-2.5"
              style={{ height: bar.h, opacity: shouldAnimate ? undefined : 0.7 }}
              animate={
                shouldAnimate
                  ? {
                      scaleY: [0.45, 1, 0.55, 0.9, 0.45],
                      opacity: [0.45, 1, 0.6, 0.95, 0.45],
                    }
                  : { scaleY: 1, opacity: 0.7 }
              }
              transition={
                shouldAnimate
                  ? {
                      duration: 0.95,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: bar.delay,
                    }
                  : { duration: 0 }
              }
            />
          ))}
        </div>
        <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-black/5 bg-white/90 px-3 py-1.5 shadow-sm">
          <motion.div
            className="h-2 w-2 rounded-full bg-green-500"
            animate={
              shouldAnimate
                ? { opacity: [0.3, 1, 0.3], scale: [0.9, 1.2, 0.9] }
                : undefined
            }
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-sm font-medium text-gray-700">{card.status}</span>
        </div>
        <div className="absolute top-5 right-5 flex gap-1.5">
          {["DE", "EN"].map((lang) => (
            <span
              key={lang}
              className="rounded-md bg-white/90 px-2 py-1 text-[11px] font-bold text-[#FB4C01] shadow-sm ring-1 ring-orange-100"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 h-[55%] bg-gradient-to-t from-white via-white to-transparent" />
      <div className="absolute bottom-0 z-10 p-6">
        <h3 className="inline-block text-[22px] font-[500] leading-[31px] text-black">
          {card.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm font-normal tracking-tight text-neutral-400">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function FeatureMultichannelCard({
  card,
  shouldAnimate,
}: {
  card: Cards["multichannel"];
  shouldAnimate: boolean;
}) {
  const channels = card.channels.slice(0, 4);

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6, boxShadow: "0 24px 50px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group isolate relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl !bg-[#F9FAFB] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] lg:col-span-2"
    >
      <div className="relative flex flex-1 flex-col px-3 pt-4">
        <div className="relative mx-auto h-[200px] w-full max-w-[280px]">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 280 200"
            fill="none"
            aria-hidden
          >
            {WIRE_PATHS.map((wire) => (
              <g key={wire.id}>
                <path d={wire.d} stroke="#FDBA8C" strokeWidth="2" strokeLinecap="round" />
                <motion.path
                  d={wire.d}
                  stroke="#FB4C01"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="10 120"
                  initial={false}
                  animate={
                    shouldAnimate
                      ? { strokeDashoffset: [130, -130], opacity: 1 }
                      : { strokeDashoffset: 0, opacity: 0 }
                  }
                  transition={
                    shouldAnimate
                      ? {
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "linear",
                          delay: wire.delay,
                        }
                      : { duration: 0 }
                  }
                />
              </g>
            ))}
          </svg>

          {CHANNEL_NODES.map((pos, idx) => (
            <div
              key={pos.id}
              className="absolute flex flex-col items-center gap-1"
              style={{
                top: pos.top,
                left: pos.left,
                right: pos.right,
                bottom: pos.bottom,
              }}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${pos.color} shadow-sm ring-1 ring-black/5`}
              >
                <ChannelIcon kind={pos.icon} />
              </div>
              <span className="text-[10px] font-medium text-gray-500">
                {channels[idx]}
              </span>
            </div>
          ))}

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={
                shouldAnimate
                  ? {
                      boxShadow: [
                        "0 0 0 0 rgba(251,76,1,0.25)",
                        "0 0 0 12px rgba(251,76,1,0)",
                        "0 0 0 0 rgba(251,76,1,0.25)",
                      ],
                    }
                  : undefined
              }
              transition={{ duration: 2, repeat: Infinity }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md ring-2 ring-orange-200"
            >
              <Image
                src="/pestly-icon.svg"
                alt="Pestly"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative z-10 p-6 pt-2">
        <h3 className="inline-block text-[22px] font-[500] leading-[31px] text-black">
          {card.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm font-normal tracking-tight text-neutral-400">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function FeatureKnowledgeCard({
  card,
  chrome,
}: {
  card: Cards["knowledge"];
  chrome: { title: string; synced: string; footer: string };
}) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6, boxShadow: "0 24px 50px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group isolate flex min-h-[320px] flex-col overflow-hidden rounded-2xl !bg-[#F9FAFB] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] lg:col-span-2"
    >
      <div className="flex flex-1 items-center justify-center p-4 pt-5">
        <div className="w-full max-w-[260px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-3 py-2">
            <Image
              src="/pestly-icon.svg"
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain"
            />
            <span className="text-xs font-semibold text-gray-700">
              {chrome.title}
            </span>
            <span className="ml-auto rounded bg-green-50 px-1.5 py-0.5 text-[10px] font-medium text-green-700">
              {chrome.synced}
            </span>
          </div>
          <div className="space-y-1.5 p-2.5">
            {card.labels.slice(0, 5).map((label, idx) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg border border-gray-100 bg-[#FAFAFA] px-2.5 py-1.5"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    idx % 2 === 0 ? "bg-orange-500" : "bg-emerald-500"
                  }`}
                />
                <span className="flex-1 truncate text-xs text-gray-700">
                  {label}
                </span>
                <span className="text-[10px] text-gray-400">
                  {idx === 0 ? "24/7" : idx === 1 ? "€" : "ok"}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 bg-orange-50/60 px-3 py-2">
            <p className="text-[10px] font-medium text-orange-800">
              {chrome.footer}
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 pt-0">
        <h3 className="inline-block text-[22px] font-[500] leading-[31px] text-black">
          {card.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm font-normal tracking-tight text-neutral-400">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function FeatureCalendarCard({ card }: { card: Cards["calendar"] }) {
  const days = Array.from({ length: 30 }, (_, n) => n + 1);

  return (
    <motion.div
      variants={cardVariant}
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
            <div className="mb-3 text-center">
              <p className="text-sm font-medium">{card.months.label}</p>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {card.months.days.map((d) => (
                <span key={d} className="font-medium text-gray-400">
                  {d}
                </span>
              ))}
              {days.map((day) => (
                <span
                  key={`cal-day-${day}`}
                  className={`rounded p-1 ${
                    day === 15
                      ? "bg-orange-500 text-white"
                      : day === 16
                        ? "bg-orange-100 text-orange-600"
                        : ""
                  }`}
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-[#F9FAFB] p-6 shadow-sm">
            <div className="space-y-4">
              {card.integrations.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between border-b border-gray-100 pb-2"
                >
                  <span className="text-sm text-gray-700">{item.name}</span>
                  <span className="text-xs text-green-600">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 pt-2">
        <h3 className="inline-block text-[22px] font-[500] leading-[31px] text-black">
          {card.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm font-normal tracking-tight text-neutral-400">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

function ChannelIcon({ kind }: { kind: "phone" | "wa" | "sms" | "mail" }) {
  if (kind === "wa") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#25D366" />
        <path
          d="M7 17.5l1.5-4.5A5.5 5.5 0 1 1 17.5 12a5.5 5.5 0 0 1-5.5 5.5H7z"
          fill="white"
        />
      </svg>
    );
  }
  if (kind === "sms") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FB4C01" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    );
  }
  if (kind === "mail") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FB4C01" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"
        fill="#FB4C01"
      />
    </svg>
  );
}
