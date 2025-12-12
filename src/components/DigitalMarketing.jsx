// src/components/DigitalMarketing.jsx
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import dmServicesData from "../data/dmServicesData";

const lines = [
  "Smart Strategies For Fast Business Growth",
  "Boost Your Digital Reach With Modern Marketing",
  "High-ROI Ads For Every Business Category",
];

export default function DigitalMarketing() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // TYPEWRITER EFFECT
  useEffect(() => {
    let char = 0;
    const type = setInterval(() => {
      setDisplayText(lines[lineIndex].slice(0, char));
      char++;
      if (char > lines[lineIndex].length) {
        clearInterval(type);
        setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % lines.length);
          setDisplayText("");
        }, 900);
      }
    }, 70);
    return () => clearInterval(type);
  }, [lineIndex]);

  return (
    <section className="py-24 bg-gradient-to-b from-[#EEF3FF] to-[#F3E8FF]">
      <div className="max-w-7xl mx-auto px-4">

        {/* TYPEWRITER HEADING */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-purple-500 via-blue-400 to-blue-500">
            {displayText}
          </span>
        </h2>

        <p className="text-lg text-center text-gray-700 mb-16 font-medium">
          Complete marketing solutions to grow your brand online.
        </p>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dmServicesData.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="overflow-hidden rounded-xl h-40 mb-4">
                <img src={s.heroImage} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-700 mb-4">{s.description}</p>

              <NavLink
                to={`/digital-marketing/${s.slug}`}
                className="text-blue-600 font-semibold text-sm mb-4 inline-block"
              >
                More Details →
              </NavLink>

              <NavLink
                to="/contact"
                className="w-full block text-center py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Enquire Now
              </NavLink>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-24 bg-white p-12 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
            Why Choose Axis Media?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Proven digital marketing experience",
              "High-ROI advertising strategies",
              "Dedicated account manager",
              "Real-time analytics & reporting",
              "Creative graphic & ad design",
              "End-to-end digital support",
            ].map((item, i) => (
              <p key={i} className="flex gap-3 text-lg text-gray-700">
                <FaCheckCircle className="text-green-600 mt-1" /> {item}
              </p>
            ))}
          </div>
        </div>

        {/* PROCESS SECTION */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
            Our Digital Marketing Process
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { step: "01", title: "Research", text: "We study your market & competitors." },
              { step: "02", title: "Strategy", text: "We build a custom marketing plan." },
              { step: "03", title: "Execution", text: "We launch ads & campaigns." },
              { step: "04", title: "Optimization", text: "We improve targeting & ROI." },
            ].map((box, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-4xl font-bold text-green-600 mb-2">{box.step}</h1>
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
