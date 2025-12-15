import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "../components/ContactCTA";

export default function ContactCTAPage() {
  return (
    <div className="pt-24 bg-[#073762] text-white min-h-screen">

      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>Contact Axis Media | Digital Marketing & Web Development Agency</title>

        <meta
          name="description"
          content="Contact Axis Media for website development, SEO, Google Ads and digital marketing services. Get a free consultation today."
        />

        <meta
          name="keywords"
          content="Contact Axis Media, digital marketing agency contact, website development company India, SEO agency contact"
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/contact"
        />
      </Helmet>

      {/* ================= CONTACT FORM ================= */}
      <Contact />

      {/* ================= EXTRA INFO SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Get in Touch
        </h1>

        <p className="text-center mb-12 max-w-3xl mx-auto text-white/80 text-lg">
          Reach out to Axis Media for website development, SEO, Google Ads or
          complete digital marketing solutions. Our team responds quickly to
          help grow your business.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* ADDRESS */}
          <div className="bg-white/10 rounded-xl p-8 border border-white/10 shadow-lg">
            <h3 className="font-semibold text-xl mb-2">
              Office Address
            </h3>
            <p className="text-white/90 leading-relaxed">
              Axis Media <br />
              Delhi NCR, India
            </p>
          </div>

          {/* CONTACT DETAILS */}
          <div className="bg-white/10 rounded-xl p-8 border border-white/10 shadow-lg">
            <h3 className="font-semibold text-xl mb-2">
              Contact Details
            </h3>

            <p className="text-white/90 leading-relaxed">
              Email:{" "}
              <a
                href="mailto:companyaxismedia@gmail.com"
                className="underline hover:text-white"
              >
                companyaxismedia@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+919871584001"
                className="underline hover:text-white"
              >
                +91 98715 84001
              </a>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
