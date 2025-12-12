// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/axisLogo.jpeg";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll Hide Logic
  const [hidden, setHidden] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menuName) => setOpenMenu(menuName);
  const closeMenu = () => setOpenMenu(null);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 
      ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* TOP BAR */}
      <div className="bg-[#0A1B3F] text-white py-[4px] text-sm overflow-hidden">
        <div className="whitespace-nowrap animate-scroll-left flex items-center gap-10 font-medium opacity-90">
          <span className="bg-white/10 px-4 py-[3px] rounded-full">📞 +91 9871584001</span>
          <span className="bg-white/10 px-4 py-[3px] rounded-full">✉️ companyaxismedia@gmail.com</span>
          <span className="bg-purple-600 px-4 py-[3px] rounded-full font-bold shadow-lg">Axis Media</span>
          <span className="ml-10 cursor-pointer hover:text-gray-200">Careers</span>
          <span className="cursor-pointer hover:text-gray-200">Blog</span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-transparent w-full">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Axis Media Logo"
              className="h-20 w-auto rounded-xl shadow-xl bg-white p-2 object-contain"
            />
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 font-semibold text-white">
            <li><NavLink to="/">Home</NavLink></li>

            {/* SERVICES DROPDOWN FIXED */}
            <li
              className="relative"
              onMouseEnter={() => toggleMenu("services")}
              onMouseLeave={closeMenu}
            >
              <span className="cursor-pointer">Services ▾</span>

              <div
                className={`absolute left-0 mt-3 bg-[#0E122D]/95 p-5 rounded-xl w-80 shadow-xl border border-white/10 transition-all duration-200 
                ${openMenu === "services" ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <h3 className="font-bold text-blue-400 mb-3">Our Services</h3>

                <ul className="space-y-2">
                  <li><NavLink to="/website-development">Website Development</NavLink></li>
                  <li><NavLink to="/services-grid">Services Grid</NavLink></li>
                  <li><NavLink to="/ecommerce">E-commerce Website</NavLink></li>
                  <li><NavLink to="/digital-marketing">Digital Marketing</NavLink></li>
                  <li><NavLink to="/google-ads">Google Ads</NavLink></li>
                  <li><NavLink to="/seo">SEO Services</NavLink></li>
                  <li><NavLink to="/branding">Branding & Graphics</NavLink></li>
                </ul>
              </div>
            </li>

            {/* BUSINESS SOLUTIONS - FIXED */}
            <li
              className="relative"
              onMouseEnter={() => toggleMenu("business")}
              onMouseLeave={closeMenu}
            >
              <span className="cursor-pointer">Business Solutions ▾</span>

              <div
                className={`absolute left-0 mt-3 bg-[#0E122D]/95 p-5 rounded-xl w-64 shadow-xl border border-white/10 transition-all duration-200
                ${openMenu === "business" ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <ul className="space-y-3">
                  <li><NavLink to="/grow-business">Grow Business</NavLink></li>
                  <li><NavLink to="/industries">Industries</NavLink></li>
                </ul>
              </div>
            </li>

            {/* PORTFOLIO FIXED */}
            <li
              className="relative"
              onMouseEnter={() => toggleMenu("portfolio")}
              onMouseLeave={closeMenu}
            >
              <span className="cursor-pointer">Portfolio ▾</span>

              <div
                className={`absolute left-0 mt-3 bg-[#0E122D]/95 p-5 rounded-xl w-72 shadow-xl border border-white/10 transition-all duration-200
                ${openMenu === "portfolio" ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <h3 className="font-bold text-blue-400 mb-3">Portfolio Sections</h3>

                <ul className="space-y-2">
                  <li><NavLink to="/portfolio">All Portfolio</NavLink></li>
                  <li><NavLink to="/portfolio?category=web-development">Web Development</NavLink></li>
                </ul>
              </div>
            </li>

            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/packages">Packages</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

            <li>
              <NavLink
                to="/contact"
                className="bg-green-600 px-5 py-2 rounded-xl shadow-md text-white hover:bg-green-700"
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
      </nav>
    </header>
  );
}
