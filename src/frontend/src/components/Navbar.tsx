import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(10,22,40,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <button
            type="button"
            className="flex items-baseline gap-0.5 select-none"
            onClick={handleLogoClick}
            aria-label="Velmora Advisory — back to top"
          >
            <span
              className={`font-display text-xl tracking-widest uppercase font-bold transition-colors duration-300 ${
                scrolled ? "text-navy" : "text-white"
              }`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              VELMORA
            </span>
            <span
              className="font-display text-xl tracking-widest uppercase font-bold"
              style={{
                color: "oklch(0.72 0.12 80)",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              &nbsp;ADVISORY
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-80 ${
                  scrolled ? "text-navy" : "text-white/90"
                }`}
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="ml-2 px-5 py-2.5 rounded text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 shadow-gold"
              style={{
                backgroundColor: "oklch(0.72 0.12 80)",
                color: "oklch(0.17 0.04 250)",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="lg:hidden bg-white border-t border-gray-100 py-4 px-2 shadow-lg"
            style={{ borderRadius: "0 0 12px 12px" }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50"
                  style={{
                    color: "oklch(0.17 0.04 250)",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="mx-4 mt-2 px-5 py-3 rounded text-sm font-semibold text-center transition-all hover:opacity-90"
                style={{
                  backgroundColor: "oklch(0.72 0.12 80)",
                  color: "oklch(0.17 0.04 250)",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                Book a Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
