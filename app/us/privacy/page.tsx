import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Pestly LLC",
};

export default function UsPrivacy() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-main max-w-3xl">
        <div className="mb-12">
          <div className="tag mb-4">Legal</div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Privacy Policy
          </h1>
          <p className="text-[var(--color-muted)] mt-2">
            Last updated: January 2026
          </p>
        </div>

        <div className="space-y-8 text-sm text-[var(--color-text-secondary)] leading-relaxed">
          <section className="card-base p-6 md:p-8">
            <h2 className="text-base font-semibold text-[var(--color-text)] mb-3">
              1. Data Protection at a Glance
            </h2>
            <h3 className="font-medium text-[var(--color-text)] mt-4 mb-2">
              General Information
            </h3>
            <p className="mb-3">
              The following information provides a simple overview of what
              happens to your personal data when you visit this website.
              Personal data is any data with which you can be personally
              identified.
            </p>
            <h3 className="font-medium text-[var(--color-text)] mt-4 mb-2">
              Data Collection on This Website
            </h3>
            <p className="mb-3">
              <strong>Who is responsible for data collection?</strong>
              <br />
              Data processing on this website is carried out by the website
              operator. You can find their contact details in the Legal Notice.
            </p>
            <p className="mb-3">
              <strong>How do we collect your data?</strong>
              <br />
              Your data is collected firstly by you providing it to us, for
              example by entering it in a contact form. Other data is collected
              automatically or after your consent when you visit the website
              by our IT systems.
            </p>
            <p className="mb-3">
              <strong>What do we use your data for?</strong>
              <br />
              Part of the data is collected to ensure error-free provision of
              the website. Other data may be used to analyze your user behavior.
            </p>
          </section>

          <section className="card-base p-6 md:p-8">
            <h2 className="text-base font-semibold text-[var(--color-text)] mb-3">
              2. General Information and Mandatory Information
            </h2>
            <h3 className="font-medium text-[var(--color-text)] mt-4 mb-2">
              Data Protection
            </h3>
            <p className="mb-3">
              The operators of this website take the protection of your
              personal data very seriously. We treat your personal data
              confidentially and in accordance with the statutory data
              protection regulations and this privacy policy. All data is
              stored exclusively on EU servers.
            </p>
            <h3 className="font-medium text-[var(--color-text)] mt-4 mb-2">
              Responsible Party
            </h3>
            <p className="mb-3">
              Pestly LLC
              <br />
              1209 MOUNTAIN ROAD PL NE, STE R
              <br />
              ALBUQUERQUE, NM 87110, USA
              <br />
              Email:{" "}
              <a
                href="mailto:info@pestly.de"
                className="text-[var(--color-primary)] hover:underline"
              >
                info@pestly.de
              </a>
            </p>
          </section>

          <section className="card-base p-6 md:p-8">
            <h2 className="text-base font-semibold text-[var(--color-text)] mb-3">
              3. Data Collection on This Website
            </h2>
            <h3 className="font-medium text-[var(--color-text)] mt-4 mb-2">
              Cookies
            </h3>
            <p className="mb-3">
              This website does not use tracking cookies or third-party
              analytics services. Technically necessary cookies may be set
              for the operation of the website.
            </p>
            <h3 className="font-medium text-[var(--color-text)] mt-4 mb-2">
              Server Log Files
            </h3>
            <p className="mb-3">
              The hosting provider automatically collects and stores
              information in server log files, which your browser
              automatically transmits. These are:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Browser type and version</li>
              <li>Operating system used</li>
              <li>Referrer URL</li>
              <li>Hostname of the accessing computer</li>
              <li>Time of the server request</li>
              <li>IP address (anonymized)</li>
            </ul>
          </section>

          <section className="card-base p-6 md:p-8">
            <h2 className="text-base font-semibold text-[var(--color-text)] mb-3">
              4. Your Rights
            </h2>
            <p className="mb-3">
              You have the right to receive information about the origin,
              recipients and purpose of your stored personal data free of
              charge at any time. You also have the right to request the
              correction, blocking or deletion of this data. If you have
              further questions on the subject of data protection, you can
              contact us at any time at the address given in the Legal Notice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
