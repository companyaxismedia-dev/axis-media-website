import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/axisLogo.jpeg";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // ⭐ Navbar Hide on Scroll (Smooth & CLS SAFE)
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (current > lastScrollY.current && current > 120) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          lastScrollY.current = current;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menu) => setOpenMenu(menu);
  const closeMenu = () => setOpenMenu(null);

  const isLoggedIn = !!localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100]
      bg-sky-500
      h-[85px] flex items-center shadow-lg
      transition-transform duration-500 will-change-transform
      ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Axis Media Logo"
              width="160"
              height="56"
              className="h-14 w-auto rounded-xl bg-white p-2 shadow-md object-contain"
            />
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 font-semibold text-white">

            <li><NavLink to="/" className="hover:text-yellow-200">Home</NavLink></li>

            {/* SERVICES */}
            <li
              className="relative"
              onMouseEnter={() => toggleMenu("services")}
              onMouseLeave={closeMenu}
            >
              <span className="cursor-pointer hover:text-yellow-200">
                Services ▾
              </span>

              <div
                className={`absolute left-0 mt-3 bg-white text-gray-800 p-5 rounded-xl
                w-80 shadow-xl border transition-all duration-200
                ${openMenu === "services" ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <h3 className="font-bold text-sky-600 mb-3">Our Services</h3>
                <ul className="space-y-2">
                  <li><NavLink to="/portfolio">Website Development</NavLink></li>
                  <li><NavLink to="/services-grid">Services Grid</NavLink></li>
                  <li><NavLink to="/ecommerce">E-commerce Website</NavLink></li>
                  <li><NavLink to="/digital-marketing">Digital Marketing</NavLink></li>
                  <li><NavLink to="/google-ads">Google Ads</NavLink></li>
                  <li><NavLink to="/seo">SEO Services</NavLink></li>
                  <li><NavLink to="/branding">Branding & Graphics</NavLink></li>
                </ul>
              </div>
            </li>

            {/* BUSINESS */}
            <li
              className="relative"
              onMouseEnter={() => toggleMenu("business")}
              onMouseLeave={closeMenu}
            >
              <span className="cursor-pointer hover:text-yellow-200">
                Business Solutions ▾
              </span>

              <div
                className={`absolute left-0 mt-3 bg-white text-gray-800 p-5 rounded-xl
                w-64 shadow-xl border transition-all duration-200
                ${openMenu === "business" ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <ul className="space-y-3">
                  <li><NavLink to="/grow-business">Grow Business</NavLink></li>
                  <li><NavLink to="/industries">Industries</NavLink></li>
                </ul>
              </div>
            </li>

            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/packages">Packages</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

            {/* CTA */}
            <li>
              <NavLink
                to="/contact"
                className="bg-blue-700 px-5 py-2 rounded-xl text-white shadow hover:bg-blue-800"
              >
                Get a Quote
              </NavLink>
            </li>

            {/* LOGIN / LOGOUT */}
            {!isLoggedIn ? (
              <>
                <NavLink
                  to="/login"
                  className="bg-white text-sky-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/signup"
                  className="bg-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
                >
                  Signup
                </NavLink>
              </>
            ) : (
              <button
                onClick={logoutHandler}
                className="bg-red-600 px-4 py-2 rounded-lg shadow hover:bg-red-700"
              >
                Logout
              </button>
            )}
          </ul>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white text-3xl"
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
