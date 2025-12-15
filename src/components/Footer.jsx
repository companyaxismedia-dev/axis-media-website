import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import axisLogo from "../assets/axisLogo.jpeg";

export default function Footer() {
  return (
    <footer
      className="text-white relative overflow-hidden"
      role="contentinfo"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#041A3A] via-[#082F62] to-[#0F3B8F]"></div>
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-blue-500/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-purple-500/20 blur-[200px] rounded-full"></div>

      <div className="relative pt-16 pb-10 px-6 z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

          {/* LOGO + ABOUT */}
          <div className="max-w-sm">
            <NavLink to="/" aria-label="Axis Media Home">
              <div className="bg-white/90 p-4 w-32 h-32 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-lg">
                <img
                  src={axisLogo}
                  alt="Axis Media Digital Marketing Agency Logo"
                  width="120"
                  height="120"
                  loading="lazy"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </NavLink>

            <p className="text-gray-200 mt-5 leading-relaxed text-[15px]">
              Axis Media is a digital marketing and website development agency
              helping businesses grow online with SEO, Google Ads, web design,
              and performance-driven marketing strategies.
            </p>
          </div>

          {/* FOR BUSINESSES */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-200">
              For Businesses
            </h4>
            <ul className="space-y-2 text-gray-200">
              <li><NavLink to="/digital-marketing">Digital Marketing Services</NavLink></li>
              <li><NavLink to="/website-development">Website Solutions</NavLink></li>
              <li><NavLink to="/seo">SEO Strategy</NavLink></li>
              <li><NavLink to="/contact">FAQs & Consultation</NavLink></li>
            </ul>
          </div>

          {/* FOR AGENCIES */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-200">
              For Agencies
            </h4>
            <ul className="space-y-2 text-gray-200">
              <li><NavLink to="/partner">Partner With Us</NavLink></li>
              <li><NavLink to="/contact">Submit Your Agency</NavLink></li>
              <li><NavLink to="/about">Sponsorships</NavLink></li>
              <li><NavLink to="/portfolio">All Agencies</NavLink></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-200">
              Get in Touch
            </h4>

            <p className="text-gray-200">Delhi NCR, India</p>
            <a
              href="mailto:companyaxismedia@gmail.com"
              className="block text-gray-200 mt-1 hover:text-white"
            >
              companyaxismedia@gmail.com
            </a>
            <a
              href="tel:+919871584001"
              className="block text-gray-200 mt-1 hover:text-white"
            >
              +91 9871584001
            </a>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6 text-xl">
              <a href="https://www.linkedin.com" aria-label="Axis Media LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/axismedia123" aria-label="Axis Media Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61584611262239" aria-label="Axis Media Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" aria-label="Axis Media Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com" aria-label="Axis Media YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="max-w-7xl mx-auto pt-10">
          <div className="border-t border-white/20 pt-6 flex flex-wrap justify-center gap-6 text-gray-300 text-sm">
            <NavLink to="/sitemap">Sitemap</NavLink>
            <NavLink to="/terms">Terms of Use</NavLink>
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/accessibility">Accessibility</NavLink>
            <NavLink to="/fraud-protection">Fraud Protection</NavLink>
          </div>

          <p className="text-center text-gray-300 mt-4 text-sm">
            © {new Date().getFullYear()} Axis Media. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
