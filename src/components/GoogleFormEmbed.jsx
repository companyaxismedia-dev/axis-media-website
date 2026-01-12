import React from "react";

export default function GoogleFormEmbed() {
  return (
    <section
      className="py-16 md:py-24 text-white"
      style={{
        background: "linear-gradient(180deg, #0b3a63 0%, #0a2f52 100%)",
      }}
    >
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">
        Prefer Detailed Form?
      </h2>

      {/* Subtitle */}
      <p className="text-center mb-8 md:mb-10 text-blue-100 px-4">
        Fill our detailed contact form. Your response is saved securely.
      </p>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white px-2 md:px-0">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScKkxPcWcxd_YhT6gQmq_djGFomi-FoLa6BpuuvYLYovd2nTQ/viewform?embedded=true"
          className="block w-full h-[1000px] md:h-[1200px]"
          frameBorder="0"
          loading="lazy"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
}
