"use client";

import React, { useState, useEffect, useRef } from "react";
import { Globe, Video, Layout, Zap, Sparkles, Check, MessageCircle } from "lucide-react";
import { C } from "@/components/tokens";

/* Map content icon keys → lucide components */
const ICONS = {
  globe: Globe, video: Video, message: MessageCircle,
  layout: Layout, sparkles: Sparkles, check: Check, zap: Zap,
};
export const Icon = ({ name, ...rest }) => {
  const Cmp = ICONS[name] || Sparkles;
  return <Cmp {...rest} />;
};

/* Scroll-reveal wrapper */
export function Reveal({ children, delay = 0, className = "" }) {
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

/* Centered section heading */
export function SectionHead({ eyebrow, title, sub }) {
  return (
    <div style={{ textAlign: "center", maxWidth: 660, margin: "0 auto" }}>
      <div style={{ fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: C.purple, fontWeight: 700 }}>{eyebrow}</div>
      <h2 className="display" style={{ marginTop: 12, fontSize: "clamp(1.8rem,3.4vw,2.6rem)", fontWeight: 800, letterSpacing: "-.02em", lineHeight: 1.15 }}>{title}</h2>
      {sub && <p style={{ marginTop: 14, fontSize: 17, color: C.muted, lineHeight: 1.6 }}>{sub}</p>}
    </div>
  );
}
