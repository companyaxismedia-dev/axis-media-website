import React from "react";
import { Helmet } from "react-helmet-async";
import About from "../components/About";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="pt-24 bg-gradient-to-b from-[#F8FAFF] via-[#EEF3FF] to-[#E6ECFF]">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>About Axis Media | Digital Marketing & Web Development Agency</title>

        <meta
          name="description"
          content="Axis Media is a trusted digital marketing and web development agency offering SEO, Google Ads, website development and growth solutions for businesses."
        />

        <link rel="canonical" href="https://axismediadigital.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Axis Media" />
        <meta
          property="og:description"
          content="Performance-driven digital marketing & web development agency."
        />
        <meta property="og:url" content="https://axismediadigital.com/about" />
        <meta property="og:type" content="website" />

        {/* ORGANIZATION SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Axis Media",
            url: "https://axismediadigital.com",
            logo: "https://axismediadigital.com/axismedia.webp",
            description:
              "Axis Media is a digital marketing and web development agency providing SEO, Google Ads, website development and business growth solutions.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Delhi NCR",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9871584001",
              contactType: "customer support",
            },
            sameAs: [
              "https://www.facebook.com/profile.php?id=61584611262239",
              "https://www.instagram.com/axismedia123",
              "https://www.linkedin.com/company/axis-media-digital"
            ],
          })}
        </script>
      </Helmet>

      {/* ================= ABOUT COMPONENT ================= */}
      <About />

      {/* ================= PAGE CONTENT ================= */}
      <section className="container mx-auto px-6 py-16 text-gray-800">

        {/* ✅ SINGLE H1 (ONLY ONE ON PAGE) */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          About Axis Media
        </h1>

        <p className="text-center mb-12 max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Axis Media is a full-service digital marketing and web development
          agency helping businesses grow online with SEO, Google Ads, high-
          performance websites and data-driven strategies.
        </p>

        <p className="text-center max-w-4xl mx-auto text-gray-600 mb-14">
          We work with startups, local businesses and growing brands across India,
          helping them improve online visibility, generate quality leads and
          increase revenue through modern digital solutions.
        </p>

        {/* INFO GRID */}
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 mb-16">

          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <h2 className="text-2xl font-semibold mb-4">
              Technologies & Tools We Use
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS</li>
              <li><strong>Backend:</strong> Node.js, Express</li>
              <li><strong>Databases:</strong> MongoDB, MySQL</li>
              <li><strong>E-commerce:</strong> Razorpay, Stripe</li>
              <li><strong>Marketing:</strong> Google Ads, Meta Ads, GA4</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <h2 className="text-2xl font-semibold mb-4">
              How We Work
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Our process is simple and transparent — research, strategy,
              design, development, launch and continuous optimization.
              Every project is backed by analytics and measurable KPIs.
            </p>

            <ul className="list-disc pl-5 mt-4 text-gray-700">
              <li>Project-based delivery</li>
              <li>Monthly growth retainers</li>
              <li>Dedicated support & reporting</li>
            </ul>
          </div>
        </div>

        {/* CONTACT BOX */}
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl text-center">

          <h2 className="text-2xl font-bold mb-4">
            Get in Touch with Axis Media
          </h2>

          <p className="text-gray-600 mb-6">
            Need a free consultation or website audit? We respond within one
            business day.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="mailto:companyaxismedia@gmail.com"
              className="inline-flex items-center gap-3 bg-blue-50 hover:bg-blue-100 px-5 py-3 rounded-lg"
            >
              <FaEnvelope /> companyaxismedia@gmail.com
            </a>

            <a
              href="tel:+919871584001"
              className="inline-flex items-center gap-3 bg-blue-50 hover:bg-blue-100 px-5 py-3 rounded-lg"
            >
              <FaPhone /> +91 98715 84001
            </a>
          </div>

          <div className="flex justify-center gap-6 text-xl text-blue-600">
            <a href="https://www.facebook.com/profile.php?id=61584611262239" aria-label="Axis Media Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/axismedia123" aria-label="Axis Media Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/axis-media-digital" aria-label="Axis Media LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
