// src/pages/ServicesGridPage.jsx
import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import { FaCheckCircle } from "react-icons/fa";

export default function ServicesGridPage() {
  return (
    <main className="pt-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B] min-h-screen">
      <ServicesGrid />

      {/* More detailed section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">
          Our Complete Digital Services
        </h2>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          We craft strategies, design experiences and run campaigns focused on measurable business results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Website Development",
              text: "Full-stack responsive websites, speed optimized and SEO-ready.",
            },
            {
              title: "E-commerce",
              text: "Secure shopping, payment integration and conversion UX.",
            },
            {
              title: "SEO Services",
              text: "Technical & content SEO to grow organic traffic.",
            },
            {
              title: "Google Ads",
              text: "PPC campaigns with conversion tracking & ROI focus.",
            },
            {
              title: "Social Media",
              text: "Content strategy, creatives and paid social growth.",
            },
            {
              title: "Graphic Design",
              text: "Brand identity and visual assets for consistent branding.",
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {s.title}
              </h3>

              <p className="text-gray-600">{s.text}</p>

              <div className="mt-4">
                <a
                  href="#"
                  className="text-sky-600 font-semibold hover:underline inline-flex items-center gap-2"
                >
                  More Details →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Why choose Axis Media?
          </h3>

          <ul className="grid sm:grid-cols-2 gap-3 text-gray-300">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" />
              Expert team with measurable results
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" />
              Transparent reporting & communication
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" />
              Affordable packages for all business sizes
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1" />
              Quick delivery & hands-on support
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
