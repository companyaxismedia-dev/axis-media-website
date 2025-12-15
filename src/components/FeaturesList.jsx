import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function FeaturesList() {
  const items = [
    "SEO-friendly & performance optimized websites",
    "Payment gateway & e-commerce ready solutions",
    "CRM & third-party tool integrations",
    "Secure, scalable & future-ready architecture",
    "Advanced analytics & conversion tracking",
    "Custom workflows tailored to business needs",
  ];

  return (
    <section
      className="py-24 bg-[#F7F9FC]"
      aria-labelledby="features-heading"
    >
      {/* SECTION HEADING */}
      <h2
        id="features-heading"
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900"
      >
        Why Choose Axis Media for Digital Solutions?
      </h2>

      {/* FEATURES GRID */}
      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto px-6">

        {/* LEFT COLUMN */}
        <ul className="space-y-6 text-lg">
          {items.slice(0, 3).map((text, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 text-xl mt-1" />
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>

        {/* RIGHT COLUMN */}
        <ul className="space-y-6 text-lg">
          {items.slice(3).map((text, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 text-xl mt-1" />
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
