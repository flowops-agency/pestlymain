import { NextRequest, NextResponse } from "next/server";

const WEBHOOKS = {
  "demo-de": "https://n8n.pestly.de/webhook/lead-de",
  "demo-us": "https://n8n.pestly.de/webhook/lead-us",
  founder: "https://n8n.pestly.de/webhook/lead-new",
} as const;

type Source = keyof typeof WEBHOOKS;

function resolveWebhook(source: string): string {
  if (source in WEBHOOKS) return WEBHOOKS[source as Source];
  if (source.includes("us") || source.includes("en")) return WEBHOOKS["demo-us"];
  if (source === "founder" || source.includes("callback")) return WEBHOOKS.founder;
  return WEBHOOKS["demo-de"];
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      name?: unknown;
      email?: unknown;
      phone?: unknown;
      message?: unknown;
      source?: unknown;
    };

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();
    const source = String(body.source ?? "demo-de").trim() || "demo-de";

    if (!email && !phone) {
      return NextResponse.json({ success: false, error: "validation" }, { status: 400 });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: "validation" }, { status: 400 });
    }

    const url = resolveWebhook(source);
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message, source }),
      // ponytail: hard timeout so form never hangs on n8n
      signal: AbortSignal.timeout(20_000),
    });

    const raw = await res.text().catch(() => "");
    let payload: { success?: boolean; lead_id?: number | string; crm?: string } | null =
      null;
    if (raw.trim()) {
      try {
        payload = JSON.parse(raw) as {
          success?: boolean;
          lead_id?: number | string;
          crm?: string;
        };
      } catch {
        payload = null;
      }
    }

    // n8n CRM failures often return HTTP 200 + empty body (responseNode never runs)
    if (!res.ok || !payload || payload.success !== true) {
      console.error("lead webhook failed", res.status, raw.slice(0, 300));
      return NextResponse.json({ success: false }, { status: 502 });
    }

    return NextResponse.json({
      success: true,
      lead_id: payload.lead_id ?? null,
      crm: payload.crm ?? "synced",
    });
  } catch (err) {
    console.error("lead api error", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
