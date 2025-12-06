import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

// 🔐 EmailJS constants
const EMAILJS_SERVICE_ID = "service_0jfwrha";
const EMAILJS_ADMIN_TEMPLATE_ID = "template_wo6zhf9"; 
const EMAILJS_USER_TEMPLATE_ID = "template_542lto6"; 
const EMAILJS_PUBLIC_KEY = "KjcYCDj8wNF2MoHdf";

// Google Sheet URL
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
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // VALIDATION
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Enter your name";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (formData.phone && !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.message.trim()) newErrors.message = "Enter a message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SAVE TO GOOGLE SHEETS
  const sendToGoogleSheet = async () => {
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.log("Google Sheet Error:", err);
    }
  };

  // AUTO WHATSAPP OPEN
  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi, I'm ${formData.name}. I am interested in ${formData.issue}.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  // SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // 1️⃣ Admin Email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_ADMIN_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );

      // 2️⃣ User Confirmation Email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_USER_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );

      // 3️⃣ Save to Google Sheet
      await sendToGoogleSheet();

      // 4️⃣ Open WhatsApp
      openWhatsApp();

      // 5️⃣ Show success popup + reset form
      setSent(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        issue: "",
        message: "",
      });

      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      alert("Failed to send message. Try again!");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactcta" className="relative py-24 overflow-hidden text-white">
      {/* SUCCESS POPUP */}
      {sent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white text-gray-900 rounded-2xl px-10 py-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-2 text-center">
              🎉 Message Sent!
            </h3>
            <p className="text-center mb-4">
              Thank you! Our team will contact you shortly.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-2 px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold w-full"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* HEADING */}
      <h2 className="text-center text-5xl font-extrabold mb-4">
        Contact Us
      </h2>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-6 text-3xl my-6">
        <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
        <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
        <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
        <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
      </div>

      {/* FORM */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Email */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-4 bg-white/20 rounded-xl text-white"
              />
              {errors.name && <p className="text-red-300">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-4 bg-white/20 rounded-xl text-white"
              />
              {errors.email && <p className="text-red-300">{errors.email}</p>}
            </div>
          </div>

          {/* Phone + Issue */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-4 bg-white/20 rounded-xl text-white"
              />
              {errors.phone && <p className="text-red-300">{errors.phone}</p>}
            </div>

            <input
              type="text"
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              placeholder="Service Required"
              className="w-full p-4 bg-white/20 rounded-xl text-white"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-4 bg-white/20 rounded-xl text-white"
            ></textarea>
            {errors.message && <p className="text-red-300">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold 
            ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
