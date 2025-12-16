import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaSearch,
  FaTools,
  FaMapMarkerAlt,
  FaPenFancy,
  FaLink,
  FaChartLine,
} from "react-icons/fa";

export default function SeoServicesPage() {
  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>SEO Services in India | Axis Media Digital</title>
        <meta
          name="description"
          content="Axis Media Digital is a professional SEO company in India helping businesses rank on Google, increase traffic, and generate quality leads."
        />
        <link
          rel="canonical"
          href="https://axismediadigital.com/seo-services"
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Professional SEO Services in India
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            We help businesses rank higher on Google, attract organic traffic,
            and convert visitors into paying customers.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
            >
              Get Free SEO Audit
            </a>
            <a
              href="/portfolio"
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Result-Driven SEO Agency for Business Growth
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Axis Media Digital is a trusted digital marketing agency offering
            white-hat SEO services designed to improve your Google rankings,
            increase brand visibility, and generate long-term ROI.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard
              icon={<FaSearch />}
              title="Keyword Research & Strategy"
              desc="In-depth keyword research to target high-intent and high-converting search terms."
            />
            <ServiceCard
              icon={<FaTools />}
              title="On-Page & Technical SEO"
              desc="Optimize website structure, speed, core web vitals, and on-page elements."
            />
            <ServiceCard
              icon={<FaMapMarkerAlt />}
              title="Local SEO"
              desc="Rank your business on Google Maps & local searches with optimized GBP."
            />
            <ServiceCard
              icon={<FaPenFancy />}
              title="Content Optimization"
              desc="SEO-optimized content that ranks and engages your audience."
            />
            <ServiceCard
              icon={<FaLink />}
              title="Link Building"
              desc="High-quality backlinks from trusted and relevant websites."
            />
            <ServiceCard
              icon={<FaChartLine />}
              title="SEO Reporting & Growth"
              desc="Transparent monthly reports with ranking, traffic, and performance insights."
            />
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-20 bg-[#0A1B3F] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose Axis Media Digital?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <WhyCard
              title="100% White-Hat SEO"
              desc="Google-approved techniques for safe and sustainable rankings."
            />
            <WhyCard
              title="ROI-Focused Strategy"
              desc="We focus on leads, conversions, and real business growth."
            />
            <WhyCard
              title="Transparent Process"
              desc="No fake promises. Clear communication & monthly reporting."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want to Rank on Google?
        </h2>
        <p className="text-lg mb-8">
          Get a free SEO consultation from our experts today.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Talk to SEO Expert
        </a>
      </section>
    </>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition text-center">
      <div className="text-blue-600 text-4xl mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function WhyCard({ title, desc }) {
  return (
    <div className="bg-white/10 p-8 rounded-2xl">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-blue-100 text-sm">{desc}</p>
    </div>
  );
}
