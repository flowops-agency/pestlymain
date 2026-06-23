"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { dict } = useTranslation();
  const t = dict.cookieBanner;

  useEffect(() => {
    const accepted = localStorage.getItem("pestly-cookies");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("pestly-cookies", "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[200] border-t border-gray-200 bg-white/95 px-4 py-4 shadow-lg backdrop-blur-md pb-[calc(0.75rem+var(--safe-bottom,0px))] md:bottom-4 md:left-auto md:right-4 md:w-[400px] md:rounded-2xl md:border"
        >
          <p className="mb-3 text-sm leading-relaxed text-gray-600">{t.text}</p>
          <button
            onClick={accept}
            className="rounded-lg bg-[#FB4C01] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#E04400]"
          >
            {t.accept}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
