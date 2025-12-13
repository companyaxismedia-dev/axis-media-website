import React from "react";

export default function CaseBanners() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Growth Campaign",
      img: "/E-Commerce Growth Campaign.webp",
      desc: "We redesigned their eCommerce website, improved speed by 60% and increased conversions with targeted ad campaigns.",
    },
    {
      id: 2,
      title: "Brand Awareness & Social Media Boost",
      img: "/Brand Awareness & Social Media Boost.webp",
      desc: "A complete digital branding solution including content strategy, high-quality creatives and paid reach campaigns.",
    },
    {
      id: 3,
      title: "SEO Ranking & Lead Generation",
      img: "/SEO Ranking & Lead Generation.webp",
      desc: "Achieved top Google search rankings for high-value keywords and generated steady monthly business leads.",
    }
  ];

  return (
    <section className="py-20 bg-[#F8F9FB]">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        Case Studies
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden 
                       hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            {/* IMAGE SECTION */}
            <div className="h-52 w-full overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {p.title}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                {p.desc}
              </p>

              <button className="mt-2 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                View Full Case Study →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
