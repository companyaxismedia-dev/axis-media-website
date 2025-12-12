// src/components/Packages.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

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
    <section className="relative py-24 bg-gradient-to-br from-green-200 via-green-300 to-emerald-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        {/* ============================================================
              ⭐ NEW PREMIUM HERO SECTION (Do NOT remove old code)
        ============================================================ */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24 text-left">

          {/* LEFT SIDE CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-snug mb-6">
              Choose The Perfect Website Package  
              <span className="text-green-700"> For Your Business</span>
            </h2>

            <p className="text-lg text-green-800 leading-relaxed mb-6">
              Whether you are a startup, small business, or growing brand—our 
              website packages are designed to give you everything you need: 
              professional design, SEO optimization, fast performance, security, 
              and complete scalability.  
            </p>

            <ul className="space-y-4 text-green-900 text-lg">
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-700 mt-1" />
                Professional & modern website layouts
              </li>
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-700 mt-1" />
                Free domain, hosting & SSL options available
              </li>
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-700 mt-1" />
                SEO-ready pages for better Google ranking
              </li>
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-700 mt-1" />
                Mobile-friendly & fast-loading designs
              </li>
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-700 mt-1" />
                Perfect for service, business & eCommerce websites
              </li>
            </ul>

            <button className="mt-8 bg-green-700 text-white py-3 px-8 rounded-xl font-semibold hover:bg-green-800 transition">
              Get Free Package Consultation
            </button>
          </div>

          {/* RIGHT SIDE LARGE IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg"
              alt="Website Pricing Plans"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>

        </div>
        {/* ============================ END NEW HERO SECTION ============================ */}


        {/* OLD HEADING (Kept same as requested) */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-green-900">
          Affordable Website Packages
        </h2>

        <p className="text-lg text-green-800 mb-12">
          Select the package that fits your business needs perfectly.
        </p>

        {/* PACKAGES GRID — YOUR ORIGINAL CODE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, i) => (
            <div key={i} className={`rounded-2xl p-6 ${pkg.color}`}>
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>

              <div className="overflow-y-auto pr-3 pb-4" style={{ height: "220px" }}>
                <ul className="space-y-2 text-sm">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-green-700 font-bold">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 w-full bg-black/40 text-white py-2 rounded-lg border hover:bg-white hover:text-black transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* WHY OUR PACKAGES HELP YOU */}
        <h3 className="text-3xl font-bold text-center text-green-900 mt-20 mb-6">
          How Our Packages Help You
        </h3>

        <ul className="grid sm:grid-cols-2 gap-6 text-lg text-green-950">
          {[
            "Boost your online visibility",
            "Increase customer trust with premium designs",
            "Rank higher with SEO-ready pages",
            "Get fast & mobile-friendly performance",
          ].map((t, i) => (
            <li key={i} className="flex items-center gap-3">
              <FaCheckCircle className="text-green-700" /> {t}
            </li>
          ))}
        </ul>

        {/* PROCESS SECTION */}
        <h3 className="text-3xl font-bold text-center text-green-900 mt-20 mb-6">
          Our Simple Process
        </h3>

        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Plan", text: "We understand your requirements." },
            { step: "02", title: "Design", text: "We build a high-quality layout." },
            { step: "03", title: "Deliver", text: "Your website goes live!" },
          ].map((box, i) => (
            <div key={i} className="bg-white/90 p-6 rounded-xl shadow-xl text-center border">
              <h1 className="text-4xl font-bold text-green-700 mb-2">{box.step}</h1>
              <h2 className="text-xl font-bold">{box.title}</h2>
              <p className="text-gray-700 mt-2">{box.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
