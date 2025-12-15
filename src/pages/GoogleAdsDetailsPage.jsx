// src/pages/GoogleAdsDetailsPage.jsx
import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaCheckCircle,
  FaChartLine,
  FaBullseye,
  FaUsers,
} from "react-icons/fa";
import adsServices from "../data/googleAdsData";

export default function GoogleAdsDetailsPage() {
  const { slug } = useParams();
  const service = adsServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-gray-100 text-center">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
        <NavLink to="/google-ads" className="text-blue-600 underline">
          Go Back
        </NavLink>
      </section>
    );
  }

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
        name: "Google Ads",
        item: "https://axismediadigital.com/google-ads",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://axismediadigital.com/google-ads/${service.slug}`,
      },
    ],
  };

  /* ================= FAQ SCHEMA ================= */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.features.map((f) => ({
      "@type": "Question",
      name: `Why is ${f} important?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${f} helps improve campaign performance, ROI and business growth when managed professionally.`,
      },
    })),
  };

  return (
    <main className="pt-24 pb-20 bg-gray-100 min-h-screen">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>{service.title} | Google Ads Services – Axis Media</title>
        <meta
          name="description"
          content={service.longDescription}
        />
        <link
          rel="canonical"
          href={`https://axismediadigital.com/google-ads/${service.slug}`}
        />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 text-gray-900">

        {/* ===== BREADCRUMB UI ===== */}
        <p className="text-sm text-gray-500 mb-4">
          <NavLink to="/" className="text-blue-600 underline">Home</NavLink> /
          <NavLink to="/google-ads" className="text-blue-600 underline"> Google Ads</NavLink> /
          <span className="font-semibold"> {service.title}</span>
        </p>

        {/* ===== TITLE ===== */}
        <h1 className="text-5xl font-extrabold mb-4">{service.title}</h1>
        <p className="text-xl text-gray-700 mb-10">
          {service.longDescription}
        </p>

        {/* ===== IMAGE ===== */}
        <div className="rounded-2xl overflow-hidden h-[420px] mb-14 shadow-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* ===== FEATURES ===== */}
        <section className="bg-white p-10 rounded-2xl shadow-xl border mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>

          <ul className="grid sm:grid-cols-2 gap-5 text-lg">
            {service.features.map((item, i) => (
              <li key={i} className="flex gap-3 items-center">
                <FaCheckCircle className="text-green-500 text-2xl" />
                {item}
              </li>
            ))}
          </ul>

          <NavLink
            to="/contact"
            className="mt-8 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600"
          >
            Enquire Now →
          </NavLink>
        </section>

        {/* ===== BENEFITS ===== */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            Why This Service Helps Your Business
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChartLine className="text-blue-500 text-5xl" />,
                title: "Increase Revenue",
                text: "High-ROI campaigns designed to convert visitors into customers.",
              },
              {
                icon: <FaBullseye className="text-red-500 text-5xl" />,
                title: "Precise Targeting",
                text: "Reach people who are actively searching for your services.",
              },
              {
                icon: <FaUsers className="text-green-500 text-5xl" />,
                title: "Massive Reach",
                text: "Appear on Google Search, YouTube & partner websites.",
              },
            ].map((box, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg border text-center"
              >
                <div className="mb-4 flex justify-center">{box.icon}</div>
                <h3 className="text-xl font-bold mb-2">{box.title}</h3>
                <p className="text-gray-600">{box.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <div className="text-center">
          <NavLink
            to="/contact"
            className="bg-green-500 hover:bg-green-600 text-black px-10 py-4 rounded-xl text-xl font-semibold"
          >
            Get Free Google Ads Audit →
          </NavLink>
        </div>
      </div>
    </main>
  );
}
