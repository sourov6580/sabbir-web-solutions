"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "@/content/site";

/* =============================================================================
   OFFER POPUP — সব সেটিং এখানে
   • offer শেষ হলে (END_DATE পার হলে) পপআপ নিজে থেকেই আর দেখাবে না
   • একজন ভিজিটর এক সেশনে একবারই দেখবে (বন্ধ করলে আর আসবে না)
   • টেস্ট করতে: যেকোনো পেজে ?offer=1 যোগ করুন
============================================================================= */
const OFFER = {
  enabled: true,
  endDate: "2026-09-30T23:59:59+06:00", // অফার শেষের সময় (বাংলাদেশ সময়)
  delayMs: 1200,                        // পেজ লোডের কত পরে আসবে
  storageKey: "sws_offer_sept26_seen",
  badge: "সীমিত সময়ের অফার",
  discount: "স্পেশাল ডিসকাউন্ট",
  title: "ওয়েবসাইট / ল্যান্ডিং পেজে ডিসকাউন্ট",
  sub: "৩০ সেপ্টেম্বরের মধ্যে অর্ডার করলেই পাচ্ছেন ১০% ছাড়। সুযোগ সীমিত — আজই আপনার প্রজেক্ট শুরু করুন।",
  perks: ["প্রফেশনাল ও মোবাইল-ফ্রেন্ডলি ডিজাইন", "দ্রুত ডেলিভারি", "ডেলিভারির পর সাপোর্ট"],
  waMessage: "আসসালামু আলাইকুম, আমি ১০% ডিসকাউন্ট অফারে ওয়েবসাইট/ল্যান্ডিং পেজ অর্ডার করতে চাই।",
  samplesHref: "/web-samples",
  pricingHref: "/pricing/web",
};

const bn = (n) => String(n).padStart(2, "0").replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);

function useCountdown(end) {
  const calc = () => Math.max(0, new Date(end).getTime() - Date.now());
  const [left, setLeft] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setLeft(calc()), 1000);
    return () => clearInterval(t);
  }, [end]); // eslint-disable-line react-hooks/exhaustive-deps
  const s = Math.floor(left / 1000);
  return { left, d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), sec: s % 60 };
}

export default function OfferPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false); // animation state
  const cd = useCountdown(OFFER.endDate);

  const close = useCallback(() => {
    setShow(false);
    try { sessionStorage.setItem(OFFER.storageKey, "1"); } catch (e) {}
    setTimeout(() => setOpen(false), 250);
  }, []);

  // কখন দেখাবে
  useEffect(() => {
    if (!OFFER.enabled) return;
    if (Date.now() > new Date(OFFER.endDate).getTime()) return;
    const params = new URLSearchParams(window.location.search);
    const force = params.get("offer") === "1";
    if (!force) {
      if (params.get("plan")) return; // লিড ফর্ম লিংকে পপআপ দেখাবে না
      try { if (sessionStorage.getItem(OFFER.storageKey)) return; } catch (e) {}
    }
    const t = setTimeout(() => { setOpen(true); requestAnimationFrame(() => setShow(true)); }, OFFER.delayMs);
    return () => clearTimeout(t);
  }, []);

  // পেজ বদলালে বন্ধ
  useEffect(() => { if (open) close(); }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Esc + scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [open, close]);

  if (!open) return null;

  const waHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(OFFER.waMessage)}`;

  return (
    <div className={`swo-overlay ${show ? "is-in" : ""}`} onClick={close} role="presentation">
      <style>{css}</style>
      <div
        className="swo-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="swo-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="swo-close" onClick={close} aria-label="বন্ধ করুন">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>

        <div className="swo-top">
          <span className="swo-badge">🎁 {OFFER.badge}</span>
          <div className="swo-off">
            <span className="swo-num">{OFFER.discount}</span>
          </div>
        </div>

        <div className="swo-body">
          <h2 id="swo-title" className="swo-title">{OFFER.title}</h2>
          <p className="swo-sub">{OFFER.sub}</p>

          {cd.left > 0 && (
            <div className="swo-cd" aria-label="অফার শেষ হতে বাকি">
              <span className="swo-cdlabel">অফার শেষ হতে বাকি</span>
              <div className="swo-cdrow">
                {[[cd.d, "দিন"], [cd.h, "ঘণ্টা"], [cd.m, "মিনিট"], [cd.sec, "সেকেন্ড"]].map(([v, l]) => (
                  <div key={l} className="swo-cdcell"><b>{bn(v)}</b><small>{l}</small></div>
                ))}
              </div>
            </div>
          )}

          <div className="swo-row">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="swo-btn swo-ghost" onClick={close}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.43-9.43 2.52 0 4.89.98 6.67 2.77a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.44 9.42m8.02-17.44A11.26 11.26 0 0 0 12.05.75C5.8.75.7 5.84.7 12.1c0 2 .52 3.95 1.52 5.67L.6 23.25l5.61-1.47a11.3 11.3 0 0 0 5.83 1.49h.01c6.25 0 11.34-5.1 11.34-11.35 0-3.03-1.18-5.88-3.32-8.02" /></svg>
              অর্ডার করুন
            </a>
            <Link href={OFFER.samplesHref} className="swo-btn swo-ghost" onClick={close}>স্যাম্পল দেখুন</Link>
            <Link href={OFFER.pricingHref} className="swo-btn swo-ghost" onClick={close}>প্রাইসিং দেখুন</Link>
          </div>

          <p className="swo-note">অফারটি শুধুমাত্র ওয়েবসাইট ও ল্যান্ডিং পেজ অর্ডারের জন্য প্রযোজ্য</p>
        </div>
      </div>
    </div>
  );
}

const css = `
.swo-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;
  background:rgba(10,8,20,0);backdrop-filter:blur(0);-webkit-backdrop-filter:blur(0);transition:all .25s ease}
