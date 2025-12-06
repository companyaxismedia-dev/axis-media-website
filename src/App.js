import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/ContactCTA";
import DigitalMarketing from "./components/DigitalMarketing";
import Packages from "./components/Packages";
import Footer from "./components/Footer";
import GoogleAds from "./components/GoogleAds";
import GrowBusiness from "./components/GrowBusiness";

// Pages
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import AboutPage from "./pages/AboutPage";
import ContactCTAPage from "./pages/ContactCTAPage";
import GoogleAdsPage from "./pages/GoogleAdsPage";
import PackagesPage from "./pages/PackagesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesGridPage from "./pages/ServicesGridPage";
import GrowBusinessPage from "./pages/GrowBusinessPage";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
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

        {/* OTHER PAGES */}
        <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services" element={<ServicesGridPage />} />
        <Route path="/google-ads" element={<GoogleAdsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/contact" element={<ContactCTAPage />} />

        {/* NEW PAGE */}
        <Route path="/grow-business" element={<GrowBusinessPage />} />
      </Routes>

      <Footer />

      <div className="text-center py-4">
        <h1 className="text-xl font-bold">MERN Stack Connected</h1>
        <p>{data}</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
