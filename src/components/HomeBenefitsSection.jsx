import React from "react";

export default function HomeBenefitsSection() {
  const cards = [
    {
      title: "Ongoing Expert Support",
      desc: "Our role doesn’t end after launch. We help with bug fixes, updates, monitoring and improvements so your website always stays secure and optimized.",
      border: "border-red-400",
      pos: "top-40 left-1/2 -translate-x-1/2",
    },
    {
      title: "Better Security & Reliability",
      desc: "A safe website builds trust. Our CMS development includes strong backups, regular updates and advanced protection to keep your business secure.",
      border: "border-green-400",
      pos: "top-1/3 right-10 -translate-y-1/2",
    },
    {
      title: "Scalable For Future Growth",
      desc: "As your business grows, your website should grow too. Add new pages, features or integrations anytime without rebuilding the entire site.",
      border: "border-cyan-400",
      pos: "top-1/3 left-10 -translate-y-1/2",
    },
    {
      title: "Full Control Of Content",
      desc: "Easily edit pages, blogs, products and images anytime without needing a developer — complete freedom to update your content.",
      border: "border-purple-400",
      pos: "bottom-40 left-16",
    },
    {
      title: "Improved SEO Performance",
      desc: "We build clean, fast-loading CMS websites that help boost your search engine ranking and attract more visitors.",
      border: "border-orange-400",
      pos: "bottom-40 right-16",
    },
    {
      title: "Smooth Management",
      desc: "Our CMS solutions make website handling easy, even for non-technical users. Manage your entire site effortlessly.",
      border: "border-yellow-400",
      pos: "bottom-10 left-1/2 -translate-x-1/2",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-center text-gray-900">
          Key Benefits Of Choosing Our CMS Development Company
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4 mb-20 text-lg">
          Our CMS website development services make content easy to manage,
          improve online performance, and support business growth.
        </p>

        {/* FIXED LARGE WRAPPER */}
        <div className="relative h-[1050px]">

          {cards.map((card, i) => (
            <div
              key={i}
              className={`absolute ${card.pos} bg-white p-6 w-[260px] rounded-2xl shadow-lg border-2 ${card.border}`}
            >
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}

          {/* CENTER IMAGE MOVED DOWN */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="/Benefits.webp"
              alt="Benefits"
              className="w-[420px] h-[420px] rounded-full object-cover object-[center_top] shadow-xl border-8 border-white"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
