import type { Locale } from "@/lib/i18n/dictionaries";

export const serviceSlugs = [
  "ki-sprache",
  "multikanal",
  "wissensdatenbank",
  "termine",
  "setup",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type ServicePage = {
  slug: ServiceSlug;
  title: string;
  description: string;
  h1: string;
  definition: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  terms: { term: string; meaning: string }[];
  faq: { question: string; answer: string }[];
  cta: { heading: string; body: string; button: string; href: string };
};

export type ServicesHub = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  cards: { slug: ServiceSlug; title: string; blurb: string }[];
};

const hubDe: ServicesHub = {
  title: "Leistungen — KI-Telefonassistent Pestly",
  description:
    "Alle Pestly-Leistungen: Sprachassistent, Multikanal, Wissensdatenbank, Terminbuchung und Full-Service-Setup für Schädlingsbekämpfung.",
  h1: "Leistungen",
  intro:
    "Pestly übernimmt die Kommunikation Ihres Schädlingsbekämpfungsbetriebs. Unten die Bausteine — jeder Link erklärt Begriffe, Einstellungen und was Sie erwarten können.",
  cards: [
    {
      slug: "ki-sprache",
      title: "KI-Sprachassistent",
      blurb: "Anrufe auf Deutsch, Fachbegriffe, kein Tastenmenü.",
    },
    {
      slug: "multikanal",
      title: "Multikanal",
      blurb: "Anruf, WhatsApp, SMS, E-Mail — ein Assistent, ein Posteingang.",
    },
    {
      slug: "wissensdatenbank",
      title: "Wissensdatenbank",
      blurb: "Preise, Gebiete, Regeln und FAQ, die die KI wirklich nutzt.",
    },
    {
      slug: "termine",
      title: "Terminbuchung",
      blurb: "Kalender, Zeitfenster, Bestätigungen und No-Shows vermeiden.",
    },
    {
      slug: "setup",
      title: "Setup & Betrieb",
      blurb: "Wir richten ein und betreiben — Sie müssen nichts administrieren.",
    },
  ],
};

const hubEn: ServicesHub = {
  title: "Services — Pestly AI phone assistant",
  description:
    "Pestly services: voice agent, multichannel inbox, knowledge base, booking, and full-service setup for pest control.",
  h1: "Services",
  intro:
    "Pestly runs communication for your pest control business. Each service page explains terms, settings, and what you get.",
  cards: [
    {
      slug: "ki-sprache",
      title: "AI voice agent",
      blurb: "Calls in English and Spanish, industry terms, no press-1 menus.",
    },
    {
      slug: "multikanal",
      title: "Multichannel",
      blurb: "Phone, WhatsApp, SMS, email — one assistant, one inbox.",
    },
    {
      slug: "wissensdatenbank",
      title: "Knowledge base",
      blurb: "Prices, areas, rules, and FAQs the AI actually uses.",
    },
    {
      slug: "termine",
      title: "Appointment booking",
      blurb: "Calendars, windows, confirmations, fewer no-shows.",
    },
    {
      slug: "setup",
      title: "Setup & operations",
      blurb: "We configure and run it — you do not admin the system.",
    },
  ],
};

