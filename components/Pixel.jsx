"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { analytics } from "@/content/site";

const PIXEL_ID = analytics?.facebookPixelId || "";

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

  // রুট বদলালে PageView
  useEffect(() => {
    if (!PIXEL_ID) return;
    if (typeof window !== "undefined" && window.fbq) window.fbq("track", "PageView");
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
      window.fbq("track", "Contact", payload);
      window.fbq("trackCustom", hit.event, payload);
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
