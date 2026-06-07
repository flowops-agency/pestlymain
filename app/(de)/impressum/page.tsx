import type { Metadata } from "next";
import { Building2, Mail, BadgePercent, Scale, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Pestly LLC",
};

const sections = [
  {
    icon: Building2,
    title: "Angaben gemäß § 5 DDG",
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
          Registriert im Bundesstaat New Mexico (USA)
          <br />
          Registerbehörde: New Mexico Secretary of State (SOS)
        </p>
      </>
    ),
  },
  {
    icon: Mail,
    title: "Kontakt",
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
    title: "Umsatzsteuer",
    content: (
      <p className="text-[var(--color-text-secondary)]">
        Die Pestly LLC unterliegt als US-Unternehmen nicht der deutschen
        Umsatzsteuer. Gemäß Reverse-Charge-Verfahren geht die Steuerschuld
        auf den Leistungsempfänger über (§ 13b UStG).
      </p>
    ),
  },
  {
    icon: Scale,
    title: "Streitbeilegung",
    content: (
      <p className="text-[var(--color-text-secondary)]">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    ),
  },
  {
    icon: Scale,
    title: "Haftungsausschluss",
    content: (
      <>
        <h3 className="font-medium text-[var(--color-text)] mb-2">
          Haftung für Inhalte
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
          können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
          sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
          Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
          bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen,
          die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <h3 className="font-medium text-[var(--color-text)] mb-2">
          Haftung für Links
        </h3>
        <p className="text-[var(--color-text-secondary)]">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf
          deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
          diese fremden Inhalte auch keine Gewähr übernehmen. Für die
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
          oder Betreiber der Seiten verantwortlich.
        </p>
      </>
    ),
  },
];

export default function Impressum() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-main max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <div className="tag mb-4">Rechtliches</div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Impressum
          </h1>
          <p className="text-[var(--color-muted)] mt-2">
            Angaben nach § 5 DDG / TMG
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <div
              key={i}
              className="card-base p-6 md:p-8"
            >
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

        {/* Footer note */}
        <p className="text-xs text-[var(--color-muted)] mt-10 text-center">
          Stand: Januar 2026. Änderungen vorbehalten.
          <br />
          Solltest du Fragen oder Beanstandungen haben, kontaktiere uns bitte unter{" "}
          <a
            href="mailto:info@pestly.de"
            className="text-[var(--color-primary)] hover:underline"
          >
            info@pestly.de
          </a>
          .
        </p>
      </div>
    </div>
  );
}
