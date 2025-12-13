// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* 🔥 LAZY LOAD PAGES */

// Core pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactCTAPage = lazy(() => import("./pages/ContactCTAPage"));
const PackagesPage = lazy(() => import("./pages/PackagesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ServicesGridPage = lazy(() => import("./pages/ServicesGridPage"));
const GrowBusinessPage = lazy(() => import("./pages/GrowBusinessPage"));

// Marketing pages
const DigitalMarketingPage = lazy(() => import("./pages/DigitalMarketingPage"));
const GoogleAdsPage = lazy(() => import("./pages/GoogleAdsPage"));

// Detail pages
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const DigitalMarketingDetailPage = lazy(() => import("./pages/DigitalMarketingDetailPage"));
const PortfolioDetailPage = lazy(() => import("./pages/PortfolioDetailPage"));
const GoogleAdsDetailsPage = lazy(() => import("./pages/GoogleAdsDetailsPage"));

// Industries
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const IndustryDetailPage = lazy(() => import("./pages/IndustryDetailPage"));

// Auth pages
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* 🔥 Suspense Wrapper */}
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center text-lg">
            Loading...
          </div>
        }
      >
        <Routes>

          {/* Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* Main Pages */}
          <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services-grid" element={<ServicesGridPage />} />
          <Route path="/google-ads" element={<GoogleAdsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactCTAPage />} />
          <Route path="/grow-business" element={<GrowBusinessPage />} />

          {/* Detail Pages */}
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/digital-marketing/:slug" element={<DigitalMarketingDetailPage />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
          <Route path="/google-ads/:slug" element={<GoogleAdsDetailsPage />} />

          {/* Industries */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:category" element={<CategoryPage />} />
          <Route path="/industry/:name" element={<IndustryDetailPage />} />

        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
