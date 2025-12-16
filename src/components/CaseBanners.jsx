import React from "react";
import { NavLink } from "react-router-dom";

export default function CaseBanners() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Growth Campaign",
      img: "/E-Commerce Growth Campaign.webp",
      desc: "We redesigned the eCommerce website, improved loading speed by 60%, and increased conversions using performance-driven ad campaigns.",
      link: "/case-studies/ecommerce-growth",
    },
    {
      id: 2,
      title: "Brand Awareness & Social Media Boost",
      img: "/Brand Awareness & Social Media Boost.webp",
      desc: "Delivered a complete brand awareness strategy with social media marketing, content creation, and paid reach campaigns.",
      link: "/case-studies/brand-awareness",
    },
    {
      id: 3,
      title: "SEO Ranking & Lead Generation",
      img: "/google-ads (1).webp",
      desc: "Achieved top Google rankings for competitive keywords and generated consistent monthly business leads.",
      link: "/case-studies/seo-lead-generation",
    },
  ];

  return (
    <section
      className="py-20 bg-[#F8F9FB]"
      aria-labelledby="case-studies-heading"
    >
      {/* SECTION HEADING */}
      <h2
        id="case-studies-heading"
        className="text-4xl font-extrabold text-center mb-12 text-gray-900"
      >
        Case Studies & Success Stories
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden
            hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            {/* IMAGE */}
            <div className="h-52 w-full overflow-hidden">
              <img
                src={p.img}
                alt={`${p.title} – Axis Media Digital Marketing Case Study`}
                width="600"
                height="400"
                loading="lazy"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {p.title}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                {p.desc}
              </p>

              {/* INTERNAL LINK (SEO BOOST) */}
              <NavLink
                to={p.link}
                className="inline-block mt-2 px-5 py-2 rounded-lg
                bg-blue-600 text-white font-semibold
                hover:bg-blue-700 transition"
              >
                View Full Case Study →
              </NavLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
