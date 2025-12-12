// src/pages/ServiceDetailPage.jsx
import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { FaCheckCircle, FaStar, FaQuoteLeft } from "react-icons/fa";
import servicesData from "../data/servicesData";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-[#E8FDEB] to-[#CFF5D9]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Service not found</h1>
          <NavLink to="/services" className="text-green-700 underline">
            Back to Services
          </NavLink>
        </div>
      </section>
    );
  }

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-[#E8FDEB] to-[#CFF5D9]">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-700 mb-3">
          <NavLink to="/" className="hover:underline text-gray-900">Home</NavLink> /
          <NavLink to="/services" className="hover:underline mx-1 text-gray-900">Services</NavLink> /
          <span className="font-semibold text-gray-900">{service.title}</span>
        </p>

        {/* HERO SECTION */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2">
          <div className="p-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{service.title}</h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {service.details}
            </p>

            <ul className="grid gap-2 text-gray-700 mb-6 text-lg">
              {service.bullets?.map((b, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 mt-6">
              <NavLink
                to="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Get a Free Consultation
              </NavLink>

              <a href="#pricing" className="text-gray-700 underline font-medium">
                View Pricing →
              </a>
            </div>
          </div>

          <div className="h-80 lg:h-auto">
            <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* BENEFITS SECTION */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Service Is Important?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Boost brand awareness & visibility",
              "Increase customer engagement & conversions",
              "Enhance online presence with SEO-friendly strategies",
              "Build professional brand trust",
              "Reach targeted customers effectively",
              "Increase long-term revenue & sales"
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <FaStar className="text-yellow-500 text-2xl mb-3" />
                <h3 className="font-semibold text-lg mb-2">{benefit}</h3>
                <p className="text-gray-600">This helps your business grow steadily with strong results.</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Working Process</h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[ 
              { step: "01", title: "Research", text: "We analyze your market & competitors." },
              { step: "02", title: "Planning", text: "We create a complete strategy for success." },
              { step: "03", title: "Execution", text: "We implement ads or campaigns." },
              { step: "04", title: "Optimization", text: "We refine and scale results continuously." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <h1 className="text-4xl font-extrabold text-green-600">{item.step}</h1>
                <h3 className="text-xl font-bold mt-3">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURE SECTIONS */}
        <section className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">What You Get</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ High-performance strategy based on research</li>
              <li>✔ Professional content, design & marketing</li>
              <li>✔ Weekly insights & transparent reporting</li>
              <li>✔ 24/7 chat support & priority assistance</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Who This Is For</h3>
            <p className="text-gray-700">
              Suitable for startups, businesses, influencers, online stores & service providers.
            </p>
          </div>
        </section>

        {/* PRICING TABLE */}
        <section id="pricing" className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Affordable Pricing</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "₹4,999", points: ["Basic support", "Essential features", "Monthly report"] },
              { name: "Professional", price: "₹9,999", points: ["Advanced features", "Weekly reporting", "Priority support"] },
              { name: "Business", price: "₹14,999", points: ["Everything included", "Full support", "Premium consulting"] }
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-4xl font-extrabold text-green-600 my-4">{p.price}</p>

                <ul className="space-y-3 text-gray-600 mb-6">
                  {p.points.map((pt, idx) => (
                    <li key={idx}>✔ {pt}</li>
                  ))}
                </ul>

                <NavLink
                  to="/contact"
                  className="block text-center py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Choose Plan
                </NavLink>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-20 bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Amit Sharma", text: "Axis Media helped us grow our leads by 300% in 60 days!" },
              { name: "Ritika Verma", text: "Excellent creativity and professional support." },
              { name: "Karan Patel", text: "Our SEO ranking improved to Page 1!" }
            ].map((t, i) => (
              <div key={i} className="bg-gray-100 p-8 rounded-xl shadow">
                <FaQuoteLeft className="text-green-600 text-3xl mb-3" />
                <p className="text-gray-700 italic mb-3">"{t.text}"</p>
                <h3 className="font-bold text-lg text-gray-900">{t.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 py-16 text-center bg-green-600 text-white rounded-3xl shadow-xl">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg mb-6">Let's build something powerful for your business.</p>

          <NavLink
            to="/contact"
            className="px-10 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-200 transition"
          >
            Contact Us Now →
          </NavLink>
        </section>

      </div>
    </main>
  );
}
