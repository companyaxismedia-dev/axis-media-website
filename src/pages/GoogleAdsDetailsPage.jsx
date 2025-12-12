// src/pages/GoogleAdsDetailsPage.jsx
import React from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  FaCheckCircle,
  FaChartLine,
  FaBullseye,
  FaUsers,
} from "react-icons/fa";
import adsServices from "../data/googleAdsData";

export default function GoogleAdsDetailsPage() {
  const { slug } = useParams();
  const service = adsServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-gray-100 text-gray-900 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <NavLink to="/google-ads" className="text-blue-600 underline">
          Go Back
        </NavLink>
      </section>
    );
  }

  return (
    <main className="pt-24 pb-20 bg-gray-100 text-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* ------- BREADCRUMB ------- */}
        <p className="text-sm text-gray-500 mb-3">
          <NavLink to="/" className="text-blue-600 underline">Home</NavLink> /
          <NavLink to="/google-ads" className="text-blue-600 underline"> Google Ads</NavLink> /
          <span className="font-semibold"> {service.title}</span>
        </p>

        {/* ------- HEADER ------- */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-3">{service.title}</h1>
        <p className="text-gray-700 text-xl mb-8">{service.longDescription}</p>

        {/* ------- IMAGE ------- */}
        <div className="rounded-2xl overflow-hidden h-[420px] mb-12 shadow-lg">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>

        {/* ------- KEY FEATURES ------- */}
        <section className="bg-white p-10 rounded-2xl border border-gray-200 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>

          <ul className="grid sm:grid-cols-2 gap-5 text-lg text-gray-700">
            {service.features.map((item, i) => (
              <li key={i} className="flex gap-3 items-center">
                <FaCheckCircle className="text-green-500 text-2xl" />
                {item}
              </li>
            ))}
          </ul>

          <NavLink
            to="/contact"
            className="mt-8 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600"
          >
            Enquire Now →
          </NavLink>
        </section>

        {/* ------- BENEFITS SECTION ------- */}
        <section className="mt-16">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
            Why This Service Helps Your Business Grow
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChartLine className="text-blue-500 text-5xl" />,
                title: "Increase Revenue",
                text: "High-conversion strategies designed to generate real business.",
              },
              {
                icon: <FaBullseye className="text-red-500 text-5xl" />,
                title: "Precise Targeting",
                text: "Show ads only to customers who are ready to buy.",
              },
              {
                icon: <FaUsers className="text-green-500 text-5xl" />,
                title: "Reach Millions",
                text: "Appear on Google Search, YouTube & partner networks.",
              },
            ].map((box, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">{box.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{box.title}</h3>
                <p className="text-gray-600">{box.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------- PROCESS SECTION ------- */}
        <section className="mt-20 bg-white p-10 rounded-2xl border border-gray-200 shadow-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">A → Z Complete Process</h2>

          <ol className="space-y-5 text-gray-700 text-lg">
            <li><strong>1. Business Study:</strong> Understanding your goals & competitors.</li>
            <li><strong>2. Keyword Strategy:</strong> Selecting profitable keywords.</li>
            <li><strong>3. Ad Creation:</strong> Professional ad copy & banners.</li>
            <li><strong>4. Landing Page Optimization:</strong> Boosting conversions.</li>
            <li><strong>5. Campaign Setup:</strong> Smart bidding + targeting.</li>
            <li><strong>6. Daily Monitoring:</strong> Performance improvements.</li>
            <li><strong>7. Weekly Reporting:</strong> Clear analytics + insights.</li>
          </ol>
        </section>

        {/* ------- PRICING SECTION ------- */}
        <section className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Perfect for Every Business
          </h2>

          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Whether you're a startup, local business or large company —  
            Google Ads delivers instant customers.
          </p>

          <div className="bg-yellow-500 text-black inline-block px-10 py-4 rounded-xl text-2xl font-bold shadow-lg">
            Packages Starting at ₹3,000 / Month
          </div>
        </section>

        {/* ------- CTA SECTION ------- */}
        <div className="text-center mt-14">
          <NavLink
            to="/contact"
            className="bg-green-500 hover:bg-green-600 text-black px-10 py-4 rounded-xl text-xl font-semibold"
          >
            Get Free Consultation →
          </NavLink>
        </div>

      </div>
    </main>
  );
}
