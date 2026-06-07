import ScrollReveal from "@/components/ui/scroll-reveal";
import { features } from "@/data/features";

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <span className="tag mb-4">Leistungen</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Was Pestly für dich erledigt
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Deine Kunden bekommen schnelle, kompetente Antworten – rund um
              die Uhr, ohne dass du einen Finger rühren musst.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="card-base p-6 md:p-8 group hover:translate-y-[-4px] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-primary-bg)] flex items-center justify-center mb-5 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
