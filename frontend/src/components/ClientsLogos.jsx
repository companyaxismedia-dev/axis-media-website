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
    <section
      className="py-20 bg-gray-50"
      aria-labelledby="trusted-clients-heading"
    >
      {/* SECTION HEADING */}
      <h2
        id="trusted-clients-heading"
        className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-900"
      >
        Trusted by Leading Brands & Companies
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md
              flex items-center justify-center transition hover:shadow-lg"
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1} - Axis Media Digital Marketing`}
                width="160"
                height="48"
                loading="lazy"
                className="object-contain h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/160x48?text=Client+Logo";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
