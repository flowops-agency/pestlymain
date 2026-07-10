"use client";

import { useRouter } from "next/navigation";
import { m as motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";
import { locales } from "@/lib/i18n/dictionaries";

/** Shows only the *other* locale — one label, one click. */
export default function LocaleSwitcher() {
  const { locale } = useTranslation();
  const router = useRouter();

  const otherLocale = locales.find((l) => l !== locale)!;
  const label = otherLocale === "de" ? "Deutsch" : "English";
  const code = otherLocale === "de" ? "DE" : "EN";
  const aria =
    otherLocale === "de" ? "Zu Deutsch wechseln" : "Switch to English";

  const switchLocale = () => {
    const path = window.location.pathname;
    const newPath = path.replace(/^\/(de|en)/, `/${otherLocale}`);
    router.push(newPath);
  };

  return (
    <motion.button
      type="button"
      onClick={switchLocale}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex min-h-[44px] items-center gap-1.5 rounded-full border border-gray-200 bg-white/80 px-3 text-xs font-medium text-gray-600 shadow-sm transition-all hover:bg-white hover:text-gray-900 hover:shadow"
      aria-label={aria}
    >
      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gray-900 text-[8px] font-bold text-white">
        {code}
      </span>
      <span>{label}</span>
    </motion.button>
  );
}
