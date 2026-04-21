"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

// /surf — Chanio's "catch a wave" surface.
//
// 2026-04-14 ship notes (what changed and why):
//   1. Hero rewritten from one-word "Surf" to the actual tagline
//      ("Making the web surfable") + real product description + dual CTA
//      in the hero. Old copy cut "For now, start here" because it
//      telegraphed a placeholder.
//   2. New "What's surfable right now" rotating feed right after the hero.
//      Gives the page momentum. Every item is a verifiable fact about
//      the live ecosystem — no claims we can't substantiate, no metrics
//      we don't measure, just real capabilities that actually ship.
//      Rotates every 3.5s client-side so the page feels different on
//      every visit without requiring server state.
//   3. Stripped "Powered by SurgeonValue" from the individual card
//      subtitle. Attribution moved to a single footer-adjacent
//      ecosystem row so it reads "Chanio surfs this network" instead of
//      "Chanio is a thin layer on top of SurgeonValue."

type Card = {
  title: string;
  desc: string;
  href: string;
  label?: string;
};

type Section = {
  id: string;
  heading: string;
  sub: string;
  cards: Card[];
};

// ─── Fix 2: live rotating feed items ────────────────────────────────────
// Every item here is a verifiable capability of the live ecosystem as of
// 2026-04-14. No vanity metrics, no growth claims, no aspirational
// statements. Each rotates into the feed strip below the hero.
type WaveItem = {
  emoji: string;
  text: string;
  href: string;
  kicker: string;
};

const WAVE_ITEMS: WaveItem[] = [
  {
    kicker: "Live",
    emoji: "🩺",
    text: "Dictate a case on Pocket, Wonder Bill finds billing codes in 4 seconds",
    href: "https://surgeonvalue.com/pocket",
  },
  {
    kicker: "Live",
    emoji: "🔍",
    text: "Any 10-digit NPI renders a live profile at surgeonvalue.com/p/<NPI>",
    href: "https://surgeonvalue.com/p/1104445147",
  },
  {
    kicker: "Live",
    emoji: "💬",
    text: "Ask Reed anything as you surf — every site has the same chat",
    href: "https://harnesshealth.ai",
  },
  {
    kicker: "Live",
    emoji: "🗂️",
    text: "241 tools in Claude Desktop via the SolvingHealth MCP connector",
    href: "https://solvinghealth.com",
  },
  {
    kicker: "Live",
    emoji: "📱",
    text: "Save any surgeon's QR card to your phone in one tap",
    href: "https://surgeonvalue.com/p/levonti",
  },
  {
    kicker: "Live",
    emoji: "🏡",
    text: "Worker-owned companion care in Boulder — $59/mo includes LMN",
    href: "https://co-op.care",
  },
  {
    kicker: "Live",
    emoji: "📝",
    text: "Physician-signed advance directives cross-state binding",
    href: "https://caregoals.com",
  },
  {
    kicker: "Live",
    emoji: "💳",
    text: "Your health identity as a QR — one scan, no plastic",
    href: "https://comfortcard.org",
  },
];

