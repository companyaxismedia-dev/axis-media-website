// src/components/Portfolio.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import portfolioItems from "../data/portfolioData";

export default function Portfolio() {
  const techIcons = [
    {
      title: "HTML5",
      img: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
      desc: "SEO-friendly HTML structure for fast professional websites."
    },
    {
      title: "CSS3",
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png",
      desc: "Modern UI, animations, transitions & responsive layouts."
    },
    {
      title: "JavaScript",
      img: "http://pluspng.com/img-png/logo-javascript-png--784.png",
      desc: "Interactive UI, dynamic features, API integration & automation."
    },
    {
      title: "Java",
      img: "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.jpg",
      desc: "Secure enterprise-level backend systems."
    },
    {
      title: "Python",
      img: "https://www.clipartmax.com/png/middle/434-4343754_python-logo.png",
      desc: "AI, ML, automation, backend APIs & dashboards."
    },
    {
      title: "C++",
      img: "https://www.freeiconspng.com/uploads/c--logo-icon-0.png",
      desc: "High performance computing & optimized algorithms."
    },
    {
      title: "MySQL",
      img: "https://www.vhv.rs/dpng/d/543-5438423_mysql-logo-hd-png-download.png",
      desc: "Secure relational database for professional apps."
    },
    {
      title: "MongoDB",
      img: "https://vectorseek.com/wp-content/uploads/2023/10/Mongodb-Icon-Logo-Vector.svg-.png",
      desc: "Fast NoSQL DB used for modern dynamic web applications."
    },
    {
      title: ".NET",
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png",
      desc: ".NET framework used for enterprise backends & APIs."
    },
    {
      title: "WordPress",
      img: "https://static.vecteezy.com/system/resources/previews/020/336/054/original/wordpress-logo-wordpress-icon-transparent-png-free-vector.jpg",
      desc: "CMS for dynamic websites, ecommerce & business portals."
    },
  ];

  return (
    <section
      id="portfolio"
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

        {/* TITLE */}
        <h2 className="text-5xl font-extrabold text-center mb-3 text-gray-900">
          Our Portfolio
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 text-lg">
          Selected projects — built with modern UI, branding, performance and SEO.
        </p>

        {/* PORTFOLIO CAROUSEL */}
        <div className="overflow-x-auto no-scrollbar py-4">
          <div className="flex gap-8 w-max">
            {portfolioItems.slice(0, 9).map((p) => (
              <article
                key={p.slug}
                className="
                  min-w-[440px] 
                  bg-white 
                  text-gray-900 
                  rounded-3xl 
                  shadow-xl 
                  p-6 
                  flex-shrink-0 
                  border border-gray-200 
                  hover:shadow-2xl 
                  transition
                "
              >
                <div className="h-52 overflow-hidden rounded-xl mb-4">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-700 mb-5">{p.shortDesc}</p>

                <div className="flex justify-between items-center">
                  <NavLink
                    to={`/portfolio/${p.slug}`}
                    className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg"
                  >
                    More Details →
                  </NavLink>

                  {p.liveLink ? (
                    <a
                      href={p.liveLink}
                      className="text-blue-600 underline text-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">No demo</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* TECHNOLOGY SECTION */}
        <div className="mt-16 bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
          <h3 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
            Languages, Tools & Technologies We Use
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {techIcons.map((tech, i) => (
              <div key={i} className="text-center">
                <img
                  src={tech.img}
                  alt={tech.title}
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
