import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import portfolioItems from "../data/portfolioData";

export default function PortfolioDetailPage() {
  const { slug } = useParams();
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <NavLink to="/portfolio" className="text-blue-600 underline">
            Back to Portfolio
          </NavLink>
        </div>
      </section>
    );
  }

  const { title, image, details, features, tech, liveLink, repoLink, auth } =
    project;

  /* ---------------- SEO SCHEMA ---------------- */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://axismediadigital.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://axismediadigital.com/portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
      },
    ],
  };

  return (
    <main className="pt-24 pb-20 bg-[#EEF5FF] min-h-screen text-gray-900">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>{title} | Portfolio – Axis Media</title>

        <meta
          name="description"
          content={`${title} project by Axis Media. ${details.slice(
            0,
            150
          )}`}
        />

        <link
          rel="canonical"
          href={`https://axismediadigital.com/portfolio/${slug}`}
        />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-600 mb-3">
          <NavLink to="/" className="text-blue-600 hover:underline">
            Home
          </NavLink>{" "}
          /{" "}
          <NavLink to="/portfolio" className="text-blue-600 hover:underline">
            Portfolio
          </NavLink>{" "}
          / <span className="font-semibold">{title}</span>
        </p>

        {/* ================= TOP CARD ================= */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2 border border-gray-200 mb-12">
          <div className="p-8">
            <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
            <p className="text-lg text-gray-700 mb-6">{details}</p>

            <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc pl-5 space-y-1 mb-6 text-gray-700">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              Authentication / Accounts
            </h3>
            <p className="text-gray-700 mb-6">{auth}</p>

            <div className="flex flex-wrap gap-4 items-center">
              <NavLink
                to="/contact"
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
              >
                Free Consultation
              </NavLink>

              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Live Demo →
                </a>
              )}

              {repoLink && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Repository
                </a>
              )}
            </div>
          </div>

          <div className="h-80 lg:h-auto">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ================= TECHNOLOGY STACK ================= */}
        <section
          className="grid md:grid-cols-3 gap-6 p-6 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #DFF3FF, #E8F5E9)",
          }}
        >
          {[
            { title: "Frontend", list: tech.frontend },
            { title: "Backend & APIs", list: tech.backend },
            {
              title: "Database & Deployment",
              list: tech.database.concat([
                `Deployment: ${tech.deployment.join(", ")}`,
              ]),
            },
          ].map((box, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{box.title}</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {box.list.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ================= DEVELOPMENT FLOW ================= */}
        <section className="mt-12 bg-white p-10 rounded-2xl shadow border">
          <h3 className="text-3xl font-bold mb-4">
            A → Z Complete Development Flow
          </h3>

          <ol className="list-decimal pl-5 space-y-3 text-lg text-gray-700">
            <li>Requirement analysis & planning</li>
            <li>UI/UX design (Figma)</li>
            <li>Frontend component development</li>
            <li>Backend & API development</li>
            <li>Database & admin panel setup</li>
            <li>Integrations & automation</li>
            <li>Testing & speed optimisation</li>
            <li>Deployment & monitoring</li>
            <li>Support & maintenance</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
