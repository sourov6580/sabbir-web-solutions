"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { pricing, contact } from "@/content/site";
import { Reveal, SectionHead, Icon } from "@/components/shared";
import { C } from "@/components/tokens";

function PlanCard({ p, note }) {
  const waHref = `https://wa.me/${contact.whatsappNumber}`;
  return (
    <div className="lift" style={{
      background: p.featured ? C.purple : "#fff",
      color: p.featured ? "#fff" : C.navy,
      border: `1px solid ${p.featured ? C.purple : C.line}`,
      borderRadius: 20, padding: 28, position: "relative",
      boxShadow: p.featured ? "0 26px 50px -24px rgba(91,42,157,.6)" : "none",
    }}>
      {p.featured && (
        <span style={{ position: "absolute", top: 18, right: 18, fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", background: "rgba(255,255,255,.18)", padding: "4px 10px", borderRadius: 999 }}>জনপ্রিয়</span>
      )}
      <div className="display" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-.01em", opacity: p.featured ? .95 : 1 }}>{p.name}</div>
      <div style={{ marginTop: 12, fontSize: 12.5, opacity: .7, lineHeight: 1.5 }}>{note}</div>
      <div className="display" style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-.02em" }}>{p.price}</div>
      <div className="mt-6 space-y-3">
        {p.feats.map((f) => (
          <div key={f} className="flex items-center gap-3" style={{ fontSize: 14.5 }}>
            <Check size={16} color={p.featured ? "#fff" : C.purple} style={{ flexShrink: 0 }} />
            {f}
          </div>
        ))}
      </div>
      <a href={waHref} target="_blank" rel="noopener noreferrer" className="btnx mt-7 inline-flex items-center justify-center gap-2"
        style={{ width: "100%", padding: "12px", borderRadius: 11, fontWeight: 600, textDecoration: "none",
          background: p.featured ? "#fff" : C.purple, color: p.featured ? C.purple : "#fff" }}>
        শুরু করুন <ArrowRight size={16} />
      </a>
    </div>
  );
}

export default function PricingView({ active = 0 }) {
  // active: 0 = ওয়েবসাইট (/pricing/web), 1 = ভিডিও (/pricing/video)
  const group = pricing.groups[active];

  return (
    <section style={{ background: C.light, minHeight: "70vh" }}>
      <div className="mx-auto px-6 pt-14 pb-20" style={{ maxWidth: 1200 }}>
        <Reveal><SectionHead eyebrow={pricing.eyebrow} title={pricing.title} sub={pricing.sub} /></Reveal>

        {/* Toggle buttons */}
        <div className="mt-10 flex justify-center" style={{ marginTop: 40 }}>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5"
            style={{ background: "#fff", border: `1px solid ${C.line}`, borderRadius: 999, boxShadow: "0 10px 24px -18px rgba(15,23,42,.4)" }}>
            {pricing.toggles.map((t, i) => (
              <Link key={t.key} href={`/pricing/${t.key}`} scroll={false} className="btnx inline-flex items-center gap-2 px-6 py-3"
                style={{ borderRadius: 999, fontWeight: 600, fontSize: 15, cursor: "pointer", border: "none", textDecoration: "none",
                  background: active === i ? C.purple : "transparent",
                  color: active === i ? "#fff" : C.navy,
                  boxShadow: active === i ? "0 12px 24px -12px rgba(91,42,157,.7)" : "none" }}>
                <Icon name={t.icon} size={17} /> {t.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Active group plans */}
        <div style={{ marginTop: 44 }}>
          <div className="flex items-center gap-4" style={{ marginBottom: 22 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.purple, letterSpacing: ".14em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{group.label}</span>
            <span style={{ flex: 1, height: 1, background: C.line }} />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
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
