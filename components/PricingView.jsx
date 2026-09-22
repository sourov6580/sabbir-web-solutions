"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { pricing, contact } from "@/content/site";
import { Reveal, SectionHead, Icon } from "@/components/shared";
import { C } from "@/components/tokens";

function PlanCard({ p, note }) {
  const waHref = `https://wa.me/${contact.whatsappNumber}`;
  const m = /^(.+?)\s*\((.+)\)\s*$/.exec(p.name || "");
  const title = m ? m[1] : p.name;
  const sub = m ? m[2] : null;
  return (
    <div className="lift" style={{
      background: C.purple,
      color: "#fff",
      border: `1px solid ${C.purple}`,
      borderRadius: 16, padding: 18, position: "relative",
      boxShadow: "0 20px 40px -24px rgba(91,42,157,.6)",
      display: "flex", flexDirection: "column", height: "100%",
    }}>
      <div className="display" style={{ fontSize: 21, fontWeight: 700, letterSpacing: "-.01em", lineHeight: 1.2 }}>
        {title}
        {sub && (
          <span style={{ display: "block", marginTop: 2, fontSize: 12.5, fontWeight: 500, opacity: .8, lineHeight: 1.35, maxWidth: "88%" }}>
            ({sub})
          </span>
        )}
      </div>
      <div style={{ marginTop: 8, fontSize: 12, opacity: .75, lineHeight: 1.4 }}>{note}</div>
      <div className="flex items-baseline gap-2" style={{ marginTop: 2, flexWrap: "wrap" }}>
        {p.oldPrice && (
          <span className="display" style={{ fontSize: 17, fontWeight: 600, opacity: .55, textDecoration: "line-through" }}>{p.oldPrice}</span>
        )}
        <span className="display" style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-.02em" }}>{p.price}</span>
      </div>
      {p.renew && (
        <div style={{ marginTop: 2, fontSize: 12.5, opacity: .78 }}>{p.renew}</div>
      )}
      <div style={{ flex: 1, marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
        {p.feats.map((f) => (
          <div key={f} className="flex items-center gap-2" style={{ fontSize: 13.5, lineHeight: 1.35 }}>
            <Check size={14} color="#fff" style={{ flexShrink: 0 }} />
            {f}
          </div>
        ))}
      </div>
      <a href={waHref} target="_blank" rel="noopener noreferrer" className="btnx inline-flex items-center justify-center gap-2"
        style={{ width: "100%", marginTop: 14, padding: "9px", borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: "none",
          background: "#fff", color: C.purple }}>
        শুরু করুন <ArrowRight size={15} />
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
              <Reveal key={p.name} delay={i * 0.08}><PlanCard p={p} note={group.priceNote} /></Reveal>
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
