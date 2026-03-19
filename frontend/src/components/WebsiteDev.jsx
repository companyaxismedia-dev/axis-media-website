import React from "react";

export default function DeveloperIntro() {
  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="developer-intro-heading"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2
            id="developer-intro-heading"
            className="text-4xl font-extrabold mb-6 leading-snug"
          >
            Work With Expert Web Developers  
            <span className="text-blue-600"> You Can Trust</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Our professional web development team builds fast, secure and
            SEO-optimized websites for businesses in India and globally.
            From custom MERN stack applications to WordPress and CMS-based
            solutions, we deliver scalable, high-performance digital products
            designed for growth.
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
              <p>SEO-friendly architecture with lightning-fast performance</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">✔</span>
              <p>100% mobile-responsive, conversion-focused UI/UX</p>
            </li>
          </ul>

          {/* SEO FRIENDLY CTA */}
          <a
            href="/contact"
            className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white 
            rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            Get a Free Consultation
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/CMS-Development.webp"
            alt="Expert web developers building SEO optimized websites"
            loading="lazy"
            width="800"
            height="600"
            className="rounded-3xl shadow-2xl w-full 
            max-w-xl lg:max-w-2xl xl:max-w-3xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
