// src/pages/GoogleAdsPage.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import googleAdsData from "../data/googleAdsData";

export default function GoogleAdsPage() {
  return (
    <main className="pt-24 bg-[#F3F6FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
          Google Ads Services
        </h1>
        <p className="text-gray-600 text-center text-lg max-w-3xl mx-auto mb-12">
          High-performance Google Ads campaigns designed for business growth,
          high-quality leads and brand visibility.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {googleAdsData.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="h-48 rounded-xl overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.shortDesc}</p>

              <NavLink
                to={`/google-ads/${item.slug}`}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-semibold"
              >
                More Details →
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
