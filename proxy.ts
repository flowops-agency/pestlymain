import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "./lib/i18n/dictionaries";

const SEO_PATHS = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/pricing.md",
]);

function getLocale(request: NextRequest): Locale {
  // Cookie preference only — no Accept-Language negotiation (crawler-safe; DE default)
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value as
    | Locale
    | undefined;
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;
  return defaultLocale;
}

function withLocaleHeader(response: NextResponse, locale: Locale) {
  response.headers.set("x-pestly-locale", locale);
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (SEO_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  // Skip static files (images, fonts, etc.)
  const staticFileExt =
    /\.(svg|png|jpg|jpeg|gif|webp|ico|pdf|woff2?|css|js|map|txt|xml)$/i;
  if (staticFileExt.test(pathname)) return NextResponse.next();

  const pathnameLocale = locales.find(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  if (pathnameLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pestly-locale", pathnameLocale);
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  // Not found pages (/_next/, /favicon.ico, etc.) skip
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname === "/favicon.ico" ||
    pathname === "/data-trust-accelerator" ||
    pathname.startsWith("/data-trust-accelerator/")
  ) {
    return NextResponse.next();
  }

  // Redirect to locale-prefixed path (cookie or default locale — no Accept-Language)
  const locale = getLocale(request);
  const newUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}`,
    request.url
  );
  const response = withLocaleHeader(NextResponse.redirect(newUrl), locale);

  response.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/|api/|favicon.ico|images/|fonts/|_vercel/).*)",
  ],
};
