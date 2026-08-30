"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { clients } from "@/content/site";
import { Reveal } from "@/components/shared";
import { C } from "@/components/tokens";

const AVATAR = 84;
const MIN_CELL = 128;
const LABEL_H = 34;
const ROW_GAP = 26;

function LogoItem({ c }) {
  const [broken, setBroken] = useState(false);
  const initials = (c.name || "?")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const body = (
    <>
      <span
        className="cl-ring"
        style={{
          width: AVATAR,
          height: AVATAR,
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: c.image && !broken ? "#fff" : "rgba(91,42,157,.08)",
          boxShadow: `0 0 0 1px ${C.line}, 0 6px 18px -12px rgba(15,23,42,.5)`,
          color: C.purple,
          fontWeight: 700,
          fontSize: 21,
          transition: "transform .25s cubic-bezier(.34,1.4,.64,1), box-shadow .25s ease",
        }}
      >
        {c.image && !broken ? (
          <img
            src={c.image}
            alt={c.name}
            onError={() => setBroken(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          initials
        )}
      </span>

      <span
        className="cl-name"
        style={{
          marginTop: 10,
          fontSize: 12.5,
          lineHeight: 1.3,
          color: C.muted,
          textAlign: "center",
          maxWidth: MIN_CELL - 16,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          transition: "color .25s ease",
        }}
      >
        {c.name}
      </span>
    </>
  );

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    textDecoration: "none",
  };

  return c.url ? (
    <a className="cl-item" href={c.url} target="_blank" rel="noopener noreferrer" title={c.name} style={style}>
      {body}
    </a>
  ) : (
    <span className="cl-item" title={c.name} style={style}>
      {body}
    </span>
  );
}

export default function ClientLogos() {
  const items = clients?.items || [];
  const boxRef = useRef(null);
  const [cols, setCols] = useState(4);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth - 56;
      setCols(Math.max(2, Math.floor(w / MIN_CELL)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const perPage = cols * 2;
  const pages = Math.max(1, Math.ceil(items.length / perPage));

  useEffect(() => {
    setPage((p) => Math.min(p, pages - 1));
  }, [pages]);

  const canPrev = page > 0;
  const canNext = page < pages - 1;

  const arrowStyle = (on) => ({
    width: 42,
    height: 42,
    borderRadius: 14,
    border: `1px solid ${on ? C.line : "rgba(231,226,242,.6)"}`,
    background: on ? "#fff" : "transparent",
    color: on ? C.navy : C.muted,
    opacity: on ? 1 : 0.32,
    cursor: on ? "pointer" : "default",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .2s ease",
    boxShadow: on ? "0 6px 16px -10px rgba(15,23,42,.6)" : "none",
  });

  const rowH = AVATAR + LABEL_H;

  return (
    <section style={{ background: C.light, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
      <div className="mx-auto px-6 py-16" style={{ maxWidth: 1200 }}>
        <style>{`
          .cl-item:hover .cl-ring { transform: translateY(-4px) scale(1.08); box-shadow: 0 0 0 2px ${C.purple}, 0 16px 30px -16px rgba(91,42,157,.75); }
          .cl-item:hover .cl-name { color: ${C.purple}; }
          .cl-box::before, .cl-box::after { content: ""; position: absolute; top: 0; bottom: 0; width: 46px; pointer-events: none; z-index: 2; }
          .cl-box::before { left: 0; background: linear-gradient(90deg, #fff, rgba(255,255,255,0)); }
          .cl-box::after { right: 0; background: linear-gradient(270deg, #fff, rgba(255,255,255,0)); }
        `}</style>

        {/* হেডার — বাঁয়ে টাইটেল, ডানে কাউন্টার */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div
                className="inline-flex items-center gap-2"
                style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: C.purple }}
              >
                <span style={{ width: 22, height: 1, background: C.purple, display: "inline-block" }} />
                {clients.eyebrow}
              </div>
              <h2 className="display" style={{ marginTop: 12, fontSize: 34, fontWeight: 700, color: C.navy, lineHeight: 1.25 }}>
                {clients.title}
              </h2>
              {clients.sub && (
                <p style={{ marginTop: 10, color: C.muted, fontSize: 15.5, maxWidth: 520 }}>{clients.sub}</p>
              )}
            </div>

            <div
              style={{
                background: "#fff",
                border: `1px solid ${C.line}`,
                borderRadius: 16,
                padding: "12px 20px",
                textAlign: "center",
                minWidth: 118,
              }}
            >
              <div className="display" style={{ fontSize: 28, fontWeight: 700, color: C.purple, lineHeight: 1 }}>
                {items.length}+
              </div>
              <div style={{ marginTop: 5, fontSize: 12.5, color: C.muted }}>{clients.countLabel}</div>
            </div>
          </div>
        </Reveal>

        {/* লোগো বক্স */}
        <Reveal>
          <div
            ref={boxRef}
            className="cl-box"
            style={{
              position: "relative",
              marginTop: 40,
              background: "#fff",
              border: `1px solid ${C.line}`,
              borderRadius: 24,
              padding: "30px 28px",
              overflow: "hidden",
              boxShadow: "0 24px 60px -46px rgba(15,23,42,.6)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: `${pages * 100}%`,
                transform: `translateX(-${(page * 100) / pages}%)`,
                transition: "transform .5s cubic-bezier(.4,0,.2,1)",
              }}
            >
              {Array.from({ length: pages }).map((_, pi) => (
                <div
                  key={pi}
                  style={{
                    width: `${100 / pages}%`,
                    flexShrink: 0,
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    gridAutoRows: rowH,
                    rowGap: ROW_GAP,
                    columnGap: 14,
                    minHeight: rowH * 2 + ROW_GAP,
                    alignContent: "start",
                  }}
                >
                  {items.slice(pi * perPage, (pi + 1) * perPage).map((c, i) => (
                    <LogoItem key={`${c.name}-${i}`} c={c} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* কন্ট্রোল */}
        <div className="flex items-center" style={{ marginTop: 20 }}>
          <button onClick={() => canPrev && setPage((p) => p - 1)} disabled={!canPrev} aria-label="আগের স্লাইড" style={arrowStyle(canPrev)}>
            <ArrowLeft size={19} />
          </button>

          <div className="flex flex-1 items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`স্লাইড ${i + 1}`}
                style={{
                  width: i === page ? 26 : 7,
                  height: 7,
                  borderRadius: 999,
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  background: i === page ? C.purple : "rgba(15,23,42,.16)",
                  transition: "all .3s cubic-bezier(.4,0,.2,1)",
                }}
              />
            ))}
          </div>

          <button onClick={() => canNext && setPage((p) => p + 1)} disabled={!canNext} aria-label="পরের স্লাইড" style={arrowStyle(canNext)}>
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </section>
  );
}
