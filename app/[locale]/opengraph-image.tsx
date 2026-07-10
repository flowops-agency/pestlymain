import { ImageResponse } from "next/og";
import { getDictionary, type Locale } from "@/lib/i18n/dictionaries";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pestly";

type Props = { params: Promise<{ locale: string }> };

export default async function OpenGraphImage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const line =
    locale === "de"
      ? "KI-Telefonassistent für Schädlingsbekämpfung"
      : "AI phone assistant for pest control";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(160deg, #ffffff 0%, #FFF4EF 55%, #F78743 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 28,
          }}
        >
          {/* Image 8 mark: P + phone (approx paths for OG raster) */}
          <svg width="64" height="70" viewBox="0 0 120 130" fill="none">
            <path
              stroke="#111111"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 28 108 C 28 108 22 100 28 92 L 28 32 C 28 22 36 16 46 16 L 72 16 C 96 16 108 34 108 52 C 108 68 98 82 78 86"
            />
            <path
              stroke="#111111"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 48 40 L 66 40 C 78 40 84 48 84 56 C 84 64 78 72 66 72 L 48 72 Z"
            />
            <path
              stroke="#111111"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 28 92 C 34 100 42 104 48 100"
            />
            <path
              stroke="#111111"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 92 58 C 108 62 118 78 112 94 C 108 104 96 110 86 104 C 78 100 74 90 78 82"
            />
            <circle cx="108" cy="58" r="9" fill="#111111" />
            <circle cx="86" cy="100" r="9" fill="#111111" />
            <path stroke="#111111" strokeWidth="6" strokeLinecap="round" d="M 96 68 L 102 74" />
            <path stroke="#111111" strokeWidth="6" strokeLinecap="round" d="M 88 82 L 94 88" />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 700,
              color: "#111111",
              letterSpacing: "-0.04em",
            }}
          >
            Pestly
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            color: "#111111",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {line}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#3D3D3D",
            maxWidth: 900,
          }}
        >
          {dict.seo.description.slice(0, 120)}
          {dict.seo.description.length > 120 ? "…" : ""}
        </div>
      </div>
    ),
    { ...size }
  );
}
