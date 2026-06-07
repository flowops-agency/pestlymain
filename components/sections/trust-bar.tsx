import { Shield, CheckCircle, Lock } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const trustItems = [
  { icon: Shield, label: "DSGVO-konform", sub: "EU-Server" },
  { icon: Lock, label: "SSL-verschlüsselt", sub: "Sichere Daten" },
  { icon: CheckCircle, label: "30 Tage Garantie", sub: "Geld-zurück" },
  { icon: Shield, label: "Google Kalender", sub: "Integration" },
  { icon: Shield, label: "Outlook", sub: "Integration" },
];

export default function TrustBar() {
  return (
    <section className="py-10 border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-main">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon
                  size={20}
                  className="text-[var(--color-primary)] shrink-0"
                />
                <div>
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    {item.label}
                  </span>
                  <span className="text-xs text-[var(--color-muted)] ml-1.5">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
