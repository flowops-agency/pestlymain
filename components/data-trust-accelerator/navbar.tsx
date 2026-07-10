"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Governance", href: "#governance" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: "var(--dta-bg)" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        {/* Logo */}
        <Link href="/data-trust-accelerator" className="flex items-center gap-2.5">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ backgroundColor: "var(--dta-accent)" }}
          >
            <span className="text-xs font-bold text-white">D</span>
          </div>
          <span
            className="text-sm font-semibold tracking-tight md:text-base"
            style={{ color: "var(--dta-text)" }}
          >
            Data Trust
            <span className="font-normal" style={{ color: "var(--dta-muted)" }}>
              {" "}
              Accelerator
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-opacity duration-300"
              style={{ color: "var(--dta-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--dta-text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--dta-muted)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
            style={{ backgroundColor: "var(--dta-accent)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--dta-accent-dark)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--dta-accent)")
            }
          >
            <span>Get started</span>
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              <ArrowUpRight size={14} strokeWidth={2} />
            </span>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="touch-target flex items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{ color: "var(--dta-text)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div
          className="absolute left-0 right-0 top-16 z-50 border-b px-4 pb-6 pt-4 md:hidden"
          style={{
            backgroundColor: "var(--dta-bg)",
            borderColor: "var(--dta-border)",
          }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-base font-medium transition-colors"
                style={{ color: "var(--dta-text)" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
              style={{ backgroundColor: "var(--dta-accent)" }}
              onClick={() => setOpen(false)}
            >
              <span>Get started</span>
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
