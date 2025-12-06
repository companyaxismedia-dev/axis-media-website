import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Axis Media?</h2>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold">Results Driven</h4>
          <p className="text-gray-600">We focus on ROI and measurable growth.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold">Experienced Team</h4>
          <p className="text-gray-600">Certified marketers and developers.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold">Transparent Pricing</h4>
          <p className="text-gray-600">No hidden fees, clear reports.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold">Support</h4>
          <p className="text-gray-600">Dedicated account managers.</p>
        </div>
      </div>
    </div>
  );
}
