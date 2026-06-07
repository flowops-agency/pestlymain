export const siteConfigUs = {
  name: "Pestly",
  tagline: "AI Customer Service for Pest Control",
  description:
    "Pestly sets up a fully managed AI customer service for your pest control business – live in under 48 hours. Your customers get instant answers, you get more jobs.",
  url: "https://pestly.de/us",
  founder: {
    name: "Tom Berger",
    role: "Founder & CEO",
  },
  contact: {
    email: "info@pestly.de",
    phone: "+1 (505) 555-0123",
    address: "1209 MOUNTAIN ROAD PL NE, STE R, ALBUQUERQUE, NM 87110, USA",
  },
  taxId: "N/A (US LLC, no German VAT)",
  court: "New Mexico Secretary of State (SOS)",
  responsiblePerson: "Tom Berger, 1209 MOUNTAIN ROAD PL NE, STE R, ALBUQUERQUE, NM 87110, USA",
  tallyUrl: "https://tally.so/r/ob0XKP",
  social: {
    linkedin: "https://linkedin.com/company/pestly",
  },
  copyright: new Date().getFullYear(),
} as const;

export const navLinksUs = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;
