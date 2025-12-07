// src/components/GoogleAds.jsx
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const adsServices = [
  {
    title: "Search Ads",
    description: "Instant visibility & high-intent leads.",
    image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg",
    color: "bg-purple-600",
  },
  {
    title: "Display Ads",
    description: "Beautiful visual ads for brand awareness.",
    image: "https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg",
    color: "bg-blue-600",
  },
  {
    title: "Shopping Ads",
    description: "Show your products directly on Google.",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg",
    color: "bg-green-600",
  },
  {
    title: "Video Ads",
    description: "Powerful YouTube advertising campaigns.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    color: "bg-red-600",
  },
  {
    title: "Remarketing",
    description: "Reconnect with people already interested.",
    image: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg",
    color: "bg-yellow-600",
  },
  {
    title: "Performance Max",
    description: "AI-powered cross-platform advertising.",
    image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
    color: "bg-pink-600",
  },
];

const headingLines = [
  "Powerful Google Ads Campaigns",
  "Reach Customers Instantly",
  "Boost Leads & Conversions",
  "Grow with Smart Advertising",
];

export default function GoogleAds() {
  const [line, setLine] = useState(0);
  const [text, setText] = useState("");

  // ⭐ Typewriter effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(headingLines[line].slice(0, i));
      i++;
      if (i > headingLines[line].length) {
        clearInterval(typing);
        setTimeout(() => {
          setLine((prev) => (prev + 1) % headingLines.length);
          setText("");
        }, 900);
      }
    }, 60);

    return () => clearInterval(typing);
  }, [line]);

  return (
    <section className="py-24 relative text-white overflow-hidden">

      {/* ⭐ Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A3A] via-[#0F264D] to-[#1B3A6F] opacity-95"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
            {text}
          </span>
        </h2>

        <p className="text-center text-white/90 text-lg max-w-3xl mx-auto mb-12">
          Professional Google Ads solutions built to generate high-quality leads & real business growth.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {adsServices.map((card, i) => (
            <div
              key={i}
              className={`${card.color} rounded-2xl p-6 shadow-xl transition-transform hover:scale-[1.05]`}
              style={{
                animation: "fadeUp 1.2s ease forwards",
                animationDelay: `${i * 0.35}s`,
                opacity: 0,
              }}
            >
              <div className="h-40 rounded-xl overflow-hidden mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-125"
                />
              </div>

              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="text-white/90 mt-2 mb-4">{card.description}</p>

              <button className="w-full py-2 bg-white/20 hover:bg-white hover:text-black rounded-lg border border-white transition">
                Enquire Now
              </button>
            </div>
          ))}
        </div>

        {/* Extra Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-green-300 mb-6">
            How Google Ads Helps Your Business
          </h3>

          <ul className="grid sm:grid-cols-2 gap-6 text-white/90 text-lg">
            {[
              "Instantly reach customers searching for your services",
              "Boost visibility across Google & YouTube",
              "Generate high-quality business leads",
              "Track performance with detailed analytics",
            ].map((t, i) => (
              <li className="flex items-center gap-3" key={i}>
                <FaCheckCircle className="text-green-400" /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Simple Process */}
        <h3 className="text-3xl font-bold text-center text-blue-300 mt-16 mb-6">
          Our Simple Process
        </h3>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "01", title: "Plan", text: "Understanding your business goals." },
            { step: "02", title: "Launch", text: "Creating high-performing campaigns." },
            { step: "03", title: "Grow", text: "Optimizing & scaling results." },
          ].map((box, i) => (
            <div
              key={i}
              className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-xl text-center"
            >
              <h1 className="text-4xl font-bold text-green-300 mb-2">{box.step}</h1>
              <h2 className="text-xl font-bold">{box.title}</h2>
              <p className="text-white/80 mt-2">{box.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
