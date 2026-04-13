import Nav from "../components/Nav";
import Footer from "../components/Footer";

const NETWORK = [
  {
    channel: "Health",
    color: "#0D7377",
    sites: [
      { name: "WebMD", domain: "webmd.com", desc: "Symptoms, conditions, drug database, and provider finder." },
      { name: "PubMed", domain: "pubmed.ncbi.nlm.nih.gov", desc: "MEDLINE database of biomedical literature and citations." },
      { name: "Examine", domain: "examine.com", desc: "Evidence-based supplement and nutrition research." },
      { name: "Healthline", domain: "healthline.com", desc: "Medically reviewed health information and wellness." },
      { name: "Mayo Clinic", domain: "mayoclinic.org", desc: "Patient care and health information from Mayo Clinic." },
      { name: "Medscape", domain: "medscape.com", desc: "Medical news, clinical resources, and drug references." },
    ],
  },
  {
    channel: "Music",
    color: "#6B4CF0",
    sites: [
      { name: "Spotify", domain: "spotify.com", desc: "Streaming, playlists, artist pages, and podcast discovery." },
      { name: "Bandcamp", domain: "bandcamp.com", desc: "Independent music and merchandise direct from artists." },
      { name: "Pitchfork", domain: "pitchfork.com", desc: "Music reviews, news, and best-of lists." },
      { name: "Discogs", domain: "discogs.com", desc: "Music database, collection tracking, and vinyl marketplace." },
      { name: "Last.fm", domain: "last.fm", desc: "Music tracking, listening history, and discovery." },
    ],
  },
  {
    channel: "Finance",
    color: "#F0924C",
    sites: [
      { name: "Yahoo Finance", domain: "finance.yahoo.com", desc: "Stock quotes, financial news, and portfolio tracking." },
      { name: "Morningstar", domain: "morningstar.com", desc: "Investment research, fund ratings, and portfolio analysis." },
      { name: "SEC EDGAR", domain: "sec.gov/edgar", desc: "SEC filings, 10-Ks, 10-Qs, and corporate disclosures." },
      { name: "Bloomberg", domain: "bloomberg.com", desc: "Financial news, data, and markets." },
      { name: "Seeking Alpha", domain: "seekingalpha.com", desc: "Stock analysis, earnings coverage, and investing community." },
    ],
  },
  {
    channel: "Wellness",
    color: "#4CF0A8",
    sites: [
      { name: "InsideTracker", domain: "insidetracker.com", desc: "Blood biomarker analysis and personalized health guidance." },
      { name: "Cronometer", domain: "cronometer.com", desc: "Nutritional tracking with micronutrient detail." },
      { name: "Whoop", domain: "whoop.com", desc: "Recovery, strain, and sleep optimization platform." },
      { name: "Eight Sleep", domain: "eightsleep.com", desc: "Smart sleep technology and recovery tracking." },
    ],
  },
  {
    channel: "Identity",
    color: "#F04C8A",
    sites: [
      { name: "LinkedIn", domain: "linkedin.com", desc: "Professional networking, job search, and career development." },
      { name: "AngelList", domain: "angellist.com", desc: "Startup jobs, fundraising, and investor discovery." },
      { name: "Crunchbase", domain: "crunchbase.com", desc: "Company profiles, funding data, and founder networks." },
      { name: "GitHub", domain: "github.com", desc: "Code repositories, contributions, and developer identity." },
    ],
  },
  {
    channel: "Knowledge",
    color: "#8899A6",
    sites: [
      { name: "Wikipedia", domain: "wikipedia.org", desc: "The free encyclopedia. The connective tissue of the web." },
      { name: "Hacker News", domain: "news.ycombinator.com", desc: "Tech news, discussions, and link aggregation." },
      { name: "Stack Overflow", domain: "stackoverflow.com", desc: "Programming Q&A and developer community." },
      { name: "Reddit", domain: "reddit.com", desc: "Community discussions across every topic." },
      { name: "YouTube", domain: "youtube.com", desc: "Video content across every channel and topic." },
    ],
  },
];

export default function NetworkPage() {
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
              The network
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
            26+ sites.
            <br />
            <span style={{ color: "#0D7377" }}>6 channels.</span>
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
            chanio works across the sites you already use. No new apps. No new habits. Just memory.
          </p>
        </section>

        {/* Channel grids */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 80px" }}>
          {NETWORK.map((group) => (
            <div key={group.channel} style={{ marginBottom: 64 }}>
              {/* Channel header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: group.color,
                  }}
                />
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#E8EDF2",
                    letterSpacing: "-0.5px",
                    margin: 0,
                  }}
                >
                  {group.channel}
                </h2>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: group.color,
                    background: `${group.color}15`,
                    border: `1px solid ${group.color}30`,
                    padding: "3px 10px",
                    borderRadius: 100,
                  }}
                >
                  {group.sites.length} sites
                </span>
              </div>

              {/* Site cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: 16,
                }}
              >
                {group.sites.map((site) => (
                  <div
                    key={site.name}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 12,
                      padding: "20px 24px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#E8EDF2", margin: 0 }}>
                        {site.name}
                      </h3>
                      <span
                        style={{
                          fontSize: 11,
                          color: group.color,
                          background: `${group.color}12`,
                          border: `1px solid ${group.color}25`,
                          padding: "2px 8px",
                          borderRadius: 6,
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                          marginLeft: 8,
                          flexShrink: 0,
                        }}
                      >
                        {group.channel}
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: "#8899A6", margin: "0 0 10px" }}>
                      {site.domain}
                    </p>
                    <p style={{ fontSize: 14, color: "#8899A6", lineHeight: 1.5, margin: 0 }}>
                      {site.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Add your site CTA */}
        <section
          style={{
            background: "rgba(255,255,255,0.02)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 40px)",
              fontWeight: 800,
              color: "#E8EDF2",
              letterSpacing: "-1px",
              marginBottom: 16,
            }}
          >
            Don&apos;t see your site?
          </h2>
          <p style={{ fontSize: 17, color: "#8899A6", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Any site owner can add chanio in one script tag. If you run a site and want to be part of the network, head to our site owner page.
          </p>
          <a
            href="/for-sites"
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
            Add chanio to your site
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
