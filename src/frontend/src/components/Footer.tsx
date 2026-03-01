import { Facebook, Linkedin, Twitter } from "lucide-react";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Business Strategy",
  "Financial Planning",
  "Market Expansion",
  "Operations Optimization",
  "Startup Advisory & Mentorship",
  "Risk & Performance Management",
];

export default function Footer() {
  const handleNav = (href: string) => {
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: "oklch(0.13 0.035 250)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b"
          style={{ borderColor: "oklch(1 0 0 / 0.08)" }}
        >
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span
                className="font-display text-xl tracking-widest uppercase font-bold text-white block"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                VELMORA
              </span>
              <span
                className="font-display text-xl tracking-widest uppercase font-bold block"
                style={{
                  color: "oklch(0.72 0.12 80)",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                ADVISORY
              </span>
            </div>
            <p
              className="text-xs font-medium tracking-[0.15em] uppercase mb-5"
              style={{
                color: "oklch(0.72 0.12 80 / 0.8)",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Strategic Thinking. Measurable Growth.
            </p>
            <p
              className="text-sm text-white/50 leading-relaxed"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              A premium advisory firm delivering bold strategies and measurable
              outcomes for ambitious businesses worldwide.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                { Icon: Twitter, href: "https://x.com", label: "Twitter" },
                {
                  Icon: Facebook,
                  href: "https://facebook.com",
                  label: "Facebook",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: "oklch(1 0 0 / 0.08)",
                    color: "oklch(1 0 0 / 0.6)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-5"
              style={{
                color: "oklch(0.72 0.12 80)",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-5"
              style={{
                color: "oklch(0.72 0.12 80)",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => handleNav("#services")}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-150 text-left"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-5"
              style={{
                color: "oklch(0.72 0.12 80)",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <p
                className="text-sm text-white/50"
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                +1 (800) 555-0199
              </p>
              <p
                className="text-sm text-white/50"
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                contact@velmoraadvisory.com
              </p>
              <p
                className="text-sm text-white/50 leading-relaxed"
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                350 Fifth Avenue, Suite 4200
                <br />
                New York, NY 10118
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-white/35"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            © {currentYear} Velmora Advisory. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              className="text-xs text-white/35 hover:text-white/60 transition-colors"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="text-xs text-white/35 hover:text-white/60 transition-colors"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
