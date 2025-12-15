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
    <div className="pt-24 bg-[#0A1D56]">

      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>About Axis Media | Digital Marketing & Web Development Agency</title>

        <meta
          name="description"
          content="Axis Media is a performance-driven digital marketing and web development agency providing SEO, Google Ads, websites and growth solutions for businesses."
        />

        <meta
          name="keywords"
          content="Axis Media, digital marketing agency, web development company, SEO services, Google Ads agency India"
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
      </Helmet>

      {/* ================= MAIN ABOUT SECTION ================= */}
      <About />

      {/* ================= EXTRA INFO ================= */}
      <section className="container mx-auto px-6 py-16 text-white">

        <h1 className="text-4xl font-bold mb-6 text-center">
          About Axis Media
        </h1>

        <p className="text-center mb-10 max-w-4xl mx-auto text-white/90 text-lg leading-relaxed">
          Axis Media is a full-service digital agency focused on turning online
          presence into measurable business growth. We combine modern web
          development, performance-first SEO, paid advertising and analytics to
          deliver scalable results for startups, businesses and enterprises.
        </p>

        {/* ================= DETAILS GRID ================= */}
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 mb-14">

          {/* TECHNOLOGY */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">
              Technologies & Tools We Use
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-white/90">
              <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS</li>
              <li><strong>Backend:</strong> Node.js, Express, Python</li>
              <li><strong>Databases:</strong> MongoDB, MySQL, PostgreSQL</li>
              <li><strong>E-commerce:</strong> Stripe, PayPal, Razorpay</li>
              <li><strong>Deploy:</strong> Vercel, Netlify, AWS</li>
              <li><strong>Marketing:</strong> Google Ads, Meta Ads, GA4</li>
            </ul>
          </div>

          {/* WORK PROCESS */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">
              How We Work
            </h2>

            <p className="text-white/90 leading-relaxed">
              We follow a clear process — research, strategy, design,
              development, launch and continuous optimization. Every project is
              backed by analytics, transparency and measurable KPIs.
            </p>

            <ul className="list-disc pl-5 mt-4 text-white/90">
              <li>Project-based delivery</li>
              <li>Monthly growth retainers</li>
              <li>Dedicated development teams</li>
            </ul>
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-2xl border border-white/10 text-center">

          <h2 className="text-2xl font-bold mb-4">
            Get in Touch
          </h2>

          <p className="text-white/90 mb-6">
            Need a free consultation or website audit? Contact us — we respond
            within one business day.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="mailto:companyaxismedia@gmail.com"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg"
            >
              <FaEnvelope /> companyaxismedia@gmail.com
            </a>

            <a
              href="tel:+919871584001"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg"
            >
              <FaPhone /> +91 98715 84001
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-6 text-xl">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Axis Media Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Axis Media Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Axis Media LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* ================= MISSION / VISION ================= */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">

          <div className="bg-white/10 p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-white/90">
              To empower businesses with performance-driven digital solutions
              that deliver long-term growth.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-white/90">
              To become a trusted digital growth partner for businesses across
              India and globally.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
