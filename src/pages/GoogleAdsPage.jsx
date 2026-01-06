import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import googleAdsData from "../data/googleAdsData";

export default function GoogleAdsPage() {

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
        name: "Google Ads Services",
        item: "https://axismediadigital.com/google-ads",
      },
    ],
  };

  return (
    <main className="pt-24 bg-[#F3F6FF] min-h-screen">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Google Ads Services in Delhi | PPC & Lead Generation – Axis Media Digital
        </title>

        <meta
          name="description"
          content="Axis Media Digital provides professional Google Ads services in Delhi including Search Ads, Display Ads, YouTube Ads and Remarketing to generate high-quality leads and sales."
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/google-ads"
        />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= PAGE HEADING ================= */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
          Google Ads Services in Delhi
        </h1>

        <p className="text-gray-600 text-center text-lg max-w-3xl mx-auto mb-10">
          High-performance Google Ads campaigns designed to generate
          instant leads, sales and maximum ROI for your business.
        </p>

        {/* INTERNAL LINKING (VERY IMPORTANT) */}
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-14">
          Our Google Ads services are part of our complete{" "}
          <Link
            to="/digital-marketing"
            className="text-green-700 font-semibold underline"
          >
            digital marketing solutions
          </Link>{" "}
          and work seamlessly with SEO and landing page optimization for
          better conversions.
        </p>

        {/* ================= GOOGLE ADS SERVICES GRID ================= */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {googleAdsData.map((item) => (
            <article
              key={item.slug}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6
                         hover:shadow-2xl transition-transform hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="h-48 rounded-xl overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {item.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mb-5">
                {item.longDescription}
              </p>

              {/* CTA */}
              <NavLink
                to={`/google-ads/${item.slug}`}
                className="inline-block px-5 py-2 bg-yellow-500 hover:bg-yellow-600
                           text-black rounded-lg font-semibold"
              >
                More Details →
              </NavLink>
            </article>
          ))}
        </section>

        {/* ================= CTA BOTTOM ================= */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Get Instant Leads from Google?
          </h2>

          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Start high-converting Google Ads campaigns managed by certified
            experts. Get more traffic, leads and sales.
          </p>

          <NavLink
            to="/contact"
            className="bg-green-600 hover:bg-green-700 text-white
                       px-10 py-4 rounded-xl text-xl font-semibold shadow-lg"
          >
            Get Free Google Ads Consultation →
          </NavLink>
        </div>

      </div>
    </main>
  );
}
