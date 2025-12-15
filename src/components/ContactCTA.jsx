import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

const EMAILJS_SERVICE_ID = "service_0jfwrha";
const EMAILJS_ADMIN_TEMPLATE_ID = "template_wo6zhf9";
const EMAILJS_USER_TEMPLATE_ID = "template_542lto6";
const EMAILJS_PUBLIC_KEY = "KjcYCDj8wNF2MoHdf";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwQIaVQst61Ma7AwqJIPmDziqvVJjISBgbiEobdb2_IoEAgPDYTksrKL0YkRyJ7Gopi4g/exec";

const WHATSAPP_NUMBER = "919871584001";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      err.email = "Enter a valid email";
    if (formData.phone && !/^\d{10}$/.test(formData.phone))
      err.phone = "Phone must be 10 digits";
    if (!formData.message.trim()) err.message = "Enter a message";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

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

      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `Hi, I'm ${formData.name}. I need ${formData.issue}`
        )}`,
        "_blank"
      );

      setSent(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        issue: "",
        message: "",
      });

      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      alert("Failed to send message. Try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 text-white bg-[#073762]"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="text-center text-4xl md:text-5xl font-extrabold mb-4"
      >
        Contact Axis Media – Digital Marketing Experts
      </h2>

      <p className="text-center text-blue-100 mb-8 max-w-2xl mx-auto">
        Get in touch with our digital marketing experts for SEO, Google Ads,
        website development, and growth solutions.
      </p>

      {/* SOCIAL */}
      <div className="flex justify-center gap-6 text-3xl mb-10">
        <a href="https://www.facebook.com/profile.php?id=61584611262239" aria-label="Facebook"><FaFacebook /></a>
        <a href="https://www.instagram.com/axismedia123" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://www.linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
      </div>

      {/* FORM */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" name="name" placeholder="Full Name"
            value={formData.name} onChange={handleChange}
            autoComplete="name" aria-label="Full Name"
            className="w-full p-4 bg-white/20 rounded-xl text-white" />

          <input type="email" name="email" placeholder="Email Address"
            value={formData.email} onChange={handleChange}
            autoComplete="email" aria-label="Email"
            className="w-full p-4 bg-white/20 rounded-xl text-white" />

          <input type="text" name="phone" placeholder="Phone Number"
            value={formData.phone} onChange={handleChange}
            autoComplete="tel" aria-label="Phone"
            className="w-full p-4 bg-white/20 rounded-xl text-white" />

          <textarea name="message" placeholder="Your Message"
            value={formData.message} onChange={handleChange}
            rows="4" aria-label="Message"
            className="w-full p-4 bg-white/20 rounded-xl text-white" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
