// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (name) => setOpenMenu(name);
  const closeMenu = () => setOpenMenu(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* TOP BAR */}
      <div className="bg-[#0A1B3F] text-white py-[4px] text-sm overflow-hidden">
        <div className="whitespace-nowrap animate-scroll-left flex items-center gap-10 font-medium opacity-90">
          <span className="bg-white/10 px-4 py-[3px] rounded-full">📞 +91 9871584001</span>
          <span className="bg-white/10 px-4 py-[3px] rounded-full">✉️ companyaxismedia@gmail.com</span>
          <span className="bg-purple-600 px-4 py-[3px] rounded-full font-bold shadow-lg">Axis Media</span>
          <span className="ml-10 cursor-pointer hover:text-gray-200">Careers</span>
          <span className="cursor-pointer hover:text-gray-200">Blog</span>
        </div>

        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll-left {
            animation: scroll-left 28s linear infinite;
          }
        `}</style>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-[#0A0F1C] border-b border-white/10 shadow-lg backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Axis Media Logo"
              className="h-12 w-auto rounded-md shadow-lg object-contain"
            />
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 font-semibold text-white">

            {/* HOME */}
            <li><NavLink to="/" className="hover:text-blue-300">Home</NavLink></li>

            {/* SERVICES DROPDOWN */}
            <li
              className="relative group"
              onMouseEnter={() => toggleMenu("services")}
              onMouseLeave={closeMenu}
            >
              <span className="cursor-pointer hover:text-blue-300">Services ▾</span>

              {openMenu === "services" && (
                <div className="absolute left-0 mt-3 bg-[#0E122D]/95 p-5 rounded-xl shadow-xl w-80 border border-white/10">
                  <h3 className="font-bold text-blue-400 mb-3">Our Services</h3>
                  <ul className="space-y-2">
                    <li><NavLink to="/website-development" className="hover:text-blue-300 block">Website Development</NavLink></li>
                    <li><NavLink to="/ecommerce" className="hover:text-blue-300 block">E-commerce Website</NavLink></li>
                    <li><NavLink to="/digital-marketing" className="hover:text-blue-300 block">Digital Marketing</NavLink></li>
                    <li><NavLink to="/google-ads" className="hover:text-blue-300 block">Google Ads</NavLink></li>
                    <li><NavLink to="/seo" className="hover:text-blue-300 block">SEO Services</NavLink></li>
                    <li><NavLink to="/branding" className="hover:text-blue-300 block">Branding & Graphics</NavLink></li>
                  </ul>
                </div>
              )}
            </li>

            {/* BUSINESS SOLUTIONS (Grow Business + Industries only 2 pages) */}
            <li
              className="relative group"
              onMouseEnter={() => toggleMenu("business")}
              onMouseLeave={closeMenu}
            >
              <span className="cursor-pointer hover:text-blue-300">Business Solutions ▾</span>

              {openMenu === "business" && (
                <div className="absolute left-0 mt-3 bg-[#0E122D]/95 p-5 rounded-xl shadow-xl w-64 border border-white/10">

                  <ul className="space-y-3">

                    {/* GROW BUSINESS PAGE */}
                    <li>
                      <NavLink
                        to="/grow-business"
                        className="hover:text-blue-300 block font-semibold"
                      >
                        Grow Business
                      </NavLink>
                    </li>

                    {/* INDUSTRIES PAGE */}
                    <li>
                      <NavLink
                        to="/industries"
                        className="hover:text-blue-300 block font-semibold"
                      >
                        Industries
                      </NavLink>
                    </li>

                  </ul>
                </div>
              )}
            </li>

            {/* OTHER MENU ITEMS */}
            <li><NavLink to="/portfolio" className="hover:text-blue-300">Portfolio</NavLink></li>
            <li><NavLink to="/about" className="hover:text-blue-300">About Us</NavLink></li>
            <li><NavLink to="/packages" className="hover:text-blue-300">Packages</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-300">Contact</NavLink></li>

            <li>
              <NavLink
                to="/contact"
                className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl shadow-md text-white transition"
              >
                Get a Quote
              </NavLink>
            </li>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0F1535] text-white p-6 space-y-4 border-t border-white/10">
            <NavLink to="/" className="block">Home</NavLink>
            <NavLink to="/services" className="block">Services</NavLink>
            <NavLink to="/grow-business" className="block">Grow Business</NavLink>
            <NavLink to="/industries" className="block">Industries</NavLink>
            <NavLink to="/portfolio" className="block">Portfolio</NavLink>
            <NavLink to="/about" className="block">About Us</NavLink>
            <NavLink to="/packages" className="block">Packages</NavLink>
            <NavLink to="/contact" className="block">Contact</NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
