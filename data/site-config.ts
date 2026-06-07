export const siteConfig = {
  name: "Pestly",
  tagline: "KI-Kundenservice für Schädlingsbekämpfer",
  description:
    "Pestly richtet Schädlingsbekämpfern und Kammerjägern einen vollständig verwalteten KI-Kundenservice ein – rund um die Uhr, in unter 15 Sekunden.",
  url: "https://pestly.de",
  founder: {
    name: "Tom Berger",
    role: "Gründer & Geschäftsführer",
  },
  contact: {
    email: "info@pestly.de",
    phone: "+49 30 12345678",
    address: "Musterstraße 123, 10115 Berlin",
  },
  taxId: "DE123456789",
  court: "Amtsgericht Berlin",
  responsiblePerson: "Tom Berger, Musterstraße 123, 10115 Berlin",
  tallyUrl: "https://tally.so/r/44N68X",
  social: {
    linkedin: "https://linkedin.com/company/pestly",
  },
  copyright: new Date().getFullYear(),
} as const;

export const navLinks = [
  { label: "Leistungen", href: "#features" },
  { label: "Preise", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;
