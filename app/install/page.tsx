import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Install chanio — 60-second dev-mode setup",
  description:
    "Install the chanio browser extension. Unzip, open chrome://extensions, toggle Developer mode, Load unpacked. Done.",
};

const STEPS: Array<{ n: number; title: string; body: string }> = [
  {
    n: 1,
    title: "Download the extension",
    body:
      "One zip, 13 KB. Unzip it somewhere you can find again — the folder stays on your machine.",
  },
  {
    n: 2,
    title: "Open chrome://extensions",
    body:
      "Paste that into your address bar. Same menu for Chrome, Arc, Brave, and Edge.",
  },
  {
    n: 3,
    title: "Toggle Developer mode",
    body:
      "Top-right switch. This unlocks the Load unpacked button. You'll toggle it off once we're in the Chrome Web Store.",
  },
  {
    n: 4,
    title: "Click Load unpacked → pick the chanio folder",
    body:
      "Select the unzipped chanio-extension folder (the one with manifest.json inside). chanio installs instantly.",
  },
  {
    n: 5,
    title: "Pin chanio and start surfing",
    body:
      "Click the puzzle icon in your toolbar, pin chanio, then browse like normal. It learns your channels passively.",
  },
];

export default function InstallPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "#0A0E14", color: "#E8EDF2", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "120px 24px 40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: 11,
              fontWeight: 800,
              color: "#4CF0A8",
              marginBottom: 16,
            }}
          >
            Developer preview · 13 KB · zero telemetry
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 68px)",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            Install chanio in <span style={{ color: "#4CF0A8" }}>60 seconds</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(232,237,242,0.7)",
              maxWidth: 620,
              margin: "0 auto 36px",
              lineHeight: 1.6,
            }}
          >
            chanio is in Chrome Web Store review. While we wait, you can install the dev build
            directly. It's the same code that ships to the store — unzip, load, done.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/chanio-extension.zip"
              download
              style={{
                background: "#0D7377",
                color: "white",
                padding: "18px 36px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 17,
                fontWeight: 800,
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                boxShadow: "0 10px 40px rgba(13,115,119,0.35)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path d="M11 3v12m0 0l-5-5m5 5l5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 19h16" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              Download chanio-extension.zip
            </a>
            <a
              href="chrome://extensions"
              style={{
                background: "transparent",
                color: "#E8EDF2",
                padding: "18px 32px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 17,
                fontWeight: 700,
                border: "1.5px solid rgba(255,255,255,0.15)",
              }}
            >
              Open chrome://extensions
            </a>
          </div>
          <p style={{ fontSize: 13, color: "rgba(232,237,242,0.4)", marginTop: 24 }}>
            Works in Chrome, Arc, Brave, Edge, and Opera. Manifest V3. No background tracking.
          </p>
        </section>

        {/* Steps */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>
          <div style={{ display: "grid", gap: 16 }}>
            {STEPS.map((s) => (
              <div
                key={s.n}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "24px 28px",
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: 20,
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(76,240,168,0.12)",
                    border: "1.5px solid rgba(76,240,168,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    fontWeight: 900,
                    color: "#4CF0A8",
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 15, color: "rgba(232,237,242,0.7)", lineHeight: 1.6 }}>
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust */}
        <section
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          <div
            style={{
              background: "rgba(13,115,119,0.08)",
              border: "1.5px solid rgba(13,115,119,0.4)",
              borderRadius: 20,
              padding: "32px 36px",
            }}
          >
            <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, color: "#E8EDF2" }}>
              What chanio reads, and what it does not
            </h3>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                { k: "Reads", v: "Titles, URLs, visible text on pages you actively browse." },
                { k: "Stores", v: "Locally on your device. Nothing leaves unless you explicitly share." },
                { k: "Never touches", v: "Passwords, payment fields, private tabs, inputs flagged sensitive." },
                { k: "Open source", v: "Every line of content.js and background.js is readable in the zip." },
              ].map((row) => (
                <div
                  key={row.k}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "130px 1fr",
                    gap: 16,
                    fontSize: 14,
                    color: "rgba(232,237,242,0.8)",
                  }}
                >
                  <span style={{ fontWeight: 800, color: "#4CF0A8" }}>{row.k}</span>
                  <span>{row.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next step */}
        <section
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 24px 120px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontWeight: 800,
              color: "rgba(232,237,242,0.4)",
              marginBottom: 12,
            }}
          >
            After you install
          </p>
          <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 14 }}>
            Try the healthcare channel first
          </h3>
          <p style={{ fontSize: 16, color: "rgba(232,237,242,0.7)", marginBottom: 28, lineHeight: 1.6 }}>
            Visit any of the condition sites — hearthealth.help, hippain.help, memoryloss.help — and
            chanio starts building your quiet map. When you open a new conversation in Claude, your
            Sage already knows what you've been reading.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { name: "hearthealth.help", href: "https://hearthealth.help" },
              { name: "hippain.help", href: "https://hippain.help" },
              { name: "memoryloss.help", href: "https://memoryloss.help" },
              { name: "co-op.care", href: "https://co-op.care" },
            ].map((l) => (
              <a
                key={l.name}
                href={l.href}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 10,
                  padding: "12px 20px",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#E8EDF2",
                  textDecoration: "none",
                }}
              >
                {l.name}
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
