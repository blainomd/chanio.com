"use client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState } from "react";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TheShift />
        <WhatWeCapture />
        <FourLayers />
        <GapsAndExpansion />
        <HowItWorks />
        <Moat />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
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
          background:
            "radial-gradient(ellipse at center, rgba(107,76,240,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(107,76,240,0.12)",
          border: "1px solid rgba(107,76,240,0.3)",
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
            background: "#6B4CF0",
            display: "inline-block",
          }}
        />
        <span style={{ fontSize: 13, color: "#6B4CF0", fontWeight: 600 }}>
          Private beta &middot; waitlist open
        </span>
      </div>

      <h1
        style={{
          fontSize: "clamp(38px, 6.4vw, 76px)",
          fontWeight: 900,
          lineHeight: 1.04,
          letterSpacing: "-2px",
          color: "#E8EDF2",
          maxWidth: 1000,
          margin: "0 auto 28px",
        }}
      >
        Every session is building
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #6B4CF0, #0D7377)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          someone&apos;s knowledge graph.
        </span>
      </h1>

      <p
        style={{
          fontSize: "clamp(16px, 2.5vw, 20px)",
          color: "#8899A6",
          fontWeight: 300,
          maxWidth: 680,
          margin: "0 auto 16px",
          lineHeight: 1.6,
        }}
      >
        Every prompt you send to Claude, ChatGPT, or Gemini reveals what you
        care about, what you&apos;re building, what you&apos;re stuck on. Right
        now that signal lives on their servers.{" "}
        <strong style={{ color: "#E8EDF2", fontWeight: 500 }}>
          chanio compiles it nightly to your disk
        </strong>{" "}
        — a private knowledge graph you own, portable across every AI you use.
      </p>

      <p
        style={{
          fontSize: "clamp(14px, 2vw, 17px)",
          color: "#6B4CF0",
          fontWeight: 600,
          margin: "0 auto 48px",
          letterSpacing: "-0.2px",
        }}
      >
        Compute stays rented.{" "}
        <span style={{ color: "#0D7377" }}>Storage comes home.</span>
      </p>

      <div
        style={{
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#waitlist"
          style={{
            background: "#6B4CF0",
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
          Join the waitlist
        </a>
        <a
          href="#how-it-works"
          style={{
            background: "transparent",
            color: "#E8EDF2",
            padding: "14px 32px",
            borderRadius: 10,
            textDecoration: "none",
            fontSize: 16,
            fontWeight: 600,
            border: "1.5px solid rgba(13,115,119,0.4)",
          }}
        >
          See how it works
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* THE SHIFT                                                           */
/* ------------------------------------------------------------------ */
function TheShift() {
  return (
    <section
      style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#6B4CF0",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          The shift
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 4.5vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-1.2px",
            color: "#E8EDF2",
            marginBottom: 24,
            lineHeight: 1.15,
          }}
        >
          The last era was built on surveillance.
          <br />
          <span style={{ color: "#0D7377" }}>
            This one is built on attestation.
          </span>
        </h2>
        <p
          style={{
            fontSize: 18,
            color: "#8899A6",
            lineHeight: 1.7,
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          Surveillance infrastructure was optimized for extraction — your
          prompts trained their models, your patterns fed their graphs, your
          attention paid their bills. Attestation infrastructure is optimized
          for you: your context compiles to your disk, your knowledge graph
          travels with you across every AI, and the outputs that matter get
          signed by a physician or domain expert who puts their name on
          what&apos;s true. The AI drafts. A human attests. You carry the proof.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* WHAT WE CAPTURE                                                     */
/* ------------------------------------------------------------------ */
function WhatWeCapture() {
  const cards = [
    {
      label: "What chanio sees",
      color: "#6B4CF0",
      items: [
        "Prompts you send to Claude, ChatGPT, Gemini, Perplexity",
        "The follow-ups and corrections that refine your thinking",
        "The attachments you paste in — only with your consent",
      ],
    },
    {
      label: "What chanio does not see",
      color: "#334155",
      muted: true,
      items: [
        "Your general browsing history or cookies",
        "Your email, DMs, or social feeds",
        "Anything you haven't explicitly sent to an AI",
      ],
    },
  ];

  return (
    <section style={{ padding: "88px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#E8EDF2",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          A narrow capture — on purpose.
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#8899A6",
            fontSize: 17,
            maxWidth: 620,
            margin: "0 auto 48px",
            lineHeight: 1.6,
          }}
        >
          chanio only learns from what you choose to type into an AI. Nothing
          else. That&apos;s the honest line — and the reason the graph stays
          clean enough to trust.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {cards.map((c) => (
            <div
              key={c.label}
              style={{
                background: c.muted
                  ? "rgba(255,255,255,0.02)"
                  : "rgba(107,76,240,0.06)",
                border: `1px solid ${c.muted ? "rgba(255,255,255,0.07)" : "rgba(107,76,240,0.3)"}`,
                borderRadius: 16,
                padding: "28px 28px 24px",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: c.color,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {c.label}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {c.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 15,
                      color: c.muted ? "#5A6778" : "#C4CDD5",
                      lineHeight: 1.6,
                      display: "flex",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        color: c.color,
                        flexShrink: 0,
                        fontWeight: 700,
                      }}
                    >
                      {c.muted ? "—" : "•"}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FOUR LAYERS                                                         */
/* ------------------------------------------------------------------ */
function FourLayers() {
  const layers = [
    {
      name: "Domain",
      desc: "What you ask about — health, finance, music, code, relationships, the businesses you&apos;re building.",
    },
    {
      name: "Workflow",
      desc: "How you think through a problem — the questions you ask first, the frames you default to, the phrasings that come back.",
    },
    {
      name: "Behavioral",
      desc: "What pulls you back — topics you keep returning to, decisions you revisit, the stuff that won&apos;t leave you alone.",
    },
    {
      name: "Artifact",
      desc: "What you build from it — documents, code, plans, letters, decisions. The output of the conversation, not just the conversation.",
    },
  ];

  return (
    <section
      style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "88px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#E8EDF2",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Four layers of identity, from one stream.
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#8899A6",
            fontSize: 17,
            maxWidth: 620,
            margin: "0 auto 56px",
            lineHeight: 1.6,
          }}
        >
          Your AI chats are richer than any form or profile. chanio reads that
          stream four ways, so the graph actually knows you.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {layers.map((l, i) => (
            <div
              key={l.name}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#6B4CF0",
                  letterSpacing: "0.12em",
                  marginBottom: 10,
                }}
              >
                LAYER 0{i + 1}
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#E8EDF2",
                  marginBottom: 10,
                  letterSpacing: "-0.5px",
                }}
              >
                {l.name}
              </h3>
              <p
                style={{ fontSize: 15, color: "#8899A6", lineHeight: 1.65 }}
                dangerouslySetInnerHTML={{ __html: l.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* GAPS + EXPANSION  (the new section)                                 */
/* ------------------------------------------------------------------ */
function GapsAndExpansion() {
  const gaps = [
    {
      title: "Topics you circle without resolving",
      desc: "The same question, three different ways, across six chats. chanio flags the loop so you can finally close it.",
    },
    {
      title: "Questions you never followed up on",
      desc: "The thread you dropped mid-chat. The answer that raised a bigger question. chanio remembers the open ends.",
    },
    {
      title: "Adjacent territory you haven't entered",
      desc: "Concepts that sit one step away from what you already think about, and that the graph says you&apos;d probably want.",
    },
  ];

  const expansions = [
    {
      title: "Emerging passions",
      desc: "A new interest starts as three scattered prompts across a month. chanio spots the pattern before you do.",
    },
    {
      title: "Connections across silos",
      desc: "Two threads you treat as separate are actually the same idea. chanio draws the edge.",
    },
    {
      title: "The next frontier",
      desc: "Where the people who think like you go after they&apos;ve asked what you&apos;re asking. Not recommended — inferred.",
    },
  ];

  const Col = ({
    heading,
    label,
    items,
    color,
    tagBg,
  }: {
    heading: string;
    label: string;
    items: { title: string; desc: string }[];
    color: string;
    tagBg: string;
  }) => (
    <div>
      <div
        style={{
          display: "inline-block",
          background: tagBg,
          border: `1px solid ${color}55`,
          color,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "5px 14px",
          borderRadius: 100,
          marginBottom: 18,
        }}
      >
        {label}
      </div>
      <h3
        style={{
          fontSize: 24,
          fontWeight: 800,
          color: "#E8EDF2",
          letterSpacing: "-0.5px",
          marginBottom: 26,
        }}
      >
        {heading}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {items.map((it) => (
          <div
            key={it.title}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderLeft: `3px solid ${color}`,
              borderRadius: 10,
              padding: "18px 20px",
            }}
          >
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#E8EDF2",
                marginBottom: 6,
              }}
            >
              {it.title}
            </div>
            <div
              style={{ fontSize: 14, color: "#8899A6", lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: it.desc }}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#0D7377",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Beyond memory
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4.6vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-1.2px",
              color: "#E8EDF2",
              marginBottom: 18,
              lineHeight: 1.1,
            }}
          >
            chanio doesn&apos;t just remember.
            <br />
            It finds your{" "}
            <span style={{ color: "#6B4CF0" }}>holes</span> and your{" "}
            <span style={{ color: "#0D7377" }}>frontiers</span>.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "#8899A6",
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            A graph of your prompts is also a map of what you&apos;ve already
            thought about — and by extension, what you haven&apos;t. chanio
            reads that map two ways.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
          }}
        >
          <Col
            label="Gap detection"
            heading="What's missing from your thinking"
            items={gaps}
            color="#6B4CF0"
            tagBg="rgba(107,76,240,0.1)"
          />
          <Col
            label="Passion expansion"
            heading="Where your thinking is growing"
            items={expansions}
            color="#0D7377"
            tagBg="rgba(13,115,119,0.1)"
          />
        </div>

        <p
          style={{
            marginTop: 48,
            textAlign: "center",
            fontSize: 15,
            color: "#5A6778",
            fontStyle: "italic",
          }}
        >
          Every surface is a suggestion — never a push. You decide what to open
          next.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* HOW IT WORKS                                                        */
/* ------------------------------------------------------------------ */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Capture",
      body: "A browser extension sits quietly on top of Claude, ChatGPT, Gemini, and Perplexity. If you use Claude Code, chanio-core captures every session automatically at the terminal level. Either way, your prompts stay local — encrypted, never sent anywhere you haven&apos;t approved.",
    },
    {
      n: "02",
      title: "Graph",
      body: "Your prompts are linked into a knowledge graph across the four layers — domain, workflow, behavioral, artifact. You see it grow in real time in your chanio dashboard.",
    },
    {
      n: "03",
      title: "Carry",
      body: "An MCP connector exposes your graph to any AI that speaks the protocol. You walk into a new conversation and the AI already knows who you are — because you brought the context, not the platform.",
    },
    {
      n: "04",
      title: "Attest",
      body: "When it matters — health questions, legal questions, financial questions — chanio can route the output to a signed expert. The AI drafts. A licensed human puts their name on what&apos;s true.",
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "88px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#E8EDF2",
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          How it works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: "26px 22px",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: "#6B4CF0",
                  letterSpacing: "0.12em",
                  marginBottom: 14,
                }}
              >
                {s.n}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#E8EDF2",
                  marginBottom: 10,
                  letterSpacing: "-0.3px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#8899A6",
                  lineHeight: 1.65,
                }}
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* MOAT                                                                */
/* ------------------------------------------------------------------ */
function Moat() {
  const items = [
    {
      title: "Compiled nightly, on your disk",
      body: "Every session compiles to your local drive overnight. Not a cloud backup — a local knowledge graph that exists even when the internet doesn&apos;t. Offline-capable by design.",
    },
    {
      title: "Owned, not rented",
      body: "Your graph lives in your account and on your hardware. Export it whenever you want. Delete it whenever you want. Nobody sells it because nobody owns it but you.",
    },
    {
      title: "Portable across every AI",
      body: "MCP is the open protocol for carrying context between models. chanio speaks it natively — so the graph travels with you, not with any one platform.",
    },
    {
      title: "Signed where it counts",
      body: "For the decisions that matter, chanio can hand the output to a physician or domain expert to attest. AI drafts. Humans sign. You carry the proof.",
    },
  ];

  return (
    <section style={{ padding: "88px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#E8EDF2",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Why now
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#8899A6",
            fontSize: 17,
            maxWidth: 600,
            margin: "0 auto 12px",
            lineHeight: 1.6,
          }}
        >
          The infrastructure of the last era was optimized for extraction. The
          infrastructure of this one is optimized for attestation — and the
          person being attested to is you.
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 700,
            color: "#E8EDF2",
            margin: "0 auto 56px",
            letterSpacing: "-0.3px",
          }}
        >
          <span style={{ color: "#6B4CF0" }}>Compute stays rented.</span>{" "}
          <span style={{ color: "#0D7377" }}>Storage comes home.</span>
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {items.map((it) => (
            <div
              key={it.title}
              style={{
                background:
                  "linear-gradient(180deg, rgba(13,115,119,0.06) 0%, rgba(107,76,240,0.04) 100%)",
                border: "1px solid rgba(13,115,119,0.25)",
                borderRadius: 16,
                padding: "26px 24px",
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#E8EDF2",
                  marginBottom: 10,
                }}
              >
                {it.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  color: "#8899A6",
                  lineHeight: 1.65,
                }}
                dangerouslySetInnerHTML={{ __html: it.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* WAITLIST                                                            */
/* ------------------------------------------------------------------ */
function Waitlist() {
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!contact.trim()) {
      setErr("Email or phone, please.");
      return;
    }
    setErr(null);
    setState("loading");
    try {
      const res = await fetch("https://solvinghealth.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: contact.trim(),
          name: name.trim() || null,
          brand: "chanio.com",
          path: "waitlist",
          source: "chanio-home-waitlist",
          display_ok: false,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) {
        setErr(data?.error || "Something went sideways. Try again?");
        setState("err");
        return;
      }
      setState("ok");
    } catch {
      setErr("Network hiccup. Try again?");
      setState("err");
    }
  }

  return (
    <section
      id="get-chanio"
      style={{
        background:
          "linear-gradient(135deg, rgba(13,115,119,0.15) 0%, rgba(107,76,240,0.12) 100%)",
        borderTop: "1px solid rgba(13,115,119,0.25)",
        borderBottom: "1px solid rgba(13,115,119,0.25)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 46px)",
            fontWeight: 900,
            letterSpacing: "-1.4px",
            color: "#E8EDF2",
            marginBottom: 18,
            lineHeight: 1.1,
          }}
        >
          Stop renting your identity.
          <br />
          <span style={{ color: "#0D7377" }}>Start owning your context.</span>
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "#8899A6",
            lineHeight: 1.6,
            marginBottom: 36,
          }}
        >
          Join the waitlist for the private beta. You&apos;ll get early access,
          a say in the roadmap, and locked-in founding pricing when we open the
          doors.
        </p>

        {state === "ok" ? (
          <div
            style={{
              background: "rgba(13,115,119,0.15)",
              border: "1px solid rgba(13,115,119,0.4)",
              borderRadius: 14,
              padding: "24px 28px",
              color: "#E8EDF2",
              fontSize: 16,
              lineHeight: 1.6,
            }}
          >
            You&apos;re on the list. We&apos;ll reach out when a seat opens — no
            spam, no newsletters, just the invite.
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              textAlign: "left",
            }}
          >
            <input
              type="text"
              placeholder="First name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                padding: "14px 16px",
                color: "#E8EDF2",
                fontSize: 15,
                fontFamily: "inherit",
              }}
            />
            <input
              type="text"
              placeholder="Email or phone"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                padding: "14px 16px",
                color: "#E8EDF2",
                fontSize: 15,
                fontFamily: "inherit",
              }}
            />

            <button
              type="submit"
              disabled={state === "loading"}
              style={{
                background: "#6B4CF0",
                color: "white",
                padding: "14px 24px",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 700,
                border: "none",
                cursor: state === "loading" ? "wait" : "pointer",
                opacity: state === "loading" ? 0.7 : 1,
              }}
            >
              {state === "loading" ? "Adding you..." : "Join the waitlist"}
            </button>

            {err && (
              <div
                style={{
                  fontSize: 14,
                  color: "#F04C8A",
                  textAlign: "center",
                  marginTop: 4,
                }}
              >
                {err}
              </div>
            )}

            <p
              style={{
                fontSize: 12.5,
                color: "#5A6778",
                lineHeight: 1.5,
                textAlign: "center",
                marginTop: 8,
              }}
            >
              We store your contact only to invite you. No public listing.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
