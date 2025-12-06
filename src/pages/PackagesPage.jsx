// src/pages/PackagesPage.jsx
import React from "react";
import Packages from "../components/Packages";

export default function PackagesPage() {
  return (
    <div className="pt-24" style={{ backgroundColor: "#e6f5faff" }}> {/* Lavender / Light Purple */}
      <Packages />

      <div className="container mx-auto px-6 py-16 text-black">
        <h2 className="text-4xl font-bold mb-6 text-center">Our Packages</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Flexible packages designed for startups, SMEs, and enterprises. Choose the plan that fits your business requirements.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold text-xl mb-2">Basic</h3>
            <p>Website setup, basic SEO, and social media integration.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold text-xl mb-2">Standard</h3>
            <p>Everything in Basic plus Google Ads & content creation.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold text-xl mb-2">Premium</h3>
            <p>Full-stack digital marketing, branding, and analytics support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
