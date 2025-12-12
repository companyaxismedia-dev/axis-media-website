// src/components/ServicesGrid.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import servicesData from "../data/servicesData";
import { FaArrowRight } from "react-icons/fa";

export default function ServicesGrid() {
  const headings = [
    "Our Professional Digital Services",
    "Grow Your Business With Smart Solutions",
    "Everything You Need to Build Your Online Presence",
  ];

  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let char = 0;

    const typer = setInterval(() => {
      setDisplay(headings[index].slice(0, char));
      char++;

      if (char > headings[index].length) {
        clearInterval(typer);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % headings.length);
          setDisplay("");
        }, 1200);
      }
    }, 60);

    return () => clearInterval(typer);
  }, [index]);

  return (
    <div className="py-16 bg-gradient-to-b from-[#EEF3FF] to-[#E8ECF5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-10 min-h-[70px]">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {display}
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Professional digital solutions — websites, SEO, advertising and creative design to grow your business.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s) => (
            <article
              key={s.slug}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border
                         hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="h-44 overflow-hidden">
                <img
                  src={s.heroImage}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {s.title}
                </h3>

                <p className="text-gray-600 mb-4">{s.summary}</p>

                <div className="flex items-center justify-between">
                  <NavLink
                    to={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                  >
                    More Details <FaArrowRight className="text-sm" />
                  </NavLink>

                  <ul className="text-sm text-gray-500 space-y-1">
                    {s.bullets?.slice(0, 2).map((b, i) => (
                      <li key={i}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
