import React from "react";
import { Helmet } from "react-helmet-async";
import Packages from "../components/Packages";

export default function PackagesPage() {
  return (
    <main className="bg-white">

      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Affordable Website & Digital Marketing Packages | Axis Media</title>

        <meta
          name="description"
          content="Explore affordable website development, SEO, Google Ads and digital marketing packages by Axis Media. Flexible plans for startups, SMEs and enterprises."
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/packages"
        />
      </Helmet>

      {/* ================= PACKAGES COMPONENT ================= */}
      {/* No extra padding so design stays intact */}
      <section className="pt-0">
        <Packages />
      </section>

      {/* ================= EXTRA CONTENT FOR SEO ================= */}
      <section className="container mx-auto px-6 py-16 text-gray-900">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Our Packages
        </h1>

        <p className="text-center mb-10 max-w-3xl mx-auto text-lg text-gray-600">
          Flexible packages designed for startups, SMEs and growing enterprises.
          Whether you need a high-converting website, SEO ranking, or lead-driven
          Google Ads — we have a plan that fits your business goals.
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-gray-700">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Why choose Axis Media packages?
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Transparent pricing — no hidden costs</li>
              <li>SEO & performance-optimized solutions</li>
              <li>Monthly support & reporting</li>
              <li>Scalable plans as your business grows</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Who are these packages for?
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Startups launching online</li>
              <li>Local businesses needing leads</li>
              <li>E-commerce brands scaling sales</li>
              <li>Companies upgrading digital presence</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
