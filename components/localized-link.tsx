"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useTranslation } from "@/lib/i18n/locale-context";

type LinkProps = ComponentProps<typeof Link>;

export default function LocalizedLink({ href, ...props }: LinkProps) {
  const { locale } = useTranslation();
  // Don't prefix hash-only or external links
  const localizedHref =
    typeof href === "string" &&
    href.startsWith("/") &&
    !href.startsWith("#")
      ? `/${locale}${href}`
      : href;
  return <Link href={localizedHref} {...props} />;
}
