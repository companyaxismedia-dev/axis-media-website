// src/pages/PackagesPage.jsx
import React from "react";
import Packages from "../components/Packages";

export default function PackagesPage() {
  return (
    <div className="pt-0"> 
      {/* No background + No top padding */}
      <Packages />

      <div className="container mx-auto px-6 py-16 text-black">
        <h2 className="text-4xl font-bold mb-6 text-center">Our Packages</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Flexible packages designed for startups, SMEs, and enterprises. 
          Choose the plan that fits your business requirements.
        </p>
      </div>
    </div>
  );
}
