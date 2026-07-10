"use client";

import { useState, useSyncExternalStore } from "react";
import { Shield, BarChart3, Megaphone, Check } from "lucide-react";
import type { CookieSettingsDict } from "@/lib/i18n/dictionaries";
import {
  type CookiePrefs,
  getCookiePrefsServerSnapshot,
  readCookiePrefs,
  subscribeCookiePrefs,
  writeCookiePrefs,
} from "@/lib/cookie-storage";

const iconMap: Record<string, React.ElementType> = {
  essential: Shield,
  analytics: BarChart3,
  marketing: Megaphone,
};

export default function CookieSettingsContent({
  dict,
}: {
  dict: CookieSettingsDict;
}) {
  const stored = useSyncExternalStore(
    subscribeCookiePrefs,
    readCookiePrefs,
    getCookiePrefsServerSnapshot
  );
  const [draft, setDraft] = useState<CookiePrefs | null>(null);
  const [saved, setSaved] = useState(false);
  const prefs = draft ?? stored;

  const toggle = (key: keyof CookiePrefs) => {
    if (key === "essential") return;
    setDraft((prev) => {
      const base = prev ?? stored;
      return { ...base, [key]: !base[key] };
    });
    setSaved(false);
  };

  const save = () => {
    writeCookiePrefs(prefs);
    setDraft(null);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  };

  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">
            {dict.title}
          </h1>
          <p className="text-muted-foreground">{dict.subtitle}</p>
        </div>

        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          {dict.intro}
        </p>

        <div className="mb-8 space-y-4">
          {dict.categories.map((cat) => {
            const Icon = iconMap[cat.id] ?? Shield;
            const isOn = prefs[cat.id as keyof CookiePrefs];
            const isDisabled = cat.alwaysOn;
            return (
              <div
                key={cat.id}
                className="rounded-xl border border-gray-200 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="text-base font-semibold text-foreground">
                        {cat.title}
                      </h2>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={isOn}
                        aria-label={cat.title}
                        disabled={isDisabled}
                        onClick={() => toggle(cat.id as keyof CookiePrefs)}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${
                          isOn ? "bg-accent" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform ${
                            isOn ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={save}
          className="inline-flex items-center gap-2 rounded-lg bg-[#FB4C01] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#E04400]"
        >
          {saved ? (
            <>
              <Check size={16} />
              {dict.savedMessage}
            </>
          ) : (
            dict.saveButton
          )}
        </button>

        <p className="mt-6 text-xs text-muted-foreground">{dict.footerNote}</p>
      </div>
    </section>
  );
}
