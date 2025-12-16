import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

/* 🔥 Background Images (PUBLIC FOLDER) */
const bgImages = [
  "/hero-1.webp",
  "/hero-2.webp",
  "/hero-3.webp",
  "/hero-4.webp",
];

/* 🔥 Typewriter Keywords */
const typingWords = [
  "SEO Services",
  "Google Ads",
  "Website Development",
  "Social Media Marketing",
];

export default function Hero() {
  /* Background slider */
  const [currentBg, setCurrentBg] = useState(0);

  /* Typewriter states */
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  /* ✅ BACKGROUND IMAGE SLIDER (LOW CPU) */
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 6000); // thoda slow → better performance
    return () => clearInterval(slider);
  }, []);

  /* ✅ TYPEWRITER EFFECT (OPTIMIZED) */
  useEffect(() => {
    const word = typingWords[wordIndex];

    const timer = setTimeout(() => {
      if (charIndex < word.length) {
        setText(word.substring(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setWordIndex((w) => (w + 1) % typingWords.length);
        }, 1200);
      }
    }, 90);

    return () => clearTimeout(timer);
  }, [charIndex, wordIndex]);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[85px]">
      
      {/* ✅ LCP IMAGE (ONLY ONE IN DOM) */}
      <img
        src={bgImages[currentBg]}
        alt="Axis Media Digital Marketing Agency"
        width="1920"
        height="1080"
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-6">

        {/* ✅ SINGLE H1 */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Grow Your Business With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
            Result-Driven Digital Marketing
          </span>
        </h1>

        {/* TYPEWRITER (SEO SAFE) */}
        <p
          className="mt-4 text-2xl md:text-3xl font-semibold min-h-[44px]
          text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
        >
          {text}
          <span className="animate-pulse">|</span>
        </p>

        {/* DESCRIPTION */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Axis Media is a result-driven digital marketing agency helping businesses grow with
          <span className="text-white font-semibold">
            {" "}SEO, Google Ads, Website Development{" "}
          </span>
          and performance-focused online marketing strategies that generate real leads and revenue.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <NavLink
            to="/contact"
            className="px-8 py-4 rounded-xl text-lg font-semibold
            bg-gradient-to-r from-blue-600 to-purple-600
            text-white shadow-md hover:opacity-90 transition"
          >
            Get Free Consultation
          </NavLink>

          <NavLink
            to="/packages"
            className="px-8 py-4 rounded-xl text-lg font-semibold
            border border-white/30 bg-white/10
            hover:bg-white hover:text-black transition"
          >
            Our Services
          </NavLink>
        </div>

      </div>
    </header>
  );
}
