import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import axisLogo from "../assets/AxisMedia.png";

export default function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden"
      role="contentinfo"
      aria-label="Axis Media Footer"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#041A3A] via-[#072B55] to-[#0B3F8F]" />
      <div className="absolute -top-20 -right-20 w-[420px] h-[420px] bg-sky-400/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 -left-20 w-[380px] h-[380px] bg-indigo-500/20 blur-[200px] rounded-full" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 pt-16 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">

          {/* ================= BRAND ================= */}
          
<div className="max-w-sm">
  <NavLink
    to="/"
    aria-label="Axis Media Digital Marketing Agency Home"
    className="inline-flex items-center gap-3"
  >
    <div className="flex items-center justify-start">
      <img
        src={axisLogo}
        alt="Axis Media Digital Marketing Agency Logo"
        loading="lazy"
        className="h-[150px] w-auto object-contain opacity-90"
      />
    </div>
  </NavLink>

  <p className="text-gray-200 mt-5 leading-relaxed text-[15px]">
    <strong>Axis Media</strong> is a leading
    <strong> digital marketing agency in Delhi NCR</strong>,
    delivering professional SEO services, Google Ads management,
    website development, e-commerce solutions and performance-driven
    online marketing strategies for businesses of all sizes.
  </p>
</div>


          {/* ================= SERVICES ================= */}
          <nav aria-label="Footer Services">
            <h4 className="text-lg font-semibold mb-4 text-blue-200">
              Digital Services
            </h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li><NavLink to="/digital-marketing">Digital Marketing Services</NavLink></li>

              {/* 🔥 SEO POWER LINK */}
              <li>
                <NavLink
                  to="/digital-marketing-company-in-delhi"
                  className="font-semibold text-sky-300 hover:text-white"
                >
                  Digital Marketing Company in Delhi
                </NavLink>
              </li>

              <li><NavLink to="/website-development">Website Development Services</NavLink></li>
              <li><NavLink to="/seo">Professional SEO Services</NavLink></li>
              <li><NavLink to="/google-ads">Google Ads Management</NavLink></li>
              <li><NavLink to="/contact">Free Consultation</NavLink></li>
            </ul>
          </nav>

          {/* ================= BUSINESS ================= */}
          <nav aria-label="Business Solutions">
            <h4 className="text-lg font-semibold mb-4 text-blue-200">
              Business Solutions
            </h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li><NavLink to="/grow-business">Grow Your Business</NavLink></li>
              <li><NavLink to="/industries">Industries We Serve</NavLink></li>
              <li><NavLink to="/portfolio">Our Portfolio</NavLink></li>
              <li><NavLink to="/packages">Affordable Packages</NavLink></li>
              <li><NavLink to="/about">About Axis Media</NavLink></li>
            </ul>
          </nav>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-200">
              Contact Axis Media
            </h4>

            {/* ✅ UPDATED ADDRESS */}
            <p className="text-gray-200 text-sm">
              <strong>Axis Media</strong><br />
              Digital Marketing Agency<br />
              Delhi NCR, India<br />
              Working Location: Office No. 820, Jaina Tower-2,
              District Center Janak Puri, Delhi – 110058
            </p>

            <a
              href="mailto:companyaxismedia@gmail.com"
              className="block mt-2 text-gray-200 hover:text-white text-sm"
            >
              companyaxismedia@gmail.com
            </a>
            <a
              href="mailto:axismediainbox@gmail.com"
              className="block mt-2 text-gray-200 hover:text-white text-sm"
            >
              info@axismediadigital.com
            </a>

            {/* ✅ UPDATED PHONE NUMBERS */}
            <a
              href="tel:+919871584001"
              className="block mt-1 text-gray-200 hover:text-white text-sm"
            >
              +91 9871584001
            </a>
            <a
              href="tel:+919871147666"
              className="block mt-1 text-gray-200 hover:text-white text-sm"
            >
              +91 9871147666
            </a>

            <div className="flex gap-4 mt-6 text-xl">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/axismedia123" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61584611262239" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-white/20">
          <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm">

            {/* 🔥 SEO LINK */}
            <NavLink
              to="/digital-marketing-company-in-delhi"
              className="font-semibold text-sky-300 hover:text-white"
            >
              Digital Marketing Company in Delhi
            </NavLink>

            <NavLink to="/sitemap">HTML Sitemap</NavLink>
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms of Use</NavLink>
            <NavLink to="/accessibility">Accessibility</NavLink>
          </div>

          <p className="text-center text-gray-300 mt-4 text-sm">
            © {new Date().getFullYear()} <strong>Axis Media</strong>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
