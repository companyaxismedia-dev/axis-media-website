import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const allAbout = [
  {
    title: "Google Ads Management",
    desc: "High-converting Google Ads campaigns that drive qualified traffic and increase ROI.",
    image: "/google-ads1.webp",
  },
  {
    title: "Digital Marketing Services",
    desc: "Complete digital marketing solutions including SEO, SMM, and performance marketing.",
    image: "/social-media.webp",
  },
  {
    title: "Business Growth Strategy",
    desc: "Data-driven strategies to scale your business and maximize online visibility.",
    image: "/Business-industries.webp",
  },
  {
    title: "Brand Advertising",
    desc: "Creative branding and advertising solutions to build strong brand authority.",
    image: "/brand-advertising.webp",
  },
  {
    title: "Website Development",
    desc: "Fast, responsive, and SEO-optimized websites that convert visitors into customers.",
    image: "website-developmentwebp",
  },
  {
    title: "UI/UX Website Design",
    desc: "Modern UI/UX designs focused on user experience and engagement.",
    image: "/ui-ux.webp",
  },
  {
    title: "Business Partnership",
    desc: "Long-term partnerships focused on sustainable business growth.",
    image: "/business-partnership.webp",
  },
  {
    title: "Online Business Promotion",
    desc: "Increase traffic, leads, and conversions with result-driven promotion strategies.",
    image: "/online-promotion.webp",
  },
];

export default function About() {
  return (
    <section
      className="relative py-24 overflow-hidden
      bg-gradient-to-b from-[#F8FAFF] via-[#EEF3FF] to-[#E6ECFF]"
      aria-labelledby="about-heading"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-300/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-300/20 blur-[200px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <h2
          id="about-heading"
          className="text-center text-4xl md:text-5xl font-extrabold mb-12 text-gray-900"
        >
          We Help Businesses Grow Smarter 🚀
        </h2>

        <p className="text-center max-w-3xl mx-auto mb-16 text-gray-600 text-lg">
          Axis Media delivers performance-driven digital marketing, SEO,
          Google Ads and website development solutions designed for long-term
          business growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {allAbout.map((card, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg border
              transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-36 rounded-xl overflow-hidden mb-4">
                <img
                  src={card.image}
                  alt={`${card.title} - Axis Media Digital Marketing`}
                  width="400"
                  height="300"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-24 max-w-5xl mx-auto">

          <SectionTitle title="Why Businesses Choose Axis Media" />

          <ul className="grid sm:grid-cols-2 gap-6 text-gray-700 text-lg">
            {[
              "5+ Years Experience in Digital Marketing Services",
              "SEO & Performance Driven Growth Strategies",
              "Affordable Pricing with Premium Support",
              "Proven Results with Long-Term Business Growth",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <SectionTitle title="Our Mission & Vision" />

          <p className="text-center text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Our mission is to help businesses grow online through SEO,
            paid advertising and conversion-focused digital strategies.
            Our vision is to become a trusted digital growth partner
            for brands across India and globally.
          </p>

        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title }) {
  return (
    <h3 className="text-3xl font-bold text-center text-gray-900 mt-20 mb-6">
      {title}
    </h3>
  );
}
