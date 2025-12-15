import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const packages = [
  {
    name: "Basic Website",
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
    features: [
      "Free Domain + Hosting",
      "SSL Certificate",
      "10 Pages",
      "Premium SEO",
      "3 Business Emails",
      "Content Optimization",
      "Monthly Backup",
      "Responsive Layout",
    ],
    color: "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl",
  },
  {
    name: "Plus Website",
    features: [
      "Domain + Hosting",
      "SEO Optimized",
      "Mobile Optimization",
      "Content Optimization",
      "Social Media Integration",
      "Google Map",
      "Admin Panel",
      "24/7 Support",
    ],
    color: "bg-white text-black border border-gray-200",
  },
  {
    name: "Pro Business Website",
    features: [
      "Free .com Domain",
      "Advanced Hosting",
      "20 Pages Website",
      "Advanced SEO",
      "Logo + Branding Kit",
      "5 Business Emails",
      "Speed Optimization",
      "Premium Security",
    ],
    color: "bg-gradient-to-br from-blue-500 to-blue-800 text-white shadow-xl",
  },
  {
    name: "E-Commerce Starter",
    features: [
      "10 Products Upload",
      "COD + Online Payment",
      "Admin Dashboard",
      "Order Management",
      "Product Filters",
      "Customer Login",
      "SEO Ready",
      "1 Month Support",
    ],
    color: "bg-white text-black border border-gray-200",
  },
  {
    name: "E-Commerce Pro",
    features: [
      "Unlimited Products",
      "Payment Gateway",
      "Order/Stock System",
      "Coupons + Offers",
      "Invoice System",
      "Delivery Management",
      "Advanced SEO",
      "3 Month Support",
    ],
    color: "bg-white text-black border border-gray-200",
  },
];

export default function Packages() {
  return (
    <section
      className="relative py-24 bg-gradient-to-br from-green-200 via-green-300 to-emerald-300 overflow-hidden"
      aria-labelledby="packages-heading"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">

          {/* LEFT CONTENT */}
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
              className="inline-block mt-8 bg-green-700 text-white py-3 px-8
              rounded-xl font-semibold hover:bg-green-800 transition"
            >
              Get Free Package Consultation
            </NavLink>
          </div>

          {/* RIGHT IMAGE */}
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
            <article key={i} className={`rounded-2xl p-6 ${pkg.color}`}>
              <h4 className="text-2xl font-bold mb-4">{pkg.name}</h4>

              <ul className="space-y-2 text-sm max-h-[220px] overflow-y-auto pr-2">
                {pkg.features.map((f, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-green-700 font-bold">✔</span>
                    {f}
                  </li>
                ))}
              </ul>

              <NavLink
                to="/contact"
                className="mt-6 block text-center bg-black/40 text-white py-2
                rounded-lg border hover:bg-white hover:text-black transition"
              >
                Buy Now
              </NavLink>
            </article>
          ))}
        </div>

        {/* BENEFITS */}
        <h3 className="text-3xl font-bold text-center text-green-900 mt-20 mb-6">
          How Our Website Packages Help You
        </h3>

        <ul className="grid sm:grid-cols-2 gap-6 text-lg text-green-950 max-w-4xl mx-auto">
          {[
            "Boost your online visibility",
            "Increase customer trust with premium designs",
            "Rank higher with SEO-ready pages",
            "Fast & mobile-friendly performance",
          ].map((t, i) => (
            <li key={i} className="flex items-center gap-3">
              <FaCheckCircle className="text-green-700" /> {t}
            </li>
          ))}
        </ul>

        {/* PROCESS */}
        <h3 className="text-3xl font-bold text-center text-green-900 mt-20 mb-6">
          Our Website Development Process
        </h3>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "01", title: "Plan", text: "Understand your business needs." },
            { step: "02", title: "Design", text: "Create a professional layout." },
            { step: "03", title: "Launch", text: "Deploy your website live." },
          ].map((box, i) => (
            <div key={i} className="bg-white/90 p-6 rounded-xl shadow-xl text-center border">
              <p className="text-4xl font-bold text-green-700 mb-2">{box.step}</p>
              <h4 className="text-xl font-bold">{box.title}</h4>
              <p className="text-gray-700 mt-2">{box.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
