// src/pages/IndustryDetailPage.jsx
import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { findIndustryBySlug } from "../data/IndustriesData";

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const industry = findIndustryBySlug(slug);

  if (!industry) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-[#F7FFF6] text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Industry not found</h1>
          <NavLink to="/industries" className="text-emerald-600 underline">
            Back to Industries
          </NavLink>
        </div>
      </section>
    );
  }

  const Icon = industry.icon;

  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-[#F4FFF7] to-[#E8F8EE] min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-600 mb-3">
          <NavLink to="/" className="hover:underline text-gray-700">Home</NavLink>{" "}
          /{" "}
          <NavLink to="/industries" className="hover:underline text-emerald-600">Industries</NavLink>
          {" / "}
          <span className="font-semibold">{industry.title}</span>
        </p>

        {/* HERO */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2 border border-gray-200">
          <div className="p-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-gray-50">
                <Icon className={`text-4xl ${industry.colorClass}`} />
              </div>
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900">{industry.title}</h1>
                <p className="text-gray-600 mt-1 text-lg">{industry.longDesc}</p>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border">
                <h4 className="font-semibold mb-2">Main Services</h4>
                <ul className="text-gray-700 space-y-2">
                  {industry.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border">
                <h4 className="font-semibold mb-2">Business Benefits</h4>
                <ul className="text-gray-700 space-y-2">
                  {industry.benefits.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
              >
                Book Free Consultation
              </a>

              <a
                href="#faq"
                className="inline-block px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition"
              >
                Read FAQs
              </a>
            </div>
          </div>

          <div className="h-72 lg:h-auto">
            <img
              src={industry.heroImage}
              alt={industry.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* LONG DESCRIPTION */}
        <section className="mt-10">
          <div className="bg-white p-8 rounded-2xl shadow border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">About {industry.title}</h2>
            <p className="text-gray-700 leading-relaxed">
              {industry.longDesc} We focus on measurable outcomes: more enquiries,
              higher conversion rates and long-term organic growth tailored for your business.
            </p>

            <h3 className="mt-6 text-xl font-semibold mb-2">What we build</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {industry.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <h3 className="mt-6 text-xl font-semibold mb-2">How clients benefit</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {industry.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-10">
          <div className="bg-white p-8 rounded-2xl shadow border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {industry.faqs.map((f, i) => (
                <div key={i} className="p-4 border rounded-lg bg-gray-50">
                  <div className="font-semibold mb-2">{f.q}</div>
                  <div className="text-gray-700">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="mt-10">
          <div className="bg-emerald-600 text-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="text-2xl font-bold">Ready to grow your {industry.title} business?</h4>
              <p className="text-white/90 mt-1">Book a free 15-minute call — we'll share a short plan you can use immediately.</p>
            </div>

            <div className="flex gap-3">
              <a href="/contact" className="px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg">Book Free Call</a>
              <NavLink to="/services" className="px-6 py-3 bg-white/10 border border-white/30 rounded-lg">See Services</NavLink>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
