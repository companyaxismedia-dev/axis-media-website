import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaGlobe,
  FaShoppingBag,
  FaGem,
  FaTshirt,
  FaPrayingHands,
} from "react-icons/fa";
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

  /* ================= YOUR REAL PORTFOLIO PROJECTS ================= */
  const featuredProjects = [
    {
      slug: "glovia-glamour",
      title: "Glovia Glamour",
      shortDesc:
        "Fashion and suit clothing eCommerce website designed for modern product showcasing, mobile-friendly browsing and better online sales experience.",
      liveLink: "https://gloviaglamour.com/",
      image: "/glovia.png",
      category: "Clothing Store",
      badge: "Live Project",
      icon: <FaTshirt />,
      gradient: "from-pink-100 via-rose-50 to-pink-200",
    },
    {
      slug: "imkaa",
      title: "Imkaa",
      shortDesc:
        "Clothing selling website built with brand-focused UI, product display sections and a customer-friendly shopping experience across devices.",
      liveLink: "https://www.imkaa.com/",
      image: "/imkaa.png",
      category: "Fashion Brand",
      badge: "Live Project",
      icon: <FaShoppingBag />,
      gradient: "from-purple-100 via-fuchsia-50 to-pink-100",
    },
    {
      slug: "astrowalk",
      title: "Astrowalk",
      shortDesc:
        "Puja samagri selling platform created to support spiritual product presentation, category visibility and smooth online shopping flow.",
      liveLink: "https://astrowalk.in",
      image: "/astrowalk.png",
      category: "Puja Samagri Store",
      badge: "Live Project",
      icon: <FaPrayingHands />,
      gradient: "from-orange-100 via-amber-50 to-yellow-100",
    },
    {
      slug: "sri-mandir-shop",
      title: "Sri Mandir Shop",
      shortDesc:
        "Religious and puja products eCommerce website developed for trust, easy product browsing and spiritual commerce experience.",
      liveLink: "https://www.srimandir.shop/",
      image: "/srimandir.png",
      category: "Religious Store",
      badge: "Live Project",
      icon: <FaGem />,
      gradient: "from-yellow-100 via-orange-50 to-amber-100",
    },
  ];

  /* ================= MERGE FEATURED + EXISTING DATA ================= */
  const existingSlugs = new Set(portfolioItems.map((item) => item.slug));

  const mergedPortfolio = [
    ...featuredProjects,
    ...portfolioItems.filter((item) => !existingSlugs.has("") && !featuredProjects.some((fp) => fp.slug === item.slug)),
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
          className="text-3xl md:text-5xl font-extrabold text-center mb-3"
        >
          Website & Digital Project Portfolio by Axis Media
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-sm md:text-lg leading-relaxed">
          Explore our portfolio of websites, digital marketing projects,
          branding solutions and eCommerce stores built with performance,
          SEO, modern UI and real business growth in mind.
        </p>

        {/* FEATURED REAL CLIENT PROJECTS TITLE */}
        <div className="text-center mb-8">
          <p className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs md:text-sm font-semibold text-emerald-700 shadow-sm border border-emerald-100">
            Real Client Websites & eCommerce Projects
          </p>
        </div>

        {/* PORTFOLIO PROJECTS */}
        <div className="overflow-x-auto no-scrollbar py-4">
          <div className="flex gap-8 w-max">
            {mergedPortfolio.slice(0, 12).map((p, index) => {

              return (
                <article
                  key={p.slug || index}
                  className="
    min-w-[200px] md:min-w-[220px]
    bg-white
    rounded-xl
    shadow-md
    p-3
    border border-gray-200
    hover:shadow-lg
    transition
  "
                >
                  {/* IMAGE */}
                  <div className="w-full bg-gray-50 rounded-lg mb-2 p-1 flex items-center justify-center">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="max-h-[120px] object-contain"
                      />
                    ) : (
                      <div className="text-2xl text-gray-500">
                        {p.icon || <FaGlobe />}
                      </div>
                    )}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-sm font-semibold mb-1 leading-tight">
                    {p.title}
                  </h3>

                  {/* CATEGORY */}
                  {p.category && (
                    <p className="text-[10px] text-emerald-700 mb-1">
                      {p.category}
                    </p>
                  )}

                  {/* DESCRIPTION */}
                  <p className="text-[11px] text-gray-600 mb-2 line-clamp-2">
                    {p.shortDesc}
                  </p>

                  {/* ACTIONS */}
                  <div className="flex justify-between items-center">
                    <NavLink
                      to={`/portfolio/${p.slug}`}
                      className="px-2 py-1 bg-yellow-500 text-black rounded text-[10px]"
                    >
                      View
                    </NavLink>

                    {p.liveLink ? (
                      <a
                        href={p.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] text-blue-600"
                      >
                        Live
                      </a>
                    ) : (
                      <span className="text-gray-400 text-[10px]">No demo</span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* TECHNOLOGIES */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
          <h3 className="text-2xl md:text-4xl font-extrabold text-center mb-10">
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
                  className="h-24 w-24 md:h-28 md:w-28 mx-auto object-contain mb-4"
                />
                <h4 className="text-xl md:text-2xl font-semibold mb-2">
                  {tech.title}
                </h4>
                <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}