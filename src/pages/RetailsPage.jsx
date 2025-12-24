// src/pages/Retail.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaStore,
  FaShoppingCart,
  FaMobileAlt,
  FaChartLine,
  FaBullhorn,
  FaSearch,
  FaLaptop,
  FaCheckCircle,
} from "react-icons/fa";

export default function Retail() {
  /* ================= FAQ DATA ================= */
  const faqs = [
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
      a: "Yes, we run Google and Meta ads that bring real enquiries and store visits.",
    },
  ];

  /* ================= FAQ SCHEMA ================= */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  /* ================= BREADCRUMB SCHEMA ================= */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://axismediadigital.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://axismediadigital.com/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Retail Industry",
        item: "https://axismediadigital.com/industries/retail",
      },
    ],
  };

  /* ================= SERVICE SCHEMA (IMPORTANT) ================= */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Retail Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "Axis Media",
      url: "https://axismediadigital.com",
    },
    areaServed: "India",
    description:
      "Digital marketing, website development, local SEO, ecommerce and advertising solutions for retail businesses to increase store visits and sales.",
  };

  return (
    <main
      className="
        pt-28 pb-20 min-h-screen text-gray-900
        bg-gradient-to-b from-[#E9F8F0] via-[#DFF3E8] to-[#D6EBDC]
      "
    >
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Retail Industry Digital Marketing & Website Solutions | Axis Media
        </title>

        <meta
          name="description"
          content="Digital solutions for retail businesses including websites, local SEO, Google Ads, ecommerce and branding to increase store visits and sales."
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/industries/retail"
        />

        {/* SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-6">
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-14">
          <FaStore className="text-6xl text-green-600 mx-auto mb-4" />
          <h1 className="text-5xl font-extrabold mb-3">
            Retail Industry Solutions
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We help retail businesses (Book Store, Clothing Shop, Furniture
            Store, Grocery & more) grow visibility, sales and customer trust
            using modern digital solutions.
          </p>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <FaLaptop />, title: "Modern Retail Website" },
            { icon: <FaShoppingCart />, title: "Online Store / E-commerce" },
            { icon: <FaMobileAlt />, title: "Mobile Responsive Design" },
            { icon: <FaSearch />, title: "Local SEO Visibility" },
            { icon: <FaChartLine />, title: "Business Growth Strategy" },
            { icon: <FaBullhorn />, title: "Google & Meta Ads" },
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

        {/* ================= LONG DESCRIPTION ================= */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Why Retail Businesses Need Digital Presence?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Customers now search online before visiting a store. A strong
            digital presence builds trust, increases footfall, generates
            enquiries and improves sales.
            <br />
            <br />
            Whether you run a{" "}
            <strong>
              book store, clothing showroom, furniture shop or grocery store
            </strong>
            , we build complete digital systems that help you grow faster.
          </p>
        </section>

        {/* ================= WHAT WE OFFER ================= */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            What We Offer for Retail Industry
          </h2>

          <ul className="space-y-3 text-lg text-gray-800">
            {[
              "Retail-focused website design",
              "Product catalog & enquiry system",
              "Google My Business optimization",
              "Local SEO ranking improvement",
              "Social media branding & creatives",
              "Google & Facebook Ads",
              "Customer engagement strategies",
              "E-commerce setup (optional)",
              "Mobile responsive layouts",
              "Analytics & monthly reporting",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* ================= FAQ ================= */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-green-600 text-white p-10 rounded-3xl text-center shadow-xl">
          <h2 className="text-3xl font-extrabold mb-4">
            Grow Your Retail Business With Us
          </h2>
          <p className="text-lg mb-6">
            Build a digital presence that brings customers every day.
          </p>

          <a
            href="/contact"
            className="px-10 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Get Free Consultation →
          </a>
        </section>
      </div>
    </main>
  );
}