const de: Record<ServiceSlug, ServicePage> = {
  "ki-sprache": {
    slug: "ki-sprache",
    title: "KI-Sprachassistent für Schädlingsbekämpfung | Pestly",
    description:
      "So funktioniert der Pestly KI-Sprachassistent: Deutsch, Fachbegriffe, Gesprächsfluss, Eskalation und Einstellungen.",
    h1: "KI-Sprachassistent",
    definition:
      "Der KI-Sprachassistent nimmt Anrufe entgegen, führt ein natürliches Gespräch auf Deutsch, erkennt das Anliegen und leitet in Termin oder Eskalation über.",
    sections: [
      {
        heading: "Was passiert im Gespräch",
        paragraphs: [
          "Der Assistent begrüßt im Namen Ihres Betriebs, klärt Anliegen (z. B. Wespen, Ratten, Notdienst), stellt gezielte Rückfragen und prüft Verfügbarkeit, wenn der Kalender angebunden ist.",
          "Komplexe oder heikle Fälle können an Sie übergeben werden — per SMS mit Transkript, nicht als stille Voicemail.",
        ],
        bullets: [
          "Sprache: Deutsch",
          "Fachbegriffe der Schädlingsbekämpfung im Setup hinterlegbar",
          "Kein DTMF-Menü („Drücken Sie die 1“)",
          "Gesprächszusammenfassung für Sie und den Kundenfluss",
        ],
      },
      {
        heading: "Einstellungen, die Sie (einmal) festlegen",
        paragraphs: [
          "Begrüßungstext, Tonfall, Notdienst-Zeiten, wann menschlich eskaliert wird, und welche Daten abgefragt werden (Adresse, Objektart, Dringlichkeit). Das Setup-Team übernimmt die technische Konfiguration.",
        ],
      },
      {
        heading: "Was der Assistent nicht ersetzt",
        paragraphs: [
          "Vor-Ort-Diagnose, rechtliche Beratung und manuelle Freigaben bei Sonderfällen bleiben beim Betrieb. Die KI hält den Erstkontakt und die Routine.",
        ],
      },
    ],
    terms: [
      {
        term: "STT / TTS",
        meaning: "Sprache-zu-Text und Text-zu-Sprache — Basis der Sprach-KI.",
      },
      {
        term: "Intent",
        meaning: "Das erkannte Anliegen des Anrufers (z. B. Notdienst, Angebot).",
      },
      {
        term: "Eskalation",
        meaning: "Übergabe an Sie, wenn Regeln oder der Kunde es erfordern.",
      },
      {
        term: "Transkript",
        meaning: "Schriftliche Gesprächsnotiz für Nachverfolgung.",
      },
    ],
    faq: [
      {
        question: "Versteht Pestly Dialekte und Fachjargon?",
        answer:
          "Ja, im Rahmen des trainierten Setups und gängiger Formulierungen. Spezielle Hausbegriffe legen wir in der Wissensdatenbank ab.",
      },
      {
        question: "Versteht der Assistent nur Hochdeutsch?",
        answer:
          "Er ist auf Deutsch ausgelegt und kommt mit gängigen Formulierungen und Dialektfärbung zurecht. Sehr lokale Begriffe legen wir bei Bedarf in der Wissensdatenbank ab.",
      },
    ],
    cta: {
      heading: "Sprachassistent live hören",
      body: "In der Demo führen wir einen typischen Anruf durch.",
      button: "Demo buchen",
      href: "/#demo",
    },
  },
  multikanal: {
    slug: "multikanal",
    title: "Multikanal-Kommunikation | Pestly",
    description:
      "Alle Kanäle auf einer Logik: Telefon, WhatsApp, SMS, E-Mail — wie Pestly Nachrichten bündelt und beantwortet.",
    h1: "Multikanal",
    definition:
      "Multikanal bedeutet: Ihre Kunden schreiben oder rufen an, wie sie wollen — Pestly antwortet konsistent und fasst alles in einem Assistenten zusammen.",
    sections: [
      {
        heading: "Unterstützte Kanäle",
        paragraphs: [
          "Telefonie, WhatsApp, SMS, E-Mail und optional Website-Widgets. Ziel ist ein einheitlicher Ablauf: Anliegen verstehen, antworten, Termin oder Eskalation.",
        ],
        bullets: [
          "Gleiche Wissensdatenbank über alle Kanäle",
          "Eine Rufnummer / Identität für den Kunden",
          "Weniger Medienbrüche (Anruf → WhatsApp-Bestätigung)",
        ],
      },
      {
        heading: "Einstellungen",
        paragraphs: [
          "Welche Kanäle live gehen, Geschäftszeiten pro Kanal, Auto-Antworten außerhalb der Zeiten, und welche Kanäle Notfälle auslösen dürfen. Nummerportierung und Provider-Anbindung laufen über das Setup.",
        ],
      },
    ],
    terms: [
      {
        term: "Inbox",
        meaning: "Zusammengeführte Anfragen aus allen Kanälen im Pestly-Kontext.",
      },
      {
        term: "Channel routing",
        meaning: "Regeln, welcher Kanal wann aktiv und wie priorisiert wird.",
      },
      {
        term: "Widget",
        meaning: "Chat-Element auf Ihrer Website, das in denselben Assistenten läuft.",
      },
    ],
    faq: [
      {
        question: "Muss ich alle Kanäle auf einmal freischalten?",
        answer:
          "Nein. Viele starten mit Telefon + WhatsApp und erweitern später.",
      },
    ],
    cta: {
      heading: "Kanäle in der Demo klären",
      body: "Wir zeigen, welche Kanäle für Ihren Betrieb Sinn ergeben.",
      button: "Demo buchen",
      href: "/#demo",
    },
  },
  wissensdatenbank: {
    slug: "wissensdatenbank",
    title: "Wissensdatenbank | Pestly",
    description:
      "Was in die Pestly-Wissensdatenbank gehört: Preise, Gebiete, Schädlingsarten, Regeln — und wie die KI sie nutzt.",
    h1: "Wissensdatenbank",
    definition:
      "Die Wissensdatenbank ist die Quelle für korrekte Antworten: Leistungen, Preise, Einsatzgebiete, Öffnungszeiten, Notfallregeln und FAQs.",
    sections: [
      {
        heading: "Inhalte, die rein sollten",
        paragraphs: [
          "Alles, was ein guter Mitarbeiter am Telefon auswendig wissen müsste — plus klare Grenzen (was Sie nicht anbieten).",
        ],
        bullets: [
          "Leistungskatalog und Preisspannen",
          "Einsatzgebiet und Anfahrtsregeln",
          "Öffnungszeiten und Notdienst",
          "Häufige Schädlinge und Standardabläufe",
          "Absagen, Stornos, Datenschutzhinweise",
        ],
      },
      {
        heading: "Pflege",
        paragraphs: [
          "Erstbefüllung übernimmt das Setup mit Ihnen (ca. 1–1,5 h Ihrer Zeit). Änderungen an Preisen oder Gebieten melden Sie — der Betrieb der Wissensbasis bleibt bei uns bzw. im vereinbarten Prozess, nicht als Dauer-IT-Aufgabe bei Ihnen.",
        ],
      },
    ],
    terms: [
      {
        term: "Knowledge item",
        meaning: "Einzelner Eintrag (z. B. Preis Wespe, Zone PLZ).",
      },
      {
        term: "Guardrail",
        meaning: "Regel, die Antworten begrenzt (z. B. keine Zusage ohne Sichtung).",
      },
      {
        term: "FAQ-Match",
        meaning: "Zuordnung Kundenfrage zu hinterlegter Antwort.",
      },
    ],
    faq: [
      {
        question: "Was passiert, wenn die KI etwas nicht weiß?",
        answer:
          "Sie kann nachfragen, auf Sichtung verweisen oder eskalieren — statt zu raten. Guardrails verhindern riskante Zusagen.",
      },
    ],
    cta: {
      heading: "Wissensbasis in der Demo sehen",
      body: "Wir zeigen Beispiel-Einträge und typische Antworten.",
      button: "Demo buchen",
      href: "/#demo",
    },
  },
  termine: {
    slug: "termine",
    title: "Automatische Terminbuchung | Pestly",
    description:
      "Kalenderanbindung, Zeitfenster, Bestätigungen und Regeln für Terminbuchung mit Pestly.",
    h1: "Terminbuchung",
    definition:
      "Pestly prüft Verfügbarkeit, schlägt passende Slots vor und bucht in Ihren Kalender — inkl. Bestätigung an den Kunden, sofern eingerichtet.",
    sections: [
      {
        heading: "Integrationen",
        paragraphs: [
          "Typisch: Google Kalender, Outlook oder Cal.com. Pufferzeiten, Slot-Länge und wer welche Ressourcen (Teams/Fahrzeuge) bekommt, werden im Setup definiert.",
        ],
      },
      {
        heading: "Regeln",
        paragraphs: [
          "Notdienst vs. Standard, Wochenende, Anfahrtspuffer, maximale Termine pro Tag. Bestätigungen können per WhatsApp und E-Mail laufen.",
        ],
        bullets: [
          "Echtzeit-Verfügbarkeit statt fester „rufen Sie morgen an“-Schleife",
          "Doppelbuchungen vermeiden durch Kalender-Sync",
          "Umbuchung / Absage je nach Regelwerk",
        ],
      },
    ],
    terms: [
      {
        term: "Slot",
        meaning: "Buchbares Zeitfenster im Kalender.",
      },
      {
        term: "Buffer",
        meaning: "Puffer vor/nach Terminen (Fahrt, Nachbereitung).",
      },
      {
        term: "Hold",
        meaning: "Vorläufige Reservierung bis zur Bestätigung (falls genutzt).",
      },
    ],
    faq: [
      {
        question: "Kann Pestly in mehrere Kalender buchen?",
        answer:
          "Mehrere Ressourcen/Kalender sind im Setup möglich, abhängig von Ihrer Struktur.",
      },
    ],
    cta: {
      heading: "Terminlogik durchspielen",
      body: "Demo mit realistischen Zeitfenstern und Bestätigung.",
      button: "Demo buchen",
      href: "/#demo",
    },
  },
  setup: {
    slug: "setup",
    title: "Setup & Betrieb | Pestly",
    description:
      "Full-Service: Wir richten Pestly ein und betreiben es. Was Sie liefern, was wir übernehmen, typischer Zeitplan.",
    h1: "Setup & Betrieb",
    definition:
      "Sie liefern Fachwissen und Freigaben. Wir übernehmen Technik, Anbindung, Training und laufenden Betrieb — damit Sie keinen Admin-Job haben.",
    sections: [
      {
        heading: "Was wir übernehmen",
        paragraphs: [
          "Rufnummer (Portierung oder neu), Kanalanbindung, Kalender, Wissensdatenbank-Erstbefüllung, Testanrufe, Go-Live und Monitoring im vereinbarten Umfang.",
        ],
        bullets: [
          "Kein eigenes IT-Projekt nötig",
          "Typisch ca. 5 Tage bis live",
          "Ihr Aufwand: grob 1–1,5 Stunden für Wissen und Abnahmen",
        ],
      },
      {
        heading: "Was Sie liefern",
        paragraphs: [
          "Preise, Leistungen, Gebiete, Öffnungszeiten, Notdienst-Regeln, Ansprechpartner für Eskalation, Zugang zu Kalender/Accounts wo nötig.",
        ],
      },
      {
        heading: "Betrieb danach",
        paragraphs: [
          "Laufende Erreichbarkeit, Anpassungen an Wissen und Regeln, Support im vereinbarten SLA. Sie bleiben Fachbetrieb — nicht Systemadmin.",
        ],
      },
    ],
    terms: [
      {
        term: "Go-Live",
        meaning: "Moment, ab dem echte Kunden über Pestly laufen.",
      },
      {
        term: "Portierung",
        meaning: "Übernahme Ihrer bestehenden Rufnummer.",
      },
      {
        term: "SLA",
        meaning: "Service Level — Reaktionszeiten und Support-Umfang.",
      },
    ],
    faq: [
      {
        question: "Muss ich Software installieren?",
        answer:
          "Nein. Pestly läuft als Service. Sie brauchen freigegebene Zugänge und abgestimmte Regeln.",
      },
      {
        question: "Wer ändert Preise später?",
        answer:
          "Sie melden Änderungen; Umsetzung über den vereinbarten Betriebsprozess — nicht als tägliche IT-Aufgabe bei Ihnen.",
      },
    ],
    cta: {
      heading: "Setup-Ablauf in 15 Minuten",
      body: "Unverbindlich klären, was für Ihren Betrieb nötig ist.",
      button: "Demo buchen",
      href: "/#demo",
    },
  },
};

