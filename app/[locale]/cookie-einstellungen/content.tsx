"use client";

import { useState, useEffect } from "react";
import { Shield, BarChart3, Megaphone, Check } from "lucide-react";
import type { CookieSettingsDict } from "@/lib/i18n/dictionaries";

const STORAGE_KEY = "pestly-cookie-preferences";

const iconMap: Record<string, React.ElementType> = {
  essential: Shield,
  analytics: BarChart3,
  marketing: Megaphone,
};

interface CookiePrefs {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPrefs: CookiePrefs = {
  essential: true,
  analytics: false,
  marketing: false,
};

export default function CookieSettingsContent({
  dict,
}: {
  dict: CookieSettingsDict;
}) {
  const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);
  const [saved, setSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<CookiePrefs>;
        setPrefs({ ...defaultPrefs, ...parsed });
      }
    } catch {
      // ignore corrupt storage
    }
    setLoaded(true);
  }, []);

  const toggle = (key: keyof CookiePrefs) => {
    if (key === "essential") return; // always on
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    // Also set legacy flag so the cookie banner doesn't show
    localStorage.setItem("pestly-cookies", "1");
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            {dict.title}
          </h1>
          <p className="text-muted-foreground">{dict.subtitle}</p>
        </div>

        {/* Intro */}
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          {dict.intro}
        </p>

        {/* Categories */}
        <div className="space-y-4 mb-8">
          {dict.categories.map((cat) => {
            const Icon = iconMap[cat.id] ?? Shield;
            const isOn = prefs[cat.id as keyof CookiePrefs];
            const isDisabled = cat.alwaysOn;
            return (
              <div
                key={cat.id}
                className="border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="text-base font-semibold text-foreground">
                        {cat.title}
                      </h2>
                      {/* Toggle */}
                      <button
                        type="button"
                        role="switch"
                        aria-checked={isOn}
                        disabled={isDisabled}
                        onClick={() =>
                          toggle(cat.id as keyof CookiePrefs)
                        }
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ${
                          isOn ? "bg-accent" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition-transform ${
                            isOn ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Save button */}
        <button
          onClick={save}
          disabled={!loaded}
          className="inline-flex items-center gap-2 rounded-lg bg-[#FB4C01] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#E04400] disabled:opacity-50"
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

        {/* Footer note */}
        <p className="text-xs text-muted-foreground mt-6">
          {dict.footerNote}
        </p>
      </div>
    </section>
  );
}
