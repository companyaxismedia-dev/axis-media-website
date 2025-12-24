import React from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle, FaStar, FaQuoteLeft } from "react-icons/fa";
import servicesData from "../data/servicesData";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-[#E8FDEB] to-[#CFF5D9]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Service not found</h1>
          <NavLink to="/services" className="text-green-700 underline">
            Back to Services
          </NavLink>
        </div>
      </section>
    );
  }

  const pageUrl = `https://www.axismediadigital.com/services/${service.slug}`;

  /* ================= FAQ SCHEMA ================= */
  const faqSchema = service.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a,
          },
        })),
      }
    : null;

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-[#E8FDEB] to-[#CFF5D9]">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          {service.title} Company in Delhi | Axis Media Digital
        </title>

        <meta
          name="description"
          content={`${service.details.slice(
            0,
            140
          )} Axis Media Digital provides professional ${service.title.toLowerCase()} services in Delhi.`}
        />

        <link rel="canonical" href={pageUrl} />

        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb UI */}
        <p className="text-sm text-gray-700 mb-3">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>{" "}
          /{" "}
          <NavLink to="/services" className="hover:underline">
            Services
          </NavLink>{" "}
          / <span className="font-semibold">{service.title}</span>
        </p>

        {/* ================= HERO ================= */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2">
          <div className="p-8">
            <h1 className="text-4xl font-extrabold mb-4">
              {service.title} Services in Delhi
            </h1>

            <p className="text-gray-700 text-lg mb-6">
              {service.details}
            </p>

            {/* INTERNAL LINKS */}
            <p className="mb-6 text-gray-700">
              This service is part of our complete{" "}
              <Link
                to="/digital-marketing"
                className="text-green-700 underline font-semibold"
              >
                digital marketing solutions
              </Link>{" "}
              designed to generate leads and long-term business growth.
            </p>

            <ul className="grid gap-2 text-gray-700 mb-6 text-lg">
              {service.bullets?.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  {b}
                </li>
              ))}
            </ul>

            <NavLink
              to="/contact"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
            >
              Get Free Consultation
            </NavLink>
          </div>

          <div className="h-80 lg:h-auto">
            <img
              src={service.heroImage}
              alt={`${service.title} services in Delhi`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* ================= BENEFITS ================= */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Benefits of {service.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Boost brand visibility",
              "Increase conversions & leads",
              "Long-term SEO friendly growth",
              "Build customer trust",
              "Target the right audience",
              "Higher ROI on marketing spend",
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <FaStar className="text-yellow-500 text-2xl mb-3" />
                <p className="font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="mt-20 py-16 text-center bg-green-600 text-white rounded-3xl shadow-xl">
          <h2 className="text-4xl font-extrabold mb-4">
            Grow Your Business With {service.title}
          </h2>
          <p className="text-lg mb-6">
            Get started with a free strategy call today.
          </p>

          <NavLink
            to="/contact"
            className="px-10 py-3 bg-white text-green-700 font-bold rounded-lg"
          >
            Contact Us Now →
          </NavLink>
        </section>
      </div>
    </main>
  );
}
