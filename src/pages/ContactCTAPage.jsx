// src/pages/ContactCTAPage.jsx
import React from "react";
import Contact from "../components/ContactCTA";

export default function ContactCTAPage() {
  return (
    <div className="pt-24 bg-[#073762] text-white">
      
      {/* Contact Form Section */}
      <Contact />

      {/* Extra Info Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Get in Touch
        </h2>

        <p className="text-center mb-12 max-w-3xl mx-auto text-white/80">
          Reach out to us for your project requirements. Our team will respond quickly to help you grow your business.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Address</h3>
            <p>Axis Media, India</p>
          </div>

          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Contact</h3>
            <p>
              Email: companyaxismedia@gmail.com <br />
              Phone: +91 98715 84001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
