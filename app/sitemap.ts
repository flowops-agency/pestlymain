import type { MetadataRoute } from "next";
import { contentPaths } from "@/lib/content-pages";
import { locales, type Locale } from "@/lib/i18n/dictionaries";
import {
  absoluteUrl,
  languageAlternates,
  legalPaths,
  localePath,
} from "@/lib/seo";
import { servicePath, serviceSlugs } from "@/lib/service-pages";

function entry(
  locale: Locale,
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]
): MetadataRoute.Sitemap[0] {
  return {
    url: absoluteUrl(localePath(locale, path)),
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(
        Object.entries(languageAlternates(path)).map(([lang, p]) => [
          lang,
          absoluteUrl(p),
        ])
      ),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push(entry(locale, "", 1, "weekly"));
    entries.push(entry(locale, "leistungen", 0.85, "monthly"));
    for (const slug of serviceSlugs) {
      entries.push(entry(locale, servicePath(slug), 0.8, "monthly"));
    }
    for (const content of contentPaths) {
      entries.push(entry(locale, content, 0.8, "monthly"));
    }
    for (const legal of legalPaths) {
      entries.push(entry(locale, legal, 0.3, "yearly"));
    }
  }

  return entries;
}
