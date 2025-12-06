import React from "react";
import Hero from "../components/Hero";
import Services from "../components/ServicesGrid";
import GoogleAds from "../components/GoogleAds";
import DigitalMarketing from "../components/DigitalMarketing";
import WebsiteDev from "../components/WebsiteDev";
import Portfolio from "../components/Portfolio";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/ContactCTA";
import Testimonials from "../components/Testimonials";
import CaseBanners from "../components/CaseBanners";
import FeaturesList from "../components/FeaturesList";
import HeaderTop from "../components/HeaderTop";
import Packages from "../components/Packages";
export default function HomePage() {
  return (
     <section id="home" className="py-16">
    <div>
      <HeaderTop />
      <Hero />
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Services />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <GoogleAds />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Packages />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <DigitalMarketing />
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <FeaturesList />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <WebsiteDev />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <CaseBanners />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <WhyChooseUs />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Portfolio />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <Contact />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <Testimonials />
        </div>
      </section>
    </div>
    </section>
  );
}
