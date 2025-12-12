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
    const changeBg = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % bgImages.length);
        setFade(true);
      }, 600);
    }, 6000);

    return () => clearInterval(changeBg);
  }, []);

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
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40">

      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ${fade ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
      ></div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute top-1/3 -left-20 w-[600px] h-[600px] bg-purple-500/25 blur-[150px] rounded-full"></div>
      <div className="absolute top-10 -right-20 w-[600px] h-[600px] bg-blue-500/25 blur-[150px] rounded-full"></div>

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
            className="px-6 py-3 rounded-xl text-lg font-semibold shadow-lg 
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
                       hover:bg-white hover:text-slate-900 transition shadow-md"
          >
            Our Services
          </NavLink>
        </div>
      </div>
    </header>
  );
}
