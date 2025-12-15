import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import dmServicesData from "../data/dmServicesData";

export default function DigitalMarketing() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-[#EEF3FF] to-[#F3E8FF]"
      aria-labelledby="digital-marketing-heading"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* HERO / INTRO */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

          <div>
            {/* ✅ H2 (H1 already in main Hero) */}
            <h2
              id="digital-marketing-heading"
              className="text-4xl md:text-5xl font-extrabold leading-snug mb-6"
            >
              Grow Your Business With{" "}
              <span className="text-blue-600">
                Powerful Digital Marketing Services
              </span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We help businesses increase online visibility, attract high-quality
              leads, and grow revenue with result-driven digital marketing
              strategies including SEO, Google Ads, social media marketing,
              content marketing, and conversion optimization.
            </p>

            <ul className="space-y-4 text-gray-700">
              {[
                "High-ROI digital marketing campaigns",
                "Perfect for startups, small businesses & enterprises",
                "SEO + Ads + Branding + Website optimization",
                "Targeted marketing for better conversions",
                "Experienced digital marketing professionals",
                "Transparent reporting & analytics",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <NavLink
              to="/contact"
              className="inline-block mt-8 py-3 px-8 bg-blue-600 text-white
              rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Get Free Marketing Consultation
            </NavLink>
          </div>

          {/* ✅ LCP IMAGE (FIXED SIZE) */}
          <div className="flex justify-center">
            <img
              src="/Digital Marketing Team.webp"
              alt="Digital Marketing Team at Axis Media"
              width="720"
              height="520"
              fetchpriority="high"
              className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
            />
          </div>
        </div>

        {/* SERVICES HEADING */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Smart Digital Marketing Strategies for Business Growth
        </h2>

        <p className="text-lg text-center text-gray-700 mb-16 font-medium">
          Complete digital marketing solutions to grow your brand online.
        </p>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dmServicesData.map((s, i) => (
            <article
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="overflow-hidden rounded-xl h-40 mb-4">
                <img
                  src={s.heroImage}
                  alt={`${s.title} Digital Marketing Service`}
                  width="400"
                  height="250"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {s.title}
              </h3>

              <p className="text-gray-700 mb-4">{s.description}</p>

              <NavLink
                to={`/digital-marketing/${s.slug}`}
                className="text-blue-600 font-semibold text-sm mb-4 inline-block"
              >
                More Details →
              </NavLink>

              <NavLink
                to="/contact"
                className="w-full block text-center py-2 rounded-lg bg-blue-600
                text-white font-semibold hover:bg-blue-700 transition"
              >
                Enquire Now
              </NavLink>
            </article>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-24 bg-white p-12 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
            Why Choose Axis Media for Digital Marketing?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Proven digital marketing expertise",
              "High-ROI advertising strategies",
              "Dedicated account manager",
              "Real-time analytics & reporting",
              "Creative ad & graphic design",
              "End-to-end digital marketing support",
            ].map((item, i) => (
              <p key={i} className="flex gap-3 text-lg text-gray-700">
                <FaCheckCircle className="text-green-600 mt-1" />
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* PROCESS */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
            Our Digital Marketing Process
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { step: "01", title: "Research", text: "Market & competitor analysis." },
              { step: "02", title: "Strategy", text: "Custom marketing plan." },
              { step: "03", title: "Execution", text: "Campaign launch & ads." },
              { step: "04", title: "Optimization", text: "Continuous performance improvement." },
            ].map((box, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                {/* ❌ NOT H1 */}
                <p className="text-4xl font-bold text-green-600 mb-2">
                  {box.step}
                </p>
                <h3 className="text-xl font-bold mb-2">{box.title}</h3>
                <p className="text-gray-700">{box.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
