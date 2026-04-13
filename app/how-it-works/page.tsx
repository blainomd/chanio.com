import Nav from "../components/Nav";
import Footer from "../components/Footer";

const STEPS = {
  Passive: [
    {
      step: "01",
      title: "Install the extension",
      desc: "Add chanio to Chrome in one click. No account required to start.",
    },
    {
      step: "02",
      title: "Browse normally",
      desc: "chanio runs quietly in the background. It watches which sites you visit and how long you stay.",
    },
    {
      step: "03",
      title: "Your channel map builds",
      desc: "After a week, open chanio. You'll see a map of your actual browsing patterns — organized into channels.",
    },
  ],
  Save: [
    {
      step: "01",
      title: "Click the chanio icon on any page",
      desc: "A one-click save that captures the page, your scroll position, and the context around what you were reading.",
    },
    {
      step: "02",
      title: "chanio extracts the signal",
      desc: "Not just the URL — the topic, the author, the claims, the date. Context that a bookmark never captures.",
    },
    {
      step: "03",
      title: "Find it again, actually",
      desc: "Search by topic, by channel, or by what you remember reading. chanio surfaces the right save, not just the last one.",
    },
  ],
  Explore: [
    {
      step: "01",
      title: "Open Explore mode",
      desc: "Tell chanio what you want to know. \"Find me the best sources on magnesium and sleep.\" Plain language. No boolean operators.",
    },
    {
      step: "02",
      title: "chanio cross-references your channels",
      desc: "It looks at what you've already visited, what your channel network trusts, and what you've never seen.",
    },
    {
      step: "03",
      title: "You get a curated shortlist",
      desc: "Five to ten links, ranked by relevance to your actual interests. Not the algorithm's interests.",
    },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(13,115,119,0.12)",
              border: "1px solid rgba(13,115,119,0.3)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
            }}
          >
            <span style={{ fontSize: 12, color: "#0D7377", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              How it works
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 900,
              letterSpacing: "-2px",
              color: "#E8EDF2",
              marginBottom: 20,
              lineHeight: 1.05,
            }}
          >
            Three modes.
            <br />
            <span style={{ color: "#0D7377" }}>One memory layer.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#8899A6",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            chanio adapts to how you actually browse. Start passive. Escalate when you need more.
          </p>
        </section>

        {/* Mode sections */}
        {Object.entries(STEPS).map(([mode, steps], i) => (
          <section
            key={mode}
            style={{
              background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              padding: "80px 24px",
            }}
          >
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 80,
                  alignItems: "center",
                }}
              >
                {/* Left: mode info */}
                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "rgba(13,115,119,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {mode === "Passive" && (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="4" stroke="#0D7377" strokeWidth="1.5" />
                          <circle cx="10" cy="10" r="8" stroke="#0D7377" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                        </svg>
                      )}
                      {mode === "Save" && (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M5 3h10a1 1 0 011 1v12l-6-2.5L4 16V4a1 1 0 011-1z" stroke="#0D7377" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                      )}
                      {mode === "Explore" && (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="7" stroke="#0D7377" strokeWidth="1.5" />
                          <circle cx="10" cy="10" r="2" fill="#0D7377" />
                          <path d="M13 7l-3 3" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>
                    <h2
                      style={{
                        fontSize: "clamp(24px, 3.5vw, 40px)",
                        fontWeight: 900,
                        letterSpacing: "-1px",
                        color: "#E8EDF2",
                        margin: 0,
                      }}
                    >
                      {mode}
                    </h2>
                  </div>

                  <p style={{ fontSize: 16, color: "#8899A6", lineHeight: 1.7, marginBottom: 0 }}>
                    {mode === "Passive" &&
                      "The default mode. chanio watches as you browse, building a map of your actual interests — no effort required."}
                    {mode === "Save" &&
                      "When you find something worth keeping, one click captures everything that matters. Not just the link."}
                    {mode === "Explore" &&
                      "Pro mode. When passive isn't enough, Explore actively surfaces what you haven't found yet — personalized to your channel map."}
                  </p>
                </div>

                {/* Right: steps */}
                <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                    {steps.map((s, idx) => (
                      <div
                        key={s.step}
                        style={{
                          display: "flex",
                          gap: 20,
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 10,
                            background: "rgba(13,115,119,0.1)",
                            border: "1px solid rgba(13,115,119,0.3)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 13,
                            fontWeight: 800,
                            color: "#0D7377",
                            flexShrink: 0,
                          }}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <h3 style={{ fontSize: 16, fontWeight: 700, color: "#E8EDF2", marginBottom: 6 }}>
                            {s.title}
                          </h3>
                          <p style={{ fontSize: 14, color: "#8899A6", lineHeight: 1.6, margin: 0 }}>
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <style>{`
              @media (max-width: 768px) {
                .how-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </section>
        ))}

        {/* CTA */}
        <section
          style={{
            textAlign: "center",
            padding: "80px 24px",
            background: "linear-gradient(135deg, rgba(13,115,119,0.12) 0%, rgba(107,76,240,0.08) 100%)",
            borderTop: "1px solid rgba(13,115,119,0.2)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "#E8EDF2",
              letterSpacing: "-1.5px",
              marginBottom: 20,
            }}
          >
            Start with Passive.
            <br />
            <span style={{ color: "#0D7377" }}>It costs nothing.</span>
          </h2>
          <p style={{ fontSize: 17, color: "#8899A6", marginBottom: 40, maxWidth: 440, margin: "0 auto 40px" }}>
            Free to install. No credit card. Upgrade when you want more.
          </p>
          <a
            href="/"
            style={{
              background: "#0D7377",
              color: "white",
              padding: "14px 36px",
              borderRadius: 10,
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 700,
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
