import { NextResponse } from "next/server";
import { analytics } from "@/content/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PIXEL_ID = process.env.FB_PIXEL_ID || analytics?.facebookPixelId || "";
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN || "";
const TEST_CODE = process.env.FB_TEST_EVENT_CODE || ""; // শুধু Test Events-এ দেখার জন্য
const API_VERSION = "v21.0";

export async function POST(req) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return NextResponse.json({ ok: false, skipped: "missing_config" }, { status: 200 });
  }

  let body = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const h = req.headers;
  const ip =
    (h.get("x-forwarded-for") || "").split(",")[0].trim() ||
    h.get("x-real-ip") ||
    undefined;

  const event = {
    event_name: body.event_name || "Contact",
    event_time: Math.floor(Date.now() / 1000),
    event_id: body.event_id, // ব্রাউজার পিক্সেলের সাথে deduplication
    event_source_url: body.event_source_url || h.get("referer") || undefined,
    action_source: "website",
    user_data: {
      client_ip_address: ip,
      client_user_agent: h.get("user-agent") || undefined,
      fbp: body.fbp || undefined,
      fbc: body.fbc || undefined,
    },
    custom_data: body.custom_data || {},
  };

  const payload = { data: [event] };
  if (TEST_CODE) payload.test_event_code = TEST_CODE;

  try {
    const res = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const json = await res.json();
    return NextResponse.json({ ok: res.ok, fb: json }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "fetch_failed" }, { status: 200 });
  }
}
