import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Floating particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
    }> = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.012,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(201,168,76,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.pulse += p.pulseSpeed;
        const glow = Math.sin(p.pulse) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.opacity * glow})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.classList.add("visible");
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleServicesClick = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "oklch(0.11 0.035 252)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-bg-premium.dim_1920x1080.jpg')",
          transform: "scale(1.03)",
        }}
        aria-hidden="true"
      />

      {/* Multi-stop dramatic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              160deg,
              oklch(0.11 0.04 252 / 0.55) 0%,
              oklch(0.12 0.04 252 / 0.65) 40%,
              oklch(0.11 0.035 252 / 0.80) 70%,
              oklch(0.10 0.035 252 / 0.92) 100%
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Radial vignette edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 45%, transparent 35%, oklch(0.09 0.035 252 / 0.55) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Gold ambient glow — center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, oklch(0.72 0.12 80 / 0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Animated particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* Content */}
      <div
        className="relative max-w-6xl mx-auto px-6 lg:px-8 py-28 text-center"
        style={{ zIndex: 10 }}
      >
        <div ref={contentRef} className="reveal">
          {/* Pill eyebrow */}
          <div className="flex justify-center mb-9">
            <span className="section-eyebrow section-eyebrow-light">
              Premium Business Consultancy
            </span>
          </div>

          {/* Main heading — tighter tracking, larger scale, shimmer on gold line */}
          <h1
            className="font-display leading-[1.04] tracking-[-0.03em] text-white mb-7"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
            }}
          >
            Strategic Thinking.
            <br />
            <span className="text-gold-shimmer">Measurable Growth.</span>
          </h1>

          {/* Subheading — medium weight, not light, for crispness on dark bg */}
          <p
            className="text-white/75 max-w-xl mx-auto leading-[1.7] mb-12"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              fontWeight: 400,
            }}
          >
            Empowering businesses with data-driven strategy, financial clarity,
            and sustainable growth solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleContactClick}
              className="btn-hero-primary"
            >
              Book a Consultation
            </button>
            <button
              type="button"
              onClick={handleServicesClick}
              className="btn-hero-secondary"
            >
              Explore Our Services
            </button>
          </div>

          {/* Trust line */}
          <p
            className="mt-10 text-white/35 text-xs tracking-[0.15em] uppercase"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            Trusted by 250+ organizations across 18 countries
          </p>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.97 0.004 250))",
          zIndex: 10,
        }}
        aria-hidden="true"
      />

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors duration-300 animate-bounce"
        style={{ zIndex: 20 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </button>
    </section>
  );
}
