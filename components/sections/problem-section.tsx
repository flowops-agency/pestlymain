import ScrollReveal from "@/components/ui/scroll-reveal";
import { problemPoints } from "@/data/features";

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <span className="tag mb-4">Das Problem</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Jeder verpasste Anruf kostet dich einen Auftrag
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Du bist beim Kunden vor Ort, abends erschöpft oder am
              Wochenende nicht erreichbar – genau dann, wenn die nächsten
              Aufträge vergeben werden.
            </p>
          </ScrollReveal>
        </div>

        {/* Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problemPoints.map((point, i) => (
            <ScrollReveal key={i} delay={i * 150} bounce>
              <div className="card-base p-6 md:p-8 group relative overflow-hidden">
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-60" />

                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-bg)] flex items-center justify-center mb-5 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300">
                  <point.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
