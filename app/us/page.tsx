"use client";

import { useState, type ReactNode } from "react";
import {
  ChevronRight, Star, Sparkles, ExternalLink, Phone, Bot, Bell,
  ArrowRight, MessageSquare, Calendar, Shield, Lock, CheckCircle,
  Zap, CalendarCheck, ShieldCheck, Globe, Mail,
} from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { siteConfigUs } from "@/data/site-config-us";
import { featuresUs, problemPointsUs } from "@/data/features-us";
import { pricingTiersUs } from "@/data/pricing-us";
import { faqUs } from "@/data/faq-us";
import CalculatorSection from "@/components/sections/calculator-section";
/* ─── Hero ─── */
function HeroUs() {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--color-primary-bg)] opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-bg)] opacity-30 blur-3xl" />
      </div>

      <div className="container-main relative z-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={0}>
            <div className="tag mx-auto mb-6 md:mb-8">
              <Sparkles size={14} />
              <span>AI Customer Service · 24/7 · &lt;15s Response</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-[var(--color-text)] mb-4 md:mb-6">
              Never miss a{" "}
              <span className="gradient-text">lead again.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8">
              Pestly sets up a fully managed AI customer service for your pest
              control business – live in under 48 hours. Your customers get
              instant answers, you get more jobs.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={siteConfigUs.tallyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange text-base px-8 py-3.5"
              >
                Request Demo
                <ExternalLink size={18} />
              </a>
              <a
                href="#how"
                className="btn-secondary text-base px-8 py-3.5"
              >
                How it works
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Bar ─── */
function TrustBarUs() {
  const items = [
    { icon: Shield, label: "100% GDPR-compliant" },
    { icon: Lock, label: "SSL-encrypted" },
    { icon: CalendarCheck, label: "48h setup" },
    { icon: CheckCircle, label: "30-day guarantee" },
  ];
  return (
    <section className="py-5 border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={16} className="text-[var(--color-primary)]" />
              <span className="text-xs font-medium text-[var(--color-text-secondary)]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Problem Section ─── */
function ProblemSectionUs() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal><span className="tag mb-4">The problem</span></ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Sound familiar?</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Every pest control business knows these struggles.
            </p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemPointsUs.map((point, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="card-base p-6 md:p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-primary-bg)] flex items-center justify-center mb-5 text-[var(--color-primary)]">
                  <point.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">{point.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{point.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
const stepsUs = [
  {
    number: 1, icon: Phone,
    title: "Customer reaches out",
    description: "Phone, WhatsApp, SMS or email – the inquiry lands with the Pestly AI.",
    badges: [
      { icon: Phone, label: "Phone" },
      { icon: MessageSquare, label: "WhatsApp" },
      { icon: MessageSquare, label: "SMS" },
      { icon: MessageSquare, label: "Email" },
    ],
  },
  {
    number: 2, icon: Bot,
    title: "AI secretary responds",
    description: "The AI quotes prices, answers questions and suggests appointments – directly in your calendar.",
    badges: [
      { icon: Calendar, label: "AI booking" },
      { icon: Bell, label: "Smart escalation" },
    ],
  },
  {
    number: 3, icon: Bell,
    title: "You only get push for complex cases",
    description: "For large projects or price negotiations, you get a notification – otherwise everything runs automatically.",
    badges: [
      { icon: Bell, label: "Push when needed" },
      { icon: ArrowRight, label: "Auto follow-up 2 days" },
    ],
  },
];

function HowItWorksUs() {
  return (
    <section id="how" className="section-padding bg-[var(--color-surface)]">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal><span className="tag mb-4">How it works</span></ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Your new AI secretary in 48 hours
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Send us your price list and a calendar link – we handle the rest. After 48 hours, your AI customer service is live.
            </p>
          </ScrollReveal>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {stepsUs.map((step, i) => (
              <ScrollReveal key={i} delay={i * 200} bounce>
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xl font-bold mb-6 relative z-10 shadow-md">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">{step.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">{step.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {step.badges.map((badge, j) => (
                      <span key={j} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-primary-bg)] text-[var(--color-primary)]">
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

/* ─── Features ─── */
function FeaturesSectionUs() {
  return (
    <section id="features" className="section-padding">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal><span className="tag mb-4">Features</span></ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">What Pestly does for you</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Your customers get fast, competent answers – around the clock, without you lifting a finger.
            </p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresUs.map((f, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="card-base p-6 md:p-8 group hover:translate-y-[-4px] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-primary-bg)] flex items-center justify-center mb-5 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300">
                  <f.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">{f.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{f.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── USP Bar ─── */
function UspBarUs() {
  const items = [
    { icon: Zap, title: "48h Setup", description: "From request to live system" },
    { icon: CalendarCheck, title: "14-day free trial", description: "No obligation, no risk" },
    { icon: ShieldCheck, title: "30-day money-back", description: "If the AI doesn't book 5+ appointments" },
  ];
  return (
    <section className="py-12 bg-gradient-to-r from-[var(--color-primary-dim)] to-[var(--color-primary)]">
      <div className="container-main">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-[var(--color-text-inverse)]">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
import type { BillingPeriod } from "@/data/pricing-us";

function PricingSectionUs() {
  "use client";
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const isYearly = billing === "yearly";

  function FlipPrice({ tier, isYearly }: { tier: typeof pricingTiersUs[number]; isYearly: boolean }) {
    const option = isYearly ? tier.billing.yearly : tier.billing.monthly;
    return (
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tabular-nums">
            ${option.price?.toLocaleString("en-US")}
          </span>
          <span className="text-[var(--color-muted)] font-medium">{option.priceLabel}</span>
        </div>
        {option.yearlyTotal && (
          <p className="text-xs font-medium text-[var(--color-accent)] mt-1">
            {option.yearlyTotal} ·{" "}
            <span className="text-[var(--color-success)]">2 months free</span>
          </p>
        )}
        <p className="text-xs text-[var(--color-muted)] mt-1">
          {option.setupFeeLabel}: {option.setupFee}
        </p>
      </div>
    );
  }

  return (
    <section id="pricing" className="py-12 md:py-16 bg-[var(--color-surface)]">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <ScrollReveal><span className="tag mb-4">Pricing</span></ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Simple pricing, no hidden fees</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">Choose the plan that fits your business.</p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={250}>
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex items-center bg-[var(--color-bg)] rounded-full p-1 border border-[var(--color-border)]">
              <button onClick={() => setBilling("monthly")}
                className={`relative z-10 px-5 py-2.5 text-sm font-medium rounded-full transition-colors ${billing === "monthly" ? "text-[var(--color-text-inverse)]" : "text-[var(--color-text-secondary)]"}`}
                aria-pressed={billing === "monthly"} type="button"
              >Monthly</button>
              <button onClick={() => setBilling("yearly")}
                className={`relative z-10 px-5 py-2.5 text-sm font-medium rounded-full transition-colors inline-flex items-center gap-1.5 ${billing === "yearly" ? "text-[var(--color-text-inverse)]" : "text-[var(--color-text-secondary)]"}`}
                aria-pressed={billing === "yearly"} type="button"
              >
                Yearly <Sparkles size={14} className="text-[var(--color-accent)]" />
              </button>
              <div className={`absolute top-1 bottom-1 rounded-full bg-[var(--color-primary)] transition-all duration-400 ease-out ${billing === "monthly" ? "left-1 right-[calc(50%+2px)]" : "left-[calc(50%+2px)] right-1"}`} />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {pricingTiersUs.map((tier, i) => (
            <ScrollReveal key={tier.id} delay={i * 150}>
              <div className={`card-base p-5 md:p-8 flex flex-col h-full relative overflow-hidden ${tier.highlighted ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)] shadow-primary" : ""}`}>
                {tier.highlighted && (
                  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--color-primary-bg)] blur-2xl" />
                  </div>
                )}
                {tier.badgeText && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-xs font-semibold px-4 py-1 rounded-full shadow-sm">{tier.badgeText}</span>
                  </div>
                )}
                {tier.billing.yearly.badgeText && isYearly && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-[var(--color-accent)] text-[var(--color-text-inverse)] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm inline-flex items-center gap-1">
                      <Sparkles size={10} />{tier.billing.yearly.badgeText}
                    </span>
                  </div>
                )}
                <div className="mb-6 relative z-10">
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-1">{tier.name}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{tier.target}</p>
                </div>
                <div className="relative z-10">
                  <FlipPrice tier={tier} isYearly={isYearly} />
                </div>
                <ul className="space-y-2.5 md:space-y-3 mb-8 flex-1 relative z-10">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle size={16} className={`mt-0.5 shrink-0 ${feat.included ? "text-[var(--color-success)]" : "text-[var(--color-muted)]"}`} />
                      <span className={`text-sm ${feat.included ? "text-[var(--color-text-secondary)]" : "text-[var(--color-muted)] line-through"}`}>{isYearly && feat.text === "Monthly cancellation" ? "Cancel anytime" : feat.text}</span>
                    </li>
                  ))}
                </ul>
                <a href={tier.cta.href} target="_blank" rel="noopener noreferrer"
                  className={`block text-center relative z-10 ${tier.cta.variant === "primary" ? "btn-primary" : "btn-secondary"}`}
                >{tier.cta.label}</a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FaqSectionUs() {
  "use client";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-16">
      <div className="container-main max-w-3xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <ScrollReveal><span className="tag mb-4">FAQ</span></ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Frequently asked questions</h2>
          </ScrollReveal>
        </div>
        <div className="space-y-3">
          {faqUs.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="card-base overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors hover:bg-[var(--color-surface-hover)]"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-sm font-semibold text-[var(--color-text)] pr-4">{item.question}</span>
                  <ChevronRight size={18} className={`text-[var(--color-primary)] shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-90" : ""}`} />
                </button>
                <div className={`transition-all duration-300 ease-out overflow-hidden ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.answer}</p>
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

/* ─── Testimonials ─── */
const testimonialsUs = [
  {
    name: "Marcus Hoffmann",
    role: "Owner, Hoffmann Pest Control",
    quote: "I used to reply to WhatsApp or SMS in the evenings — often too late. Now inquiries are answered before I even get home from the job. Three more jobs last month than usual.",
    image: "/markus-hoffmann.png",
  },
  {
    name: "Sandra Winkler",
    role: "Winkler Pest Control 24/7",
    quote: "The automatic follow-up is pure gold. Many customers don't respond immediately — I used to lose them. Now they book anyway because Pestly simply follows up. Without any effort on my part.",
    image: "/sandra-winkler.jpg",
  },
];

function TestimonialsSectionUs() {
  return (
    <section id="testimonials" className="py-12 md:py-16">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <ScrollReveal><span className="tag mb-4">Testimonials</span></ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">What businesses say</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">Real results from real businesses.</p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonialsUs.map((t, i) => (
            <ScrollReveal key={i} delay={i * 200}>
              <div className="card-base p-5 md:p-8 h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-[var(--color-accent)] fill-[var(--color-accent)]" />
                  ))}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[var(--color-border)] shrink-0 bg-[var(--color-surface-hover)]">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-text)]">{t.name}</div>
                    <div className="text-xs text-[var(--color-muted)]">{t.role}</div>
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

/* ─── CTA ─── */
function CtaSectionUs() {
  return (
    <section id="cta" className="section-padding bg-[var(--color-surface)]">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal><span className="tag mb-4">Get started</span></ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Ready for more jobs?</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Start your 14-day free trial – no obligation, no risk. Your AI customer service will be live in 48 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <a href={siteConfigUs.tallyUrl} target="_blank" rel="noopener noreferrer" className="btn-orange text-base px-10 py-4 mb-6 inline-flex">
              Request Demo <ExternalLink size={20} />
            </a>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="card-base p-6 md:p-8 text-left max-w-lg mx-auto mb-10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-[var(--color-text-inverse)] flex items-center justify-center text-xl font-bold shrink-0">
                  <img src="/tom-berger.jpg" alt="Tom Berger" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-2 italic">
                    &ldquo;Pestly is built for real blue-collar daily life, not Silicon Valley. An AI that has your back while you work.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-text)]">
                    Tom Berger<span className="font-normal text-[var(--color-muted)] ml-1">· Founder Pestly</span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={500}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                { icon: Shield, label: "GDPR-compliant" },
                { icon: Lock, label: "SSL-encrypted" },
                { icon: CheckCircle, label: "30-day money-back" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <badge.icon size={16} className="text-[var(--color-muted)]" />
                  <span className="text-xs text-[var(--color-muted)]">{badge.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Main US Page ─── */
export default function UsHome() {
  return (
    <>
      <HeroUs />
      <TrustBarUs />
      <ProblemSectionUs />
      <HowItWorksUs />
      <FeaturesSectionUs />
      <UspBarUs />
      <PricingSectionUs />
      <FaqSectionUs />
      <TestimonialsSectionUs />
      <CalculatorSection locale="us" />
      <CtaSectionUs />
    </>
  );
}
