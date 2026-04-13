"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";

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

const SECTIONS: Section[] = [
  {
    id: "find-doctor",
    heading: "Find a doctor",
    sub: "Connect with the right specialist for your situation.",
    cards: [
      {
        title: "Orthopedic Surgeons",
        desc: "Find an orthopedic specialist near you. Powered by SurgeonValue.",
        href: "https://surgeonvalue.com",
        label: "surgeonvalue.com",
      },
      {
        title: "Telemedicine Physician",
        desc: "See a licensed physician from home. Altru.care — direct primary and urgent care.",
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
        {/* Hero */}
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 24px 64px",
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

          <h1
            style={{
              fontSize: "clamp(56px, 10vw, 120px)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-3px",
              color: "#0D7377",
              margin: "0 auto 24px",
            }}
          >
            Surf
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "#8899A6",
              fontWeight: 400,
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Your AI will learn what matters to you. For now, start here.
          </p>
        </section>

        {/* Sections */}
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

        {/* Bottom CTA */}
        <section
          style={{
            background:
              "linear-gradient(135deg, rgba(13,115,119,0.12) 0%, rgba(107,76,240,0.08) 100%)",
            borderTop: "1px solid rgba(13,115,119,0.18)",
            padding: "80px 24px",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 42px)",
              fontWeight: 900,
              letterSpacing: "-1px",
              color: "#E8EDF2",
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Install chanio
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#8899A6",
              maxWidth: 440,
              margin: "0 auto 36px",
              lineHeight: 1.6,
            }}
          >
            Your AI learns what matters to you as you browse. The more you use it, the more useful this page becomes.
          </p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#0D7377",
              color: "white",
              padding: "16px 40px",
              borderRadius: 12,
              textDecoration: "none",
              fontSize: 17,
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
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
              marginTop: 16,
              fontSize: 13,
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
