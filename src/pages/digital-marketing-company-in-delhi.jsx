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
          content="Axis Media Digital is a leading digital marketing company in Delhi providing SEO, Google Ads, social media marketing, and website development services to help businesses grow online."
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/digital-marketing-company-in-delhi"
        />

        {/* ✅ FAQ SCHEMA */}
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
                    "Axis Media Digital is one of the best digital marketing companies in Delhi offering result-driven SEO, Google Ads, and complete digital growth solutions."
                }
              },
              {
                "@type": "Question",
                "name": "What services does Axis Media Digital provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Axis Media Digital provides SEO services, Google Ads management, social media marketing, website development, branding, and performance marketing services."
                }
              },
              {
                "@type": "Question",
                "name": "How much does digital marketing cost in Delhi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Digital marketing costs in Delhi depend on business goals and competition. Axis Media Digital offers affordable and customized digital marketing packages."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <main className="max-w-6xl mx-auto px-5 pt-32 pb-16 bg-white text-gray-800">

        {/* ================= H1 ================= */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Digital Marketing Company in Delhi
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          <strong>Axis Media Digital</strong> is a professional and
          result-oriented <strong>digital marketing company in Delhi</strong>
          helping businesses build strong online visibility, generate high-quality
          leads, and increase sales through powerful digital strategies.
        </p>

        <p className="text-lg leading-relaxed mb-12">
          In today’s competitive digital world, having an online presence is not
          enough. Businesses need a strategic digital marketing partner that
          understands search engine algorithms, paid advertising platforms,
          social media trends, and user behavior. Axis Media Digital combines
          data-driven planning with creative execution to deliver measurable
          results for startups, small businesses, and enterprises across Delhi NCR.
        </p>

        {/* ================= SERVICES ================= */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Our Digital Marketing Services in Delhi
          </h2>

          <p className="text-lg mb-6">
            As a full-service digital marketing agency in Delhi, we provide
            end-to-end online marketing solutions designed to maximize ROI and
            long-term business growth.
          </p>

          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 mt-1" />
              <span>
                <strong>SEO Services in Delhi:</strong> Improve your Google
                rankings, organic traffic, and local visibility with ethical
                and white-hat SEO techniques.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 mt-1" />
              <span>
                <strong>Google Ads & PPC Management:</strong> High-converting
                Google Search Ads, Display Ads, and YouTube Ads to generate
                instant leads and sales.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 mt-1" />
              <span>
                <strong>Social Media Marketing:</strong> Brand awareness,
                engagement, and lead generation through Facebook, Instagram,
                and LinkedIn marketing.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 mt-1" />
              <span>
                <strong>Website Development Services:</strong> Fast, responsive,
                SEO-friendly websites designed to convert visitors into customers.
              </span>
            </li>
          </ul>
        </section>

        {/* ================= WHY US ================= */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Axis Media Digital as Your Digital Marketing Partner?
          </h2>

          <p className="text-lg mb-6">
            Choosing the right digital marketing agency in Delhi can make a huge
            difference in your business growth. Axis Media Digital focuses on
            performance, transparency, and long-term success.
          </p>

          <ul className="space-y-3 text-lg">
            <li>✔ Deep understanding of Delhi local market & competition</li>
            <li>✔ Customized SEO & paid advertising strategies</li>
            <li>✔ Transparent reporting and clear performance metrics</li>
            <li>✔ Affordable digital marketing packages for all businesses</li>
            <li>✔ Dedicated support and growth-focused approach</li>
          </ul>
        </section>

        {/* ================= LOCAL SEO ================= */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Local SEO & Business Growth in Delhi
          </h2>

          <p className="text-lg leading-relaxed mb-4">
            Local SEO plays a critical role for businesses targeting customers
            in Delhi NCR. Our local SEO strategies help your business appear in
            Google Maps, local search results, and location-based queries.
          </p>

          <p className="text-lg leading-relaxed">
            We optimize Google Business Profile, local keywords, citations,
            reviews, and location pages to ensure your business ranks for
            searches like <em>“digital marketing company near me”</em> and
            <em>“best digital marketing agency in Delhi”</em>.
          </p>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="border-t pt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Contact Digital Marketing Experts in Delhi
          </h2>

          <p className="text-lg mb-6">
            Ready to grow your business online? Contact Axis Media Digital today
            for a free digital marketing consultation and customized strategy.
          </p>

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
