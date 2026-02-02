import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

/* ================= PACKAGES DATA ================= */
const packages = [
  {
    name: "Basic Website",
    price: "₹5,999",
    duration: "One Time",
    features: [
      "Free TLD Domain",
      "Free Cloud Hosting",
      "Basic SEO",
      "Responsive Layout",
      "Basic Logo Design",
      "1 Business Mail",
      "Monthly Backup",
      "Mobile Friendly Design",
    ],
    color: "bg-white text-black border border-gray-200",
  },

  {
    name: "Starter Website",
    price: "₹14,999",
    duration: "Most Popular",
    highlight: true,
    features: [
      "Free Domain + Hosting",
      "SSL Certificate",
      "10 Pages Website",
      "Premium SEO",
      "3 Business Emails",
      "Content Optimization",
      "Monthly Backup",
      "Responsive Layout",
    ],
    color:
      "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-2xl ring-4 ring-blue-300",
  },

  {
    name: "Plus Website",
    price: "₹21,999",
    duration: "One Time",
    features: [
      "Domain + Hosting",
      "SEO Optimized",
      "Mobile Optimization",
      "Content Optimization",
      "Social Media Integration",
      "Google Map Integration",
      "Admin Panel",
      "24/7 Support",
    ],
    color: "bg-white text-black border border-gray-200",
  },

  {
    name: "Pro Business Website",
    price: "₹34,999",
    duration: "Premium",
    features: [
      "Free .com Domain",
      "Advanced Hosting",
      "20 Pages Website",
      "Advanced SEO",
      "Logo + Branding Kit",
      "5 Business Emails",
      "Speed Optimization",
      "Premium Security",

      /* 🔥 ADDED */
      "Social Media Handling (2 Platforms)",
      "SEO Friendly Content Writing (Up to 10 Pages)",
    ],
    color:
      "bg-gradient-to-br from-blue-600 to-blue-900 text-white shadow-2xl",
  },

  {
    name: "E-Commerce Starter",
    price: "₹27,999",
    duration: "One Time",
    features: [
      "10 Products Upload",
      "COD + Online Payment",
      "Admin Dashboard",
      "Order Management",
      "Product Filters",
      "Customer Login",
      "SEO Ready",
      "1 Year Support",
    ],
    color: "bg-white text-black border border-gray-200",
  },

  {
    name: "E-Commerce Pro",
    price: "₹49,999",
    duration: "Advanced",
    features: [
      "Unlimited Products",
      "Payment Gateway",
      "Order / Stock Management",
      "Coupons + Offers System",
      "Invoice System",
      "Delivery Management",
      "Advanced SEO",
      "3 Year Support",

      /* 🔥 ADDED */
      "Social Media Handling (3 Platforms)",
      "Product & Website Content Writing",
    ],
    color: "bg-white text-black border border-gray-200",
  },
];

/* ================= COMPONENT ================= */
export default function Packages() {
  return (
    <section
      className="relative py-24 bg-gradient-to-br from-green-200 via-green-300 to-emerald-300 overflow-hidden"
      aria-labelledby="packages-heading"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HERO SECTION (UNCHANGED – SEO SAFE) */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
          <div>
            <h2
              id="packages-heading"
              className="text-4xl md:text-5xl font-extrabold text-green-900 leading-snug mb-6"
            >
              Affordable Website Packages for Business Growth
            </h2>

            <p className="text-lg text-green-800 leading-relaxed mb-6">
              Axis Media offers flexible website packages designed for startups,
              small businesses, and growing brands. Get professional design,
              SEO optimization, fast performance, and secure hosting.
            </p>

            <ul className="space-y-4 text-green-900 text-lg">
              {[
                "Professional & modern website layouts",
                "Free domain, hosting & SSL options",
                "SEO-ready pages for better Google ranking",
                "Mobile-friendly & fast-loading designs",
                "Perfect for service, business & eCommerce websites",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <FaCheckCircle className="text-green-700 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            <NavLink
              to="/contact"
              className="inline-block mt-8 bg-green-700 text-white py-3 px-8 rounded-xl font-semibold hover:bg-green-800 transition"
            >
              Get Free Package Consultation
            </NavLink>
          </div>

          <div className="flex justify-center">
            <img
              src="/Website Pricing Plans.webp"
              alt="Website Pricing Plans by Axis Media"
              width="520"
              height="420"
              loading="lazy"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>
        </div>

        {/* PACKAGES GRID */}
        <h3 className="text-4xl font-extrabold text-center mb-6 text-green-900">
          Website Pricing Plans
        </h3>

        <p className="text-lg text-center text-green-800 mb-12">
          Choose the website package that fits your business needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, i) => (
            <article
              key={i}
              className={`relative rounded-2xl p-6 ${pkg.color}`}
            >
              {pkg.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}

              <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>

              <p className="text-3xl font-extrabold mb-1">{pkg.price}</p>
              <p className="text-sm opacity-80 mb-4">{pkg.duration}</p>

              <ul className="space-y-2 text-sm max-h-[230px] overflow-y-auto pr-2">
                {pkg.features.map((f, idx) => (
                  <li key={idx} className="flex gap-2">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    {f}
                  </li>
                ))}
              </ul>

              <NavLink
                to="/contact"
                className="mt-6 block text-center bg-black/40 text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Get Started
              </NavLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

