"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { brand, nav, startProjectLabel, contact } from "@/content/site";
import { C } from "@/components/tokens";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waHref = `https://wa.me/${contact.whatsappNumber}`;
  // শুধু আসল আলাদা পেজগুলোর জন্য active state (hash link-এ নয়)
  // প্রথম সেগমেন্ট মিলিয়ে active (যেমন /pricing/web ও /pricing/video দুটোতেই "প্রাইসিং" active)
  const base = (p) => "/" + (p || "").split("/").filter(Boolean)[0];
  const isActive = (href) =>
    href.startsWith("/") && !href.includes("#") && href !== "/" &&
    base(pathname) === base(href);

  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 50,
        background: scrolled ? "rgba(255,255,255,.88)" : "rgba(255,255,255,.72)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent",
        transition: "all .3s ease",
      }}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-4" style={{ maxWidth: 1200 }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" style={{ textDecoration: "none", color: "inherit" }} aria-label={brand.name}>
          {brand.logoImage ? (
            <img src={brand.logoImage} alt={brand.name} className="h-9 sm:h-11 w-auto" style={{ display: "block" }} />
          ) : (
            <>
              <div className="flex items-center justify-center"
                style={{ width: 42, height: 42, borderRadius: 12, background: C.purple, boxShadow: "0 8px 20px -8px rgba(91,42,157,.6)" }}>
                <Sparkles size={22} color="#fff" />
              </div>
              <div className="leading-tight">
                <div className="display" style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-.02em" }}>{brand.logoLine1}</div>
                <div style={{ fontSize: 11, color: C.muted, letterSpacing: ".18em", textTransform: "uppercase" }}>{brand.logoLine2}</div>
              </div>
            </>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link key={item.label} href={item.href} className="navlink"
                style={{ fontSize: 15, fontWeight: active ? 700 : 500, color: active ? C.purple : C.navy, textDecoration: "none" }}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btnx inline-flex items-center gap-2 px-5 py-3"
            style={{ background: C.purple, color: "#fff", borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: "none", boxShadow: "0 12px 24px -12px rgba(91,42,157,.7)" }}>
            {startProjectLabel} <ArrowRight size={17} />
          </a>
        </div>

        <button className="xl:hidden" onClick={() => setOpen(!open)} aria-label="Menu"
          style={{ background: "none", border: "none", color: C.navy, cursor: "pointer" }}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden px-6 pb-6" style={{ background: "#fff", borderBottom: `1px solid ${C.line}` }}>
          <div className="flex flex-col gap-1 pt-2">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link key={item.label} href={item.href} onClick={() => setOpen(false)}
                  style={{ padding: "12px 4px", fontWeight: active ? 700 : 500, color: active ? C.purple : C.navy, textDecoration: "none", borderBottom: `1px solid ${C.light}` }}>
                  {item.label}
                </Link>
              );
            })}
            <a href={waHref} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3"
              style={{ background: C.purple, color: "#fff", borderRadius: 12, fontWeight: 600, textDecoration: "none" }}>
              {startProjectLabel} <ArrowRight size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
