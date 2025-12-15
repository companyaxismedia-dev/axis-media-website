import React from "react";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const adsServices = [
  {
    slug: "google-search-ads",
    title: "Google Search Ads",
    description: "Reach high-intent customers instantly with targeted search ads.",
    image: "/Google Search.webp",
  },
  {
    slug: "google-display-ads",
    title: "Google Display Ads",
    description: "Visually rich banner ads across millions of websites.",
    image: "/google-display-ads.webp",
  },
  {
    slug: "shopping-ads",
    title: "Shopping Ads",
    description: "Show your products directly on Google Shopping to boost sales.",
    image: "/Shopping Ads.webp",
  },
  {
    slug: "youtube-ads",
    title: "YouTube Video Ads",
    description: "High-engagement video ads for strong brand recall.",
    image: "/YouTube Ads.webp",
  },
  {
    slug: "remarketing-ads",
    title: "Remarketing Ads",
    description: "Reconnect with users who already showed interest.",
    image: "/Remarketing Ads.webp",
  },
  {
    slug: "performance-max",
    title: "Performance Max Campaigns",
    description: "AI-powered ads across all Google networks.",
    image: "/Performance Max.webp",
  },
];

const techIcons = [
  {
    title: "Google Search Network",
    img: "/Google Search icon.webp",
    desc: "High-performing text ads on Google Search results.",
  },
  {
    title: "YouTube Advertising",
    img: "/YouTube Ads logo.webp",
    desc: "Video ads with strong engagement and conversions.",
  },
  {
    title: "Google Shopping Feed",
    img: "/Shopping Feed.webp",
    desc: "Optimized product feeds for maximum ROI.",
  },
  {
    title: "Google Display Network",
    img: "/Google Display.webp",
    desc: "Banner ads across millions of websites and apps.",
  },
  {
    title: "Smart Campaigns",
    img: "/Smart Campaigns.webp",
    desc: "AI-driven automated bidding & targeting.",
  },
  {
    title: "Analytics & Conversion Tracking",
    img: "/Analytics Tracking.webp",
    desc: "Track leads, sales, and ROI accurately.",
  },
];

export default function GoogleAds() {
  return (
    <section
      className="py-24 bg-[#F3F6FF]"
      aria-labelledby="google-ads-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN HEADING */}
        <h2
          id="google-ads-heading"
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900"
        >
          Professional Google Ads Management Services
        </h2>

        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-14">
          We create and manage high-performing Google Ads campaigns to maximize
          ROI, generate quality leads, and scale your business faster.
        </p>

        {/* ADS SERVICES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {adsServices.map((card, i) => (
            <article
              key={i}
              className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6
              hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden rounded-xl mb-4">
                <img
                  src={card.image}
                  alt={`${card.title} Google Ads Service`}
                  width="400"
                  height="260"
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-700 hover:scale-110"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {card.description}
              </p>

              <NavLink
                to={`/google-ads/${card.slug}`}
                className="block w-full text-center py-2 mb-3
                bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
              >
                More Details →
              </NavLink>

              <NavLink
                to="/contact"
                className="block w-full text-center py-2
                bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-semibold"
              >
                Enquire Now →
              </NavLink>
            </article>
          ))}
        </div>

        {/* TECHNOLOGY */}
        <div className="mt-24 bg-white p-12 rounded-3xl shadow-xl border border-gray-200">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Technologies We Use for Google Ads
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {techIcons.map((tech, i) => (
              <div key={i} className="text-center">
                <img
                  src={tech.img}
                  alt={tech.title}
                  width="80"
                  height="80"
                  loading="lazy"
                  className="h-20 w-20 mx-auto mb-4 object-contain"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {tech.title}
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Why Choose Google Ads for Business Growth?
          </h3>

          <ul className="grid sm:grid-cols-2 gap-6 text-gray-700 text-lg">
            {[
              "Instantly reach customers searching for your services",
              "Boost visibility across Search, YouTube & Display Network",
              "Generate high-quality leads quickly",
              "Track and optimize campaigns with advanced analytics",
            ].map((t, i) => (
              <li key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* PROCESS */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Our Google Ads Management Process
          </h3>

          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Plan", text: "Understand your business & goals." },
              { step: "02", title: "Launch", text: "Create & launch optimized campaigns." },
              { step: "03", title: "Grow", text: "Scale and optimize for better ROI." },
            ].map((box, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg text-center"
              >
                <p className="text-4xl font-bold text-yellow-600 mb-2">
                  {box.step}
                </p>
                <h4 className="text-xl font-bold text-gray-900">{box.title}</h4>
                <p className="text-gray-600 mt-2">{box.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
