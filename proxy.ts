import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "./lib/i18n/dictionaries";

function getLocale(request: NextRequest): Locale {
  // Check cookie
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value as Locale | undefined;
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;

  // Check Accept-Language header
  const acceptLang = request.headers.get("Accept-Language") ?? "";
  if (acceptLang.startsWith("en")) return "en";
  if (acceptLang.startsWith("de")) return "de";

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files (images, fonts, etc.)
  const staticFileExt = /\.(svg|png|jpg|jpeg|gif|webp|ico|pdf|woff2?|css|js|map)$/i;
  if (staticFileExt.test(pathname)) return NextResponse.next();

  const pathnameHasLocale = locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Not found pages (/_next/, /favicon.ico, etc.) skip
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url);
  const response = NextResponse.redirect(newUrl);

  // Set locale cookie
  response.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });

  return response;
}

export const config = {
  matcher: [
    // Skip static files and Next.js internals
    "/((?!_next/|api/|favicon.ico|images/|fonts/|_vercel/).*)",
  ],
};
