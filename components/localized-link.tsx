"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useTranslation } from "@/lib/i18n/locale-context";

type LinkProps = ComponentProps<typeof Link>;

export default function LocalizedLink({ href, ...props }: LinkProps) {
  const { locale } = useTranslation();
  let localizedHref = href;
  if (typeof href === "string") {
    // Bare hash → home section with locale (works from any page)
    if (href.startsWith("#")) {
      localizedHref = `/${locale}/${href}`;
    } else if (href.startsWith("/") && !href.startsWith("//")) {
      // Absolute site path → prefix locale once
      localizedHref = `/${locale}${href}`;
    }
  }
  return <Link href={localizedHref} {...props} />;
}
