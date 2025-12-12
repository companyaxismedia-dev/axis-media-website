// src/pages/IndustriesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { IndustriesData } from "../data/IndustriesData";

export default function IndustriesPage() {
  return (
    <main className="bg-gradient-to-b from-[#F4FFF7] to-[#E8F8EE] text-gray-900">

      {/* TOP HERO SECTION */}
      <section className="pt-32 pb-20 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Industries We Serve
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We create modern websites, SEO, branding, advertising funnels, automation systems 
          and long-term digital growth strategies tailored for each industry.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="/contact"
            className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold text-lg hover:bg-emerald-700 transition shadow-md"
          >
            Get Free Consultation
          </a>
        </div>
      </section>

      {/* INDUSTRY GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {IndustriesData.map((cat) => {
          const Icon = cat.icon;
          return (
            <article
              key={cat.id}
              className="
                bg-white p-10 rounded-3xl shadow-xl border border-gray-100 
                hover:shadow-2xl hover:-translate-y-1 transition-all
                min-h-[420px] flex flex-col
              "
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-5 mb-6">
                <div className="p-5 rounded-xl bg-gray-50 shadow-inner">
                  <Icon className={`text-5xl ${cat.colorClass}`} />
                </div>

                <div>
                  <h2 className="text-3xl font-bold">{cat.title}</h2>
                  <p className="text-gray-600 text-sm mt-1 leading-snug">
                    {cat.longDesc?.slice(0, 120)}...
                  </p>
                </div>
              </div>

              {/* FEATURES */}
              <ul className="text-gray-700 mb-8 space-y-3 text-[15px]">
                {cat.features?.slice(0, 4).map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-600 font-extrabold mt-1">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="mt-auto flex gap-4">
                <Link
                  to={`/industries/${cat.id}`}
                  className="
                    flex-1 text-center px-5 py-3 
                    bg-emerald-600 text-white rounded-lg font-semibold 
                    hover:bg-emerald-700 transition
                  "
                >
                  View Industry →
                </Link>

                <a
                  href="/contact"
                  className="
                    flex-1 text-center px-5 py-3 
                    bg-gray-100 text-gray-800 rounded-lg 
                    hover:bg-gray-200 transition
                  "
                >
                  Consultation
                </a>
              </div>
            </article>
          );
        })}
      </section>

      {/* CTA SECTION */}
      <section className="pb-24 px-6">
        <div
          className="
            max-w-7xl mx-auto
            bg-emerald-600 text-white p-12 rounded-3xl shadow-xl
            flex flex-col md:flex-row md:items-center md:justify-between gap-8
          "
        >
          <div>
            <h3 className="text-3xl font-extrabold">
              Not sure which industry fits your business?
            </h3>
            <p className="text-white/90 mt-2 text-lg">
              Talk to our experts — we’ll explain exactly what your business needs.
            </p>
          </div>

          <a
            href="/contact"
            className="
              px-8 py-4 bg-white text-emerald-700 
              rounded-lg font-semibold text-lg hover:bg-gray-100
            "
          >
            Book Free Strategy Call
          </a>
        </div>
      </section>
    </main>
  );
}
