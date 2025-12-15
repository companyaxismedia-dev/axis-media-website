// src/pages/ServiceDetailPage.jsx
import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle, FaStar, FaQuoteLeft } from "react-icons/fa";
import servicesData from "../data/servicesData";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-[#E8FDEB] to-[#CFF5D9]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            Service not found
          </h1>
          <NavLink to="/services" className="text-green-700 underline">
            Back to Services
          </NavLink>
        </div>
      </section>
    );
  }

  /* ================= BREADCRUMB SCHEMA ================= */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://axismediadigital.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://axismediadigital.com/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://axismediadigital.com/services/${service.slug}`,
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-[#E8FDEB] to-[#CFF5D9]">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>{service.title} | Axis Media Digital Services</title>
        <meta
          name="description"
          content={service.details?.slice(0, 160)}
        />
        <link
          rel="canonical"
          href={`https://axismediadigital.com/services/${service.slug}`}
        />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb UI */}
        <p className="text-sm text-gray-700 mb-3">
          <NavLink to="/" className="hover:underline text-gray-900">
            Home
          </NavLink>{" "}
          /{" "}
          <NavLink to="/services" className="hover:underline text-gray-900">
            Services
          </NavLink>{" "}
          / <span className="font-semibold">{service.title}</span>
        </p>

        {/* ================= HERO ================= */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2">
          <div className="p-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {service.title}
            </h1>

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
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* ================= BENEFITS ================= */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Why This Service Is Important?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Boost brand awareness & visibility",
              "Increase customer engagement & conversions",
              "SEO-friendly long-term growth",
              "Professional brand trust",
              "Targeted customer reach",
              "Higher revenue & ROI",
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <FaStar className="text-yellow-500 text-2xl mb-3" />
                <h3 className="font-semibold text-lg mb-2">{benefit}</h3>
                <p className="text-gray-600">
                  Designed to deliver measurable business results.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Our Working Process</h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { step: "01", title: "Research", text: "Market & competitor study" },
              { step: "02", title: "Planning", text: "Strategy & roadmap" },
              { step: "03", title: "Execution", text: "Campaign implementation" },
              { step: "04", title: "Optimization", text: "Scale & improve ROI" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-4xl font-extrabold text-green-600">
                  {item.step}
                </h3>
                <h4 className="text-xl font-bold mt-3">{item.title}</h4>
                <p className="text-gray-600 mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section id="pricing" className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Affordable Pricing</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "₹4,999", points: ["Basic support", "Essential features", "Monthly report"] },
              { name: "Professional", price: "₹9,999", points: ["Advanced features", "Weekly reports", "Priority support"] },
              { name: "Business", price: "₹14,999", points: ["All features", "Full support", "Premium consulting"] },
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-4xl font-extrabold text-green-600 my-4">
                  {p.price}
                </p>

                <ul className="space-y-3 text-gray-600 mb-6">
                  {p.points.map((pt, idx) => (
                    <li key={idx}>✔ {pt}</li>
                  ))}
                </ul>

                <NavLink
                  to="/contact"
                  className="block text-center py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
                >
                  Choose Plan
                </NavLink>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="mt-20 bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Amit Sharma", text: "300% lead growth in 60 days!" },
              { name: "Ritika Verma", text: "Very professional & creative team." },
              { name: "Karan Patel", text: "Page 1 Google ranking achieved." },
            ].map((t, i) => (
              <div key={i} className="bg-gray-100 p-8 rounded-xl shadow">
                <FaQuoteLeft className="text-green-600 text-3xl mb-3" />
                <p className="italic mb-3">"{t.text}"</p>
                <h4 className="font-bold">{t.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="mt-20 py-16 text-center bg-green-600 text-white rounded-3xl shadow-xl">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-6">
            Let’s build something powerful for your business.
          </p>

          <NavLink
            to="/contact"
            className="px-10 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-200"
          >
            Contact Us Now →
          </NavLink>
        </section>
      </div>
    </main>
  );
}
