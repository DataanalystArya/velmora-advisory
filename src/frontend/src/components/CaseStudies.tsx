import { useRevealOnScroll } from "../hooks/useScrollAnimation";

const fallbackCaseStudies = [
  {
    industry: "Technology",
    title: "Series B SaaS Company — 3× ARR Growth in 18 Months",
    challenge:
      "A high-growth SaaS company faced revenue plateau, rising churn, and misaligned product-market fit across two customer segments.",
    strategy:
      "We conducted a full commercial audit, restructured pricing tiers, redesigned the customer success function, and built a focused enterprise go-to-market motion.",
    result:
      "ARR grew from $4.2M to $13.8M in 18 months. Churn reduced by 40%. Enterprise deal size increased by 2.3×.",
  },
  {
    industry: "Manufacturing",
    title: "Regional Manufacturer — $8M Cost Reduction Programme",
    challenge:
      "A mid-sized manufacturer with 600 employees was losing margin due to outdated processes, excess inventory, and fragmented supplier relationships.",
    strategy:
      "Deployed lean manufacturing principles across three production lines, renegotiated 14 supplier contracts, and implemented a real-time inventory management system.",
    result:
      "Achieved $8.1M in annualized cost savings. Production throughput improved by 28%. On-time delivery rate reached 97.4%.",
  },
  {
    industry: "Healthcare",
    title: "Private Healthcare Group — Multi-City Expansion",
    challenge:
      "A profitable single-city clinic group wanted to expand nationally but lacked a scalable operating model and regulatory roadmap.",
    strategy:
      "Created a franchise-ready operating blueprint, built a compliance and licensing framework for 6 target markets, and designed a capital-efficient rollout plan.",
    result:
      "Opened 8 new clinics across 5 cities in 24 months. Revenue doubled. The group attracted a $20M growth equity investment.",
  },
];

export default function CaseStudies() {
  const headerRef = useRevealOnScroll(0.1);
  const gridRef = useRevealOnScroll(0.05);

  return (
    <section
      id="case-studies"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16 section-reveal">
          <div className="flex justify-center mb-1">
            <span className="section-eyebrow">Proven Impact</span>
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{
              color: "oklch(0.17 0.04 250)",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Our Case Studies
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
            }}
          >
            Real challenges. Bespoke strategies. Measurable outcomes.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7 section-reveal"
        >
          {fallbackCaseStudies.map((study) => (
            <div key={study.title} className="card-premium p-7 flex flex-col">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 self-start"
                style={{
                  backgroundColor: "oklch(0.52 0.1 165 / 0.1)",
                  color: "oklch(0.38 0.09 165)",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  border: "1px solid oklch(0.52 0.1 165 / 0.18)",
                }}
              >
                {study.industry}
              </span>
              <h3
                className="font-semibold mb-6 leading-snug"
                style={{
                  color: "oklch(0.17 0.04 250)",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.45,
                }}
              >
                {study.title}
              </h3>
              <div className="flex flex-col gap-5 flex-1">
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-[0.14em] mb-2"
                    style={{
                      color: "oklch(0.62 0.02 250)",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    Challenge
                  </div>
                  <p
                    className="text-gray-500 leading-relaxed"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-[0.14em] mb-2"
                    style={{
                      color: "oklch(0.62 0.02 250)",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    Strategy
                  </div>
                  <p
                    className="text-gray-500 leading-relaxed"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {study.strategy}
                  </p>
                </div>
                <div
                  className="mt-auto p-4 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.12 80 / 0.07), oklch(0.82 0.10 85 / 0.04))",
                    border: "1px solid oklch(0.72 0.12 80 / 0.15)",
                  }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-[0.14em] mb-2"
                    style={{
                      color: "oklch(0.58 0.11 78)",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    Result
                  </div>
                  <p
                    className="font-medium leading-relaxed"
                    style={{
                      color: "oklch(0.17 0.04 250)",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {study.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
