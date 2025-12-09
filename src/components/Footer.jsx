import React from "react";
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
    <footer className="text-white relative overflow-hidden">

      {/* 🔥 BACKGROUND WITH GRADIENT + GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#041A3A] via-[#082F62] to-[#0F3B8F]"></div>
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-blue-500/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-purple-500/20 blur-[200px] rounded-full"></div>

      <div className="relative pt-16 pb-10 px-6 z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

          {/* 🔵 LOGO + ABOUT */}
          <div className="max-w-sm">

            {/* GLASS LOGO BOX */}
            <div className="bg-white/90 p-4 w-32 h-32 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-lg">
              <img
                src={axisLogo}
                alt="Axis Media Logo"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            <p className="text-gray-200 mt-5 leading-relaxed text-[15px]">
              Axis Media is a digital marketing and web development agency
              helping global brands grow with high-quality marketing, design,
              technology and growth strategy.
            </p>
          </div>

          {/* BUSINESS SECTION */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-200">For Businesses</h4>
            <ul className="space-y-2 text-gray-200">
              {["Marketing Services", "Website Solutions", "SEO Strategy", "FAQs"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="hover:text-white cursor-pointer transition-all hover:translate-x-1"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* AGENCY SECTION */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-200">For Agencies</h4>
            <ul className="space-y-2 text-gray-200">
              {["Partner With Us", "Submit Your Agency", "Sponsorships", "All Agencies"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="hover:text-white cursor-pointer transition-all hover:translate-x-1"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT SECTION */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-200">Get in Touch</h4>

            <p className="text-gray-200">Delhi NCR, India</p>
            <p className="text-gray-200 mt-1">companyaxismedia@gmail.com</p>
            <p className="text-gray-200 mt-1">+91 9871584001</p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6 text-xl">
              {[FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaYoutube].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/10 rounded-full backdrop-blur-md 
                               hover:bg-white/20 transition cursor-pointer"
                  >
                    <Icon className="hover:scale-110 transition" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM LINKS */}
        <div className="max-w-7xl mx-auto pt-10">
          <div className="border-t border-white/20 pt-6 flex flex-wrap justify-center gap-6 text-gray-300 text-sm">
            {["Sitemap", "Terms of Use", "Privacy Policy", "Accessibility", "Fraud Protection"].map(
              (link, i) => (
                <span key={i} className="hover:text-white cursor-pointer transition-all">
                  {link}
                </span>
              )
            )}
          </div>

          <p className="text-center text-gray-300 mt-4 text-sm">
            © {new Date().getFullYear()} Axis Media, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
