import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaRocket,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

export default function GrowBusiness() {
  return (
    <section
      className="relative py-24 text-white overflow-hidden"
      aria-labelledby="grow-business-heading"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-green-600 -z-10"></div>

      {/* ✅ H2 (NOT H1) */}
      <h2
        id="grow-business-heading"
        className="text-center text-3xl md:text-5xl font-extrabold mb-10 drop-shadow-[0_0_25px_rgba(0,180,255,0.6)]"
      >
        Grow Your Business With Smart Digital Strategies 🚀
      </h2>

      {/* DESCRIPTION */}
      <p className="max-w-3xl mx-auto text-center text-gray-200 text-lg mb-16 px-6 leading-relaxed">
        We help businesses grow with modern websites, SEO, Google Ads, social media
        marketing, and branding solutions designed to attract customers and increase revenue.
      </p>

      {/* FEATURE CARDS */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        <Card
          icon={<FaRocket className="text-blue-400 text-4xl mx-auto" />}
          title="High-Converting Websites"
          text="Modern, fast, and conversion-focused websites."
        />

        <Card
          icon={<FaChartLine className="text-green-400 text-4xl mx-auto" />}
          title="SEO & Google Ranking"
          text="Rank higher on Google and get organic customers."
        />

        <Card
          icon={<FaBullhorn className="text-pink-400 text-4xl mx-auto" />}
          title="Digital Marketing Services"
          text="Google Ads, Meta Ads & social media growth."
        />

        <Card
          icon={<FaUsers className="text-yellow-300 text-4xl mx-auto" />}
          title="Brand Identity & Growth"
          text="Strong branding that builds trust & authority."
        />
      </div>

      {/* EXTRA SECTIONS */}
      <ExtraSections />

      {/* CTA (INTERNAL LINK) */}
      <div className="text-center mt-20">
        <NavLink
          to="/grow-business"
          className="px-10 py-4 text-xl font-semibold rounded-xl
          bg-blue-600 hover:bg-blue-700 shadow-xl transition inline-block"
        >
          Explore Full Growth Plan →
        </NavLink>
      </div>
    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <article
      className="
        bg-white/10 backdrop-blur-xl
        border border-white/10
        p-6 rounded-2xl
        shadow-lg
        hover:scale-105
        transition text-center
      "
    >
      {icon}
      <h3 className="text-xl font-bold mt-3 mb-2">{title}</h3>
      <p className="text-gray-200">{text}</p>
    </article>
  );
}

function ExtraSections() {
  return (
    <div className="mt-24 max-w-6xl mx-auto px-6">
      <SectionTitle title="How We Grow Your Business" />

      <ul className="grid sm:grid-cols-2 gap-6 text-gray-200 text-lg">
        {[
          "We create modern & responsive websites",
          "We improve your Google ranking with SEO",
          "We run high-converting Google Ads campaigns",
          "We manage social media for consistent growth",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <FaCheckCircle className="text-blue-300" /> {item}
          </li>
        ))}
      </ul>

      <SectionTitle title="Our Simple Process" />

      <div className="grid sm:grid-cols-3 gap-10 text-center">
        {[
          { step: "01", title: "Research", text: "Market & competitor analysis." },
          { step: "02", title: "Strategy", text: "Custom plan for business goals." },
          { step: "03", title: "Growth", text: "Launch & scale campaigns." },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/10"
          >
            {/* ❌ NOT H1 / H2 */}
            <p className="text-4xl font-bold text-blue-300 mb-2">{item.step}</p>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-200">{item.text}</p>
          </div>
        ))}
      </div>

      <SectionTitle title="Why Choose Axis Media" />

      <ul className="grid sm:grid-cols-2 gap-6 text-gray-200 text-lg">
        {[
          "5+ Years of Digital Marketing Experience",
          "Industry-Level Website Development",
          "Affordable Pricing & Premium Quality",
          "Dedicated Support & Fast Delivery",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <FaCheckCircle className="text-green-300" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <h3 className="text-3xl font-bold text-center text-green-300 mt-20 mb-6">
      {title}
    </h3>
  );
}
