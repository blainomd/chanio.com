import Nav from "./components/Nav";
import Footer from "./components/Footer";

const CHANNELS = [
  {
    name: "Health",
    color: "#0D7377",
    gradient: "linear-gradient(135deg, rgba(13,115,119,0.3) 0%, rgba(13,115,119,0.05) 100%)",
    sites: ["WebMD", "PubMed", "Examine", "Healthline"],
    desc: "Evidence-based health research, drug info, clinical studies.",
  },
  {
    name: "Music",
    color: "#6B4CF0",
    gradient: "linear-gradient(135deg, rgba(107,76,240,0.3) 0%, rgba(107,76,240,0.05) 100%)",
    sites: ["Spotify", "Bandcamp", "Pitchfork", "Discogs"],
    desc: "Artists, albums, reviews, and the music you've been meaning to find.",
  },
  {
    name: "Finance",
    color: "#F0924C",
    gradient: "linear-gradient(135deg, rgba(240,146,76,0.3) 0%, rgba(240,146,76,0.05) 100%)",
    sites: ["Yahoo Finance", "Morningstar", "SEC EDGAR", "Bloomberg"],
    desc: "Markets, filings, earnings, and portfolio research.",
  },
  {
    name: "Wellness",
    color: "#4CF0A8",
    gradient: "linear-gradient(135deg, rgba(76,240,168,0.3) 0%, rgba(76,240,168,0.05) 100%)",
    sites: ["Examine", "Cronometer", "InsideTracker", "Whoop"],
    desc: "Nutrition, sleep, movement, and biometric tracking.",
  },
  {
    name: "Identity",
    color: "#F04C8A",
    gradient: "linear-gradient(135deg, rgba(240,76,138,0.3) 0%, rgba(240,76,138,0.05) 100%)",
    sites: ["LinkedIn", "AngelList", "Crunchbase", "Twitter"],
    desc: "Professional networks, reputation, and digital presence.",
  },
];

