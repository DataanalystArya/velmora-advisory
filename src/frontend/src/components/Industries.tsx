import { Building2, Cog, Cpu, Heart, ShoppingCart, Wrench } from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    description:
      "Property development, asset management, and investment strategy.",
  },
  {
    icon: Cog,
    name: "Manufacturing",
    description: "Supply chain optimization and operational excellence.",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description:
      "Growth strategies for healthcare providers and life sciences.",
  },
  {
    icon: Cpu,
    name: "Technology",
    description:
      "Scale-up strategies for SaaS, platforms, and tech innovators.",
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    description: "Customer acquisition, loyalty, and omnichannel growth.",
  },
  {
    icon: Wrench,
    name: "Infrastructure",
    description:
      "Strategic advisory for large-scale infrastructure and development projects.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.97 0.004 250)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-1">
            <span className="section-eyebrow">Sector Expertise</span>
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
            Industries We Serve
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
            }}
          >
            Deep sector knowledge across the industries that matter most to our
            clients.
          </p>
        </div>

        {/* Industry tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="card-premium p-6 text-center group cursor-default"
              >
                {/* Icon container */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.17 0.04 250 / 0.07), oklch(0.17 0.04 250 / 0.03))",
                    border: "1px solid oklch(0.17 0.04 250 / 0.1)",
                  }}
                >
                  <Icon
                    size={23}
                    style={{ color: "oklch(0.22 0.04 250)" }}
                    className="transition-all duration-300 group-hover:scale-105"
                  />
                </div>

                <h3
                  className="font-semibold text-sm mb-1.5"
                  style={{
                    color: "oklch(0.17 0.04 250)",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    lineHeight: 1.35,
                  }}
                >
                  {industry.name}
                </h3>
                <p
                  className="text-gray-500 leading-relaxed"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "0.775rem",
                    lineHeight: 1.65,
                  }}
                >
                  {industry.description}
                </p>

                {/* Gold underline on hover */}
                <div
                  className="h-0.5 w-0 group-hover:w-8 mx-auto mt-4 transition-all duration-400 rounded"
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
