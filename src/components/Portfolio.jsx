import React from "react";
import { NavLink } from "react-router-dom";
import portfolioItems from "../data/portfolioData";

export default function Portfolio() {
  const techIcons = [
    {
      title: "HTML5",
      img: "/HTML.webp",
      desc: "SEO-friendly HTML structure for fast professional websites.",
    },
    {
      title: "CSS3",
      img: "/CSS3.webp",
      desc: "Modern UI, animations, transitions & responsive layouts.",
    },
    {
      title: "JavaScript",
      img: "/JavaScript.webp",
      desc: "Interactive UI, dynamic features & API integration.",
    },
    {
      title: "Java",
      img: "/Java.webp",
      desc: "Secure enterprise-level backend systems.",
    },
    {
      title: "Python",
      img: "/Python.webp",
      desc: "AI, automation, backend APIs & dashboards.",
    },
    {
      title: "C++",
      img: "/C++.webp",
      desc: "High-performance computing & optimized algorithms.",
    },
    {
      title: "MySQL",
      img: "/MySQL.webp",
      desc: "Secure relational databases for scalable applications.",
    },
    {
      title: "MongoDB",
      img: "/MongoDB.webp",
      desc: "Fast NoSQL databases for modern web apps.",
    },
    {
      title: ".NET",
      img: "/DOTNET.webp",
      desc: ".NET framework for enterprise APIs & applications.",
    },
    {
      title: "WordPress",
      img: "/WordPress.webp",
      desc: "CMS for business websites, blogs & eCommerce platforms.",
    },
  ];

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="
        py-20 
        bg-gradient-to-b 
        from-[#E8FBEA] 
        via-[#DFF9E8] 
        to-[#CCF3DA] 
        text-gray-900
      "
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* MAIN HEADING */}
        <h2
          id="portfolio-heading"
          className="text-4xl md:text-5xl font-extrabold text-center mb-3"
        >
          Website & Digital Project Portfolio by Axis Media
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
          Explore our portfolio of websites, digital marketing projects,
          and branding solutions built with performance, SEO, and modern UI.
        </p>

        {/* PORTFOLIO PROJECTS */}
        <div className="overflow-x-auto no-scrollbar py-4">
          <div className="flex gap-8 w-max">
            {portfolioItems.slice(0, 9).map((p) => (
              <article
                key={p.slug}
                className="
                  min-w-[420px] 
                  bg-white 
                  rounded-3xl 
                  shadow-xl 
                  p-6 
                  border border-gray-200 
                  hover:shadow-2xl 
                  transition
                "
              >
                <div className="h-52 overflow-hidden rounded-xl mb-4">
                  <img
                    src={p.image}
                    alt={`${p.title} website project by Axis Media`}
                    width="420"
                    height="210"
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-700 hover:scale-110"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-700 mb-5">{p.shortDesc}</p>

                <div className="flex justify-between items-center">
                  <NavLink
                    to={`/portfolio/${p.slug}`}
                    className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600
                    text-black font-semibold rounded-lg"
                  >
                    View Case Study →
                  </NavLink>

                  {p.liveLink ? (
                    <a
                      href={p.liveLink}
                      className="text-blue-600 underline text-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Website
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">No demo</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* TECHNOLOGIES */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
            Technologies & Tools We Use
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {techIcons.map((tech, i) => (
              <div key={i} className="text-center">
                <img
                  src={tech.img}
                  alt={`${tech.title} technology`}
                  width="112"
                  height="112"
                  loading="lazy"
                  className="h-28 w-28 mx-auto object-contain mb-4"
                />
                <h4 className="text-2xl font-semibold mb-2">{tech.title}</h4>
                <p className="text-gray-700 text-lg">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
