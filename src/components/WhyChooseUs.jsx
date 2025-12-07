import React from "react";
import { FaStar, FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">

      <div className="absolute inset-0 bg-[#05081A]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C1130] to-[#05081A] opacity-80"></div>
      </div>

      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(90,60,255,0.25),transparent_70%)] blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-extrabold 
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300">
          Why Choose Axis Media?
        </h2>

        <p className="text-gray-300 text-lg mt-4 max-w-3xl mx-auto">
          We deliver top-quality digital services with unmatched expertise.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">

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
            <p className="text-gray-300 text-sm mt-2">Everything built to grow your business fast.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition hover:scale-105">
            <FaUsers className="text-green-400 text-5xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-bold">Dedicated Support</h3>
            <p className="text-gray-300 text-sm mt-2">Friendly team available anytime.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
