import React from "react";
import About from "../components/About";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#0A1D56]"> 
      {/* Same color as About.jsx background start point */}

      <About />

      {/* EXTRA INFO SECTION — Detailed company info, contact & socials */}
      <div className="container mx-auto px-6 py-16 text-white">
        <h2 className="text-4xl font-bold mb-6 text-center">
          About Axis Media
        </h2>

        <p className="text-center mb-8 max-w-4xl mx-auto text-white/90 text-lg leading-relaxed">
          Axis Media is a full-service digital agency focused on turning online presence into measurable business growth.
          We combine modern web development, performance-first SEO, paid advertising (Google/Meta), conversion-oriented
          design, and clear analytics to deliver predictable, scalable results for small businesses, enterprises and
          ecommerce brands. Our approach: research → strategy → execution → optimisation.
        </p>

        {/* LARGE DETAILS / WHAT WE USED */}
        <section className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-8 rounded-xl shadow-xl">
            <h3 className="font-semibold text-2xl mb-3">What we build (technologies & tools)</h3>
            <ul className="list-disc pl-5 space-y-2 text-white/90">
              <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS, Framer Motion, Swiper</li>
              <li><strong>Backend & APIs:</strong> Node.js, Express, Serverless functions, Python (Flask/Django)</li>
              <li><strong>Databases:</strong> MongoDB, MySQL, PostgreSQL, Firebase</li>
              <li><strong>E-commerce:</strong> Stripe / PayPal integrations, Shopify customizations</li>
              <li><strong>DevOps & Deploy:</strong> Vercel, Netlify, AWS, Docker, GitHub Actions</li>
              <li><strong>Analytics & Ads:</strong> Google Analytics, Google Tag Manager, Google Ads, Meta Ads</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-8 rounded-xl shadow-xl">
            <h3 className="font-semibold text-2xl mb-3">How we work</h3>
            <p className="text-white/90 leading-relaxed mb-4">
              We start with discovery to understand your goals, audience and competition. Then we design UI/UX in
              Figma, build fast accessible frontends, connect resilient backends, integrate analytics and ad funnels,
              and run continuous optimization cycles. Every project includes measurable KPIs and transparent reporting.
            </p>

            <h4 className="font-semibold mt-4 mb-2">Engagement models</h4>
            <ul className="list-disc pl-5 text-white/90">
              <li>Project-based (fixed scope)</li>
              <li>Monthly retainer (growth & ads management)</li>
              <li>Dedicated team (long term product development)</li>
            </ul>
          </div>
        </section>

        {/* CONTACT + SOCIALS */}
        <section className="max-w-4xl mx-auto bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
          <h3 className="text-2xl font-bold mb-4">Get in touch</h3>

          <p className="text-white/90 mb-4">
            Need a quote, a free website review, or a growth plan? Reach out and we'll respond within one business day.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
            <a
              href="mailto:companyaxismedia@gmail.com"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg"
            >
              <FaEnvelope /> <span>companyaxismedia@gmail.com</span>
            </a>

            <a
              href="tel:+919871584001"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg"
            >
              <FaPhone /> <span>+91 98715 84001</span>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            <a
              href="/facebook.webp" /* replace with real link */
              target="_blank"
              rel="noreferrer"
              className="text-white/90 hover:text-white text-xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="/Instagram.webp" /* replace with real link */
              target="_blank"
              rel="noreferrer"
              className="text-white/90 hover:text-white text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="/linkedIn.webp" /* replace with real link */
              target="_blank"
              rel="noreferrer"
              className="text-white/90 hover:text-white text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <p className="mt-6 text-white/60">
            You can also message us via the contact page — we provide free initial consultations and a short
            action plan for new enquiries.
          </p>
        </section>

        {/* MISSION / VISION (repeat in larger form) */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h4 className="text-xl font-bold mb-2">Our Mission</h4>
            <p className="text-white/90">
              To empower businesses with technology-first digital solutions that create measurable growth,
              long-term organic visibility and delightful user experiences.
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h4 className="text-xl font-bold mb-2">Our Vision</h4>
            <p className="text-white/90">
              To be a trusted growth partner for small and medium businesses, helping them succeed online using
              performance marketing, clean engineering and honest reporting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
