// src/pages/ServicesGridPage.jsx
import React from "react";
import ServicesGrid from "../components/ServicesGrid";

export default function ServicesGridPage() {
  return (
    <div className="pt-24" style={{ backgroundColor: "#87CEFA" }}> {/* Sky Blue */}
      <ServicesGrid />

      <div className="container mx-auto px-4 py-12 text-black">
        <h2 className="text-3xl font-bold mb-6">Our Complete Services</h2>
        <p className="mb-8 max-w-2xl">
          Axis Media offers a wide range of services to cater to all your business needs.
          Each service is designed to provide maximum ROI and professional results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Website Development</h3>
            <p>Build responsive, modern, and SEO-friendly websites to grow your online presence.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">E-commerce Websites</h3>
            <p>Launch your online store with user-friendly UI/UX and secure payment integration.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Graphic Designing</h3>
            <p>Professional logos, banners, social media creatives, and brand identity design.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Video Editing</h3>
            <p>High-quality video production and editing to enhance your brand storytelling.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">SEO Services</h3>
            <p>Optimize your website content and structure to rank higher on Google search results.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Social Media Management</h3>
            <p>Manage and grow your social media platforms with engaging content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
