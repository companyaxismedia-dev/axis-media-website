import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (name) => setOpenMenu(name);
  const closeMenu = () => setOpenMenu(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-none">

      {/* ⭐ TOP BAR (Scrolling Info) */}
      <div className="bg-blue-800 text-white text-base py-[3px] overflow-hidden">
        <div className="whitespace-nowrap animate-scroll-left flex items-center gap-10 font-semibold">
          <span className="bg-white/20 px-4 py-[3px] rounded-full">📞 +91 9871584001</span>
          <span className="bg-white/20 px-4 py-[3px] rounded-full">✉️ companyaxismedia@gmail.com</span>
          <span className="bg-purple-600 px-4 py-[3px] rounded-full font-bold">Axis Media</span>

          <span className="ml-10 cursor-pointer hover:text-gray-200">Careers</span>
          <span className="cursor-pointer hover:text-gray-200">Blog</span>
        </div>

        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll-left {
            animation: scroll-left 25s linear infinite;
          }
        `}</style>
      </div>

      {/* ⭐ NAVBAR (Transparent Glass) */}
      <nav className="backdrop-blur-xl bg-transparent shadow-none">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

          {/* LOGO */}
          <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Axis Media
          </div>

          {/* MENU */}
          <ul className="hidden md:flex items-center gap-10 font-semibold">

            <li>
              <NavLink to="/" className="text-sky-400 hover:text-sky-300 transition">
                Home
              </NavLink>
            </li>

            {/* SERVICES DROPDOWN */}
            <li
              className="relative cursor-pointer text-sky-400"
              onMouseEnter={() => toggleMenu("services")}
              onMouseLeave={closeMenu}
            >
              <span className="hover:text-sky-300 transition">Services</span>

              {openMenu === "services" && (
                <div className="absolute left-0 mt-3 bg-white shadow-xl rounded-xl p-5 w-72 text-gray-800 z-[999]">
                  <h3 className="font-bold mb-2 text-blue-700">Our Services</h3>
                  <ul className="space-y-2">
                    <li><NavLink to="/services" className="hover:text-blue-500">Website Development</NavLink></li>
                    <li><NavLink to="/services" className="hover:text-blue-500">E-commerce Website</NavLink></li>
                    <li><NavLink to="/digital-marketing" className="hover:text-blue-500">Digital Marketing</NavLink></li>
                    <li><NavLink to="/google-ads" className="hover:text-blue-500">Google Ads Management</NavLink></li>
                    <li><NavLink to="/services" className="hover:text-blue-500">SEO Services</NavLink></li>
                    <li><NavLink to="/services" className="hover:text-blue-500">Branding & Graphics</NavLink></li>
                  </ul>
                </div>
              )}
            </li>

            <li><NavLink to="/portfolio" className="text-sky-400 hover:text-sky-300 transition">Portfolio</NavLink></li>
            <li><NavLink to="/about" className="text-sky-400 hover:text-sky-300 transition">About Us</NavLink></li>
            <li><NavLink to="/grow-business" className="text-sky-400 hover:text-sky-300 transition">Grow Business</NavLink></li>
            <li><NavLink to="/packages" className="text-sky-400 hover:text-sky-300 transition">Packages</NavLink></li>
            <li><NavLink to="/contact" className="text-sky-400 hover:text-sky-300 transition">Contact</NavLink></li>

            {/* CTA BUTTON */}
            <li>
              <NavLink
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition"
              >
                Get a Quote
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}
