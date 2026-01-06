import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

/* COMPONENTS */
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import HomeBenefitsSection from "../components/HomeBenefitsSection";
import CMSDevelopmentSection from "../components/CMSDevelopmentSection";
import GoogleAds from "../components/GoogleAds";
import Packages from "../components/Packages";
import DigitalMarketing from "../components/DigitalMarketing";
import FeaturesList from "../components/FeaturesList";
import WebsiteDev from "../components/WebsiteDev";
import CaseBanners from "../components/CaseBanners";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import Contact from "../components/ContactCTA";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  const siteUrl = "https://axismediadigital.com/";

  /* ================= ORGANIZATION SCHEMA ================= */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Axis Media",
    url: siteUrl,
    logo: `${siteUrl}logo.png`,
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
    ],
    description:
      "Axis Media is a digital marketing agency providing SEO, Google Ads, website development and complete online growth solutions.",
  };

  /* ================= SERVICE SCHEMA ================= */
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "Service", name: "Digital Marketing Services" },
      { "@type": "Service", name: "SEO Services" },
      { "@type": "Service", name: "Google Ads Management" },
      { "@type": "Service", name: "Website Development Services" },
    ],
  };

  /* ================= FAQ SCHEMA ================= */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide complete digital marketing services?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Axis Media provides SEO, Google Ads, social media marketing and website development services.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can I get leads?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Google Ads can generate leads within days, while SEO usually shows results in 30–60 days.",
        },
      },
    ],
  };

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Axis Media | Digital Marketing, SEO, Google Ads & Website Development
        </title>

        <meta
          name="description"
          content="Axis Media is a leading digital marketing agency offering SEO services, Google Ads management, website development and complete business growth solutions."
        />

        <link rel="canonical" href={siteUrl} />

        {/* SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <main id="home">
        {/* SEO SAFE H1 (for Google only) */}
        <h1 className="sr-only">
          Digital Marketing Agency in India | SEO, Google Ads & Website Development
        </h1>

        {/* HERO */}
        <Hero />

        {/* 🔥 SEO INTERNAL LINK SECTION (NEW – VERY IMPORTANT) */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6 text-center">
            <p className="text-lg text-gray-700">
              Looking for a trusted{" "}
              <NavLink
                to="/digital-marketing-company-in-delhi"
                className="text-sky-600 font-semibold underline hover:text-sky-700"
              >
                Digital Marketing Company in Delhi
              </NavLink>
              ? Axis Media Digital helps businesses grow with SEO, Google Ads,
              social media marketing, and website development.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <ServicesGrid />
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <HomeBenefitsSection />
          </div>
        </section>

        {/* CMS DEVELOPMENT */}
        <section className="py-16 bg-[#F3F7FF]">
          <div className="container mx-auto px-6">
            <CMSDevelopmentSection />
          </div>
        </section>

        {/* GOOGLE ADS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <GoogleAds />
          </div>
        </section>

        {/* PACKAGES */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <Packages />
          </div>
        </section>

        {/* DIGITAL MARKETING */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <DigitalMarketing />
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <FeaturesList />
          </div>
        </section>

        {/* WEBSITE DEVELOPMENT */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <WebsiteDev />
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <CaseBanners />
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <WhyChooseUs />
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <Portfolio />
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <Contact />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <Testimonials />
          </div>
        </section>
      </main>
    </>
  );
}
