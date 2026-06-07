import { siteConfig } from "@/data/site-config";
import { siteConfigUs } from "@/data/site-config-us";

interface FooterProps {
  locale?: "de" | "us";
}

export default function Footer({ locale = "de" }: FooterProps) {
  const isUs = locale === "us";
  const config = isUs ? siteConfigUs : siteConfig;
  const year = config.copyright;

  const productLinks = isUs
    ? [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
        { label: "Request demo", href: config.tallyUrl, external: true },
      ]
    : [
        { label: "Funktionen", href: "#features" },
        { label: "Preise", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
        { label: "Demo anfragen", href: config.tallyUrl, external: true },
      ];

  const legalLinks = isUs
    ? [
        { label: "Legal Notice", href: "/us/impressum" },
        { label: "Privacy Policy", href: "/us/privacy" },
      ]
    : [
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
        { label: "AGB", href: "/agb" },
      ];

  const brandDesc = isUs
    ? "AI Customer Service for Pest Control & Exterminators."
    : "KI-Kundenservice für Schädlingsbekämpfer & Kammerjäger.";

  return (
    <footer className="relative bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      {/* Decorative gradient bar */}
      <div className="h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />

      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2 text-lg font-bold text-[var(--color-text)]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="28" height="28" rx="8" fill="currentColor" className="text-[var(--color-primary)]" />
                <text x="16" y="21" textAnchor="middle" className="text-[var(--color-text-inverse)]" fontSize="16" fontWeight="700" fill="currentColor">P</text>
              </svg>
              <span>Pestly</span>
            </a>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              {brandDesc}
              <br />
              {isUs ? "Founded and led by " : "Gegründet und geführt von "}
              {config.founder.name}.
            </p>
          </div>

          {/* Product / Produkt */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">
              {isUs ? "Product" : "Produkt"}
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company / Unternehmen */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">
              {isUs ? "Company" : "Unternehmen"}
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-[var(--color-muted)]">
                  {config.founder.name}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {config.contact.email}
                </a>
              </li>
              {/* Language Switcher */}
              <li>
                <a
                  href={isUs ? "/" : "/us"}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {isUs ? "🇩🇪 DE Deutsch" : "🇺🇸 US English"}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">
              {isUs ? "Legal" : "Rechtliches"}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-muted)]">
            &copy; {year} {config.name}. {isUs ? "All rights reserved." : "Alle Rechte vorbehalten."}
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            {isUs
              ? "Built for Pest Control — not Silicon Valley."
              : "Gebaut für Schädlingsbekämpfer & Kammerjäger."}
          </p>
        </div>
      </div>
    </footer>
  );
}