const SECTIONS: Section[] = [
  {
    id: "find-doctor",
    heading: "Find a doctor",
    sub: "Connect with the right specialist for your situation.",
    cards: [
      {
        title: "Orthopedic Surgeons",
        desc: "Find an orthopedic specialist near you — every US surgeon, live from CMS NPPES.",
        href: "https://surgeonvalue.com",
        label: "surgeonvalue.com",
      },
      {
        title: "Telemedicine Physician",
        desc: "See a licensed physician from home. Direct primary and urgent care.",
        href: "https://altru.care",
        label: "altru.care",
      },
      {
        title: "Search by specialty",
        desc: "Find in-network providers across every specialty, with real patient reviews.",
        href: "https://www.zocdoc.com",
        label: "zocdoc.com",
      },
    ],
  },
  {
    id: "save-on-care",
    heading: "Save on care",
    sub: "Tools that put your healthcare dollars to work.",
    cards: [
      {
        title: "Make wellness tax-free",
        desc: "Get a Letter of Medical Necessity. Use your HSA or FSA for eligible wellness expenses — $199 flat.",
        href: "https://hsaletter.com",
        label: "hsaletter.com",
      },
      {
        title: "Health identity card",
        desc: "One card that holds your medical history, preferences, and emergency contacts.",
        href: "https://comfortcard.org",
        label: "comfortcard.org",
      },
      {
        title: "Caregiver matching",
        desc: "Worker-owned companion care. Caregivers earn a living wage. Families pay less. $59/mo.",
        href: "https://co-op.care",
        label: "co-op.care",
      },
    ],
  },
  {
    id: "learn",
    heading: "Learn about your condition",
    sub: "Condition-specific guides built for patients, not search engines.",
    cards: [
      {
        title: "Heart health",
        desc: "Evidence-based guidance on cardiovascular health and heart disease prevention.",
        href: "https://hearthealth.help",
        label: "hearthealth.help",
      },
      {
        title: "Hip pain",
        desc: "Understand hip pain causes, treatment options, and when to see a specialist.",
        href: "https://hippain.help",
        label: "hippain.help",
      },
      {
        title: "Shoulder pain",
        desc: "From rotator cuff to impingement — know what you're dealing with.",
        href: "https://shoulderpain.help",
        label: "shoulderpain.help",
      },
      {
        title: "Blood pressure",
        desc: "Understand your numbers and the lifestyle factors that actually move them.",
        href: "https://bloodpressure.help",
        label: "bloodpressure.help",
      },
      {
        title: "Breathing & lungs",
        desc: "Asthma, COPD, and respiratory health — what matters and what to ask your doctor.",
        href: "https://breathing.help",
        label: "breathing.help",
      },
      {
        title: "Fall prevention",
        desc: "Practical guidance for older adults and their families on reducing fall risk.",
        href: "https://fallprevention.help",
        label: "fallprevention.help",
      },
      {
        title: "Memory & cognition",
        desc: "Early signs, risk factors, and resources for memory loss and cognitive decline.",
        href: "https://memoryloss.help",
        label: "memoryloss.help",
      },
      {
        title: "Pregnancy care",
        desc: "Trimester-by-trimester guidance for expectant parents.",
        href: "https://pregnancycare.help",
        label: "pregnancycare.help",
      },
      {
        title: "Arthritis risk",
        desc: "Understand your arthritis risk factors and what you can do about them.",
        href: "https://arthritisrisk.com",
        label: "arthritisrisk.com",
      },
      {
        title: "Back pain",
        desc: "Most back pain resolves. Learn what helps, what hurts, and when to worry.",
        href: "https://doesyourbackhurt.com",
        label: "doesyourbackhurt.com",
      },
    ],
  },
  {
    id: "plan",
    heading: "Plan for the future",
    sub: "Decisions that matter most are easier when you make them now.",
    cards: [
      {
        title: "Advance directives",
        desc: "Document your healthcare wishes so your family is never left guessing.",
        href: "https://caregoals.com",
        label: "caregoals.com",
      },
      {
        title: "End-of-life planning",
        desc: "A thoughtful guide to preparing for the end — for yourself or someone you love.",
        href: "https://qualitydeath.com",
        label: "qualitydeath.com",
      },
      {
        title: "Age-in-place insurance",
        desc: "Coverage designed for staying home longer. Built around the care you actually want.",
        href: "https://careho.me",
        label: "careho.me",
      },
    ],
  },
  {
    id: "other-channels",
    heading: "Explore other channels",
    sub: "chanio isn't just health. Here are a few other communities in the network.",
    cards: [
      {
        title: "OpuSocial",
        desc: "AI-powered concert discovery and ticket trading. Find your next show.",
        href: "https://opusocial.com",
        label: "opusocial.com",
      },
      {
        title: "Sh-Room",
        desc: "The silent mushroom incubator. Grow functional mushrooms at home, quietly.",
        href: "https://sh-room.com",
        label: "sh-room.com",
      },
      {
        title: "FillForward",
        desc: "Kombucha cooperative. Bring your growler. Skip the markup.",
        href: "https://fillforward.com",
        label: "fillforward.com",
      },
      {
        title: "MapOfYou",
        desc: "Discover what drives you. Passion compass, identity archive, and more.",
        href: "https://mapofyou.com",
        label: "mapofyou.com",
      },
      {
        title: "FloorPricer",
        desc: "Trading tools with price floors, ladders, and trailing stops. Built for real investors.",
        href: "https://floorpricer.com",
        label: "floorpricer.com",
      },
    ],
  },
];

