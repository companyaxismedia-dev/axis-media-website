import React from "react";
import { Helmet } from "react-helmet-async";
import ContactCTA from "../components/ContactCTA";
import GoogleFormEmbed from "../components/GoogleFormEmbed";

export default function ContactCTAPage() {
  const pageTitle =
    "Book Free Digital Marketing Audit | Axis Media";
  const pageDescription =
    "Get 10–50 qualified orders in the next 30 days with Axis Media. Book a free digital marketing audit for SEO, Google Ads, website development and social media growth.";
  const canonicalUrl = "https://axismediadigital.com/contact";
  const ogImage = "https://axismediadigital.com/logo.png";

  return (
    <>
  <Helmet>
    <title>{pageTitle}</title>

    <meta name="description" content={pageDescription} />
    <meta
      name="keywords"
      content="digital marketing agency, free marketing audit, SEO services, Google Ads, website development, social media marketing, Axis Media"
    />
    <meta name="robots" content="index, follow" />

    <link rel="canonical" href={canonicalUrl} />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:site_name" content="Axis Media" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
    <meta name="twitter:image" content={ogImage} />
  </Helmet>

  <main className="pt-[110px] md:pt-[120px]">
    {/* QUICK CONTACT / CTA */}
    <ContactCTA />

    {/* DETAILED GOOGLE FORM */}
    <GoogleFormEmbed />
  </main>
</>
  );
}