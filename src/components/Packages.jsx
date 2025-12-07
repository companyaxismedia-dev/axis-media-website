import React, { useEffect, useState } from "react";
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

const lines = [
  "Affordable Website Packages",
  "Premium Plans for Every Business",
  "Boost Your Online Presence",
  "Choose the Perfect Plan for You",
];

export default function Packages() {
  const [line, setLine] = useState(0);
  const [text, setText] = useState("");

  // TYPEWRITER EFFECT
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setText(lines[line].slice(0, i));
      i++;
      if (i > lines[line].length) {
        clearInterval(t);
        setTimeout(() => {
          setText("");
          setLine((prev) => (prev + 1) % lines.length);
        }, 800);
      }
    }, 60);
    return () => clearInterval(t);
  }, [line]);

  return (
    <section className="relative py-24 bg-gradient-to-br from-green-200 via-green-300 to-emerald-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-green-900">
          {text}
        </h2>

        <p className="text-lg text-green-800 mb-12">
          Select the package that fits your business needs perfectly.
        </p>

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
