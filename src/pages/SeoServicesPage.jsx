import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaTools,
  FaMapMarkerAlt,
  FaPenFancy,
  FaLink,
  FaChartLine,
} from "react-icons/fa";

export default function SeoServicesPage() {

  /* ================= SCHEMA ================= */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SEO Services",
    provider: {
      "@type": "Organization",
      name: "Axis Media Digital",
      url: "https://axismediadigital.com",
    },
    areaServed: "India",
    description:
      "Professional SEO services in India including technical SEO, on-page SEO, local SEO and content optimization.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does SEO take to show results?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "SEO usually shows visible improvement within 2–3 months depending on competition and website condition.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide local SEO services?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, we provide complete local SEO including Google Business Profile optimization and local rankings.",
        },
      },
      {
        "@type": "Question",
        name: "Is your SEO process safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, we use 100% white-hat SEO techniques aligned with Google guidelines.",
        },
      },
    ],
  };

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>SEO Services in India | SEO Company & Agency – Axis Media</title>

        <meta
          name="description"
          content="Axis Media Digital is a professional SEO company in India offering white-hat SEO services to rank higher on Google, increase organic traffic and generate leads."
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/seo-services"
        />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Professional SEO Services in India
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Axis Media Digital is a trusted SEO agency helping businesses rank
            higher on Google, increase organic traffic and generate quality
            leads.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
            >
              Get Free SEO Audit
            </Link>

            <Link
              to="/portfolio"
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Result-Driven SEO Company for Business Growth
          </h2>

          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Our SEO strategies focus on long-term rankings, brand authority and
            real business growth through ethical, data-driven optimization.
          </p>

          {/* INTERNAL LINKS */}
          <p className="mt-6 text-gray-700">
            Explore our complete{" "}
            <Link to="/services" className="text-blue-600 underline font-semibold">
              digital marketing services
            </Link>{" "}
            and{" "}
            <Link to="/digital-marketing" className="text-blue-600 underline font-semibold">
              growth solutions
            </Link>.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard icon={<FaSearch />} title="Keyword Research & Strategy"
              desc="Target high-intent keywords that convert visitors into leads." />
            <ServiceCard icon={<FaTools />} title="On-Page & Technical SEO"
              desc="Optimize site structure, speed, Core Web Vitals & indexing." />
            <ServiceCard icon={<FaMapMarkerAlt />} title="Local SEO"
              desc="Rank higher on Google Maps & local search results." />
            <ServiceCard icon={<FaPenFancy />} title="Content Optimization"
              desc="SEO-friendly content that ranks and engages users." />
            <ServiceCard icon={<FaLink />} title="Link Building"
              desc="High-authority backlinks for long-term SEO growth." />
            <ServiceCard icon={<FaChartLine />} title="SEO Reporting"
              desc="Transparent monthly reports with real metrics." />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want to Rank on Google?
        </h2>
        <p className="text-lg mb-8">
          Talk to our SEO experts and get a free consultation today.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Talk to SEO Expert
        </Link>
      </section>
    </>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition text-center">
      <div className="text-blue-600 text-4xl mb-4 mx-auto">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
