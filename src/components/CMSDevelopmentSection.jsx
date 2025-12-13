import React, { useState } from "react";
import {
  FaCode,
  FaLaptopCode,
  FaSync,
  FaPuzzlePiece,
  FaLink,
  FaTools,
  FaCheckCircle,
  FaWordpress,
  FaDrupal,
  FaJoomla,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPhp,
  FaCloud,
} from "react-icons/fa";

import {
  SiCraftcms,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiLaravel,
  SiDotnet,
  SiContentful,
  SiStrapi,
  SiGhost,
  SiSanity,
} from "react-icons/si";

export default function CMSDevelopmentSection() {
  const [open, setOpen] = useState(null);

  /* -------------------------- SERVICES --------------------------- */
  const services = [
    {
      icon: <FaCode className="text-purple-500 text-4xl" />,
      title: "Custom CMS Development",
      desc: "We design and build custom CMS solutions tailored to your business needs.",
    },
    {
      icon: <FaLaptopCode className="text-orange-500 text-4xl" />,
      title: "CMS Website Design & Development",
      desc: "Modern, fast, and user-friendly CMS website design & development.",
    },
    {
      icon: <FaSync className="text-green-500 text-4xl" />,
      title: "CMS Migration & Upgrade",
      desc: "Migrate your CMS with zero downtime and improved scalability & SEO.",
    },
    {
      icon: <FaPuzzlePiece className="text-cyan-600 text-4xl" />,
      title: "Plugin & Module Development",
      desc: "Custom plugins, add-ons, and modules without affecting performance.",
    },
    {
      icon: <FaLink className="text-yellow-600 text-4xl" />,
      title: "API & Third-Party Integration",
      desc: "CRM, eCommerce, marketing tools, automation and more integrations.",
    },
    {
      icon: <FaTools className="text-pink-500 text-4xl" />,
      title: "CMS Support & Maintenance",
      desc: "Updates, monitoring, bug fixes, optimization & long-term stability.",
    },
  ];

  /* ------------------------ TECH STACK --------------------------- */
  const techStack = [
    {
      title: "CMS Platforms",
      items: [
        { name: "WordPress", icon: <FaWordpress className="text-blue-600 text-xl" /> },
        { name: "Drupal", icon: <FaDrupal className="text-blue-700 text-xl" /> },
        { name: "Joomla", icon: <FaJoomla className="text-green-600 text-xl" /> },
        { name: "Craft CMS", icon: <SiCraftcms className="text-orange-600 text-xl" /> },
      ],
    },
    {
      title: "Headless & Modern CMS",
      items: [
        { name: "Strapi", icon: <SiStrapi className="text-indigo-600 text-xl" /> },
        { name: "Contentful", icon: <SiContentful className="text-blue-500 text-xl" /> },
        { name: "Sanity", icon: <SiSanity className="text-red-500 text-xl" /> },
        { name: "Ghost", icon: <SiGhost className="text-gray-700 text-xl" /> },
      ],
    },
    {
      title: "Frontend Technologies",
      items: [
        { name: "React.js", icon: <FaReact className="text-cyan-400 text-xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black text-xl" /> },
        { name: "Vue.js", icon: <FaVuejs className="text-green-500 text-xl" /> },
        { name: "Angular", icon: <FaAngular className="text-red-600 text-xl" /> },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL", icon: <SiMysql className="text-blue-500 text-xl" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800 text-xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-xl" /> },
      ],
    },
    {
      title: "Cloud & Hosting",
      items: [
        { name: "AWS", icon: <FaCloud className="text-yellow-600 text-xl" /> },
        { name: "Google Cloud", icon: <FaCloud className="text-blue-500 text-xl" /> },
        { name: "Azure", icon: <FaCloud className="text-purple-600 text-xl" /> },
        { name: "Digital Ocean", icon: <FaCloud className="text-blue-700 text-xl" /> },
      ],
    },
    {
      title: "Backend Technologies",
      items: [
        { name: "PHP", icon: <FaPhp className="text-indigo-600 text-xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-xl" /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-500 text-xl" /> },
        { name: ".NET", icon: <SiDotnet className="text-blue-700 text-xl" /> },
      ],
    },
  ];

  /* ----------------------- CASE STUDIES --------------------------- */
  const caseStudies = [
    {
      img: "/EV-Brand.webp",
      title: "EV Brand: Boosting Traffic & Engagement",
      desc: "Multilingual CMS with SEO for an EV brand to grow traffic & engagement.",
    },
    {
       img: "/GSEZ.webp",
      title: "GSEZ: Strengthening Brand Image",
      desc: "A feature-rich WordPress CMS improving digital presence & trust.",
    },
    {
      img: "/Eurofish.webp",

      title: "Eurofish: Modern CMS Migration",
      desc: "CMS redesign + high performance + modern features for global brand.",
    },
  ];

  const processSteps = [
    "Discovery & Consultation",
    "Planning & Strategy",
    "Design & Prototyping",
    "Development & Integration",
    "Testing & Quality Assurance",
    "Launch & Ongoing Support",
  ];

  return (
    <div className="py-12">

      {/* ------------------------ SERVICES ------------------------ */}
      <h2 className="text-4xl font-extrabold text-center mb-4">
        Comprehensive CMS Development Services
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
        Fast, secure, scalable, and designed for long-term business growth.
      </p>

      <div className="grid md:grid-cols-3 gap-10 mb-20">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
            <div>{s.icon}</div>
            <h3 className="text-xl font-bold mt-4 mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* ---------------------- CASE STUDIES ---------------------- */}
      <h2 className="text-4xl font-extrabold text-center mb-10">
        Proven Success with Our CMS Development Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mb-20">
        {caseStudies.map((c, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
            <img src={c.img} className="rounded-xl h-48 w-full object-cover mb-4" />
            <h3 className="text-lg font-bold">{c.title}</h3>
            <p className="text-gray-600 mb-4">{c.desc}</p>
            <button className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              View Case Study
            </button>
          </div>
        ))}
      </div>

      {/* ------------------- TECH STACK ACCORDION ------------------- */}
      <h2 className="text-4xl font-extrabold text-center mb-4">
        Powerful Tech Stack Behind Our CMS Services
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
        We use advanced, scalable & secure technologies to deliver custom CMS solutions.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-20 px-4">
        {techStack.map((section, index) => (
          <div key={index} className="w-full">

            <div
              className="bg-white rounded-xl px-6 py-5 border shadow-md cursor-pointer flex justify-between items-center"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <span className="text-2xl">{open === index ? "▴" : "▾"}</span>
            </div>

            {open === index && (
              <div className="bg-white border border-t-0 rounded-b-xl shadow-md px-6 py-6 mt-1">
                <div className="flex flex-wrap gap-4">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-2 bg-white border rounded-xl hover:bg-black hover:text-white transition cursor-pointer"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        ))}
      </div>

      {/* ------------------ LEFT TEXT + RIGHT BIG IMAGE ------------------ */}
      <div className="mt-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-6">
            Our Step-by-Step CMS Website Development Process
          </h2>
          <p className="text-gray-600 mb-6">
            As a trusted CMS development company, we follow a clear process to build websites
            that are simple to manage, secure, and built for growth.
          </p>

          {processSteps.map((step, i) => (
            <div key={i} className="flex gap-4 mb-5">
              <div className="text-orange-500 text-xl">●</div>
              <p className="font-semibold">{step}</p>
            </div>
          ))}
        </div>

         <img
          src="/CMS-Development.webp"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>

      {/* ---------------------- INDUSTRIES SECTION ---------------------- */}
      <div className="relative my-28">
        <img
          src="/INDUSTRIES.webp"

          className="w-full h-[450px] object-cover rounded-xl opacity-90"
        />

        <div className="absolute top-1/2 w-full flex justify-center gap-20 text-white text-2xl font-bold">
          <p>Education</p>
          <p>Healthcare</p>
          <p>Media & Publishing</p>
          <p>Real Estate</p>
        </div>
      </div>

      {/* ---------------------- WHY TRUST US ---------------------- */}
      <h2 className="text-4xl font-extrabold text-center mb-6">
        Why Businesses Trust Our CMS Development Company
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
        We provide secure, scalable, modern CMS solutions trusted by growing brands.
      </p>

      <div className="grid md:grid-cols-5 gap-10 text-center">
        {[
          "24+ Years of Expertise",
          "Custom CMS Solutions",
          "Skilled CMS Developers",
          "End-to-End Support",
          "Proven ROI-Driven Approach",
        ].map((item, i) => (
          <div key={i}>
            <h3 className="font-bold text-xl mb-2">{item}</h3>
            <p className="text-gray-600 text-sm">
              Professional solutions delivering real business results.
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
