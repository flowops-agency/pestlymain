export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                    */
/* -------------------------------------------------------------------------- */
export interface NavbarDict {
  logo: string;
  navLinks: { href: string; label: string }[];
  cta: string;
  menuLabel: string;
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */
export interface HeroDict {
  line1Before: string;
  line1Highlight: string;
  line2Before: string;
  line2Highlight: string;
  line2After: string;
  subtitle: string;
  cta: string;
  callerName: string;
  callerMsg: string;
  aiName: string;
  aiResponse: string;
  bookingTitle: string;
  bookingTime1: string;
  bookingTime2: string;
  bookingTag: string;
  summaryLine1: string;
  summaryLine2: string;
  currentCall: string;
  statusConnected: string;
}

/* -------------------------------------------------------------------------- */
/*  Social Proof                                                              */
/* -------------------------------------------------------------------------- */
export interface SocialProofDict {
  heading: string;
  logos: { name: string; subtitle: string }[];
}

/* -------------------------------------------------------------------------- */
/*  Stats                                                                     */
/* -------------------------------------------------------------------------- */
export interface StatsDict {
  headingBefore: string;
  headingHighlight: string;
  subtitle: string;
  stats: { value: string; label: string; decimals: number; suffix: string; prefix?: string }[];
}

/* -------------------------------------------------------------------------- */
/*  Features Bento                                                            */
/* -------------------------------------------------------------------------- */
export interface FeaturesBentoDict {
  headingBefore: string;
  headingHighlight: string;
  headingAfter: string;
  subtitle: string;
  cards: {
    voice: { status: string; title: string; desc: string };
    multichannel: { title: string; desc: string; channels: string[] };
    knowledge: { title: string; desc: string; labels: string[] };
    calendar: { title: string; desc: string; months: { label: string; days: string[] }; integrations: { name: string; status: string }[] };
  };
}

/* -------------------------------------------------------------------------- */
/*  AI Integration                                                            */
/* -------------------------------------------------------------------------- */
export interface AiIntegrationDict {
  headingBefore: string;
  headingHighlight: string;
  subtitle: string;
  cards: {
    voice: { title: string; desc: string; steps: string[] };
    knowledge: { title: string; desc: string; placeholder: string; qa: { q: string; a: string }[] };
    escalation: { title: string; desc: string; mode: string; urgentLabel: string; items: { label: string; time: string }[]; notification: string; notificationDetail: string };
  };
}

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/* -------------------------------------------------------------------------- */
export interface TestimonialsDict {
  headingBefore: string;
  headingHighlight: string;
  cta: string;
  items: { name: string; role: string; text: string }[];
}

/* -------------------------------------------------------------------------- */
/*  Pricing                                                                   */
/* -------------------------------------------------------------------------- */
export interface PricingDict {
  headingBefore: string;
  headingHighlight: string;
  headingAfter: string;
  subtitle: string;
  setupNote: string;
  cta: string;
  period: string;
  footnote: string;
  plans: {
    name: string;
    price: number;
    currency: string;
    description: string;
    features: string[];
    popular: boolean;
  }[];
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */
export interface FaqDict {
  headingBefore: string;
  headingHighlight: string;
  subtitle: string;
  items: { question: string; answer: string }[];
}

/* -------------------------------------------------------------------------- */
/*  Demo CTA                                                                  */
/* -------------------------------------------------------------------------- */
export interface DemoDict {
  heading: string;
  subtitle: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  cta: string;
  dsgvo: string;
  success: string;
}

/* -------------------------------------------------------------------------- */
/*  Founder                                                                   */
/* -------------------------------------------------------------------------- */
export interface FounderDict {
  heading: string;
  name: string;
  role: string;
  quote: string;
  phonePlaceholder: string;
  cta: string;
  dsgvo: string;
  success: string;
}

/* -------------------------------------------------------------------------- */
/*  Setup Service                                                             */
/* -------------------------------------------------------------------------- */
export interface SetupServiceDict {
  heading: string;
  highlight: string;
  subtitle: string;
  steps: { icon: string; title: string; desc: string }[];
}

/* -------------------------------------------------------------------------- */
/*  Cookie Banner                                                             */
/* -------------------------------------------------------------------------- */
export interface CookieBannerDict {
  text: string;
  accept: string;
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */
export interface FooterDict {
  brandDesc: string;
  columns: Record<string, { label: string; href: string }[]>;
  copyright: string;
  socialIcons: { name: string; href: string }[];
}

/* -------------------------------------------------------------------------- */
/*  Impressum / Legal                                                         */
/* -------------------------------------------------------------------------- */
export interface ImpressumDict {
  title: string;
  subtitle: string;
  sections: {
    icon: string;
    title: string;
    contentLines: string[];
  }[];
  footerNote: string;
  footerEmail: string;
}

/* -------------------------------------------------------------------------- */
/*  Privacy / Datenschutz                                                     */
/* -------------------------------------------------------------------------- */
export interface PrivacyDict {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: {
    icon: string;
    title: string;
    contentLines: string[];
  }[];
  footerNote: string;
  footerEmail: string;
}

/* -------------------------------------------------------------------------- */
/*  AGB / Terms of Service                                                    */
/* -------------------------------------------------------------------------- */
export interface TermsDict {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: {
    icon: string;
    title: string;
    contentLines: string[];
  }[];
  footerNote: string;
  footerEmail: string;
}

/* -------------------------------------------------------------------------- */
/*  Cookie Settings                                                           */
/* -------------------------------------------------------------------------- */
export interface CookieSettingsDict {
  title: string;
  subtitle: string;
  intro: string;
  categories: {
    id: string;
    title: string;
    description: string;
    alwaysOn?: boolean;
  }[];
  saveButton: string;
  savedMessage: string;
  footerNote: string;
}

/* -------------------------------------------------------------------------- */
/*  Locale Switcher                                                           */
/* -------------------------------------------------------------------------- */
export interface CommonDict {
  localeSwitcher: {
    de: string;
    en: string;
  };
  skipLink: string;
}

/* -------------------------------------------------------------------------- */
/*  Root Dictionary                                                           */
/* -------------------------------------------------------------------------- */
export interface Dictionary {
  common: CommonDict;
  navbar: NavbarDict;
  hero: HeroDict;
  socialProof: SocialProofDict;
  stats: StatsDict;
  features: FeaturesBentoDict;
  aiIntegration: AiIntegrationDict;
  testimonials: TestimonialsDict;
  pricing: PricingDict;
  faq: FaqDict;
  demo: DemoDict;
  founder: FounderDict;
  cookieBanner: CookieBannerDict;
  setupService: SetupServiceDict;
  footer: FooterDict;
  impressum: ImpressumDict;
  privacy: PrivacyDict;
  terms: TermsDict;
  cookieSettings: CookieSettingsDict;
}

/* -------------------------------------------------------------------------- */
/*  DE (German)                                                               */
/* -------------------------------------------------------------------------- */
const de: Dictionary = {
  common: {
    localeSwitcher: { de: "DE", en: "US" },
    skipLink: "Zum Hauptinhalt springen",
  },
  navbar: {
    logo: "Pestly",
    navLinks: [
      { href: "/#home", label: "Start" },
      { href: "/#features", label: "Funktionen" },
      { href: "/#faq", label: "FAQ" },
    ],
    cta: "Kostenlos testen",
    menuLabel: "Menü öffnen",
  },
  hero: {
    line1Before: "Nie wieder eine",
    line1Highlight: "",
    line2Before: "",
    line2Highlight: "Anfrage",
    line2After: "verpassen",
    subtitle:
      "Pestly ist Ihr KI-Telefonassistent für Schädlingsbekämpfung. Er beantwortet Anrufe, WhatsApp, SMS und E-Mails autonom — bucht Termine in Ihren Kalender und leitet dringende Fälle weiter. <strong>Sie bekämpfen Schädlinge, Pestly telefoniert.</strong>",
    cta: "Kostenlose Demo buchen",
    callerName: "Herr Müller",
    callerMsg: "Guten Tag, wir haben Kakerlaken in der Küche — können Sie heute noch vorbeikommen?",
    aiName: "Pestly (KI)",
    aiResponse:
      "Guten Tag Herr Müller, das tut mir leid zu hören. Ich prüfe schnell die Verfügbarkeit...",
    bookingTitle: "Terminvorschlag",
    bookingTime1: "Morgen, 14:00 - 16:00",
    bookingTime2: "oder Do, 09:00 - 12:00",
    bookingTag: "Notdienst",
    summaryLine1: "✓ Termin angefragt",
    summaryLine2: "✓ WhatsApp-Bestätigung gesendet",
    currentCall: "Aktueller Anruf",
    statusConnected: "Verbunden",
  },
  socialProof: {
    heading: "Von der Schädlingsbekämpfung empfohlen",
    logos: [
      { name: "VSS", subtitle: "Verband für Schädlingsbekämpfung" },
      { name: "DPSD", subtitle: "Deutscher Schädlingsbekämpfer" },
      { name: "DSLV", subtitle: "Landesverb. Schädlingsbek." },
      { name: "IHK", subtitle: "Industrie- und Handelskammer" },
    ],
  },
  stats: {
    headingBefore: "Das Problem ist",
    headingHighlight: "real",
    subtitle:
      "Während Sie im Außeneinsatz Schädlinge bekämpfen, klingelt das Telefon in Ihrer Zentrale — und Aufträge bleiben unbeantwortet.",
    stats: [
      { value: "35", label: "der Anrufe bei Schädlingsbekämpfern werden nicht beantwortet", decimals: 0, suffix: "%" },
      { value: "62", label: "der Anrufer rufen nicht zurück", decimals: 0, suffix: "%" },
      { value: "3500", label: "Umsatzverlust pro Woche (bei 5 verpassten Anrufen / Tag)", decimals: 0, prefix: "€", suffix: "" },
      { value: "85", label: "rufen nicht ein zweites Mal an", decimals: 0, suffix: "%" },
      { value: "15", label: "Auftragsverlust durch Nichterreichbarkeit", decimals: 0, suffix: "%" },
    ],
  },
  features: {
    headingBefore: "Ihr",
    headingHighlight: "KI-Assistent",
    headingAfter: "für Schädlingsbekämpfer",
    subtitle:
      "Pestly übernimmt die Kommunikation für Ihr Schädlingsbekämpfungsunternehmen — von der Rufannahme bis zur Terminbuchung.",
    cards: {
      voice: {
        status: "Aktiv — nimmt Anrufe entgegen",
        title: "KI-Sprachassistent — versteht Deutsch perfekt",
        desc: "Dank Mistral und Azure-optimiertem Deutsch versteht Pestly auch Fachbegriffe der Schädlingsbekämpfung. Kein „Drücken Sie die 1“ mehr.",
      },
      multichannel: {
        title: "Alle Kanäle, eine Nummer",
        desc: "Anruf, WhatsApp, SMS oder E-Mail — Pestly fasst alles in einem Posteingang zusammen. Ihr Kunde erreicht Sie, wie er will.",
        channels: ["Anruf", "WhatsApp", "SMS", "E-Mail"],
      },
      knowledge: {
        title: "Intelligente Wissensdatenbank",
        desc: "Hinterlegen Sie einfach Ihre Preise, Einsatzgebiete und Schädlingsarten — Pestly beantwortet alles korrekt und bucht passende Termine.",
        labels: ["Öffnungszeiten", "Preise", "Einsatzgebiet", "Notfälle", "Team", "Schädlingsarten"],
      },
      calendar: {
        title: "Automatische Terminbuchung",
        desc: "Pestly prüft Ihre Verfügbarkeit in Echtzeit, schlägt dem Kunden passende Termine vor und bucht sie direkt in Ihren Kalender — ohne dass Sie einen Finger rühren.",
        months: {
          label: "Juni 2026",
          days: ["MO", "DI", "MI", "DO", "FR", "SA", "SO"],
        },
        integrations: [
          { name: "Google Kalender", status: "Verbunden" },
          { name: "Cal.com", status: "Aktiv" },
          { name: "Outlook", status: "Verbunden" },
          { name: "Terminbestätigung", status: "WhatsApp + E-Mail" },
        ],
      },
    },
  },
  aiIntegration: {
    headingBefore: "So funktioniert's —",
    headingHighlight: "volle Automation",
    subtitle:
      "Vom eingehenden Anruf bis zur Terminbestätigung — Pestly arbeitet vollständig autonom. Nur bei Bedarf wird Ihr Smartphone kurz lautlos.",
    cards: {
      voice: {
        title: "Anruf → Termin in Sekunden",
        desc: "Kunde ruft an, Pestly nimmt entgegen, versteht das Anliegen, schlägt Termine vor und bucht — in unter 30 Sekunden.",
        steps: ["Eingehender Anruf", "KI versteht Anfrage & prüft Verfügbarkeit", "Terminvorschlag + Buchung", "WhatsApp-Bestätigung an Kunden"],
      },
      knowledge: {
        title: "Wissensdatenbank & FAQ",
        desc: "Hinterlegen Sie Preise, Leistungen und Richtlinien einmalig — Pestly beantwortet alles korrekt und konsistent.",
        placeholder: "Frage an Pestly...",
        qa: [
          { q: "Was kostet eine Wespenbekämpfung?", a: "Ab €80, genauer Preis nach Sichtung vor Ort." },
          { q: "Wie schnell können Sie kommen?", a: "Heute Nachmittag ab 15 Uhr hätten wir einen Termin frei." },
          { q: "Hilft das auch gegen Bettwanzen?", a: "Ja, wir haben eine spezielle Wärmebehandlung dafür." },
        ],
      },
      escalation: {
        title: "Intelligente Eskalation",
        desc: "Bei Notfällen oder wenn der Kunde ein persönliches Gespräch wünscht — Pestly sendet Ihnen sofort eine SMS mit Transkript und Voicemail.",
        mode: "Notfall-Modus",
        urgentLabel: "Dringend",
        items: [
          { label: "Familie Krüger — Kakerlaken", time: "vor 2 Min" },
          { label: "Restaurant Linde — Mäuse", time: "vor 5 Min" },
          { label: "Firma Schröder — Wespenbefall", time: "vor 15 Min" },
        ],
        notification: "SMS-Benachrichtigung gesendet",
        notificationDetail: "+49 176 1234567 — Transkript folgt per E-Mail",
      },
    },
  },
  testimonials: {
    headingBefore: "Das sagen unsere",
    headingHighlight: "Kunden",
    cta: "Kostenlose Demo buchen",
    items: [
      {
        name: "Markus Klein",
        role: "Schädlingsbekämpfung, München",
        text: "Seit ich Pestly habe, verpasse ich keinen Anruf mehr. Letzte Woche hat die KI einen Wespen-Einsatz angenommen, während ich auf dem Dach war.",
      },
      {
        name: "Thomas Wagner",
        role: "Kammerjäger, Berlin",
        text: "Meine Kunden sind begeistert, dass sie sofort einen Termin bekommen — per WhatsApp, ohne Warteschleife. Ich spare locker 5 Stunden pro Woche.",
      },
      {
        name: "Sabine Müller",
        role: "Schädlingsbekämpfung, Stuttgart",
        text: "Die Wissensdatenbank ist genial. Einmal eingerichtet, beantwortet Pestly 90% der Fragen selbstständig. Ich kann mich endlich auf die Arbeit konzentrieren.",
      },
    ],
  },
  pricing: {
    headingBefore: "Transparente",
    headingHighlight: "Preise",
    headingAfter: "für Schädlingsbekämpfer",
    subtitle: "Keine versteckten Kosten. Keine Mindestvertragslaufzeit. Setup einmalig €500–€800 — danach nur die Monatsgebühr.",
    setupNote: "Einmalige Setup-Gebühr: €500–€800",
    cta: "Demo buchen",
    period: "/Monat",
    footnote:
      "Im Vergleich zu CallBert (€299/Monat, nur Sprache) bekommen Sie bei uns für nur €30 mehr: Sprache + WhatsApp + SMS + E-Mail + Terminbuchung.",
    plans: [
      {
        name: "Standard",
        price: 329,
        currency: "€",
        description: "Für Einzelkämpfer und kleine Schädlingsbekämpfungsbetriebe",
        popular: true,
        features: [
          "KI-Sprachassistent (Deutsch)",
          "Eingehende Anrufe → Terminbuchung",
          "Voicemail + Transkription",
          "WhatsApp-Integration",
          "E-Mail-Beantwortung",
          "Wissensdatenbank (eigene Inhalte)",
          "Kalender-Sync (Google, Outlook, Cal.com)",
          "Monatlich kündbar",
        ],
      },
      {
        name: "Premium",
        price: 499,
        currency: "€",
        description: "Für wachsende Betriebe mit hohem Aufkommen",
        popular: false,
        features: [
          "Alles aus Standard",
          "24/7-After-Hours-Betrieb",
          "SMS-Integration",
          "Priorisierte Eskalation (SMS + E-Mail)",
          "Mehrere Standorte / Teams",
          "Detaillierte Anruf-Analysen",
          "API-Zugriff für individuelle Integrationen",
          "Priority-Support (Antwort < 1h)",
        ],
      },
    ],
  },
  faq: {
    headingBefore: "Häufig",
    headingHighlight: "gestellte Fragen",
    subtitle: "Alles, was Sie über Pestly wissen müssen — kurz und verständlich.",
    items: [
      {
        question: "Wie schnell ist Pestly einsatzbereit?",
        answer:
          "In der Regel 5 Tage vom Verkaufsgespräch bis zur Live-Schaltung. Sie brauchen etwa 1–1,5 Stunden Ihrer Zeit für die Einrichtung der Wissensdatenbank und Kalenderanbindung — den Rest übernehmen wir.",
      },
      {
        question: "Versteht Pestly auch Fachbegriffe aus der Schädlingsbekämpfung?",
        answer:
          "Ja. Pestly nutzt Mistral AI (Frankreich) und Azure AI (Frankfurt) — beides DSGVO-konform mit Auftragsverarbeitungsvereinbarung (AVV). Die Sprachdaten werden auf deutschen Netcup-Servern verarbeitet. Fachbegriffe wie ‚Befallsgrad‘, ‚Thermische Entwesung‘ oder ‚Rodentizid-Einsatz‘ sind kein Problem.",
      },
      {
        question: "Was passiert bei Notfällen oder komplexen Anfragen?",
        answer:
          "Pestly erkennt, wenn ein Kunde dringend ein persönliches Gespräch braucht. In dem Fall sendet die KI Ihnen sofort eine SMS mit Transkript und Voicemail. Sie können dann zurückrufen — oder Pestly lässt den Kunden wissen, dass Sie sich melden.",
      },
      {
        question: "Welche Kosten kommen auf mich zu?",
        answer:
          "Das kommt auf die Komplexität Ihres Betriebs an — ob Einzelunternehmen oder größerer Betrieb, wie viele Standorte und Kanäle angebunden werden sollen. In einem kurzen, unverbindlichen Gespräch erstellen wir Ihnen ein maßgeschneidertes Angebot. Keine Mindestvertragslaufzeit.",
      },
      {
        question: "Ist Pestly DSGVO-konform?",
        answer:
          "Ja. Alle Daten werden auf deutschen Netcup-Servern verarbeitet und gespeichert. Die KI-Sprachmodelle kommen von Mistral AI (Frankreich) und Azure AI (Frankfurt) — beide DSGVO-konform. Eine Auftragsverarbeitungsvereinbarung (AVV) kann auf Wunsch angefragt werden. Gesprächsdaten werden verschlüsselt und nicht an Dritte weitergegeben.",
      },
      {
        question: "Kann ich meine bestehende Telefonnummer behalten?",
        answer:
          "Ja. Sie können Ihre Rufnummer zu Pestly portieren oder eine neue Nummer von uns erhalten. Die Einrichtung dauert in der Regel 1–2 Werktage.",
      },
    ],
  },
  demo: {
    heading: "Pestly unverbindlich testen",
    subtitle: "In nur 15 Minuten zeigen wir Ihnen, ob Pestly Ihre Schädlingsbekämpfung entlastet — live am Telefon, unverbindlich.",
    phonePlaceholder: "Ihre Telefonnummer",
    emailPlaceholder: "Ihre E-Mail-Adresse",
    cta: "Kostenlose Demo buchen",
    dsgvo: "✓ DSGVO-konform — Ihre Daten sind sicher.",
    success: "✓ Danke! Wir melden uns in Kürze bei Ihnen.",
  },
  founder: {
    heading: "Der Mensch hinter Pestly",
    name: "Tom Berger",
    role: "Gründer",
    success: "✓ Danke! Wir melden uns in Kürze.",
    quote: "Pestly ist nicht fürs Silicon Valley gemacht, sondern für den echten Schädlingsbekämpfungs-Alltag. Eine KI, die Ihnen den Rücken freihält, während Sie im Einsatz sind.",
    phonePlaceholder: "Ihre Telefonnummer",
    cta: "Jetzt anrufen lassen",
    dsgvo: "✓ DSGVO-konform — Ihre Daten sind sicher und werden nicht weitergegeben.",
  },
  cookieBanner: {
    text: "Pestly nutzt Cookies & lokale Speicherung, um die Seite zu verbessern. Keine Weitergabe an Dritte. DSGVO-konform.",
    accept: "Verstanden",
  },
  setupService: {
    heading: "Wir machen das —",
    highlight: "kein IT-Wissen nötig",
    subtitle: "Kein IT-Wissen nötig. Wir übernehmen das gesamte Setup für Sie — von der Rufnummer bis zum KI-Training. In nur 5 Tagen sind Sie live.",
    steps: [
      {
        icon: "phone",
        title: "Rufnummer & Leitungen",
        desc: "Wir portieren Ihre bestehende Nummer oder richten eine neue ein — inklusive Anbindung an unser deutsches Netcup-Netzwerk.",
      },
      {
        icon: "database",
        title: "Wissensdatenbank",
        desc: "Sie liefern Preise, Leistungen und Öffnungszeiten — wir pflegen alles ein. Kein technisches Know-how nötig.",
      },
      {
        icon: "calendar",
        title: "Kalender & Integrationen",
        desc: "Wir verbinden Google Kalender, Outlook oder Cal.com. Termine werden ab sofort automatisch gebucht.",
      },
      {
        icon: "brain",
        title: "KI-Training auf Schädlingsbekämpfung",
        desc: "Wir trainieren Pestly auf Ihre Fachbegriffe und Abläufe — damit die KI von Tag eins an perfekt funktioniert.",
      },
    ],
  },
  footer: {
    brandDesc:
      "KI-Telefonassistent für Schädlingsbekämpfung. Nie wieder einen Auftrag verpassen.",
    columns: {
      Leistungen: [
        { label: "KI-Sprachassistent", href: "/#features" },
        { label: "Terminbuchung", href: "/#features" },
        { label: "WhatsApp-Integration", href: "/#features" },
        { label: "Wissensdatenbank", href: "/#features" },
      ],
      Unternehmen: [
        { label: "Über uns", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Karriere", href: "#" },
        { label: "Partner werden", href: "#" },
      ],
      Rechtliches: [
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
        { label: "AGB", href: "/agb" },
        { label: "Cookie-Einstellungen", href: "/cookie-einstellungen" },
      ],
    },
    copyright: "Alle Rechte vorbehalten.",
    socialIcons: [
      { name: "Twitter", href: "https://x.com/pestly" },
      { name: "LinkedIn", href: "https://linkedin.com/company/pestly" },
    ],
  },
  impressum: {
    title: "Impressum",
    subtitle: "Angaben nach § 5 DDG / TMG",
    sections: [
      {
        icon: "building",
        title: "Angaben gemäß § 5 DDG",
        contentLines: [
          "Pestly LLC",
          "1209 MOUNTAIN ROAD PL NE, STE R",
          "ALBUQUERQUE, NM 87110",
          "USA",
          "",
          "Registriert im Bundesstaat New Mexico (USA)",
          "Registerbehörde: New Mexico Secretary of State (SOS)",
        ],
      },
      {
        icon: "mail",
        title: "Kontakt",
        contentLines: ["info@pestly.de"],
      },
      {
        icon: "tax",
        title: "Umsatzsteuer",
        contentLines: [
          "Die Pestly LLC unterliegt als US-Unternehmen nicht der deutschen Umsatzsteuer. Gemäß Reverse-Charge-Verfahren geht die Steuerschuld auf den Leistungsempfänger über (§ 13b UStG).",
        ],
      },
      {
        icon: "scale",
        title: "Streitbeilegung",
        contentLines: [
          "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ],
      },
      {
        icon: "file",
        title: "Haftungsausschluss",
        contentLines: [
          "Haftung für Inhalte: Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",
          "Haftung für Links: Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.",
        ],
      },
    ],
    footerNote: "Stand: Januar 2026. Änderungen vorbehalten. Sollten Sie Fragen oder Beanstandungen haben, kontaktieren Sie uns bitte unter",
    footerEmail: "info@pestly.de",
  },

  /* ------------------------------------------------------------------------ */
  /*  Privacy / Datenschutz                                                   */
  /* ------------------------------------------------------------------------ */
  privacy: {
    title: "Datenschutzerklärung",
    subtitle: "Informationen gemäß Art. 13, 14 DSGVO",
    lastUpdated: "Stand: Juni 2026",
    sections: [
      {
        icon: "building",
        title: "Verantwortliche Stelle",
        contentLines: [
          "Pestly LLC",
          "1209 MOUNTAIN ROAD PL NE, STE R",
          "ALBUQUERQUE, NM 87110",
          "USA",
          "",
          "E-Mail: info@pestly.de",
        ],
      },
      {
        icon: "database",
        title: "Welche Daten wir verarbeiten",
        contentLines: [
          "Pestly verarbeitet folgende personenbezogene Daten:",
          "• Kontaktdaten (Name, Telefonnummer, E-Mail-Adresse)",
          "• Gesprächsdaten (Anrufaufzeichnungen, Transkriptionen, Voicemails)",
          "• Kalender- und Termindaten (Verfügbarkeiten, gebuchte Termine)",
          "• Kommunikationsinhalte aus WhatsApp, SMS und E-Mail",
          "• Zahlungsdaten (werden über PCI-DSS-konforme Zahlungsdienstleister abgewickelt)",
          "• Nutzungsdaten der Website (siehe Cookie-Einstellungen)",
        ],
      },
      {
        icon: "server",
        title: "Netcup Server-Infrastruktur",
        contentLines: [
          "Alle Daten werden auf dedizierten Servern der netcup GmbH in Deutschland verarbeitet und gespeichert. Standort: Nürnberg, Deutschland.",
          "Die Server unterliegen deutschem Datenschutzrecht und der DSGVO. Der Zugriff ist durch moderne Verschlüsselungsverfahren (TLS 1.3) und Firewall-Systeme geschützt.",
          "Ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO wurde mit der netcup GmbH geschlossen.",
        ],
      },
      {
        icon: "scale",
        title: "Rechtsgrundlagen der Verarbeitung",
        contentLines: [
          "Die Verarbeitung erfolgt auf folgenden Rechtsgrundlagen:",
          "• Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) – für die Erbringung unserer Dienstleistungen",
          "• Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) – für die Verbesserung unseres Angebots",
          "• Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) – für optionale Cookie-Kategorien",
          "• Art. 9 Abs. 2 lit. h DSGVO – bei Verarbeitung besonderer Kategorien im Gesundheitswesen",
        ],
      },
      {
        icon: "handshake",
        title: "KI-Sprachmodelle und Auftragsverarbeitung",
        contentLines: [
          "Pestly nutzt KI-Sprachmodelle folgender Anbieter:",
          "• Mistral AI (Frankreich) – DSGVO-konform, AVV abgeschlossen",
          "• Azure AI (Frankfurt, Deutschland) – DSGVO-konform, AVV abgeschlossen",
          "Eine Weitergabe an Dritte außerhalb der genannten Auftragsverarbeiter erfolgt nicht.",
        ],
      },
      {
        icon: "clock",
        title: "Speicherdauer und Löschung",
        contentLines: [
          "Gesprächsdaten werden für die Dauer des Vertragsverhältnisses gespeichert und nach Vertragsende gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.",
          "Anrufaufzeichnungen und Transkriptionen werden nach 90 Tagen automatisch gelöscht, es sei denn, sie werden für die Vertragserfüllung benötigt.",
          "Website-Nutzungsdaten werden gemäß den Einstellungen in Ihrem Cookie-Banner gespeichert.",
        ],
      },
      {
        icon: "eye",
        title: "Ihre Rechte",
        contentLines: [
          "Ihnen stehen folgende Rechte gemäß DSGVO zu:",
          "• Recht auf Auskunft (Art. 15 DSGVO)",
          "• Recht auf Berichtigung (Art. 16 DSGVO)",
          "• Recht auf Löschung (Art. 17 DSGVO)",
          "• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
          "• Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
          "• Widerspruchsrecht (Art. 21 DSGVO)",
          "",
          "Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: info@pestly.de",
        ],
      },
      {
        icon: "refresh",
        title: "Änderungen dieser Datenschutzerklärung",
        contentLines: [
          "Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte Rechtslagen oder Änderungen unserer Dienstleistungen anzupassen. Die jeweils aktuelle Version finden Sie auf dieser Seite.",
        ],
      },
    ],
    footerNote: "Stand: Juni 2026. Bei Fragen zum Datenschutz wenden Sie sich bitte an",
    footerEmail: "info@pestly.de",
  },

  /* ------------------------------------------------------------------------ */
  /*  AGB / Terms of Service                                                  */
  /* ------------------------------------------------------------------------ */
  terms: {
    title: "Allgemeine Geschäftsbedingungen (AGB)",
    subtitle: "Für die Nutzung der Pestly-Dienstleistungen",
    lastUpdated: "Stand: Juni 2026",
    sections: [
      {
        icon: "scroll",
        title: "§1 Geltungsbereich",
        contentLines: [
          "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Pestly LLC (nachfolgend „Pestly“) und dem Kunden über die Nutzung des KI-Telefonassistenten Pestly.",
          "Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, Pestly stimmt ihrer Geltung ausdrücklich schriftlich zu.",
        ],
      },
      {
        icon: "handshake",
        title: "§2 Vertragsgegenstand",
        contentLines: [
          "Pestly stellt einen KI-gestützten Telefonassistenten zur Verfügung, der eingehende Anrufe, WhatsApp-Nachrichten, SMS und E-Mails automatisiert beantwortet, Termine in den Kalender des Kunden bucht und dringende Fälle eskaliert.",
          "Der genaue Leistungsumfang ergibt sich aus der gewählten Preisstufe (Standard oder Premium) sowie der individuellen Konfiguration.",
        ],
      },
      {
        icon: "wallet",
        title: "§3 Preise und Zahlungsbedingungen",
        contentLines: [
          "Es fällt eine einmalige Setup-Gebühr in Höhe von 500–800 € (oder Gegenwert in USD) an.",
          "Die monatliche Gebühr beträgt je nach gewählter Preisstufe 329 € (Standard) oder 499 € (Premium), zzgl. etwaiger Umsatzsteuer.",
          "Alle Preise verstehen sich als Monatsbeträge und sind im Voraus fällig. Die Zahlung erfolgt per Lastschrift oder Kreditkarte.",
          "Bei Zahlungsverzug ist Pestly berechtigt, den Zugang zur Dienstleistung zu sperren.",
        ],
      },
      {
        icon: "x-circle",
        title: "§4 Kündigung",
        contentLines: [
          "Der Vertrag läuft auf unbestimmte Zeit und kann von beiden Parteien mit einer Frist von 30 Tagen zum Monatsende gekündigt werden.",
          "Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.",
          "Nach Kündigung werden alle Daten des Kunden innerhalb von 30 Tagen gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.",
        ],
      },
      {
        icon: "scale",
        title: "§5 Haftung",
        contentLines: [
          "Pestly haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.",
          "Für einfache Fahrlässigkeit haftet Pestly nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), beschränkt auf den typischen, vorhersehbaren Schaden.",
          "Die Haftung für mittelbare Schäden, insbesondere entgangenen Gewinn, ist ausgeschlossen, soweit gesetzlich zulässig.",
          "Pestly übernimmt keine Garantie für eine ununterbrochene Verfügbarkeit der Dienstleistung. Eine Haftung für Ausfälle aufgrund von Wartungsarbeiten, technischen Störungen oder höherer Gewalt ist ausgeschlossen.",
        ],
      },
      {
        icon: "shield",
        title: "§6 Datenschutz",
        contentLines: [
          "Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung und den Bestimmungen der DSGVO.",
          "Pestly verarbeitet alle Daten auf deutschen Netcup-Servern. Mit allen Unterauftragsverarbeitern wurden Auftragsverarbeitungsverträge (AVV) geschlossen.",
          "Der Kunde verpflichtet sich, seine eigenen Kunden über die Datenverarbeitung durch Pestly zu informieren, soweit dies datenschutzrechtlich erforderlich ist.",
        ],
      },
      {
        icon: "globe",
        title: "§7 Anwendbares Recht und Gerichtsstand",
        contentLines: [
          "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).",
          "Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, soweit gesetzlich zulässig, der Sitz von Pestly in Albuquerque, New Mexico, USA.",
          "Für Verbraucher gilt die zuständige Gerichtsbarkeit ihres Wohnsitzes.",
        ],
      },
      {
        icon: "file",
        title: "§8 Salvatorische Klausel",
        contentLines: [
          "Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen dadurch nicht berührt. Anstelle der unwirksamen Bestimmung gilt eine wirksame Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.",
        ],
      },
    ],
    footerNote: "Stand: Juni 2026. Bei Fragen zu unseren AGB wenden Sie sich bitte an",
    footerEmail: "info@pestly.de",
  },

  /* ------------------------------------------------------------------------ */
  /*  Cookie Settings                                                         */
  /* ------------------------------------------------------------------------ */
  cookieSettings: {
    title: "Cookie-Einstellungen",
    subtitle: "Ihre Privatsphäre-Einstellungen verwalten",
    intro: "Pestly verwendet Cookies und lokale Speicherung, um die Funktionalität der Website zu gewährleisten und Ihr Erlebnis zu verbessern. Sie können hier Ihre Präferenzen für verschiedene Kategorien festlegen. Alle Daten werden DSGVO-konform auf deutschen Netcup-Servern verarbeitet.",
    categories: [
      {
        id: "essential",
        title: "Essenziell (immer aktiv)",
        description: "Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. Sie ermöglichen grundlegende Funktionen wie Navigation und Zugriff auf geschützte Bereiche.",
        alwaysOn: true,
      },
      {
        id: "analytics",
        title: "Analyse-Cookies",
        description: "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie anonyme Daten sammeln. So können wir unser Angebot verbessern.",
      },
      {
        id: "marketing",
        title: "Marketing-Cookies",
        description: "Diese Cookies werden verwendet, um Besuchern relevante Werbung anzuzeigen und die Effektivität von Kampagnen zu messen.",
      },
    ],
    saveButton: "Einstellungen speichern",
    savedMessage: "✓ Ihre Cookie-Einstellungen wurden gespeichert.",
    footerNote: "Sie können Ihre Einstellungen jederzeit auf dieser Seite anpassen.",
  },
};

/* -------------------------------------------------------------------------- */
/*  EN (US English)                                                            */
/* -------------------------------------------------------------------------- */
const en: Dictionary = {
  common: {
    localeSwitcher: { de: "DE", en: "US" },
    skipLink: "Skip to main content",
  },
  navbar: {
    logo: "Pestly",
    navLinks: [
      { href: "/#home", label: "Home" },
      { href: "/#features", label: "Features" },
      { href: "/#faq", label: "FAQ" },
    ],
    cta: "Test for free",
    menuLabel: "Open menu",
  },
  hero: {
    line1Before: "Never miss another",
    line1Highlight: "lead",
    line2Before: "because you were",
    line2Highlight: "on the job",
    line2After: "",
    subtitle:
      "Pestly is your AI phone assistant for pest control companies. It answers calls, WhatsApp, SMS, and emails autonomously — books appointments in your calendar and forwards urgent cases. <strong>You handle pests, Pestly handles calls.</strong>",
    cta: "Book a Free Demo",
    callerName: "Mr. Johnson",
    callerMsg: "Hi, I think we have termites in the basement — can you come take a look?",
    aiName: "Pestly (AI)",
    aiResponse:
      "Good morning Mr. Johnson, sorry to hear that. Let me check availability right away...",
    bookingTitle: "Suggested Appointment",
    bookingTime1: "Tomorrow, 2:00 PM - 4:00 PM",
    bookingTime2: "or Thu, 9:00 AM - 12:00 PM",
    bookingTag: "Emergency",
    summaryLine1: "✓ Appointment scheduled",
    summaryLine2: "✓ WhatsApp confirmation sent",
    currentCall: "Current Call",
    statusConnected: "Connected",
  },
  socialProof: {
    heading: "Trusted by Pest Control Professionals",
    logos: [
      { name: "NPMA", subtitle: "National Pest Management" },
      { name: "PCA", subtitle: "Pest Control Association" },
      { name: "FPMA", subtitle: "Florida Pest Management" },
      { name: "TPCA", subtitle: "Texas Pest Control" },
    ],
  },
  stats: {
    headingBefore: "The problem is",
    headingHighlight: "real",
    subtitle:
      "While you're out on a pest control job, your office phone keeps ringing — and potential revenue goes unanswered.",
    stats: [
      { value: "35", label: "of business calls go unanswered", decimals: 0, suffix: "%" },
      { value: "62", label: "of callers never call back", decimals: 0, suffix: "%" },
      { value: "4800", label: "in lost revenue per week (5 missed pest control calls/day)", decimals: 0, prefix: "$", suffix: "" },
      { value: "85", label: "don't try a second time", decimals: 0, suffix: "%" },
      { value: "15", label: "revenue loss from missed calls", decimals: 0, suffix: "%" },
    ],
  },
  features: {
    headingBefore: "Your",
    headingHighlight: "AI Assistant",
    headingAfter: "for Pest Control",
    subtitle:
      "Pestly handles all communication for your pest control business — from answering calls to booking appointments.",
    cards: {
      voice: {
        status: "Active — taking calls now",
        title: "AI Voice Agent — understands English perfectly",
        desc: "Powered by Mistral & Azure-optimized English, Pestly understands pest control terminology inside and out. No more &ldquo;Press 1&rdquo; menus.",
      },
      multichannel: {
        title: "All channels, one number",
        desc: "Calls, WhatsApp, SMS, or email — Pestly consolidates everything into one inbox. Your customers reach you however they want.",
        channels: ["Phone", "WhatsApp", "SMS", "Email"],
      },
      knowledge: {
        title: "Smart Knowledge Base",
        desc: "Just set your prices, hours, and services once — Pestly answers everything accurately and books the right appointments.",
        labels: ["Hours", "Pricing", "Service Area", "Emergencies", "Team", "Pest Types"],
      },
      calendar: {
        title: "Automated Appointment Booking",
        desc: "Pestly checks your real-time availability, suggests appointment slots to customers, and books directly to your calendar — hands-free.",
        months: {
          label: "June 2026",
          days: ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
        },
        integrations: [
          { name: "Google Calendar", status: "Connected" },
          { name: "Cal.com", status: "Active" },
          { name: "Outlook", status: "Connected" },
          { name: "Confirmation", status: "WhatsApp + Email" },
        ],
      },
    },
  },
  aiIntegration: {
    headingBefore: "How it works —",
    headingHighlight: "full automation",
    subtitle:
      "From incoming call to appointment confirmation — Pestly works fully autonomously. Your phone only buzzes when you're truly needed.",
    cards: {
      voice: {
        title: "Call → Appointment in Seconds",
        desc: "Customer calls, Pestly answers, understands the request, suggests times, and books — in under 30 seconds.",
        steps: ["Incoming call", "AI understands request & checks availability", "Suggest times + book", "WhatsApp confirmation sent"],
      },
      knowledge: {
        title: "Knowledge Base & FAQ",
        desc: "Set your prices, services, and policies once — Pestly answers everything accurately and consistently.",
        placeholder: "Ask Pestly...",
        qa: [
          { q: "How much is termite treatment?", a: "Starting at $800, exact quote after inspection." },
          { q: "How fast can you come out?", a: "We have an opening this afternoon at 3 PM." },
          { q: "Do you treat bed bugs too?", a: "Yes, we offer heat treatment and chemical options." },
        ],
      },
      escalation: {
        title: "Smart Escalation",
        desc: "For emergencies or when a customer needs to speak with you personally — Pestly sends an immediate SMS with transcript and voicemail.",
        mode: "Emergency Mode",
        urgentLabel: "Urgent",
        items: [
          { label: "Johnson Family — Roaches", time: "2 min ago" },
          { label: "Lakeside Diner — Rodents", time: "5 min ago" },
          { label: "Greenwood School — Termites", time: "15 min ago" },
        ],
        notification: "SMS notification sent",
        notificationDetail: "+1 (505) 555-0123 — Transcript will follow via email",
      },
    },
  },
  testimonials: {
    headingBefore: "What our",
    headingHighlight: "customers say",
    cta: "Book a Free Demo",
    items: [
      {
        name: "James Carter",
        role: "Pest Control, Austin TX",
        text: "Since I got Pestly, I haven't missed a single call. Last week the AI booked a termite treatment while I was out on inspection. Absolute game-changer.",
      },
      {
        name: "David Chen",
        role: "Termite & Fumigation, Portland OR",
        text: "My customers love that they get an appointment instantly — via WhatsApp, no hold time. I'm saving at least 5 hours a week.",
      },
      {
        name: "Sarah Mitchell",
        role: "Pest Management, Denver CO",
        text: "The knowledge base is brilliant. Set it up once and Pestly answers 90% of questions on its own. I can finally focus on the work.",
      },
    ],
  },
  pricing: {
    headingBefore: "Transparent",
    headingHighlight: "Pricing",
    headingAfter: "for Pest Control",
    subtitle: "No hidden fees. No long-term contracts. One-time setup $500–$800 — then just the monthly fee.",
    setupNote: "One-time setup fee: $500–$800",
    cta: "Book a Demo",
    period: "/mo",
    footnote:
      "Compared to basic voice-only solutions at $299/mo, for just $50 more you get: Voice + WhatsApp + SMS + Email + Appointment booking.",
    plans: [
      {
        name: "Standard",
        price: 349,
        currency: "$",
        description: "For solo operators and small businesses",
        popular: true,
        features: [
          "AI Voice Assistant (English)",
          "Inbound calls → appointment booking",
          "Voicemail + transcription",
          "WhatsApp integration",
          "Email response",
          "Knowledge base (your content)",
          "Calendar sync (Google, Outlook, Cal.com)",
          "Monthly cancellation",
        ],
      },
      {
        name: "Premium",
        price: 529,
        currency: "$",
        description: "For growing businesses with high volume",
        popular: false,
        features: [
          "Everything in Standard",
          "24/7 after-hours coverage",
          "SMS integration",
          "Priority escalation (SMS + email)",
          "Multi-location / team support",
          "Detailed call analytics",
          "API access for custom integrations",
          "Priority support (< 1hr response)",
        ],
      },
    ],
  },
  faq: {
    headingBefore: "Frequently",
    headingHighlight: "asked questions",
    subtitle: "Everything you need to know about Pestly — short and clear.",
    items: [
      {
        question: "How fast can Pestly go live?",
        answer:
          "Typically 5 days from sales call to live deployment. You'll need about 1–1.5 hours of your time to set up the knowledge base and calendar connection — we handle the rest.",
      },
      {
        question: "Can Pestly understand pest control-specific terms?",
        answer:
          "Yes. Pestly uses Mistral AI (France) and Azure AI (Frankfurt, Germany) — both GDPR-compliant with Data Processing Agreements (DPA). Voice data is processed on German Netcup servers. Terms like 'infestation level,' 'thermal remediation,' or 'rodent exclusion' are handled naturally.",
      },
      {
        question: "What happens with emergencies or complex requests?",
        answer:
          "Pestly detects when a customer urgently needs to speak with you. In that case, the AI immediately sends you an SMS with transcript and voicemail. You can call back — or Pestly lets the customer know you'll reach out.",
      },
      {
        question: "What are the costs?",
        answer:
          "It depends on your business complexity — solo operator or larger team, how many locations and channels need to be connected. In a brief, no-obligation call we'll create a tailored quote. No minimum contract.",
      },
      {
        question: "Is Pestly GDPR / data privacy compliant?",
        answer:
          "Yes. All data is processed and stored on German Netcup servers. The AI language models come from Mistral AI (France) and Azure AI (Frankfurt, Germany) — both GDPR-compliant. A Data Processing Agreement (DPA) is available on request. Call data is encrypted and never shared with third parties.",
      },
      {
        question: "Can I keep my existing phone number?",
        answer:
          "Yes. You can port your existing number to Pestly or get a new number from us. Setup typically takes 1–2 business days.",
      },
    ],
  },
  demo: {
    heading: "Try Pestly risk-free",
    subtitle: "In just 15 minutes we'll show you if Pestly can take calls off your pest control company's plate — live on the phone, no commitment.",
    phonePlaceholder: "Your phone number",
    emailPlaceholder: "Your email address",
    cta: "Book a free demo",
    dsgvo: "✓ GDPR compliant — your data is safe.",
    success: "✓ Thanks! We'll reach out shortly.",
  },
  founder: {
    heading: "The Founder",
    name: "Tom Berger",
    role: "Founder",
    success: "✓ Thanks! We'll be in touch shortly.",
    quote: "Pestly wasn't built for Silicon Valley — it was built for real pest control jobs. An AI that has your back while you work.",
    phonePlaceholder: "Your phone number",
    cta: "Get a call back",
    dsgvo: "✓ GDPR compliant — your data is safe and never shared with third parties.",
  },
  cookieBanner: {
    text: "Pestly uses cookies & local storage to improve your experience. No third-party sharing. GDPR compliant.",
    accept: "Got it",
  },
  setupService: {
    heading: "We handle the setup —",
    highlight: "no IT knowledge needed",
    subtitle: "No IT knowledge needed. We take care of everything — from phone number porting to AI training. You'll be live in just 5 days.",
    steps: [
      {
        icon: "phone",
        title: "Phone Number & Lines",
        desc: "Port your existing number or get a new one — including connection to our German Netcup network for crystal-clear calls.",
      },
      {
        icon: "database",
        title: "Knowledge Base Setup",
        desc: "You provide your prices, services, and hours — we enter everything. No technical expertise required.",
      },
      {
        icon: "calendar",
        title: "Calendar & Integrations",
        desc: "We connect Google Calendar, Outlook, or Cal.com. Appointments will be booked automatically from day one.",
      },
      {
        icon: "brain",
        title: "AI Training for Pest Control",
        desc: "We train Pestly on your terminology and workflows — so the AI performs perfectly from day one.",
      },
    ],
  },
  footer: {
    brandDesc:
      "AI phone assistant for pest control companies. Never miss another lead.",
    columns: {
      Services: [
        { label: "AI Voice Assistant", href: "/#features" },
        { label: "Appointment Booking", href: "/#features" },
        { label: "WhatsApp Integration", href: "/#features" },
        { label: "Knowledge Base", href: "/#features" },
      ],
      Company: [
        { label: "About Us", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Partner Program", href: "#" },
      ],
      Legal: [
        { label: "Legal Notice", href: "/impressum" },
        { label: "Privacy Policy", href: "/datenschutz" },
        { label: "Terms of Service", href: "/agb" },
        { label: "Cookie Settings", href: "/cookie-einstellungen" },
      ],
    },
    copyright: "All rights reserved.",
    socialIcons: [
      { name: "Twitter", href: "https://x.com/pestly" },
      { name: "LinkedIn", href: "https://linkedin.com/company/pestly" },
    ],
  },
  impressum: {
    title: "Legal Notice",
    subtitle: "Company Information & Disclosures",
    sections: [
      {
        icon: "building",
        title: "Company Information",
        contentLines: [
          "Pestly LLC",
          "1209 MOUNTAIN ROAD PL NE, STE R",
          "ALBUQUERQUE, NM 87110",
          "USA",
          "",
          "Registered in the State of New Mexico (USA)",
          "Registering Authority: New Mexico Secretary of State (SOS)",
        ],
      },
      {
        icon: "mail",
        title: "Contact",
        contentLines: ["info@pestly.de"],
      },
      {
        icon: "tax",
        title: "Business Information",
        contentLines: [
          "Pestly LLC is a US-based limited liability company. For US customers, applicable sales tax may be added at checkout. Tax-exempt organizations should provide valid exemption documentation.",
        ],
      },
      {
        icon: "scale",
        title: "Dispute Resolution",
        contentLines: [
          "We are committed to resolving any disputes amicably. For any concerns, please contact us directly at info@pestly.de.",
        ],
      },
      {
        icon: "file",
        title: "Disclaimer",
        contentLines: [
          "Content Liability: The contents of our pages have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.",
          "Link Liability: Our site contains links to external third-party websites over whose content we have no control. Therefore, we cannot assume any liability for these external contents.",
        ],
      },
    ],
    footerNote: "Last updated: January 2026. Subject to change. If you have any questions or concerns, please contact us at",
    footerEmail: "info@pestly.de",
  },

  /* ------------------------------------------------------------------------ */
  /*  Privacy Policy                                                          */
  /* ------------------------------------------------------------------------ */
  privacy: {
    title: "Privacy Policy",
    subtitle: "Information according to Art. 13, 14 GDPR",
    lastUpdated: "Last updated: June 2026",
    sections: [
      {
        icon: "building",
        title: "Controller",
        contentLines: [
          "Pestly LLC",
          "1209 MOUNTAIN ROAD PL NE, STE R",
          "ALBUQUERQUE, NM 87110",
          "USA",
          "",
          "Email: info@pestly.de",
        ],
      },
      {
        icon: "database",
        title: "What Data We Process",
        contentLines: [
          "Pestly processes the following personal data:",
          "• Contact information (name, phone number, email address)",
          "• Call data (recordings, transcriptions, voicemails)",
          "• Calendar and appointment data (availability, booked appointments)",
          "• Communication content from WhatsApp, SMS, and email",
          "• Payment data (processed via PCI-DSS compliant payment processors)",
          "• Website usage data (see Cookie Settings)",
        ],
      },
      {
        icon: "server",
        title: "Netcup Server Infrastructure",
        contentLines: [
          "All data is processed and stored on dedicated servers at netcup GmbH in Germany. Location: Nuremberg, Germany.",
          "The servers are subject to German data protection law and the GDPR. Access is protected by modern encryption (TLS 1.3) and firewall systems.",
          "A Data Processing Agreement (DPA) pursuant to Art. 28 GDPR has been concluded with netcup GmbH.",
        ],
      },
      {
        icon: "scale",
        title: "Legal Basis for Processing",
        contentLines: [
          "Processing is based on the following legal grounds:",
          "• Art. 6(1)(b) GDPR (contract performance) – for providing our services",
          "• Art. 6(1)(f) GDPR (legitimate interest) – for improving our offerings",
          "• Art. 6(1)(a) GDPR (consent) – for optional cookie categories",
          "• Art. 9(2)(h) GDPR – for processing special categories in healthcare",
        ],
      },
      {
        icon: "handshake",
        title: "AI Language Models and Data Processing",
        contentLines: [
          "Pestly uses AI language models from the following providers:",
          "• Mistral AI (France) – GDPR-compliant, DPA in place",
          "• Azure AI (Frankfurt, Germany) – GDPR-compliant, DPA in place",
          "No data is shared with third parties beyond the named data processors.",
        ],
      },
      {
        icon: "clock",
        title: "Data Retention and Deletion",
        contentLines: [
          "Call data is stored for the duration of the contractual relationship and deleted after termination, unless statutory retention obligations apply.",
          "Call recordings and transcriptions are automatically deleted after 90 days, unless required for contract fulfillment.",
          "Website usage data is stored according to your Cookie Settings preferences.",
        ],
      },
      {
        icon: "eye",
        title: "Your Rights",
        contentLines: [
          "You have the following rights under the GDPR:",
          "• Right of access (Art. 15 GDPR)",
          "• Right to rectification (Art. 16 GDPR)",
          "• Right to erasure (Art. 17 GDPR)",
          "• Right to restriction of processing (Art. 18 GDPR)",
          "• Right to data portability (Art. 20 GDPR)",
          "• Right to object (Art. 21 GDPR)",
          "",
          "To exercise your rights, please contact: info@pestly.de",
        ],
      },
      {
        icon: "refresh",
        title: "Changes to This Privacy Policy",
        contentLines: [
          "We reserve the right to update this privacy policy as needed to reflect changes in legal requirements or our services. The current version is always available on this page.",
        ],
      },
    ],
    footerNote: "Last updated: June 2026. If you have any questions about data protection, please contact",
    footerEmail: "info@pestly.de",
  },

  /* ------------------------------------------------------------------------ */
  /*  Terms of Service                                                        */
  /* ------------------------------------------------------------------------ */
  terms: {
    title: "Terms of Service",
    subtitle: "For the use of Pestly services",
    lastUpdated: "Last updated: June 2026",
    sections: [
      {
        icon: "scroll",
        title: "1. Scope",
        contentLines: [
          "These Terms of Service govern all contracts between Pestly LLC (hereinafter \"Pestly\") and the customer regarding the use of the Pestly AI phone assistant.",
          "Any conflicting terms of the customer shall not apply unless Pestly expressly agrees to them in writing.",
        ],
      },
      {
        icon: "handshake",
        title: "2. Subject of Service",
        contentLines: [
          "Pestly provides an AI-powered phone assistant that autonomously answers incoming calls, WhatsApp messages, SMS, and emails, books appointments in the customer's calendar, and escalates urgent cases.",
          "The exact scope of services is determined by the selected pricing tier (Standard or Premium) and individual configuration.",
        ],
      },
      {
        icon: "wallet",
        title: "3. Pricing and Payment",
        contentLines: [
          "A one-time setup fee of $500–$800 applies.",
          "The monthly fee depends on the selected pricing tier: $349 (Standard) or $529 (Premium), plus applicable sales tax.",
          "All prices are monthly charges payable in advance. Payment is by direct debit or credit card.",
          "Pestly reserves the right to suspend access to the service in case of payment default.",
        ],
      },
      {
        icon: "x-circle",
        title: "4. Termination",
        contentLines: [
          "The contract is for an indefinite term and may be terminated by either party with 30 days' notice to the end of the month.",
          "The right to terminate for cause remains unaffected.",
          "Upon termination, all customer data will be deleted within 30 days, unless statutory retention obligations apply.",
        ],
      },
      {
        icon: "scale",
        title: "5. Limitation of Liability",
        contentLines: [
          "Pestly shall be fully liable for damages resulting from injury to life, body, or health, as well as for intent and gross negligence.",
          "For ordinary negligence, Pestly shall only be liable for breach of essential contractual obligations (cardinal duties), limited to the typical, foreseeable damage.",
          "Liability for indirect damages, particularly lost profits, is excluded to the extent permitted by law.",
          "Pestly does not guarantee uninterrupted availability of the service. Liability for outages due to maintenance, technical disruptions, or force majeure is excluded.",
        ],
      },
      {
        icon: "shield",
        title: "6. Privacy",
        contentLines: [
          "The processing of personal data is carried out in accordance with the Privacy Policy and the provisions of the GDPR.",
          "Pestly processes all data on German Netcup servers. Data Processing Agreements (DPAs) have been concluded with all subcontractors.",
          "The customer undertakes to inform their own customers about data processing by Pestly insofar as this is required by data protection law.",
        ],
      },
      {
        icon: "globe",
        title: "7. Governing Law and Jurisdiction",
        contentLines: [
          "The laws of the Federal Republic of Germany shall apply, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).",
          "The place of jurisdiction for all disputes arising from this contract is, to the extent permitted by law, the registered office of Pestly in Albuquerque, New Mexico, USA.",
          "For consumers, the jurisdiction of their place of residence applies.",
        ],
      },
      {
        icon: "file",
        title: "8. Severability",
        contentLines: [
          "Should any provision of these Terms be or become invalid, the validity of the remaining provisions shall not be affected thereby. An invalid provision shall be replaced by a valid regulation that comes closest to the economic purpose of the invalid provision.",
        ],
      },
    ],
    footerNote: "Last updated: June 2026. If you have any questions about our Terms of Service, please contact",
    footerEmail: "info@pestly.de",
  },

  /* ------------------------------------------------------------------------ */
  /*  Cookie Settings                                                         */
  /* ------------------------------------------------------------------------ */
  cookieSettings: {
    title: "Cookie Settings",
    subtitle: "Manage your privacy preferences",
    intro: "Pestly uses cookies and local storage to ensure website functionality and improve your experience. You can set your preferences for different categories below. All data is processed GDPR-compliantly on German Netcup servers.",
    categories: [
      {
        id: "essential",
        title: "Essential (always active)",
        description: "These cookies are necessary for the website to function and cannot be disabled. They enable basic functions like navigation and access to protected areas.",
        alwaysOn: true,
      },
      {
        id: "analytics",
        title: "Analytics Cookies",
        description: "These cookies help us understand how visitors interact with our website by collecting anonymous data. This allows us to improve our offering.",
      },
      {
        id: "marketing",
        title: "Marketing Cookies",
        description: "These cookies are used to show relevant advertisements to visitors and measure campaign effectiveness.",
      },
    ],
    saveButton: "Save Settings",
    savedMessage: "✓ Your cookie preferences have been saved.",
    footerNote: "You can adjust your settings at any time on this page.",
  },
};

/* -------------------------------------------------------------------------- */
/*  Dictionary lookup                                                         */
/* -------------------------------------------------------------------------- */
const dictionaries: Record<Locale, Dictionary> = { de, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? de;
}
