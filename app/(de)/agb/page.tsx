import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen der Pestly KI-Kundenservice GmbH",
};

export default function Agb() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="space-y-8 text-sm text-[var(--color-text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              §1 Geltungsbereich
            </h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
              Verträge zwischen Pestly und dem Kunden über die Nutzung des
              KI-Kundenservice-Systems. Abweichende Bedingungen des Kunden
              werden nicht anerkannt, es sei denn, Pestly stimmt ihrer
              Geltung ausdrücklich schriftlich zu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              §2 Vertragsgegenstand
            </h2>
            <p>
              Pestly bietet einen verwalteten KI-Kundenservice für
              Schädlingsbekämpfungsbetriebe an. Der Vertragsgegenstand
              umfasst die Einrichtung, Konfiguration und den laufenden
              Betrieb eines KI-Systems zur automatisierten Beantwortung von
              Kundenanfragen über Telefon, WhatsApp, SMS und E-Mail.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              §3 Vertragsschluss und Laufzeit
            </h2>
            <p>
              Der Vertrag kommt durch die Annahme der Bestellung des Kunden
              durch Pestly zustande. Der Vertrag läuft auf unbestimmte Zeit
              und kann von beiden Parteien mit einer Frist von 30 Tagen zum
              Monatsende gekündigt werden. Die Mindestlaufzeit beträgt 3
              Monate.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              §4 Preise und Zahlungsbedingungen
            </h2>
            <p>
              Die monatlichen Gebühren richten sich nach dem gewählten Tarif
              (Professional, Business oder Enterprise). Hinzu kommt eine
              einmalige Einrichtungsgebühr. Alle Preise verstehen sich
              zuzüglich der gesetzlichen Umsatzsteuer. Die Zahlung erfolgt
              per SEPA-Lastschrift oder Überweisung im Voraus.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              §5 Geld-zurück-Garantie
            </h2>
            <p>
              Pestly bietet eine 30-tägige Geld-zurück-Garantie auf die
              Einrichtungsgebühr. Falls die KI innerhalb der ersten 30 Tage
              nach Freischaltung nicht mindestens fünf (5) Termine für den
              Kunden bucht, wird die Einrichtungsgebühr vollständig
              erstattet. Die monatlichen Nutzungsgebühren bleiben von dieser
              Garantie unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              §6 Haftung
            </h2>
            <p>
              Pestly haftet für Schäden nur bei Vorsatz oder grober
              Fahrlässigkeit. Die Haftung für leicht fahrlässige
              Pflichtverletzungen ist ausgeschlossen, sofern keine
              wesentlichen Vertragspflichten (Kardinalpflichten) verletzt
              werden. Die Haftung für Schäden aus der Verletzung des
              Lebens, des Körpers oder der Gesundheit bleibt hiervon
              unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              §7 Datenschutz
            </h2>
            <p>
              Pestly verarbeitet personenbezogene Daten des Kunden und
              seiner Kunden ausschließlich im Rahmen der DSGVO. Alle Daten
              werden auf EU-Servern gespeichert. Es findet keine
              Übertragung in US-amerikanische Cloud-Dienste statt. Die
              Datenschutzerklärung ist Bestandteil dieser AGB.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--color-text)] mb-3">
              §8 Schlussbestimmungen
            </h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland. Erfüllungsort
              und ausschließlicher Gerichtsstand für alle Streitigkeiten aus
              diesem Vertrag ist der Sitz von Pestly. Sollten einzelne
              Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die
              Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
