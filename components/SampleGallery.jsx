"use client";

import React, { useState } from "react";
import { ArrowUpRight, Layout, Play } from "lucide-react";
import { portfolio } from "@/content/site";
import { Reveal, SectionHead } from "@/components/shared";
import { C } from "@/components/tokens";

/* type: "web" | "video" */
export default function SampleGallery({ type }) {
  const isVideo = type === "video";
  const projects = isVideo ? portfolio.video : portfolio.web;
  const filters = isVideo ? portfolio.videoFilters : portfolio.webFilters;
  const head = isVideo ? portfolio.videoPage : portfolio.webPage;

  const [pFilter, setPFilter] = useState(filters[0]);
  const shown = projects.filter((p) => pFilter === filters[0] || p.cat === pFilter);

  return (
    <section style={{ background: C.light, minHeight: "70vh" }}>
      <div className="mx-auto px-6 pt-14 pb-20" style={{ maxWidth: 1200 }}>
        <Reveal><SectionHead eyebrow={head.eyebrow} title={head.title} sub={head.sub} /></Reveal>

        {/* filter chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-2" style={{ marginTop: 40 }}>
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
            <Reveal key={p.t + i} delay={(i % 3) * 0.06}>
              <div onClick={() => window.open("https://amader-proshchitra.lovable.app/", "_blank")}
                className="card-media lift" style={{ display: "block", cursor: p.image ? "pointer" : "default", textDecoration: "none", color: "inherit", background: "#fff", borderRadius: 18, overflow: "hidden", border: `1px solid ${C.line}` }}>
                <div style={{ height: 190, background: p.image ? C.navy : `linear-gradient(135deg, ${C.purple}, ${C.purpleDeep})`, position: "relative", overflow: "hidden" }}>
                  {p.image ? (
                    <img className="grow" src={p.image} alt={p.t} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                  ) : (
                    <div className="grow" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {isVideo ? <Play size={46} color="rgba(255,255,255,.85)" /> : <Layout size={46} color="rgba(255,255,255,.85)" />}
                    </div>
                  )}
                  <span style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,.92)", color: C.purple, fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 999 }}>
                    {p.biz}
                  </span>
                  <div className="overlay" style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="inline-flex items-center gap-2" style={{ background: "#fff", color: C.navy, fontSize: 14, fontWeight: 600, padding: "9px 16px", borderRadius: 999 }}>
                      {isVideo ? <>ভিডিও দেখুন <Play size={15} fill={C.navy} /></> : <>প্রজেক্ট দেখুন <ArrowUpRight size={16} /></>}
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
              <button onClick={(e) => e.stopPropagation()} style={{ margin: "0 18px 18px", padding: "10px 16px", borderRadius: 999, border: `1px solid ${C.line}`, background: "#fff", color: C.purple, cursor: "pointer" }}>
                  <a href={p.url || "#"} target={p.url ? "_blank" : undefined} rel="noopener noreferrer" style={{textDecoration:"none", color:"inherit"}}>
                    লাইভ দেখুন
                  </a>
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>


