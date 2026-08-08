"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Menu, X, ArrowRight, ArrowUpRight, ArrowUp, Globe, Video, Layout,
  Zap, Sparkles, Film, Play, Check, Phone,
  Mail, User, MessageCircle, Quote, MapPin, Star,
} from "lucide-react";
import {
  brand, nav, startProjectLabel, hero, services, portfolio, caseStudy,
  pricing, about, process as processData, testimonials, contact, footer,
} from "@/content/site";

/* Brand tokens — edit here to re-theme the whole site */
const C = {
  purple: "#5B2A9D",
  purpleDeep: "#3D1A6E",
  purpleSoft: "#7C4DCB",
  navy: "#0F172A",
  navySoft: "#1E293B",
  light: "#F8F7FC",
  white: "#FFFFFF",
  line: "#E7E2F2",
  muted: "#64607A",
};

/* Map content icon keys → lucide components */
const ICONS = {
  globe: Globe, video: Video, message: MessageCircle,
  layout: Layout, sparkles: Sparkles, check: Check, zap: Zap,
};
const Icon = ({ name, ...rest }) => {
  const Cmp = ICONS[name] || Sparkles;
  return <Cmp {...rest} />;
};

/* Scroll-reveal wrapper */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .7s ease ${delay}s, transform .7s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [pTab, setPTab] = useState("web");
  const [pFilter, setPFilter] = useState("সব");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projects = pTab === "web" ? portfolio.web : portfolio.video;
  const filters = pTab === "web" ? portfolio.webFilters : portfolio.videoFilters;
  const shown = projects.filter((p) => pFilter === "সব" || p.cat === pFilter);

  const waHref = `https://wa.me/${contact.whatsappNumber}`;
  const btn = (bg, color, extra = {}) => ({ background: bg, color, ...extra });

  return (
    <div style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif", color: C.navy, background: C.white }}>
      {/* ============ HEADER ============ */}
      <header
        style={{
          position: "sticky", top: 0, zIndex: 50,
          background: scrolled ? "rgba(255,255,255,.88)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent",
          transition: "all .3s ease",
        }}
      >
        <div className="mx-auto flex items-center justify-between px-6 py-4" style={{ maxWidth: 1200 }}>
          {/* Logo area */}
          <a href="/" className="flex items-center gap-3" style={{ textDecoration: "none", color: "inherit" }} aria-label={brand.name}>
            {brand.logoImage ? (
              <img src={brand.logoImage} alt={brand.name} className="h-9 sm:h-11 w-auto" style={{ display: "block" }} />
            ) : (
              <>
                <div
                  className="flex items-center justify-center"
                  style={{ width: 42, height: 42, borderRadius: 12, background: C.purple, boxShadow: "0 8px 20px -8px rgba(91,42,157,.6)" }}
                >
                  <Sparkles size={22} color="#fff" />
                </div>
                <div className="leading-tight">
                  <div className="display" style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-.02em" }}>{brand.logoLine1}</div>
                  <div style={{ fontSize: 11, color: C.muted, letterSpacing: ".18em", textTransform: "uppercase" }}>{brand.logoLine2}</div>
                </div>
              </>
            )}
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="navlink" style={{ fontSize: 15, fontWeight: 500, color: C.navy, textDecoration: "none" }}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btnx inline-flex items-center gap-2 px-5 py-3"
              style={{ ...btn(C.purple, "#fff"), borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: "none", boxShadow: "0 12px 24px -12px rgba(91,42,157,.7)" }}>
              {startProjectLabel} <ArrowRight size={17} />
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu"
            style={{ background: "none", border: "none", color: C.navy, cursor: "pointer" }}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden px-6 pb-6" style={{ background: "#fff", borderBottom: `1px solid ${C.line}` }}>
            <div className="flex flex-col gap-1 pt-2">
              {nav.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)}
                  style={{ padding: "12px 4px", fontWeight: 500, color: C.navy, textDecoration: "none", borderBottom: `1px solid ${C.light}` }}>
                  {item.label}
                </a>
              ))}
              <a href={waHref} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3"
                style={{ ...btn(C.purple, "#fff"), borderRadius: 12, fontWeight: 600, textDecoration: "none" }}>
                {startProjectLabel} <ArrowRight size={17} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ============ HERO ============ */}
      <section id="home" style={{ background: C.light, overflow: "hidden", position: "relative" }}>
        <div aria-hidden style={{ position: "absolute", top: -120, right: -120, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,42,157,.14), transparent 70%)" }} />
        <div aria-hidden style={{ position: "absolute", bottom: -160, left: -100, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,42,157,.08), transparent 70%)" }} />
        <div className="mx-auto grid items-center gap-16 px-6 pt-8 pb-16 lg:grid-cols-2 lg:pt-12 lg:pb-20" style={{ maxWidth: 1200 }}>
          <Reveal>
            {/* Founder-led trust badge */}
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
                style={{ ...btn(C.purple, "#fff"), borderRadius: 13, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 18px 34px -14px rgba(91,42,157,.75)" }}>
                {hero.primaryCta.label} <ArrowRight size={18} />
              </a>
              <a href={hero.secondaryCta.href} className="btnx inline-flex items-center gap-2 px-7 py-4"
                style={{ background: "#fff", color: C.navy, border: `1px solid ${C.line}`, borderRadius: 13, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>
                {hero.secondaryCta.label}
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2" style={{ fontSize: 13.5, color: C.muted }}>
              <Check size={15} color={C.purple} /> {hero.microcopy}
            </div>

            {/* Trust-building row */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3" style={{ paddingTop: 26, borderTop: `1px solid ${C.line}` }}>
              {hero.trust.map((it) => (
                <div key={it.text} className="flex items-center gap-2" style={{ fontSize: 14, fontWeight: 500, color: C.navy }}>
                  <span style={{ color: C.purple, display: "flex" }}><Icon name={it.icon} size={15} /></span> {it.text}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Signature hero visual: premium creative workspace */}
          <Reveal delay={0.15}>
            <div className="relative floaty" style={{ minHeight: 420 }}>
              {/* browser / website design mock */}
              <div className="lift" style={{ background: "#fff", borderRadius: 20, boxShadow: "0 40px 80px -34px rgba(15,23,42,.4)", border: `1px solid ${C.line}`, overflow: "hidden" }}>
                <div className="flex items-center gap-2 px-4 py-3" style={{ background: C.navy }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                  <span style={{ marginLeft: 10, flex: 1, textAlign: "center", fontSize: 11.5, color: "#94a3b8", background: "rgba(255,255,255,.06)", borderRadius: 6, padding: "3px 0" }}>{brand.domainLabel}</span>
                </div>
                {/* mini landing page */}
                <div>
                  <div style={{ padding: "22px 22px 26px", background: "linear-gradient(160deg, rgba(91,42,157,.10), rgba(91,42,157,.02))" }}>
                    <div className="flex items-center justify-between" style={{ marginBottom: 20 }}>
                      <div style={{ height: 9, width: 60, borderRadius: 5, background: C.purple }} />
                      <div className="flex gap-2">
                        {[0, 1, 2].map((i) => <div key={i} style={{ height: 6, width: 22, borderRadius: 4, background: C.line }} />)}
                      </div>
                    </div>
                    <div style={{ height: 15, width: "78%", borderRadius: 6, background: C.navy }} />
                    <div style={{ height: 15, width: "52%", borderRadius: 6, background: C.navy, marginTop: 8, opacity: .85 }} />
                    <div style={{ height: 7, width: "88%", borderRadius: 5, background: C.line, marginTop: 14 }} />
                    <div style={{ height: 7, width: "70%", borderRadius: 5, background: C.line, marginTop: 7 }} />
                    <div style={{ height: 32, width: 128, borderRadius: 9, background: C.purple, marginTop: 18, boxShadow: "0 10px 20px -10px rgba(91,42,157,.7)" }} />
                  </div>
                  <div className="grid grid-cols-3 gap-3" style={{ padding: "18px 22px 24px" }}>
                    {[0, 1, 2].map((i) => (
                      <div key={i} style={{ borderRadius: 11, border: `1px solid ${C.line}`, overflow: "hidden" }}>
                        <div style={{ height: 36, background: i === 1 ? "rgba(91,42,157,.12)" : C.light }} />
                        <div style={{ padding: 8 }}>
                          <div style={{ height: 5, width: "80%", borderRadius: 4, background: C.line }} />
                          <div style={{ height: 5, width: "55%", borderRadius: 4, background: C.line, marginTop: 5 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* floating video editor card */}
              <div className="lift" style={{ position: "absolute", bottom: -34, left: -22, width: 264, background: C.navy, borderRadius: 18, padding: 16, boxShadow: "0 30px 60px -22px rgba(15,23,42,.7)" }}>
                <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                  <div className="flex items-center gap-2" style={{ color: "#fff", fontSize: 12.5, fontWeight: 600 }}>
                    <Film size={14} color={C.purpleSoft} /> ভিডিও এডিটর
                  </div>
                  <span style={{ fontSize: 10, color: "#94a3b8" }}>00:24</span>
                </div>
                <div style={{ height: 76, borderRadius: 11, background: "linear-gradient(135deg, #5B2A9D, #3D1A6E)", position: "relative", overflow: "hidden", marginBottom: 12 }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Play size={15} color={C.purple} fill={C.purple} />
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-1" style={{ height: 22, marginBottom: 10 }}>
                  {[10, 18, 7, 22, 14, 20, 9, 16, 12, 21, 8, 17, 13, 19, 6, 15, 11].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: h, borderRadius: 2, background: i % 3 === 0 ? C.purpleSoft : "rgba(255,255,255,.28)" }} />
                  ))}
                </div>
                <div className="space-y-2">
                  {[["#7C4DCB", "72%"], ["#28c840", "46%"], ["#febc2e", "88%"]].map(([c, w], i) => (
                    <div key={i} style={{ height: 7, borderRadius: 5, background: "rgba(255,255,255,.1)" }}>
                      <div style={{ height: "100%", width: w, borderRadius: 5, background: c }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* founder personal-branding badge */}
              <div style={{ position: "absolute", top: -18, right: 6, background: "#fff", borderRadius: 15, padding: "10px 14px 10px 10px", boxShadow: "0 18px 34px -16px rgba(15,23,42,.45)", border: `1px solid ${C.line}`, display: "flex", alignItems: "center", gap: 10 }}>
                <span className="display" style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(145deg, ${C.purple}, ${C.purpleDeep})`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700 }}>{brand.founderInitials}</span>
                <div style={{ lineHeight: 1.25 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>{brand.founderName}</div>
                  <div style={{ fontSize: 11, color: C.muted }}>{brand.founderRole}</div>
                </div>
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
                <a href="#portfolio" className="mt-8 inline-flex items-center gap-2" style={{ color: C.purple, fontWeight: 600, textDecoration: "none" }}>
                  পোর্টফোলিও দেখুন <ArrowUpRight size={17} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ PORTFOLIO ============ */}
      <section id="portfolio" style={{ background: C.light }}>
        <div className="mx-auto px-6 py-16" style={{ maxWidth: 1200 }}>
          <Reveal><SectionHead eyebrow={portfolio.eyebrow} title={portfolio.title} sub={portfolio.sub} /></Reveal>

          {/* main tabs */}
          <div className="mt-10 flex justify-center gap-2" style={{ marginTop: 40 }}>
            {[["web", "ওয়েব ডিজাইন", <Layout size={16} key="a" />], ["video", "ভিডিও", <Film size={16} key="b" />]].map(([id, label, ic]) => (
              <button key={id} onClick={() => { setPTab(id); setPFilter("সব"); }}
                className="btnx inline-flex items-center gap-2 px-5 py-2.5"
                style={{ borderRadius: 999, fontWeight: 600, fontSize: 15, cursor: "pointer",
                  border: `1px solid ${pTab === id ? C.purple : C.line}`,
                  background: pTab === id ? C.purple : "#fff",
                  color: pTab === id ? "#fff" : C.navy }}>
                {ic} {label}
              </button>
            ))}
          </div>

          {/* filter chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button key={f} onClick={() => setPFilter(f)} className="chip px-4 py-2"
                style={{ borderRadius: 999, fontSize: 13.5, fontWeight: 500, cursor: "pointer",
                  border: `1px solid ${pFilter === f ? C.purple : C.line}`,
                  background: pFilter === f ? "rgba(91,42,157,.1)" : "#fff",
                  color: pFilter === f ? C.purple : C.muted }}>
                {f}
              </button>
            ))}
          </div>

          {/* grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <div key={p.t + i} className="card-media lift" style={{ background: "#fff", borderRadius: 18, overflow: "hidden", border: `1px solid ${C.line}` }}>
                <div style={{ height: 190, background: p.image ? C.navy : `linear-gradient(135deg, ${C.purple}, ${C.purpleDeep})`, position: "relative", overflow: "hidden" }}>
                  {p.image ? (
                    <img className="grow" src={p.image} alt={p.t} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <div className="grow" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {pTab === "web" ? <Layout size={46} color="rgba(255,255,255,.85)" /> : <Play size={46} color="rgba(255,255,255,.85)" />}
                    </div>
                  )}
                  <span style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,.92)", color: C.purple, fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 999 }}>
                    {p.biz}
                  </span>
                  <div className="overlay" style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="inline-flex items-center gap-2" style={{ background: "#fff", color: C.navy, fontSize: 14, fontWeight: 600, padding: "9px 16px", borderRadius: 999 }}>
                      প্রজেক্ট দেখুন <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between" style={{ padding: 18 }}>
                  <div>
                    <div style={{ fontSize: 12, color: C.purple, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".08em" }}>{p.cat}</div>
                    <div className="display" style={{ marginTop: 6, fontSize: 18, fontWeight: 600 }}>{p.t}</div>
                  </div>
                  <ArrowUpRight size={20} color={C.muted} />
                </div>
              </div>
            ))}
          </div>
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

      {/* ============ PRICING ============ */}
      <section id="pricing" style={{ background: C.light }}>
        <div className="mx-auto px-6 py-16" style={{ maxWidth: 1200 }}>
          <Reveal><SectionHead eyebrow={pricing.eyebrow} title={pricing.title} sub={pricing.sub} /></Reveal>

          <div style={{ marginTop: 40 }}>
            {pricing.groups.map((g, gi) => (
              <React.Fragment key={g.label}>
                {gi > 0 && <div style={{ height: 40 }} />}
                <PriceGroup label={g.label} plans={g.plans} />
              </React.Fragment>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3" style={{ textAlign: "center" }}>
              {pricing.reassurance.map((t) => (
                <div key={t} className="flex items-center gap-2" style={{ fontSize: 14.5, fontWeight: 500, color: C.navy }}>
                  <Check size={16} color={C.purple} /> {t}
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 10, fontSize: 14, color: C.muted }}>
              {pricing.customNote} <a href="#contact" style={{ color: C.purple, fontWeight: 600, textDecoration: "none" }}>{pricing.customLinkLabel}</a>
            </div>
          </Reveal>
        </div>
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

      {/* ============ FOOTER ============ */}
      <footer style={{ background: C.navy, color: "#fff" }}>
        <div className="mx-auto px-6 py-14" style={{ maxWidth: 1200 }}>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <a href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }} aria-label={brand.name}>
              {brand.logoImage ? (
                <img src={brand.logoImage} alt={brand.name} style={{ height: 38, width: "auto", display: "block", filter: "brightness(0) invert(1)" }} />
              ) : (
                <>
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: C.purple, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Sparkles size={20} color="#fff" />
                  </div>
                  <div>
                    <div className="display" style={{ fontWeight: 700, color: "#fff" }}>{brand.name}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8" }}>{brand.tagline}</div>
                  </div>
                </>
              )}
            </a>
            <div className="flex flex-wrap justify-center gap-6">
              {nav.map((item) => (
                <a key={item.label} href={item.href} style={{ color: "#cbd5e1", fontSize: 14, textDecoration: "none" }}>{item.label}</a>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 30, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.1)", fontSize: 13, color: "#94a3b8", textAlign: "center" }}>
            © {new Date().getFullYear()} {footer.copyright}
          </div>
        </div>
      </footer>

      {/* ============ SCROLL TO TOP ============ */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="btnx"
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 60,
          width: 48, height: 48, borderRadius: "50%",
          background: C.purple, color: "#fff", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 12px 28px -8px rgba(91,42,157,.7)",
          opacity: showTop ? 1 : 0,
          visibility: showTop ? "visible" : "hidden",
          transform: showTop ? "translateY(0)" : "translateY(12px)",
          transition: "opacity .3s ease, transform .3s ease, visibility .3s ease",
        }}
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
}

/* ---------- small pieces ---------- */
function SectionHead({ eyebrow, title, sub }) {
  return (
    <div style={{ textAlign: "center", maxWidth: 660, margin: "0 auto" }}>
      <div style={{ fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#5B2A9D", fontWeight: 700 }}>{eyebrow}</div>
      <h2 className="display" style={{ marginTop: 12, fontSize: "clamp(1.8rem,3.4vw,2.6rem)", fontWeight: 800, letterSpacing: "-.02em", lineHeight: 1.15 }}>{title}</h2>
      {sub && <p style={{ marginTop: 14, fontSize: 17, color: "#64607A", lineHeight: 1.6 }}>{sub}</p>}
    </div>
  );
}

function PriceGroup({ label, plans }) {
  const waHref = `https://wa.me/${contact.whatsappNumber}`;
  return (
    <Reveal>
      <div className="flex items-center gap-4" style={{ marginBottom: 22 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#5B2A9D", letterSpacing: ".14em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{label}</span>
        <span style={{ flex: 1, height: 1, background: "#E7E2F2" }} />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="lift" style={{
            background: p.featured ? "#5B2A9D" : "#fff",
            color: p.featured ? "#fff" : "#0F172A",
            border: `1px solid ${p.featured ? "#5B2A9D" : "#E7E2F2"}`,
            borderRadius: 20, padding: 28, position: "relative",
            boxShadow: p.featured ? "0 26px 50px -24px rgba(91,42,157,.6)" : "none",
          }}>
            {p.featured && (
              <span style={{ position: "absolute", top: 18, right: 18, fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", background: "rgba(255,255,255,.18)", padding: "4px 10px", borderRadius: 999 }}>জনপ্রিয়</span>
            )}
            <div style={{ fontSize: 16, fontWeight: 600, opacity: p.featured ? .9 : 1 }}>{p.name}</div>
            <div style={{ marginTop: 12, fontSize: 13, opacity: .7 }}>শুরু হচ্ছে</div>
            <div className="display" style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-.02em" }}>{p.price}</div>
            <div className="mt-6 space-y-3">
              {p.feats.map((f) => (
                <div key={f} className="flex items-center gap-3" style={{ fontSize: 14.5 }}>
                  <Check size={16} color={p.featured ? "#fff" : "#5B2A9D"} style={{ flexShrink: 0 }} />
                  {f}
                </div>
              ))}
            </div>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btnx mt-7 inline-flex items-center justify-center gap-2"
              style={{ width: "100%", padding: "12px", borderRadius: 11, fontWeight: 600, textDecoration: "none",
                background: p.featured ? "#fff" : "#5B2A9D", color: p.featured ? "#5B2A9D" : "#fff" }}>
              শুরু করুন <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

const lblStyle = { display: "block", fontSize: 13, fontWeight: 600, color: "#0F172A", marginBottom: 6 };
const inputStyle = {
  width: "100%", padding: "12px 14px", borderRadius: 11, border: "1px solid #E7E2F2",
  fontSize: 15, fontFamily: "inherit", color: "#0F172A", background: "#F8F7FC", outline: "none",
};

function Field({ label, placeholder, icon }) {
  return (
    <div>
      <label style={lblStyle}>{label}</label>
      <div style={{ position: "relative" }}>
        <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#64607A" }}>{icon}</span>
        <input placeholder={placeholder} style={{ ...inputStyle, paddingLeft: 40 }} />
      </div>
    </div>
  );
}
