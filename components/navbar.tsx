"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";
import LocaleSwitcher from "./locale-switcher";
import LocalizedLink from "./localized-link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dict } = useTranslation();
  const t = dict.navbar;

  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0.5)", "rgba(255,255,255,0.85)"]);
  const navShadow = useTransform(scrollY, [0, 150], ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 30px rgba(0,0,0,0.12)"]);

  // Navbar link underline variants
  const linkUnderline = {
    rest: { scaleX: 0, originX: 0.5 },
    hover: { scaleX: 1, originX: 0.5 },
  };

  return (
    <div className="fixed inset-x-0 top-2 z-50 w-full">
      {/* Desktop nav */}
      <motion.div
        className="relative z-[100] mx-auto hidden flex-row items-center justify-between self-center rounded-full px-6 py-2 backdrop-blur-sm lg:flex"
        style={{
          width: "80%",
          backgroundColor: navBg,
          boxShadow: navShadow,
        }}
      >
        <LocalizedLink
          href="/"
          className="relative z-20 flex shrink-0 items-center justify-center px-2 py-1"
        >
          <Image
            src="/pestly-logo.png"
            alt="Pestly"
            width={400}
            height={112}
            className="h-20 w-auto"
            priority
          />
        </LocalizedLink>

        {/* Nav links */}
        <div className="hidden flex-1 flex-row items-center justify-center space-x-2 text-sm lg:flex">
          {t.navLinks.map((link) => (
            <motion.div
              key={link.href}
              className="relative"
              initial="rest"
              whileHover="hover"
            >
              <LocalizedLink
                href={link.href}
                className="relative px-2 py-1 text-sm text-black/90 transition-colors"
              >
                <span className="relative z-10">{link.label}</span>
                <motion.span
                  variants={linkUnderline}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute bottom-0 left-1/3 right-1/3 h-[2px] origin-center rounded-full bg-[#FB4C01]"
                />
              </LocalizedLink>
            </motion.div>
          ))}
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <LocalizedLink
            href="#demo"
            className="inline-flex items-center justify-center rounded-[6px] bg-[linear-gradient(181deg,#5E5E5E_18.12%,#000_99.57%)] px-3 py-1.5 text-sm font-bold text-white shadow-[0px_4px_8px_0px_rgba(3,7,18,0.06),0px_2px_4px_0px_rgba(3,7,18,0.06),0px_0px_0px_1px_rgba(3,7,18,0.08),0px_1px_1px_2px_rgba(255,255,255,0.40)_inset,0px_-1px_5px_2px_rgba(255,255,255,0.40)_inset] transition duration-200 hover:-translate-y-0.5"
          >
            {t.cta}
          </LocalizedLink>
        </div>
      </motion.div>

      {/* Mobile nav */}
      <div className="relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between lg:hidden">
        <div className="flex w-full items-center justify-between rounded-full bg-white/50 px-4 py-2 backdrop-blur-sm">
          <LocalizedLink href="/">
            <Image
              src="/pestly-logo.png"
              alt="Pestly"
              width={360}
              height={96}
              className="h-16 w-auto"
              priority
            />
          </LocalizedLink>

          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={t.menuLabel}
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-black transition-colors"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.svg
                    key="x"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="hamburger"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-2 w-full overflow-hidden rounded-2xl bg-white/90 shadow-lg backdrop-blur-md"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
                }}
                className="flex flex-col px-4 py-4"
              >
                {t.navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
                    }}
                  >
                    <LocalizedLink
                      href={link.href}
                      className="block rounded-lg px-3 py-3 text-sm font-medium text-black/80 transition-colors active:bg-orange-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </LocalizedLink>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
                  }}
                  className="mt-1 flex flex-col gap-2 border-t border-gray-100 pt-3"
                >
                  <LocalizedLink
                    href="#demo"
                    className="inline-flex items-center justify-center rounded-[6px] bg-[linear-gradient(181deg,#5E5E5E_18.12%,#000_99.57%)] px-3 py-2.5 text-sm font-bold text-white shadow-[0px_4px_8px_0px_rgba(3,7,18,0.06),0px_2px_4px_0px_rgba(3,7,18,0.06),0px_0px_0px_1px_rgba(3,7,18,0.08),0px_1px_1px_2px_rgba(255,255,255,0.40)_inset,0px_-1px_5px_2px_rgba(255,255,255,0.40)_inset]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t.cta}
                  </LocalizedLink>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
