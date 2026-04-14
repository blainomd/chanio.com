"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(10,20,32,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: 22, fontWeight: 800, color: "#E8EDF2", letterSpacing: "-0.5px" }}>
            chan
          </span>
          <span style={{ fontSize: 22, fontWeight: 800, color: "#6B4CF0", letterSpacing: "-0.5px" }}>
            io
          </span>
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="desktop-nav"
        >
          {[
            ["Surf", "/surf", true],
            ["How it works", "/how-it-works", false],
            ["Network", "/network", false],
            ["Pricing", "/pricing", false],
            ["For sites", "/for-sites", false],
          ].map(([label, href, highlight]) => (
            <Link
              key={href as string}
              href={href as string}
              style={{
                color: highlight ? "#6B4CF0" : "#8899A6",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: highlight ? 700 : 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E8EDF2")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = highlight ? "#6B4CF0" : "#8899A6")
              }
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#get-chanio"
          style={{
            background: "#0D7377",
            color: "white",
            padding: "8px 20px",
            borderRadius: 8,
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 600,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Get chanio
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#E8EDF2",
            cursor: "pointer",
            padding: 4,
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(10,20,32,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 24px 24px",
          }}
        >
          {[
            ["Surf", "/surf", true],
            ["How it works", "/how-it-works", false],
            ["Network", "/network", false],
            ["Pricing", "/pricing", false],
            ["For sites", "/for-sites", false],
          ].map(([label, href, highlight]) => (
            <Link
              key={href as string}
              href={href as string}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: highlight ? "#6B4CF0" : "#8899A6",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: highlight ? 700 : 500,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#get-chanio"
            onClick={() => setOpen(false)}
            style={{
              display: "inline-block",
              marginTop: 16,
              background: "#0D7377",
              color: "white",
              padding: "10px 24px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Get chanio
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
