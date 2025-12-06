import React from "react";

export default function WebsiteDev() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Website Development</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Fast, secure and SEO-ready websites. We build both simple business sites and complex MERN apps.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold mb-2">Business Websites</h4>
          <p className="text-gray-600">Showcase your service & capture leads.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold mb-2">E-commerce</h4>
          <p className="text-gray-600">Complete online store solutions.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold mb-2">Custom Apps</h4>
          <p className="text-gray-600">MERN stack, integrations & admin panels.</p>
        </div>
      </div>
    </div>
  );
}
