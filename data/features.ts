import {
  Phone,
  MessageSquare,
  Clock,
  Calendar,
  Bell,
  Repeat,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Phone,
    title: "Multi-Channel",
    description:
      "Deine Kunden erreichen euch über Telefon, WhatsApp, SMS und E-Mail – die KI beantwortet alles aus einem Guss.",
  },
  {
    icon: Clock,
    title: "Antwort in unter 15 Sekunden",
    description:
      "Keine Wartezeiten. Deine Kunden bekommen sofort eine Antwort – rund um die Uhr, 7 Tage die Woche.",
  },
  {
    icon: Calendar,
    title: "Kalender-Integration",
    description:
      "Termine werden direkt in Google Kalender oder Outlook eingetragen – ohne dein Zutun. Integriert mit Salesforce, HubSpot & vielen weiteren CRM-Tools.",
  },
  {
    icon: Bell,
    title: "Smarte Eskalation",
    description:
      "Bei Großobjekten, Gewerbekunden oder Preisverhandlungen bekommst du eine Push-Benachrichtigung aufs Handy.",
  },
  {
    icon: MessageSquare,
    title: "Preisauskunft & Angebote",
    description:
      "Die KI nennt Preise basierend auf deiner Preisliste und erstellt automatisch Angebote für Kunden.",
  },
  {
    icon: Repeat,
    title: "Auto-Follow-up",
    description:
      "Kunden, die sich nicht sofort entscheiden, werden nach 2 Tagen automatisch nachgefasst – ohne dass du dran denken musst.",
  },
];

export const problemPoints: Feature[] = [
  {
    icon: Phone,
    title: "Verpasste Anrufe beim Einsatz",
    description:
      "Du bist beim Kunden vor Ort und kannst nicht ans Telefon. Wer anruft, bekommt keine Antwort – und bucht bei der Konkurrenz.",
  },
  {
    icon: Bell,
    title: "Abends klingelt das Handy",
    description:
      "Schädlingsbefall wird oft abends bemerkt. Dann rufen Kunden an – genau dann, wenn du Feierabend hast.",
  },
  {
    icon: Calendar,
    title: "Bürokraft kostet 1.500–2.500 €",
    description:
      "Eine Bürokraft ist teuer, nicht 24/7 erreichbar und kann nicht immer sofort reagieren. Pestly ist günstiger und zuverlässiger.",
  },
];
