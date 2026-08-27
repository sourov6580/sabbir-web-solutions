"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { analytics } from "@/content/site";

const PIXEL_ID = analytics?.facebookPixelId || "";

// কুকি পড়া (fbp / fbc — CAPI ম্যাচিং কোয়ালিটির জন্য জরুরি)
function getCookie(name) {
  if (typeof document === "undefined") return undefined;
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : undefined;
}

function newEventId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

// একই ইভেন্ট ব্রাউজার (Pixel) + সার্ভার (CAPI) দুই দিকে — একই event_id দিয়ে ডিডুপ
function sendEvent(eventName, customData) {
  const eventId = newEventId();
  const sourceUrl = window.location.href;

  if (window.fbq) {
    window.fbq("track", eventName, customData, { eventID: eventId });
  }

  try {
    const body = JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: sourceUrl,
      fbp: getCookie("_fbp"),
      fbc: getCookie("_fbc"),
      custom_data: customData,
    });
    // পেজ ছেড়ে যাওয়ার সময়েও যেন যায়
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/fb-event", new Blob([body], { type: "application/json" }));
    } else {
      fetch("/api/fb-event", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true });
    }
  } catch {}
}

function sendCustom(eventName, customData) {
  const eventId = newEventId();
  if (window.fbq) window.fbq("trackCustom", eventName, customData, { eventID: eventId });
  try {
    const body = JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: window.location.href,
      fbp: getCookie("_fbp"),
      fbc: getCookie("_fbc"),
      custom_data: customData,
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/fb-event", new Blob([body], { type: "application/json" }));
    } else {
      fetch("/api/fb-event", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true });
    }
  } catch {}
}

// কোন লিংক কোন ইভেন্ট
function matchLink(href) {
  if (!href) return null;
  if (href.includes("wa.me") || href.includes("api.whatsapp.com") || href.includes("web.whatsapp.com"))
    return { event: "WhatsAppClick", channel: "WhatsApp" };
  if (href.includes("m.me") || href.includes("messenger.com"))
    return { event: "MessengerClick", channel: "Messenger" };
  if (href.startsWith("tel:")) return { event: "CallClick", channel: "Phone" };
  return null;
}

export default function Pixel() {
  const pathname = usePathname();

  // রুট বদলালে PageView (ব্রাউজার + সার্ভার)
  useEffect(() => {
    if (!PIXEL_ID) return;
    if (typeof window === "undefined") return;
    // প্রথম লোডের PageView ইনলাইন স্ক্রিপ্টে হয়ে যায়, তাই এখানে শুধু সার্ভার-সাইড কপি
    sendEvent("PageView", { source_page: window.location.pathname });
  }, [pathname]);

  // পুরো সাইটের যেকোনো WhatsApp / Messenger / Call লিংক ক্লিক ট্র্যাক
  useEffect(() => {
    if (!PIXEL_ID) return;

    const onClick = (e) => {
      const a = e.target?.closest?.("a[href]");
      if (!a) return;
      const hit = matchLink(a.getAttribute("href"));
      if (!hit) return;
      if (!window.fbq) return;

      const label = (a.innerText || hit.channel).trim().slice(0, 60);
      const payload = {
        content_name: label,
        content_category: hit.channel,
        source_page: window.location.pathname,
      };

      // স্ট্যান্ডার্ড ইভেন্ট (Ads অপটিমাইজেশনের জন্য) + কাস্টম ইভেন্ট (আলাদা করে দেখার জন্য)
      sendEvent("Contact", payload);
      sendCustom(hit.event, payload);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!PIXEL_ID) return null;

  return (
    <>
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
