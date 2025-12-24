import React from "react";
import { Helmet } from "react-helmet-async";
import Packages from "../components/Packages";

export default function PackagesPage() {
  const pageUrl = "https://axismediadigital.com/packages";

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
        name: "Packages",
        item: pageUrl,
      },
    ],
  };

  /* ================= PACKAGES / OFFER SCHEMA ================= */
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Website & Digital Marketing Packages",
    description:
      "Affordable website development, SEO, Google Ads and digital marketing packages for startups, SMEs and enterprises.",
    url: pageUrl,
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development Packages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Packages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads & PPC Packages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complete Digital Marketing Packages",
        },
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Affordable Website & Digital Marketing Packages | Axis Media
        </title>

        <meta
          name="description"
          content="Explore affordable website development, SEO, Google Ads and digital marketing packages by Axis Media. Flexible plans for startups, SMEs and enterprises."
        />

        <link rel="canonical" href={pageUrl} />

        {/* SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(offerSchema)}
        </script>
      </Helmet>

      {/* ================= PACKAGES COMPONENT ================= */}
      {/* Design untouched */}
      <section className="pt-0">
        <Packages />
      </section>

      {/* ================= EXTRA CONTENT FOR SEO ================= */}
      <section className="container mx-auto px-6 py-16 text-gray-900">
        {/* ONE SEO SAFE H1 */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Affordable Website & Digital Marketing Packages
        </h1>

        <p className="text-center mb-10 max-w-3xl mx-auto text-lg text-gray-600">
          Flexible packages designed for startups, SMEs and growing enterprises.
          Whether you need a high-converting website, SEO ranking, or lead-driven
          Google Ads — we have a plan that fits your business goals.
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-gray-700">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Why choose Axis Media packages?
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Transparent pricing — no hidden costs</li>
              <li>SEO & performance-optimized solutions</li>
              <li>Monthly support & reporting</li>
              <li>Scalable plans as your business grows</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Who are these packages for?
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Startups launching online</li>
              <li>Local businesses needing leads</li>
              <li>E-commerce brands scaling sales</li>
              <li>Companies upgrading digital presence</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