const ECOSYSTEM_SITES = [
  "WebMD", "Spotify", "Bandcamp", "PubMed", "Yahoo Finance",
  "Pitchfork", "Examine", "Morningstar", "Healthline", "Discogs",
  "SEC EDGAR", "InsideTracker", "Cronometer", "Whoop", "Bloomberg",
  "LinkedIn", "AngelList", "Crunchbase", "Mayo Clinic", "Medscape",
  "GitHub", "Stack Overflow", "Hacker News", "Reddit", "Wikipedia", "YouTube",
];

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "100px 24px 80px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 600,
              height: 300,
              background: "radial-gradient(ellipse at center, rgba(13,115,119,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(13,115,119,0.12)",
              border: "1px solid rgba(13,115,119,0.3)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#0D7377",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 13, color: "#0D7377", fontWeight: 600 }}>
              Browser extension — free to start
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              color: "#E8EDF2",
              maxWidth: 900,
              margin: "0 auto 24px",
            }}
          >
            Making the web{" "}
            <span style={{ color: "#0D7377" }}>surfable</span> and{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6B4CF0, #0D7377)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              memorable.
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 22px)",
              color: "#8899A6",
              fontWeight: 300,
              maxWidth: 560,
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}
          >
            Your AI finds your channels. You browse. It remembers.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            id="get-chanio"
          >
            <a
              href="#"
              style={{
                background: "#0D7377",
                color: "white",
                padding: "14px 32px",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M15 8A7 7 0 112 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M11 1l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Add to Chrome — free
            </a>
            <a
              href="/how-it-works"
              style={{
                background: "transparent",
                color: "#E8EDF2",
                padding: "14px 32px",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 600,
                border: "1.5px solid rgba(255,255,255,0.15)",
              }}
            >
              See how it works
            </a>
          </div>
        </section>

        {/* Three Modes */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              marginBottom: 16,
              color: "#E8EDF2",
            }}
          >
            Three ways to surf
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#8899A6",
              fontSize: 17,
              maxWidth: 500,
              margin: "0 auto 56px",
              lineHeight: 1.6,
            }}
          >
            chanio adapts to how you actually browse — from passive observation to active exploration.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                name: "Passive",
                desc: "Watches as you browse. Quietly builds your channel map in the background.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="6" stroke="#0D7377" strokeWidth="2" />
                    <circle cx="14" cy="14" r="11" stroke="#0D7377" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
                    <circle cx="14" cy="14" r="2.5" fill="#0D7377" />
                  </svg>
                ),
              },
              {
                name: "Save",
                desc: "Bookmark a page. chanio remembers the context, not just the URL.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M7 4h14a2 2 0 012 2v16l-9-4-9 4V6a2 2 0 012-2z" stroke="#0D7377" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                name: "Explore",
                desc: "Tell chanio what you want. It surfaces what you haven't found yet.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="10" stroke="#0D7377" strokeWidth="2" />
                    <path d="M14 4v2M14 22v2M4 14h2M22 14h2" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="14" cy="14" r="3" fill="#0D7377" />
                    <path d="M18 10l-4 4" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((mode) => (
              <div
                key={mode.name}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "32px",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    background: "rgba(13,115,119,0.1)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  {mode.icon}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#E8EDF2", marginBottom: 8 }}>
                  {mode.name}
                </h3>
                <p style={{ fontSize: 15, color: "#8899A6", lineHeight: 1.6 }}>{mode.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pillars */}
        <section
          style={{
            background: "rgba(255,255,255,0.02)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "80px 24px",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 48,
              }}
            >
              {[
                {
                  name: "Memory",
                  desc: "Everything you browse compounds into a personal knowledge layer.",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="7" height="7" rx="1" stroke="#0D7377" strokeWidth="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1" stroke="#0D7377" strokeWidth="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1" stroke="#0D7377" strokeWidth="1.5" />
                      <path d="M14 17.5h7M17.5 14v7" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  name: "Trust",
                  desc: "Your data stays yours. No ads. No resale. Ever.",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C17.5 22.15 21 17.25 21 12V6L12 2z" stroke="#0D7377" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M8.5 12l2.5 2.5 4.5-5" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  name: "Control",
                  desc: "One dashboard. Pause, delete, or export everything, anytime.",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" stroke="#0D7377" strokeWidth="1.5" />
                      <path d="M19.07 4.93l-1.42 1.42M4.93 4.93l1.42 1.42M19.07 19.07l-1.42-1.42M4.93 19.07l1.42-1.42M21 12h-2M5 12H3M12 3V5M12 19v2" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                },
              ].map((p) => (
                <div key={p.name} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: "rgba(13,115,119,0.1)",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#E8EDF2", marginBottom: 6 }}>{p.name}</h3>
                    <p style={{ fontSize: 14, color: "#8899A6", lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channels */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-1px",
                marginBottom: 16,
                color: "#E8EDF2",
                textAlign: "center",
              }}
            >
              Channels you&apos;ll discover
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#8899A6",
                fontSize: 17,
                maxWidth: 500,
                margin: "0 auto 56px",
                lineHeight: 1.6,
              }}
            >
              Health is one channel among many. chanio works wherever you browse.
            </p>

            <div
              style={{
                display: "flex",
                gap: 20,
                overflowX: "auto",
                paddingBottom: 16,
              }}
            >
              {CHANNELS.map((ch) => (
                <div
                  key={ch.name}
                  style={{
                    minWidth: 280,
                    background: ch.gradient,
                    border: `1px solid ${ch.color}30`,
                    borderRadius: 16,
                    padding: 28,
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      background: `${ch.color}20`,
                      border: `1px solid ${ch.color}40`,
                      borderRadius: 100,
                      padding: "4px 12px",
                      fontSize: 12,
                      fontWeight: 700,
                      color: ch.color,
                      marginBottom: 16,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {ch.name}
                  </div>
                  <p style={{ fontSize: 14, color: "#8899A6", lineHeight: 1.6, marginBottom: 20 }}>
                    {ch.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {ch.sites.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: 12,
                          color: "#E8EDF2",
                          background: "rgba(255,255,255,0.06)",
                          padding: "4px 10px",
                          borderRadius: 6,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem grid */}
        <section
          style={{
            background: "rgba(255,255,255,0.02)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "80px 24px",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                marginBottom: 16,
                color: "#E8EDF2",
              }}
            >
              Works on 26+ sites
            </h2>
            <p style={{ textAlign: "center", color: "#8899A6", fontSize: 16, marginBottom: 48 }}>
              And growing every week.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: 12,
              }}
            >
              {ECOSYSTEM_SITES.map((site) => (
                <div
                  key={site}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 10,
                    padding: "14px 16px",
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#8899A6",
                  }}
                >
                  {site}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing preview */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              marginBottom: 16,
              color: "#E8EDF2",
            }}
          >
            Start free. Go deeper with Pro.
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#8899A6",
              fontSize: 17,
              maxWidth: 440,
              margin: "0 auto 56px",
              lineHeight: 1.6,
            }}
          >
            Free forever for the basics. Pro unlocks Explore mode, all channels, and write-back.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "40px 32px",
              }}
            >
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#8899A6", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Free
              </h3>
              <div style={{ fontSize: 48, fontWeight: 900, color: "#E8EDF2", letterSpacing: "-2px", marginBottom: 24 }}>
                $0
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                {["Passive mode, unlimited", "50 saves / month", "3 channels", "7-day memory window"].map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#8899A6" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-7" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "rgba(255,255,255,0.06)",
                  color: "#E8EDF2",
                  padding: "12px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                Add to Chrome
              </a>
            </div>

            <div
              style={{
                background: "rgba(13,115,119,0.08)",
                border: "1.5px solid rgba(13,115,119,0.4)",
                borderRadius: 20,
                padding: "40px 32px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#0D7377",
                  color: "white",
                  padding: "4px 16px",
                  borderRadius: 100,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Most popular
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0D7377", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Pro
              </h3>
              <div style={{ fontSize: 48, fontWeight: 900, color: "#E8EDF2", letterSpacing: "-2px", marginBottom: 24 }}>
                $9.99
                <span style={{ fontSize: 16, fontWeight: 400, color: "#8899A6" }}>/mo</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                {["Explore mode, unlimited", "All channels", "Unlimited saves", "Weekly digest email", "Claude connector write-back", "90-day memory window"].map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#8899A6" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-7" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#0D7377",
                  color: "white",
                  padding: "12px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Start free trial
              </a>
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section
          style={{
            background: "linear-gradient(135deg, rgba(13,115,119,0.15) 0%, rgba(107,76,240,0.1) 100%)",
            borderTop: "1px solid rgba(13,115,119,0.2)",
            borderBottom: "1px solid rgba(13,115,119,0.2)",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              color: "#E8EDF2",
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            The web has always been surfable.
            <br />
            <span style={{ color: "#0D7377" }}>Now it&apos;s memorable.</span>
          </h2>
          <p style={{ fontSize: 18, color: "#8899A6", maxWidth: 500, margin: "0 auto 40px", lineHeight: 1.6 }}>
            Join the early access list. Free to start.
          </p>
          <a
            href="#get-chanio"
            style={{
              background: "#0D7377",
              color: "white",
              padding: "16px 40px",
              borderRadius: 12,
              textDecoration: "none",
              fontSize: 18,
              fontWeight: 800,
              display: "inline-block",
            }}
          >
            Add to Chrome — free
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
