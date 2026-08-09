import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { brand, nav, footer } from "@/content/site";
import { C } from "@/components/tokens";

export default function Footer() {
  return (
    <footer style={{ background: C.navy, color: "#fff" }}>
      <div className="mx-auto px-6 py-14" style={{ maxWidth: 1200 }}>
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <Link href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }} aria-label={brand.name}>
            {brand.logoImage ? (
              <img src={brand.logoImage} alt={brand.name} style={{ height: 38, width: "auto", display: "block", filter: "brightness(0) invert(1)" }} />
            ) : (
              <>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: C.purple, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Sparkles size={20} color="#fff" />
                </div>
                <div>
                  <div className="display" style={{ fontWeight: 700, color: "#fff" }}>{brand.name}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8" }}>{brand.tagline}</div>
                </div>
              </>
            )}
          </Link>
          <div className="flex flex-wrap justify-center gap-6">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} style={{ color: "#cbd5e1", fontSize: 14, textDecoration: "none" }}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 30, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.1)", fontSize: 13, color: "#94a3b8", textAlign: "center" }}>
          © {new Date().getFullYear()} {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
