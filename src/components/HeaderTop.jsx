import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openDM, setOpenDM] = useState(false);

  return (
    <header className="w-full shadow-md fixed top-0 left-0 z-50 bg-white">
      
      {/* 🔵 TOPBAR */}
      <div className="w-full bg-blue-700 text-white text-sm py-2 border-b border-blue-500/30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">

          {/* Left Info */}
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
              <FaEnvelope /> info@yourcompany.com
            </span>
            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
              <FaPhoneAlt /> +91 9876543210
            </span>
            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
              <FaMapMarkerAlt /> Lucknow, Uttar Pradesh
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-lg">
            <a className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition" href="#"><FaFacebookF /></a>
            <a className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition" href="#"><FaInstagram /></a>
            <a className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition" href="#"><FaLinkedinIn /></a>
          </div>

        </div>
      </div>

      {/* ⚪ NAVBAR */}
      <nav className="w-full bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-purple-700">Axis Media</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">

            <li className="hover:text-blue-600 cursor-pointer transition">Home</li>

            {/* SERVICES GRID DROPDOWN */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setOpenServices(true)}
              onMouseLeave={() => setOpenServices(false)}
            >
              Services Grid ▾
              {openServices && (
                <div className="absolute top-8 left-0 bg-white shadow-lg p-4 w-48 rounded-md z-50">
                  <p className="hover:text-blue-600 cursor-pointer py-1">Web Design</p>
                  <p className="hover:text-blue-600 cursor-pointer py-1">E-Commerce</p>
                  <p className="hover:text-blue-600 cursor-pointer py-1">Branding</p>
                </div>
              )}
            </li>

            {/* DIGITAL MARKETING DROPDOWN */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setOpenDM(true)}
              onMouseLeave={() => setOpenDM(false)}
            >
              Digital Marketing ▾
              {openDM && (
                <div className="absolute top-8 left-0 bg-white shadow-lg p-4 w-48 rounded-md z-50">
                  <p className="hover:text-blue-600 cursor-pointer py-1">SEO</p>
                  <p className="hover:text-blue-600 cursor-pointer py-1">Google Ads</p>
                  <p className="hover:text-blue-600 cursor-pointer py-1">Social Media Marketing</p>
                </div>
              )}
            </li>

            <li className="hover:text-blue-600 cursor-pointer transition">Google Ads</li>
            <li className="hover:text-blue-600 cursor-pointer transition">Portfolio</li>
            <li className="hover:text-blue-600 cursor-pointer transition">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer transition">Packages</li>
            <li className="hover:text-blue-600 cursor-pointer transition">Contact</li>

            {/* Button */}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Get a Quote
            </button>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden text-3xl" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <FiX /> : <FiMenu />}
          </button>

        </div>

        {/* MOBILE DROPDOWN MENU */}
        {openMenu && (
          <div className="md:hidden bg-white px-6 py-4 shadow-lg space-y-4">
            <p className="border-b pb-2">Home</p>
            <p className="border-b pb-2">Services Grid</p>
            <p className="border-b pb-2">Digital Marketing</p>
            <p className="border-b pb-2">Google Ads</p>
            <p className="border-b pb-2">Portfolio</p>
            <p className="border-b pb-2">About Us</p>
            <p className="border-b pb-2">Packages</p>
            <p className="border-b pb-2">Contact</p>

            <button className="bg-blue-600 text-white w-full py-2 rounded-md">
              Get a Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
