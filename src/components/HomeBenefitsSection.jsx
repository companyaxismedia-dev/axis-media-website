import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function HomeBenefitsSection() {
  const cards = [
    {
      title: "Ongoing Expert Support",
      desc: "Axis Media provides continuous support, updates, monitoring, and improvements so your website stays secure and optimized.",
    },
    {
      title: "Better Security & Reliability",
      desc: "Our CMS development includes strong security, backups, and regular updates to protect your business online.",
    },
    {
      title: "Scalable for Future Growth",
      desc: "Easily add new pages, features, or integrations as your business grows without rebuilding your website.",
    },
    {
      title: "Full Control of Content",
      desc: "Manage pages, blogs, images, and products easily without needing technical expertise.",
    },
    {
      title: "Improved SEO Performance",
      desc: "We build fast, SEO-friendly CMS websites that improve Google ranking and organic traffic.",
    },
    {
      title: "Easy Website Management",
      desc: "User-friendly CMS solutions designed for smooth daily website management.",
    },
  ];

  return (
    <section
      className="py-24 bg-gray-50"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADING */}
        <h2
          id="benefits-heading"
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900"
        >
          Key Benefits of Choosing Axis Media CMS Development
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4 mb-16 text-lg">
          Our CMS website development services make content easy to manage,
          improve online performance, and support long-term business growth.
        </p>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* LEFT BENEFITS */}
          <ul className="space-y-6">
            {cards.slice(0, 3).map((card, i) => (
              <li
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg border"
              >
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </li>
            ))}
          </ul>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <img
              src="/Benefits.webp"
              alt="CMS Website Development Benefits by Axis Media"
              width="420"
              height="420"
              loading="lazy"
              className="rounded-full object-cover shadow-xl border-8 border-white"
            />
          </div>

          {/* RIGHT BENEFITS */}
          <ul className="space-y-6">
            {cards.slice(3).map((card, i) => (
              <li
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg border"
              >
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
