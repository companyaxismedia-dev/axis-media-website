// src/pages/ServicesGridPage.jsx
import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import { FaCheckCircle } from "react-icons/fa";

export default function ServicesGridPage() {
  return (
    <div className="pt-24 relative overflow-hidden">

      {/* ⭐ Dark Background Like Hero Section */}
      <div className="absolute inset-0 bg-[#0B0F2A]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F2A] via-[#101632] to-[#060812]" />

      {/* ⭐ Center Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] rounded-full 
                        bg-[radial-gradient(circle,rgba(120,90,255,0.25),transparent_70%)]
                        blur-3xl opacity-50" />
      </div>

      {/* ⭐ FIRST SECTION — ServicesGrid (Homepage Style) */}
      <div className="relative z-10">
        <ServicesGrid />
      </div>

      {/* ⭐ SECOND SECTION — Complete Details */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-white">

        <h2 className="text-4xl font-extrabold text-center mb-8 
                       bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 
                       bg-clip-text text-transparent">
          Our Complete Digital Services
        </h2>

        <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg mb-12">
          Axis Media delivers powerful digital services designed to help your business scale faster,
          improve online visibility, and generate high-quality leads.
        </p>

        {/* ⭐ SERVICE CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            {
              title: "Website Development",
              text: "Responsive, modern, and SEO-friendly websites for strong online presence.",
            },
            {
              title: "E-commerce Websites",
              text: "User-friendly shopping platforms with secure payment integration.",
            },
            {
              title: "Graphic Designing",
              text: "Creative branding, logo, posters, and social media graphics.",
            },
            {
              title: "Video Editing",
              text: "Professional reels, ads, and promotional videos.",
            },
            {
              title: "SEO Services",
              text: "Boost Google ranking and increase organic website traffic.",
            },
            {
              title: "Social Media Management",
              text: "Full account management + daily content + growth strategy.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl border border-white/20
                         p-6 rounded-2xl shadow-xl hover:scale-[1.03]
                         hover:border-purple-400 transition"
            >
              <h3 className="text-2xl font-bold text-purple-300 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-200">{service.text}</p>
            </div>
          ))}
        </div>

        {/* ⭐ WHY CHOOSE US */}
        <h2 className="text-4xl font-extrabold text-center mt-24 mb-10 
                       bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 
                       bg-clip-text text-transparent">
          Why Choose Axis Media?
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-200 max-w-4xl mx-auto">
          {[
            "Highly skilled digital experts",
            "Premium quality at affordable pricing",
            "Fast delivery & excellent support",
            "Guaranteed business growth focus",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400 text-xl" />
              {item}
            </li>
          ))}
        </ul>

        {/* ⭐ PROCESS SECTION */}
        <h2 className="text-4xl font-extrabold text-center mt-24 mb-10 
                       bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 
                       bg-clip-text text-transparent">
          Our Simple Process
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              step: "01",
              title: "Plan",
              text: "We understand your goals & business needs.",
            },
            {
              step: "02",
              title: "Execute",
              text: "We create high-performing strategies & designs.",
            },
            {
              step: "03",
              title: "Grow",
              text: "We scale campaigns and maximize your growth.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 p-8 rounded-2xl 
                         backdrop-blur-xl shadow-xl hover:scale-[1.04] transition"
            >
              <h2 className="text-5xl font-extrabold text-purple-300">{item.step}</h2>
              <h3 className="text-2xl font-bold mt-3 text-white">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