const en: Record<ServiceSlug, ServicePage> = {
  "ki-sprache": {
    slug: "ki-sprache",
    title: "AI voice agent for pest control | Pestly",
    description:
      "How Pestly’s AI voice agent works: English & Spanish, industry terms, call flow, escalation, and settings.",
    h1: "AI voice agent",
    definition:
      "The AI voice agent answers calls, holds a natural conversation in English or Spanish, understands the request, and routes to booking or escalation.",
    sections: [
      {
        heading: "What happens on a call",
        paragraphs: [
          "The assistant greets in your company name, clarifies intent (e.g. wasps, rodents, emergency), asks focused follow-ups, and checks availability when a calendar is connected.",
          "Complex or sensitive cases can hand off to you — SMS with transcript, not a silent voicemail.",
        ],
        bullets: [
          "Languages: English and Spanish",
          "Pest control terminology via setup",
          "No press-1 DTMF menus",
          "Summary for follow-up",
        ],
      },
      {
        heading: "Settings you define once",
        paragraphs: [
          "Greeting, tone, emergency hours, when to escalate to a human, and which data to collect (address, property type, urgency). Our team implements the technical config.",
        ],
      },
      {
        heading: "What it does not replace",
        paragraphs: [
          "On-site diagnosis, legal advice, and manual approvals for edge cases stay with your business. AI owns first contact and routine.",
        ],
      },
    ],
    terms: [
      {
        term: "STT / TTS",
        meaning: "Speech-to-text and text-to-speech — core of voice AI.",
      },
      {
        term: "Intent",
        meaning: "Detected caller goal (emergency, quote, callback).",
      },
      {
        term: "Escalation",
        meaning: "Hand-off to you when rules or the caller require it.",
      },
      {
        term: "Transcript",
        meaning: "Written call note for follow-up.",
      },
    ],
    faq: [
      {
        question: "Does it handle accents and jargon?",
        answer:
          "Within the trained setup and common phrasing. House terms go into the knowledge base.",
      },
      {
        question: "English and Spanish on the same line?",
        answer:
          "Yes. The active language follows the caller and your setup — useful for US markets with Spanish-speaking customers.",
      },
    ],
    cta: {
      heading: "Hear the voice agent live",
      body: "We run a typical pest control call in the demo.",
      button: "Book a demo",
      href: "/#demo",
    },
  },
  multikanal: {
    slug: "multikanal",
    title: "Multichannel inbox | Pestly",
    description:
      "Phone, WhatsApp, SMS, email under one assistant — how Pestly unifies channels.",
    h1: "Multichannel",
    definition:
      "Multichannel means customers reach you how they prefer — Pestly answers consistently and unifies traffic in one assistant.",
    sections: [
      {
        heading: "Supported channels",
        paragraphs: [
          "Voice, WhatsApp, SMS, email, and optional website widgets. Same knowledge base and outcome: understand, answer, book or escalate.",
        ],
        bullets: [
          "Shared knowledge across channels",
          "One customer-facing identity / number story",
          "Fewer media breaks (call → WhatsApp confirm)",
        ],
      },
      {
        heading: "Settings",
        paragraphs: [
          "Which channels go live, hours per channel, after-hours auto-replies, and which channels may trigger emergencies. Number porting and providers are setup work.",
        ],
      },
    ],
    terms: [
      {
        term: "Inbox",
        meaning: "Unified inbound requests across channels in Pestly.",
      },
      {
        term: "Channel routing",
        meaning: "Rules for when a channel is active and priority.",
      },
      {
        term: "Widget",
        meaning: "Website chat that uses the same assistant.",
      },
    ],
    faq: [
      {
        question: "Do I need every channel on day one?",
        answer:
          "No. Many start with phone + WhatsApp and expand later.",
      },
    ],
    cta: {
      heading: "Pick channels in the demo",
      body: "We’ll map what fits your operation.",
      button: "Book a demo",
      href: "/#demo",
    },
  },
  wissensdatenbank: {
    slug: "wissensdatenbank",
    title: "Knowledge base | Pestly",
    description:
      "What belongs in Pestly’s knowledge base: prices, areas, pest types, rules — and how the AI uses them.",
    h1: "Knowledge base",
    definition:
      "The knowledge base is the source of truth for correct answers: services, pricing, areas, hours, emergency rules, and FAQs.",
    sections: [
      {
        heading: "What to include",
        paragraphs: [
          "Everything a good receptionist would know — plus hard stops for services you do not offer.",
        ],
        bullets: [
          "Service catalog and price ranges",
          "Service area and travel rules",
          "Hours and emergency coverage",
          "Common pests and standard flows",
          "Cancellations and privacy notices",
        ],
      },
      {
        heading: "Maintenance",
        paragraphs: [
          "Initial load is a guided setup session (~1–1.5 hours of your time). Price or area changes are reported by you; ongoing admin is not your full-time job.",
        ],
      },
    ],
    terms: [
      {
        term: "Knowledge item",
        meaning: "A single entry (e.g. wasp price band, ZIP zone).",
      },
      {
        term: "Guardrail",
        meaning: "Rule that limits answers (e.g. no firm quote without inspection).",
      },
      {
        term: "FAQ match",
        meaning: "Mapping a customer question to a stored answer.",
      },
    ],
    faq: [
      {
        question: "What if the AI does not know?",
        answer:
          "It can ask, defer to inspection, or escalate — instead of guessing. Guardrails block risky promises.",
      },
    ],
    cta: {
      heading: "See a knowledge base demo",
      body: "Example entries and sample answers.",
      button: "Book a demo",
      href: "/#demo",
    },
  },
  termine: {
    slug: "termine",
    title: "Automated booking | Pestly",
    description:
      "Calendar connection, windows, confirmations, and booking rules with Pestly.",
    h1: "Appointment booking",
    definition:
      "Pestly checks availability, proposes slots, and books to your calendar — with customer confirmation when configured.",
    sections: [
      {
        heading: "Integrations",
        paragraphs: [
          "Typically Google Calendar, Outlook, or Cal.com. Buffers, slot length, and resources (teams/vans) are defined in setup.",
        ],
      },
      {
        heading: "Rules",
        paragraphs: [
          "Emergency vs standard, weekends, travel buffers, max jobs per day. Confirmations can go via WhatsApp and email.",
        ],
        bullets: [
          "Real-time availability instead of “call back tomorrow”",
          "Fewer double-books via calendar sync",
          "Reschedule / cancel per policy",
        ],
      },
    ],
    terms: [
      {
        term: "Slot",
        meaning: "Bookable time window.",
      },
      {
        term: "Buffer",
        meaning: "Padding before/after jobs (travel, wrap-up).",
      },
      {
        term: "Hold",
        meaning: "Soft reservation until confirmed (if used).",
      },
    ],
    faq: [
      {
        question: "Multiple calendars?",
        answer:
          "Multiple resources/calendars are possible depending on structure.",
      },
    ],
    cta: {
      heading: "Walk through booking logic",
      body: "Demo with realistic windows and confirmation.",
      button: "Book a demo",
      href: "/#demo",
    },
  },
  setup: {
    slug: "setup",
    title: "Setup & operations | Pestly",
    description:
      "Full service: we set Pestly up and run it. What you provide, what we own, typical timeline.",
    h1: "Setup & operations",
    definition:
      "You provide domain knowledge and approvals. We handle tech, integrations, training, and ongoing operations — so you are not the admin.",
    sections: [
      {
        heading: "What we own",
        paragraphs: [
          "Number (port or new), channels, calendar, knowledge first-load, test calls, go-live, and monitoring in the agreed scope.",
        ],
        bullets: [
          "No DIY IT project",
          "Typically ~5 days to live",
          "Your time: ~1–1.5 hours for knowledge and sign-off",
        ],
      },
      {
        heading: "What you provide",
        paragraphs: [
          "Prices, services, areas, hours, emergency rules, escalation contacts, calendar/account access where needed.",
        ],
      },
      {
        heading: "After go-live",
        paragraphs: [
          "Ongoing reachability, knowledge/rule updates, support under the agreed SLA. You stay the pest control expert — not the sysadmin.",
        ],
      },
    ],
    terms: [
      {
        term: "Go-live",
        meaning: "When real customers route through Pestly.",
      },
      {
        term: "Porting",
        meaning: "Moving your existing phone number to Pestly.",
      },
      {
        term: "SLA",
        meaning: "Service level — response times and support scope.",
      },
    ],
    faq: [
      {
        question: "Do I install software?",
        answer:
          "No. Pestly is a service. You grant access and approve rules.",
      },
      {
        question: "Who updates prices later?",
        answer:
          "You report changes; we apply them via the ops process — not as your daily IT chore.",
      },
    ],
    cta: {
      heading: "Setup walkthrough in 15 minutes",
      body: "See what your business needs — no obligation.",
      button: "Book a demo",
      href: "/#demo",
    },
  },
};

export function getServicesHub(locale: Locale): ServicesHub {
  return locale === "en" ? hubEn : hubDe;
}

export function getServicePage(
  locale: Locale,
  slug: ServiceSlug
): ServicePage {
  return (locale === "en" ? en : de)[slug];
}

export function isServiceSlug(s: string): s is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(s);
}

export function servicePath(slug: ServiceSlug): string {
  return `leistungen/${slug}`;
}
