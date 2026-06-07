import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Pestly KI-Kundenservice GmbH",
};

export default function Datenschutz() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-sm text-[var(--color-text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-medium text-[var(--color-text)] mt-4 mb-2">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit deinen personenbezogenen Daten passiert, wenn du diese
              Website besuchst. Personenbezogene Daten sind alle Daten, mit
              denen du persönlich identifiziert werden kannst.
            </p>
            <h3 className="font-medium text-[var(--color-text)] mt-4 mb-2">
              Datenerfassung auf dieser Website
            </h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung?</strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten kannst du dem Impressum
              dieser Website entnehmen.
            </p>
            <p className="mt-3">
              <strong>Wie erfassen wir deine Daten?</strong>
              <br />
              Deine Daten werden zum einen dadurch erhoben, dass du sie uns
              mitteilst. Hierbei kann es sich z. B. um Daten handeln, die du
              in ein Kontaktformular eingibst. Andere Daten werden
              automatisch oder nach deiner Einwilligung beim Besuch der
              Website durch unsere IT-Systeme erfasst. Das sind vor allem
              technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs).
            </p>
            <p className="mt-3">
              <strong>Wofür nutzen wir deine Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten
              können zur Analyse deines Nutzerverhaltens verwendet werden.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="font-medium text-[var(--color-text)] mt-4 mb-2">
              Datenschutz
            </h3>
            <p>
              Der Betreiber dieser Seite nimmt den Schutz deiner
              persönlichen Daten sehr ernst. Wir behandeln deine
              personenbezogenen Daten vertraulich und entsprechend der
              gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung. Alle Daten werden ausschließlich auf
              EU-Servern gespeichert.
            </p>
            <h3 className="font-medium text-[var(--color-text)] mt-4 mb-2">
              Verantwortliche Stelle
            </h3>
            <p>
              {siteConfig.founder.name}
              <br />
              {siteConfig.contact.address}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[var(--color-primary)] hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-medium text-[var(--color-text)] mt-4 mb-2">
              Cookies
            </h3>
            <p>
              Diese Website verwendet keine Tracking-Cookies oder
              Analyse-Dienste von Drittanbietern. Es können technisch
              notwendige Cookies zum Betrieb der Website gesetzt werden.
            </p>
            <h3 className="font-medium text-[var(--color-text)] mt-4 mb-2">
              Server-Log-Dateien
            </h3>
            <p>
              Der Hosting-Anbieter erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die dein
              Browser automatisch übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              4. Deine Rechte
            </h2>
            <p>
              Du hast jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck deiner gespeicherten
              personenbezogenen Daten zu erhalten. Du hast außerdem ein
              Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz kannst
              du dich jederzeit unter der im Impressum angegebenen Adresse
              an uns wenden. Des Weiteren steht dir ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
