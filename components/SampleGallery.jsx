"use client";

import React, { useState } from "react";
import { ArrowUpRight, Layout, Play } from "lucide-react";
import { portfolio } from "@/content/site";
import { Reveal, SectionHead } from "@/components/shared";
import { C } from "@/components/tokens";

/* YouTube URL থেকে ভিডিও ID (youtu.be / shorts / watch?v= / embed) */
function youtubeId(url = "") {
  const m =
    url.match(/youtu\.be\/([\w-]{6,})/) ||
    url.match(/\/shorts\/([\w-]{6,})/) ||
    url.match(/[?&]v=([\w-]{6,})/) ||
    url.match(/\/embed\/([\w-]{6,})/);
  return m ? m[1] : null;
}

/* Facebook ভিডিও / রিল কি না */
function isFacebook(url = "") {
  return /facebook\.com|fb\.watch/.test(url);
}

/* Facebook এম্বেড লিংক */
function facebookEmbed(url) {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=false`;
}

/* site.js-এ vertical: true/false দিলে সেটাই, না দিলে shorts হলে ভার্টিকাল */
function isVertical(p) {
  if (typeof p.vertical === "boolean") return p.vertical;
  return /\/shorts\//.test(p.url || "");
}

/* ভিডিও কার্ড — থাম্বনেইল ও প্লেয়ার দুটোই কার্ডের ভেতরে, একই অ্যাসপেক্ট রেশিওতে */
function VideoCard({ p, playing, onPlay }) {
  const id = youtubeId(p.url);
  const fb = isFacebook(p.url);
  const vertical = isVertical(p);
  const ratio = vertical ? "9 / 16" : "16 / 9";

  // থাম্বনেইলের ফলব্যাক চেইন — প্রথমটা না পেলে পরেরটা
  const sources = React.useMemo(() => {
    const list = [];
    if (id) {
      // ভার্টিকাল (Shorts) হলে আগে পোর্ট্রেট থাম্বনেইল
      if (vertical) list.push(`https://i.ytimg.com/vi/${id}/oardefault.jpg`);
      list.push(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
      list.push(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
    }
    if (p.image) list.push(p.image);
    return list;
  }, [id, vertical, p.image]);

  const [srcIndex, setSrcIndex] = useState(0);
  const thumb = sources[srcIndex];
  const nextSource = () => setSrcIndex((n) => (n + 1 < sources.length ? n + 1 : n));

  // YouTube না থাকা থাম্বনেইলের বদলে ধূসর প্লেসহোল্ডার (120x90) পাঠায়, 404 দেয় না —
  // তাই সাইজ দেখে বুঝে পরের সোর্সে যাই
  const handleLoad = (e) => {
    if (e.currentTarget.naturalWidth > 0 && e.currentTarget.naturalWidth < 200) nextSource();
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        overflow: "hidden",
        border: `1px solid ${C.line}`,
      }}
    >
      <div
        onClick={() => !playing && !fb && id && onPlay()}
        className={playing || fb ? "" : "card-media lift"}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: ratio,
          background: "#000",
          cursor: playing || fb ? "default" : "pointer",
        }}
      >
        {fb ? (
          <iframe
            src={facebookEmbed(p.url)}
            title={p.t}
            loading="lazy"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        ) : playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={p.t}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        ) : (
          <>
            {/* ব্লার ব্যাকগ্রাউন্ড — ফাঁকা জায়গা ভরাট করে, ভিডিও ফ্রেম কাটে না */}
            {thumb && (
              <img
                key={`bg-${srcIndex}`}
                src={thumb}
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "blur(22px) brightness(.55)",
                  transform: "scale(1.15)",
                }}
              />
            )}

            {thumb ? (
              <img
                key={`fg-${srcIndex}`}
                className="grow"
                src={thumb}
                alt={p.t}
                onError={nextSource}
                onLoad={handleLoad}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  // ভার্টিকাল কার্ডে fallback থাম্বনেইল 16:9 হলে পাশের কালো বার বাদ দিয়ে
                  // ভিডিওর আসল ফ্রেমটাই দেখায়
                  objectFit: vertical ? "cover" : "contain",
                }}
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `linear-gradient(135deg, ${C.purple}, ${C.purpleDeep})`,
                }}
              >
                <Play size={46} color="rgba(255,255,255,.85)" />
              </div>
            )}

            {/* ক্যাটাগরি ব্যাজ */}
            <span
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                background: "rgba(255,255,255,.92)",
                color: C.purple,
                fontSize: 12,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 999,
              }}
            >
              {p.biz}
            </span>

            {/* প্লে বাটন */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: 999,
                  background: "rgba(255,255,255,.94)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 30px -8px rgba(0,0,0,.5)",
                }}
              >
                <Play size={24} fill={C.navy} color={C.navy} style={{ marginLeft: 3 }} />
              </span>
            </div>
          </>
        )}
      </div>

      <div style={{ padding: 16 }}>
        <div
          style={{
            fontSize: 11.5,
            color: C.purple,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: ".08em",
          }}
        >
          {p.cat}
        </div>
        <div className="display" style={{ marginTop: 5, fontSize: 16.5, fontWeight: 600, lineHeight: 1.35 }}>
          {p.t}
        </div>
      </div>
    </div>
  );
}

