import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

/* COMPONENTS */
import Hero from "../components/Hero";
import HomeVisibilitySection from "../components/HomeVisibilitySection";
import ServicesGrid from "../components/ServicesGrid";
import HomeBenefitsSection from "../components/HomeBenefitsSection";
import HomeCaseStudySection from "../components/HomeCaseStudySection";
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

  const whatsappNumber = "919334966286"; // yahan apna WhatsApp number dalo, country code ke saath
  const whatsappMessage = "Hello Axis Media, mujhe aapki services ke baare me jankari chahiye.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
        <section className="py-10 bg-gradient-to-r from-[#eef2ff] to-[#f8fafc] border-y border-[#e6ecf5]">
          <div className="max-w-5xl mx-auto px-6 text-center">

            {/* HEADING */}
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#1e293b] mb-3">
              Looking for a trusted Digital Marketing Company in Delhi?
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[14px] md:text-[15px] text-gray-600 mb-5">
              Axis Media helps businesses grow with SEO, Google Ads, social media marketing, and website development.
            </p>

            {/* CTA BUTTON */}
            <div className="flex justify-center gap-4 flex-wrap">
              <NavLink
                to="/contact"
                className="bg-[#6D28D9] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#5B21B6] transition shadow-md"
              >
                Get Free Consultation
              </NavLink>

              <NavLink
                to="/digital-marketing-company-in-delhi"
                className="border border-[#6D28D9] text-[#6D28D9] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#6D28D9] hover:text-white transition"
              >
                Learn More
              </NavLink>
            </div>

            {/* TRUST BADGE */}
            <div className="mt-5 text-sm text-gray-500">
              ⭐ Trusted by 50+ Businesses | 🚀 Proven SEO Results
            </div>

          </div>
        </section>
        {/* VISIBILITY SECTION */}
        <HomeVisibilitySection />
        <HomeCaseStudySection />

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


      {/* WHATSAPP FLOATING BUTTON */}
      <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 group">
        {/* TEXT BUBBLE */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center bg-green-500 text-white px-5 py-3 rounded-full shadow-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300"
        >
          Chat on WhatsApp
        </a>

        {/* ROUND ICON */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-2xl hover:bg-green-600 transition-all duration-300"
        >
          {/* PULSE RING */}
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping"></span>

          {/* ICON */}
          <span className="relative z-10 flex items-center justify-center">
            <FaWhatsapp className="text-white text-3xl" />
          </span>
        </a>
      </div>
    </>
  );
}
