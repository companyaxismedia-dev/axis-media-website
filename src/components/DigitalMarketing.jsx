// src/components/DigitalMarketing.jsx
import React, { useEffect, useState } from "react";

const services = [
  {
    title: "Social Media Marketing",
    description: "Ads, content creation & social campaigns for all platforms.",
    image:
      "https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-pink-500 text-white",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "On-page, off-page & technical SEO to boost your rankings.",
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-blue-500 text-white",
  },
  {
    title: "Email Marketing",
    description:
      "Targeted campaigns to engage your audience and convert leads.",
    image:
      "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-green-500 text-white",
  },
  {
    title: "Google Ads Management",
    description: "High-converting PPC campaigns to maximize ROI.",
    image:
      "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-purple-500 text-white",
  },
  {
    title: "Instagram Ads",
    description:
      "Highly targeted Instagram ads to boost reach & engagement.",
    image:
      "https://images.pexels.com/photos/2041394/pexels-photo-2041394.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-yellow-500 text-white",
  },
  {
    title: "Facebook Ads",
    description:
      "Advanced Facebook ad campaigns to increase leads and sales.",
    image:
      "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-red-500 text-white",
  },
  {
    title: "Twitter (X) Ads",
    description: "Promoted tweets & brand awareness campaigns.",
    image:
      "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-indigo-500 text-white",
  },
  {
    title: "LinkedIn Ads",
    description: "Professional ad campaigns for B2B lead generation.",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-teal-500 text-white",
  },
  {
    title: "YouTube Ads",
    description: "Powerful video ads to increase brand visibility.",
    image:
      "https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "bg-orange-500 text-white",
  },
];

const lines = [
  "Boost Your Business With Powerful Digital Marketing",
  "Grow Faster With High-ROI Advertising Campaigns",
  "Connect With Your Audience Across All Platforms",
  "Smart Marketing Strategies For Modern Brands",
  "We Help You Reach, Engage And Convert Customers",
];

const CARDS_PER_BATCH = 6;

export default function DigitalMarketing() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [batchStart, setBatchStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);

  // ⭐ TYPEWRITER
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
        }, 1000);
      }
    }, 80);
    return () => clearInterval(type);
  }, [lineIndex]);

  // ⭐ CARD ANIMATION
  useEffect(() => {
    setVisibleCount(0);
    const timers = [];

    for (let i = 0; i < CARDS_PER_BATCH; i++) {
      timers.push(
        setTimeout(() => {
          setVisibleCount((prev) => prev + 1);
        }, i * 700)
      );
    }

    timers.push(
      setTimeout(() => {
        setBatchStart((prev) => (prev + CARDS_PER_BATCH) % services.length);
      }, CARDS_PER_BATCH * 700 + 5000)
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, [batchStart]);

  const batchCards = Array.from({ length: CARDS_PER_BATCH }).map((_, i) => {
    const idx = (batchStart + i) % services.length;
    return services[idx];
  });

  return (
    <section className="py-24 text-gray-900" style={{ background: "#CCF5D3" }}>
      <div className="max-w-7xl mx-auto px-4">

        {/* ⭐ TYPEWRITER HEADING */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
          <span className="bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent">
            {displayText}
          </span>
        </h2>

        <p className="text-lg text-center text-green-900 mb-16 font-medium">
          Choose premium, high-performing digital marketing services for your business.
        </p>

        {/* ⭐ SLIDING CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {batchCards.map((s, i) => (
            <div
              key={i}
              className={`
                ${s.color} p-6 rounded-2xl shadow-xl transition-all duration-700
                ${i < visibleCount ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                hover:scale-105 hover:rotate-[-1deg]
              `}
            >
              <div className="overflow-hidden rounded-xl h-40 mb-4">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-white/90 mb-4">{s.description}</p>

              <button className="w-full py-2 rounded-lg border border-white bg-white/20 text-white hover:bg-white hover:text-black transition">
                Enquire Now
              </button>
            </div>
          ))}
        </div>

        {/* ⭐ FULL DETAILS SECTION (Same as DigitalMarketingPage) */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-900">
            Comprehensive Digital Marketing
          </h2>

          <p className="text-center mb-12 max-w-3xl mx-auto text-green-800">
            At Axis Media, we offer end-to-end digital marketing solutions to boost your brand visibility.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DetailCard title="Social Media Marketing" text="Build a strong social presence with tailored strategies." />
            <DetailCard title="SEO Services" text="Optimize your website for search visibility and high traffic." />
            <DetailCard title="Google Ads & PPC" text="Run paid campaigns to generate high-quality leads & ROI." />
            <DetailCard title="Email Marketing" text="Engage your audience with personalized campaigns." />
            <DetailCard title="Analytics & Reporting" text="Make data-driven decisions with detailed reports." />
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailCard({ title, text }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <h3 className="font-semibold text-xl text-green-700 mb-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