/* ওয়েব প্রজেক্ট কার্ড — আগের মতোই */
function WebCard({ p }) {
  return (
    <div
      onClick={() => p.url && window.open(p.url, "_blank")}
      className="card-media lift"
      style={{
        cursor: "pointer",
        background: "#fff",
        borderRadius: 18,
        overflow: "hidden",
        border: `1px solid ${C.line}`,
      }}
    >
      <div
        style={{
          height: 190,
          background: p.image ? C.navy : `linear-gradient(135deg, ${C.purple}, ${C.purpleDeep})`,
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
            <Layout size={46} color="rgba(255,255,255,.85)" />
          </div>
        )}

        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "rgba(255,255,255,.92)",
            color: C.purple,
            fontSize: 12,
            fontWeight: 600,
            padding: "4px 10px",
            borderRadius: 999,
          }}
        >
          {p.biz}
        </span>

        <div
          className="overlay"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(15,23,42,.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            className="inline-flex items-center gap-2"
            style={{
              background: "#fff",
              color: C.navy,
              fontSize: 14,
              fontWeight: 600,
              padding: "9px 16px",
              borderRadius: 999,
            }}
          >
            প্রজেক্ট দেখুন
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between" style={{ padding: 18 }}>
        <div>
          <div
            style={{
              fontSize: 12,
              color: C.purple,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: ".08em",
            }}
          >
            {p.cat}
          </div>
          <div className="display" style={{ marginTop: 6, fontSize: 18, fontWeight: 600 }}>
            {p.t}
          </div>
        </div>
        <ArrowUpRight size={20} color={C.muted} />
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
  const [playingKey, setPlayingKey] = useState(null);

  const shown = projects.filter((p) => pFilter === filters[0] || p.cat === pFilter);

  // ক্যাটাগরির ক্রম অনুযায়ী সাজানো (filters-এর ক্রম মেনে)
  const catRank = (p) => {
    const i = filters.indexOf(p.cat);
    return i === -1 ? 999 : i;
  };
  const byCat = (a, b) => catRank(a) - catRank(b);

  const vids = isVideo ? [...shown].sort(byCat) : [];
  const portrait = vids.filter(isVertical); // ৯:১৬ — আগে
  const landscape = vids.filter((p) => !isVertical(p)); // ১৬:৯ — শেষে

  return (
    <section style={{ background: C.light, minHeight: "70vh" }}>
      <div className="mx-auto px-6 pt-14 pb-20" style={{ maxWidth: 1200 }}>
        <Reveal>
          <SectionHead eyebrow={head.eyebrow} title={head.title} sub={head.sub} />
        </Reveal>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2" style={{ marginTop: 40 }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setPFilter(f);
                setPlayingKey(null);
              }}
              className="chip px-4 py-2"
              style={{
                borderRadius: 999,
                fontSize: 13.5,
                fontWeight: 500,
                cursor: "pointer",
                border: `1px solid ${pFilter === f ? C.purple : C.line}`,
                background: pFilter === f ? "rgba(91,42,157,.1)" : "#fff",
                color: pFilter === f ? C.purple : C.muted,
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {isVideo ? (
          <div className="mx-auto" style={{ maxWidth: 1200 }}>
            {/* ৯:১৬ — ২ কলাম */}
            {portrait.length > 0 && (
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
                {portrait.map((p, i) => {
                  const key = `v-${p.url}-${i}`;
                  return (
                    <Reveal key={key} delay={(i % 4) * 0.05}>
                      <VideoCard p={p} playing={playingKey === key} onPlay={() => setPlayingKey(key)} />
                    </Reveal>
                  );
                })}
              </div>
            )}

            {/* ১৬:৯ — ১ কলাম */}
            {landscape.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginTop: 24 }}>
                {landscape.map((p, i) => {
                  const key = `h-${p.url}-${i}`;
                  return (
                    <Reveal key={key}>
                      <VideoCard p={p} playing={playingKey === key} onPlay={() => setPlayingKey(key)} />
                    </Reveal>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <Reveal key={p.t + i} delay={(i % 3) * 0.06}>
                <WebCard p={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
