"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // SSR-তে কিছু দেখাবে না (flash এড়াতে)
  if (!mounted) return <div style={{ width: 40, height: 40 }} />;

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "লাইট মোড" : "ডার্ক মোড"}
      className={`btnx ${className}`}
      style={{
        width: 40, height: 40, borderRadius: 10,
        background: "var(--card-bg)",
        border: "1px solid var(--line)",
        color: "var(--navy)",
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all .25s ease",
      }}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
