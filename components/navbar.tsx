"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";
import LocaleSwitcher from "./locale-switcher";
import LocalizedLink from "./localized-link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dict } = useTranslation();
  const t = dict.navbar;

  return (
    <div className="fixed inset-x-0 top-2 z-50 w-full">
      {/* Desktop nav */}
      <div
        className="relative z-[100] mx-auto hidden flex-row items-center justify-between self-center rounded-full px-8 py-3 backdrop-blur-sm lg:flex"
        style={{ width: "80%", backgroundColor: "rgba(255,255,255,0.5)" }}
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
            className="h-28 w-auto"
            priority
          />
        </LocalizedLink>

        {/* Nav links */}
        <div className="hidden flex-1 flex-row items-center justify-center space-x-2 text-sm lg:flex">
          {t.navLinks.map((link) => (
            <div key={link.href} className="relative">
              <LocalizedLink
                href={link.href}
                className="relative px-3 py-1.5 text-black/90 transition-colors"
              >
                <span className="relative z-10">{link.label}</span>
              </LocalizedLink>
            </div>
          ))}
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <LocalizedLink
            href="#demo"
            className="inline-flex items-center justify-center rounded-[6px] bg-[linear-gradient(181deg,#5E5E5E_18.12%,#000_99.57%)] px-4 py-2 text-sm font-bold text-white shadow-[0px_4px_8px_0px_rgba(3,7,18,0.06),0px_2px_4px_0px_rgba(3,7,18,0.06),0px_0px_0px_1px_rgba(3,7,18,0.08),0px_1px_1px_2px_rgba(255,255,255,0.40)_inset,0px_-1px_5px_2px_rgba(255,255,255,0.40)_inset] transition duration-200 hover:-translate-y-0.5"
          >
            {t.cta}
          </LocalizedLink>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between lg:hidden">
        <div className="flex w-full items-center justify-between rounded-full bg-white/50 px-6 py-3 backdrop-blur-sm">
          <LocalizedLink href="/">
            <Image
              src="/pestly-logo.png"
              alt="Pestly"
              width={360}
              height={96}
              className="h-24 w-auto"
              priority
            />
          </LocalizedLink>

          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={t.menuLabel}
              className="text-black"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileOpen ? (
                  <>
                    <path d="M18 6L6 18M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-2 w-full overflow-hidden rounded-2xl bg-white/90 px-4 py-4 backdrop-blur-sm"
            >
              <div className="flex flex-col gap-3">
                {t.navLinks.map((link) => (
                  <LocalizedLink
                    key={link.href}
                    href={link.href}
                    className="py-1 text-sm text-black/70"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </LocalizedLink>
                ))}
                <div className="mt-2 flex flex-col gap-2">
                  <LocalizedLink
                    href="#demo"
                    className="inline-flex items-center justify-center rounded-[6px] bg-[linear-gradient(181deg,#5E5E5E_18.12%,#000_99.57%)] px-4 py-2 text-sm font-bold text-white shadow-[0px_4px_8px_0px_rgba(3,7,18,0.06),0px_2px_4px_0px_rgba(3,7,18,0.06),0px_0px_0px_1px_rgba(3,7,18,0.08),0px_1px_1px_2px_rgba(255,255,255,0.40)_inset,0px_-1px_5px_2px_rgba(255,255,255,0.40)_inset] transition duration-200 hover:-translate-y-0.5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t.cta}
                  </LocalizedLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
