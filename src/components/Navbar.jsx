import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/AxisMedia.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // ✅ logo behavior

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const location = useLocation();

  /* ================= NAVBAR HIDE + LOGO SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => {
      const noHidePages = [
        "/login",
        "/signup",
        "/forgot-password",
        "/reset-password",
      ];

      const current = window.scrollY;

      // ✅ logo shrink trigger (theme dependent)
      setIsScrolled(current > 80);

      if (noHidePages.includes(location.pathname)) {
        setHidden(false);
        return;
      }

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setHidden(current > lastScrollY.current && current > 120);
          lastScrollY.current = current;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isLoggedIn = !!localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {/* ================= HEADER ================= */}
       <header
        className={`fixed top-0 left-0 w-full z-[100]
        bg-sky-500 shadow-lg transition-all duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${isScrolled ? "h-[72px]" : "h-[96px]"}`}
        style={{ backgroundColor: "#0ea5e9" }}
      >
        <nav className="w-full h-full">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">


            {/* ================= LOGO ================= */}
            
                <NavLink
  to="/"
  className="flex items-center h-full shrink-0 pr-4"
>
  <img
    src={logo}
    alt="Axis Media Digital Marketing Agency"
    className={`
      object-contain transition-all duration-300
      ${isScrolled ? "h-[100px]" : "h-[120px]"}
    `}
  />
</NavLink>

              {/* ================= DESKTOP MENU ================= */}
            <ul className="hidden md:flex items-center gap-9 font-semibold text-white text-[15px]">

              <li><NavLink to="/">Home</NavLink></li>

              {/* SERVICES */}
              <li
                className="relative"
                onMouseEnter={() => setOpenMenu("services")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <NavLink to="/services-grid" className="cursor-pointer">
                  Services ▾
                </NavLink>

                <div
                  className={`absolute top-full left-0 bg-white text-gray-800 p-5 rounded-xl
                  w-80 shadow-xl ${openMenu === "services" ? "block" : "hidden"}`}
                >
                  <h3 className="font-bold text-sky-600 mb-3">Our Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li><NavLink to="/services/website-development">Website Development</NavLink></li>
                    <li>
                      <NavLink
                        to="/digital-marketing-company-in-delhi"
                        className="font-semibold text-sky-700"
                      >
                        Digital Marketing Company in Delhi
                      </NavLink>
                    </li>
                    <li><NavLink to="/services-grid">All Services</NavLink></li>
                    <li><NavLink to="/digital-marketing">Digital Marketing</NavLink></li>
                    <li><NavLink to="/google-ads">Google Ads</NavLink></li>
                    <li><NavLink to="/seo-services">SEO Services</NavLink></li>
                    <li><NavLink to="/branding">Branding & Graphics</NavLink></li>
                  </ul>
                </div>
              </li>

              {/* BUSINESS SOLUTIONS */}
              <li
                className="relative"
                onMouseEnter={() => setOpenMenu("business")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <NavLink to="/industries" className="cursor-pointer">
                  Business Solutions ▾
                </NavLink>

                <div
                  className={`absolute top-full left-0 bg-white text-gray-800 p-5 rounded-xl
                  w-64 shadow-xl ${openMenu === "business" ? "block" : "hidden"}`}
                >
                  <ul className="space-y-2 text-sm">
                    <li><NavLink to="/grow-business">Grow Business</NavLink></li>
                    <li><NavLink to="/industries">Industries</NavLink></li>
                  </ul>
                </div>
              </li>

              {/* WEB DEVELOPMENT */}
              <li
                className="relative"
                onMouseEnter={() => setOpenMenu("web")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <span className="cursor-pointer">Web Development ▾</span>
                <div
                  className={`absolute top-full left-0 bg-white text-gray-800 p-5 rounded-xl
                  w-64 shadow-xl ${openMenu === "web" ? "block" : "hidden"}`}
                >
                  <ul className="space-y-2 text-sm">
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/packages">Packages</NavLink></li>
                  </ul>
                </div>
              </li>

              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>

              <NavLink to="/contact" className="bg-blue-700 px-5 py-2 rounded-xl">
                Get a Quote
              </NavLink>

              {!isLoggedIn ? (
                <>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/signup">Signup</NavLink>
                </>
              ) : (
                <button
                  onClick={logoutHandler}
                  className="bg-red-600 px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              )}
            </ul>

            {/* MOBILE ICON */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-white text-3xl"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/50">
          <div className="absolute right-0 top-0 w-72 h-full bg-white shadow-xl p-6 overflow-y-auto">
            <button
              onClick={() => setMobileOpen(false)}
              className="text-2xl mb-6"
            >
              ✕
            </button>

            <nav className="flex flex-col gap-4 font-semibold text-gray-800">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services-grid">Services</NavLink>
              <NavLink
                to="/digital-marketing-company-in-delhi"
                className="text-sky-700 font-bold"
              >
                Digital Marketing Company in Delhi
              </NavLink>
              <NavLink to="/industries">Business Solutions</NavLink>
              <NavLink to="/digital-marketing">Digital Marketing</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>

              <hr />

              <p className="font-bold text-sky-600">Services</p>
              <NavLink to="/services/website-development">Website Development</NavLink>
              <NavLink to="/google-ads">Google Ads</NavLink>
              <NavLink to="/seo-services">SEO Services</NavLink>
              <NavLink to="/branding">Branding & Graphics</NavLink>

              <p className="font-bold text-sky-600 mt-3">Business Solutions</p>
              <NavLink to="/grow-business">Grow Business</NavLink>
              <NavLink to="/industries">Industries</NavLink>

              <p className="font-bold text-sky-600 mt-3">Web Development</p>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/packages">Packages</NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
