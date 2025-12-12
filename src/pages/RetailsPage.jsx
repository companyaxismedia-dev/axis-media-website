// src/pages/Retail.jsx
import React from "react";
import {
  FaStore,
  FaShoppingCart,
  FaMobileAlt,
  FaChartLine,
  FaBullhorn,
  FaSearch,
  FaUsers,
  FaLaptop,
  FaCheckCircle,
} from "react-icons/fa";

export default function Retail() {
  return (
    <div
      className="
        pt-28 pb-20 
        min-h-screen 
        text-gray-900
        bg-gradient-to-b 
        from-[#E9F8F0] 
        via-[#DFF3E8] 
        to-[#D6EBDC]
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* PAGE HEADER */}
        <div className="text-center mb-14">
          <FaStore className="text-6xl text-green-600 mx-auto mb-4" />
          <h1 className="text-5xl font-extrabold mb-3">Retail Industry Solutions</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We help retail businesses (Book Store, Clothing Shop, Furniture Store, Grocery & more)
            grow their visibility, sales and customer trust with modern digital solutions.
          </p>
        </div>

        {/* ICON FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <FaLaptop />, title: "Modern Retail Website" },
            { icon: <FaShoppingCart />, title: "Online Store / E-commerce" },
            { icon: <FaMobileAlt />, title: "Mobile Responsive Design" },
            { icon: <FaSearch />, title: "SEO for Local Searches" },
            { icon: <FaChartLine />, title: "Business Growth Strategy" },
            { icon: <FaBullhorn />, title: "Google + Meta Ads" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center"
            >
              <div className="text-green-600 text-4xl mb-3 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* LONG DESCRIPTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Why Retail Businesses Need Digital Presence?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The retail industry is growing fast—customers now search and compare prices online
            before visiting a store. A professional digital presence helps retail brands attract
            customers, increase footfall, bring online enquiries, and improve brand trust.
            <br /><br />
            Whether you run a <b>book store, clothing showroom, furniture shop, grocery store or toy shop</b>,
            we create a complete online system that helps you stand out and grow sales.
          </p>
        </section>

        {/* WHAT WE OFFER */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What We Offer for Retail Industry</h2>

          <ul className="space-y-3 text-lg text-gray-800">
            {[
              "Modern retail-focused website design",
              "Product catalog and online enquiry system",
              "Google My Business optimization",
              "SEO for local search ranking",
              "Social media creatives & branding kit",
              "Facebook + Google Ads management",
              "Customer engagement and retention strategy",
              "E-commerce setup if needed",
              "Mobile responsive layouts",
              "Analytics, reporting & monthly guidance",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* WHY CHOOSE SECTION */}
        <section className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Why Retail Businesses Choose Us?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Industry-focused planning & strategy</li>
              <li>• High-converting retail website designs</li>
              <li>• Accurate tracking + monthly reporting</li>
              <li>• Affordable packages for small stores</li>
              <li>• 24/7 support for updates & help</li>
            </ul>
          </div>

          <div className="bg-green-100 p-8 rounded-3xl shadow-inner">
            <h2 className="text-2xl font-bold mb-4">Benefits for Your Store</h2>
            <p className="text-gray-700 leading-relaxed">
              A strong digital presence helps customers trust your shop before they even visit.
              You get more store visits, more calls, more enquiries, and better brand visibility.
              We help you establish a digital identity that increases sales and customer loyalty.
            </p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "How can a retail website increase my in-store sales?",
                a: "Your products become discoverable online, customers trust you more, and visit your shop with buying intent.",
              },
              {
                q: "Do you provide product photography & catalog design?",
                a: "Yes, we provide complete branding and product catalog creation services.",
              },
              {
                q: "Can you help run ads for my retail store?",
                a: "Yes, we run Google + Meta ads that bring real enquiries and store visits.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow border border-gray-200">
                <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-green-600 text-white p-10 rounded-3xl text-center shadow-xl">
          <h2 className="text-3xl font-extrabold mb-4">Grow Your Retail Business With Us</h2>
          <p className="text-lg mb-6">
            Let’s build a digital presence that brings customers every day.
          </p>

          <a
            href="/contact"
            className="px-10 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Get Free Consultation →
          </a>
        </section>

      </div>
    </div>
  );
}
