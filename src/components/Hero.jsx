import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  const textLines = [
    "Grow Your Business With Result-Driven Marketing",
    "We Build High-Converting Websites",
    "Boost Your Online Presence With Smart Strategies",
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Typewriter
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setDisplayText(textLines[currentLine].slice(0, index));
      index++;
      if (index > textLines[currentLine].length) {
        clearInterval(typing);
        setTimeout(() => {
          setCurrentLine((p) => (p + 1) % textLines.length);
          setDisplayText("");
        }, 1200);
      }
    }, 50);
    return () => clearInterval(typing);
  }, [currentLine]);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">

      {/* ⭐ Simple Particle Background (NO ERRORS) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(70)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: Math.random() * 3 + "px",
              height: Math.random() * 3 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `twinkle ${2 + Math.random() * 4}s linear infinite`,
            }}
          ></span>
        ))}
      </div>

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-[#0B0F2A]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F2A] via-[#101632] to-[#0A0D21]" />
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(120,90,255,0.25),transparent_70%)] blur-3xl opacity-70"></div>
      </div>

      <div className="absolute -left-32 top-1/3 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(180,90,255,0.35),transparent_70%)] blur-3xl opacity-50"></div>

      <div className="absolute -right-32 top-1/4 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(80,150,255,0.35),transparent_70%)] blur-3xl opacity-50"></div>

      {/* SCROLLING TEXT */}
      <div className="absolute top-28 text-gray-300 text-sm overflow-hidden w-full text-center">
        <div
          style={{ animation: "scrollText 22s linear infinite" }}
          className="inline-block whitespace-nowrap"
        >
          ✨ Google Ads • Digital Marketing • Website Design • SEO Services • Automation • Business Growth ✨
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl text-center text-white px-6">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-snug drop-shadow-xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300">
            {displayText}
          </span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          Build stunning websites, boost your business, and grow fast with powerful
          web design & digital marketing solutions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <NavLink
            to="/contact"
            className="px-6 py-3 rounded-xl text-lg font-semibold shadow-xl 
                       bg-gradient-to-r from-blue-500 to-purple-500 
                       hover:from-blue-400 hover:to-purple-400 
                       transition transform hover:-translate-y-1"
          >
            Get Free Consultation
          </NavLink>

          <NavLink
            to="/services"
            className="px-6 py-3 rounded-xl text-lg font-semibold border border-white/20 
                       bg-white/5 text-gray-100 backdrop-blur-xl 
                       hover:bg-white hover:text-slate-900 
                       transition shadow-md"
          >
            Our Services
          </NavLink>
        </div>
      </div>

      <style>{`
        @keyframes scrollText {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </header>
  );
}
