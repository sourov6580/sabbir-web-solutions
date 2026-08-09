"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { C } from "@/components/tokens";

export default function ScrollToTop() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
  );
}
