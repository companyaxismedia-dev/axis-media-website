import React, { useEffect, useState } from "react";
import { FaRocket, FaBullhorn, FaChartLine, FaUsers, FaCheckCircle } from "react-icons/fa";

export default function GrowBusinessPage() {
  const lines = [
    "Grow Your Business With Smart Strategies 🚀",
    "Boost Your Sales With Digital Marketing",
    "Increase Visibility With SEO & Branding",
    "Build A Strong Online Presence",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(lines[index].slice(0, i));
      i++;
      if (i > lines[index].length) {
        clearInterval(typing);
        setTimeout(() => {
          setDisplayText("");
          setIndex((prev) => (prev + 1) % lines.length);
        }, 1000);
      }
    }, 70);
    return () => clearInterval(typing);
  }, [index]);

  return (
    <section className="relative py-24 text-white">

      {/* ⭐ NEW DARK GREEN BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-green-600 -z-10"></div>

      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold mb-10 drop-shadow-[0_0_25px_rgba(0,180,255,0.9)]">
        {displayText}
        <span className="border-r-4 border-blue-300 animate-pulse ml-2"></span>
      </h1>

      {/* Description */}
      <p className="max-w-4xl mx-auto text-center text-gray-200 text-lg mb-16 px-6 leading-relaxed">
        Every business needs a powerful online presence and smart strategies to grow.
        We help companies scale through modern websites, SEO, digital marketing,
        Google Ads, branding, and result-driven online marketing solutions.
      </p>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        <Card
          icon={<FaRocket className="text-blue-400 text-4xl mx-auto" />}
          title="High-Converting Websites"
          text="We design modern websites that turn visitors into customers."
        />
        <Card
          icon={<FaChartLine className="text-green-400 text-4xl mx-auto" />}
          title="SEO & Google Ranking"
          text="Rank on Google & attract organic customers consistently."
        />
        <Card
          icon={<FaBullhorn className="text-pink-400 text-4xl mx-auto" />}
          title="Digital Marketing"
          text="Google Ads, Meta Ads, Social Media Growth, Brand Awareness."
        />
        <Card
          icon={<FaUsers className="text-yellow-300 text-4xl mx-auto" />}
          title="Brand Identity & Growth"
          text="Logos, brand design, content & strategies that build trust."
        />
      </div>

      {/* Extra Sections */}
      <ExtraSections />

      {/* CTA Button */}
      <div className="text-center mt-20">
        <a
          href="/contact"
          className="px-10 py-4 text-xl font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 shadow-xl transition"
        >
          Get Free Business Consultation
        </a>
      </div>
    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <div
      className="
        bg-white/10 backdrop-blur-xl 
        border border-white/10 
        p-6 rounded-2xl shadow-lg 
        hover:scale-105 hover:shadow-[0_0_20px_rgba(0,180,255,0.4)]
        transition text-center
      "
    >
      {icon}
      <h3 className="text-xl font-bold mt-3 mb-2">{title}</h3>
      <p className="text-gray-200">{text}</p>
    </div>
  );
}

function ExtraSections() {
  return (
    <div className="mt-24 max-w-6xl mx-auto px-6">
      <SectionTitle title="How We Grow Your Business" />
      <ul className="grid sm:grid-cols-2 gap-6 text-gray-200 text-lg">
        {[
          "We create modern & responsive websites",
          "We improve your Google ranking with SEO",
          "We run high-converting Google Ads campaigns",
          "We manage Social Media for consistent growth",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <FaCheckCircle className="text-blue-300" /> {item}
          </li>
        ))}
      </ul>

      <SectionTitle title="Our Simple Process" />
      <div className="grid sm:grid-cols-3 gap-10 text-center">
        {[
          { step: "01", title: "Research", text: "We study your market & competitors." },
          { step: "02", title: "Strategy", text: "We create a plan tailored to your business goals." },
          { step: "03", title: "Growth", text: "We launch campaigns & scale your business." },
        ].map((item, i) => (
          <div key={i} className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/10">
            <h2 className="text-4xl font-bold text-blue-300 mb-2">{item.step}</h2>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-200">{item.text}</p>
          </div>
        ))}
      </div>

      <SectionTitle title="Why Choose Us" />
      <ul className="grid sm:grid-cols-2 gap-6 text-gray-200 text-lg">
        {[
          "5+ Years of Digital Marketing Experience",
          "Industry-Level Website Development",
          "Affordable Pricing & Premium Quality",
          "Dedicated Support & Fast Work Delivery",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <FaCheckCircle className="text-green-300" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <h2 className="text-3xl font-bold text-center text-green-300 mt-20 mb-6">
      {title}
    </h2>
  );
}
