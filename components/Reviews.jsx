"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { reviews } from "@/content/site";
import { Reveal, SectionHead } from "@/components/shared";
import { C } from "@/components/tokens";

const RATIO = "941 / 1672"; // রিভিউ ইমেজের অনুপাত

function Lightbox({ items, index, setIndex, onClose }) {
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length, setIndex]);
  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length, setIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  const item = items[index];
  if (!item) return null;

  const navBtn = {
    width: 44,
    height: 44,
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    background: "rgba(255,255,255,.14)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 130,
        background: "rgba(10,12,24,.9)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        padding: 20,
        animation: "rvFade .18s ease",
      }}
    >
      <style>{`
        @keyframes rvFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes rvPop { from { opacity: 0; transform: scale(.97) } to { opacity: 1; transform: none } }
      `}</style>

      {items.length > 1 && (
        <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="আগের রিভিউ" style={navBtn}>
          <ChevronLeft size={22} />
        </button>
      )}

      <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", animation: "rvPop .22s ease" }}>
        <button
          onClick={onClose}
          aria-label="বন্ধ করুন"
          style={{ ...navBtn, position: "absolute", top: -54, right: 0, width: 38, height: 38 }}
        >
          <X size={20} />
        </button>

        <img
          src={item.image}
          alt={item.alt || "ক্লায়েন্ট রিভিউ"}
          style={{
            maxHeight: "84vh",
            maxWidth: "88vw",
            borderRadius: 14,
            display: "block",
            boxShadow: "0 30px 80px -20px rgba(0,0,0,.7)",
          }}
        />

        <div style={{ marginTop: 12, textAlign: "center", color: "rgba(255,255,255,.75)", fontSize: 13 }}>
          {index + 1} / {items.length}
        </div>
      </div>

      {items.length > 1 && (
        <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="পরের রিভিউ" style={navBtn}>
          <ChevronRight size={22} />
        </button>
      )}
    </div>
  );
}

export default function Reviews() {
  const items = reviews?.items || [];
  const [open, setOpen] = useState(null);

  if (items.length === 0) return null;

  return (
    <section style={{ background: C.light, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
      <div className="mx-auto px-6 py-16" style={{ maxWidth: 1200 }}>
        <style>{`
          .rv-card { transition: transform .28s cubic-bezier(.34,1.3,.64,1), box-shadow .28s ease; }
          .rv-card:hover { transform: translateY(-6px); box-shadow: 0 26px 50px -28px rgba(15,23,42,.6); }
          .rv-card:hover .rv-overlay { opacity: 1; }
        `}</style>

        <Reveal>
          <SectionHead eyebrow={reviews.eyebrow} title={reviews.title} sub={reviews.sub} />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5" style={{ marginTop: 44 }}>
          {items.map((r, i) => (
            <Reveal key={r.image} delay={(i % 4) * 0.07}>
              <div
                className="rv-card"
                onClick={() => setOpen(i)}
                style={{
                  position: "relative",
                  cursor: "zoom-in",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#fff",
                  border: `1px solid ${C.line}`,
                  boxShadow: "0 16px 40px -34px rgba(15,23,42,.7)",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: RATIO }}>
                  <img
                    src={r.image}
                    alt={r.alt || "ক্লায়েন্ট রিভিউ"}
                    loading="lazy"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />

                  <div
                    className="rv-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0,
                      transition: "opacity .28s ease",
                      background: "linear-gradient(180deg, rgba(15,23,42,0) 45%, rgba(15,23,42,.72) 100%)",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      paddingBottom: 16,
                    }}
                  >
                    <span
                      className="inline-flex items-center gap-2"
                      style={{
                        background: "#fff",
                        color: C.navy,
                        fontSize: 13,
                        fontWeight: 600,
                        padding: "8px 14px",
                        borderRadius: 999,
                      }}
                    >
                      <Maximize2 size={14} />
                      বড় করে দেখুন
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {open !== null && (
        <Lightbox items={items} index={open} setIndex={setOpen} onClose={() => setOpen(null)} />
      )}
    </section>
  );
}
