"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";

export default function DemoCta() {
  const { dict } = useTranslation();
  const t = dict.demo;
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() && !email.trim()) return;
    // TODO: send to backend
    console.log("Demo request:", { phone, email });
    setSent(true);
  };

  return (
    <section id="demo" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{t.heading}</h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">{t.subtitle}</p>

        {!sent ? (
          <form onSubmit={submit} className="mt-8 flex w-full flex-col gap-3">
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.phonePlaceholder}
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#FB4C01] focus:outline-none focus:ring-2 focus:ring-[#FB4C01]/20"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#FB4C01] focus:outline-none focus:ring-2 focus:ring-[#FB4C01]/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[linear-gradient(181deg,#5E5E5E_18.12%,#000_99.57%)] px-8 py-3 text-sm font-bold text-white shadow-[0px_4px_8px_0px_rgba(3,7,18,0.06),0px_2px_4px_0px_rgba(3,7,18,0.06),0px_0px_0px_1px_rgba(3,7,18,0.08),0px_1px_1px_2px_rgba(255,255,255,0.40)_inset,0px_-1px_5px_2px_rgba(255,255,255,0.40)_inset] transition duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              {t.cta}
            </button>
          </form>
        ) : (
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
          >
            {t.success}
          </motion.p>
        )}

        <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          {t.dsgvo}
        </p>
      </motion.div>
    </section>
  );
}
