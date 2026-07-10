import type { Locale } from "@/lib/i18n/dictionaries";

export const contentPaths = [
  "ki-telefonassistent",
  "vs/anrufbeantworter",
  "dsgvo-ki-telefonie",
] as const;

export type ContentPath = (typeof contentPaths)[number];

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ContentPage = {
  path: ContentPath;
  title: string;
  description: string;
  h1: string;
  definition: string;
  sections: ContentSection[];
  faq: { question: string; answer: string }[];
  cta: { heading: string; body: string; button: string; href: string };
  related: { label: string; href: string }[];
};

const de: Record<ContentPath, ContentPage> = {
  "ki-telefonassistent": {
    path: "ki-telefonassistent",
    title: "KI-Telefonassistent für Schädlingsbekämpfung | Pestly",
    description:
      "Was ist ein KI-Telefonassistent für Schädlingsbekämpfung? Pestly nimmt Anrufe und Nachrichten an, bucht Termine und eskaliert Notfälle — damit Sie keine Aufträge verlieren.",
    h1: "KI-Telefonassistent für Schädlingsbekämpfung",
    definition:
      "Ein KI-Telefonassistent für Schädlingsbekämpfung beantwortet Kundenanrufe und Nachrichten, erkennt das Anliegen, bucht Termine und leitet Notfälle an Sie weiter — damit Sie im Einsatz keine Leads verlieren.",
    sections: [
      {
        heading: "Das Problem: verpasste Anrufe kosten Aufträge",
        paragraphs: [
          "Schädlingsbekämpfer sind tagsüber oft auf der Baustelle, im Keller oder im Notdienst unterwegs. Das Bürotelefon klingelt trotzdem. Viele Anrufer hinterlassen keine Voicemail. Sie wählen den nächsten Betrieb in der Suche.",
          "Genau dort entsteht der Umsatzverlust: nicht weil die Leistung schlechter ist, sondern weil niemand den Erstkontakt annimmt. Ein klassischer Anrufbeantworter speichert höchstens eine Nachricht. Er führt kein Gespräch, bucht keinen Termin und erkennt keinen Notfall.",
        ],
      },
      {
        heading: "Was ein KI-Telefonassistent leistet",
        paragraphs: [
          "Im Unterschied zum Band beantwortet die KI den Anruf in Echtzeit. Sie stellt gezielte Rückfragen, ordnet typische Anliegen ein und schließt mit einem klaren nächsten Schritt ab — meist einem Terminvorschlag in Ihrem Kalender.",
        ],
        bullets: [
          "Anrufe annehmen und verstehen (Befall, Angebot, Notdienst, Rückruf)",
          "WhatsApp, SMS, E-Mail und Website-Widgets parallel bedienen",
          "Termine vorschlagen und bestätigen",
          "Dringende Fälle per SMS inkl. Transkript an Sie eskalieren",
          "Wissensdatenbank mit Ihren Preisen, Leistungen und Öffnungszeiten nutzen",
        ],
      },
      {
        heading: "Warum die Branche eigene Anforderungen hat",
        paragraphs: [
          "Schädlingsbekämpfung ist kein generisches Handwerk-Skript. Anrufer sprechen von Kakerlaken, Ratten, Wespennestern, Befallsgrad oder thermischer Entwesung. Sie wollen oft noch heute Hilfe — nicht nächste Woche.",
          "Pestly wird auf genau diese Abläufe eingerichtet: Fachbegriffe, Notdienst-Logik, Terminblöcke und die Kanäle, die Ihre Kunden wirklich nutzen. Ziel ist nicht Smalltalk, sondern ein verwertbarer Lead für Ihren Betrieb.",
        ],
      },
      {
        heading: "So läuft die Einführung typischerweise ab",
        paragraphs: [
          "Vom Gespräch bis zur Live-Schaltung dauert es in der Regel etwa fünf Tage. Sie investieren grob ein bis eineinhalb Stunden in Wissen und Kalender; den Rest übernimmt das Setup-Team.",
        ],
        bullets: [
          "Rufnummer portieren oder neu einrichten",
          "Leistungen, Preise und Regeln in die Wissensdatenbank übernehmen",
          "Kalender (z. B. Google, Outlook, Cal.com) anbinden",
          "Testanrufe fahren und Notfall-Eskalation prüfen",
        ],
      },
      {
        heading: "Für wen Pestly sinnvoll ist",
        paragraphs: [
          "Solo-Betriebe ohne ständige Bürokraft, Teams mit mehreren Fahrzeugen und Betriebe mit hohem Anteil eingehender Anfragen. Weniger sinnvoll ist es nur, wenn Sie ohnehin jede Minute selbst am Telefon sitzen und nie Anrufe verpassen.",
          "Die KI ersetzt weder Ihre Facharbeit vor Ort noch die Beratung bei komplexen Sanierungen. Sie hält den Kontakt, bis Sie übernehmen können.",
        ],
      },
    ],
    faq: [
      {
        question: "Ist ein KI-Telefonassistent dasselbe wie ein Anrufbeantworter?",
        answer:
          "Nein. Der Anrufbeantworter speichert nur. Der KI-Assistent führt das Gespräch, bucht Termine und eskaliert Notfälle — rund um die Uhr.",
      },
      {
        question: "Versteht die KI Fachbegriffe aus der Schädlingsbekämpfung?",
        answer:
          "Ja. Beim Setup fließen Ihre Leistungen, Preise und typischen Formulierungen ein. Branchentypische Begriffe werden mittrainiert.",
      },
      {
        question: "Kann ich meine bestehende Rufnummer behalten?",
        answer:
          "Ja. Portierung oder neue Nummer sind möglich. Die Einrichtung dauert in der Regel ein bis zwei Werktage.",
      },
      {
        question: "Wie schnell bin ich live?",
        answer:
          "Typisch etwa fünf Tage vom Verkaufsgespräch bis zur Live-Schaltung, abhängig von Kalender und Wissensdatenbank.",
      },
    ],
    cta: {
      heading: "Pestly in 15 Minuten live erleben",
      body: "Unverbindliche Demo mit einem typischen Anruf aus der Schädlingsbekämpfung.",
      button: "Kostenlose Demo buchen",
      href: "/#demo",
    },
    related: [
      { label: "Leistungen", href: "/leistungen" },
      { label: "Pestly vs. Anrufbeantworter", href: "/vs/anrufbeantworter" },
      { label: "DSGVO und KI-Telefonie", href: "/dsgvo-ki-telefonie" },
    ],
  },

  "vs/anrufbeantworter": {
    path: "vs/anrufbeantworter",
    title: "KI-Telefonassistent vs. Anrufbeantworter | Pestly",
    description:
      "Vergleich Anrufbeantworter vs. KI-Telefonassistent für Schädlingsbekämpfung: wer den Lead hält, wer nur eine Nachricht speichert — und wann Pestly lohnt.",
    h1: "KI-Telefonassistent vs. Anrufbeantworter",
    definition:
      "Ein Anrufbeantworter speichert Nachrichten. Ein KI-Telefonassistent wie Pestly führt das Gespräch, qualifiziert das Anliegen, bucht Termine und meldet Notfälle sofort.",
    sections: [
      {
        heading: "Kurz gesagt",
        paragraphs: [
          "Beide reagieren, wenn Sie nicht abheben. Der Unterschied ist, ob der Kunde eine Lösung bekommt oder nur auf Ihren Rückruf wartet — und ob er bis dahin schon beim Wettbewerb ist.",
        ],
      },
      {
        heading: "Direkter Vergleich",
        paragraphs: [
          "Die folgende Gegenüberstellung zeigt die typischen Stärken und Grenzen im Betriebsalltag der Schädlingsbekämpfung.",
        ],
        bullets: [
          "Anrufbeantworter: Aufnahme → Sie rufen später zurück → oft zu spät",
          "KI-Assistent: Dialog → Termin oder Eskalation → Lead bleibt im Funnel",
          "Kanäle: Band = Telefon; Pestly = Telefon plus WhatsApp, SMS, E-Mail, Widget",
          "Notdienst: Band erkennt keinen Notfall; KI kann dringende Fälle priorisieren",
          "Kostenstruktur: Band ist billig, verliert aber Aufträge; KI kostet Setup, hält Umsatz",
        ],
      },
      {
        heading: "Wann der Anrufbeantworter noch reicht",
        paragraphs: [
          "Wenn die Anruflast niedrig ist, Sie fast immer zeitnah zurückrufen und Kunden bereit sind zu warten. In Märkten mit starker Online-Suche und Notdienst-Konkurrenz ist das selten der Fall.",
        ],
      },
      {
        heading: "Wann Pestly die bessere Wahl ist",
        paragraphs: [
          "Wenn verpasste Anrufe spürbar Umsatz kosten, das Team tagsüber im Einsatz ist und Termine ohne Dauerbesetzung im Büro vergeben werden sollen. Die KI ersetzt nicht den Vor-Ort-Einsatz. Sie verhindert, dass der Erstkontakt stirbt.",
          "Viele Betriebe starten mit dem Band und merken erst spät, dass die teuerste Minute die ist, in der niemand rangeht. Der Vergleich lohnt sich in Euro pro verlorenem Auftrag — nicht nur in Euro pro Monat für das Tool.",
        ],
      },
      {
        heading: "Was Kunden merken",
        paragraphs: [
          "Mit Pestly können Anrufer klar informiert werden, dass sie mit dem Assistenten Ihres Betriebs sprechen. Komplexe oder heikle Fälle gehen an Sie. Transparenz und saubere Übergabe gehören zum Setup — nicht zu nachträglichen Workarounds.",
        ],
      },
    ],
    faq: [
      {
        question: "Ersetzt die KI komplett den Menschen am Telefon?",
        answer:
          "Nein. Sie übernimmt den Erstkontakt und Routine. Persönliche Beratung und Einsätze bleiben bei Ihnen.",
      },
      {
        question: "Was kostet der Wechsel vom Anrufbeantworter?",
        answer:
          "Es gibt keinen pauschalen Listenpreis für jeden Betrieb. Angebot nach Kanälen und Umfang; die Demo ist unverbindlich.",
      },
      {
        question: "Funktioniert Pestly auch abends und am Wochenende?",
        answer:
          "Ja. Die Annahme läuft rund um die Uhr nach Ihren Regeln — inklusive Notdienst-Logik, falls eingerichtet.",
      },
    ],
    cta: {
      heading: "Vom Band zur echten Annahme",
      body: "Sehen Sie in der Demo, wie Pestly einen typischen Anruf führt — statt nur eine Nachricht zu speichern.",
      button: "Demo buchen",
      href: "/#demo",
    },
    related: [
      { label: "Was ist ein KI-Telefonassistent?", href: "/ki-telefonassistent" },
      { label: "DSGVO und KI-Telefonie", href: "/dsgvo-ki-telefonie" },
    ],
  },

  "dsgvo-ki-telefonie": {
    path: "dsgvo-ki-telefonie",
    title: "DSGVO und KI-Telefonassistent | Pestly",
    description:
      "DSGVO bei KI-Telefonie: welche Daten anfallen, was Auftragsverarbeitung bedeutet und wie Pestly Anrufe datenschutzbewusst für Schädlingsbekämpfer handhabt.",
    h1: "DSGVO und KI-Telefonassistent",
    definition:
      "Bei KI-Telefonie entstehen personenbezogene Daten aus Gesprächen und Nachrichten. Pestly verarbeitet sie zweckgebunden für Annahme, Terminbuchung und Eskalation — mit EU-/DE-fokussiertem Stack und AVV auf Anfrage.",
    sections: [
      {
        heading: "Warum KI-Telefonie datenschutzrelevant ist",
        paragraphs: [
          "Sobald eine KI Anrufe annimmt, verarbeitet sie personenbezogene Daten: Namen, Telefonnummern, Adressen, Beschreibungen des Befalls, Termine. Die DSGVO verlangt unter anderem Rechtsgrundlage, Transparenz, Sicherheit und — bei Auftragsverarbeitung — einen Vertrag (AVV).",
          "Das gilt unabhängig davon, ob Sie ein Solo-Betrieb oder ein größeres Team sind. Wer Kundendaten verarbeitet, bleibt in der Verantwortung — auch wenn ein Dienstleister die Technik stellt.",
        ],
      },
      {
        heading: "Welche Zwecke zulässig und sinnvoll sind",
        paragraphs: [
          "Bei Pestly steht der betriebliche Zweck im Vordergrund: Erreichbarkeit, Terminorganisation und Notfall-Weiterleitung. Keine Weitergabe von Gesprächsdaten an Dritte zu Werbezwecken. Details und Rechtsgrundlagen stehen in der Datenschutzerklärung und im Vertrag.",
        ],
        bullets: [
          "Annahme und Dokumentation des Anliegens",
          "Terminbuchung in Ihrem Kalender",
          "Eskalation dringender Fälle an Sie",
          "Betrieb und Verbesserung des Assistenten im vereinbarten Rahmen",
        ],
      },
      {
        heading: "Technik und Standort — was Pestly kommuniziert",
        paragraphs: [
          "Laut Produkt- und FAQ-Informationen: Verarbeitung und Speicherung mit Fokus auf deutschen Servern (Netcup), KI-Komponenten mit EU-Bezug (u. a. Mistral, Azure in Frankfurt), verschlüsselte Übertragung. Konkrete Unterauftragsverarbeiter und Datenflüsse gehören in Vertrag und Datenschutzerklärung — nicht in Marketing-Slogans.",
        ],
      },
      {
        heading: "AVV und Ihre Pflichten als Betrieb",
        paragraphs: [
          "Eine Auftragsverarbeitungsvereinbarung (AVV) kann angefragt werden und ist vor produktivem Einsatz mit personenbezogenen Daten üblich. Zusätzlich sollten Sie Anrufer angemessen informieren, interne Prozesse dokumentieren und klären, wer im Team auf Transkripte zugreift.",
          "Diese Seite ist eine Orientierung, keine Rechtsberatung. Bei Sonderfällen (besondere Kategorien von Daten, spezielle Branchenregeln) sprechen Sie mit Ihrem Datenschutzberater.",
        ],
      },
      {
        heading: "Praktische Checkliste vor dem Go-Live",
        paragraphs: ["Vor dem Live-Gang lohnt ein kurzer interner Check:"],
        bullets: [
          "Datenschutzerklärung und AVV geprüft und unterzeichnet",
          "Hinweis im Gesprächsfluss bzw. auf der Website abgestimmt",
          "Zugriffe auf Transkripte und Notfall-SMS geregelt",
          "Lösch- und Auskunftsprozesse mit dem Anbieter geklärt",
        ],
      },
    ],
    faq: [
      {
        question: "Bleiben Kundendaten in der EU?",
        answer:
          "Pestly ist auf EU-/DE-fokussierte Verarbeitung ausgelegt. Verbindlich sind Vertrag und Datenschutzerklärung mit den aktuellen Unterauftragsverarbeitern.",
      },
      {
        question: "Gibt es eine AVV?",
        answer:
          "Ja. Eine Auftragsverarbeitungsvereinbarung kann angefragt werden — empfohlen vor dem Produktivbetrieb.",
      },
      {
        question: "Werden Gespräche zu Werbezwecken verkauft?",
        answer:
          "Nein. Gesprächsdaten werden nicht an Dritte zu Werbezwecken weitergegeben. Nutzung folgt dem vereinbarten Zweck (Annahme, Termin, Eskalation, Betrieb).",
      },
    ],
    cta: {
      heading: "Datenschutz im Demo-Gespräch klären",
      body: "Technische und organisatorische Fragen zu Erreichbarkeit und Datenverarbeitung beantworten wir vor dem Setup.",
      button: "Demo anfragen",
      href: "/#demo",
    },
    related: [
      { label: "Datenschutzerklärung", href: "/datenschutz" },
      { label: "KI-Telefonassistent erklärt", href: "/ki-telefonassistent" },
    ],
  },
};

