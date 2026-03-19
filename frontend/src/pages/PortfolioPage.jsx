import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaBullhorn,
  FaChartLine,
  FaSearch,
  FaMobileAlt,
  FaCheckCircle,
  FaGlobe,
  FaPalette,
  FaUsers,
  FaRocket,
  FaBriefcase,
} from "react-icons/fa";
import portfolioItems from "../data/portfolioData";
import Portfolio from "../components/Portfolio";

const realProjects = [
  {
    title: "Salon & Beauty Website Development",
    desc: "We have designed and developed websites for salon, beauty and personal care businesses that need a premium online presence, service pages, appointment-focused layouts and mobile-friendly user experience. These projects were built to improve trust, local visibility and lead generation.",
  },
  {
    title: "Clinic & Healthcare Website Projects",
    desc: "Our portfolio includes websites for clinics, healthcare professionals and treatment-based businesses that require professional branding, treatment information pages, trust-building design, fast performance and SEO-friendly structure. These websites help improve patient inquiries and local visibility.",
  },
  {
    title: "Real Estate & Property Business Websites",
    desc: "We have built websites for real estate businesses, builders and property consultants with project showcase pages, lead forms, enquiry sections, location details and conversion-focused layouts. These websites are designed to support both branding and serious lead generation.",
  },
  {
    title: "E-Commerce Website Development Projects",
    desc: "Axis Media has worked on e-commerce website projects for businesses that want to sell products online with smooth product browsing, payment integration, cart management and mobile-optimized shopping experience. Our e-commerce work focuses on conversion, speed and easy store management.",
  },
  {
    title: "Education & Coaching Institute Websites",
    desc: "We have created websites for coaching centers, institutes and education businesses that need course pages, student inquiry forms, admission-focused layouts and structured information sections. These projects help education brands build trust and capture more admissions online.",
  },
  {
    title: "Restaurant, Cafe & Food Brand Websites",
    desc: "Our website portfolio also includes projects for restaurants, cafes and food businesses that need attractive layouts, menu display, contact information, map integration and brand-focused design. These websites help food brands strengthen their online visibility and customer reach.",
  },
  {
    title: "Corporate & Service Business Websites",
    desc: "We have developed websites for service companies, agencies, consultants and local brands that need a clean business presentation, strong call-to-actions, SEO-friendly content flow and lead capture features. These websites are structured for long-term business growth and professional branding.",
  },
  {
    title: "Landing Pages for Lead Generation Campaigns",
    desc: "Along with full websites, we have also delivered landing page projects for paid campaigns, lead generation funnels and business promotions. These pages are built to improve conversion rates, capture high-intent leads and support Google Ads and social media advertising performance.",
  },
];

