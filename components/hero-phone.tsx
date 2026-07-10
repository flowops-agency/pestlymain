"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import type { HeroDict } from "@/lib/i18n/dictionaries";

const SPARKLES = [
  { id: "s1", left: "15%", top: "20%", duration: 2, delay: 0 },
  { id: "s2", left: "33%", top: "45%", duration: 2.5, delay: 0.4 },
  { id: "s3", left: "51%", top: "20%", duration: 3, delay: 0.8 },
  { id: "s4", left: "69%", top: "45%", duration: 3.5, delay: 1.2 },
  { id: "s5", left: "87%", top: "20%", duration: 4, delay: 1.6 },
];

export default function HeroPhone({ t }: { t: HeroDict }) {
  return (
    <div className="relative w-full min-h-[18rem] pt-2 sm:min-h-[22rem] md:min-h-[24rem] md:pt-1">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute inset-x-0 top-0 z-10"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative mx-auto h-[340px] w-[185px] sm:h-[420px] sm:w-[230px] md:h-[480px] md:w-[260px]"
        >
          <div className="absolute inset-0 rounded-[50px] border-[5px] border-black bg-black shadow-xl" />

          <div className="absolute left-1/2 top-[0.5rem] z-10 h-[1.8rem] w-[6rem] -translate-x-1/2 rounded-full bg-black">
            <div className="absolute right-3 top-1/2 h-[0.6rem] w-[0.6rem] -translate-y-1/2 rounded-full bg-[#1a1a1a] ring-[1.5px] ring-[#2a2a2a]">
              <div className="absolute inset-[1.5px] rounded-full bg-[#0f0f0f]">
                <div className="absolute inset-[1.5px] rounded-full bg-[#151515] ring-[0.75px] ring-[#202020]" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 top-[0.5rem] z-20 flex h-[1.8rem] items-center justify-between px-6 text-[0.65rem] text-black">
            <span className="text-[0.9rem] font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <svg width="20" height="13" viewBox="0 0 20 13" fill="none" aria-hidden>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2 1.7C19.2 1.1 18.7 0.6 18.1 0.6H17.1C16.5 0.6 16 1.1 16 1.7V11.5C16 12.1 16.5 12.6 17.1 12.6H18.1C18.7 12.6 19.2 12.1 19.2 11.5V1.7ZM11.8 3H12.8C13.4 3 13.9 3.5 13.9 4.2V11.4C13.9 12.1 13.4 12.6 12.8 12.6H11.8C11.2 12.6 10.7 12.1 10.7 11.4V4.2C10.7 3.5 11.2 3 11.8 3ZM7.4 5.6H6.4C5.8 5.6 5.3 6.1 5.3 6.8V11.4C5.3 12.1 5.8 12.6 6.4 12.6H7.4C8 12.6 8.5 12.1 8.5 11.4V6.8C8.5 6.1 8 5.6 7.4 5.6ZM2.1 8H1.1C0.5 8 0 8.5 0 9.2V11.5C0 12.1 0.5 12.6 1.1 12.6H2.1C2.7 12.6 3.2 12.1 3.2 11.5V9.2C3.2 8.5 2.7 8 2.1 8Z"
                  fill="black"
                />
              </svg>
              <svg width="18" height="13" viewBox="0 0 18 13" fill="none" aria-hidden>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.3 3.1C11.8 3.1 14.1 4 15.9 5.6C16.1 5.8 16.3 5.8 16.4 5.6L17.7 4.4C17.8 4.3 17.8 4.3 17.8 4.2C17.8 4.1 17.8 4 17.7 3.9C13 0.4 5.5 0.4 0.8 3.9C0.7 4 0.7 4.1 0.7 4.2C0.7 4.3 0.7 4.3 0.8 4.4L2.1 5.6C2.2 5.8 2.5 5.8 2.6 5.6C4.4 4 6.8 3.1 9.3 3.1ZM9.3 7.3C10.6 7.3 11.9 7.8 12.9 8.7C13.1 8.8 13.3 8.8 13.4 8.7L14.7 7.4C14.8 7.3 14.8 7.2 14.8 7.1C14.8 7 14.8 6.9 14.7 6.9C11.6 4 6.9 4 3.8 6.9C3.8 6.9 3.7 7 3.7 7.1C3.7 7.2 3.8 7.3 3.8 7.4L5.1 8.7C5.2 8.8 5.5 8.8 5.6 8.7C6.6 7.8 7.9 7.3 9.3 7.3ZM11.8 10C11.8 10.1 11.8 10.2 11.7 10.3L9.5 12.7C9.4 12.8 9.4 12.8 9.3 12.8C9.2 12.8 9.1 12.8 9 12.7L6.9 10.3C6.8 10.2 6.7 10.1 6.7 10C6.8 9.9 6.8 9.8 6.9 9.7C8.1 8.5 10.5 8.5 11.7 9.7C11.7 9.8 11.8 9.9 11.8 10Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className="absolute inset-[5px] overflow-hidden rounded-[45px] bg-white">
            <div className="absolute inset-0 top-[2.3rem]">
              <div className="flex w-full flex-col items-center px-2 pt-1">
                <div className="flex w-full items-center justify-between p-2">
                  <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"
                        stroke="#FB4C01"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t.currentCall}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-orange-500">
                    {t.statusConnected}
                  </span>
                </div>

                <div className="flex w-full flex-col items-center px-2">
                  <div className="w-full py-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                      className="flex items-start gap-2"
                    >
                      <div className="mt-1 h-8 w-8 shrink-0 overflow-hidden rounded-full bg-gray-300">
                        <Image
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.callerName)}&background=F77843&color=fff&size=64`}
                          alt={t.callerName}
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="max-w-[80%] rounded-[0px_10px_10px_10px] border border-[#E3E3E3] bg-white p-3 text-sm shadow-sm">
                        <p className="font-medium text-gray-800">{t.callerName}</p>
                        <p className="mt-1 text-gray-500">{t.callerMsg}</p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="w-full py-2">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                      className="flex items-start justify-end gap-2"
                    >
                      <div className="max-w-[80%] rounded-[10px_0px_10px_10px] bg-gradient-to-br from-[#FFA756] to-[#EE602C] p-3 text-sm text-white shadow-sm">
                        <p className="font-medium">{t.aiName}</p>
                        <p className="mt-1 opacity-90">{t.aiResponse}</p>
                      </div>
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FFA756] to-[#EE602C] text-xs font-bold text-white">
                        P
                      </div>
                    </motion.div>
                  </div>

                  <div className="w-full px-2 py-3">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
                      className="rounded-xl bg-[#FAF0E6] p-3"
                    >
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M8 2v3M16 2v3M3 9h18M3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9"
                            stroke="#5D4037"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                        <span className="text-sm font-medium text-[#5D4037]">
                          {t.bookingTitle}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-[#7B6B63]">{t.bookingTime1}</p>
                          <p className="mt-0.5 text-xs text-[#7B6B63]">
                            {t.bookingTime2}
                          </p>
                        </div>
                        <span className="rounded-full bg-[#E6D5CC] px-3 py-1 text-xs text-[#7B6B63]">
                          {t.bookingTag}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="w-full px-2 pt-1">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.7, ease: "easeOut" }}
                      className="flex items-center justify-between rounded-lg bg-[#103685] px-3 py-2 text-xs text-white"
                    >
                      <span>{t.summaryLine1}</span>
                      <span>{t.summaryLine2}</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-[2px] top-[170px] h-12 w-[3px] rounded-l-lg bg-black" />
          <div className="absolute -left-[2px] top-[120px] h-12 w-[3px] rounded-r-lg bg-black" />
          <div className="absolute -left-[2px] top-[170px] h-14 w-[3px] rounded-r-lg bg-black" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 z-0 hidden items-center justify-center md:flex"
        >
          <div
            className="absolute z-0 rounded-full border border-black/10"
            style={{ width: "1400px", height: "1400px" }}
          />
          <motion.div
            animate={{ y: [0, -4, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-0 rounded-full border border-black/5"
            style={{
              width: "1100px",
              height: "1100px",
              clipPath: "circle(50% at 50% 50%)",
              background:
                "radial-gradient(circle at center, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 20%, rgba(0,0,0,0.02) 40%, transparent 60%)",
            }}
          />
          <motion.div
            animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-2 rounded-full border border-black/5 shadow-[0_0_200px_80px_rgba(0,0,0,0.05)]"
            style={{ width: "800px", height: "800px" }}
          />
        </motion.div>

        <div className="hidden sm:block">
          {SPARKLES.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute z-20 h-2 w-2 rounded-full bg-orange-400/30"
              style={{ left: dot.left, top: dot.top }}
              animate={{
                y: [0, -12, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: dot.delay,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
