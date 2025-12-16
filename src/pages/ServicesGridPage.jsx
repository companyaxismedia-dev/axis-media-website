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

  /* ================= FAQ SCHEMA ================= */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What digital marketing services does Axis Media provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Axis Media provides SEO services, Google Ads management, social media marketing, website development, e-commerce solutions and complete digital growth strategies.",
        },
      },
      {
        "@type": "Question",
        "name": "Are your websites SEO optimized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, all websites developed by Axis Media are fast, mobile responsive and SEO optimized for better Google rankings.",
        },
      },
      {
        "@type": "Question",
        "name": "Is Axis Media suitable for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, Axis Media offers affordable digital marketing packages for startups, small businesses and enterprises.",
        },
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-[#F8FAFF] via-[#EEF3FF] to-[#E6ECFF]">

      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Digital Marketing Services & Website Development | Axis Media
        </title>

        <meta
          name="description"
          content="Axis Media is a full-service digital marketing agency offering SEO, Google Ads, social media marketing, website development and e-commerce solutions to grow your business online."
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/services"
        />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* ================= SERVICES GRID ================= */}
      {/* Hidden H2 for SEO (no UI impact) */}
      <h2 className="sr-only">
        Axis Media Digital Marketing Services
      </h2>

      <ServicesGrid />

      {/* ================= CONTENT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-gray-900">

        {/* ONE & ONLY H1 */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
          Digital Marketing & Web Development Services
        </h1>

        <p className="text-center max-w-4xl mx-auto mb-14 text-gray-700 text-lg leading-relaxed">
          Axis Media is a results-driven digital marketing agency delivering
          SEO services, Google Ads management, social media marketing, website
          development and e-commerce solutions to help businesses grow online
          with measurable results.
        </p>

        {/* ================= SERVICE CARDS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Website Development Services",
              text: "Fast, responsive and SEO-optimized websites built to convert visitors into customers.",
              link: "/services/website-development",
            },
            {
              title: "E-commerce Development",
              text: "Secure online stores with payment gateway integration and conversion-focused UX.",
              link: "/services/ecommerce",
            },
            {
              title: "SEO Services",
              text: "On-page, technical and content SEO to improve Google rankings and organic traffic.",
              link: "/services/seo",
            },
            {
              title: "Google Ads Management",
              text: "High-ROI Google Ads campaigns with advanced tracking and optimization.",
              link: "/services/google-ads",
            },
            {
              title: "Social Media Marketing",
              text: "Content creation, branding and paid social media growth strategies.",
              link: "/services/social-media",
            },
            {
              title: "Graphic Design & Branding",
              text: "Creative designs, brand identity and marketing visuals for strong brand presence.",
              link: "/services/graphic-design",
            },
          ].map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {service.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {service.text}
              </p>

              <NavLink
                to={service.link}
                className="text-sky-600 font-semibold hover:underline"
              >
                Learn More →
              </NavLink>
            </article>
          ))}
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why Choose Axis Media?
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
            {[
              "Result-driven digital marketing strategies",
              "Transparent reporting & honest communication",
              "Affordable pricing for all business sizes",
              "Long-term support & continuous optimization",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= INTERNAL LINKS ================= */}
        <div className="text-center mt-16 text-gray-700">
          Want to see our work?
          <NavLink to="/portfolio" className="text-sky-600 underline ml-1">
            View Portfolio
          </NavLink>
          {" | "}
          <NavLink to="/contact" className="text-sky-600 underline">
            Get Free Consultation
          </NavLink>
        </div>

      </section>
    </main>
  );
}
