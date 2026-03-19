import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { IndustriesData } from "../data/IndustriesData";

export default function CategoryPage() {
  const { category } = useParams();

  const cat = IndustriesData.find(
    (c) => c.id === category || c.slugPrefix === category
  );

  if (!cat) {
    return (
      <div className="pt-40 text-center text-3xl font-bold text-red-600">
        Category Not Found
      </div>
    );
  }

  const Icon = cat.icon;
  const pageUrl = `https://axismediadigital.com/industries/${cat.id}`;

  /* ================= SERVICE SCHEMA ================= */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${cat.title} Website & Digital Marketing Services`,
    provider: {
      "@type": "Organization",
      name: "Axis Media",
      url: "https://axismediadigital.com",
    },
    areaServed: "India",
    description: cat.longDesc,
  };

  /* ================= BREADCRUMB SCHEMA ================= */
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
        name: "Industries",
        item: "https://axismediadigital.com/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cat.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <section className="pt-40 pb-20 min-h-screen bg-[#E4FBE7]">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          {cat.title} Website & Digital Marketing Services | Axis Media
        </title>

        <meta
          name="description"
          content={`Axis Media provides industry-specific website development, SEO and digital marketing solutions for ${cat.title} businesses.`}
        />

        <link rel="canonical" href={pageUrl} />

        {/* SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        {/* ================= BREADCRUMB UI ================= */}
        <p className="text-gray-600 mb-6">
          <NavLink to="/industries" className="text-green-700 font-semibold">
            Industries
          </NavLink>{" "}
          / <span className="text-gray-800">{cat.title}</span>
        </p>

        {/* ================= HEADING ================= */}
        <div className="flex items-center gap-4 mb-10">
          {Icon && <Icon className="text-5xl text-green-700" />}
          <h1 className="text-5xl font-extrabold text-gray-900">
            {cat.title} Website & Digital Marketing Services
          </h1>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-12">
          {cat.longDesc}
        </p>

        {/* ================= FEATURES ================= */}
        {cat.features?.length > 0 && (
          <>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Key Highlights for {cat.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {cat.features.slice(0, 6).map((f, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md border border-gray-200 rounded-xl p-6 hover:-translate-y-1 transition"
                >
                  <h3 className="font-semibold text-green-700 mb-2">
                    ✔ Feature {i + 1}
                  </h3>
                  <p className="text-gray-700">{f}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ================= SUB-INDUSTRIES ================= */}
        {cat.items?.length > 0 && (
          <div className="grid md:grid-cols-2 gap-10">
            {cat.items.map((item) => (
              <NavLink
                key={item.slug}
                to={`/industry/${item.slug}`}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:-translate-y-1 hover:shadow-2xl transition block"
              >
                <h2 className="text-2xl font-bold mb-2 text-gray-900">
                  {item.name}
                </h2>

                <p className="text-gray-600 text-lg">
                  Learn how we help <b>{item.name}</b> grow using websites, SEO,
                  ads & branding.
                </p>

                <ul className="mt-4 text-gray-700 space-y-1">
                  <li>• SEO & Google Ranking</li>
                  <li>• Custom Website Development</li>
                  <li>• Google & Meta Ads</li>
                </ul>
              </NavLink>
            ))}
          </div>
        )}

        {/* ================= WHY CHOOSE US ================= */}
        <div className="mt-20 bg-green-100 border border-green-300 p-10 rounded-2xl shadow-md">
          <h3 className="text-3xl font-bold text-green-800 mb-4">
            Why businesses trust Axis Media for {cat.title}?
          </h3>

          <ul className="text-lg space-y-2 text-gray-800">
            <li>• Industry-specific website solutions</li>
            <li>• SEO tailored for your niche</li>
            <li>• High-converting ad campaigns</li>
            <li>• Transparent monthly reporting</li>
          </ul>

          <NavLink
            to="/contact"
            className="inline-block mt-6 px-8 py-3 bg-green-700 text-white rounded-xl shadow hover:bg-green-800 transition"
          >
            Book Free Consultation
          </NavLink>
        </div>
      </div>
    </section>
  );
}
