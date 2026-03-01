import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useSubmitContact } from "../hooks/useQueries";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutate, isPending } = useSubmitContact();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
      },
    });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border text-sm transition-all duration-200 outline-none focus:ring-2 bg-white";
  const inputStyle = {
    borderColor: "oklch(0.92 0.008 250)",
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    color: "oklch(0.17 0.04 250)",
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.97 0.004 250)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-1">
            <span className="section-eyebrow">Contact Us</span>
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
            Get In Touch
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
            }}
          >
            Ready to start a conversation? Reach out and we'll respond within
            one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Contact Form */}
          <div
            className="bg-white rounded-2xl p-8 lg:p-10"
            style={{
              border: "1px solid oklch(0.92 0.008 250)",
              boxShadow: "0 8px 32px -8px rgba(10,22,40,0.08)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "oklch(0.52 0.1 165 / 0.12)" }}
                >
                  <CheckCircle2
                    size={32}
                    style={{ color: "oklch(0.52 0.1 165)" }}
                  />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{
                    color: "oklch(0.17 0.04 250)",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  }}
                >
                  Message Received
                </h3>
                <p
                  className="text-gray-500 text-sm"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  }}
                >
                  Thank you for reaching out. A member of our team will be in
                  touch within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium underline"
                  style={{
                    color: "oklch(0.62 0.12 78)",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wide mb-2"
                      style={{
                        color: "oklch(0.17 0.04 250)",
                        fontFamily:
                          "'Plus Jakarta Sans', system-ui, sans-serif",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                      style={inputStyle}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wide mb-2"
                      style={{
                        color: "oklch(0.17 0.04 250)",
                        fontFamily:
                          "'Plus Jakarta Sans', system-ui, sans-serif",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                      style={inputStyle}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wide mb-2"
                      style={{
                        color: "oklch(0.17 0.04 250)",
                        fontFamily:
                          "'Plus Jakarta Sans', system-ui, sans-serif",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={inputClass}
                      style={inputStyle}
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold uppercase tracking-wide mb-2"
                      style={{
                        color: "oklch(0.17 0.04 250)",
                        fontFamily:
                          "'Plus Jakarta Sans', system-ui, sans-serif",
                      }}
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className={inputClass}
                      style={inputStyle}
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{
                      color: "oklch(0.17 0.04 250)",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business challenge or how we can help..."
                    className={inputClass}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-2 w-full py-4 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "oklch(0.17 0.04 250)",
                    color: "white",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  }}
                >
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact info */}
          <div className="flex flex-col gap-8">
            {/* Contact details */}
            <div className="flex flex-col gap-5">
              <ContactItem
                icon={<Phone size={20} />}
                label="Phone"
                value="+91 93514 69466"
                href="tel:+919351469466"
              />
              <ContactItem
                icon={<Mail size={20} />}
                label="Email"
                value="contact@velmoraadvisory.com"
                href="mailto:contact@velmoraadvisory.com"
              />
              <ContactItem
                icon={<MapPin size={20} />}
                label="Office"
                value="350 Fifth Avenue, Suite 4200, New York, NY 10118"
                href="#"
              />
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919351469466"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 self-start"
              style={{
                backgroundColor: "#25D366",
                color: "white",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                boxShadow: "0 4px 16px -4px rgba(37, 211, 102, 0.4)",
              }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            {/* Map placeholder */}
            <div
              className="flex-1 rounded-2xl flex flex-col items-center justify-center gap-3 min-h-48"
              style={{
                backgroundColor: "oklch(0.92 0.008 250)",
                border: "1px solid oklch(0.88 0.008 250)",
              }}
            >
              <MapPin size={32} style={{ color: "oklch(0.52 0.02 250)" }} />
              <div className="text-center">
                <p
                  className="font-semibold text-sm mb-1"
                  style={{
                    color: "oklch(0.17 0.04 250)",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  }}
                >
                  Visit Our Office
                </p>
                <p
                  className="text-xs text-gray-500"
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
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-start gap-4 p-5 rounded-xl bg-white transition-all duration-200 hover:-translate-y-0.5 group"
      style={{
        border: "1px solid oklch(0.92 0.008 250)",
        boxShadow: "0 2px 8px -2px rgba(10,22,40,0.06)",
        textDecoration: "none",
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: "oklch(0.72 0.12 80 / 0.1)",
          color: "oklch(0.62 0.12 78)",
        }}
      >
        {icon}
      </div>
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-wide mb-0.5"
          style={{
            color: "oklch(0.52 0.02 250)",
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          }}
        >
          {label}
        </p>
        <p
          className="text-sm font-medium"
          style={{
            color: "oklch(0.17 0.04 250)",
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          }}
        >
          {value}
        </p>
      </div>
    </a>
  );
}
