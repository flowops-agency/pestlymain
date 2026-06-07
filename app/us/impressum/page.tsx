import type { Metadata } from "next";
import { Building2, Mail, BadgePercent, Scale, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal Notice of Pestly LLC",
};

const sections = [
  {
    icon: Building2,
    title: "Company Information",
    content: (
      <>
        <p className="text-[var(--color-text-secondary)]">
          <strong className="text-[var(--color-text)]">Pestly LLC</strong>
          <br />
          1209 MOUNTAIN ROAD PL NE, STE R
          <br />
          ALBUQUERQUE, NM 87110
          <br />
          USA
        </p>
        <p className="text-xs text-[var(--color-muted)] mt-2">
          Registered in the State of New Mexico (USA)
          <br />
          Register Authority: New Mexico Secretary of State (SOS)
        </p>
      </>
    ),
  },
  {
    icon: Mail,
    title: "Contact",
    content: (
      <div className="space-y-2">
        <a
          href="mailto:info@pestly.de"
          className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors group"
        >
          <Mail size={16} className="text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
          <span>info@pestly.de</span>
        </a>
      </div>
    ),
  },
  {
    icon: BadgePercent,
    title: "Tax Information",
    content: (
      <p className="text-[var(--color-text-secondary)]">
        As a US-based company, Pestly LLC is not subject to German VAT.
        The tax liability is transferred to the recipient of the service
        in accordance with the reverse charge procedure (§ 13b UStG).
      </p>
    ),
  },
  {
    icon: Scale,
    title: "Dispute Resolution",
    content: (
      <p className="text-[var(--color-text-secondary)]">
        We are not willing or obliged to participate in dispute resolution
        proceedings before a consumer arbitration board.
      </p>
    ),
  },
  {
    icon: FileText,
    title: "Disclaimer",
    content: (
      <>
        <h3 className="font-medium text-[var(--color-text)] mb-2">
          Liability for Content
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-4">
          The content of our pages has been created with the utmost care.
          However, we cannot guarantee the accuracy, completeness or
          timeliness of the content. As a service provider, we are
          responsible for our own content on these pages in accordance
          with general laws.
        </p>
        <h3 className="font-medium text-[var(--color-text)] mb-2">
          Liability for Links
        </h3>
        <p className="text-[var(--color-text-secondary)]">
          Our offer contains links to external third-party websites over
          whose content we have no influence. Therefore, we cannot assume
          any liability for this third-party content.
        </p>
      </>
    ),
  },
];

export default function UsImpressum() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-main max-w-3xl">
        <div className="mb-12">
          <div className="tag mb-4">Legal</div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Legal Notice
          </h1>
          <p className="text-[var(--color-muted)] mt-2">
            In accordance with § 5 DDG / TMG
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, i) => (
            <div key={i} className="card-base p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-bg)] flex items-center justify-center shrink-0 mt-0.5">
                  <section.icon size={18} className="text-[var(--color-primary)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-semibold text-[var(--color-text)] mb-3">
                    {section.title}
                  </h2>
                  <div className="text-sm leading-relaxed space-y-3">
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-[var(--color-muted)] mt-10 text-center">
          Last updated: January 2026. Subject to change.
          <br />
          If you have any questions, please contact us at{" "}
          <a href="mailto:info@pestly.de" className="text-[var(--color-primary)] hover:underline">
            info@pestly.de
          </a>
          .
        </p>
      </div>
    </div>
  );
}
