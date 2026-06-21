"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";
import LocalizedLink from "./localized-link";

export default function Hero() {
  const { dict } = useTranslation();
  const t = dict.hero;

  return (
    <div
      id="home"
      className="relative mx-auto my-2 flex max-w-7xl flex-col items-center justify-center overflow-hidden rounded-b-3xl border border-black md:border-0 px-4 pb-16 pt-24 md:my-14 md:px-8 md:pb-8"
      style={{
        background:
          "linear-gradient(to top, rgba(247,135,67,1) 0%, rgba(255,244,239,1) 50%, rgba(255,255,255,1) 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 mx-auto mb-4 max-w-6xl text-balance text-center text-4xl font-semibold tracking-tight text-gray-700 md:text-7xl"
      >
        <h2 className="block bg-gradient-to-b from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)] bg-clip-text text-transparent">
          {t.line1Before}{" "}
          <span className="bg-gradient-to-b from-[rgba(255,167,86,1)] to-[rgba(238,96,44,1)] bg-clip-text text-transparent">
            {t.line1Highlight}
          </span>
        </h2>
        {(t.line2Before || t.line2Highlight || t.line2After) && (
          <h2 className="block bg-gradient-to-b from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)] bg-clip-text text-transparent py-2">
            {t.line2Before}{" "}
            <span className="bg-gradient-to-b from-[rgba(255,167,86,1)] to-[rgba(238,96,44,1)] bg-clip-text text-transparent">
              {t.line2Highlight}
            </span>{" "}
            {t.line2After}
          </h2>
        )}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="relative z-20 mx-auto mt-8 max-w-2xl px-4 text-center text-base/6 text-gray-600"
        dangerouslySetInnerHTML={{ __html: t.subtitle }}
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="z-10 mb-8 mt-6 flex w-full flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:px-8 md:mb-12"
      >
        <LocalizedLink
          href="#demo"
          className="inline-flex h-12 w-full items-center justify-center rounded-[6px] bg-[linear-gradient(181deg,#5E5E5E_18.12%,#000_99.57%)] px-6 py-3 text-sm font-bold text-white shadow-[0px_4px_8px_0px_rgba(3,7,18,0.06),0px_2px_4px_0px_rgba(3,7,18,0.06),0px_0px_0px_1px_rgba(3,7,18,0.08),0px_1px_1px_2px_rgba(255,255,255,0.40)_inset,0px_-1px_5px_2px_rgba(255,255,255,0.40)_inset] transition duration-200 hover:-translate-y-0.5 sm:w-48"
        >
          {t.cta}
        </LocalizedLink>
      </motion.div>

      {/* Phone mockup */}
      <div className="relative w-full min-h-[22rem] pt-[1.5rem]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute left-0 right-0 top-0 z-10"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative mx-auto h-[520px] w-[280px] md:h-[600px] md:w-[320px]"
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
            <span className="font-medium text-[0.9rem]">9:41</span>
            <div className="flex items-center gap-1">
              <svg width="20" height="13" viewBox="0 0 20 13" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.2 1.72656C19.2 1.10524 18.7224 0.601562 18.1333 0.601562H17.0667C16.4776 0.601562 16 1.10524 16 1.72656V11.4766C16 12.0979 16.4776 12.6016 17.0667 12.6016H18.1333C18.7224 12.6016 19.2 12.0979 19.2 11.4766V1.72656ZM11.7659 3H12.8326C13.4217 3 13.8992 3.51577 13.8992 4.152V11.448C13.8992 12.0842 13.4217 12.6 12.8326 12.6H11.7659C11.1768 12.6 10.6992 12.0842 10.6992 11.448V4.152C10.6992 3.51577 11.1768 3 11.7659 3ZM7.43411 5.60156H6.36745C5.77834 5.60156 5.30078 6.1239 5.30078 6.76823V11.4349C5.30078 12.0792 5.77834 12.6016 6.36745 12.6016H7.43411C8.02322 12.6016 8.50078 12.0792 8.50078 11.4349V6.76823C8.50078 6.1239 8.02322 5.60156 7.43411 5.60156ZM2.13333 8H1.06667C0.477563 8 0 8.51487 0 9.15V11.45C0 12.0851 0.477563 12.6 1.06667 12.6H2.13333C2.72244 12.6 3.2 12.0851 3.2 11.45V9.15C3.2 8.51487 2.72244 8 2.13333 8Z" fill="black" />
              </svg>
              <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.27052 3.11983C11.7576 3.11993 14.1496 4.02494 15.9521 5.6478C16.0879 5.77309 16.3048 5.77151 16.4385 5.64426L17.736 4.40419C17.8037 4.33964 17.8414 4.25222 17.8409 4.16125C17.8403 4.07029 17.8015 3.98328 17.733 3.9195C13.002 -0.374207 5.53829 -0.374207 0.807275 3.9195C0.738743 3.98324 0.699859 4.07021 0.699227 4.16118C0.698595 4.25214 0.736267 4.3396 0.803908 4.40419L2.10177 5.64426C2.23537 5.7717 2.45249 5.77328 2.58814 5.6478C4.39088 4.02483 6.78317 3.11982 9.27052 3.11983ZM9.26717 7.26377C10.6245 7.26369 11.9334 7.76595 12.9395 8.67297C13.0756 8.80169 13.2899 8.7989 13.4226 8.66668L14.7099 7.3718C14.7777 7.30388 14.8153 7.21174 14.8143 7.116C14.8133 7.02025 14.7738 6.92889 14.7047 6.86236C11.6408 4.02505 6.8961 4.02505 3.83227 6.86236C3.76306 6.92889 3.72357 7.0203 3.72266 7.11607C3.72176 7.21185 3.7595 7.30398 3.82744 7.3718L5.11435 8.66668C5.247 8.7989 5.46136 8.80169 5.59745 8.67297C6.6029 7.76655 7.91074 7.26433 9.26717 7.26377ZM11.7916 10.0035C11.7935 10.1069 11.7565 10.2066 11.6892 10.279L9.51249 12.6883C9.44868 12.7591 9.36169 12.799 9.27092 12.799C9.18015 12.799 9.09316 12.7591 9.02935 12.6883L6.85232 10.279C6.7851 10.2066 6.74804 10.1069 6.75 10.0035C6.75196 9.90008 6.79291 9.80196 6.86297 9.73267C8.08543 8.52178 10.4524 8.52178 11.6749 9.73267C11.7449 9.80196 11.7859 9.90008 11.7879 10.0035H11.7916Z" fill="black" />
              </svg>
            </div>
          </div>

          <div className="absolute inset-[5px] overflow-hidden rounded-[45px] bg-white">
            <div className="absolute inset-0 top-[2.3rem]">
              <div className="flex w-full flex-col items-center px-2 pt-1">
              <div className="flex w-full items-center justify-between p-2">
                <div className="flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="#FB4C01" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{t.currentCall}</span>
                </div>
                <span className="text-xs font-medium text-orange-500">{t.statusConnected}</span>
              </div>

              <div className="flex w-full flex-col items-center px-2">
                <div className="w-full py-2">
                  <div className="flex items-start gap-2">
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
                      <p className="text-gray-800 font-medium">{t.callerName}</p>
                      <p className="text-gray-500 mt-1">{t.callerMsg}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full py-2">
                  <div className="flex items-start justify-end gap-2">
                    <div className="max-w-[80%] rounded-[10px_0px_10px_10px] bg-gradient-to-br from-[#FFA756] to-[#EE602C] p-3 text-sm text-white shadow-sm">
                      <p className="font-medium">{t.aiName}</p>
                      <p className="mt-1 opacity-90">{t.aiResponse}</p>
                    </div>
                    <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-[#FFA756] to-[#EE602C] flex items-center justify-center text-xs font-bold text-white">
                      P
                    </div>
                  </div>
                </div>

                <div className="w-full px-2 py-3">
                  <div className="rounded-xl bg-[#FAF0E6] p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M8 2v3M16 2v3M3 9h18M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                        <span className="text-sm font-medium text-[#5D4037]">{t.bookingTitle}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-[#7B6B63]">{t.bookingTime1}</p>
                        <p className="text-xs text-[#7B6B63] mt-0.5">{t.bookingTime2}</p>
                      </div>
                      <span className="rounded-full bg-[#E6D5CC] px-3 py-1 text-xs text-[#7B6B63]">
                        {t.bookingTag}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full px-2 pt-1">
                  <div className="flex items-center justify-between rounded-lg bg-[#103685] px-3 py-2 text-white text-xs">
                    <span>{t.summaryLine1}</span>
                    <span>{t.summaryLine2}</span>
                  </div>
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
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <div className="absolute z-0 rounded-full border border-black/10" style={{ width: "1400px", height: "1400px" }} />
          <motion.div
            animate={{ y: [0, -4, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-0 rounded-full border border-black/5"
            style={{
              width: "1100px",
              height: "1100px",
              clipPath: "circle(50% at 50% 50%)",
              background: "radial-gradient(circle at center, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 20%, rgba(0,0,0,0.02) 40%, transparent 60%)"
            }}
          />
          <motion.div
            animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-2 rounded-full border border-black/5 shadow-[0_0_200px_80px_rgba(0,0,0,0.05)]"
            style={{ width: "800px", height: "800px" }}
          />
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
}
