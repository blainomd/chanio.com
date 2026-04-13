import Nav from "../components/Nav";
import Footer from "../components/Footer";

const FREE_FEATURES = [
  { label: "Passive mode", detail: "Unlimited" },
  { label: "Save mode", detail: "50 saves / month" },
  { label: "Channels", detail: "3 channels" },
  { label: "Memory window", detail: "7 days" },
  { label: "Channel map", detail: "Basic view" },
  { label: "Explore mode", detail: null },
  { label: "Weekly digest", detail: null },
  { label: "Claude write-back", detail: null },
  { label: "Export your data", detail: null },
  { label: "Priority support", detail: null },
];

const PRO_FEATURES = [
  { label: "Passive mode", detail: "Unlimited" },
  { label: "Save mode", detail: "Unlimited" },
  { label: "Channels", detail: "All channels" },
  { label: "Memory window", detail: "90 days" },
  { label: "Channel map", detail: "Full map + insights" },
  { label: "Explore mode", detail: "Unlimited" },
  { label: "Weekly digest", detail: "Email summary" },
  { label: "Claude write-back", detail: "Connector API" },
  { label: "Export your data", detail: "JSON / CSV" },
  { label: "Priority support", detail: "Email + chat" },
];

export default function PricingPage() {
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
              Pricing
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
            Free forever.
            <br />
            <span style={{ color: "#0D7377" }}>Pro when you need it.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#8899A6",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            No trials that expire. No credit card required. Free is genuinely free.
          </p>
        </section>

        {/* Pricing cards */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "20px 24px 80px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {/* Free */}
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 24,
                padding: "40px 36px",
              }}
            >
              <h2 style={{ fontSize: 15, fontWeight: 700, color: "#8899A6", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Free
              </h2>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 56, fontWeight: 900, color: "#E8EDF2", letterSpacing: "-2px" }}>$0</span>
              </div>
              <p style={{ fontSize: 14, color: "#8899A6", marginBottom: 32 }}>
                Forever. No expiry. No credit card.
              </p>
              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "rgba(255,255,255,0.07)",
                  color: "#E8EDF2",
                  padding: "14px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 700,
                  marginBottom: 36,
                }}
              >
                Add to Chrome
              </a>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {FREE_FEATURES.map((f) => (
                  <li
                    key={f.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "11px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span style={{ fontSize: 14, color: f.detail ? "#E8EDF2" : "#4A5568" }}>
                      {f.label}
                    </span>
                    {f.detail ? (
                      <span style={{ fontSize: 13, color: "#0D7377", fontWeight: 600 }}>{f.detail}</span>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 8h8" stroke="#4A5568" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro */}
            <div
              style={{
                background: "rgba(13,115,119,0.07)",
                border: "1.5px solid rgba(13,115,119,0.4)",
                borderRadius: 24,
                padding: "40px 36px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#0D7377",
                  color: "white",
                  padding: "5px 20px",
                  borderRadius: 100,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Most popular
              </div>

              <h2 style={{ fontSize: 15, fontWeight: 700, color: "#0D7377", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Pro
              </h2>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 56, fontWeight: 900, color: "#E8EDF2", letterSpacing: "-2px" }}>$9.99</span>
                <span style={{ fontSize: 16, color: "#8899A6", fontWeight: 400 }}> / mo</span>
              </div>
              <p style={{ fontSize: 14, color: "#8899A6", marginBottom: 32 }}>
                Billed monthly. Cancel anytime.
              </p>
              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#0D7377",
                  color: "white",
                  padding: "14px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 700,
                  marginBottom: 36,
                }}
              >
                Start free trial
              </a>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {PRO_FEATURES.map((f) => (
                  <li
                    key={f.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "11px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span style={{ fontSize: 14, color: "#E8EDF2" }}>{f.label}</span>
                    {f.detail ? (
                      <span style={{ fontSize: 13, color: "#0D7377", fontWeight: 600 }}>{f.detail}</span>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l4 4 6-7" stroke="#0D7377" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          style={{
            background: "rgba(255,255,255,0.02)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "80px 24px",
          }}
        >
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "#E8EDF2",
                letterSpacing: "-1px",
                marginBottom: 48,
                textAlign: "center",
              }}
            >
              Questions
            </h2>

            {[
              {
                q: "Is the free tier really free forever?",
                a: "Yes. Passive mode is unlimited on the free tier. We'll never flip a switch and start charging for what's currently free.",
              },
              {
                q: "What is Claude write-back?",
                a: "Pro users can connect chanio to Claude Desktop via our MCP connector. When you ask Claude about something you've browsed, chanio writes the relevant context back into the conversation automatically.",
              },
              {
                q: "Where does my browsing data go?",
                a: "Your data is stored locally and optionally synced to your encrypted chanio account. We do not sell it, share it with advertisers, or use it to train AI models without your explicit opt-in.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. Cancel from your account settings. You'll keep Pro access until the end of your billing period.",
              },
              {
                q: "Do you have a team or enterprise plan?",
                a: "Not yet. If you're interested in chanio for a team, reach out and we'll work something out.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  paddingBottom: 28,
                  marginBottom: 28,
                }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#E8EDF2", marginBottom: 10 }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: 15, color: "#8899A6", lineHeight: 1.7, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
