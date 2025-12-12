// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";

import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import AboutPage from "./pages/AboutPage";
import ContactCTAPage from "./pages/ContactCTAPage";
import GoogleAdsPage from "./pages/GoogleAdsPage";
import PackagesPage from "./pages/PackagesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesGridPage from "./pages/ServicesGridPage";
import GrowBusinessPage from "./pages/GrowBusinessPage";

import ServiceDetailPage from "./pages/ServiceDetailPage";
import DigitalMarketingDetailPage from "./pages/DigitalMarketingDetailPage";
import PortfolioDetailPage from "./pages/PortfolioDetailPage";
import GoogleAdsDetailsPage from "./pages/GoogleAdsDetailsPage";

import IndustriesPage from "./pages/IndustriesPage";
import CategoryPage from "./pages/CategoryPage";
import IndustryDetailPage from "./pages/IndustryDetailPage";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* ✅ HOMEPAGE ROUTE */}
        <Route path="/" element={<HomePage />} />

        {/* Static Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

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

      <Footer />
    </BrowserRouter>
  );
}

export default App;
