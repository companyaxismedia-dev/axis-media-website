// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  const textLines = [
    "Grow Your Business With Result-Driven Marketing",
    "We Build High-Converting Websites",
    "Boost Your Online Presence With Smart Strategies",
  ];

  const bgImages = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80",
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % bgImages.length);
        setFade(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const text = textLines[currentLine];

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(typing);
        setTimeout(() => {
          setCurrentLine((prev) => (prev + 1) % textLines.length);
          setDisplayText("");
        }, 1200);
      }
    }, 50);

    return () => clearInterval(typing);
  }, [currentLine]);

  return (
    <header
      className="
        relative min-h-screen 
        flex items-center justify-center
        overflow-hidden 
        pt-[85px]  /* EXACT NAVBAR HEIGHT */
      "
    >
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms]
        ${fade ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-4xl text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-snug">
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
            className="px-6 py-3 rounded-xl text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:opacity-90"
          >
            Get Free Consultation
          </NavLink>

          <NavLink
            to="/services"
            className="px-6 py-3 rounded-xl text-lg border border-white/20 
              bg-white/10 text-white backdrop-blur-xl 
              hover:bg-white hover:text-black transition"
          >
            Our Services
          </NavLink>
        </div>
      </div>
    </header>
  );
}
