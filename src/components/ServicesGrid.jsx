import React, { useEffect, useState } from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaGlobe,
  FaPalette,
  FaUsers,
  FaVideo,
  FaCheckCircle,
} from "react-icons/fa";

/* -------------------------------------------------------
   ⭐ ALL SERVICE CARDS 
------------------------------------------------------- */
const allServices = [
  {
    title: "Website Development",
    desc: "Modern, fast and mobile-friendly websites to represent your brand professionally.",
    icon: <FaGlobe className="text-4xl text-white" />,
    color: "bg-blue-500",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  },
  {
    title: "E-commerce Website",
    desc: "Secure and user-friendly online stores that convert visitors into customers.",
    icon: <FaGlobe className="text-4xl text-white" />,
    color: "bg-purple-500",
    image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
  },
  {
    title: "Social Media Marketing",
    desc: "Result-driven campaigns to increase followers and engagement.",
    icon: <FaBullhorn className="text-4xl text-white" />,
    color: "bg-green-500",
    image: "https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg",
  },
  {
    title: "Google Ads Management",
    desc: "High-ROI ad campaigns that bring quality leads and sales.",
    icon: <FaChartLine className="text-4xl text-white" />,
    color: "bg-blue-700",
    image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg",
  },
  {
    title: "SEO Services",
    desc: "Rank higher on Google and increase organic traffic with powerful SEO.",
    icon: <FaChartLine className="text-4xl text-white" />,
    color: "bg-indigo-500",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
  },
  {
    title: "Graphic Designing",
    desc: "Creative logos, posters and social media graphics.",
    icon: <FaPalette className="text-4xl text-white" />,
    color: "bg-pink-500",
    image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
  },
];

/* ⭐ Typewriter Sentences */
const sentences = [
  "All Your Digital Services in One Place",
  "Grow Faster with Professional Online Services",
  "Smart Digital Solutions for Modern Businesses",
];

export default function ServicesGrid() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  /* ⭐ Typewriter Effect */
  useEffect(() => {
    let char = 0;
    const typer = setInterval(() => {
      setDisplayText(sentences[lineIndex].slice(0, char));
      char++;
      if (char > sentences[lineIndex].length) {
        clearInterval(typer);
        setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % sentences.length);
          setDisplayText("");
        }, 1500);
      }
    }, 110);

    return () => clearInterval(typer);
  }, [lineIndex]);

  return (
    <div className="pt-24 pb-20 relative overflow-hidden">

      {/* ⭐ Dark Background Like Hero */}
      <div className="absolute inset-0 bg-[#0B0F2A]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F2A] via-[#101632] to-[#060812]" />

      {/* ⭐ Center Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[600px] rounded-full 
                        bg-[radial-gradient(circle,rgba(100,70,255,0.25),transparent_70%)]
                        blur-3xl opacity-40" />
      </div>

      <div className="relative z-10">

        {/* ⭐ Heading */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold min-h-[70px]
                         bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300
                         text-transparent bg-clip-text">
            {displayText}
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-xl md:text-2xl font-semibold text-gray-300">
            Explore our powerful digital services designed for real business growth.
          </p>
        </div>

        {/* ⭐ Service Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {allServices.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl shadow-xl p-5 ${s.color}
                          transition-all duration-700 transform
                          hover:scale-[1.05] hover:-rotate-1 hover:shadow-2xl`}
            >
              <div className="overflow-hidden rounded-xl mb-4 h-40">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover hover:scale-125 transition-all duration-700"
                />
              </div>
              <div className="flex justify-center mb-3">{s.icon}</div>
              <h3 className="text-2xl font-bold text-white">{s.title}</h3>
              <p className="text-white mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* ⭐ WHY CHOOSE US — ADDED SAME AS PAGE VERSION */}
        <h2 className="text-3xl font-extrabold text-center text-transparent 
                       bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 
                       mt-24 mb-10">
          Why Choose Axis Media?
        </h2>

        <ul className="grid sm:grid-cols-2 gap-6 text-lg text-gray-300 max-w-4xl mx-auto px-6">
          {[
            "Highly skilled digital experts",
            "Premium quality at affordable pricing",
            "Fast delivery with excellent support",
            "Guaranteed business growth focus",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400 text-xl" /> {item}
            </li>
          ))}
        </ul>

        {/* ⭐ SIMPLE PROCESS */}
        <h2 className="text-3xl font-extrabold text-center text-transparent 
                       bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 
                       mt-24 mb-10">
          Our Simple Process
        </h2>

        <div className="grid sm:grid-cols-3 gap-10 text-center px-6 max-w-6xl mx-auto">
          {[
            { step: "01", title: "Plan", text: "We understand your business needs." },
            { step: "02", title: "Execute", text: "We launch high-performing strategies." },
            { step: "03", title: "Grow", text: "We scale your results consistently." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 p-8 rounded-2xl 
                         backdrop-blur-xl shadow-xl hover:scale-[1.04] transition"
            >
              <h2 className="text-5xl font-extrabold text-purple-300">{item.step}</h2>
              <h3 className="text-2xl font-bold mt-3 text-white">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
