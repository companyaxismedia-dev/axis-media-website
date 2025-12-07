// src/pages/ContactCTAPage.jsx
import React from "react";
import Contact from "../components/ContactCTA";

export default function ContactCTAPage() {
  return (
    <div className="pt-24" style={{ backgroundColor: "#073762" }}> 
      {/* Same Blue Color as ContactCTA */}

      <Contact />  {/* Component perfect blue background */}

      {/* Delete White Section OR make it transparent */}
      <div className="container mx-auto px-6 py-16 text-white">
        <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>

        <p className="text-center mb-12 max-w-3xl mx-auto text-white/80">
          Reach out to us for your project requirements. Our team will respond quickly to help you grow your business.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 text-white shadow-lg rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Address</h3>
            <p>123 Axis Media Street, City, Country</p>
          </div>

          <div className="bg-white/10 text-white shadow-lg rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Contact</h3>
            <p>
              Email: contact@axismedia.com<br />
              Phone: +91 12345 67890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
