import { ChevronRight, Star, Sparkles, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import VideoEmbed from "@/components/ui/video-embed";
import { siteConfig } from "@/data/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden pt-16">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--color-primary-bg)] opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-bg)] opacity-30 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-[200px] h-[200px] rounded-full bg-[var(--color-primary-bg)] opacity-20 blur-2xl" />
      </div>

      <div className="container-main relative z-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tag */}
          <ScrollReveal delay={0}>
            <div className="tag mx-auto mb-6 md:mb-8">
              <Sparkles size={14} />
              <span>KI-Kundenservice · 24/7 · &lt;15s Antwort</span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-[var(--color-text)] mb-4 md:mb-6">
              Nie wieder eine Anfrage{" "}
              <span className="gradient-text">verpassen.</span>
            </h1>
          </ScrollReveal>

          {/* Subtext */}
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8">
              Pestly richtet deinem Schädlingsbekämpfungsbetrieb einen
              vollständig verwalteten KI-Kundenservice ein – in unter 48
              Stunden live. Deine Kunden bekommen sofort Antworten, du
              bekommst mehr Aufträge.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={siteConfig.tallyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange text-base px-8 py-3.5"
              >
                kostenlose Demo anfragen
                <ExternalLink size={18} />
              </a>
              <a
                href="#how"
                className="btn-secondary text-base px-8 py-3.5"
              >
                Wie funktioniert&rsquo;s?
              </a>
            </div>
          </ScrollReveal>

          {/* Video */}
          <ScrollReveal delay={350}>
            <div className="mb-10">
              <VideoEmbed
                src="/videos/pestly-demo.mp4"
                poster="/videos/pestly-thumbnail.png"
                title="Pestly Erklärvideo: KI-Kundenservice für Schädlingsbekämpfer"
              />
            </div>
          </ScrollReveal>

          {/* Social Proof */}
          <ScrollReveal delay={400}>
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-1.5" aria-label="5 von 5 Sternen">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-[var(--color-accent)] fill-[var(--color-accent)]"
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
