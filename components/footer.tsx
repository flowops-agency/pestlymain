"use client";

import Link from "next/link";
import { m as motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";
import LocaleSwitcher from "./locale-switcher";
import LocalizedLink from "./localized-link";
import PestlyLogo from "./pestly-logo";

export default function Footer() {
  const { dict } = useTranslation();
  const t = dict.footer;

  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <LocalizedLink href="/" className="inline-flex items-center">
              <PestlyLogo className="h-8 w-auto" />
            </LocalizedLink>
            <p className="mt-2 text-sm text-gray-500">{t.brandDesc}</p>
            <div className="mt-4">
              <LocaleSwitcher />
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(t.columns).map(([title, links], idx) => {
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
              >
                <h4 className="mb-3 text-sm font-bold text-[#171717]">
                  {title}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <motion.li
                      key={link.label}
                      initial="rest"
                      whileHover="hover"
                      className="relative w-fit"
                    >
                      <LocalizedLink
                        href={link.href}
                        className="block py-2 text-sm text-gray-500 transition-colors hover:text-[#171717]"
                      >
                        {link.label}
                        <motion.span
                          variants={{
                            rest: { scaleX: 0, originX: 0.5 },
                            hover: { scaleX: 1, originX: 0.5 },
                          }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] origin-center rounded-full bg-[#FB4C01]"
                        />
                      </LocalizedLink>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-16 flex max-w-xs flex-col items-center justify-between pt-16 md:flex-row"
        >
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Pestly. {t.copyright}
          </p>
          <div className="mt-4 flex gap-4 md:mt-0">
            {t.socialIcons.map((icon) => (
              <motion.div
                key={icon.name}
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Link
                  href={icon.href}
                  className="flex items-center justify-center p-3 text-gray-500 transition-colors hover:text-[#171717]"
                >
                  {icon.name === "Twitter" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  {icon.name === "LinkedIn" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
