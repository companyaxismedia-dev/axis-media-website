import React from "react";

export default function DeveloperIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE CONTENT */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 leading-snug">
            Work With Expert Web Developers  
            <span className="text-blue-600"> You Can Trust</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Our skilled web developers specialize in building fast, secure and 
            high-performance websites tailored to your business needs.  
            Whether it's a business website, e-commerce store, or a custom MERN app—
            we ensure modern design, flawless UI/UX, and advanced functionality.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">✔</span>
              <p>10+ years of professional web development experience</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">✔</span>
              <p>Experts in React, MERN Stack, WordPress & custom CMS</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">✔</span>
              <p>SEO-optimized, lightning-fast user experience</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">✔</span>
              <p>100% mobile-responsive & high-conversion website builds</p>
            </li>
          </ul>

          {/* CTA BUTTON */}
          <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
            Get a Free Consultation
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="/CMS-Development.webp"
            alt="Expert Developer"
            className="rounded-3xl shadow-2xl w-full max-w-xl lg:max-w-2xl xl:max-w-3xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