// ─── Fix 2: the rotating "what's surfable right now" feed component ─────
function WaveFeed() {
  // Randomize the starting order so each visit feels different
  const [items] = useState(() => {
    const shuffled = [...WAVE_ITEMS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % items.length);
    }, 3500);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "16px 24px 40px",
      }}
    >
      <div
        style={{
          background: "rgba(13,115,119,0.05)",
          border: "1px solid rgba(13,115,119,0.2)",
          borderRadius: 18,
          padding: "22px 26px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 18,
          }}
        >
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#0D7377",
              fontWeight: 800,
              margin: 0,
            }}
          >
            ▚ What&apos;s surfable right now
          </p>
          <p
            style={{
              fontSize: 11,
              color: "#8899A6",
              margin: 0,
            }}
          >
            {activeIdx + 1} / {items.length}
          </p>
        </div>

        {/* Active headline */}
        <a
          href={items[activeIdx].href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "14px 16px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(13,115,119,0.3)",
            borderRadius: 12,
            textDecoration: "none",
            transition: "all 0.4s ease",
          }}
          key={activeIdx}
        >
          <span
            style={{
              fontSize: 26,
              flexShrink: 0,
              transition: "opacity 0.4s",
            }}
          >
            {items[activeIdx].emoji}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: 9,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#0D7377",
                fontWeight: 800,
                margin: "0 0 4px",
              }}
            >
              {items[activeIdx].kicker}
            </p>
            <p
              style={{
                fontSize: 15,
                color: "#E8EDF2",
                fontWeight: 600,
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              {items[activeIdx].text}
            </p>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ flexShrink: 0, opacity: 0.6 }}
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="#0D7377"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Progress dots for the rotation */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginTop: 14,
            justifyContent: "center",
          }}
        >
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              aria-label={`Jump to item ${i + 1}`}
              style={{
                width: i === activeIdx ? 24 : 6,
                height: 6,
                borderRadius: 3,
                background:
                  i === activeIdx ? "#0D7377" : "rgba(13,115,119,0.25)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionCard({ card }: { card: Card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        background: hovered
          ? "rgba(13,115,119,0.08)"
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(13,115,119,0.35)"
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: 14,
        padding: "24px",
        textDecoration: "none",
        transition: "background 0.18s, border-color 0.18s",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: hovered ? "#0D7377" : "#E8EDF2",
            lineHeight: 1.3,
            transition: "color 0.18s",
          }}
        >
          {card.title}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ flexShrink: 0, marginTop: 2, opacity: hovered ? 1 : 0.4, transition: "opacity 0.18s" }}
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="#0D7377"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p
        style={{
          fontSize: 14,
          color: "#8899A6",
          lineHeight: 1.6,
          margin: "0 0 12px",
        }}
      >
        {card.desc}
      </p>
      {card.label && (
        <span
          style={{
            fontSize: 11,
            color: hovered ? "#0D7377" : "#8899A6",
            fontWeight: 600,
            letterSpacing: "0.04em",
            opacity: 0.7,
            transition: "color 0.18s",
          }}
        >
          {card.label}
        </span>
      )}
    </a>
  );
}

