import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Welcome to chanio — installed",
  description:
    "chanio is installed. The bar lives at the bottom of every page you visit. Save what matters, surf what you haven't seen.",
};

const NEXT_STEPS: Array<{ n: number; title: string; body: string; key?: string }> = [
  {
    n: 1,
    title: "Look down",
    body:
      "The chanio bar is now at the bottom of every page you visit. It learns your channels passively as you browse — nothing to set up.",
  },
  {
    n: 2,
    title: "Save the page you were already going to",
    body:
      "Click the download icon in the bar — or just press the keyboard shortcut. Your saves build a personal catalog only you can see.",
    key: "⌘⇧S  /  Ctrl+Shift+S",
  },
  {
    n: 3,
    title: "Surf",
    body:
      "Click Surf in the bar. chanio opens a curated page from the independent web you haven't visited yet. Better than the algorithm.",
  },
  {
    n: 4,
    title: "Ask Sage",
    body:
      "Click the chat bubble — Sage knows about the page you're on, your saves, and the broader web. Ask anything.",
    key: "⌘⇧C  /  Ctrl+Shift+C",
  },
];

export default function WelcomePage() {
  return (
    <>
      <Nav />
      <main style={{ background: "#0A0E14", color: "#E8EDF2", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            padding: "120px 24px 80px",
            textAlign: "center",
            borderBottom: "1px solid #1a3040",
            background:
              "radial-gradient(ellipse at center top, rgba(13,115,119,0.12) 0%, transparent 60%)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 14px",
              background: "rgba(13,115,119,0.15)",
              border: "1px solid rgba(13,115,119,0.4)",
              borderRadius: "999px",
              color: "#0D7377",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#0D7377",
                boxShadow: "0 0 12px #0D7377",
              }}
            />
            chanio is live
          </div>
          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "780px",
              margin: "0 auto 24px",
            }}
          >
            You're in.
            <br />
            <span style={{ color: "#0D7377" }}>Now look down.</span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#9BAEC0",
              maxWidth: "560px",
              margin: "0 auto 40px",
            }}
          >
            The chanio bar is at the bottom of every page you visit from now on.
            It remembers everything. You decide what matters.
          </p>
          <div
            style={{
              display: "inline-flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a
              href="https://www.are.na"
              target="_blank"
              rel="noopener"
              style={{
                padding: "14px 28px",
                background: "#0D7377",
                color: "#0A0E14",
                fontWeight: 700,
                borderRadius: "999px",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Try it on a real site →
            </a>
            <a
              href="/surf"
              style={{
                padding: "14px 28px",
                background: "transparent",
                border: "1px solid #1a3040",
                color: "#E8EDF2",
                fontWeight: 600,
                borderRadius: "999px",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              See what's surfable
            </a>
          </div>
        </section>

        {/* Next steps */}
        <section style={{ padding: "80px 24px", maxWidth: "780px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#0D7377",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Four things to try right now
          </h2>
          {NEXT_STEPS.map((s) => (
            <div
              key={s.n}
              style={{
                display: "flex",
                gap: "24px",
                padding: "24px 0",
                borderBottom: "1px solid #1a3040",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(13,115,119,0.15)",
                  border: "1px solid rgba(13,115,119,0.4)",
                  color: "#0D7377",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                {s.n}
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    color: "#E8EDF2",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#9BAEC0" }}>
                  {s.body}
                </p>
                {s.key && (
                  <code
                    style={{
                      display: "inline-block",
                      marginTop: "12px",
                      padding: "6px 12px",
                      background: "#0A1420",
                      border: "1px solid #1a3040",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontFamily: "SF Mono, Menlo, monospace",
                      color: "#0D7377",
                    }}
                  >
                    {s.key}
                  </code>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Closing */}
        <section
          style={{
            padding: "60px 24px 100px",
            textAlign: "center",
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#9BAEC0",
              marginBottom: "24px",
            }}
          >
            Nothing leaves your machine unless you save it. Your catalog is yours.
            chanio is built by one person at{" "}
            <a
              href="https://harnesshealth.ai"
              style={{ color: "#0D7377", textDecoration: "none" }}
            >
              harnesshealth.ai
            </a>
            .
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "#3a5a70",
              fontFamily: "SF Mono, Menlo, monospace",
            }}
          >
            v0.3.0 · runs on every URL · made for the independent web
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
