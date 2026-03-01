import { useCounter } from "../hooks/useCounter";

function StatItem({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCounter(end, 2200);

  return (
    <div ref={ref} className="text-center relative group">
      {/* Faint circle glow behind number */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.72 0.12 80 / 0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="font-display font-bold mb-2 relative"
        style={{
          color: "oklch(0.72 0.12 80)",
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(3rem, 6vw, 4.5rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        className="text-white/60 font-medium uppercase tracking-[0.12em]"
        style={{
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          fontSize: "0.75rem",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.15 0.042 252)" }}
    >
      {/* Rich background: layered mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Diagonal lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, oklch(0.72 0.12 80 / 0.035) 0, oklch(0.72 0.12 80 / 0.035) 1px, transparent 0, transparent 40px)",
          }}
        />
        {/* Central glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px]"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.72 0.12 80 / 0.06) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Eyebrow label */}
        <div className="flex items-center gap-5 mb-14 justify-center">
          <div
            className="h-px flex-1 max-w-[120px]"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.72 0.12 80 / 0.3))",
            }}
          />
          <span className="section-eyebrow section-eyebrow-light">
            Velmora By The Numbers
          </span>
          <div
            className="h-px flex-1 max-w-[120px]"
            style={{
              background:
                "linear-gradient(to left, transparent, oklch(0.72 0.12 80 / 0.3))",
            }}
          />
        </div>

        {/* Stat grid with vertical dividers on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {[
            { end: 250, suffix: "+", label: "Projects Completed" },
            { end: 95, suffix: "%", label: "Client Retention" },
            { end: 40, suffix: "+", label: "Expert Consultants" },
            { end: 12, suffix: "+", label: "Years Industry Experience" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="relative"
              style={{
                borderLeft: i > 0 ? "1px solid oklch(1 0 0 / 0.07)" : "none",
              }}
            >
              <StatItem
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
