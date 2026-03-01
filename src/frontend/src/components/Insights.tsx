import { ArrowRight, Clock } from "lucide-react";
import type { BlogArticle } from "../backend.d.ts";
import { useGetAllBlogArticles } from "../hooks/useQueries";

const fallbackArticles: BlogArticle[] = [
  {
    category: "Growth Strategy",
    title: "The 5-Stage Framework for Scaling a B2B Business Beyond $10M ARR",
    excerpt:
      "Most B2B companies stall between $3M and $10M ARR. In this deep dive, we explore the five critical strategic pivots that separate companies that break through from those that plateau.",
    date: BigInt(Date.now() * 1_000_000 - 7 * 24 * 60 * 60 * 1_000_000_000),
    readTime: 8n,
  },
  {
    category: "Financial Planning",
    title:
      "Zero-Based Budgeting: Why Leading CFOs Are Revisiting This Classic Tool",
    excerpt:
      "Zero-based budgeting is experiencing a renaissance. We examine how forward-thinking finance leaders are using ZBB to drive strategic resource allocation and margin expansion.",
    date: BigInt(Date.now() * 1_000_000 - 14 * 24 * 60 * 60 * 1_000_000_000),
    readTime: 6n,
  },
  {
    category: "Market Expansion",
    title: "Entering Emerging Markets: A Risk-Adjusted Playbook for 2026",
    excerpt:
      "Emerging markets offer compelling growth opportunities — but also significant risks. This playbook outlines our proven framework for market entry decisions that balance ambition with prudence.",
    date: BigInt(Date.now() * 1_000_000 - 21 * 24 * 60 * 60 * 1_000_000_000),
    readTime: 10n,
  },
];

function formatDate(date: bigint): string {
  try {
    return new Date(Number(date) / 1_000_000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

const categoryColors: Record<string, string> = {
  "Growth Strategy": "oklch(0.52 0.1 165 / 0.12)",
  "Financial Planning": "oklch(0.62 0.12 78 / 0.12)",
  "Market Expansion": "oklch(0.17 0.04 250 / 0.08)",
};

const categoryTextColors: Record<string, string> = {
  "Growth Strategy": "oklch(0.42 0.1 165)",
  "Financial Planning": "oklch(0.52 0.12 78)",
  "Market Expansion": "oklch(0.22 0.04 250)",
};

export default function Insights() {
  const { data: articles, isLoading } = useGetAllBlogArticles();

  const displayArticles =
    articles && articles.length > 0 ? articles : fallbackArticles;

  return (
    <section
      id="insights"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="section-eyebrow">Thought Leadership</span>
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
              Insights &amp; Perspectives
            </h2>
          </div>
          <p
            className="text-gray-500 max-w-xs flex-shrink-0"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "0.9375rem",
              lineHeight: 1.65,
            }}
          >
            Expert analysis and frameworks from the Velmora Advisory team.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl animate-pulse"
                style={{
                  backgroundColor: "oklch(0.97 0.004 250)",
                  height: "360px",
                }}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayArticles.map((article) => (
              <article
                key={article.title}
                className="card-premium p-0 overflow-hidden flex flex-col group cursor-pointer"
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: "oklch(0.72 0.12 80 / 0.15)" }}
                />
                <div
                  className="h-1 w-0 group-hover:w-full -mt-1 transition-all duration-500 relative z-10"
                  style={{ backgroundColor: "oklch(0.72 0.12 80)" }}
                />

                <div className="p-8 flex flex-col flex-1">
                  {/* Category badge */}
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 self-start"
                    style={{
                      backgroundColor:
                        categoryColors[article.category] ??
                        "oklch(0.97 0.004 250)",
                      color:
                        categoryTextColors[article.category] ??
                        "oklch(0.17 0.04 250)",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    {article.category}
                  </span>

                  <h3
                    className="font-semibold text-base leading-snug mb-3 flex-1"
                    style={{
                      color: "oklch(0.17 0.04 250)",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    {article.title}
                  </h3>

                  <p
                    className="text-sm text-gray-500 leading-relaxed mb-6"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div
                    className="flex items-center justify-between mt-auto pt-4 border-t"
                    style={{ borderColor: "oklch(0.92 0.008 250)" }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs text-gray-400"
                        style={{
                          fontFamily:
                            "'Plus Jakarta Sans', system-ui, sans-serif",
                        }}
                      >
                        {formatDate(article.date)}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Clock size={12} />
                        <span
                          className="text-xs"
                          style={{
                            fontFamily:
                              "'Plus Jakarta Sans', system-ui, sans-serif",
                          }}
                        >
                          {Number(article.readTime)} min read
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                      style={{
                        color: "oklch(0.62 0.12 78)",
                        fontFamily:
                          "'Plus Jakarta Sans', system-ui, sans-serif",
                      }}
                    >
                      Read More <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
