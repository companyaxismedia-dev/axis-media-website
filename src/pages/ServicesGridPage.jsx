// src/pages/ServicesGridPage.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import ServicesGrid from "../components/ServicesGrid";
import { FaCheckCircle } from "react-icons/fa";

export default function ServicesGridPage() {

  /* ================= BREADCRUMB SCHEMA ================= */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://axismediadigital.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://axismediadigital.com/services",
      },
    ],
  };

  return (
    <main className="pt-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B] min-h-screen">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Digital Marketing & Web Services | Axis Media</title>
        <meta
          name="description"
          content="Axis Media provides website development, SEO, Google Ads, social media marketing, e-commerce and complete digital growth services for businesses."
        />
        <link
          rel="canonical"
          href="https://axismediadigital.com/services"
        />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* ================= SERVICES GRID ================= */}
      <ServicesGrid />

      {/* ================= DETAILS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-6">
          Our Complete Digital Services
        </h1>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          We craft strategies, design experiences and run campaigns focused on
          measurable business results and long-term growth.
        </p>

        {/* SERVICE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Website Development",
              text: "Full-stack responsive websites, speed optimized and SEO-ready.",
              link: "/services/website-development",
            },
            {
              title: "E-commerce Development",
              text: "Secure shopping, payment integration and conversion-focused UX.",
              link: "/services/ecommerce",
            },
            {
              title: "SEO Services",
              text: "Technical & content SEO to grow organic traffic and rankings.",
              link: "/services/seo",
            },
            {
              title: "Google Ads",
              text: "High-ROI PPC campaigns with conversion tracking.",
              link: "/services/google-ads",
            },
            {
              title: "Social Media Marketing",
              text: "Content strategy, creatives and paid social growth.",
              link: "/services/social-media",
            },
            {
              title: "Graphic Design",
              text: "Brand identity and visual assets for consistent branding.",
              link: "/services/graphic-design",
            },
          ].map((s, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {s.title}
              </h2>

              <p className="text-gray-600 mb-4">{s.text}</p>

              <NavLink
                to={s.link}
                className="text-sky-600 font-semibold hover:underline inline-flex items-center gap-2"
              >
                More Details →
              </NavLink>
            </article>
          ))}
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Why choose Axis Media?
          </h3>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-300 text-left">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" />
              Expert team with proven, measurable results
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" />
              Transparent reporting & clear communication
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" />
              Affordable packages for startups to enterprises
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" />
              Quick delivery & long-term support
            </li>
          </ul>
        </div>

      </section>
    </main>
  );
}
