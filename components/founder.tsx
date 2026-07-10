"use client";

import { useState } from "react";
import Image from "next/image";
import { m as motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";

const LEAD_WEBHOOK = "https://n8n.pestly.de/webhook/lead-new";

export default function Founder() {
  const { dict } = useTranslation();
  const t = dict.founder;
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneV = phone.trim();
    if (!phoneV) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(LEAD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Callback request",
          phone: phoneV,
          message: "Founder section — call me back",
          source: "founder",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSent(true);
    } catch (err) {
      console.error("Webhook failed:", err);
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:items-start"
      >
        {/* Photo */}
        <div className="shrink-0">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl border-4 border-[#FB4C01]/20 shadow-xl md:h-56 md:w-56"
          >
            <Image
              src="/tom-berger.jpg"
              alt={t.name}
              width={224}
              height={224}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="mb-1 text-2xl font-bold text-gray-900">{t.heading}</h2>
          <p className="text-sm font-medium text-[#FB4C01]">
            {t.name} — {t.role}
          </p>

          <blockquote className="relative mt-4 text-lg leading-relaxed text-gray-600 md:text-xl">
            <span className="absolute -left-3 top-0 text-4xl text-[#FB4C01]/30">&ldquo;</span>
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Phone input */}
          {!sent ? (
            <form onSubmit={submit} className="mt-8 flex w-full max-w-md flex-col gap-3">
              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  inputMode="tel"
                  autoComplete="tel"
                  className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#FB4C01] focus:outline-none focus:ring-2 focus:ring-[#FB4C01]/20"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="shrink-0 rounded-lg bg-[#FB4C01] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#E04400] disabled:opacity-50"
                >
                  {loading ? "..." : t.cta}
                </button>
              </div>
              {error ? (
                <p className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-700" role="alert">
                  {error}
                </p>
              ) : null}
            </form>
          ) : (
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
            >
              {t.success}
            </motion.p>
          )}

          <p className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {t.dsgvo}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
