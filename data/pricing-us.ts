import { siteConfigUs } from "@/data/site-config-us";

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
  yearlyFeatures?: { text: string; included: boolean }[];
  cta: { label: string; href: string; variant: "primary" | "secondary" };
}

export const pricingTiersUs: PricingTier[] = [
  {
    id: "professional",
    name: "Professional",
    target: "for 1–3 person operations",
    highlighted: false,
    billing: {
      monthly: {
        label: "Monthly",
        price: 597,
        priceLabel: "/ month",
        setupFee: "$1,194",
        setupFeeLabel: "Setup fee",
      },
      yearly: {
        label: "Yearly",
        price: 497,
        priceLabel: "/ month",
        setupFee: "None",
        setupFeeLabel: "Setup fee",
        badgeText: "2 months free",
        yearlyTotal: "$5,964 / year",
      },
    },
    features: [
      { text: "Phone: 750 min incl. (Extra minute: $0.25)", included: true },
      { text: "WhatsApp + SMS: 500 messages incl. (Extra message: $0.10)", included: true },
      { text: "Email: Unlimited", included: true },
      { text: "Calendar: Google, Outlook & many more", included: true },
      { text: "CRM: Salesforce, HubSpot & many more", included: true },
      { text: "Monthly cancellation", included: true },
    ],
    cta: {
      label: "Free 14-day trial",
      href: siteConfigUs.tallyUrl,
      variant: "secondary",
    },
  },
  {
    id: "business",
    name: "Business",
    target: "for 4–20 person operations",
    highlighted: true,
    badgeText: "Most popular",
    billing: {
      monthly: {
        label: "Monthly",
        price: 1297,
        priceLabel: "/ month",
        setupFee: "$2,497",
        setupFeeLabel: "Setup fee",
      },
      yearly: {
        label: "Yearly",
        price: 997,
        priceLabel: "/ month",
        setupFee: "None",
        setupFeeLabel: "Setup fee",
        badgeText: "2 months free",
        yearlyTotal: "$11,964 / year",
      },
    },
    features: [
      { text: "Phone: 2,000 min incl. (Extra minute: $0.20)", included: true },
      { text: "WhatsApp + SMS: 2,000 messages incl. (Extra message: $0.08)", included: true },
      { text: "Email: Unlimited", included: true },
      { text: "Calendar: Google, Outlook & many more", included: true },
      { text: "CRM: Salesforce, HubSpot & many more", included: true },
      { text: "Multi-user & advanced analytics", included: true },
      { text: "Monthly cancellation", included: true },
    ],
    cta: {
      label: "Free 14-day trial",
      href: siteConfigUs.tallyUrl,
      variant: "primary",
    },
  },
];

export type BillingPeriod = "monthly" | "yearly";