.swo-overlay.is-in{background:rgba(10,8,20,.62);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}
.swo-box{position:relative;width:100%;max-width:400px;max-height:calc(100vh - 32px);overflow-y:auto;border-radius:22px;
  background:var(--card-bg,#fff);color:var(--navy,#0F172A);border:1px solid var(--line,#E7E2F2);
  box-shadow:0 30px 80px -20px var(--shadow-purple,rgba(91,42,157,.6));
  opacity:0;transform:translateY(24px) scale(.96);transition:opacity .25s ease,transform .3s cubic-bezier(.2,.9,.3,1.2)}
.swo-overlay.is-in .swo-box{opacity:1;transform:none}
.swo-close{position:absolute;top:12px;right:12px;z-index:2;width:36px;height:36px;border-radius:50%;border:0;cursor:pointer;
  display:flex;align-items:center;justify-content:center;color:#fff;background:rgba(255,255,255,.18);transition:background .2s,transform .2s}
.swo-close:hover{background:rgba(255,255,255,.32);transform:rotate(90deg)}
.swo-close:focus-visible{outline:2px solid #fff;outline-offset:2px}
.swo-top{position:relative;overflow:hidden;padding:18px 20px 16px;text-align:center;color:#fff;
  background:linear-gradient(135deg,#3D1A6E 0%,#5B2A9D 55%,#7C4DCB 100%)}
.swo-top:before,.swo-top:after{content:"";position:absolute;border-radius:50%;background:rgba(255,255,255,.08)}
.swo-top:before{width:180px;height:180px;top:-80px;left:-60px}
.swo-top:after{width:140px;height:140px;bottom:-70px;right:-40px}
.swo-badge{position:relative;display:inline-block;font-size:13px;font-weight:600;padding:6px 14px;border-radius:999px;
  background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.25)}
.swo-off{position:relative;display:flex;align-items:baseline;justify-content:center;gap:8px;margin-top:10px;line-height:1}
.swo-num{font-size:34px;font-weight:700;letter-spacing:-1px;background:linear-gradient(180deg,#fff,#FFD98A);
  -webkit-background-clip:text;background-clip:text;color:transparent}
.swo-offtxt{font-size:22px;font-weight:700}
.swo-body{padding:18px 20px 18px}
.swo-title{margin:0 0 6px;font-size:19px;font-weight:700;line-height:1.35;text-align:center}
.swo-sub{margin:0 0 14px;font-size:14px;line-height:1.6;color:var(--muted,#64607A);text-align:center}
.swo-perks{list-style:none;margin:0 0 16px;padding:0;display:grid;gap:8px}
.swo-perks li{display:flex;align-items:center;gap:10px;font-size:14.5px;font-weight:500}
.swo-perks svg{flex:none;width:22px;height:22px;padding:4px;border-radius:50%;color:#fff;background:var(--purple,#5B2A9D)}
.swo-cd{margin:0 0 12px;padding:10px;border-radius:14px;background:var(--light,#F8F7FC);border:1px dashed var(--line,#E7E2F2);text-align:center}
.swo-cdlabel{display:block;font-size:12.5px;color:var(--muted,#64607A);margin-bottom:8px}
.swo-cdrow{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.swo-cdcell{padding:6px 0;border-radius:10px;background:var(--card-bg,#fff);border:1px solid var(--line,#E7E2F2)}
.swo-cdcell b{display:block;font-size:20px;color:var(--purple,#5B2A9D);line-height:1.2}
.swo-cdcell small{font-size:11.5px;color:var(--muted,#64607A)}
.swo-btn{display:flex;align-items:center;justify-content:center;gap:6px;width:100%;padding:10px 8px;border-radius:11px;
  font-size:14px;font-weight:600;text-decoration:none;transition:transform .15s,box-shadow .2s,background .2s,border-color .2s}
.swo-btn:active{transform:scale(.98)}
.swo-primary{color:#fff;background:linear-gradient(135deg,#1FAF5A,#25D366);box-shadow:0 10px 24px -10px rgba(37,211,102,.8)}
.swo-primary:hover{box-shadow:0 14px 30px -10px rgba(37,211,102,.95);transform:translateY(-1px)}
.swo-row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:4px}
.swo-ghost{color:var(--purple,#5B2A9D);background:transparent;border:1.5px solid var(--line,#E7E2F2)}
.swo-ghost svg{flex:none;width:17px;height:17px}
.swo-ghost:hover{border-color:var(--purple,#5B2A9D);background:var(--light,#F8F7FC)}
.swo-note{margin:12px 0 0;font-size:12px;color:var(--muted,#64607A);text-align:center}
@media (max-width:420px){.swo-num{font-size:28px}.swo-title{font-size:17px}.swo-body{padding:14px 14px 16px}.swo-btn{font-size:12.5px;padding:9px 5px}}
@media (prefers-reduced-motion:reduce){.swo-overlay,.swo-box{transition:none}}
`;
