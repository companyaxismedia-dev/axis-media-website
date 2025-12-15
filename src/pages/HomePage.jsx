import React from "react";
import { Helmet } from "react-helmet-async";

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
  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Axis Media | Digital Marketing, SEO, Google Ads & Website Development
        </title>

        <meta
          name="description"
          content="Axis Media is a leading digital marketing agency providing SEO, Google Ads, website development and complete business growth solutions."
        />

        <link rel="canonical" href="https://axismediadigital.com/" />

        {/* FAQ SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you provide complete digital marketing services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes, Axis Media provides SEO, Google Ads, social media marketing and website development."
                }
              },
              {
                "@type": "Question",
                "name": "How fast can I get leads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Google Ads can generate leads within days, while SEO shows results in 30–60 days."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <main id="home">

        {/* HERO */}
        <Hero />

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
