import React from "react";
import {
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      aria-labelledby="why-choose-axis-media"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#05081A]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C1130] to-[#05081A] opacity-80"></div>
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(90,60,255,0.25),transparent_70%)] blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

          {/* LEFT */}
          <div>
            <h2
              id="why-choose-axis-media"
              className="text-4xl md:text-5xl font-extrabold leading-snug
              text-transparent bg-clip-text bg-gradient-to-r 
              from-purple-300 via-blue-300 to-cyan-300"
            >
              Why Choose Axis Media – A Trusted Digital Marketing Agency
            </h2>

            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
              Axis Media is a trusted digital marketing and web development agency in India,
              helping businesses grow through SEO, Google Ads, high-performance websites,
              and conversion-focused strategies built for long-term success.
            </p>

            <ul className="space-y-4 text-gray-200 mt-8 text-lg">
              {[
                "High-ROI SEO & digital marketing strategies",
                "Transparent reporting & clear communication",
                "Fast delivery with premium quality execution",
                "Expert team for websites, ads, SEO & branding",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <FaCheckCircle className="text-blue-400 mt-1" /> {item}
                </li>
              ))}
            </ul>

            {/* SEO FRIENDLY CTA */}
            <a
              href="/contact"
              className="inline-block mt-8 px-8 py-3 rounded-xl
              bg-gradient-to-r from-blue-600 to-purple-600
              text-white font-semibold hover:scale-105 transition"
            >
              Get a Free Strategy Call
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/Digital Marketing Team.webp"
              alt="Axis Media digital marketing team working on SEO and growth strategies"
              loading="lazy"
              width="720"
              height="520"
              className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
            />
          </div>
        </div>

        {/* TRUST CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">

          <Card icon={<FaStar />} title="Premium Quality" desc="Top-notch work built for results." />
          <Card icon={<FaShieldAlt />} title="Trusted & Secure" desc="Safe, reliable & transparent service." />
          <Card icon={<FaRocket />} title="Growth Focused" desc="Everything designed to scale your business." />
          <Card icon={<FaUsers />} title="Dedicated Support" desc="Friendly experts available anytime." />

        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6
      border border-white/10 hover:border-white/20 transition hover:scale-105 text-center">
      <div className="text-5xl mx-auto mb-4 text-blue-300">{icon}</div>
      <h3 className="text-white text-xl font-bold">{title}</h3>
      <p className="text-gray-300 text-sm mt-2">{desc}</p>
    </div>
  );
}
