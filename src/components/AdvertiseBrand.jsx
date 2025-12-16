import React from "react";
import { FaBullhorn, FaChartLine, FaUsers, FaCheckCircle } from "react-icons/fa";

export default function AdvertiseBrand() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADING ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Advertise & Grow Your Brand
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Axis Media helps businesses build powerful brand presence through
            strategic advertising, creative campaigns, and data-driven marketing.
          </p>
        </div>

        {/* ===== CONTENT GRID ===== */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Brand Advertising Matters?
            </h3>

            <p className="text-gray-600 mb-6">
              Strong branding builds trust, increases visibility, and converts
              audiences into loyal customers. Our advertising strategies ensure
              maximum reach and measurable growth.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span className="text-gray-700">
                  High-impact digital ad campaigns
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span className="text-gray-700">
                  Targeted audience reach & lead generation
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span className="text-gray-700">
                  Brand awareness & authority building
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span className="text-gray-700">
                  ROI-focused marketing strategies
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/brand-advertising.webp"
              alt="Brand Advertising Services"
              className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
            />
          </div>

        </div>

        {/* ===== ICON FEATURES ===== */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <Feature
            icon={<FaBullhorn />}
            title="Creative Ads"
            desc="Eye-catching creatives that boost engagement."
          />
          <Feature
            icon={<FaUsers />}
            title="Target Audience"
            desc="Reach the right people at the right time."
          />
          <Feature
            icon={<FaChartLine />}
            title="Growth Strategy"
            desc="Data-driven campaigns for real growth."
          />
          <Feature
            icon={<FaCheckCircle />}
            title="Trusted Results"
            desc="Proven success across multiple industries."
          />
        </div>

      </div>
    </section>
  );
}

/* ===== SMALL FEATURE CARD ===== */
function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-center">
      <div className="text-3xl text-blue-600 mb-4 flex justify-center">
        {icon}
      </div>
      <h4 className="font-semibold text-lg text-gray-900 mb-2">
        {title}
      </h4>
      <p className="text-gray-600 text-sm">
        {desc}
      </p>
    </div>
  );
}
