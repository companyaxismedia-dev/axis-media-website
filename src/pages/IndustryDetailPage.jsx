// src/pages/IndustryDetailPage.jsx
import React from "react";
import { useParams, NavLink } from "react-router-dom";

// ❌ WRONG — remove this line
// import { findIndustryBySlug } from "../pages/IndustriesPage";

// ✅ CORRECT IMPORT
import { IndustriesData } from "../data/IndustriesData";

// ✅ CORRECT FUNCTION (added here)
const findIndustryBySlug = (slug) =>
  IndustriesData.find((item) => item.slug === slug);

export default function IndustryDetailPage() {
  const { name } = useParams();
  const industry = findIndustryBySlug(name);

  if (!industry) {
    return (
      <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Industry not found</h1>
          <NavLink to="/industries" className="text-blue-600 underline">
            Back to Industries
          </NavLink>
        </div>
      </section>
    );
  }

  const title = industry.name.toUpperCase();

  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-3">
          <NavLink to="/industries" className="hover:underline">
            Industries
          </NavLink>{" "}
          /{" "}
          <NavLink
            to={`/industries/${industry.categoryId}`}
            className="hover:underline"
          >
            {industry.categoryTitle}
          </NavLink>{" "}
          / {industry.name}
        </p>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
              {title} Industry
            </h1>
            <div className="h-[3px] w-24 bg-blue-500 mb-6" />

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We provide complete digital solutions, website development, SEO,
              branding and paid ads specially designed for{" "}
              <b>{industry.name}</b> businesses. Our goal is to bring you more
              customers, more enquiries and more sales.
            </p>

            <p className="text-gray-700 mb-6">
              From modern websites to Google & Meta Ads, we create a complete
              online system so that people searching for{" "}
              <b>{industry.name}</b> can easily find and trust your brand.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition text-lg font-semibold"
              >
                Get a Free Consultation
              </a>
              <a
                href="/packages"
                className="px-6 py-3 bg-white text-blue-700 border border-blue-300 rounded-lg hover:bg-blue-50 font-semibold"
              >
                View Packages
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gradient-to-br from-blue-600 via-emerald-500 to-cyan-400 rounded-3xl p-[2px] shadow-xl">
            <div className="bg-gray-900 rounded-3xl h-full p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Why {industry.name} businesses choose Axis Media?
              </h2>
              <ul className="space-y-3 text-sm md:text-base">
                <li>• Industry-focused website layout & content</li>
                <li>• SEO plan to rank for local & niche keywords</li>
                <li>• Google & Meta Ads setup and optimisation</li>
                <li>• Social media creatives & branding support</li>
                <li>• Tracking, reports & monthly optimisation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Industry Website",
              text: "Modern, mobile-friendly website built specially for your industry with strong call-to-actions.",
            },
            {
              title: "SEO & Google Ranking",
              text: "On-page + local SEO to appear when people search for your services in your city.",
            },
            {
              title: "Ads & Lead Generation",
              text: "Google Ads, Meta Ads & landing pages to drive qualified enquiries every month.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
            >
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Bullet list */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          What We Offer for {industry.name}
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 text-lg mb-8">
          <li>Industry-focused Website Development</li>
          <li>SEO & Google Ranking Strategy</li>
          <li>Branding & Social Media Management</li>
          <li>Marketing Strategy & Lead Generation Funnel</li>
          <li>Paid Ads (Google & Meta) for Faster Growth</li>
        </ul>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-1">
              Ready to grow your {industry.name} business?
            </h3>
            <p className="text-blue-800">
              Book a free 15-minute call and we&apos;ll share a customised plan
              for your business.
            </p>
          </div>
          <a
            href="/contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 text-center"
          >
            Book Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
