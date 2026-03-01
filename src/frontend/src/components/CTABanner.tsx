import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const handleClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.15 0.042 252)" }}
    >
      {/* Background: layered gold radial glow + edge vignette */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.72 0.12 80 / 0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, oklch(0.72 0.12 80 / 0.025) 0, oklch(0.72 0.12 80 / 0.025) 1px, transparent 0, transparent 48px)",
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {/* Pill eyebrow */}
        <div className="flex justify-center mb-8">
          <span className="section-eyebrow section-eyebrow-light">
            Next Step
          </span>
        </div>

        <h2
          className="font-display font-bold text-white mb-6"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Ready to Transform
          <br />
          <span className="text-gold-shimmer">Your Business?</span>
        </h2>

        <p
          className="text-white/60 mb-10 max-w-lg mx-auto"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
          }}
        >
          Schedule a strategy call with our expert consultants today and take
          the first step toward measurable growth.
        </p>

        <button
          type="button"
          onClick={handleClick}
          className="btn-hero-primary"
          style={{ minWidth: "240px" }}
        >
          Schedule a Strategy Call
          <ArrowRight size={17} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
