import {
  Phone,
  Bot,
  Bell,
  ArrowRight,
  MessageSquare,
  Calendar,
} from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: 1,
    icon: Phone,
    title: "Kunde kontaktiert",
    description:
      "Egal ob Telefon, WhatsApp, SMS oder E-Mail – die Anfrage landet bei der Pestly-KI.",
    badges: [
      { icon: Phone, label: "Telefon" },
      { icon: MessageSquare, label: "WhatsApp" },
      { icon: MessageSquare, label: "SMS" },
      { icon: MessageSquare, label: "E-Mail" },
    ],
  },
  {
    number: 2,
    icon: Bot,
    title: "KI-Sekretärin antwortet",
    description:
      "Die KI nennt Preise, beantwortet Fragen und schlägt Termine vor – direkt in deinem Kalender.",
    badges: [
      { icon: Calendar, label: "KI-Terminbuchung" },
      { icon: Bell, label: "Smart-Eskalation" },
    ],
  },
  {
    number: 3,
    icon: Bell,
    title: "Du bekommst nur Push bei Komplexfällen",
    description:
      "Bei Großobjekten oder Preisverhandlungen erhältst du eine Benachrichtigung – sonst läuft alles automatisch.",
    badges: [
      { icon: Bell, label: "Push bei Bedarf" },
      { icon: ArrowRight, label: "Auto-Follow-up 2 Tage" },
    ],
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="section-padding bg-[var(--color-surface)]"
    >
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <span className="tag mb-4">So funktioniert&rsquo;s</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Deine neue KI-Sekretärin in 48 Stunden
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Du schickst uns deine Preisliste und einen Kalender-Link – wir
              übernehmen den Rest. Nach 48 Stunden ist dein KI-Kundenservice
              live.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 200} bounce>
                <div className="relative flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10 shadow-md">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {step.badges.map((badge, j) => (
                      <span
                        key={j}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-primary-bg)] text-[var(--color-primary)]"
                      >
                        <badge.icon size={12} />
                        {badge.label}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
