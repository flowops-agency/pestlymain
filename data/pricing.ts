export interface BillingOption {
  label: string;
  price: number | null;
  priceLabel: string;
  setupFee: number | string;
  setupFeeLabel: string;
  badgeText?: string;
  yearlyTotal?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  target: string;
  highlighted: boolean;
  badgeText?: string;
  billing: {
    monthly: BillingOption;
    yearly: BillingOption;
  };
  features: { text: string; included: boolean }[];
  cta: { label: string; href: string; variant: "primary" | "secondary" };
}

import { siteConfig } from "@/data/site-config";

export const pricingTiers: PricingTier[] = [
  {
    id: "professional",
    name: "Professional",
    target: "für 1–3 Mann-Betriebe",
    highlighted: false,
    billing: {
      monthly: {
        label: "Monatlich",
        price: 497,
        priceLabel: "/ Monat",
        setupFee: "497 €",
        setupFeeLabel: "Einrichtungsgebühr",
      },
      yearly: {
        label: "Jährlich",
        price: 397,
        priceLabel: "/ Monat",
        setupFee: "Keine",
        setupFeeLabel: "Einrichtungsgebühr",
        badgeText: "2 Monate gratis",
        yearlyTotal: "4.764 € / Jahr",
      },
    },
    features: [
      { text: "Telefon: 750 Min. inkl. (25 Cent)", included: true },
      { text: "WhatsApp + SMS: 500 Nachrichten inkl. (10 Cent)", included: true },
      { text: "E-Mail: Unlimitiert", included: true },
      { text: "Kalender: Google, Outlook & viele weitere", included: true },
      { text: "CRM: Salesforce, HubSpot & viele weitere", included: true },
      { text: "Jede weitere Minute: 25 Cent · Jede weitere Nachricht: 10 Cent", included: true },
    ],
    cta: {
      label: "14 Tage kostenlos testen",
      href: siteConfig.tallyUrl,
      variant: "secondary",
    },
  },
  {
    id: "business",
    name: "Business",
    target: "für 4–20 Mann-Betriebe",
    highlighted: true,
    badgeText: "Empfohlen",
    billing: {
      monthly: {
        label: "Monatlich",
        price: 997,
        priceLabel: "/ Monat",
        setupFee: "997 €",
        setupFeeLabel: "Einrichtungsgebühr",
      },
      yearly: {
        label: "Jährlich",
        price: 797,
        priceLabel: "/ Monat",
        setupFee: "Keine",
        setupFeeLabel: "Einrichtungsgebühr",
        badgeText: "2 Monate gratis",
        yearlyTotal: "9.564 € / Jahr",
      },
    },
    features: [
      { text: "Telefon: 2.000 Min. inkl. (20 Cent)", included: true },
      { text: "WhatsApp + SMS: 2.000 Nachrichten inkl. (8 Cent)", included: true },
      { text: "E-Mail: Unlimitiert", included: true },
      { text: "Kalender: Google, Outlook & viele weitere", included: true },
      { text: "CRM: Salesforce, HubSpot & viele weitere", included: true },
      { text: "Multi-User, erweiterte Analysen", included: true },
      { text: "Jede weitere Minute: 20 Cent · Jede weitere Nachricht: 8 Cent", included: true },
    ],
    cta: {
      label: "14 Tage kostenlos testen",
      href: siteConfig.tallyUrl,
      variant: "primary",
    },
  },
];

export type BillingPeriod = "monthly" | "yearly";
