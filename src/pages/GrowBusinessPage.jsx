import React, { useEffect, useState } from "react";
import {
  FaRocket,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaHandshake,
  FaMobileAlt,
  FaSearch,
  FaBullseye,
  FaChartBar,
  FaMagic,
} from "react-icons/fa";

export default function GrowBusinessPage() {
  const lines = [
    "Grow Your Business With Powerful Digital Strategies 🚀",
    "Get More Customers & Boost Your Sales",
    "Rank Higher on Google With SEO",
    "Build Strong Online Presence Across Platforms",
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
        }, 800);
      }
    }, 60);
    return () => clearInterval(typing);
  }, [index]);

  return (
    <div className="text-white bg-gradient-to-b from-[#052b23] via-[#063a30] to-[#084d3f]">

      {/* HERO SECTION */}
      <section
        className="relative py-56 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Section.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl">
            {displayText}
            <span className="animate-pulse border-r-2 ml-1"></span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-200 text-lg mt-6 font-light drop-shadow-md">
            We help businesses grow through websites, SEO, Google Ads, branding,
            automation & complete digital marketing solutions.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 px-10 py-3 rounded-xl shadow-xl font-semibold"
          >
            Book Free Growth Consultation →
          </a>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="py-24">
        <FeatureCards />
      </section>

      {/* WHY GROW BUSINESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Why Growing Your Business Matters
        </h2>

        <p className="text-gray-200 max-w-3xl mx-auto text-lg mb-14 font-light">
          Visibility, trust, engagement — these are the pillars of business success.
          Our strategies help you attract the right audience & convert them into paying customers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: <FaBullseye />, title: "Targeted Customer Reach" },
            { icon: <FaChartBar />, title: "Boost Sales & Conversions" },
            { icon: <FaSearch />, title: "Improve Google Visibility" },
            { icon: <FaMobileAlt />, title: "Grow Social Media Presence" },
            { icon: <FaHandshake />, title: "Build Brand Trust" },
            { icon: <FaMagic />, title: "Premium Brand Identity" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 p-8 rounded-xl border border-white/10 shadow-xl backdrop-blur-md"
            >
              <div className="text-5xl text-green-300 mb-4 mx-auto drop-shadow-lg">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-[#07352c] bg-opacity-90 shadow-inner">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Services That Help Your Business Grow Faster
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {[
            "Website Development",
            "Google Ads (Instant Leads)",
            "Meta Ads / Instagram Ads",
            "SEO – Rank #1 on Google",
            "Branding & Logo Design",
            "Social Media Management",
            "Business Automation",
            "Email + WhatsApp Marketing",
            "Creative Content Designing",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 bg-white/10 rounded-xl border border-white/10 shadow-lg backdrop-blur-md"
            >
              <FaCheckCircle className="text-green-300 text-3xl mb-3 drop-shadow-lg" />
              <h3 className="text-xl text-white font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-white">
          How We Grow Your Business
        </h2>

        <div className="space-y-10">
          {[
            {
              step: "1. Strategy & Market Research",
              text: "We analyze your industry & audience to build a winning plan.",
            },
            {
              step: "2. Branding & Positioning",
              text: "We create a professional brand identity that stands out.",
            },
            {
              step: "3. Advertising & SEO",
              text: "We run PPC Ads + SEO for maximum visibility & customers.",
            },
            {
              step: "4. Optimization & Scaling",
              text: "We track data & scale revenue using performance analytics.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 p-8 rounded-lg border border-white/10 shadow-xl backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{item.step}</h3>
              <p className="text-gray-200 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-green-700 shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="text-lg text-gray-200 mb-6">
          Get a free strategy session with our marketing experts.
        </p>

        <a
          href="/contact"
          className="bg-white text-green-700 font-bold px-10 py-3 rounded-xl shadow-xl hover:bg-gray-200"
        >
          Get Free Consultation →
        </a>
      </section>
    </div>
  );
}

/* FEATURE CARDS */
function FeatureCards() {
  return (
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
      <Card
        icon={<FaRocket className="text-blue-300 text-4xl mx-auto drop-shadow-lg" />}
        title="High-Converting Websites"
        text="Custom-built websites designed to generate real customers."
      />
      <Card
        icon={<FaChartLine className="text-green-300 text-4xl mx-auto drop-shadow-lg" />}
        title="SEO Ranking"
        text="Rank on Google with advanced SEO optimization."
      />
      <Card
        icon={<FaBullhorn className="text-pink-300 text-4xl mx-auto drop-shadow-lg" />}
        title="Digital Advertising"
        text="Google & Meta Ads for instant, high-quality leads."
      />
      <Card
        icon={<FaUsers className="text-yellow-300 text-4xl mx-auto drop-shadow-lg" />}
        title="Brand Identity"
        text="Professional branding that builds customer trust."
      />
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="bg-white/10 p-8 rounded-xl shadow-xl backdrop-blur-md text-center border border-white/10">
      {icon}
      <h3 className="text-xl text-white font-bold mt-4">{title}</h3>
      <p className="text-gray-200 mt-2">{text}</p>
    </div>
  );
}
