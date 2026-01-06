import React from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle } from "react-icons/fa";
import dmServicesData from "../data/dmServicesData";

export default function DigitalMarketingDetailPage() {
  const { slug } = useParams();
  const service = dmServicesData.find((s) => s.slug === slug);

  if (!service) {
    return <div className="pt-40 text-center text-2xl">Service Not Found</div>;
  }

  const { intro, benefits, features, faqs } = service.longContent;
  const pageUrl = `https://www.axismediadigital.com/digital-marketing/${slug}`;

  return (
    <section className="pt-28 pb-20 bg-white">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          {service.title} Company in Delhi | Axis Media Digital
        </title>

        <meta
          name="description"
          content={`${intro} Axis Media Digital provides professional ${service.title.toLowerCase()} services in Delhi to help businesses grow online.`}
        />

        <link rel="canonical" href={pageUrl} />

        {/* FAQ Schema */}
        {faqs && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a,
                },
              })),
            })}
          </script>
        )}
      </Helmet>

      <div className="max-w-5xl mx-auto px-6">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-600 mb-4">
          <NavLink to="/" className="hover:underline">Home</NavLink> /{" "}
          <NavLink to="/digital-marketing" className="hover:underline">
            Digital Marketing
          </NavLink>{" "}
          / <span className="font-semibold">{service.title}</span>
        </p>

        <img
          src={service.heroImage}
          alt={`${service.title} services in Delhi`}
          className="rounded-3xl mb-10"
        />

        {/* H1 */}
        <h1 className="text-4xl font-bold mb-6">
          {service.title} Services in Delhi
        </h1>

        <p className="text-gray-700 mb-10">
          {intro} We help businesses improve visibility, generate leads and
          increase ROI through result-driven digital marketing strategies.
        </p>

        {/* Internal Links */}
        <p className="mb-8 text-gray-700">
          Explore our complete{" "}
          <Link
            to="/digital-marketing"
            className="text-emerald-600 font-semibold underline"
          >
            digital marketing services
          </Link>{" "}
          or view{" "}
          <Link
            to="/industries"
            className="text-emerald-600 font-semibold underline"
          >
            industry-specific solutions
          </Link>.
        </p>

        {/* Benefits */}
        <h2 className="text-2xl font-bold mb-4">
          Benefits of {service.title}
        </h2>
        <ul className="space-y-3 mb-10">
          {benefits.map((b, i) => (
            <li key={i} className="flex gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              {b}
            </li>
          ))}
        </ul>

        {/* Features */}
        <h2 className="text-2xl font-bold mb-4">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f, i) => (
            <div key={i} className="p-5 bg-gray-50 rounded-xl">
              {f}
            </div>
          ))}
        </div>

        {/* FAQs */}
        {faqs && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, i) => (
              <details key={i} className="mb-4">
                <summary className="font-semibold">{faq.q}</summary>
                <p className="mt-2 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </>
        )}

        {/* CTA */}
        <NavLink
          to="/contact"
          className="inline-block mt-10 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold"
        >
          Get Free Consultation
        </NavLink>
      </div>
    </section>
  );
}
