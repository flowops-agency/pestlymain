"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";

const LEAD_WEBHOOKS = {
  de: "https://n8n.pestly.de/webhook/lead-de",
  en: "https://n8n.pestly.de/webhook/lead-us",
} as const;

export default function DemoCta() {
  const { dict, locale } = useTranslation();
  const t = dict.demo;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() && !email.trim() && !phone.trim()) return;
    setLoading(true);
    try {
      await fetch(LEAD_WEBHOOKS[locale], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      });
    } catch (err) {
      console.error("Webhook failed:", err);
    }
    setLoading(false);
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
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#FB4C01] focus:outline-none focus:ring-2 focus:ring-[#FB4C01]/20"
            />
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.phonePlaceholder}
                inputMode="tel"
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#FB4C01] focus:outline-none focus:ring-2 focus:ring-[#FB4C01]/20"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                inputMode="email"
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#FB4C01] focus:outline-none focus:ring-2 focus:ring-[#FB4C01]/20"
              />
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              rows={3}
              className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#FB4C01] focus:outline-none focus:ring-2 focus:ring-[#FB4C01]/20"
            />
            <motion.div
              animate={{
                boxShadow: name.trim() || phone.trim() || email.trim()
                  ? ["0 0 0 0 rgba(251,76,1,0)", "0 0 16px 3px rgba(251,76,1,0.15)", "0 0 0 0 rgba(251,76,1,0)"]
                  : "0 0 0 0 rgba(251,76,1,0)",
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-lg"
            >
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-lg bg-[linear-gradient(181deg,#5E5E5E_18.12%,#000_99.57%)] px-8 py-4 text-sm font-bold text-white shadow-[0px_4px_8px_0px_rgba(3,7,18,0.06),0px_2px_4px_0px_rgba(3,7,18,0.06),0px_0px_0px_1px_rgba(3,7,18,0.08),0px_1px_1px_2px_rgba(255,255,255,0.40)_inset,0px_-1px_5px_2px_rgba(255,255,255,0.40)_inset] transition duration-200 hover:-translate-y-0.5 disabled:opacity-50 sm:w-auto"
              >
                {loading ? "..." : t.cta}
              </button>
            </motion.div>
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
