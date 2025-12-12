// src/components/WhyChooseUs.jsx
import React from "react";
import { FaStar, FaShieldAlt, FaRocket, FaUsers, FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#05081A]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C1130] to-[#05081A] opacity-80"></div>
      </div>

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(90,60,255,0.25),transparent_70%)] blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ===============================
              ⭐ TOP HERO SECTION
           =============================== */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="
              text-4xl md:text-5xl font-extrabold leading-snug
              text-transparent bg-clip-text bg-gradient-to-r 
              from-purple-300 via-blue-300 to-cyan-300
            ">
              Why Choose Axis Media?
            </h2>

            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
              We are a results-driven digital marketing & development agency delivering
              high-quality work, creative strategy, and long-term growth solutions.
              Our team ensures your brand stands out in a competitive digital world.
            </p>

            <ul className="space-y-4 text-gray-200 mt-8 text-lg">
              {[
                "High-ROI digital marketing strategies",
                "Transparent communication & reporting",
                "Fast delivery with premium quality",
                "Expert team for SEO, ads, websites & branding",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <FaCheckCircle className="text-blue-400 mt-1" /> {item}
                </li>
              ))}
            </ul>

            <button className="
              mt-8 px-8 py-3 rounded-xl 
              bg-gradient-to-r from-blue-600 to-purple-600 
              text-white font-semibold hover:scale-105 transition
            ">
              Get Free Strategy Call
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
              alt="Digital Marketing Team"
              className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* ===============================
              ⭐ FOUR GLASS CARDS
           =============================== */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition hover:scale-105">
            <FaStar className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-bold">Premium Quality</h3>
            <p className="text-gray-300 text-sm mt-2">Top-notch work for maximum results.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition hover:scale-105">
            <FaShieldAlt className="text-blue-400 text-5xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-bold">Trusted & Secure</h3>
            <p className="text-gray-300 text-sm mt-2">Safe, reliable & transparent service.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition hover:scale-105">
            <FaRocket className="text-purple-400 text-5xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-bold">Growth Focused</h3>
            <p className="text-gray-300 text-sm mt-2">
              Everything built to grow your business fast.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition hover:scale-105">
            <FaUsers className="text-green-400 text-5xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-bold">Dedicated Support</h3>
            <p className="text-gray-300 text-sm mt-2">
              Friendly team available anytime.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
