import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

export default function DigitalMarketingCompanyDelhi() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
      <Helmet>
        <title>Digital Marketing Company in Delhi | Axis Media Digital</title>

        <meta
          name="description"
          content="Axis Media Digital is a trusted digital marketing company in Delhi offering SEO, Google Ads, social media marketing and website development services to grow your business."
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/digital-marketing-company-delhi"
        />

        {/* ✅ FAQ SCHEMA (ERROR FREE) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best digital marketing company in Delhi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Axis Media Digital is one of the best digital marketing companies in Delhi providing result-driven SEO, Google Ads, and website development services."
                }
              },
              {
                "@type": "Question",
                "name": "What services does Axis Media Digital provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Axis Media Digital offers SEO services, Google Ads management, social media marketing, website development, and branding solutions."
                }
              },
              {
                "@type": "Question",
                "name": "How much does digital marketing cost in Delhi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Digital marketing cost depends on business goals and services. Axis Media Digital provides affordable digital marketing packages for startups and businesses."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <main className="max-w-6xl mx-auto px-5 pt-32 pb-16 bg-white text-gray-800">
        
        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Digital Marketing Company in Delhi
        </h1>

        <p className="text-lg leading-relaxed mb-10">
          <strong>Axis Media Digital</strong> is a result-driven digital marketing
          company in Delhi helping businesses generate quality leads, increase
          website traffic, and grow revenue through powerful online marketing
          strategies.
        </p>

        {/* SERVICES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Our Digital Marketing Services in Delhi
          </h2>

          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" />
              SEO Services in Delhi
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" />
              Google Ads & PPC Management
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" />
              Social Media Marketing
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" />
              Website Development Services
            </li>
          </ul>
        </section>

        {/* WHY US */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Axis Media Digital?
          </h2>

          <ul className="space-y-3 text-lg">
            <li>✔ Delhi-based local market expertise</li>
            <li>✔ SEO & Google Ads focused strategies</li>
            <li>✔ Transparent reporting & real results</li>
            <li>✔ Affordable digital marketing packages</li>
          </ul>
        </section>

        {/* CONTACT */}
        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Contact Digital Marketing Experts in Delhi
          </h2>

          <div className="space-y-3 text-lg">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-600" />
              Jaina Tower-2, District Center, Janak Puri, Delhi
            </p>

            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" />
              <a href="tel:+919871584001">9871584001</a>,{" "}
              <a href="tel:+919871147666">9871147666</a>
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:companyaxismedia@gmail.com">
                companyaxismedia@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );  
}

