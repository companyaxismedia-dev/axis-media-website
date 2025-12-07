// src/pages/AboutPage.jsx
import React from "react";
import About from "../components/About";

export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#0A1D56]"> 
      {/* Same color as About.jsx background start point */}

      <About />

      {/* EXTRA INFO SECTION — Optional */}
      <div className="container mx-auto px-6 py-16 text-white">
        <h2 className="text-4xl font-bold mb-6 text-center">
          About Axis Media
        </h2>

        <p className="text-center mb-12 max-w-3xl mx-auto text-white/90">
          We are a full-service digital agency providing professional web
          development, marketing, and branding solutions for businesses
          worldwide.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-6 rounded-xl shadow-xl">
            <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
            <p>
              Deliver high-quality digital solutions that help businesses grow online.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-6 rounded-xl shadow-xl">
            <h3 className="font-semibold text-xl mb-2">Our Vision</h3>
            <p>
              Become a trusted digital partner for brands seeking excellence in the online space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
