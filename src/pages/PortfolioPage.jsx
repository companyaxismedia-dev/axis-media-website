// src/pages/PortfolioPage.jsx
import React from "react";
import Portfolio from "../components/Portfolio";

export default function PortfolioPage() {
  return (
    <div className="pt-24" style={{ backgroundColor: "#6f8505ff" }}> {/* Light Pink / Pastel */}
      <Portfolio />

      <div className="container mx-auto px-6 py-16 text-black">
        <h2 className="text-4xl font-bold mb-6 text-center">Our Portfolio</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Take a look at our projects where we have combined creativity, technology, and strategy to deliver results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold text-xl mb-2">E-commerce Store</h3>
            <p>Modern online store with optimized UX and secure checkout.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold text-xl mb-2">Corporate Website</h3>
            <p>Professional website tailored for corporate branding.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold text-xl mb-2">Portfolio Website</h3>
            <p>Clean and elegant portfolio to showcase creative works.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
