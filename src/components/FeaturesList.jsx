import React from "react";

export default function FeaturesList() {
  const items = [
    "SEO-friendly & Performance Optimized",
    "Payment gateway / E-commerce ready",
    "CRM & third-party integrations",
    "Secure & scalable architectures",
    "Analytics & conversion tracking",
    "Custom business workflows",
  ];

  return (
    <section className="py-24 bg-[#F7F9FC] flex flex-col items-center justify-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Why choose our solutions?
      </h2>

      {/* TWO COLUMN LIST CENTERED */}
      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">

        {/* LEFT COLUMN */}
        <ul className="space-y-6 text-lg">
          {items.slice(0, 3).map((text, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl mt-1">✓</span>
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>

        {/* RIGHT COLUMN */}
        <ul className="space-y-6 text-lg">
          {items.slice(3).map((text, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl mt-1">✓</span>
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
