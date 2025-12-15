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

  /* ---------------- SERVICES ---------------- */
  const services = [
    {
      icon: <FaCode className="text-purple-500 text-4xl" />,
      title: "Custom CMS Development",
      desc: "We build custom CMS development solutions tailored to your business goals, scalability, and SEO performance.",
    },
    {
      icon: <FaLaptopCode className="text-orange-500 text-4xl" />,
      title: "CMS Website Design & Development",
      desc: "Professional CMS website design and development services focused on speed, UX, and conversions.",
    },
    {
      icon: <FaSync className="text-green-500 text-4xl" />,
      title: "CMS Migration & Upgrade Services",
      desc: "Seamless CMS migration and upgrades with zero data loss and improved SEO rankings.",
    },
    {
      icon: <FaPuzzlePiece className="text-cyan-600 text-4xl" />,
      title: "CMS Plugin & Module Development",
      desc: "Custom CMS plugins, modules, and extensions without compromising performance.",
    },
    {
      icon: <FaLink className="text-yellow-600 text-4xl" />,
      title: "API & Third-Party Integration",
      desc: "Integrate CRM, marketing tools, payment gateways, and automation systems.",
    },
    {
      icon: <FaTools className="text-pink-500 text-4xl" />,
      title: "CMS Support & Maintenance",
      desc: "Ongoing CMS support, security updates, monitoring, and performance optimization.",
    },
  ];

  /* ---------------- TECH STACK ---------------- */
  const techStack = [
    {
      title: "CMS Platforms",
      items: [
        { name: "WordPress", icon: <FaWordpress /> },
        { name: "Drupal", icon: <FaDrupal /> },
        { name: "Joomla", icon: <FaJoomla /> },
        { name: "Craft CMS", icon: <SiCraftcms /> },
      ],
    },
    {
      title: "Headless & Modern CMS",
      items: [
        { name: "Strapi", icon: <SiStrapi /> },
        { name: "Contentful", icon: <SiContentful /> },
        { name: "Sanity", icon: <SiSanity /> },
        { name: "Ghost", icon: <SiGhost /> },
      ],
    },
    {
      title: "Frontend Technologies",
      items: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "Angular", icon: <FaAngular /> },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      title: "Cloud & Hosting",
      items: [
        { name: "AWS", icon: <FaCloud /> },
        { name: "Google Cloud", icon: <FaCloud /> },
        { name: "Azure", icon: <FaCloud /> },
        { name: "Digital Ocean", icon: <FaCloud /> },
      ],
    },
    {
      title: "Backend Technologies",
      items: [
        { name: "PHP", icon: <FaPhp /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: ".NET", icon: <SiDotnet /> },
      ],
    },
  ];

  const processSteps = [
    "Discovery & Consultation",
    "Planning & CMS Strategy",
    "UI/UX Design & Prototyping",
    "CMS Development & Integration",
    "Testing & Quality Assurance",
    "Launch & Ongoing Support",
  ];

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="cms-heading">
      {/* MAIN SECTION TITLE */}
      <h2
        id="cms-heading"
        className="text-4xl font-extrabold text-center mb-4"
      >
        CMS Website Development Services
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
        We are a trusted CMS development company offering scalable, secure, and SEO-friendly
        CMS website development services for growing businesses.
      </p>

      {/* SERVICES */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 mb-24">
        {services.map((s, i) => (
          <article
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition"
          >
            {s.icon}
            <h3 className="text-xl font-bold mt-4 mb-2">{s.title}</h3>
            <p className="text-gray-600 leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>

      {/* PROCESS */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h3 className="text-3xl font-bold mb-6">
            Our CMS Website Development Process
          </h3>
          <p className="text-gray-600 mb-6">
            Our proven CMS development process ensures secure, high-performance websites
            built for long-term growth.
          </p>

          {processSteps.map((step, i) => (
            <div key={i} className="flex gap-3 mb-4">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span className="font-medium">{step}</span>
            </div>
          ))}
        </div>

        <img
          src="/CMS-Development.webp"
          alt="CMS Website Development Process"
          width="600"
          height="450"
          loading="lazy"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>

      {/* TECH STACK */}
      <h3 className="text-3xl font-bold text-center mb-10">
        Technology Stack for CMS Development
      </h3>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
        {techStack.map((section, index) => (
          <div key={index}>
            <div
              className="bg-white rounded-xl px-6 py-5 border shadow-md cursor-pointer flex justify-between items-center"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <h4 className="font-semibold">{section.title}</h4>
              <span>{open === index ? "−" : "+"}</span>
            </div>

            {open === index && (
              <div className="bg-white border border-t-0 rounded-b-xl shadow-md px-6 py-6">
                <div className="flex flex-wrap gap-4">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 border rounded-xl text-sm hover:bg-black hover:text-white transition"
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
    </section>
  );
}
