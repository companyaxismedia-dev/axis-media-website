import React from "react";

const logos = [
  "/assets/logo1.png",
  "/assets/logo2.png",
  "/assets/logo3.png",
  "/assets/logo4.png",
  "/assets/logo5.png",
];

export default function ClientsLogos() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-8">Trusted by companies</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
        {logos.map((l, i) => (
          <div key={i} className="bg-white p-4 rounded shadow text-center">
            {/* Put your real logos in public/assets/ */}
            <img src={l} alt={`logo-${i}`} className="mx-auto h-10 object-contain" onError={(e)=>{e.target.src='https://via.placeholder.com/150x40?text=Logo'}}/>
          </div>
        ))}
      </div>
    </div>
  );
}
