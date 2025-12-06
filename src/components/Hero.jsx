import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";  // ⭐ ADD THIS

export default function Hero() {
  const textLines = [
    "We Build Modern & High-Converting Websites",
    "Grow Your Business With Result-Driven Marketing",
    "Boost Your Online Presence With Smart Strategies",
    "Get More Leads Through SEO, Social Media & Ads",
    "Transform Your Brand Into a Digital Success Story",
  ];

  const gradients = [
    "bg-gradient-to-r from-blue-300 to-cyan-200",
    "bg-gradient-to-r from-purple-300 to-pink-300",
    "bg-gradient-to-r from-yellow-300 to-orange-300",
    "bg-gradient-to-r from-green-300 to-emerald-400",
    "bg-gradient-to-r from-pink-300 to-orange-300",
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayText(textLines[currentLine].slice(0, index));
      index++;

      if (index > textLines[currentLine].length) {
        clearInterval(typing);
        setTimeout(() => {
          setCurrentLine((prev) => (prev + 1) % textLines.length);
          setDisplayText("");
        }, 1200);
      }
    }, 60);

    return () => clearInterval(typing);
  }, [currentLine]);

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Dark Business Background"
          className="w-full h-full object-cover scale-105 brightness-75"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-black/70 backdrop-blur-sm"></div>

      {/* CONTENT */}
      <div className="relative w-full max-w-5xl mx-auto px-6 py-20 text-white">

        {/* SCROLLING TEXT */}
         <div className="overflow-hidden mb-6">
           <div
         className="inline-block whitespace-nowrap text-lg md:text-xl font-bold text-white flex items-center gap-4 drop-shadow-xl"
            style={{ animation: "scrollText 18s linear infinite" }}
           >
         ✨ Google Ads • Digital Marketing • Website Design • SEO Services • Business Growth Solutions • Social Media Marketing ✨
          </div>
          </div>


        <style>{`
          @keyframes scrollText {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>

        {/* TYPEWRITER HEADING */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-snug min-h-[150px] drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]">
          <span className={`${gradients[currentLine]} text-transparent bg-clip-text`}>
            {displayText}
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-base md:text-lg text-gray-200 font-medium drop-shadow-lg leading-relaxed">
           Build stunning websites, boost your business, and grow fast with
           powerful web design & digital marketing solutions.
            </p>


        {/* TAGS — NOW CLICKABLE LINKS */}
        <div className="mt-6 flex flex-wrap gap-3 font-bold">
          <NavLink
            to="/services"
            className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-md hover:bg-blue-600 hover:text-white transition"
          >
            Website Design
          </NavLink>

          <NavLink
            to="/services"
            className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-md hover:bg-blue-600 hover:text-white transition"
          >
            SEO Services
          </NavLink>

          <NavLink
            to="/google-ads"
            className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-md hover:bg-blue-600 hover:text-white transition"
          >
            Google Ads
          </NavLink>
        </div>

        {/* BUTTONS — NOW ROUTER LINKS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl shadow-xl text-white text-lg font-semibold"
          >
            Get Free Consultation
          </NavLink>

          <NavLink
            to="/services"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-800 transition text-lg font-semibold"
          >
            Our Services
          </NavLink>
        </div>
      </div>
    </header>
  );
}
