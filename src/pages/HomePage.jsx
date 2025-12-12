// src/pages/HomePage.jsx
import React from "react";


import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import GoogleAds from "../components/GoogleAds";
import DigitalMarketing from "../components/DigitalMarketing";
import WebsiteDev from "../components/WebsiteDev";
import Portfolio from "../components/Portfolio";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/ContactCTA";
import Testimonials from "../components/Testimonials";
import CaseBanners from "../components/CaseBanners";
import FeaturesList from "../components/FeaturesList";
import Packages from "../components/Packages";

// ⭐ Your new sections
import HomeBenefitsSection from "../components/HomeBenefitsSection";
import CMSDevelopmentSection from "../components/CMSDevelopmentSection";

export default function HomePage() {
  return (
    <section id="home" className="py-0">
     
      <Hero />

      {/* SERVICES */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ServicesGrid />
        </div>
      </section>

      {/* ⭐ HOME BENEFITS SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <HomeBenefitsSection />
        </div>
      </section>

      {/* ⭐ CMS DEVELOPMENT SECTION */}
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
        <div className="container">
          <FeaturesList />
        </div>
      </section>

      {/* WEBSITE DEV */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <WebsiteDev />
        </div>
      </section>

      {/* CASE BANNERS */}
      <section className="py-16 bg-white">
        <div className="container">
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
        <div className="container">
          <Testimonials />
        </div>
      </section>

    </section>
  );
}
