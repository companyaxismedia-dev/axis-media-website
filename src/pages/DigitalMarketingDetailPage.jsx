import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle } from "react-icons/fa";
import dmServicesData from "../data/dmServicesData";

export default function DigitalMarketingDetailPage() {
  const { slug } = useParams();

  const service = dmServicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-40 text-center text-2xl font-bold">
        Service Not Found
      </div>
    );
  }

  const { intro, benefits, features, faqs } = service.longContent;

  return (
    <section className="pt-28 pb-20 bg-white">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          {service.title} Services | Axis Media Digital Marketing Agency
        </title>

        <meta
          name="description"
          content={`${service.title} services by Axis Media. ${intro}`}
        />

        <meta
          name="keywords"
          content={`${service.title}, digital marketing services, SEO, Google Ads, Axis Media`}
        />

        <link
          rel="canonical"
          href={`https://axismediadigital.com/digital-marketing/${service.slug}`}
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HERO IMAGE ================= */}
        <img
          src={service.heroImage}
          alt={service.title}
          loading="lazy"
          className="w-full h-[380px] object-cover rounded-3xl shadow-xl mb-10"
        />

        {/* ================= TITLE ================= */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          {service.title}
        </h1>

        {/* ================= INTRO ================= */}
        <p className="text-gray-700 text-lg max-w-3xl leading-relaxed mb-12">
          {intro}
        </p>

        {/* ================= BENEFITS ================= */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Key Benefits
        </h2>

        <ul className="space-y-3 mb-14">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-lg text-gray-700"
            >
              <FaCheckCircle className="text-green-600 mt-1" />
              {b}
            </li>
          ))}
        </ul>

        {/* ================= FEATURES ================= */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What We Provide
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {f}
              </h3>
              <p className="text-gray-600">
                Professional execution focused on growth, conversions and ROI.
              </p>
            </div>
          ))}
        </div>

        {/* ================= FAQ ================= */}
        {faqs && faqs.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-20">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-gray-50 p-6 rounded-xl shadow cursor-pointer"
                >
                  <summary className="font-semibold text-lg text-gray-900">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </>
        )}

        {/* ================= CTA ================= */}
        <div className="text-center">
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Get Free Consultation →
          </NavLink>
        </div>

      </div>
    </section>
  );
}
