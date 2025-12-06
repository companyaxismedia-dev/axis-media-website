import React from "react";

export default function FeaturesList() {
  const items = [
    "SEO-friendly & Performance Optimized",
    "Payment gateway / E-commerce ready",
    "CRM & third-party integrations",
    "Secure & scalable architectures",
    "Analytics & conversion tracking",
    "Custom business workflows"
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Why choose our solutions?</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <ul className="space-y-3">
            {items.slice(0,3).map((it,i)=>(<li key={i} className="flex gap-3 items-start"><span className="text-blue-600 font-bold">✓</span><span className="text-gray-600">{it}</span></li>))}
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            {items.slice(3).map((it,i)=>(<li key={i} className="flex gap-3 items-start"><span className="text-blue-600 font-bold">✓</span><span className="text-gray-600">{it}</span></li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}
