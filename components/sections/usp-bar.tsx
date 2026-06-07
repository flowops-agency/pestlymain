import { Zap, CalendarCheck, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const uspItems = [
  {
    icon: Zap,
    title: "48h Setup",
    description: "Von der Anfrage bis zum Live-System",
  },
  {
    icon: CalendarCheck,
    title: "14 Tage kostenlos testen",
    description: "Unverbindlich & ohne Risiko",
  },
  {
    icon: ShieldCheck,
    title: "30 Tage Geld-zurück-Garantie",
    description: "Falls die KI nicht 5+ Termine bucht",
  },
];

export default function UspBar() {
  return (
    <section className="py-12 bg-gradient-to-r from-[var(--color-primary-dim)] to-[var(--color-primary)]">
      <div className="container-main">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {uspItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 text-[var(--color-text-inverse)]"
              >
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  <p className="text-sm text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
