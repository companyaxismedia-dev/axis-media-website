import React from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaRocket,
  FaUsers,
  FaBullseye,
  FaLightbulb,
} from "react-icons/fa";
import portfolioItems from "../data/portfolioData";

export default function PortfolioDetailPage() {
  const { slug } = useParams();
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Project not found
          </h1>
          <NavLink to="/portfolio" className="text-blue-600 underline">
            Back to Portfolio
          </NavLink>
        </div>
      </section>
    );
  }

  const {
    title,
    image,
    details,
    features = [],
    tech = {},
    liveLink,
    repoLink,
    auth,
    seoTitle,
    seoDesc,
    shortDesc,
  } = project;

  const pageUrl = `https://axismediadigital.com/portfolio/${slug}`;

  const frontendList = tech?.frontend || ["Responsive frontend structure"];
  const backendList = tech?.backend || ["Backend integration support"];
  const databaseList = tech?.database || ["Database configuration"];
  const deploymentList = tech?.deployment || ["Deployment support"];

  const safeFeatures =
    features.length > 0
      ? features
      : [
          "Responsive user interface",
          "Business-focused layout structure",
          "Performance-oriented development",
          "SEO-friendly page setup",
          "Lead or conversion-ready flow",
        ];

  const authText =
    auth ||
    "Authentication and account functionality can be included based on project requirements, user roles, admin needs and business workflow.";

  const faqs = [
    {
      q: `What type of project is ${title}?`,
      a: `${title} is part of our portfolio work focused on business-ready website development, user experience, performance, structure and practical digital growth support.`,
    },
    {
      q: "Can a similar project be customized for my business?",
      a: "Yes. Every project can be customized according to your business type, target audience, features, branding needs and growth goals.",
    },
    {
      q: "Do you only develop websites or also help with marketing?",
      a: "We help with both. Along with website development, we also support SEO, landing pages, local visibility, Google Ads and broader digital marketing solutions.",
    },
    {
      q: "Is this kind of project built with SEO and performance in mind?",
      a: "Yes. Our project structure usually considers page clarity, responsiveness, content flow, technical quality and SEO-friendly foundations for better online visibility.",
    },
  ];

  /* ---------------- SEO SCHEMA ---------------- */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://axismediadigital.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://axismediadigital.com/portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: seoDesc || details,
    url: pageUrl,
    image: image,
    author: {
      "@type": "Organization",
      name: "Axis Media Digital",
      url: "https://axismediadigital.com",
    },
  };

  const reasons = [
    {
      title: "Business-Focused Structure",
      desc: "The project is designed around usability, clarity and the practical business goals behind the website.",
    },
    {
      title: "Responsive Experience",
      desc: "Layouts and components are planned to work smoothly across mobile, tablet and desktop devices.",
    },
    {
      title: "SEO-Friendly Foundation",
      desc: "The page structure, content flow and technical setup support stronger visibility and long-term digital growth.",
    },
    {
      title: "Scalable Development",
      desc: "The project can be expanded with integrations, additional pages, lead systems or marketing support over time.",
    },
  ];

  const benefits = [
    "Professional brand presentation",
    "Clearer business communication online",
    "Better user experience across devices",
    "Stronger trust and credibility",
    "Lead and conversion-friendly structure",
    "SEO-ready website foundation",
    "Clean project organization and scalability",
    "Practical support for business growth",
  ];

  const processSteps = [
    {
      title: "Requirement Analysis",
      desc: "We first understand business needs, pages, user flow, feature requirements and long-term goals.",
    },
    {
      title: "UI/UX Planning",
      desc: "We define layout direction, content structure, visual hierarchy and user journey before development.",
    },
    {
      title: "Development & Integration",
      desc: "We build the frontend, backend logic, database structure and required integrations based on the project scope.",
    },
    {
      title: "Testing & Launch",
      desc: "We refine performance, responsiveness, usability and deployment readiness before the final launch.",
    },
  ];

  return (
    <main className="pt-24 pb-20 bg-[#EEF5FF] min-h-screen text-gray-900">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>{seoTitle || `${title} | Axis Media Digital Portfolio`}</title>
        <meta
          name="description"
          content={
            seoDesc ||
            `${title} portfolio project by Axis Media Digital showcasing website development, performance, structure and business-focused digital execution.`
          }
        />
        <link rel="canonical" href={pageUrl} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(projectSchema)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <p className="text-xs md:text-sm text-gray-600 mb-4">
          <NavLink to="/" className="text-blue-600 hover:underline">
            Home
          </NavLink>{" "}
          /{" "}
          <NavLink to="/portfolio" className="text-blue-600 hover:underline">
            Portfolio
          </NavLink>{" "}
          / <span className="font-semibold">{title}</span>
        </p>

        {/* ================= TOP CARD ================= */}
        <section className="bg-white rounded-3xl shadow-lg overflow-hidden grid lg:grid-cols-2 border border-gray-200 mb-12">
          <div className="p-6 md:p-8 lg:p-10">
            <p className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-4 py-2 text-xs md:text-sm font-semibold mb-5">
              Real Project Delivered by Axis Media Digital
            </p>

            <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
              {title} Website Development
            </h1>

            <p className="text-sm md:text-base text-gray-700 mb-5 leading-relaxed">
              {details}
            </p>

            {shortDesc && (
              <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
                {shortDesc}
              </p>
            )}

            {/* INTERNAL LINKING */}
            <p className="mb-6 text-sm md:text-base text-gray-700 leading-relaxed">
              This project is part of our professional{" "}
              <Link
                to="/services"
                className="text-blue-600 underline font-semibold"
              >
                website development services
              </Link>{" "}
              and{" "}
              <Link
                to="/digital-marketing"
                className="text-blue-600 underline font-semibold"
              >
                digital marketing solutions
              </Link>
              .
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h2 className="text-lg md:text-xl font-semibold mb-3">
                  Key Features
                </h2>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  {safeFeatures.slice(0, 5).map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  Authentication / Accounts
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {authText}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <NavLink
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition"
              >
                Free Consultation
              </NavLink>

              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline text-sm md:text-base"
                >
                  Live Demo
                </a>
              )}

              {repoLink && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline text-sm md:text-base"
                >
                  Repository
                </a>
              )}
            </div>
          </div>

          <div className="h-72 md:h-80 lg:h-auto bg-gray-100">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ================= PROJECT OVERVIEW ================= */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-5">
                Project Overview
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                This project reflects our approach to creating digital solutions
                that are not just visually appealing, but also practical, scalable
                and aligned with business needs.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                We focus on structure, clarity, responsive experience, usability
                and performance so that the final result supports both branding
                and functional business outcomes.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Whether the goal is stronger online presence, lead generation,
                ecommerce capability or business credibility, the project is built
                to create meaningful digital value.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-5">
                Key Business Benefits
              </h3>

              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= TECHNOLOGY STACK ================= */}
        <section
          className="grid md:grid-cols-3 gap-6 p-6 rounded-3xl mb-12"
          style={{
            background: "linear-gradient(135deg, #DFF3FF, #E8F5E9)",
          }}
        >
          {[
            {
              icon: <FaLaptopCode />,
              title: "Frontend",
              list: frontendList,
            },
            {
              icon: <FaServer />,
              title: "Backend & APIs",
              list: backendList,
            },
            {
              icon: <FaDatabase />,
              title: "Database & Deployment",
              list: databaseList.concat([
                `Deployment: ${deploymentList.join(", ")}`,
              ]),
            },
          ].map((box, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-3xl mb-3">{box.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {box.title}
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                {box.list.map((t, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ================= WHY THIS PROJECT STANDS OUT ================= */}
        <section className="mb-12">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Why This Project Approach Works
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our project work is shaped around user experience, business goals,
              digital clarity and scalable development foundations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= DEVELOPMENT FLOW ================= */}
        <section className="mt-12 bg-white p-6 md:p-10 rounded-3xl shadow border border-gray-200 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            A to Z Complete Development Flow
          </h3>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            We follow a complete development cycle to make sure every project is
            planned properly, executed cleanly and optimized for real-world use.
          </p>

          <ol className="space-y-3 text-sm md:text-base text-gray-700">
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">1.</span>
              <span>Requirement analysis and planning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">2.</span>
              <span>UI/UX design and content structure planning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">3.</span>
              <span>Frontend component and layout development</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">4.</span>
              <span>Backend logic and API development</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">5.</span>
              <span>Database setup and admin/system structure</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">6.</span>
              <span>Integrations, workflow setup and automation support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">7.</span>
              <span>Testing, responsiveness and speed optimisation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">8.</span>
              <span>Deployment, launch checks and monitoring</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-blue-600">9.</span>
              <span>Post-launch support and maintenance guidance</span>
            </li>
          </ol>
        </section>

        {/* ================= PROJECT PROCESS BLOCK ================= */}
        <section className="mb-12">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-5">
                  How We Build Projects That Support Real Business Goals
                </h2>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  A strong project is not just about completing development tasks.
                  It is about understanding what the business needs from the website,
                  how users will interact with it and what actions the project should encourage.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  That is why we focus on planning, structure, responsiveness,
                  conversion logic and scalable implementation from the beginning.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  This approach helps create websites and platforms that are more
                  useful, more reliable and better aligned with long-term digital growth.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <ProcessMiniCard
                  icon={<FaUsers />}
                  title="User Experience"
                />
                <ProcessMiniCard
                  icon={<FaBullseye />}
                  title="Business Goals"
                />
                <ProcessMiniCard
                  icon={<FaLightbulb />}
                  title="Clear Structure"
                />
                <ProcessMiniCard
                  icon={<FaRocket />}
                  title="Scalable Growth"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= DELIVERY PROCESS ================= */}
        <section className="mb-12">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Our Delivery Process
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Every project is delivered through a structured workflow focused on
              clarity, execution quality and business alignment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-base mb-4">
                  {index + 1}
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="mb-12">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Here are some common questions businesses ask when reviewing this project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="pb-6">
          <div className="bg-blue-600 text-white p-8 md:p-12 rounded-3xl shadow-xl text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Want a Similar Project for Your Business?
            </h2>

            <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed mb-6">
              Let us understand your business requirements and build a custom website
              or digital platform designed around your goals, audience and growth needs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <NavLink
                to="/contact"
                className="px-10 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-100 transition text-sm md:text-base"
              >
                Contact Us
              </NavLink>

              <NavLink
                to="/portfolio"
                className="px-10 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition text-sm md:text-base"
              >
                View More Projects
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ProcessMiniCard({ icon, title }) {
  return (
    <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6 text-center">
      <div className="text-blue-600 text-3xl mb-3 flex justify-center">
        {icon}
      </div>
      <p className="text-sm md:text-base font-semibold text-gray-800">
        {title}
      </p>
    </div>
  );
}