"use client";

import { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Globe } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site-config";
import { navLinksUs, siteConfigUs } from "@/data/site-config-us";

interface NavProps {
  locale?: "de" | "us";
}

export default function Nav({ locale = "de" }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isUs = locale === "us";
  const links = isUs ? navLinksUs : navLinks;
  const config = isUs ? siteConfigUs : siteConfig;
  const ctaLabel = isUs ? "Request Demo" : "kostenlose Demo anfragen";
  const mobileCta = isUs ? "Request Demo" : "kostenlose Demo anfragen";
  const switchLabel = isUs ? "DE Deutsch" : "US English";
  const switchHref = isUs ? "/" : "/us";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/85 backdrop-blur-xl shadow-sm border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-main flex items-center justify-between h-16 md:h-18"
        aria-label="Hauptnavigation"
      >
        {/* Logo */}
        <a
          href={isUs ? "/us" : "/"}
          className="flex items-center"
        >
          <img
            src="/logo.png"
            alt="Pestly"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Language Switcher */}
          <li>
            <a
              href={switchHref}
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
            >
              <Globe size={14} />
              {switchLabel}
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a
          href={config.tallyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-orange text-sm"
        >
          {ctaLabel}
          <ExternalLink size={16} />
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-[var(--color-text)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-[var(--color-surface)] shadow-xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-20 pb-8 px-6 flex flex-col gap-6">
            {/* Language Switcher (oben für schnellen Wechsel) */}
            <a
              href={switchHref}
              className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors bg-[var(--color-primary-bg)] rounded-lg px-3 py-2.5"
              onClick={() => setMenuOpen(false)}
            >
              <Globe size={16} />
              <span className="font-semibold">{switchLabel}</span>
              <span className="text-[var(--color-muted)] ml-auto text-xs">→</span>
            </a>
            <hr className="border-[var(--color-border)]" />
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-[var(--color-border)]" />
            <a
              href={config.tallyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange text-center"
            >
              {mobileCta}
              <ExternalLink size={16} className="inline" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)] to-transparent">
        <a
          href={config.tallyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-orange w-full justify-center text-base py-3.5 shadow-lg"
        >
          {mobileCta}
          <ExternalLink size={18} />
        </a>
      </div>
    </header>
  );
}
