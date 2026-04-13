import Nav from "../components/Nav";
import Footer from "../components/Footer";

const STEPS = [
  {
    num: "01",
    title: "Add one script tag",
    desc: "Paste the chanio script into your site's <head> or before </body>. That's the entire integration.",
    code: '<script src="https://chanio.com/sdk.js" data-site="yoursite.com"></script>',
  },
  {
    num: "02",
    title: "Declare your channel",
    desc: "Add a single data attribute to tell chanio which channel your content belongs to. chanio handles the rest.",
    code: '<script src="https://chanio.com/sdk.js"\n  data-site="yoursite.com"\n  data-channel="health">\n</script>',
  },
  {
    num: "03",
    title: "Start receiving channel signals",
    desc: "Within 48 hours, your site will appear in chanio users' channel maps. Your dashboard shows engagement trends, topic clusters, and return patterns.",
    code: null,
  },
];

const BENEFITS = [
  {
    title: "Channel signal analytics",
    desc: "See which topics on your site get saved, how often users return, and what they're exploring before they reach you.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 20l4-8 4 4 4-6 4 10" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Trusted channel membership",
    desc: "Sites in the chanio network get a \"trusted source\" badge in user channel maps. Editorial quality, not domain authority.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C17.5 22.15 21 17.25 21 12V6L12 2z" stroke="#0D7377" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8.5 12l2.5 2.5 4.5-5" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Return reader insights",
    desc: "chanio tracks not just visits but saves and returns. See which articles people come back to — and which they forget.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16M4 12h10M4 17h13" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Zero cookies. Zero tracking pixels.",
    desc: "chanio uses no third-party cookies and sets no tracking pixels. You get signal without the compliance headache.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#0D7377" strokeWidth="1.5" />
        <path d="M9 9l6 6M15 9l-6 6" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const CHANNELS = ["health", "music", "finance", "wellness", "identity", "knowledge", "news", "science", "tech"];

export default function ForSitesPage() {
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
              For site owners
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
            One script tag.
            <br />
            <span style={{ color: "#0D7377" }}>Your readers remember you.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#8899A6",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Add chanio to your site and become part of the network. No backend changes. No user data collected by us. Just channel signals.
          </p>
        </section>

        {/* Integration steps */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 800,
              color: "#E8EDF2",
              letterSpacing: "-0.5px",
              marginBottom: 48,
              textAlign: "center",
            }}
          >
            Integration in 3 steps
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "32px",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 24,
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(13,115,119,0.15)",
                    border: "1px solid rgba(13,115,119,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 900,
                    color: "#0D7377",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#E8EDF2", marginBottom: 8 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "#8899A6", lineHeight: 1.6, marginBottom: step.code ? 16 : 0 }}>
                    {step.desc}
                  </p>
                  {step.code && (
                    <pre
                      style={{
                        background: "rgba(0,0,0,0.4)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 10,
                        padding: "16px 20px",
                        fontSize: 13,
                        color: "#0D7377",
                        overflowX: "auto",
                        margin: 0,
                        lineHeight: 1.6,
                        fontFamily: "ui-monospace, monospace",
                      }}
                    >
                      {step.code}
                    </pre>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
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
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "#E8EDF2",
                letterSpacing: "-1px",
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              What you get
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "#8899A6",
                fontSize: 17,
                maxWidth: 480,
                margin: "0 auto 56px",
                lineHeight: 1.6,
              }}
            >
              chanio gives site owners signal they can&apos;t get from Google Analytics.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: "28px",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: "rgba(13,115,119,0.1)",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    {b.icon}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#E8EDF2", marginBottom: 8 }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#8899A6", lineHeight: 1.6, margin: 0 }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported channels */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 36px)",
              fontWeight: 800,
              color: "#E8EDF2",
              letterSpacing: "-0.5px",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Supported channels
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#8899A6",
              fontSize: 16,
              marginBottom: 40,
            }}
          >
            Use one of these values for your <code style={{ color: "#0D7377", background: "rgba(13,115,119,0.1)", padding: "2px 6px", borderRadius: 4, fontSize: 13 }}>data-channel</code> attribute.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {CHANNELS.map((ch) => (
              <code
                key={ch}
                style={{
                  background: "rgba(13,115,119,0.08)",
                  border: "1px solid rgba(13,115,119,0.25)",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 14,
                  color: "#0D7377",
                  fontFamily: "ui-monospace, monospace",
                  fontWeight: 600,
                }}
              >
                &quot;{ch}&quot;
              </code>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "linear-gradient(135deg, rgba(13,115,119,0.15) 0%, rgba(107,76,240,0.1) 100%)",
            borderTop: "1px solid rgba(13,115,119,0.2)",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "#E8EDF2",
              letterSpacing: "-1.5px",
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Join the network.
            <br />
            <span style={{ color: "#0D7377" }}>One script tag.</span>
          </h2>
          <p style={{ fontSize: 17, color: "#8899A6", maxWidth: 460, margin: "0 auto 40px", lineHeight: 1.6 }}>
            Free for site owners. Always. We want the best content in the network.
          </p>
          <div
            style={{
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "20px 28px",
              display: "inline-block",
              marginBottom: 32,
              maxWidth: 540,
              width: "100%",
            }}
          >
            <code style={{ fontSize: 14, color: "#0D7377", fontFamily: "ui-monospace, monospace" }}>
              {'<script src="https://chanio.com/sdk.js" data-site="yoursite.com"></script>'}
            </code>
          </div>
          <br />
          <a
            href="/network"
            style={{
              background: "#0D7377",
              color: "white",
              padding: "12px 28px",
              borderRadius: 10,
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            See the full network
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
