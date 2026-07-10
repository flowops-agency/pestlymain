"use client";

import { m as motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/locale-context";
import { useDeviceAnimation } from "@/components/animation-wrappers";
import {
  FeatureCalendarCard,
  FeatureKnowledgeCard,
  FeatureMultichannelCard,
  FeatureVoiceCard,
} from "@/components/features-bento-cards";

export default function FeaturesBento() {
  const { dict, locale } = useTranslation();
  const t = dict.features;
  const { shouldAnimate } = useDeviceAnimation();
  const kbChrome =
    locale === "de"
      ? {
          title: "Wissen",
          synced: "sync",
          footer: "Frage → Antwort aus Ihren Regeln",
        }
      : {
          title: "Knowledge",
          synced: "synced",
          footer: "Q → A matched from your rules",
        };

  return (
    <section
      id="features"
      className="mx-auto w-full max-w-7xl px-4 py-16 md:my-20 md:px-8 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2
          className="text-balance font-bold"
          style={{ fontSize: "var(--text-heading)" }}
        >
          {t.headingBefore}{" "}
          <span className="text-[#FF7757]">{t.headingHighlight}</span>{" "}
          {t.headingAfter}
        </h2>
        <p className="mx-auto max-w-2xl text-gray-500">{t.subtitle}</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="mt-20 grid auto-rows-auto gap-4 lg:grid-cols-5"
      >
        <FeatureVoiceCard card={t.cards.voice} shouldAnimate={shouldAnimate} />
        <FeatureMultichannelCard
          card={t.cards.multichannel}
          shouldAnimate={shouldAnimate}
        />
        <FeatureKnowledgeCard card={t.cards.knowledge} chrome={kbChrome} />
        <FeatureCalendarCard card={t.cards.calendar} />
      </motion.div>
    </section>
  );
}
