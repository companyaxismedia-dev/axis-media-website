import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter
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
          `Hi, I'm ${formData.name}. I want to know more about your services.`
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
      <h2 className="text-center text-4xl font-bold mb-4">
        Contact Axis Media – Digital Marketing Experts
      </h2>

      <p className="text-center text-white/80 mb-8">
        Talk to our experts for SEO, Google Ads & Website Development
      </p>

      <div className="flex justify-center gap-6 text-2xl mb-10">
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
        <FaTwitter />
      </div>

      <div className="max-w-3xl mx-auto bg-white/10 p-10 rounded-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded text-black"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded text-black"
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 rounded text-black"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded text-black"
            rows="4"
            required
          />

          <button
            disabled={isSubmitting}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded text-white font-bold"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
