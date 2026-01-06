import React from "react";
import { Helmet } from "react-helmet-async";

export default function DigitalMarketingCompanyDelhi() {
  return (
    <>
      {/* ✅ SEO META */}
      <Helmet>
        <title>
          Digital Marketing Company in Delhi | Axis Media Digital
        </title>

        <meta
          name="description"
          content="Axis Media Digital is a trusted digital marketing company in Delhi offering SEO services, Google Ads, social media marketing and website development for business growth."
        />

        {/* ✅ MOST IMPORTANT FIX (CANONICAL) */}
        <link
          rel="canonical"
          href="https://axismediadigital.com/digital-marketing-company-delhi"
        />
      </Helmet>

      <main className="container mx-auto px-4 py-10 text-gray-800 bg-white">

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Digital Marketing Company in Delhi
        </h1>

        <p className="text-lg mb-6">
          Axis Media Digital is a leading digital marketing company in Delhi
          providing result-driven SEO services, Google Ads management, social
          media marketing and website development for small and growing
          businesses.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Best Digital Marketing Agency in Delhi NCR
        </h2>

        <p className="mb-6">
          We help businesses in Janakpuri, Dwarka, Uttam Nagar, Rohini,
          Noida and Gurugram to grow online visibility, leads and sales
          using proven digital strategies.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Our Digital Marketing Services in Delhi
        </h2>

        <ul className="list-disc pl-6 mb-6">
          <li>SEO Services in Delhi</li>
          <li>Google Ads & PPC Management</li>
          <li>Social Media Marketing</li>
          <li>Website Development & Optimization</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Axis Media Digital?
        </h2>

        <ul className="list-disc pl-6 mb-6">
          <li>Local Delhi market expertise</li>
          <li>Affordable SEO packages</li>
          <li>Transparent reporting</li>
          <li>Dedicated support</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Digital Marketing Services in Delhi NCR
        </h2>

        <p className="mb-6">
          We serve clients across Delhi NCR including Janakpuri,
          Tilak Nagar, Dwarka, Rohini, Noida and Gurugram.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Contact Digital Marketing Company in Delhi
        </h2>

        <p>
          📧 Email: companyaxismedia@gmail.com <br />
          📞 Phone: 9871584001, 9871147666 <br />
          📍 Location: Jaina Tower-2, District Center Janakpuri, Delhi
        </p>

      </main>
    </>
  );
}