export default function PortfolioPage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Axis Media Digital Portfolio",
    itemListElement: portfolioItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `https://axismediadigital.com/portfolio/${item.slug}`,
    })),
  };

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
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Website Development and Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "Axis Media Digital",
      url: "https://axismediadigital.com",
    },
    areaServed: "India",
    description:
      "Portfolio of website development, ecommerce websites, landing pages and digital marketing projects created for performance, SEO, user experience and business growth.",
  };

  const faqs = [
    {
      q: "What type of projects are included in your portfolio?",
      a: "Our portfolio includes business websites, ecommerce stores, landing pages, service websites, industry-specific business websites and digital growth-focused projects created for different business categories.",
    },
    {
      q: "Do you only design websites or also help with marketing?",
      a: "We help with both. Along with website design and development, we also work on SEO, Google Ads, landing pages, local visibility and broader digital marketing strategies.",
    },
    {
      q: "Can you build a custom website similar to one of these portfolio projects?",
      a: "Yes. Every business has different needs, so we create custom websites based on your services, audience, industry and growth goals rather than using a one-size-fits-all approach.",
    },
    {
      q: "Are these projects designed with SEO in mind?",
      a: "Yes. Our websites are planned with structure, content flow, mobile responsiveness, loading performance and SEO-friendly foundations to support better digital visibility.",
    },
    {
      q: "Do you work with small businesses and startups too?",
      a: "Yes. We work with startups, local businesses, service brands, ecommerce businesses and growing companies that need a professional digital presence and better lead generation.",
    },
    {
      q: "Can you also create landing pages for ads and lead campaigns?",
      a: "Yes. We create conversion-focused landing pages for Google Ads, Meta Ads, offers, service campaigns and lead generation funnels.",
    },
  ];

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

  const capabilities = [
    {
      icon: <FaLaptopCode />,
      title: "Business Website Development",
      desc: "Custom websites for service businesses, local brands, clinics, agencies and industry-specific companies.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Projects",
      desc: "Online store development with product pages, cart flow, mobile shopping experience and growth support.",
    },
    {
      icon: <FaBullhorn />,
      title: "Landing Pages for Marketing",
      desc: "High-converting landing pages designed for ads, offers, lead generation and campaign-focused traffic.",
    },
    {
      icon: <FaSearch />,
      title: "SEO-Friendly Structure",
      desc: "Pages planned with clean structure, content hierarchy and search-friendly foundations for visibility.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive UI/UX",
      desc: "Web experiences that work smoothly across desktop, tablet and mobile devices.",
    },
    {
      icon: <FaChartLine />,
      title: "Growth-Focused Design",
      desc: "Websites and digital assets built to support inquiries, conversions, trust and long-term business growth.",
    },
  ];

  const benefits = [
    "Professional business presentation that builds trust",
    "Conversion-focused layouts for inquiries and leads",
    "Mobile-friendly and user-friendly website experience",
    "SEO-ready page structure and better content flow",
    "Custom design aligned with brand identity and goals",
    "Support for both local visibility and online growth",
    "Flexible project approach for different industries",
    "Digital assets designed for practical business outcomes",
  ];

  const reasons = [
    {
      title: "Business-Focused Work",
      desc: "We create websites and landing pages that support real business goals, not just visual design.",
    },
    {
      title: "Industry-Based Approach",
      desc: "Different industries need different structures, messaging and conversion strategies, and we build accordingly.",
    },
    {
      title: "Design + SEO + Conversion",
      desc: "Our projects combine strong design, SEO-friendly structure and practical user journeys.",
    },
    {
      title: "Custom Project Execution",
      desc: "We tailor every project to the client’s services, audience, market and growth priorities.",
    },
  ];

  const processSteps = [
    {
      title: "Understanding the Business",
      desc: "We study your business model, services, target audience and goals before planning the project.",
    },
    {
      title: "Planning the Structure",
      desc: "We define the right page flow, messaging, design direction and conversion elements for your project.",
    },
    {
      title: "Design & Development",
      desc: "We create the website or digital asset with responsive layout, business clarity and performance in mind.",
    },
    {
      title: "Optimization & Launch",
      desc: "We refine usability, content structure and readiness so the project supports long-term growth after launch.",
    },
  ];

  return (
    <main
      className="pt-24 min-h-screen"
      style={{ backgroundColor: "#ecf4fcff" }}
    >
      <Helmet>
        <title>
          Website Development & Digital Marketing Portfolio | Axis Media Digital
        </title>

        <meta
          name="description"
          content="Explore Axis Media Digital portfolio featuring website development, ecommerce websites, landing pages and digital marketing projects built for performance, SEO and real business growth."
        />

        <meta
          name="keywords"
          content="website development portfolio, digital marketing portfolio, ecommerce website projects, landing page design portfolio, SEO website portfolio, Axis Media Digital"
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/portfolio"
        />

        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Portfolio />

      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* ================= BREADCRUMB ================= */}
        <p className="text-xs md:text-sm text-gray-600 mb-4">
          <NavLink to="/" className="hover:underline text-gray-700">
            Home
          </NavLink>{" "}
          / <span className="font-semibold">Portfolio</span>
        </p>

        {/* ================= HERO ================= */}
        <div className="text-center mb-14">
          <p className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-4 py-2 text-xs md:text-sm font-semibold mb-5">
            Real Website Development & Digital Growth Projects
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            Website Development & Digital Marketing Portfolio
          </h1>

          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Explore our professionally delivered projects including business
            websites, ecommerce platforms, landing pages and digital marketing
            solutions built for performance, user experience, SEO and real business growth.
          </p>

          <p className="text-sm md:text-base text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            These projects are part of our complete{" "}
            <Link
              to="/services"
              className="text-blue-600 font-semibold underline"
            >
              website development services
            </Link>{" "}
            and{" "}
            <Link
              to="/digital-marketing"
              className="text-blue-600 font-semibold underline"
            >
              digital marketing solutions
            </Link>{" "}
            for businesses of different sizes and industries.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink
              to="/contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm md:text-base hover:bg-blue-700 transition"
            >
              Start Your Project
            </NavLink>

            <NavLink
              to="/services"
              className="px-8 py-3 bg-white text-blue-700 border border-blue-200 rounded-xl font-semibold text-sm md:text-base hover:bg-blue-50 transition"
            >
              Explore Services
            </NavLink>
          </div>
        </div>

        {/* ================= CAPABILITIES ================= */}
        <section className="mb-16">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              What Kind of Projects We Deliver
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our portfolio includes different types of digital projects created
              to support branding, visibility, conversions and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
              >
                <div className="text-blue-600 text-3xl md:text-4xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= MAIN PORTFOLIO GRID ================= */}
        <section className="mb-16">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((p) => (
              <article
                key={p.slug}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition"
              >
                <div className="h-48 overflow-hidden rounded-lg mb-4 bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  {p.title}
                </h2>

                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  {p.shortDesc}
                </p>

                <div className="flex items-center justify-between gap-4">
                  <NavLink
                    to={`/portfolio/${p.slug}`}
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-semibold text-sm md:text-base"
                  >
                    More Details
                  </NavLink>

                  {p.liveLink ? (
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-600 underline"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400">No demo</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-sm md:text-base text-gray-700">
              Want a custom website like these?
              <NavLink to="/contact" className="text-blue-600 underline ml-1">
                Contact Us
              </NavLink>
            </p>
          </div>
        </section>

        {/* ================= WHY THIS PORTFOLIO MATTERS ================= */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                Why Our Portfolio Matters for Your Business
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                A strong portfolio shows more than design style. It reflects how
                projects are planned, how business goals are understood and how
                digital assets are created to support trust, visibility and conversion.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                At Axis Media Digital, we focus on practical project execution.
                That means building websites and digital experiences that do not
                just look professional, but also guide users clearly and support real outcomes.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Whether your goal is branding, lead generation, ecommerce growth
                or stronger digital visibility, our work is structured to help businesses move forward confidently.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
                Key Benefits Clients Look For
              </h3>

              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="mb-16">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Axis Media Digital
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our work is shaped around business clarity, audience experience,
              SEO readiness and conversion-focused digital execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-10">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Project Delivery Process
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We follow a structured process to make sure every project aligns
                with business goals, audience needs and long-term digital growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6"
                >
                  <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-base mb-4">
                    {index + 1}
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                    {step.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= REAL PROJECTS LONG CONTENT ================= */}
        <section className="mt-20 mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Real Website Projects Delivered Across Multiple Industries
          </h2>

          <p className="text-center text-sm md:text-base text-gray-600 max-w-4xl mx-auto mb-12 leading-8">
            Axis Media Digital has worked on a wide range of website development
            and digital marketing projects for businesses from different industries.
            From local service brands and startups to clinics, salons, education
            businesses, real estate companies and ecommerce stores, our work is
            focused on building digital assets that look professional, perform
            smoothly and support real business growth.
          </p>

          <div className="max-w-5xl mx-auto space-y-10 text-gray-700">
            {realProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base leading-8 text-gray-700">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SUPPORT BLOCK ================= */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                  More Than Design — Projects Built for Digital Growth
                </h2>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  A successful project is not only about visual design. It is also
                  about how well the website communicates value, supports user flow,
                  builds trust and helps the business generate inquiries or sales.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  That is why our portfolio work combines business understanding,
                  content direction, conversion awareness and clean development structure.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  This approach helps our clients get digital assets that are more
                  practical, more scalable and more aligned with real growth goals.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
                <div className="grid grid-cols-2 gap-5">
                  <MiniCard icon={<FaGlobe />} title="Visibility" />
                  <MiniCard icon={<FaPalette />} title="Branding" />
                  <MiniCard icon={<FaUsers />} title="User Flow" />
                  <MiniCard icon={<FaRocket />} title="Growth" />
                  <MiniCard icon={<FaBriefcase />} title="Business Fit" />
                  <MiniCard icon={<FaChartLine />} title="Performance" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="mb-16">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Here are some common questions businesses ask before starting a website
              development or digital marketing project with us.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                  {faq.q}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="pb-10">
          <div className="bg-blue-600 text-white p-8 md:p-12 rounded-3xl text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Want a Custom Website or Growth-Focused Digital Project?
            </h2>

            <p className="text-sm md:text-base mb-6 max-w-2xl mx-auto leading-relaxed text-blue-100">
              Let us understand your business and create a project that matches
              your brand, audience and growth goals.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <NavLink
                to="/contact"
                className="px-10 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-100 transition text-sm md:text-base"
              >
                Contact Us
              </NavLink>

              <NavLink
                to="/services"
                className="px-10 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition text-sm md:text-base"
              >
                Explore Services
              </NavLink>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function MiniCard({ icon, title }) {
  return (
    <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-blue-100">
      <div className="text-blue-600 text-2xl mb-2 flex justify-center">
        {icon}
      </div>
      <p className="text-sm font-semibold text-gray-800">{title}</p>
    </div>
  );
}