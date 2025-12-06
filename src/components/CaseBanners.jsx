import React from "react";

export default function CaseBanners() {
  const banners = [1,2,3];
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {banners.map((b) => (
          <div key={b} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-40 bg-gray-100 flex items-center justify-center">Project image</div>
            <div className="p-4">
              <h4 className="font-semibold mb-2">Project {b}</h4>
              <p className="text-gray-600 text-sm">A short description about the project and results.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
