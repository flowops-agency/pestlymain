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
  tagline: string;
  bullets: string[];
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
  namePlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  cta: string;
  dsgvo: string;
  success: string;
  error: string;
  validation: string;
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
  error: string;
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
/*  SEO                                                                       */
/* -------------------------------------------------------------------------- */
export interface SeoDict {
  title: string;
  description: string;
  ogImageAlt: string;
  impressumDescription: string;
  privacyDescription: string;
  termsDescription: string;
  cookieSettingsDescription: string;
}

/* -------------------------------------------------------------------------- */
/*  Root Dictionary                                                           */
/* -------------------------------------------------------------------------- */
export interface Dictionary {
  common: CommonDict;
  seo: SeoDict;
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
    localeSwitcher: { de: "DE", en: "EN" },
    skipLink: "Zum Hauptinhalt springen",
  },
  seo: {
    title: "KI-Telefonassistent Schädlingsbekämpfung | Pestly",
    description:
      "Pestly nimmt Anrufe für Schädlingsbekämpfer an und bucht in Ihren Kalender oder gibt Notfälle an Sie. Demo 15 Minuten, unverbindlich.",
    ogImageAlt: "Pestly — KI-Telefonassistent für Schädlingsbekämpfung",
    impressumDescription:
      "Impressum und Anbieterkennzeichnung der Pestly LLC gemäß § 5 DDG.",
    privacyDescription:
      "Datenschutzerklärung von Pestly: Informationen zur Verarbeitung personenbezogener Daten nach DSGVO.",
    termsDescription:
      "Allgemeine Geschäftsbedingungen (AGB) für die Nutzung von Pestly.",
    cookieSettingsDescription:
      "Cookie-Einstellungen verwalten und Datenschutzpräferenzen für pestly.de festlegen.",
  },
  navbar: {
    logo: "Pestly",
    navLinks: [
      { href: "/#home", label: "Start" },
      { href: "/leistungen", label: "Leistungen" },
      { href: "/#features", label: "Funktionen" },
      { href: "/ki-telefonassistent", label: "Wissen" },
      { href: "/#faq", label: "FAQ" },
    ],
    cta: "Kostenlos testen",
    menuLabel: "Menü öffnen",
  },
  hero: {
    line1Before: "Während Sie im Einsatz sind,",
    line1Highlight: "nimmt Pestly den Anruf an.",
    line2Before: "",
    line2Highlight: "",
    line2After: "",
    tagline: "Anrufe auf Deutsch: Befall, Angebot oder Notdienst. Termin in Ihren Kalender — oder die Lage an Sie, wenn es nicht warten kann. Go-Live in etwa fünf Werktagen: Telefon und ein Kalender.",
    bullets: [],
    cta: "15 Minuten Demo, unverbindlich",
    callerName: "Anrufer",
    callerMsg: "Guten Tag, wir haben Wespen am Dach — können Sie heute noch vorbeikommen?",
    aiName: "Pestly (KI)",
    aiResponse:
      "Guten Tag, ich prüfe die Verfügbarkeit in Ihrem Kalender.",
    bookingTitle: "Terminvorschlag",
    bookingTime1: "Morgen, 14:00 - 16:00",
    bookingTime2: "oder Do, 09:00 - 12:00",
    bookingTag: "Notdienst",
    summaryLine1: "Kalender prüfen",
    summaryLine2: "Mündliche Bestätigung im Gespräch",
    currentCall: "Aktueller Anruf",
    statusConnected: "Verbunden",
  },
  socialProof: {
    heading: "",
    logos: [],
  },
  stats: {
    headingBefore: "Das Problem ist",
    headingHighlight: "real",
    subtitle:
      "Während Sie im Außeneinsatz Schädlinge bekämpfen, klingelt das Telefon in Ihrer Zentrale — und Aufträge bleiben unbeantwortet. Pestly nimmt den Anruf an, versteht Befall, Angebot oder Notdienst und bucht in Ihren Kalender — oder gibt den Notfall an Sie weiter.",
    stats: [],
  },
  features: {
    headingBefore: "Ihr",
    headingHighlight: "KI-Assistent",
    headingAfter: "für Schädlingsbekämpfer",
    subtitle:
      "Pestly übernimmt die Kommunikation für Ihr Schädlingsbekämpfungsunternehmen — von der Rufannahme bis zur Terminbuchung.",
    cards: {
      voice: {
        status: "Live — Deutsch",
        title: "KI-Sprachassistent — Deutsch",
        desc: "Natürliche Gespräche auf Deutsch, inkl. Fachbegriffen der Schädlingsbekämpfung. Kein „Drücken Sie die 1“.",
      },
      multichannel: {
        title: "Telefon und ein Kalender",
        desc: "Am Go-Live (öffentlich): Telefon und ein Kalender. WhatsApp, E-Mail, Widget oder Owner-SMS nur, sobald der Kanal für Ihren Betrieb wirklich an ist — nicht als Tag-5-Versprechen.",
        channels: ["Anruf", "Kalender"],
      },
      knowledge: {
        title: "Intelligente Wissensdatenbank",
        desc: "Preise, Gebiete, Schädlingsarten und Regeln einmal pflegen — Pestly antwortet konsistent und bucht passende Termine.",
        labels: ["Öffnungszeiten", "Preise", "Einsatzgebiet", "Notfälle", "Team", "Schädlingsarten"],
      },
      calendar: {
        title: "Ein Kalender",
        desc: "Ein Kalender, in dem Ihre echten Termine liegen. Mündliche Bestätigung im Gespräch.",
        months: {
          label: "Juni 2026",
          days: ["MO", "DI", "MI", "DO", "FR", "SA", "SO"],
        },
        integrations: [
          { name: "Ihr Kalender", status: "ein Spoke" },
        ],
      },
    },
  },
  aiIntegration: {
    headingBefore: "So",
    headingHighlight: "funktioniert’s",
    subtitle:
      "Pestly nimmt den Anruf auf Deutsch an — ohne Warteschleifen-Menü als Standard. Am Go-Live (öffentlich): Telefon und ein Kalender. WhatsApp, E-Mail, Widget oder Owner-SMS nur, sobald der Kanal für Ihren Betrieb wirklich an ist — nicht als Tag-5-Versprechen.",
    cards: {
      voice: {
        title: "Annehmen, verstehen, buchen",
        desc: "Annehmen — Anruf auf Deutsch. Verstehen — Befall, Angebot, Notdienst oder Rückruf aus Ihrer Wissensdatenbank. Buchen — ein Kalender; mündliche Bestätigung im Gespräch.",
        steps: ["Annehmen — Anruf auf Deutsch", "Verstehen — Befall, Angebot, Notdienst", "Buchen — ein Kalender", "Eskalieren — Lage an Sie"],
      },
      knowledge: {
        title: "Wissensdatenbank",
        desc: "Sie liefern Preise, Leistungen und Zeiten — wir pflegen die Wissensdatenbank.",
        placeholder: "Frage an Pestly...",
        qa: [
          { q: "Befall, Angebot oder Notdienst?", a: "Pestly ordnet nach Ihren Regeln." },
          { q: "Wann ist ein Termin möglich?", a: "Nur in dem einen Kalender, den Sie anbinden." },
          { q: "Was, wenn es nicht warten kann?", a: "Die Lage geht an Sie. Sie entscheiden." },
        ],
      },
      escalation: {
        title: "Eskalieren",
        desc: "Wenn es nicht warten kann: Pestly ordnet nach Ihren Regeln und gibt die Lage an Sie. Sie entscheiden. Standard ist kein stilles Durchstellen aufs Handy. Eine automatische Notdienst-SMS versprechen wir nicht, solange dieser Weg nicht live ist.",
        mode: "Notdienst",
        urgentLabel: "An Sie",
        items: [],
        notification: "Lage an Sie",
        notificationDetail: "Keine automatische Notdienst-SMS, solange dieser Weg nicht live ist.",
      },
    },
  },
  testimonials: {
    headingBefore: "",
    headingHighlight: "",
    cta: "15 Minuten Demo, unverbindlich",
    items: [],
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
          "Website-Widget (Einbettung für Ihre Website)",
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
          "Ja. Fachbegriffe wie Befall, Angebot und Notdienst kommen aus Ihrer Wissensdatenbank. Datenschutz und AVV klären wir vor dem Go-Live.",
      },
      {
        question: "Was passiert bei Notfällen oder komplexen Anfragen?",
        answer:
          "Wenn es nicht warten kann, gibt Pestly die Lage an Sie. Sie entscheiden. Standard ist kein stilles Durchstellen. Eine automatische Notdienst-SMS versprechen wir nicht, solange dieser Weg nicht live ist.",
      },
      {
        question: "Welche Kosten kommen auf mich zu?",
        answer:
          "Das kommt auf die Komplexität Ihres Betriebs an — ob Einzelunternehmen oder größerer Betrieb, wie viele Standorte und Kanäle angebunden werden sollen. In einem kurzen, unverbindlichen Gespräch erstellen wir Ihnen ein maßgeschneidertes Angebot. Keine Mindestvertragslaufzeit.",
      },
      {
        question: "Wie geht Pestly mit Datenschutz um?",
        answer:
          "Datenschutz und AVV klären wir vor dem Go-Live. Empfänger stehen in der Datenschutzerklärung — nur die, die für Ihren Betrieb an sind.",
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
    namePlaceholder: "Ihr Name",
    phonePlaceholder: "Ihre Telefonnummer",
    emailPlaceholder: "Ihre E-Mail-Adresse",
    messagePlaceholder: "Ihre Nachricht (z. B. welches Problem?)",
    cta: "Kostenlose Demo buchen",
    dsgvo: "Preis nennen wir im Gespräch. Datenschutz und AVV klären wir vor dem Go-Live.",
    success: "✓ Danke! Wir melden uns in Kürze bei Ihnen.",
    error: "Senden fehlgeschlagen. Bitte später erneut versuchen oder anrufen.",
    validation: "Bitte E-Mail oder Telefonnummer angeben.",
  },
  founder: {
    heading: "Der Mensch hinter Pestly",
    name: "Tom Berger",
    role: "Gründer",
    success: "✓ Danke! Wir melden uns in Kürze.",
    error: "Senden fehlgeschlagen. Bitte später erneut versuchen.",
    quote: "Pestly ist nicht fürs Silicon Valley gemacht, sondern für den echten Schädlingsbekämpfungs-Alltag. Eine KI, die Ihnen den Rücken freihält, während Sie im Einsatz sind.",
    phonePlaceholder: "Ihre Telefonnummer",
    cta: "Jetzt anrufen lassen",
    dsgvo: "Preis nennen wir im Gespräch. Datenschutz und AVV klären wir vor dem Go-Live.",
  },
  cookieBanner: {
    text: "Pestly nutzt Cookies und lokale Speicherung, um die Seite zu betreiben. Details in der Datenschutzerklärung.",
    accept: "Verstanden",
  },
  setupService: {
    heading: "Einrichtung ohne IT-Projekt",
    highlight: "auf Ihrer Seite",
    subtitle: "Sie liefern Wissen und Freigaben (rund 1–1,5 Stunden plus AVV und Kalender). Wir richten Telefon und einen Kalender in etwa fünf Werktagen ein. Mitnahme der Nummer läuft parallel, falls sie länger dauert.",
    steps: [
      {
        icon: "phone",
        title: "Rufnummer & Leitungen",
        desc: "Neue Nummer oder bereits erreichbare Leitung. Portierung ist kein Tag-5-Versprechen.",
      },
      {
        icon: "database",
        title: "Wissensdatenbank",
        desc: "Sie liefern Preise, Leistungen und Zeiten — wir pflegen die Wissensdatenbank.",
      },
      {
        icon: "calendar",
        title: "Kalender & Integrationen",
        desc: "Ein Kalender, in dem Ihre echten Termine liegen. Mündliche Bestätigung im Gespräch.",
      },
      {
        icon: "brain",
        title: "KI-Training auf Schädlingsbekämpfung",
        desc: "Wir richten Pestly auf Ihre Fachbegriffe und Abläufe ein — Befall, Angebot, Notdienst.",
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
        { label: "Kalender", href: "/#features" },
        { label: "Wissensdatenbank", href: "/#features" },
        { label: "Website-Widget", href: "/#features" },
      ],
      Wissen: [
        { label: "Leistungen", href: "/leistungen" },
        {
          label: "KI-Telefonassistent erklärt",
          href: "/ki-telefonassistent",
        },
        {
          label: "Vs. Anrufbeantworter",
          href: "/vs/anrufbeantworter",
        },
        {
          label: "DSGVO & KI-Telefonie",
          href: "/dsgvo-ki-telefonie",
        },
        { label: "Demo buchen", href: "/#demo" },
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
        title: "Anwendungsserver",
        contentLines: [
          "Die Anwendung liegt auf einem von uns betriebenen Server (IPv4 148.230.70.221).",
          "Die Server unterliegen deutschem Datenschutzrecht und der DSGVO. Der Zugriff ist durch moderne Verschlüsselungsverfahren (TLS 1.3) und Firewall-Systeme geschützt.",
          "Ein Hosting-DPA mit einem benannten Anbieter liegt nicht als unterzeichnetes Dokument in dieser Erklärung.",
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
        ],
      },
      {
        icon: "handshake",
        title: "KI-Sprachmodelle und Auftragsverarbeitung",
        contentLines: [
          "Pestly nutzt KI-Sprachmodelle folgender Anbieter:",
          "• Mistral AI (Frankreich) – in der bestehenden Erklärung genannt; AVV nicht in dieser Datei belegt",
          "• Azure AI (Frankfurt) – in der bestehenden Erklärung genannt; Region und AVV nicht in dieser Datei belegt",
          "Empfänger nur, wenn der jeweilige Verarbeitungsweg für den Betrieb aktiviert ist.",
        ],
      },
      {
        icon: "clock",
        title: "Speicherdauer und Löschung",
        contentLines: [
          "Gesprächsdaten werden für die Dauer des Vertragsverhältnisses gespeichert und nach Vertragsende gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.",
          "Anrufaufzeichnungen werden nicht gespeichert, solange die Aufnahme aus ist. Ein automatischer Löschjob für Aufnahmen ist nicht belegt.",
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
          "Die Anwendung liegt auf einem von uns betriebenen Server. Empfänger nur, soweit sie für den Zweck wirklich angebunden sind.",
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
    intro: "Pestly verwendet Cookies und lokale Speicherung, um die Funktionalität der Website zu gewährleisten und Ihr Erlebnis zu verbessern. Sie können hier Ihre Präferenzen für verschiedene Kategorien festlegen. Details stehen in der Datenschutzerklärung.",
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
  seo: {
    title: "AI Phone Assistant for Pest Control | Pestly",
    description:
      "Pestly answers calls for German pest-control companies and books a job in your calendar or hands emergencies to you. 15-minute demo.",
    ogImageAlt: "Pestly — AI phone assistant for pest control",
    impressumDescription:
      "Legal notice and company information for Pestly LLC.",
    privacyDescription:
      "Pestly privacy policy: how we process personal data and protect your privacy.",
    termsDescription: "Terms of service for using Pestly.",
    cookieSettingsDescription:
      "Manage cookie preferences and privacy settings for pestly.de.",
  },
  navbar: {
    logo: "Pestly",
    navLinks: [
      { href: "/#home", label: "Home" },
      { href: "/leistungen", label: "Services" },
      { href: "/#features", label: "Features" },
      { href: "/ki-telefonassistent", label: "Guides" },
      { href: "/#faq", label: "FAQ" },
    ],
    cta: "Test for free",
    menuLabel: "Open menu",
  },
  hero: {
    line1Before: "While you are on site,",
    line1Highlight: "Pestly answers the call.",
    line2Before: "",
    line2Highlight: "",
    line2After: "",
    tagline: "Calls in German: infestation, quote or emergency. A booking in your calendar — or the details to you when it cannot wait. Typical go-live in about five working days: phone and one calendar.",
    bullets: [],
    cta: "15-minute demo, no obligation",
    callerName: "Caller",
    callerMsg: "Hello, we have wasps on the roof — can you come today?",
    aiName: "Pestly (AI)",
    aiResponse:
      "Hello, I will check availability in your calendar.",
    bookingTitle: "Suggested Appointment",
    bookingTime1: "Tomorrow, 2:00 PM - 4:00 PM",
    bookingTime2: "or Thu, 9:00 AM - 12:00 PM",
    bookingTag: "Emergency",
    summaryLine1: "Check calendar",
    summaryLine2: "Spoken confirmation on the call",
    currentCall: "Current Call",
    statusConnected: "Connected",
  },
  socialProof: {
    heading: "",
    logos: [],
  },
  stats: {
    headingBefore: "The problem is",
    headingHighlight: "real",
    subtitle:
      "While you are on a job, the phone in the office still rings — and the enquiry goes unanswered. Pestly answers the call, understands infestation, quote request or emergency, and books into your calendar — or hands the emergency to you.",
    stats: [],
  },
  features: {
    headingBefore: "Your",
    headingHighlight: "AI Assistant",
    headingAfter: "for Pest Control",
    subtitle:
      "Pestly handles all communication for your pest control business — from answering calls to booking appointments.",
    cards: {
      voice: {
        status: "Live — German",
        title: "AI voice agent — German",
        desc: "Natural conversations in German, including pest-control terminology. No “press 1” menu as the default.",
      },
      multichannel: {
        title: "Phone and one calendar",
        desc: "At go-live (public): phone and one calendar. WhatsApp, email, widget or owner SMS only once that channel is actually on for the company — not a day-5 promise.",
        channels: ["Phone", "Calendar"],
      },
      knowledge: {
        title: "Smart knowledge base",
        desc: "Set prices, areas, pest types, and rules once — Pestly answers consistently and books the right jobs.",
        labels: ["Hours", "Pricing", "Service Area", "Emergencies", "Team", "Pest Types"],
      },
      calendar: {
        title: "One calendar",
        desc: "One calendar that already holds your real jobs. Spoken confirmation on the call.",
        months: {
          label: "June 2026",
          days: ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
        },
        integrations: [
          { name: "Your calendar", status: "one spoke" },
        ],
      },
    },
  },
  aiIntegration: {
    headingBefore: "How it",
    headingHighlight: "works",
    subtitle:
      "Pestly answers the call in German — no hold-menu as the default. At go-live (public): phone and one calendar. WhatsApp, email, widget or owner SMS only once that channel is actually on for the company — not a day-5 promise.",
    cards: {
      voice: {
        title: "Answer, understand, book",
        desc: "Answer in German. Understand infestation, quote or emergency from your knowledge base. Book one calendar; spoken confirmation on the call.",
        steps: ["Answer — call in German", "Understand — infestation, quote, emergency", "Book — one calendar", "Escalate — details to you"],
      },
      knowledge: {
        title: "Knowledge base",
        desc: "You provide prices, services and hours — we maintain the knowledge base.",
        placeholder: "Ask Pestly...",
        qa: [
          { q: "Infestation, quote or emergency?", a: "Pestly follows your rules." },
          { q: "When is a slot available?", a: "Only in the one calendar you connect." },
          { q: "When it cannot wait?", a: "The details go to you. You decide." },
        ],
      },
      escalation: {
        title: "Escalate",
        desc: "When it cannot wait: Pestly treats it as emergency under your rules and hands the details to you. You decide. Silent live transfer is not the default. We do not promise an automatic emergency SMS while that path is not live.",
        mode: "Emergency",
        urgentLabel: "To you",
        items: [],
        notification: "Details to you",
        notificationDetail: "No automatic emergency SMS while that path is not live.",
      },
    },
  },
  testimonials: {
    headingBefore: "",
    headingHighlight: "",
    cta: "15-minute demo, no obligation",
    items: [],
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
          "Website Widget (embed code for your site)",
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
          "Yes. Infestation, quote and emergency terms come from your knowledge base. Data processing agreement before go-live. Pestly is built for German pest-control companies.",
      },
      {
        question: "What happens with emergencies or complex requests?",
        answer:
          "When it cannot wait, Pestly hands the details to you. You decide. Silent live transfer is not the default. We do not promise an automatic emergency SMS while that path is not live.",
      },
      {
        question: "What are the costs?",
        answer:
          "It depends on your business complexity — solo operator or larger team, how many locations and channels need to be connected. In a brief, no-obligation call we'll create a tailored quote. No minimum contract.",
      },
      {
        question: "Is my data private and secure?",
        answer:
          "We name the price on the call. Data processing agreement before go-live. Recipients are only those actually connected for that company.",
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
    namePlaceholder: "Your name",
    phonePlaceholder: "Your phone number",
    emailPlaceholder: "Your email address",
    messagePlaceholder: "Your message (e.g., what pest problem?)",
    cta: "Book a free demo",
    dsgvo: "We name the price on the call. Data processing agreement before go-live.",
    success: "✓ Thanks! We'll reach out shortly.",
    error: "Could not send. Please try again later or call us.",
    validation: "Please provide an email or phone number.",
  },
  founder: {
    heading: "The Founder",
    name: "Tom Berger",
    role: "Founder",
    success: "✓ Thanks! We'll be in touch shortly.",
    error: "Could not send. Please try again later.",
    quote: "Pestly wasn't built for Silicon Valley — it was built for real pest control jobs. An AI that has your back while you work.",
    phonePlaceholder: "Your phone number",
    cta: "Get a call back",
    dsgvo: "We name the price on the call. Data processing agreement before go-live.",
  },
  cookieBanner: {
    text: "Pestly uses cookies and local storage to run this site. Details in the privacy notice.",
    accept: "Got it",
  },
  setupService: {
    heading: "Setup without an IT project",
    highlight: "on your side",
    subtitle: "You provide knowledge and approvals (about 1–1.5 hours plus a data processing agreement and calendar access). We set up phone and one calendar in about five working days. Number porting runs in parallel if it takes longer.",
    steps: [
      {
        icon: "phone",
        title: "Phone Number & Lines",
        desc: "A new number or a line that already rings. Porting is not a day-5 promise.",
      },
      {
        icon: "database",
        title: "Knowledge Base Setup",
        desc: "You provide prices, services and hours — we maintain the knowledge base.",
      },
      {
        icon: "calendar",
        title: "Calendar & Integrations",
        desc: "One calendar that already holds your real jobs. Spoken confirmation on the call.",
      },
      {
        icon: "brain",
        title: "AI Training for Pest Control",
        desc: "We set Pestly up on your terminology and workflows — infestation, quote, emergency.",
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
        { label: "Calendar", href: "/#features" },
        { label: "Knowledge Base", href: "/#features" },
        { label: "Website Widget", href: "/#features" },
      ],
      Resources: [
        { label: "Services", href: "/leistungen" },
        {
          label: "AI phone assistant explained",
          href: "/ki-telefonassistent",
        },
        { label: "Vs voicemail", href: "/vs/anrufbeantworter" },
        { label: "Privacy & AI telephony", href: "/dsgvo-ki-telefonie" },
        { label: "Book a demo", href: "/#demo" },
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
        title: "Application server",
        contentLines: [
          "The application runs on a server we operate (IPv4 148.230.70.221).",
          "The servers are subject to German data protection law and the GDPR. Access is protected by modern encryption (TLS 1.3) and firewall systems.",
          "A hosting DPA with a named provider is not on file as a signed document in this notice.",
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
        ],
      },
      {
        icon: "handshake",
        title: "AI Language Models and Data Processing",
        contentLines: [
          "Pestly uses AI language models from the following providers:",
          "• Mistral AI (France) – named in the existing notice; AVV not evidenced in this file",
          "• Azure AI (Frankfurt, Germany) – named in the existing notice; region and AVV not evidenced in this file",
          "Recipients only if that processing path is activated for the tenant.",
        ],
      },
      {
        icon: "clock",
        title: "Data Retention and Deletion",
        contentLines: [
          "Call data is stored for the duration of the contractual relationship and deleted after termination, unless statutory retention obligations apply.",
          "Call recording files are not stored while recording is off. No automatic deletion job for recordings is evidenced.",
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
          "The application runs on a server we operate. Recipients only where actually connected for that purpose.",
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
    intro: "Pestly uses cookies and local storage to ensure website functionality and improve your experience. You can set your preferences for different categories below. All data is encrypted and stored securely.",
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
