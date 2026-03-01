import { CheckCircle2, Eye, Target } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useScrollAnimation";

const coreValues = [
  {
    label: "Integrity",
    description: "Honest, transparent dealings in every engagement.",
  },
  {
    label: "Excellence",
    description: "Uncompromising quality in strategy and execution.",
  },
  {
    label: "Results",
    description: "Outcomes-first mindset with measurable milestones.",
  },
  {
    label: "Innovation",
    description: "Forward-thinking solutions for a changing world.",
  },
];

export default function About() {
  const headerRef = useRevealOnScroll(0.1);
  const contentRef = useRevealOnScroll(0.05);

  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.97 0.004 250)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-16 section-reveal">
          <div className="flex justify-center mb-1">
            <span className="section-eyebrow">Who We Are</span>
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
            About Velmora Advisory
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
            }}
          >
            A trusted partner for organizations navigating complexity and
            chasing meaningful growth.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start section-reveal"
        >
          {/* Left: Company intro */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
              style={{
                backgroundColor: "oklch(0.72 0.12 80 / 0.12)",
                color: "oklch(0.56 0.11 78)",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                border: "1px solid oklch(0.72 0.12 80 / 0.2)",
              }}
            >
              <CheckCircle2 size={15} />
              12+ Years of Proven Excellence
            </div>

            <p
              className="text-gray-600 leading-relaxed mb-5"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
              }}
            >
              Velmora Advisory was founded on a single conviction: that every
              business, regardless of size, deserves strategic guidance that
              delivers real results. Over more than a decade, we have worked
              alongside hundreds of startups, SMEs, and global enterprises to
              unlock their full potential.
            </p>
            <p
              className="text-gray-500 leading-relaxed mb-10"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
              }}
            >
              Our team of seasoned consultants brings deep industry expertise,
              data-driven methodologies, and a relentless focus on execution —
              transforming complex challenges into clear, actionable strategies.
            </p>

            {/* Mission — elevated treatment */}
            <div
              className="p-6 rounded-2xl border-l-[3px]"
              style={{
                backgroundColor: "white",
                borderLeftColor: "oklch(0.72 0.12 80)",
                boxShadow:
                  "0 1px 3px rgba(10,22,40,0.04), 0 8px 24px rgba(10,22,40,0.07)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Target size={17} style={{ color: "oklch(0.62 0.12 78)" }} />
                <span
                  className="text-xs font-bold uppercase tracking-[0.15em]"
                  style={{
                    color: "oklch(0.56 0.11 78)",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  }}
                >
                  Our Mission
                </span>
              </div>
              <p
                className="text-gray-600 leading-relaxed"
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                }}
              >
                To empower organizations with bold, bespoke strategies that
                create sustainable competitive advantage and long-term value for
                all stakeholders.
              </p>
            </div>
          </div>

          {/* Right: Vision + Core values */}
          <div>
            {/* Vision — richer dark panel */}
            <div
              className="p-7 rounded-2xl mb-8 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.17 0.04 250) 0%, oklch(0.21 0.05 252) 100%)",
                boxShadow:
                  "0 4px 16px rgba(10,22,40,0.15), 0 20px 48px rgba(10,22,40,0.2)",
                border: "1px solid oklch(1 0 0 / 0.07)",
              }}
            >
              {/* Subtle inner glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, oklch(0.72 0.12 80 / 0.12) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Eye size={17} style={{ color: "oklch(0.72 0.12 80)" }} />
                  <span
                    className="text-xs font-bold uppercase tracking-[0.15em]"
                    style={{
                      color: "oklch(0.72 0.12 80)",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    Our Vision
                  </span>
                </div>
                <p
                  className="text-white/85 leading-relaxed"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                  }}
                >
                  To be the most trusted strategic advisory firm for ambitious
                  organizations — recognized globally for our expertise,
                  integrity, and the transformative impact we deliver for our
                  clients.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{
                color: "oklch(0.56 0.11 78)",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Core Values
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {coreValues.map((value) => (
                <div
                  key={value.label}
                  className="card-premium p-5 group cursor-default"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 text-sm font-bold transition-all duration-300 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.72 0.12 80 / 0.15), oklch(0.82 0.10 85 / 0.08))",
                      color: "oklch(0.58 0.11 78)",
                      fontFamily: "'Playfair Display', Georgia, serif",
                      border: "1px solid oklch(0.72 0.12 80 / 0.15)",
                    }}
                  >
                    {value.label[0]}
                  </div>
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{
                      color: "oklch(0.17 0.04 250)",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    {value.label}
                  </p>
                  <p
                    className="text-xs text-gray-500 leading-relaxed"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
