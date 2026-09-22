"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { pricing, contact } from "@/content/site";
import { Reveal, SectionHead, Icon } from "@/components/shared";
import { C } from "@/components/tokens";

function PlanCard({ p }) {
  const waHref = `https://wa.me/${contact.whatsappNumber}`;
  const m = /^(.+?)\s*\((.+)\)\s*$/.exec(p.name || "");
  const title = m ? m[1] : p.name;
  const sub = m ? m[2] : null;
  return (
    <div className="lift topbar topbar-light" style={{
      position: "relative",
      background: `linear-gradient(160deg, ${C.bgDark} 0%, ${C.bgDarkSoft} 100%)`,
      border: "1px solid rgba(255,255,255,.08)",
      borderRadius: 20, padding: 20, color: "#fff", overflow: "hidden",
      boxShadow: "0 30px 60px -35px rgba(15,23,42,.7)",
      display: "flex", flexDirection: "column", height: "100%",
    }}>
      <div aria-hidden style={{
        position: "absolute", top: -90, right: -90, width: 260, height: 260, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,77,203,.35), transparent 70%)", pointerEvents: "none",
      }} />

      <div className="display" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-.01em", lineHeight: 1.25, position: "relative" }}>
        {title}
        {p.oldPrice && (
          <span style={{ marginLeft: 8, fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,.5)", textDecoration: "line-through" }}>{p.oldPrice}</span>
        )}
        <span style={{ marginLeft: 6, fontSize: 26, fontWeight: 800, letterSpacing: "-.02em" }}>{p.price}</span>
        {sub && (
          <span style={{ display: "block", marginTop: 3, fontSize: 12.5, fontWeight: 500, color: "rgba(255,255,255,.7)", lineHeight: 1.35 }}>
            ({sub})
          </span>
        )}
      </div>

      {p.renew && (
        <div style={{ marginTop: 8, fontSize: 12.5, color: "rgba(255,255,255,.65)", lineHeight: 1.4, position: "relative" }}>{p.renew}</div>
      )}

      <div style={{ height: 1, background: "rgba(255,255,255,.1)", margin: "14px 0" }} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, position: "relative" }}>
        {p.feats.map((f) => (
          <div key={f} className="flex items-center gap-2.5" style={{ fontSize: 14.5, fontWeight: 500, color: "rgba(255,255,255,.88)", lineHeight: 1.35 }}>
            <span style={{ width: 20, height: 20, borderRadius: 6, background: "rgba(124,77,203,.3)", color: "#D9C7F7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Check size={13} />
            </span>
            {f}
          </div>
        ))}
      </div>

      <a href={waHref} target="_blank" rel="noopener noreferrer" className="btnx inline-flex items-center justify-center gap-2"
        style={{ width: "100%", marginTop: 16, padding: "10px", borderRadius: 999, fontWeight: 600, textDecoration: "none",
          color: "#fff", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", position: "relative" }}>
        WhatsApp এ মেসেজ করুন <ArrowRight size={16} />
      </a>
    </div>
  );
}

export default function PricingView({ active: initial = 0 }) {
  // initial আসে রুট থেকে: /pricing/web = 0, /pricing/video = 1
  const [active, setActive] = useState(initial);
  const group = pricing.groups[active];

  // বাটন ক্লিকে state বদলায় + ব্রাউজারের URL-ও বদলে যায় (শেয়ার করার জন্য)
  const pick = (i) => {
    setActive(i);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `/pricing/${pricing.toggles[i].key}`);
    }
  };

  return (
    <section style={{ background: C.light, minHeight: "70vh" }}>
      <div className="mx-auto px-6 pt-14 pb-20" style={{ maxWidth: 1200 }}>
        <Reveal><SectionHead eyebrow={pricing.eyebrow} title={pricing.title} sub={pricing.sub} /></Reveal>

        {/* Toggle buttons */}
        <div className="mt-10 flex justify-center" style={{ marginTop: 40 }}>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5"
            style={{ background: C.cardBg, border: `1px solid ${C.line}`, borderRadius: 999, boxShadow: "0 10px 24px -18px rgba(15,23,42,.4)" }}>
            {pricing.toggles.map((t, i) => (
              <a key={t.key} href={`/pricing/${t.key}`}
                onClick={(e) => { e.preventDefault(); pick(i); }}
                className="btnx inline-flex items-center gap-2 px-6 py-3"
                style={{ borderRadius: 999, fontWeight: 600, fontSize: 15, cursor: "pointer", border: "none", textDecoration: "none",
                  background: active === i ? C.purple : "transparent",
                  color: active === i ? "#fff" : C.navy,
                  boxShadow: active === i ? "0 12px 24px -12px rgba(91,42,157,.7)" : "none" }}>
                <Icon name={t.icon} size={17} /> {t.label}
              </a>
            ))}
          </div>
        </div>

        {/* Active group plans */}
        <div style={{ marginTop: 32 }}>
          <div className="flex items-center gap-4" style={{ marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.purple, letterSpacing: ".14em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{group.label}</span>
            <span style={{ flex: 1, height: 1, background: C.line }} />
          </div>
          <div className="grid gap-4 md:grid-cols-3" style={{ alignItems: "stretch" }}>
            {group.plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}><PlanCard p={p} /></Reveal>
            ))}
          </div>
        </div>

        {/* Reassurance */}
        <Reveal>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3" style={{ textAlign: "center" }}>
            {pricing.reassurance.map((t) => (
              <div key={t} className="flex items-center gap-2" style={{ fontSize: 14.5, fontWeight: 500, color: C.navy }}>
                <Check size={16} color={C.purple} /> {t}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 10, fontSize: 14, color: C.muted }}>
            {pricing.customNote} <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" style={{ color: C.purple, fontWeight: 600, textDecoration: "none" }}>{pricing.customLinkLabel}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
