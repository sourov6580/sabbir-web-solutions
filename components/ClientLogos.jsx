"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clients } from "@/content/site";
import { Reveal, SectionHead } from "@/components/shared";
import { C } from "@/components/tokens";

const AVATAR = 88;   // লোগোর ব্যাস
const MIN_CELL = 132; // একটা লোগোর জন্য সর্বনিম্ন জায়গা (কলাম হিসাবের জন্য)
const ROW_GAP = 28;

/* একটা লোগো */
function LogoItem({ c }) {
  const [broken, setBroken] = useState(false);
  const initials = (c.name || "?")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const inner = (
    <span
      className="client-logo"
      style={{
        width: AVATAR,
        height: AVATAR,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: c.image && !broken ? "#fff" : "rgba(91,42,157,.1)",
        border: `1px solid ${C.line}`,
        color: C.purple,
        fontWeight: 700,
        fontSize: 22,
        transition: "transform .22s ease, box-shadow .22s ease",
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
  );

  const wrapStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  };

  return c.url ? (
    <a href={c.url} target="_blank" rel="noopener noreferrer" title={c.name} style={wrapStyle}>
      {inner}
    </a>
  ) : (
    <span title={c.name} style={wrapStyle}>
      {inner}
    </span>
  );
}

export default function ClientLogos() {
  const items = clients?.items || [];
  const boxRef = useRef(null);
  const [cols, setCols] = useState(4);
  const [page, setPage] = useState(0);

  // বক্সের প্রস্থ অনুযায়ী কলাম সংখ্যা
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth - 48; // padding বাদ
      setCols(Math.max(2, Math.floor(w / MIN_CELL)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const perPage = cols * 2; // সবসময় ২ সারি
  const pages = Math.max(1, Math.ceil(items.length / perPage));

  // কলাম বদলালে পেজ সীমার বাইরে চলে যেতে পারে
  useEffect(() => {
    setPage((p) => Math.min(p, pages - 1));
  }, [pages]);

  const canPrev = page > 0;
  const canNext = page < pages - 1;

  const arrowStyle = (enabled) => ({
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: `1px solid ${enabled ? C.line : "transparent"}`,
    background: enabled ? "#fff" : "transparent",
    color: enabled ? C.navy : C.muted,
    opacity: enabled ? 1 : 0.3,
    cursor: enabled ? "pointer" : "default",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .2s ease",
  });

  return (
    <section className="mx-auto px-6 py-16" style={{ maxWidth: 1200 }}>
      <Reveal>
        <SectionHead eyebrow={clients.eyebrow} title={clients.title} sub={clients.sub} />
      </Reveal>

      <Reveal>
        <style>{`
          .client-logo:hover { transform: scale(1.09); box-shadow: 0 10px 24px -10px rgba(15,23,42,.35); }
        `}</style>

        {/* লোগো বক্স */}
        <div
          ref={boxRef}
          style={{
            marginTop: 44,
            background: "#fff",
            border: `1px solid ${C.line}`,
            borderRadius: 18,
            padding: 24,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              width: `${pages * 100}%`,
              transform: `translateX(-${(page * 100) / pages}%)`,
              transition: "transform .45s cubic-bezier(.4,0,.2,1)",
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
                  gridAutoRows: AVATAR,
                  rowGap: ROW_GAP,
                  columnGap: 16,
                  minHeight: AVATAR * 2 + ROW_GAP,
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

        {/* কন্ট্রোল — বক্সের বাইরে নিচে */}
        <div className="flex items-center" style={{ marginTop: 18 }}>
          <button
            onClick={() => canPrev && setPage((p) => p - 1)}
            disabled={!canPrev}
            aria-label="আগের স্লাইড"
            style={arrowStyle(canPrev)}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex flex-1 items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`স্লাইড ${i + 1}`}
                style={{
                  width: i === page ? 22 : 8,
                  height: 8,
                  borderRadius: 999,
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  background: i === page ? C.purple : "rgba(15,23,42,.18)",
                  transition: "all .25s ease",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => canNext && setPage((p) => p + 1)}
            disabled={!canNext}
            aria-label="পরের স্লাইড"
            style={arrowStyle(canNext)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
