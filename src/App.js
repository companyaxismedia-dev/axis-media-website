// src/App.js
import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* =======================
   🔄 SCROLL TO TOP
======================= */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

/* =======================
   🔥 LAZY LOADED PAGES
======================= */

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
const SeoServicesPage = lazy(() => import("./pages/SeoServicesPage"));
const BrandingPage = lazy(() => import("./pages/BrandingPage"));

// ✅ SEO POWER PAGE (NEW)
const DigitalMarketingCompanyDelhi = lazy(() =>
  import("./pages/DigitalMarketingCompanyDelhi")
);

// Detail pages
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const DigitalMarketingDetailPage = lazy(() =>
  import("./pages/DigitalMarketingDetailPage")
);
const PortfolioDetailPage = lazy(() =>
  import("./pages/PortfolioDetailPage")
);
const GoogleAdsDetailsPage = lazy(() =>
  import("./pages/GoogleAdsDetailsPage")
);

// Industries
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const IndustryDetailPage = lazy(() =>
  import("./pages/IndustryDetailPage")
);

// Auth pages
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const ForgotPasswordPage = lazy(() =>
  import("./pages/ForgotPasswordPage")
);
const ResetPasswordPage = lazy(() =>
  import("./pages/ResetPasswordPage")
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Suspense
          fallback={
            <div className="min-h-[70vh] flex items-center justify-center">
              <span className="text-xl font-semibold animate-pulse">
                Loading…
              </span>
            </div>
          }
        >
          <Routes>
            {/* HOME */}
            <Route path="/" element={<HomePage />} />

            {/* AUTH */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            {/* MAIN */}
            <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/seo-services" element={<SeoServicesPage />} />
            <Route path="/services/branding" element={<BrandingPage />} />

            {/* ✅ POWER SEO ROUTE */}
            <Route
              path="/digital-marketing-company-in-delhi"
              element={<DigitalMarketingCompanyDelhi />}
            />

            {/* SERVICES GRID */}
            <Route path="/services" element={<ServicesGridPage />} />
            <Route path="/services-grid" element={<ServicesGridPage />} />

            <Route path="/google-ads" element={<GoogleAdsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/contact" element={<ContactCTAPage />} />
            <Route path="/grow-business" element={<GrowBusinessPage />} />

            {/* SEO SAFE REDIRECT */}
            <Route
              path="/branding"
              element={<Navigate to="/services/branding" replace />}
            />

            {/* DETAIL */}
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route
              path="/digital-marketing/:slug"
              element={<DigitalMarketingDetailPage />}
            />
            <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
            <Route path="/google-ads/:slug" element={<GoogleAdsDetailsPage />} />

            {/* INDUSTRIES */}
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/:category" element={<CategoryPage />} />
            <Route path="/industry/:name" element={<IndustryDetailPage />} />

            {/* 404 */}
            <Route
              path="*"
              element={
                <div className="min-h-[60vh] flex items-center justify-center text-2xl font-bold">
                  Page Not Found
                </div>
              }
            />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
