// src/pages/PortfolioDetailPage.jsx
import React from "react";
import { useParams, NavLink } from "react-router-dom";
import portfolioItems from "../data/portfolioData";

export default function PortfolioDetailPage() {
  const { slug } = useParams();
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <NavLink to="/portfolio" className="text-blue-600 underline">
            Back to Portfolio
          </NavLink>
        </div>
      </section>
    );
  }

  const { title, image, details, features, tech, liveLink, repoLink, auth } =
    project;

  const allTechIcons = [
    {
      name: ".NET",
      img: "/DOTNET.webp",
      desc:
        ".NET framework used for enterprise-level backend systems and API development with high performance.",
    },
    {
      name: "WordPress",
      img:
        "/WordPress.webp",
      desc:
        "WordPress CMS used for dynamic websites, blogs, business portals and ecommerce solutions.",
    },
    {
      name: "MERN Stack",
      img: "/mern.webp",
      desc:
        "Full-stack JavaScript framework (MongoDB, Express, React, Node) for modern fast web apps.",
    },
    {
      name: "Shopify",
      img:
        "/Shopifywebp.png",
      desc:
        "Shopify is a leading e-commerce platform that allows individuals and businesses to create, manage, and grow online stores without needing advanced technical skills.",
    },
    {
      name: "Java",
      img: "/Java.webp",
      desc:
        "Java used for secure, reliable, enterprise-level backend and server-side processing.",
    },
    {
      name: "Python",
      img: "/Python.webp",
      desc:
        "Python used for AI, automation, ML systems, backend APIs and data-driven apps.",
    },
    {
      name: "C++",
      img: "/C++.webp",
      desc:
        "C++ used for high-performance modules, custom engines, and optimized algorithms.",
    },
    {
      name: "MySQL",
      img: "/MySQL.webp",
      desc:
        "MySQL used for secure databases, login systems, orders, checkout & admin dashboards.",
    },
    {
      name: "MongoDB",
      img: "/MongoDB.webp",
      desc:
        "MongoDB NoSQL DB used for real-time dynamic apps, dashboards and fast data operations.",
    },
    {
      name: "Node.js",
      img:
        "/Node.webp",
      desc:
        "Node.js is an open-source, server-side JavaScript runtime environment that allows developers to run JavaScript outside the browser. It is built on Google Chrome’s V8 engine and is widely used to build fast, scalable, and high-performance web applications.",
    },
    {
      name: "Bootstrap5",
      img:
        "/Bootstrap.webp",
      desc:
        "Bootstrap is a popular front-end framework used to build responsive, mobile-first, and modern websites. It is based on HTML, CSS, and JavaScript and provides ready-made design components and utilities that help developers create professional user interfaces quickly.",
    },
    {
      name: "JavaScript",
      img:
        "/JavaScript.webp",
      desc:
        "JavaScript is a powerful programming language used to create dynamic, interactive, and responsive web applications. It runs in the browser as well as on servers (using Node.js) and works alongside HTML and CSS to build modern websites.",
    },
    {
      name: "CSS3",
      img:
        "/CSS3.webp",
      desc:
        "CSS3 (Cascading Style Sheets Level 3) is used to style and design web pages. It controls how HTML elements look on the screen, including layout, colors, fonts, spacing, animations, and responsiveness. CSS3 helps make websites attractive, modern, and user-friendly.",
    },
    {
      name: "HTML",
      img:
        "/HTML.webp",
      desc:
        "HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. It defines the basic structure of a web page, such as headings, paragraphs, images, links, forms, and other elements..",
    },
    {
      name: "Hostinger",
      img:
        "/hostinger-logowebp.png",
      desc:
        "Hostinger is a popular web hosting service provider that offers affordable and reliable hosting solutions for websites, blogs, and online businesses. It provides easy-to-use tools, fast performance, and strong security features for beginners as well as professionals.",
    },
    
  ];

  return (
    <main className="pt-24 pb-20 bg-[#EEF5FF] min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-600 mb-3">
          <NavLink to="/" className="hover:underline text-blue-600">
            Home
          </NavLink>{" "}
          /{" "}
          <NavLink to="/portfolio" className="hover:underline text-blue-600">
            Portfolio
          </NavLink>{" "}
          / <span className="font-semibold">{title}</span>
        </p>

        {/* TOP SECTION */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2 border border-gray-200 mb-10">
          <div className="p-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-gray-700 mb-6 text-lg">{details}</p>

            <h3 className="text-2xl text-gray-900 font-semibold mb-3">
              Key Features
            </h3>
            <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <h3 className="text-xl text-gray-900 font-semibold mb-2">
              Authentication / User Accounts
            </h3>
            <p className="text-gray-700 mb-6">{auth}</p>

            <div className="flex gap-4 items-center">
              <NavLink
                to="/contact"
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
              >
                Get a Free Consultation
              </NavLink>

              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Live Demo →
                </a>
              )}

              {repoLink && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Repository
                </a>
              )}
            </div>
          </div>

          <div className="h-80 lg:h-auto">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* ========== TECHNOLOGY BREAKDOWN (Gradient FIXED) ========== */}
        <section
          className="mt-12 grid md:grid-cols-3 gap-6 p-6 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #DFF3FF, #E8F5E9)",
          }}
        >
          {[
            { title: "Frontend", list: tech.frontend },
            { title: "Backend & API", list: tech.backend },
            {
              title: "Database & Deployment",
              list: tech.database.concat([
                `Deployment: ${tech.deployment.join(", ")}`,
              ]),
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
            >
              <h4 className="font-semibold text-gray-900 text-xl mb-3">
                {section.title}
              </h4>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                {section.list.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ========== ICONS SECTION ========== */}
        <section className="mt-12 bg-white p-10 rounded-2xl shadow border border-gray-200">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Technologies Used in This Project
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allTechIcons.map((t, i) => (
              <div key={i} className="text-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-24 w-24 mx-auto mb-4 object-contain"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t.name}
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== DEVELOPMENT FLOW ========== */}
        <section className="mt-12 bg-white p-10 rounded-2xl shadow border border-gray-200">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            A → Z Complete Development Flow
          </h3>

          <ol className="list-decimal pl-5 text-gray-700 space-y-3 text-lg">
            <li>Client requirement discussion & feature mapping.</li>
            <li>UI/UX design in Figma with branding guidelines.</li>
            <li>Component-based development using React / HTML / CSS.</li>
            <li>
              Backend development with Node / .NET / Python depending on
              project.
            </li>
            <li>Database setup (MySQL / MongoDB).</li>
            <li>Admin panel + customer dashboard development.</li>
            <li>API integration, payment gateways, automation.</li>
            <li>Testing, debugging & speed optimization.</li>
            <li>Deployment on AWS / Vercel / cPanel.</li>
            <li>Post-launch support & maintenance.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
