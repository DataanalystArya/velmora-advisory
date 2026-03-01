import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { useGetAllTestimonials } from "../hooks/useQueries";
import { useRevealOnScroll } from "../hooks/useScrollAnimation";

const fallbackTestimonials = [
  {
    starRating: 5n,
    review:
      "Velmora Advisory transformed the way we think about growth. Their team identified opportunities we had completely missed and built a strategy that delivered a 47% revenue increase within the first year. Outstanding depth of expertise.",
    clientName: "Sarah Mitchell",
    role: "Chief Executive Officer",
    company: "NovaTech Solutions",
  },
  {
    starRating: 5n,
    review:
      "The financial modelling and market analysis Velmora provided gave our board the confidence to approve a major expansion. Their insights were precise, actionable, and ultimately correct. We couldn't have done it without them.",
    clientName: "James Okafor",
    role: "Managing Director",
    company: "Meridian Capital Group",
  },
  {
    starRating: 5n,
    review:
      "What sets Velmora apart is their genuine commitment to understanding your business before prescribing solutions. They embedded with our team for two months and delivered a transformation roadmap that we're still executing on two years later.",
    clientName: "Elena Vasquez",
    role: "VP Strategy & Operations",
    company: "Helix Healthcare",
  },
  {
    starRating: 5n,
    review:
      "Exceptional strategic thinking combined with a practical execution mindset. Velmora's operations optimization engagement reduced our overhead by 22% while improving throughput. Results that speak for themselves.",
    clientName: "Marcus Chen",
    role: "COO",
    company: "PrimeForge Manufacturing",
  },
  {
    starRating: 5n,
    review:
      "From market entry strategy to investor readiness, Velmora guided us through every critical decision. We closed our Series B six months ahead of plan. Truly world-class advisory support.",
    clientName: "Priya Sharma",
    role: "Founder & CEO",
    company: "Nexora Technologies",
  },
];

const STAR_INDICES = [0, 1, 2, 3, 4] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {STAR_INDICES.map((i) => (
        <Star
          key={i}
          size={16}
          style={{
            color: i < rating ? "oklch(0.72 0.12 80)" : "oklch(0.85 0 0)",
            fill: i < rating ? "oklch(0.72 0.12 80)" : "none",
          }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { data: testimonials, isLoading, isFetching } = useGetAllTestimonials();
  const headerRef = useRevealOnScroll(0.1);
  const sliderRef = useRevealOnScroll(0.05);
  const [activeIndex, setActiveIndex] = useState(0);

  // Always show fallback if backend returns empty or is still loading
  const displayTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials
      : fallbackTestimonials;

  // Only show skeleton if actively fetching AND no fallback is ready
  const showSkeleton =
    (isLoading || isFetching) && displayTestimonials.length === 0;

  const visibleCount = 3;
  const maxIndex = Math.max(0, displayTestimonials.length - visibleCount);

  const handlePrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  const visible = displayTestimonials.slice(
    activeIndex,
    activeIndex + visibleCount,
  );

  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.97 0.004 250)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 section-reveal"
        >
          <div>
            <div className="mb-1">
              <span className="section-eyebrow">Client Voices</span>
            </div>
            <h2
              className="font-display font-bold"
              style={{
                color: "oklch(0.17 0.04 250)",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              What Our Clients Say
            </h2>
          </div>

          {/* Slider navigation */}
          <div className="flex items-center gap-3">
            <p
              className="text-sm text-gray-500 mr-2"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              {activeIndex + 1} –{" "}
              {Math.min(activeIndex + visibleCount, displayTestimonials.length)}{" "}
              of {displayTestimonials.length}
            </p>
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105"
              style={{
                backgroundColor: "oklch(0.17 0.04 250)",
                color: "white",
                border: "none",
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex >= maxIndex}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105"
              style={{
                backgroundColor: "oklch(0.17 0.04 250)",
                color: "white",
                border: "none",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>

        {showSkeleton ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl p-8 animate-pulse"
                style={{ backgroundColor: "white", height: "280px" }}
              />
            ))}
          </div>
        ) : (
          <div
            ref={sliderRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 section-reveal"
          >
            {visible.map((testimonial) => (
              <div
                key={testimonial.clientName}
                className="bg-white rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_rgba(10,22,40,0.12)]"
                style={{
                  border: "1px solid oklch(0.92 0.008 250)",
                  boxShadow: "0 4px 16px -4px rgba(10,22,40,0.06)",
                }}
              >
                {/* Quote mark */}
                <div
                  className="text-5xl font-display leading-none mb-2 -mt-2"
                  style={{
                    color: "oklch(0.72 0.12 80 / 0.3)",
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  "
                </div>

                <StarRating rating={Number(testimonial.starRating)} />

                <p
                  className="text-gray-600 text-sm leading-relaxed flex-1 mb-6"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    lineHeight: 1.75,
                  }}
                >
                  {testimonial.review}
                </p>

                <div
                  className="flex items-center gap-3 pt-4 border-t"
                  style={{ borderColor: "oklch(0.92 0.008 250)" }}
                >
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                    style={{
                      backgroundColor: "oklch(0.17 0.04 250)",
                      color: "oklch(0.72 0.12 80)",
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {testimonial.clientName[0]}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{
                        color: "oklch(0.17 0.04 250)",
                        fontFamily:
                          "'Plus Jakarta Sans', system-ui, sans-serif",
                      }}
                    >
                      {testimonial.clientName}
                    </div>
                    <div
                      className="text-xs text-gray-500"
                      style={{
                        fontFamily:
                          "'Plus Jakarta Sans', system-ui, sans-serif",
                      }}
                    >
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dot indicators */}
        {displayTestimonials.length > visibleCount && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }, (_, i) => `dot-${i}`).map(
              (dotKey, i) => (
                <button
                  key={dotKey}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="w-2 h-2 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor:
                      i === activeIndex
                        ? "oklch(0.72 0.12 80)"
                        : "oklch(0.72 0.12 80 / 0.25)",
                    transform: i === activeIndex ? "scale(1.3)" : "scale(1)",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
