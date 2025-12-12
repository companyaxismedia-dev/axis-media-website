// src/pages/DigitalMarketingDetailPage.jsx
import React from "react";
import { useParams, NavLink } from "react-router-dom";
import dmServicesData from "../data/dmServicesData";
import { FaCheckCircle } from "react-icons/fa";

export default function DigitalMarketingDetailPage() {
  const { slug } = useParams();
  const service = dmServicesData.find((s) => s.slug === slug);

  if (!service)
    return <h1 className="pt-32 text-center text-2xl">Service Not Found</h1>;

  const { intro, benefits, features, faqs } = service.longContent;

  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP IMAGE */}
        <img
          src={service.heroImage}
          className="w-full h-[380px] object-cover rounded-3xl shadow-xl mb-10"
        />

        {/* TITLE */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          {service.title}
        </h1>

        {/* INTRO */}
        <p className="text-gray-700 text-lg max-w-3xl leading-relaxed mb-10">
          {intro}
        </p>

        {/* BENEFITS SECTION */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
        <ul className="space-y-3 mb-12">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center gap-3 text-lg text-gray-700">
              <FaCheckCircle className="text-green-600" /> {b}
            </li>
          ))}
        </ul>

        {/* FEATURES SECTION */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What We Provide
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-gray-100 rounded-xl shadow-md text-gray-800"
            >
              <h3 className="text-xl font-semibold mb-2">{f}</h3>
              <p className="text-gray-600">
                High-quality service designed for brand growth.
              </p>
            </div>
          ))}
        </div>

        {/* FAQ SECTION */}
        {faqs.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQ</h2>
            <div className="space-y-6 mb-16">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-gray-100 p-6 rounded-xl shadow-md cursor-pointer"
                >
                  <summary className="font-bold text-lg">{faq.q}</summary>
                  <p className="mt-2 text-gray-700">{faq.a}</p>
                </details>
              ))}
            </div>
          </>
        )}

        {/* CTA BUTTON */}
        <div className="text-center mt-16">
          <NavLink
            to="/contact"
            className="px-10 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Enquire Now
          </NavLink>
        </div>
      </div>
    </section>
  );
}
