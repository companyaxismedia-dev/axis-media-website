// src/pages/PortfolioPage.jsx
import React from "react";
import portfolioItems from "../data/portfolioData";
import { NavLink } from "react-router-dom";
import Portfolio from "../components/Portfolio";

export default function PortfolioPage() {
  return (
    <div className="pt-24 min-h-screen" style={{ backgroundColor: "#ecf4fcff" }}>
      {/* UPPER PORTFOLIO SECTION */}
      <Portfolio />

      {/* MAIN GRID SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-white mb-4 text-center text-gray-900">
          Our Complete Portfolio
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore our professionally designed projects — crafted for UI/UX, performance and real business results.
        </p>

        {/* PROJECT GRID */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((p) => (
            <div key={p.slug} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              {/* IMAGE */}
              <div className="h-48 overflow-hidden rounded-lg mb-4">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{p.title}</h3>

              {/* SHORT DESC */}
              <p className="text-gray-600 mb-4">{p.shortDesc}</p>

              {/* BUTTONS */}
              <div className="flex items-center justify-between">
                <NavLink
                  to={`/portfolio/${p.slug}`}
                  className="inline-block px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-semibold"
                >
                  More Details →
                </NavLink>

                {p.liveLink ? (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-600 underline"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-sm text-gray-400">No demo</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-700">
            Want a custom website like these?
            <NavLink to="/contact" className="text-blue-600 underline ml-1">
              Contact Us
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
