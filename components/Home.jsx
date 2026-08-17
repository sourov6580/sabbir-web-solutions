"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Globe, Video, Check, X,
  Mail, User, MessageCircle, Quote, Phone, MapPin, Star,
} from "lucide-react";
import {
  brand, startProjectLabel, hero, services, caseStudy,
  about, process as processData, testimonials, contact,
} from "@/content/site";
import { Icon, Reveal, SectionHead } from "@/components/shared";
import { C } from "@/components/tokens";

/* ---------- Portfolio chooser popup ---------- */
function PortfolioModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const choices = [
    { href: "/web-samples", label: "ওয়েবসাইট", desc: "Website ডিজাইন প্রজেক্ট", icon: <Globe size={26} /> },
    { href: "/video-samples", label: "ভিডিও", desc: "Promotional Video প্রজেক্ট", icon: <Video size={26} /> },
  ];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(15,23,42,.55)", backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
        animation: "fadeIn .2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff", borderRadius: 24, padding: "34px 28px 30px", width: "100%", maxWidth: 460,
          boxShadow: "0 40px 90px -30px rgba(15,23,42,.6)", border: `1px solid ${C.line}`,
          position: "relative", animation: "popIn .28s cubic-bezier(.22,1,.36,1)",
        }}
      >
        <button onClick={onClose} aria-label="বন্ধ করুন"
          style={{ position: "absolute", top: 16, right: 16, width: 34, height: 34, borderRadius: "50%", border: `1px solid ${C.line}`, background: C.light, color: C.muted, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <X size={18} />
        </button>

        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: C.purple, fontWeight: 700 }}>পোর্টফোলিও</div>
          <h3 className="display" style={{ marginTop: 8, fontSize: 24, fontWeight: 800, letterSpacing: "-.02em" }}>কোনটা দেখতে চান?</h3>
          <p style={{ marginTop: 8, fontSize: 15, color: C.muted }}>আপনার প্রয়োজন অনুযায়ী বেছে নিন</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {choices.map((c) => (
            <Link key={c.href} href={c.href} onClick={onClose} className="lift"
              style={{ textDecoration: "none", color: "inherit", textAlign: "center", padding: "24px 14px", borderRadius: 18, border: `1px solid ${C.line}`, background: C.light, display: "block" }}>
              <span style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(91,42,157,.1)", color: C.purple, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                {c.icon}
              </span>
              <div className="display" style={{ fontSize: 18, fontWeight: 700 }}>{c.label}</div>
              <div style={{ marginTop: 4, fontSize: 12.5, color: C.muted }}>{c.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const waHref = `https://wa.me/${contact.whatsappNumber}`;

  return (
    <div style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", color: C.navy, background: C.white }}>
      {showPortfolio && <PortfolioModal onClose={() => setShowPortfolio(false)} />}

      {/* ============ HERO ============ */}
      <section id="home" style={{ background: C.light, overflow: "hidden", position: "relative" }}>
        <div aria-hidden style={{ position: "absolute", top: -120, right: -120, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,42,157,.14), transparent 70%)" }} />
        <div aria-hidden style={{ position: "absolute", bottom: -160, left: -100, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,42,157,.08), transparent 70%)" }} />
        <div className="mx-auto grid items-center gap-16 px-6 pt-8 pb-16 lg:grid-cols-2 lg:pt-12 lg:pb-20" style={{ maxWidth: 1200 }}>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 mb-7"
              style={{ background: "#fff", border: `1px solid ${C.line}`, borderRadius: 999, boxShadow: "0 8px 20px -14px rgba(15,23,42,.3)" }}>
              <span className="display" style={{ width: 26, height: 26, borderRadius: "50%", background: C.purple, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>{brand.founderInitials}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>{hero.badge}</span>
            </div>

            <h1 className="display" style={{ fontSize: "clamp(2.2rem,4.7vw,3.7rem)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-.035em" }}>
              {hero.titleLead}
              <span style={{ color: C.purple }}>{hero.titleAccent}</span>
            </h1>
            <p style={{ marginTop: 22, fontSize: 18.5, lineHeight: 1.65, color: C.muted, maxWidth: 500 }}>
              {hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btnx inline-flex items-center gap-2 px-7 py-4"
                style={{ background: C.purple, color: "#fff", borderRadius: 13, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 18px 34px -14px rgba(91,42,157,.75)" }}>
                {hero.primaryCta.label} <ArrowRight size={18} />
              </a>
              <button onClick={() => setShowPortfolio(true)} className="btnx inline-flex items-center gap-2 px-7 py-4"
                style={{ background: "#fff", color: C.navy, border: `1px solid ${C.line}`, borderRadius: 13, fontWeight: 600, fontSize: 16, cursor: "pointer" }}>
                {hero.secondaryCta.label} <ArrowUpRight size={17} />
              </button>
            </div>



          </Reveal>

          {/* Signature hero visual */}
          <Reveal delay={0.15}>
            <div className="relative floaty">
              <div className="lift" style={{ background: "#fff", borderRadius: 20, boxShadow: "0 40px 80px -34px rgba(15,23,42,.4)", border: `1px solid ${C.line}`, overflow: "hidden", aspectRatio: "4 / 3" }}>
                <img src={hero.image} alt={brand.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="mx-auto px-6 py-16" style={{ maxWidth: 1200 }}>
        <Reveal><SectionHead eyebrow={services.eyebrow} title={services.title} sub={services.sub} /></Reveal>
        <div className="grid gap-8 md:grid-cols-2" style={{ marginTop: 52 }}>
          {services.cards.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="lift topbar" style={{ background: "#fff", border: `1px solid ${C.line}`, borderRadius: 20, padding: 36, height: "100%" }}>
                <div className="flex items-start justify-between">
                  <div style={{ width: 62, height: 62, borderRadius: 17, background: "rgba(91,42,157,.1)", color: C.purple, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={s.icon} size={26} />
                  </div>
                  <span className="display" style={{ fontSize: 40, fontWeight: 800, color: C.line, lineHeight: 1 }}>{s.no}</span>
                </div>
                <div style={{ marginTop: 22, fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: C.purple }}>{s.tag}</div>
                <h3 className="display" style={{ marginTop: 6, fontSize: 25, fontWeight: 700, letterSpacing: "-.02em" }}>{s.title}</h3>
                <p style={{ marginTop: 10, color: C.muted, lineHeight: 1.6 }}>{s.desc}</p>
                <div style={{ height: 1, background: C.line, margin: "24px 0" }} />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {s.items.map((it) => (
                    <div key={it} className="flex items-center gap-2.5" style={{ fontSize: 14.5, fontWeight: 500 }}>
                      <span style={{ width: 20, height: 20, borderRadius: 6, background: "rgba(91,42,157,.1)", color: C.purple, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Check size={13} />
                      </span>
                      {it}
                    </div>
                  ))}
                </div>
                <button onClick={() => setShowPortfolio(true)} className="mt-8 inline-flex items-center gap-2"
                  style={{ color: C.purple, fontWeight: 600, background: "none", border: "none", cursor: "pointer", padding: 0, fontSize: 15 }}>
                  পোর্টফোলিও দেখুন <ArrowUpRight size={17} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CASE STUDY ============ */}
      <section className="mx-auto px-6 py-16" style={{ maxWidth: 1200 }}>
        <Reveal><SectionHead eyebrow={caseStudy.eyebrow} title={caseStudy.title} sub={caseStudy.sub} /></Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden" style={{ borderRadius: 24, border: `1px solid ${C.line}`, background: "#fff" }}>
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 p-10" style={{ background: C.navy, color: "#fff" }}>
                <div style={{ fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: C.purpleSoft, fontWeight: 600 }}>{caseStudy.clientLabel}</div>
                <h3 className="display" style={{ marginTop: 8, fontSize: 28, fontWeight: 700 }}>{caseStudy.client}</h3>
                <div style={{ marginTop: 6, color: "#94a3b8" }}>{caseStudy.projectType}</div>
                <div className="mt-10 space-y-6">
                  {caseStudy.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="display" style={{ fontSize: 32, fontWeight: 800, color: "#fff" }}>{m.value}</div>
                      <div style={{ fontSize: 14, color: "#94a3b8" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3 p-10">
                {caseStudy.blocks.map((blk) => (
                  <div key={blk.head} className="mb-7">
                    <div style={{ fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase", color: C.purple, fontWeight: 700 }}>{blk.head}</div>
                    <p style={{ marginTop: 8, color: C.muted, lineHeight: 1.6 }}>{blk.body}</p>
                  </div>
                ))}
                <div style={{ fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase", color: C.purple, fontWeight: 700 }}>{caseStudy.techLabel}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {caseStudy.tech.map((t) => (
                    <span key={t} style={{ fontSize: 13, fontWeight: 500, padding: "6px 12px", borderRadius: 999, background: C.light, border: `1px solid ${C.line}` }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="mx-auto px-6 pt-8 pb-16" style={{ maxWidth: 1100 }}>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/5", borderRadius: 24, overflow: "hidden", background: `linear-gradient(160deg, ${C.purple}, ${C.purpleDeep})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 30px 60px -30px rgba(91,42,157,.5)" }}>
                {about.image ? (
                  <img src={about.image} alt={brand.founderName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <>
                    <User size={90} color="rgba(255,255,255,.6)" />
                    <span style={{ position: "absolute", bottom: 16, left: 16, fontSize: 12, color: "rgba(255,255,255,.75)" }}>{about.imageCaption}</span>
                  </>
                )}
              </div>
              <div style={{ position: "absolute", bottom: -18, right: -14, background: "#fff", borderRadius: 16, padding: "14px 18px", boxShadow: "0 20px 40px -20px rgba(15,23,42,.4)", border: `1px solid ${C.line}` }}>
                <div className="display" style={{ fontSize: 20, fontWeight: 700, color: C.purple }}>{brand.founderName}</div>
                <div style={{ fontSize: 13, color: C.muted }}>ফাউন্ডার · {brand.name}</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: C.purple, fontWeight: 700 }}>{about.eyebrow}</div>
            <h2 className="display" style={{ marginTop: 12, fontSize: "clamp(1.8rem,3.4vw,2.6rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-.02em" }}>
              {about.title}
            </h2>
            <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.7, color: C.muted }}>
              {about.body}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5">
              {about.highlights.map((h) => (
                <div key={h.head} style={{ padding: 18, borderRadius: 14, background: C.light, border: `1px solid ${C.line}` }}>
                  <div style={{ fontWeight: 700 }}>{h.head}</div>
                  <div style={{ marginTop: 6, fontSize: 14, color: C.muted, lineHeight: 1.5 }}>{h.body}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section style={{ background: C.navy, color: "#fff" }}>
        <div className="mx-auto px-6 py-16" style={{ maxWidth: 1200 }}>
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
              <div style={{ fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: C.purpleSoft, fontWeight: 700 }}>{processData.eyebrow}</div>
              <h2 className="display" style={{ marginTop: 12, fontSize: "clamp(1.8rem,3.4vw,2.6rem)", fontWeight: 800, letterSpacing: "-.02em" }}>{processData.title}</h2>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processData.steps.map((step, i) => (
              <Reveal key={step.head} delay={i * 0.08}>
                <div className="lift" style={{ padding: 28, borderRadius: 18, background: C.navySoft, border: "1px solid rgba(255,255,255,.08)", height: "100%", position: "relative" }}>
                  <div className="flex items-center justify-between">
                    <div style={{ width: 46, height: 46, borderRadius: 13, background: "rgba(124,77,203,.18)", color: C.purpleSoft, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={step.icon} size={20} /></div>
                    <span className="display" style={{ fontSize: 34, fontWeight: 800, color: "rgba(255,255,255,.14)", lineHeight: 1 }}>0{i + 1}</span>
                  </div>
                  <div style={{ marginTop: 18, fontSize: 18, fontWeight: 700 }}>{step.head}</div>
                  <p style={{ marginTop: 8, fontSize: 14.5, color: "#94a3b8", lineHeight: 1.6 }}>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="mx-auto px-6 py-16" style={{ maxWidth: 1200 }}>
        <Reveal><SectionHead eyebrow={testimonials.eyebrow} title={testimonials.title} sub={testimonials.sub} /></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="lift topbar" style={{ background: "#fff", border: `1px solid ${C.line}`, borderRadius: 18, padding: 28, height: "100%" }}>
                <Quote size={30} color={C.purple} style={{ opacity: .3 }} />
                <div className="mt-3 flex gap-1">
                  {[...Array(5)].map((_, k) => <Star key={k} size={15} color={C.purple} fill={C.purple} />)}
                </div>
                <p style={{ marginTop: 14, color: C.navy, lineHeight: 1.65, fontSize: 15.5 }}>&quot;{t.quote}&quot;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(91,42,157,.12)", color: C.purple, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: C.muted }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" style={{ background: C.light }}>
        <div className="mx-auto px-6 py-16" style={{ maxWidth: 1100 }}>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div style={{ fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: C.purple, fontWeight: 700 }}>{contact.eyebrow}</div>
              <h2 className="display" style={{ marginTop: 12, fontSize: "clamp(1.8rem,3.4vw,2.6rem)", fontWeight: 800, letterSpacing: "-.02em", lineHeight: 1.15 }}>
                {contact.heading}
              </h2>
              <p style={{ marginTop: 16, fontSize: 17, color: C.muted, lineHeight: 1.7 }}>
                {contact.sub}
              </p>
              <div className="mt-8 space-y-4">
                {[[<Mail size={18} key="m" />, contact.email], [<Phone size={18} key="p" />, "WhatsApp-এ পাওয়া যাবে"], [<MapPin size={18} key="l" />, contact.location]].map(([ic, t], i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span style={{ width: 40, height: 40, borderRadius: 12, background: "#fff", border: `1px solid ${C.line}`, color: C.purple, display: "flex", alignItems: "center", justifyContent: "center" }}>{ic}</span>
                    <span style={{ color: C.navy, fontWeight: 500 }}>{t}</span>
                  </div>
                ))}
              </div>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btnx mt-8 inline-flex items-center gap-2 px-6 py-3.5"
                style={{ background: "#25D366", color: "#fff", borderRadius: 12, fontWeight: 700, textDecoration: "none", boxShadow: "0 14px 28px -14px rgba(37,211,102,.7)" }}>
                <MessageCircle size={18} /> {contact.whatsappLabel}
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ position: "relative", maxWidth: 340, margin: "0 auto", width: "100%" }}>
                <div style={{ aspectRatio: "1/1", borderRadius: 24, overflow: "hidden", background: `linear-gradient(160deg, ${C.purple}, ${C.purpleDeep})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 30px 60px -30px rgba(91,42,157,.5)" }}>
                  {contact.image ? (
                    <img src={contact.image} alt={brand.founderName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <>
                      <User size={90} color="rgba(255,255,255,.6)" />
                      <span style={{ position: "absolute", bottom: 16, left: 16, fontSize: 12, color: "rgba(255,255,255,.75)" }}>{contact.imageCaption}</span>
                    </>
                  )}
                </div>
                <div style={{ position: "absolute", bottom: -18, right: -14, background: "#fff", borderRadius: 16, padding: "12px 16px 12px 12px", boxShadow: "0 20px 40px -20px rgba(15,23,42,.4)", border: `1px solid ${C.line}`, display: "flex", alignItems: "center", gap: 10 }}>
                  <span className="display" style={{ width: 38, height: 38, borderRadius: "50%", background: `linear-gradient(145deg, ${C.purple}, ${C.purpleDeep})`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>{brand.founderInitials}</span>
                  <div style={{ lineHeight: 1.25 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>{brand.founderName}</div>
                    <div style={{ fontSize: 12, color: C.muted }}>{brand.founderRole}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}