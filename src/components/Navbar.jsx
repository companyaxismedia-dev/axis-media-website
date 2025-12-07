import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (name) => setOpenMenu(name);
  const closeMenu = () => setOpenMenu(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* 🔵 TOP SCROLLING INFO BAR (Smooth + Premium) */}
      <div className="bg-[#0A1B3F] text-white py-[4px] text-sm overflow-hidden">
        <div className="whitespace-nowrap animate-scroll-left flex items-center gap-10 font-medium opacity-90">

          <span className="bg-white/10 px-4 py-[3px] rounded-full">
            📞 +91 9871584001
          </span>

          <span className="bg-white/10 px-4 py-[3px] rounded-full">
            ✉️ companyaxismedia@gmail.com
          </span>

          <span className="bg-purple-600 px-4 py-[3px] rounded-full font-bold shadow-lg">
            Axis Media
          </span>

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

      {/* 🌈 GLASS NAVBAR */}
      <nav className="backdrop-blur-2xl bg-white/5 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          {/* LOGO */}
          <NavLink
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-sm"
          >
            Axis Media
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 font-semibold text-white">

            <li><NavLink to="/" className="hover:text-blue-300">Home</NavLink></li>

            {/* SERVICES DROPDOWN */}
            <li
              className="relative group"
              onMouseEnter={() => toggleMenu("services")}
              onMouseLeave={closeMenu}
            >
              <span className="cursor-pointer hover:text-blue-300">Services ▾</span>

              {openMenu === "services" && (
                <div className="absolute left-0 mt-3 bg-[#0E122D]/90 backdrop-blur-xl border border-white/10 shadow-xl rounded-xl p-5 w-72 text-gray-300 z-[999]">

                  <h3 className="font-bold mb-3 text-blue-400">Our Services</h3>

                  <ul className="space-y-2">
                    <li><NavLink to="/services" className="hover:text-blue-300">Website Development</NavLink></li>
                    <li><NavLink to="/services" className="hover:text-blue-300">E-commerce Website</NavLink></li>
                    <li><NavLink to="/digital-marketing" className="hover:text-blue-300">Digital Marketing</NavLink></li>
                    <li><NavLink to="/google-ads" className="hover:text-blue-300">Google Ads</NavLink></li>
                    <li><NavLink to="/seo" className="hover:text-blue-300">SEO Services</NavLink></li>
                    <li><NavLink to="/branding" className="hover:text-blue-300">Branding & Graphics</NavLink></li>
                  </ul>

                </div>
              )}
            </li>

            <li><NavLink to="/portfolio" className="hover:text-blue-300">Portfolio</NavLink></li>
            <li><NavLink to="/about" className="hover:text-blue-300">About Us</NavLink></li>
            <li><NavLink to="/grow-business" className="hover:text-blue-300">Grow Business</NavLink></li>
            <li><NavLink to="/packages" className="hover:text-blue-300">Packages</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-300">Contact</NavLink></li>

            {/* CTA BUTTON */}
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
