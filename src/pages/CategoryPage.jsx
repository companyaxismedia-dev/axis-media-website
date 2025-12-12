// src/pages/CategoryPage.jsx
import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { IndustriesData } from "../data/IndustriesData";

export default function CategoryPage() {
  const { category } = useParams();
  const cat = IndustriesData.find((c) => c.id === category);

  if (!cat) {
    return (
      <div className="pt-40 text-center text-3xl font-bold">Category Not Found</div>
    );
  }

  const Icon = cat.icon;

  return (
    <section className="pt-40 pb-20 min-h-screen bg-[#E4FBE7]">
      <div className="max-w-7xl mx-auto px-4">

        {/* BREADCRUMB */}
        <p className="text-gray-600 mb-4">
          <NavLink to="/industries" className="text-green-600 underline">
            Industries
          </NavLink>{" "}
          / {cat.title}
        </p>

        {/* LARGE HEADING + ICON */}
        <div className="flex items-center gap-4 mb-10">
          <Icon className="text-5xl text-green-700" />
          <h1 className="text-5xl font-extrabold text-gray-900">
            {cat.title} Businesses
          </h1>
        </div>

        {/* LARGE DESCRIPTION */}
        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-10">
          {cat.longDesc}
        </p>

        {/* HIGHLIGHTS SECTION */}
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Key Highlights for {cat.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {cat.features.slice(0, 6).map((f, i) => (
            <div
              key={i}
              className="bg-white shadow-md border border-gray-200 rounded-xl p-6 hover:-translate-y-1 transition cursor-pointer"
            >
              <h3 className="font-semibold text-green-700 mb-2">✔ Feature {i + 1}</h3>
              <p className="text-gray-700">{f}</p>
            </div>
          ))}
        </div>

        {/* GRID OF INDUSTRY ITEMS */}
        <div className="grid md:grid-cols-2 gap-10">
          {cat.items.map((item) => (
            <NavLink
              key={item.slug}
              to={`/industry/${item.slug}`}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:-translate-y-1 hover:shadow-2xl transition block"
            >
              <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-600 text-lg">
                Learn how we help <b>{item.name}</b> grow using websites, SEO, ads
                & branding.
              </p>

              {/* Mini points */}
              <ul className="mt-4 text-gray-700 space-y-1">
                <li>• SEO + Google Ranking</li>
                <li>• Custom Website Design</li>
                <li>• Meta & Google Ads</li>
              </ul>
            </NavLink>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-16 bg-green-100 border border-green-300 p-10 rounded-2xl shadow-md">
          <h3 className="text-3xl font-bold text-green-800 mb-4">
            Why businesses trust us for {cat.title}?
          </h3>

          <ul className="text-lg space-y-2 text-gray-800">
            <li>• Industry-specific website & branding</li>
            <li>• Google SEO tailored for your niche</li>
            <li>• Lead-generation ad campaigns</li>
            <li>• Monthly performance tracking</li>
          </ul>

          <NavLink
            to="/contact"
            className="inline-block mt-6 px-8 py-3 bg-green-700 text-white rounded-xl shadow hover:bg-green-800 transition"
          >
            Book Free Consultation
          </NavLink>
        </div>
      </div>
    </section>
  );
}
