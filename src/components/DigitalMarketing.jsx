import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import dmServicesData from "../data/dmServicesData";

export default function DigitalMarketing() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#EEF3FF] to-[#F3E8FF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Digital Marketing Services That Grow Your Business
            </h1>

            <p className="text-gray-700 text-lg mb-6">
              Axis Media helps businesses grow online with SEO, Google Ads,
              social media marketing and performance-driven digital strategies.
            </p>

            <ul className="space-y-3 text-gray-700">
              {[
                "SEO & Google Ranking Growth",
                "High-ROI Google Ads Campaigns",
                "Social Media Marketing & Branding",
                "Lead Generation & Sales Growth",
                "Transparent Reporting & Support",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            <NavLink
              to="/contact"
              className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
            >
              Get Free Consultation
            </NavLink>
          </div>

          <img
            src="/Digital Marketing Team.webp"
            alt="Digital Marketing Team Axis Media"
            width="600"
            height="420"
            className="rounded-3xl shadow-xl"
          />
        </div>

        {/* SERVICES */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Digital Marketing Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dmServicesData.map((s, i) => (
            <article
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
            >
              <img
                src={s.heroImage}
                alt={s.title}
                width="400"
                height="250"
                className="rounded-xl mb-4"
              />

              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.description}</p>

              <NavLink
                to={`/digital-marketing/${s.slug}`}
                className="text-blue-600 font-semibold"
              >
                Read More →
              </NavLink>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
