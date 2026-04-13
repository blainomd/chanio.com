"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 24px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 40,
        }}
      >
        <div>
          <div style={{ marginBottom: 12 }}>
            <span style={{ fontSize: 20, fontWeight: 800, color: "#E8EDF2" }}>chan</span>
            <span style={{ fontSize: 20, fontWeight: 800, color: "#6B4CF0" }}>io</span>
          </div>
          <p style={{ fontSize: 13, color: "#8899A6", lineHeight: 1.6, maxWidth: 200 }}>
            Making the web surfable and memorable.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: "#8899A6", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            Product
          </h4>
          {[
            ["How it works", "/how-it-works"],
            ["Network", "/network"],
            ["Pricing", "/pricing"],
            ["For sites", "/for-sites"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "block",
                color: "#8899A6",
                textDecoration: "none",
                fontSize: 14,
                marginBottom: 10,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E8EDF2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8899A6")}
            >
              {label}
            </Link>
          ))}
        </div>

        <div>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: "#8899A6", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            Channels
          </h4>
          {["Health", "Music", "Finance", "Wellness", "Identity"].map((c) => (
            <span
              key={c}
              style={{
                display: "block",
                color: "#8899A6",
                fontSize: 14,
                marginBottom: 10,
              }}
            >
              {c}
            </span>
          ))}
        </div>

        <div>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: "#8899A6", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
            Add to your site
          </h4>
          <code
            style={{
              display: "block",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 6,
              padding: "8px 12px",
              fontSize: 11,
              color: "#0D7377",
              wordBreak: "break-all",
            }}
          >
            {'<script src="https://chanio.com/sdk.js"></script>'}
          </code>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "32px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.04)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ fontSize: 12, color: "#8899A6" }}>
          &copy; {new Date().getFullYear()} chanio. All rights reserved.
        </p>
        <p style={{ fontSize: 12, color: "#8899A6" }}>
          Privacy &middot; Terms
        </p>
      </div>
    </footer>
  );
}
