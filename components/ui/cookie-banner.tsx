"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "pestly_cookie_consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user already consented
    if (localStorage.getItem(STORAGE_KEY)) {
      setDismissed(true);
      return;
    }
    // Show banner after a short delay
    const timer = setTimeout(() => setShow(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setShow(false);
    // Remove from DOM after animation completes
    setTimeout(() => setDismissed(true), 500);
  };

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9999] transition-all duration-500 ease-out ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
      role="dialog"
      aria-label="Cookie-Einwilligung"
    >
      <div className="bg-[var(--color-surface)] border-t border-[var(--color-border)] shadow-xl">
        <div className="container-main py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <strong className="block text-sm font-semibold text-[var(--color-text)] mb-1">
              🍪 Hinweis zu Cookies
            </strong>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              Diese Website verwendet Cloudflare Turnstile zur Sicherheitsprüfung.
              Dabei werden technisch notwendige Cookies gesetzt. Mit Klick auf
              „Akzeptieren" stimmst du der Verwendung zu. Weitere Infos in der{" "}
              <a
                href="/datenschutz"
                className="text-[var(--color-primary)] hover:text-[var(--color-orange)] underline transition-colors"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleAccept}
              className="btn-primary text-sm whitespace-nowrap"
            >
              Akzeptieren
            </button>
            <button
              onClick={() => {
                setShow(false);
                setTimeout(() => setDismissed(true), 500);
              }}
              className="p-2 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              aria-label="Schließen"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
