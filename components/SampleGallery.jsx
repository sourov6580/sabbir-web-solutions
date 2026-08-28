"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Layout, Play, X } from "lucide-react";
import { portfolio } from "@/content/site";
import { Reveal, SectionHead } from "@/components/shared";
import { C } from "@/components/tokens";

/* YouTube URL থেকে ভিডিও ID বের করা (youtu.be / shorts / watch?v=) */
function youtubeId(url = "") {
  const m =
    url.match(/youtu\.be\/([\w-]{6,})/) ||
    url.match(/\/shorts\/([\w-]{6,})/) ||
    url.match(/[?&]v=([\w-]{6,})/) ||
    url.match(/\/embed\/([\w-]{6,})/);
  return m ? m[1] : null;
}

/* সাইটেই ভিডিও চালানোর জন্য লাইটবক্স */
function VideoLightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!item) return null;

  const id = youtubeId(item.url);
  if (!id) return null;

  // shorts হলে পোর্ট্রেট, নাহলে ল্যান্ডস্কেপ (site.js-এ vertical: true দিয়েও ঠিক করা যায়)
  const vertical = item.vertical ?? /\/shorts\//.test(item.url || "");
  const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 120,
        background: "rgba(10,12,24,.88)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        animation: "lbFade .18s ease",
      }}
    >
      <style>{`
        @keyframes lbFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lbPop { from { opacity: 0; transform: translateY(14px) scale(.98) } to { opacity: 1; transform: none } }
      `}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: vertical ? 420 : 960,
          animation: "lbPop .22s ease",
        }}
      >
        <button
          onClick={onClose}
          aria-label="বন্ধ করুন"
          style={{
            position: "absolute",
            top: -46,
            right: 0,
            width: 38,
            height: 38,
            borderRadius: 999,
            border: "none",
            cursor: "pointer",
            background: "rgba(255,255,255,.14)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <X size={20} />
        </button>

        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: vertical ? "9 / 16" : "16 / 9",
            maxHeight: "82vh",
            borderRadius: 16,
            overflow: "hidden",
            background: "#000",
            boxShadow: "0 30px 80px -20px rgba(0,0,0,.7)",
          }}
        >
          <iframe
            src={src}
            title={item.t}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        </div>

        <div style={{ marginTop: 14, color: "#fff", textAlign: "center" }}>
          <div className="display" style={{ fontSize: 17, fontWeight: 600 }}>{item.t}</div>
          <div style={{ fontSize: 13, opacity: .7, marginTop: 3 }}>{item.cat}</div>
        </div>
      </div>
    </div>
  );
}

/* type: "web" | "video" */
export default function SampleGallery({ type }) {
  const isVideo = type === "video";

  const projects = isVideo ? portfolio.video : portfolio.web;
  const filters = isVideo ? portfolio.videoFilters : portfolio.webFilters;
  const head = isVideo ? portfolio.videoPage : portfolio.webPage;

  const [pFilter, setPFilter] = useState(filters[0]);
  const [openVideo, setOpenVideo] = useState(null);

  const shown = projects.filter(
    (p) => pFilter === filters[0] || p.cat === pFilter
  );

  return (
    <section style={{ background: C.light, minHeight: "70vh" }}>
      <div className="mx-auto px-6 pt-14 pb-20" style={{ maxWidth: 1200 }}>

        <Reveal>
          <SectionHead
            eyebrow={head.eyebrow}
            title={head.title}
            sub={head.sub}
          />
        </Reveal>

        {/* Filters */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          style={{ marginTop: 40 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setPFilter(f)}
              className="chip px-4 py-2"
              style={{
                borderRadius: 999,
                fontSize: 13.5,
                fontWeight: 500,
                cursor: "pointer",
                border: `1px solid ${
                  pFilter === f ? C.purple : C.line
                }`,
                background:
                  pFilter === f
                    ? "rgba(91,42,157,.1)"
                    : "#fff",
                color:
                  pFilter === f
                    ? C.purple
                    : C.muted,
              }}
            >
              {f}
            </button>
          ))}
        </div>


        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {shown.map((p, i) => (

            <Reveal key={p.t + i} delay={(i % 3) * 0.06}>

              <div
                onClick={() => {
                  if (!p.url) return;
                  // ভিডিও হলে সাইটেই লাইটবক্সে চলবে, ওয়েব প্রজেক্ট নতুন ট্যাবে
                  if (isVideo && youtubeId(p.url)) setOpenVideo(p);
                  else window.open(p.url, "_blank");
                }}
                className="card-media lift"
                style={{
                  cursor: "pointer",
                  background: "#fff",
                  borderRadius: 18,
                  overflow: "hidden",
                  border: `1px solid ${C.line}`,
                }}
              >

                {/* Image */}
                <div
                  style={{
                    height: 190,
                    background: p.image
                      ? C.navy
                      : `linear-gradient(135deg, ${C.purple}, ${C.purpleDeep})`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >

                  {p.image ? (

                    <img
                      className="grow"
                      src={p.image}
                      alt={p.t}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                    />

                  ) : (

                    <div
                      className="grow"
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {isVideo ? (
                        <Play
                          size={46}
                          color="rgba(255,255,255,.85)"
                        />
                      ) : (
                        <Layout
                          size={46}
                          color="rgba(255,255,255,.85)"
                        />
                      )}
                    </div>

                  )}


                  {/* Category */}
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background:
                        "rgba(255,255,255,.92)",
                      color: C.purple,
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {p.biz}
                  </span>


                  {/* Hover */}
                  <div
                    className="overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "rgba(15,23,42,.55)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >

                    <span
                      className="inline-flex items-center gap-2"
                      style={{
                        background:"#fff",
                        color:C.navy,
                        fontSize:14,
                        fontWeight:600,
                        padding:"9px 16px",
                        borderRadius:999,
                      }}
                    >
                      {isVideo ? (
                        <>
                          ভিডিও দেখুন
                          <Play size={15} fill={C.navy}/>
                        </>
                      ) : (
                        <>
                          প্রজেক্ট দেখুন
                          <ArrowUpRight size={16}/>
                        </>
                      )}
                    </span>

                  </div>

                </div>


                {/* Content */}
                <div
                  className="flex items-center justify-between"
                  style={{ padding:18 }}
                >

                  <div>

                    <div
                      style={{
                        fontSize:12,
                        color:C.purple,
                        fontWeight:600,
                        textTransform:"uppercase",
                        letterSpacing:".08em",
                      }}
                    >
                      {p.cat}
                    </div>


                    <div
                      className="display"
                      style={{
                        marginTop:6,
                        fontSize:18,
                        fontWeight:600,
                      }}
                    >
                      {p.t}
                    </div>

                  </div>


                  <ArrowUpRight
                    size={20}
                    color={C.muted}
                  />

                </div>


              </div>

            </Reveal>

          ))}

        </div>

      </div>

      {openVideo && (
        <VideoLightbox item={openVideo} onClose={() => setOpenVideo(null)} />
      )}
    </section>
  );
}
