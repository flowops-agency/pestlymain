"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";
import { locales } from "@/lib/i18n/dictionaries";

export default function LocaleSwitcher() {
  const { locale } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locales.find((l) => l !== locale)!;

  const switchLocale = () => {
    const newPath = pathname.replace(/^\/(de|en)/, `/${otherLocale}`);
    router.push(newPath);
  };

  return (
    <motion.button
      onClick={switchLocale}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm transition-all hover:bg-white hover:text-gray-900 hover:shadow"
      aria-label={locale === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
    >
      {/* DE badge */}
      <span
        className={`flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-bold ${
          locale === "de"
            ? "bg-black text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        DE
      </span>
      <span className="text-gray-300">/</span>
      {/* US badge */}
      <span
        className={`flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-bold ${
          locale === "en"
            ? "bg-[#FB4C01] text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        US
      </span>
    </motion.button>
  );
}
