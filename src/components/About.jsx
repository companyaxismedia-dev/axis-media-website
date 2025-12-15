// src/components/About.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const allAbout = [
  {
    title: "Google Ads",
    desc: "High-converting ad campaigns to reach your target audience.",
    image: "/GoogleAdsManagement.webp",
  },
  {
    title: "Digital Marketing",
    desc: "Complete online marketing solutions for business growth.",
    image: "/SociaMediaMarketing.webp",
  },
  {
    title: "Grow Your Business",
    desc: "Strategies to scale and expand your business online.",
    image: "/INDUSTRIES.jpeg",
  },
  {
    title: "Brand Advertising",
    desc: "Boost your brand reach through targeted campaigns.",
    image: "/Straumannimage.webp",
  },
  {
    title: "Web Development",
    desc: "Responsive websites that convert visitors into customers.",
    image: "/WebsiteDevelopment.webp",
  },
  {
    title: "Website Design",
    desc: "Modern UI/UX designs that keep users engaged.",
    image: "/IBMimage.webp",
  },
  {
    title: "Business Partnership",
    desc: "Partner with a team focused on your growth.",
    image: "/SONYIMAGE.webp",
  },
  {
    title: "Promote Your Business",
    desc: "Get more visibility, traffic, and leads online.",
    image: "/IBMimage.webp",
  },
];

export default function About() {
  return (
    <section className="
      relative py-24 text-white overflow-hidden
      bg-[#0A1D56]
    ">

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* STATIC HEADING (NO TYPEWRITER) */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-12 
          bg-gradient-to-r from-blue-200 via-white to-blue-100 text-transparent bg-clip-text">
          We Help Businesses Grow Smarter 🚀
        </h1>

        {/* STATIC CARDS (NO REPEATING LOOP) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {allAbout.map((card, i) => (
            <div
              key={i}
              className="
                bg-white/10 backdrop-blur-lg border border-white/20
                rounded-2xl p-6 shadow-xl text-center transition-all duration-700
                hover:scale-[1.05]
              "
            >
              <div className="h-36 rounded-xl overflow-hidden mb-4">
                <img
                  src={card.image}
                  className="w-full h-full object-cover hover:scale-125 transition duration-700"
                  alt={card.title}
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-white/90 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* EXTRA SECTIONS */}
        <div className="mt-24 max-w-5xl mx-auto">

          <SectionTitle title="Why Businesses Choose Us" />

          <ul className="grid sm:grid-cols-2 gap-6 text-white/90 text-lg">
            {[
              "5+ Years Experience in Digital Services",
              "High Quality & Professional Work",
              "Affordable Packages & Premium Support",
              "Proven Results & Growth Strategies",
            ].map((t, i) => (
              <li key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-300" /> {t}
              </li>
            ))}
          </ul>

          <SectionTitle title="Our Mission & Vision" />

          <p className="text-center text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
            Our mission is to empower businesses with digital solutions that generate real results.
            We aim to be your growth partner, helping you build a strong online presence and achieve long-term success.
          </p>

        </div>

      </div>
    </section>
  );
}

function SectionTitle({ title }) {
  return (
    <h2 className="text-3xl font-bold text-center text-blue-100 mt-20 mb-6">
      {title}
    </h2>
  );
}
