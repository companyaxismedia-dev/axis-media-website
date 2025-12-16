import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle } from "react-icons/fa";
import dmServicesData from "../data/dmServicesData";

export default function DigitalMarketingDetailPage() {
  const { slug } = useParams();
  const service = dmServicesData.find((s) => s.slug === slug);

  if (!service) {
    return <div className="pt-40 text-center text-2xl">Service Not Found</div>;
  }

  const { intro, benefits, features, faqs } = service.longContent;

  return (
    <section className="pt-28 pb-20 bg-white">
      <Helmet>
        <title>{service.title} | Axis Media</title>
        <meta name="description" content={intro} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6">
        <img
          src={service.heroImage}
          alt={service.title}
          className="rounded-3xl mb-10"
        />

        <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
        <p className="text-gray-700 mb-10">{intro}</p>

        <h2 className="text-2xl font-bold mb-4">Benefits</h2>
        <ul className="space-y-3 mb-10">
          {benefits.map((b, i) => (
            <li key={i} className="flex gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              {b}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((f, i) => (
            <div key={i} className="p-5 bg-gray-50 rounded-xl">
              {f}
            </div>
          ))}
        </div>

        {faqs && (
          <>
            <h2 className="text-2xl font-bold mb-4">FAQs</h2>
            {faqs.map((faq, i) => (
              <details key={i} className="mb-4">
                <summary className="font-semibold">{faq.q}</summary>
                <p className="mt-2">{faq.a}</p>
              </details>
            ))}
          </>
        )}

        <NavLink
          to="/contact"
          className="inline-block mt-10 px-8 py-3 bg-blue-600 text-white rounded-xl"
        >
          Get Free Consultation
        </NavLink>
      </div>
    </section>
  );
}
