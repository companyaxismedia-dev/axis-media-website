import React from "react";
import { Helmet } from "react-helmet-async";
import DigitalMarketing from "../components/DigitalMarketing";

export default function DigitalMarketingPage() {
  return (
    <main className="pt-24 bg-white">

      {/* SEO */}
      <Helmet>
        <title>Digital Marketing Services in India | Axis Media</title>
        <meta
          name="description"
          content="Axis Media provides professional digital marketing services including SEO, social media marketing, Google Ads, and email marketing to grow your business."
        />
        <link
          rel="canonical"
          href="https://axismediadigital.com/digital-marketing"
        />
      </Helmet>

      {/* PAGE CONTENT */}
      <DigitalMarketing />

    </main>
  );
}
