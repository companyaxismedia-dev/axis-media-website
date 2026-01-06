import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import portfolioItems from "../data/portfolioData";
import Portfolio from "../components/Portfolio";

export default function PortfolioPage() {
  /* ---------- SEO SCHEMA (PORTFOLIO LIST) ---------- */
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Axis Media Digital Portfolio",
    itemListElement: portfolioItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `https://axismediadigital.com/portfolio/${item.slug}`,
    })),
  };

  return (
    <main
      className="pt-24 min-h-screen"
      style={{ backgroundColor: "#ecf4fcff" }}
    >
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Website Development & Digital Marketing Portfolio | Axis Media Digital
        </title>

        <meta
          name="description"
          content="Explore Axis Media Digital portfolio featuring website development, e-commerce platforms, dashboards and digital marketing projects built for performance and SEO."
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/portfolio"
        />

        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>
      </Helmet>

      {/* ================= TOP PORTFOLIO COMPONENT ================= */}
      <Portfolio />

      {/* ================= MAIN GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">
          Website Development & Digital Marketing Portfolio
        </h1>

        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Explore our professionally delivered projects including websites,
          e-commerce platforms, dashboards and digital marketing solutions —
          built for performance, SEO and real business growth.
        </p>

        {/* INTERNAL LINKING */}
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          These projects are part of our complete{" "}
          <Link
            to="/services"
            className="text-blue-600 font-semibold underline"
          >
            website development services
          </Link>{" "}
          and{" "}
          <Link
            to="/digital-marketing"
            className="text-blue-600 font-semibold underline"
          >
            digital marketing solutions
          </Link>{" "}
          for businesses of all sizes.
        </p>

        {/* PROJECT GRID */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((p) => (
            <article
              key={p.slug}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition"
            >
              {/* IMAGE */}
              <div className="h-48 overflow-hidden rounded-lg mb-4">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {p.title}
              </h2>

              {/* SHORT DESC */}
              <p className="text-gray-600 mb-4">{p.shortDesc}</p>

              {/* BUTTONS */}
              <div className="flex items-center justify-between">
                <NavLink
                  to={`/portfolio/${p.slug}`}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-semibold"
                >
                  More Details →
                </NavLink>

                {p.liveLink ? (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-600 underline"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-sm text-gray-400">No demo</span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-700">
            Want a custom website like these?
            <NavLink to="/contact" className="text-blue-600 underline ml-1">
              Contact Us
            </NavLink>
          </p>
        </div>
      </section>
    </main>
  );
}
