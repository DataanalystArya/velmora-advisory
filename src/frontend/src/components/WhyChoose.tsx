import { CheckCircle } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useScrollAnimation";

const reasons = [
  {
    title: "Data-Driven Decisions",
    description:
      "Every recommendation we make is rooted in rigorous analysis, market intelligence, and quantitative modelling — not guesswork.",
  },
  {
    title: "Transparent Communication",
    description:
      "We maintain open, honest dialogue throughout every engagement — no surprises, no hidden agendas.",
  },
  {
    title: "Customized Solutions",
    description:
      "No cookie-cutter frameworks. We design bespoke strategies tailored precisely to your business context, goals, and competitive landscape.",
  },
  {
    title: "Proven Track Record",
    description:
      "Over 250 successful projects across 12+ years demonstrate our consistent ability to deliver measurable business outcomes.",
  },
  {
    title: "Dedicated Expert Consultants",
    description:
      "Each client receives a dedicated team of senior consultants with relevant industry experience and functional expertise.",
  },
  {
    title: "Long-Term Growth Focus",
    description:
      "We are invested in your sustained success — building strategies designed for durable competitive advantage, not just short-term gains.",
  },
];

export default function WhyChoose() {
  const headerRef = useRevealOnScroll(0.1);
  const gridRef = useRevealOnScroll(0.05);

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.17 0.04 250)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.72 0.12 80 / 0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.52 0.1 165 / 0.07) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.035) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.035) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 section-reveal">
          <div className="flex justify-center mb-1">
            <span className="section-eyebrow section-eyebrow-light">
              Our Difference
            </span>
          </div>
          <h2
            className="font-display font-bold mb-4 text-white"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Why Choose Velmora Advisory
          </h2>
          <p
            className="text-white/55 max-w-xl mx-auto"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
            }}
          >
            The qualities that set us apart and have earned the trust of clients
            worldwide.
          </p>
        </div>

        {/* Reasons grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto section-reveal"
        >
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.22 0.05 252) 0%, oklch(0.20 0.045 250) 100%)",
                border: "1px solid oklch(1 0 0 / 0.07)",
                boxShadow:
                  "inset 0 1px 0 oklch(1 0 0 / 0.06), 0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle
                  size={20}
                  style={{ color: "oklch(0.72 0.12 80)" }}
                />
              </div>
              <div>
                <h3
                  className="font-semibold text-white mb-1.5"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "0.9375rem",
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-white/55 leading-relaxed"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                  }}
                >
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
