// src/pages/GoogleAdsPage.jsx
import React from "react";
import GoogleAds from "../components/GoogleAds";

export default function GoogleAdsPage() {
  return (
    <div className="pt-24" style={{ backgroundColor: "#FFFACD" }}> {/* Light Yellow */}
      <GoogleAds />

      <div className="container mx-auto px-4 py-12 text-black">
        <h2 className="text-3xl font-bold mb-6 text-center">Google Ads Services</h2>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          Run targeted Google Ads campaigns to reach high-intent customers and maximize ROI.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Search Ads</h3>
            <p>Appear on top of Google search results for relevant keywords.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Display Ads</h3>
            <p>Show banner ads on millions of websites to build brand awareness.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Shopping Ads</h3>
            <p>Promote your products directly on Google search with attractive ads.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Video Ads</h3>
            <p>Create impactful video campaigns on YouTube and partner sites.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Remarketing</h3>
            <p>Re-engage visitors who have interacted with your website or ads.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Performance Max</h3>
            <p>Full automation campaigns across all Google channels for maximum ROI.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
