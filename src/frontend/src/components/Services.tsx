import {
  BarChart2,
  Globe,
  Lightbulb,
  Settings,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useRevealOnScroll } from "../hooks/useScrollAnimation";

const services = [
  {
    icon: TrendingUp,
    title: "Business Strategy Consulting",
    description:
      "Craft clear competitive strategies that align your organization toward decisive, sustainable growth.",
  },
  {
    icon: BarChart2,
    title: "Financial Planning & Analysis",
    description:
      "Rigorous financial modelling, forecasting, and analysis to drive confident capital decisions.",
  },
  {
    icon: Globe,
    title: "Market Expansion Strategy",
    description:
      "Identify and enter new markets with precision — minimizing risk and maximizing opportunity.",
  },
  {
    icon: Settings,
    title: "Operations Optimization",
    description:
      "Streamline processes, eliminate inefficiencies, and build operational excellence at every level.",
  },
  {
    icon: Lightbulb,
    title: "Startup Advisory & Mentorship",
    description:
      "From ideation to scale, our experts guide founders through every stage of the startup journey.",
  },
  {
    icon: Shield,
    title: "Risk & Performance Management",
    description:
      "Identify, assess, and mitigate business risks with comprehensive risk management frameworks.",
  },
];

export default function Services() {
  const headerRef = useRevealOnScroll(0.1);
  const gridRef = useRevealOnScroll(0.05);

  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 section-reveal">
          <div className="flex justify-center mb-1">
            <span className="section-eyebrow">What We Do</span>
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
            Our Services
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
            }}
          >
            Comprehensive advisory solutions tailored to the unique needs of
            your organization.
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 section-reveal"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-premium p-7 group cursor-default"
              >
                {/* Icon — ring appears on hover */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.12 80 / 0.12), oklch(0.82 0.10 85 / 0.06))",
                    border: "1px solid oklch(0.72 0.12 80 / 0.15)",
                    boxShadow: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon
                    size={21}
                    style={{ color: "oklch(0.58 0.11 78)" }}
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                <h3
                  className="font-semibold mb-2.5"
                  style={{
                    color: "oklch(0.17 0.04 250)",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "1rem",
                    lineHeight: 1.4,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-500 leading-relaxed"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                  }}
                >
                  {service.description}
                </p>

                {/* Animated bottom line */}
                <div
                  className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500 rounded"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.72 0.12 80), oklch(0.82 0.10 85))",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
