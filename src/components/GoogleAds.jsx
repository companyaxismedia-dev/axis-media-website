import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const adsServices = [
  {
    slug: "google-search-ads",
    title: "Google Search Ads",
    description: "High-intent customers reach your website instantly.",
    image: "https://thebusinessfame.com/wp-content/uploads/2023/09/5.24.22-google-ad-updates.png",
  },
  {
    slug: "google-display-ads",
    title: "Google Display Ads",
    description: "Show visually rich banners across millions of websites.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    slug: "shopping-ads",
    title: "Shopping Ads",
    description:
      "Boost sales by showing your product directly on Google Shopping.",
    image: "https://images.pexels.com/photos/3850834/pexels-photo-3850834.jpeg",
  },
  {
    slug: "youtube-ads",
    title: "YouTube Video Ads",
    description: "High-engagement powerful storytelling video campaigns.",
    image: "https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg",
  },
  {
    slug: "remarketing-ads",
    title: "Remarketing Ads",
    description: "Reconnect with people already interested in your product.",
    image: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg",
  },
  {
    slug: "performance-max",
    title: "Performance Max",
    description: "AI-powered ads across all Google platforms.",
    image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
  },
];

const headingLines = [
  "Powerful Google Ads Campaigns",
  "Reach Customers Instantly",
  "Boost Leads & Conversions",
  "Grow with Smart Advertising",
];

const techIcons = [
  {
    title: "Google Search",
    img: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    desc: "Top-performing text-based ads appearing on Google search results.",
  },
  {
    title: "YouTube Ads",
    img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    desc: "Video ads with high engagement and brand recall.",
  },
  {
    title: "Shopping Feed",
    img: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    desc: "Product catalog optimized for maximum conversions.",
  },
  {
    title: "Google Display",
    img: "https://cdn-icons-png.flaticon.com/512/1047/1047711.png",
    desc: "Visual banner ads shown across millions of websites.",
  },
  {
    title: "Smart Campaigns",
    img: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
    desc: "AI-powered automated campaign optimization.",
  },
  {
    title: "Analytics Tracking",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    desc: "Track leads, conversions & ROI in real time.",
  },
];

export default function GoogleAds() {
  const [line, setLine] = useState(0);
  const [text, setText] = useState("");

  // ⭐ Typewriter Animation
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
        }, 800);
      }
    }, 60);

    return () => clearInterval(typing);
  }, [line]);

  return (
    <section className="py-24 bg-[#F3F6FF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-5xl font-extrabold text-center mb-4 text-gray-900">
          {text}
        </h2>

        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-14">
          Professional Google Ads services designed to maximize ROI, bring
          quality leads, and grow your business faster.
        </p>

        {/* ⭐ GOOGLE ADS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {adsServices.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden rounded-xl mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {card.description}
              </p>

              {/* ⭐ More Details Button */}
              <NavLink
                to={`/google-ads/${card.slug}`}
                className="block w-full text-center py-2 mb-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
              >
                More Details →
              </NavLink>

              {/* ⭐ Enquire Now opens Contact Page */}
              <NavLink
                to="/contact"
                className="block w-full text-center py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-semibold"
              >
                Enquire Now →
              </NavLink>
            </div>
          ))}
        </div>

        {/* ⭐ TECHNOLOGY SECTION */}
        <div className="mt-24 bg-white p-12 rounded-3xl shadow-xl border border-gray-200">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Technologies We Use for Google Ads
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {techIcons.map((tech, i) => (
              <div key={i} className="text-center">
                <img
                  src={tech.img}
                  alt={tech.title}
                  className="h-20 w-20 mx-auto mb-4 object-contain"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {tech.title}
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ⭐ BUSINESS BENEFITS */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Why Choose Google Ads?
          </h3>

          <ul className="grid sm:grid-cols-2 gap-6 text-gray-700 text-lg">
            {[
              "Instantly reach customers searching for your services",
              "Boost visibility across Google Search, YouTube & Web",
              "Generate high-quality leads fast",
              "Track performance with advanced analytics",
            ].map((t, i) => (
              <li className="flex items-center gap-3" key={i}>
                <FaCheckCircle className="text-green-500 text-xl" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* ⭐ PROCESS SECTION */}
        <h3 className="text-3xl font-bold text-center text-gray-900 mt-16 mb-6">
          Our Simple Process
        </h3>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "01", title: "Plan", text: "Understanding your business & goals." },
            { step: "02", title: "Launch", text: "Setting up high-performing campaigns." },
            { step: "03", title: "Grow", text: "Optimizing & scaling results." },
          ].map((box, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg text-center"
            >
              <h1 className="text-4xl font-bold text-yellow-600 mb-2">
                {box.step}
              </h1>
              <h2 className="text-xl font-bold text-gray-900">{box.title}</h2>
              <p className="text-gray-600 mt-2">{box.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