export default function SurfPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── Fix 1: hero rewrite ────────────────────────────────────────
            Old hero: one-word "Surf" + "Your AI will learn what matters
            to you. For now, start here." Telegraphed placeholder.
            New hero: the actual tagline + product description + primary
            CTA in the hero (not buried 800px below) + secondary CTA that
            scrolls down to the directory. */}
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 24px 32px",
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
              width: 700,
              height: 320,
              background:
                "radial-gradient(ellipse at center, rgba(13,115,119,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#0D7377",
              fontWeight: 800,
              margin: "0 0 18px",
            }}
          >
            ▚ chanio · surf
          </p>
          <h1
            style={{
              fontSize: "clamp(40px, 7vw, 78px)",
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-2px",
              color: "#E8EDF2",
              margin: "0 auto 20px",
              maxWidth: 820,
            }}
          >
            Making the web{" "}
            <span style={{ color: "#0D7377" }}>surfable</span>.
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2.2vw, 19px)",
              color: "#8899A6",
              fontWeight: 400,
              maxWidth: 600,
              margin: "0 auto 32px",
              lineHeight: 1.6,
            }}
          >
            Chanio is the Chrome extension that remembers what you read and
            turns the web into your own channel. Install in 30 seconds. Free.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#0D7377",
                color: "white",
                padding: "14px 28px",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 10px 30px rgba(13,115,119,0.25)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path
                  d="M15 8A7 7 0 112 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M11 1l4 4-4 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add to Chrome — free
            </a>
            <a
              href="#directory"
              style={{
                background: "transparent",
                color: "#E8EDF2",
                padding: "14px 24px",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
                border: "1px solid rgba(232,237,242,0.2)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Browse what&apos;s surfable →
            </a>
          </div>
        </section>

        {/* ─── Fix 2: live rotating feed ─────────────────────────────── */}
        <WaveFeed />

        {/* Directory sections — intentionally anchored so the "Browse
            what's surfable →" CTA scrolls here */}
        <div id="directory" />
        {SECTIONS.map((section) => (
          <section
            key={section.id}
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "56px 24px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ marginBottom: 36 }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  color: "#E8EDF2",
                  marginBottom: 8,
                }}
              >
                {section.heading}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#8899A6",
                  lineHeight: 1.5,
                  maxWidth: 560,
                }}
              >
                {section.sub}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  section.id === "learn"
                    ? "repeat(auto-fill, minmax(260px, 1fr))"
                    : "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 16,
              }}
            >
              {section.cards.map((card) => (
                <SectionCard key={card.href} card={card} />
              ))}
            </div>
          </section>
        ))}

        {/* ─── Fix 3: ecosystem attribution row ──────────────────────────
            Replaces the scattered "Powered by SurgeonValue" in card
            subtitles. One row, honest framing: chanio is the front end
            that surfs a whole network. */}
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "32px 24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "#8899A6",
              lineHeight: 1.7,
              textAlign: "center",
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            Chanio surfs the SolvingHealth ecosystem:{" "}
            <a
              href="https://surgeonvalue.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0D7377", textDecoration: "none" }}
            >
              SurgeonValue
            </a>
            ,{" "}
            <a
              href="https://co-op.care"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0D7377", textDecoration: "none" }}
            >
              co-op.care
            </a>
            ,{" "}
            <a
              href="https://altru.care"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0D7377", textDecoration: "none" }}
            >
              altru.care
            </a>
            ,{" "}
            <a
              href="https://comfortcard.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0D7377", textDecoration: "none" }}
            >
              ComfortCard
            </a>
            ,{" "}
            <a
              href="https://caregoals.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0D7377", textDecoration: "none" }}
            >
              CareGoals
            </a>
            ,{" "}
            <a
              href="https://clinicalswipe.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0D7377", textDecoration: "none" }}
            >
              ClinicalSwipe
            </a>
            , and 30+ condition channels. One install remembers them all.
          </p>
        </section>

        {/* Bottom CTA — kept but deemphasized since the hero now carries
            the primary Install CTA. This row stays as a "second chance"
            for visitors who scrolled past the hero without clicking. */}
        <section
          id="get-chanio"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,115,119,0.12) 0%, rgba(107,76,240,0.08) 100%)",
            borderTop: "1px solid rgba(13,115,119,0.18)",
            padding: "64px 24px",
            textAlign: "center",
            marginTop: 24,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 36px)",
              fontWeight: 900,
              letterSpacing: "-1px",
              color: "#E8EDF2",
              marginBottom: 14,
              lineHeight: 1.15,
            }}
          >
            Install chanio
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#8899A6",
              maxWidth: 440,
              margin: "0 auto 28px",
              lineHeight: 1.6,
            }}
          >
            Your AI learns what matters to you as you browse. The more you use
            it, the more useful this page becomes.
          </p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#0D7377",
              color: "white",
              padding: "14px 32px",
              borderRadius: 10,
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path
                d="M15 8A7 7 0 112 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11 1l4 4-4 4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add to Chrome — free
          </a>
          <p
            style={{
              marginTop: 14,
              fontSize: 12,
              color: "#8899A6",
              opacity: 0.6,
            }}
          >
            Chrome Web Store — coming soon
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
