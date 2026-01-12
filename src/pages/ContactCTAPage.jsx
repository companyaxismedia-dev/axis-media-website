import React from "react";
import { Helmet } from "react-helmet-async";
import ContactCTA from "../components/ContactCTA";
import GoogleFormEmbed from "../components/GoogleFormEmbed";

export default function ContactCTAPage() {
  return (
    <>
      <Helmet>
        <title>Contact Axis Media | Digital Marketing Agency</title>
        <meta
          name="description"
          content="Contact Axis Media for SEO, website development and digital marketing services."
        />
        <link
          rel="canonical"
          href="https://axismediadigital.com/contact"
        />
      </Helmet>

      {/* QUICK CONTACT */}
      <ContactCTA />

      {/* DETAILED GOOGLE FORM */}
      <GoogleFormEmbed />
    </>
  );
}
