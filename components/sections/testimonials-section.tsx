import { Star } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const testimonials = [
  {
    name: "Marcus Hoffmann",
    role: "Inhaber, Hoffmann Kammerjäger GmbH",
    quote:
      "Früher habe ich abends noch schnell auf WhatsApp oder per SMS geantwortet — oft zu spät. Jetzt sind Anfragen schon beantwortet, bevor ich vom Einsatz heimkomme. Letzten Monat drei Aufträge mehr als sonst.",
    image: "/markus-hoffmann.png",
  },
  {
    name: "Sandra Winkler",
    role: "Winkler Schädlingsbekämpfung 24/7",
    quote:
      "Das automatische Follow-up ist Gold wert. Viele Kunden melden sich nicht sofort — früher hab ich die verloren. Jetzt buchen sie trotzdem, weil Pestly einfach nochmal nachfragt. Ohne mein Zutun.",
    image: "/sandra-winkler.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <span className="tag mb-4">Erfahrungen</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Was Betriebe sagen
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Echte Ergebnisse aus dem Alltag.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 200}>
              <div className="card-base p-5 md:p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4" aria-label="5 von 5 Sternen">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="text-[var(--color-accent)] fill-[var(--color-accent)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic flex-1 mb-6">
                  &bdquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[var(--color-border)] shrink-0 bg-[var(--color-surface-hover)]">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-text)]">
                      {t.name}
                    </div>
                    <div className="text-xs text-[var(--color-muted)]">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