const en: Record<ContentPath, ContentPage> = {
  "ki-telefonassistent": {
    path: "ki-telefonassistent",
    title: "AI Phone Assistant for Pest Control | Pestly",
    description:
      "What is an AI phone assistant for pest control? Pestly answers calls and messages, books jobs, and escalates emergencies so field crews do not lose leads.",
    h1: "AI phone assistant for pest control",
    definition:
      "An AI phone assistant for pest control answers customer calls and messages, understands the request, books appointments, and escalates emergencies — so you do not lose leads while on the job.",
    sections: [
      {
        heading: "The problem: missed calls cost jobs",
        paragraphs: [
          "Pest control teams spend the day on site — basements, attics, emergency callouts. The office phone still rings. Many callers never leave voicemail. They dial the next company in search results.",
          "Revenue leaks there: not because your service is worse, but because nobody takes first contact. A classic answering machine at best stores a message. It does not hold a conversation, book a slot, or flag an emergency.",
        ],
      },
      {
        heading: "What an AI phone assistant actually does",
        paragraphs: [
          "Unlike a recording, the AI answers in real time. It asks focused follow-ups, classifies common intents, and ends with a clear next step — usually a calendar booking on your schedule.",
        ],
        bullets: [
          "Answer and understand calls (infestation, quote, emergency, callback)",
          "Handle WhatsApp, SMS, email, and website widgets too",
          "Propose and confirm appointments",
          "Escalate urgent cases to you by SMS with a transcript",
          "Use a knowledge base with your services, pricing, and hours",
        ],
      },
      {
        heading: "Why pest control needs a vertical setup",
        paragraphs: [
          "Pest control is not a generic “trade services” script. Callers talk about roaches, rodents, wasp nests, infestation levels, or exclusion work. Many want help today, not next week.",
          "Pestly is configured for those workflows: terminology, emergency rules, booking windows, and the channels your customers actually use. The goal is a usable lead — not small talk.",
        ],
      },
      {
        heading: "Typical rollout",
        paragraphs: [
          "From kickoff to live is usually about five days. You spend roughly one to one-and-a-half hours on knowledge and calendar; setup handles the rest.",
        ],
        bullets: [
          "Port your number or issue a new one",
          "Load services, prices, and rules into the knowledge base",
          "Connect calendar (e.g. Google, Outlook, Cal.com)",
          "Run test calls and verify emergency escalation",
        ],
      },
      {
        heading: "Who Pestly is for",
        paragraphs: [
          "Solo operators without a full-time desk, multi-van teams, and shops with heavy inbound demand. It is less necessary if you personally answer every ring already.",
          "AI does not replace on-site treatment or complex consultations. It holds the line until you can take over.",
        ],
      },
    ],
    faq: [
      {
        question: "Is an AI phone assistant the same as voicemail?",
        answer:
          "No. Voicemail only records. The AI holds a conversation, books appointments, and escalates emergencies around the clock.",
      },
      {
        question: "Does it understand pest control terms?",
        answer:
          "Yes. Setup includes your services, pricing, and phrasing, plus industry language.",
      },
      {
        question: "Can I keep my existing number?",
        answer:
          "Yes. Porting or a new number both work. Setup is typically one to two business days for the number side.",
      },
      {
        question: "How fast can we go live?",
        answer:
          "About five days from sales call to live, depending on calendar and knowledge base readiness.",
      },
    ],
    cta: {
      heading: "See Pestly in 15 minutes",
      body: "A free demo with a typical pest control call — no obligation.",
      button: "Book a free demo",
      href: "/#demo",
    },
    related: [
      { label: "Pestly vs voicemail", href: "/vs/anrufbeantworter" },
      { label: "Privacy and AI telephony", href: "/dsgvo-ki-telefonie" },
    ],
  },

  "vs/anrufbeantworter": {
    path: "vs/anrufbeantworter",
    title: "AI Phone Assistant vs Voicemail | Pestly",
    description:
      "AI phone assistant vs answering machine for pest control: who keeps the lead, who only stores a message, and when Pestly is worth it.",
    h1: "AI phone assistant vs voicemail",
    definition:
      "Voicemail stores messages. An AI phone assistant like Pestly runs the conversation, qualifies the request, books appointments, and alerts you on emergencies immediately.",
    sections: [
      {
        heading: "In short",
        paragraphs: [
          "Both respond when you cannot pick up. The difference is whether the customer gets a next step — or waits for a callback while calling your competitor.",
        ],
      },
      {
        heading: "Side-by-side",
        paragraphs: [
          "This comparison reflects day-to-day pest control operations, not abstract call-center theory.",
        ],
        bullets: [
          "Voicemail: record → callback later → often too late",
          "AI assistant: dialogue → booking or escalation → lead stays in the funnel",
          "Channels: tape = phone only; Pestly = phone plus WhatsApp, SMS, email, widget",
          "Emergencies: tape cannot prioritize; AI can escalate urgent cases",
          "Cost: tape is cheap but loses jobs; AI costs setup and protects revenue",
        ],
      },
      {
        heading: "When voicemail is still enough",
        paragraphs: [
          "Low call volume, near-instant callbacks, and patients customers. In competitive markets with emergency demand, that is rare.",
        ],
      },
      {
        heading: "When Pestly is the better fit",
        paragraphs: [
          "When missed calls clearly cost revenue, crews are in the field all day, and you want appointments without a full-time front desk. AI does not replace the inspection. It stops first contact from dying.",
          "Judge the switch in revenue per lost job — not only in monthly tool cost.",
        ],
      },
      {
        heading: "What callers hear",
        paragraphs: [
          "Pestly can introduce itself as your company’s assistant. Complex cases hand off to you. Transparency is part of setup, not an afterthought.",
        ],
      },
    ],
    faq: [
      {
        question: "Does AI fully replace a human on the phone?",
        answer:
          "No. It covers first contact and routine booking. You still own advice and field work.",
      },
      {
        question: "What does switching from voicemail cost?",
        answer:
          "Quotes depend on channels and complexity. The demo is free and non-binding.",
      },
      {
        question: "Does it work evenings and weekends?",
        answer:
          "Yes. Intake follows your rules around the clock, including emergency logic if configured.",
      },
    ],
    cta: {
      heading: "Move beyond the recording",
      body: "Watch Pestly run a real-style call instead of only saving a message.",
      button: "Book a demo",
      href: "/#demo",
    },
    related: [
      { label: "Services", href: "/leistungen" },
      { label: "What is an AI phone assistant?", href: "/ki-telefonassistent" },
      { label: "Privacy and AI telephony", href: "/dsgvo-ki-telefonie" },
    ],
  },

  "dsgvo-ki-telefonie": {
    path: "dsgvo-ki-telefonie",
    title: "Privacy, GDPR, and AI Phone Assistants | Pestly",
    description:
      "Privacy for AI phone intake: what data is processed, what a DPA covers, and how Pestly handles calls for pest control teams.",
    h1: "Privacy and AI phone assistants",
    definition:
      "AI telephony processes personal data from calls and messages. Pestly uses it for intake, booking, and escalation — with an EU-focused stack and a data processing agreement available on request.",
    sections: [
      {
        heading: "Why AI phone systems process personal data",
        paragraphs: [
          "Names, phone numbers, addresses, pest descriptions, and appointment details are personal data. Privacy law expects a lawful basis, transparency, security, and — when a vendor processes data for you — a processing agreement (DPA).",
          "That applies whether you are a solo operator or a multi-van company. You remain responsible even when a vendor runs the stack.",
        ],
      },
      {
        heading: "Purpose limits that make sense",
        paragraphs: [
          "For Pestly, the business purpose is reachability, scheduling, and emergency handoff. Call data is not sold for third-party advertising. Legal bases and details live in the privacy policy and contract.",
        ],
        bullets: [
          "Capture and document the request",
          "Book into your calendar",
          "Escalate urgent cases to you",
          "Operate and improve the assistant within the agreed scope",
        ],
      },
      {
        heading: "What Pestly communicates about infrastructure",
        paragraphs: [
          "Product FAQ materials describe German hosting (Netcup), EU-oriented AI providers (including Mistral and Azure in Frankfurt), and encrypted handling. Exact sub-processors belong in the contract and privacy policy — not marketing slogans alone.",
        ],
      },
      {
        heading: "DPA and your duties as the business",
        paragraphs: [
          "A data processing agreement can be requested and is standard before production use of personal data. You should also inform callers appropriately, document access to transcripts, and define who receives emergency SMS.",
          "This page is guidance, not legal advice. Use counsel for special cases.",
        ],
      },
      {
        heading: "Go-live checklist",
        paragraphs: ["Before you flip the switch:"],
        bullets: [
          "Privacy policy and DPA reviewed and signed",
          "Call flow / website notice aligned",
          "Access to transcripts and emergency SMS defined",
          "Deletion and access-request process agreed with the vendor",
        ],
      },
    ],
    faq: [
      {
        question: "Where is customer data processed?",
        answer:
          "Pestly is designed around EU/DE-focused processing. Binding detail is in the contract and privacy policy.",
      },
      {
        question: "Can I get a DPA?",
        answer:
          "Yes. Request a data processing agreement before production use with personal data.",
      },
      {
        question: "Are calls sold for advertising?",
        answer:
          "No. Call data is not sold to third parties for ads. Use follows the agreed purpose (intake, booking, escalation, operation).",
      },
    ],
    cta: {
      heading: "Ask privacy questions in the demo",
      body: "We cover reachability and data handling before setup.",
      button: "Request a demo",
      href: "/#demo",
    },
    related: [
      { label: "Privacy policy", href: "/datenschutz" },
      { label: "AI phone assistant explained", href: "/ki-telefonassistent" },
    ],
  },
};

export function getContentPage(
  locale: Locale,
  path: ContentPath
): ContentPage {
  return (locale === "en" ? en : de)[path];
}

