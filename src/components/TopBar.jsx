import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-blue-700 text-white text-sm py-2 border-b border-blue-500/40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">

        {/* LEFT SIDE */}
        <div className="flex flex-wrap items-center gap-6">
          <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
            <FaEnvelope className="text-white/90" />
            info@yourcompany.com
          </span>

          <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
            <FaPhoneAlt className="text-white/90" />
            +91 9876543210
          </span>

          <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
            <FaMapMarkerAlt className="text-white/90" />
            Lucknow, Uttar Pradesh
          </span>
        </div>

        {/* SOCIALS */}
        <div className="flex items-center gap-3 text-lg">
          <a
            href="#"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
