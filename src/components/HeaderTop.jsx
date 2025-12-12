import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/axisLogo.jpeg";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent shadow-none">

      {/* ⭐ MAIN NAVBAR */}
      <nav className="w-full bg-transparent backdrop-blur-0 border-none shadow-none">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* ⭐ LOGO (Perfect size + center aligned + attractive) */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Axis Media Logo"
              className="
                h-20                /* ⭐ Bigger premium size */
                w-auto
                rounded-2xl         /* smooth elegant shape */
                shadow-[0_0_25px_rgba(255,255,255,0.25)]
                border border-white/20
                p-2
                bg-white/10         /* glass effect */
                backdrop-blur-md
                object-contain
              "
            />
          </div>

          {/* ⭐ DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 font-semibold text-white text-[17px]">

            <li className="hover:text-blue-300 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-300 cursor-pointer transition">Services ▾</li>
            <li className="hover:text-blue-300 cursor-pointer transition">Business Solutions ▾</li>
            <li className="hover:text-blue-300 cursor-pointer transition">Portfolio</li>
            <li className="hover:text-blue-300 cursor-pointer transition">About Us</li>
            <li className="hover:text-blue-300 cursor-pointer transition">Packages</li>
            <li className="hover:text-blue-300 cursor-pointer transition">Contact</li>

            <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-xl shadow-lg text-white transition-all">
              Get a Quote
            </button>
          </ul>

          {/* ⭐ MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl text-white"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* ⭐ MOBILE MENU */}
        {openMenu && (
          <div className="md:hidden bg-white px-6 py-4 shadow-lg space-y-4 text-gray-800">

            <p className="border-b pb-2">Home</p>
            <p className="border-b pb-2">Services</p>
            <p className="border-b pb-2">Business Solutions</p>
            <p className="border-b pb-2">Google Ads</p>
            <p className="border-b pb-2">Portfolio</p>
            <p className="border-b pb-2">About Us</p>
            <p className="border-b pb-2">Packages</p>
            <p className="border-b pb-2">Contact</p>

            <button className="bg-green-600 text-white w-full py-2 rounded-md">
              Get a Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
