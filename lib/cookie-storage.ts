/** Client cookie preference store for useSyncExternalStore (no mount effects). */

export const COOKIE_BANNER_KEY = "pestly-cookies:v1";
export const COOKIE_PREFS_KEY = "pestly-cookie-preferences:v1";

export type CookiePrefs = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const defaultCookiePrefs: CookiePrefs = {
  essential: true,
  analytics: false,
  marketing: false,
};

const bannerListeners = new Set<() => void>();
const prefsListeners = new Set<() => void>();

function emit(listeners: Set<() => void>) {
  listeners.forEach((l) => l());
}

export function subscribeCookieBanner(onStoreChange: () => void) {
  bannerListeners.add(onStoreChange);
  return () => bannerListeners.delete(onStoreChange);
}

export function getCookieBannerVisible(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(COOKIE_BANNER_KEY) !== "1";
}

export function getCookieBannerServerSnapshot(): boolean {
  return false;
}

export function acceptCookieBanner() {
  localStorage.setItem(COOKIE_BANNER_KEY, "1");
  emit(bannerListeners);
}

export function subscribeCookiePrefs(onStoreChange: () => void) {
  prefsListeners.add(onStoreChange);
  return () => prefsListeners.delete(onStoreChange);
}

export function readCookiePrefs(): CookiePrefs {
  if (typeof window === "undefined") return defaultCookiePrefs;
  try {
    const stored = localStorage.getItem(COOKIE_PREFS_KEY);
    if (!stored) return defaultCookiePrefs;
    return { ...defaultCookiePrefs, ...JSON.parse(stored) };
  } catch {
    return defaultCookiePrefs;
  }
}

export function getCookiePrefsServerSnapshot(): CookiePrefs {
  return defaultCookiePrefs;
}

export function writeCookiePrefs(prefs: CookiePrefs) {
  localStorage.setItem(COOKIE_PREFS_KEY, JSON.stringify(prefs));
  localStorage.setItem(COOKIE_BANNER_KEY, "1");
  emit(prefsListeners);
  emit(bannerListeners);
}
