import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* MAIN FOOTER */}
      <div
        className="pt-16 pb-10 px-6"
        style={{
          background: "linear-gradient(135deg, #041A3A 0%, #0A2A5E 60%, #0F3B8F 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          {/* LOGO + DESCRIPTION */}
          <div className="max-w-sm">
            <h3 className="text-3xl font-extrabold tracking-wide">AXIS MEDIA</h3>

            <p className="text-gray-300 mt-4 leading-relaxed">
              Axis Media is a digital marketing and web development agency
              helping global brands grow with high-quality marketing, design,
              technology and growth strategy.
            </p>
          </div>

          {/* For Businesses */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-200">
              For Businesses
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Marketing Services</li>
              <li className="hover:text-white cursor-pointer">Website Solutions</li>
              <li className="hover:text-white cursor-pointer">SEO Strategy</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* For Agencies */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-200">
              For Agencies
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Partner With Us</li>
              <li className="hover:text-white cursor-pointer">Submit Your Agency</li>
              <li className="hover:text-white cursor-pointer">Sponsorships</li>
              <li className="hover:text-white cursor-pointer">All Agencies</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-200">
              Get in Touch
            </h4>

            <p className="text-gray-300">Delhi NCR, India</p>
            <p className="text-gray-300 mt-1">companyaxismedia@gmail.com</p>
            <p className="text-gray-300 mt-1">+91 9871584001</p>

            <a
              href="#contact"
              className="block mt-4 text-blue-300 hover:text-white"
            >
              Contact Us
            </a>

            {/* Social Icons */}
            <div className="flex gap-5 mt-6 text-2xl">
              <FaLinkedinIn className="hover:text-blue-300 cursor-pointer" />
              <FaInstagram className="hover:text-blue-300 cursor-pointer" />
              <FaFacebookF className="hover:text-blue-300 cursor-pointer" />
              <FaTwitter className="hover:text-blue-300 cursor-pointer" />
              <FaYoutube className="hover:text-blue-300 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="max-w-7xl mx-auto pt-10">
          <div className="border-t border-blue-900/40 pt-6 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
            <span className="hover:text-white cursor-pointer">Sitemap</span>
            <span className="hover:text-white cursor-pointer">Terms of Use</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Accessibility</span>
            <span className="hover:text-white cursor-pointer">Fraud Protection</span>
          </div>

          <p className="text-center text-gray-400 mt-4 text-sm">
            © {new Date().getFullYear()} Axis Media, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
