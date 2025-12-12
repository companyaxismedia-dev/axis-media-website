// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import DigitalMarketing from "./components/DigitalMarketing";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/ContactCTA";
import GoogleAds from "./components/GoogleAds";
import GrowBusiness from "./components/GrowBusiness";
import Packages from "./components/Packages";
import Footer from "./components/Footer";

// PAGES
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import AboutPage from "./pages/AboutPage";
import ContactCTAPage from "./pages/ContactCTAPage";
import GoogleAdsPage from "./pages/GoogleAdsPage";
import PackagesPage from "./pages/PackagesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesGridPage from "./pages/ServicesGridPage";
import GrowBusinessPage from "./pages/GrowBusinessPage";

// DETAIL PAGES
import ServiceDetailPage from "./pages/ServiceDetailPage";
import DigitalMarketingDetailPage from "./pages/DigitalMarketingDetailPage";
import PortfolioDetailPage from "./pages/PortfolioDetailPage";
import GoogleAdsDetailsPage from "./pages/GoogleAdsDetailsPage";

// INDUSTRIES
import IndustriesPage from "./pages/IndustriesPage";
import CategoryPage from "./pages/CategoryPage";
import IndustryDetailPage from "./pages/IndustryDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ServicesGrid />
              <DigitalMarketing />
              <Portfolio />
              <GoogleAds />
              <About />
              <Packages />
              <GrowBusiness />
              <Contact />
            </>
          }
        />

        {/* MAIN PAGES */}
        <Route path="/digital-marketing" element={<DigitalMarketingPage />} />

        {/* ⭐ FIXED — NOW WORKING */}
        <Route path="/services-grid" element={<ServicesGridPage />} />

        {/* DETAIL ROUTES */}
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/digital-marketing/:slug" element={<DigitalMarketingDetailPage />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
        <Route path="/google-ads/:slug" element={<GoogleAdsDetailsPage />} />

        <Route path="/google-ads" element={<GoogleAdsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/contact" element={<ContactCTAPage />} />
        <Route path="/grow-business" element={<GrowBusinessPage />} />

        {/* INDUSTRIES */}
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:category" element={<CategoryPage />} />
        <Route path="/industry/:name" element={<IndustryDetailPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
