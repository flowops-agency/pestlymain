import { ExternalLink, Shield, Lock, CheckCircle, Mail } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { siteConfig } from "@/data/site-config";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="section-padding bg-[var(--color-surface)]"
    >
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="tag mb-4">Los geht&rsquo;s</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Bereit für mehr Aufträge?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Starte jetzt deine 14-tägige kostenlose Testphase – unverbindlich,
              ohne Risiko. In 48 Stunden ist dein KI-Kundenservice live.
            </p>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal delay={300}>
            <a
              href={siteConfig.tallyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange text-base px-10 py-4 mb-6 inline-flex"
            >
              kostenlose Demo anfragen
              <ExternalLink size={20} />
            </a>
          </ScrollReveal>

          {/* Contact email fallback */}
          <ScrollReveal delay={350}>
            <p className="text-sm text-[var(--color-muted)] mb-10">
              Oder schreibe uns direkt an{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[var(--color-primary)] hover:text-[var(--color-orange)] transition-colors underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </ScrollReveal>

          {/* Founder Trust Box */}
          <ScrollReveal delay={400}>
            <div className="card-base p-6 md:p-8 text-left max-w-lg mx-auto mb-10">
              <div className="flex items-start gap-4">
                {/* Founder avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-border)] shrink-0 bg-[var(--color-surface-hover)]">
                  <img src="/tom-berger.jpg" alt="Tom Berger" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-2 italic">
                    &ldquo;Wir bauen Pestly, damit Schädlingsbekämpfer sich auf
                    das konzentrieren können, was sie am besten können – und wir
                    kümmern uns um den Rest.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-text)]">
                    Tom Berger
                    <span className="font-normal text-[var(--color-muted)] ml-1">
                      · Gründer Pestly
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Trust Badges */}
          <ScrollReveal delay={500}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                { icon: Shield, label: "DSGVO-konform" },
                { icon: Lock, label: "SSL-verschlüsselt" },
                { icon: CheckCircle, label: "30 Tage Geld-zurück" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <badge.icon
                    size={16}
                    className="text-[var(--color-muted)]"
                  />
                  <span className="text-xs text-[var(--color-muted)]">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
