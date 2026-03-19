import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

const EMAILJS_SERVICE_ID = "service_w80z31i";
const EMAILJS_ADMIN_TEMPLATE_ID = "template_wo6zhf9";
const EMAILJS_USER_TEMPLATE_ID = "template_542lto6";
const EMAILJS_PUBLIC_KEY = "KjcYCDj8wNF2MoHdf";

const WHATSAPP_NUMBER = "919871584001";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_ADMIN_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_USER_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `Hi, I'm ${formData.name}. I want to book a free growth audit. My phone number is ${formData.phone}. My requirement: ${formData.message}`
        )}`,
        "_blank"
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-[#073762] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* TOP CONTENT */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Get 10–50 Qualified Orders in the Next 30 Days
          </h2>

          <p className="text-white/85 max-w-3xl mx-auto text-lg md:text-xl leading-8">
            Book a{" "}
            <span className="font-semibold text-white">
              Free Digital Marketing Audit
            </span>{" "}
            and discover how your business can generate more leads, more sales
            and faster growth through SEO, Google Ads, Social Media Marketing
            and high-converting websites.
          </p>

          <p className="mt-4 text-sm md:text-base text-white/70">
            Free Strategy Call • No Obligation • 30-Minute Growth Consultation
          </p>
        </div>

        {/* TRUST BADGES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          <div className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-center">
            <p className="text-2xl font-extrabold text-white">100+</p>
            <p className="text-white/75 text-sm mt-1">Businesses Assisted</p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-center">
            <p className="text-2xl font-extrabold text-white">ROI Focused</p>
            <p className="text-white/75 text-sm mt-1">Performance Marketing Approach</p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-center">
            <p className="text-2xl font-extrabold text-white">30 Min</p>
            <p className="text-white/75 text-sm mt-1">Free Growth Audit Call</p>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            <span>SEO & Google Ranking</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            <span>Google Ads & Leads</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            <span>Website Development</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            <span>Social Media Growth</span>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-5 text-2xl mb-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 hover:bg-white/20 transition p-3 rounded-full"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 hover:bg-white/20 transition p-3 rounded-full"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 hover:bg-white/20 transition p-3 rounded-full"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 hover:bg-white/20 transition p-3 rounded-full"
          >
            <FaTwitter />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 transition p-3 rounded-full"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* FORM */}
        <div className="max-w-3xl mx-auto bg-white/10 border border-white/10 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl text-black outline-none"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl text-black outline-none"
              required
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-xl text-black outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Tell us about your business goals, current challenges or what kind of results you want"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl text-black outline-none"
              rows="5"
              required
            />

            <button
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-bold text-lg hover:opacity-90 transition disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Book Free Growth Audit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}