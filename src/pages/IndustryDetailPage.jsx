import React from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { findIndustryBySlug } from "../data/IndustriesData";

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const industry = findIndustryBySlug(slug);

  if (!industry) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-[#F7FFF6] text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Industry not found</h1>
          <NavLink to="/industries" className="text-emerald-600 underline">
            Back to Industries
          </NavLink>
        </div>
      </section>
    );
  }

  const pageUrl = `https://www.axismediadigital.com/industries/${slug}`;
  const Icon = industry.icon;

  return (
    <>
      {/* ================= SEO (AUTO FROM DATA) ================= */}
      <Helmet>
        <title>{industry.seoTitle}</title>

        <meta
          name="description"
          content={industry.seoDesc}
        />

        <link rel="canonical" href={pageUrl} />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.axismediadigital.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Industries",
                "item": "https://www.axismediadigital.com/industries"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": industry.title,
                "item": pageUrl
              }
            ]
          })}
        </script>

        {/* FAQ Schema */}
        {industry.faqs && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": industry.faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a
                }
              }))
            })}
          </script>
        )}
      </Helmet>

      <main className="pt-24 pb-20 bg-gradient-to-b from-[#F4FFF7] to-[#E8F8EE] min-h-screen text-gray-900">
        <div className="max-w-6xl mx-auto px-6">

          {/* Breadcrumb */}
          <p className="text-sm text-gray-600 mb-3">
            <NavLink to="/" className="hover:underline text-gray-700">Home</NavLink>{" "}
            /{" "}
            <NavLink to="/industries" className="hover:underline text-emerald-600">Industries</NavLink>
            {" / "}
            <span className="font-semibold">{industry.title}</span>
          </p>

          {/* HERO */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2 border border-gray-200">
            <div className="p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gray-50">
                  <Icon className={`text-4xl ${industry.colorClass}`} />
                </div>
                <div>
                  <h1 className="text-4xl font-extrabold text-gray-900">
                    {industry.title} Digital Marketing Services
                  </h1>
                  <p className="text-gray-600 mt-1 text-lg">
                    {industry.longDesc}
                  </p>
                </div>
              </div>

              {/* INTERNAL LINKS */}
              <p className="text-gray-600 mt-4">
                Explore our{" "}
                <Link to="/digital-marketing" className="text-emerald-700 underline font-semibold">
                  Digital Marketing
                </Link>,{" "}
                <Link to="/seo-services" className="text-emerald-700 underline font-semibold">
                  SEO Services
                </Link>{" "}
                and{" "}
                <Link to="/google-ads" className="text-emerald-700 underline font-semibold">
                  Google Ads Solutions
                </Link>.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 border">
                  <h4 className="font-semibold mb-2">Main Services</h4>
                  <ul className="text-gray-700 space-y-2">
                    {industry.features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border">
                  <h4 className="font-semibold mb-2">Business Benefits</h4>
                  <ul className="text-gray-700 space-y-2">
                    {industry.benefits.map((b, i) => (
                      <li key={i}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>

            <div className="h-72 lg:h-auto">
              <img
                src={industry.heroImage}
                alt={industry.primaryKeyword}
                className="w-full h-full object-cover"
              />
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
