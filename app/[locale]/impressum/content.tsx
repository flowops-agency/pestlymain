"use client";

import { Building2, Mail, BadgePercent, Scale, FileText } from "lucide-react";
import type { ImpressumDict } from "@/lib/i18n/dictionaries";

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  mail: Mail,
  tax: BadgePercent,
  scale: Scale,
  file: FileText,
};

export default function ImpressumContent({ dict }: { dict: ImpressumDict }) {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">{dict.title}</h1>
          <p className="text-muted-foreground">{dict.subtitle}</p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {dict.sections.map((section) => {
            const Icon = iconMap[section.icon] ?? Building2;
            return (
              <div
                key={section.title}
                className="border border-gray-200 rounded-xl p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-semibold text-foreground mb-3">
                      {section.title}
                    </h2>
                    <div className="text-sm leading-relaxed space-y-3">
                      {section.contentLines.map((line, j) =>
                        line === "" ? (
                          <br key={j} />
                        ) : line.startsWith("Haftung") ||
                          line.startsWith("Content") ||
                          line.startsWith("Link") ? (
                          <h3 key={j} className="font-medium text-foreground mb-2">
                            {line}
                          </h3>
                        ) : (
                          <p key={j} className="text-muted-foreground">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-xs text-muted-foreground mt-10 text-center">
          {dict.footerNote}{" "}
          <a
            href={`mailto:${dict.footerEmail}`}
            className="text-accent hover:underline"
          >
            {dict.footerEmail}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
