import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import DigitalMarketing from "../components/DigitalMarketing";
import AdvertiseBrand from "../components/AdvertiseBrand";

export default function DigitalMarketingPage() {
  return (
    <main className="pt-24 bg-white">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Digital Marketing Company in Delhi | Axis Media Digital
        </title>

        <meta
          name="description"
          content="Axis Media Digital is a leading digital marketing company in Delhi providing SEO, Google Ads, social media marketing and website development services to grow your business."
        />

        <link
          rel="canonical"
          href="https://www.axismediadigital.com/digital-marketing"
        />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What digital marketing services do you provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide SEO, Google Ads, social media marketing, website development and lead generation services."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide digital marketing services in Delhi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Axis Media Digital provides professional digital marketing services to businesses in Delhi and NCR."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ================= PAGE INTRO (VERY IMPORTANT FOR SEO) ================= */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Digital Marketing Services in Delhi
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Axis Media Digital is a trusted{" "}
          <strong>digital marketing company in Delhi</strong> helping
          businesses grow online through SEO, Google Ads, social media
          marketing and high-converting websites. Our data-driven
          digital marketing strategies focus on generating quality leads,
          increasing brand visibility and improving ROI.
        </p>

        <p className="mt-4 text-gray-700">
          We work with startups, local businesses and enterprises across
          multiple industries. Explore our{" "}
          <Link
            to="/industries"
            className="text-emerald-600 font-semibold underline"
          >
            industry-specific digital marketing solutions
          </Link>{" "}
          to see how we help different businesses grow.
        </p>
      </section>

      {/* ================= MAIN COMPONENTS ================= */}
      <DigitalMarketing />
      <AdvertiseBrand />

    </main>
  );
}
