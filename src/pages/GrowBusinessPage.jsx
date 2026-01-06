import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaRocket,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaHandshake,
  FaMobileAlt,
  FaSearch,
  FaBullseye,
  FaChartBar,
  FaMagic,
} from "react-icons/fa";

export default function GrowBusinessPage() {
  const lines = [
    "Grow Your Business With Powerful Digital Strategies 🚀",
    "Get More Customers & Boost Your Sales",
    "Rank Higher on Google With SEO",
    "Build Strong Online Presence Across Platforms",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(lines[index].slice(0, i));
      i++;
      if (i > lines[index].length) {
        clearInterval(typing);
        setTimeout(() => {
          setDisplayText("");
          setIndex((prev) => (prev + 1) % lines.length);
        }, 800);
      }
    }, 60);
    return () => clearInterval(typing);
  }, [index]);

  /* ================= SERVICE SCHEMA (IMPORTANT) ================= */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Business Growth & Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "Axis Media",
      url: "https://axismediadigital.com",
    },
    areaServed: "India",
    description:
      "Business growth services including SEO, Google Ads, social media marketing, branding and high-converting websites to scale revenue.",
  };

  /* ================= FAQ SCHEMA ================= */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can digital marketing grow my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Digital marketing increases online visibility, generates quality leads and improves sales using SEO, Google Ads and social media.",
        },
      },
      {
        "@type": "Question",
        name: "How long does SEO take to show results?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "SEO typically shows noticeable ranking improvements within 2–3 months depending on competition.",
        },
      },
    ],
  };

  /* ================= BREADCRUMB SCHEMA ================= */
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
        name: "Grow Business",
        item: "https://axismediadigital.com/grow-business",
      },
    ],
  };

  return (
    <div className="text-white bg-gradient-to-b from-[#052b23] via-[#063a30] to-[#084d3f]">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Grow Your Business | Digital Marketing, SEO & Ads – Axis Media
        </title>

        <meta
          name="description"
          content="Grow your business with SEO, Google Ads, social media marketing and high-converting websites. Axis Media helps brands scale faster."
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/grow-business"
        />

        {/* SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <section
        className="relative py-56 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Section.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          {/* SEO SAFE H1 */}
          <h1 className="sr-only">
            Grow Your Business With Digital Marketing, SEO & Google Ads
          </h1>

          {/* Animated Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-xl">
            {displayText}
            <span className="animate-pulse border-r-2 ml-1"></span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-200 text-lg mt-6 font-light">
            We help businesses grow using websites, SEO, Google Ads, branding &
            complete digital marketing solutions.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 px-10 py-3 rounded-xl shadow-xl font-semibold"
          >
            Book Free Growth Consultation →
          </a>
        </div>
      </section>

      {/* ================= FEATURE CARDS ================= */}
      <section className="py-24">
        <FeatureCards />
      </section>

      {/* ================= WHY GROW ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Why Growing Your Business Matters
        </h2>

        <p className="text-gray-200 max-w-3xl mx-auto text-lg mb-14">
          Visibility, trust and engagement are the pillars of long-term success.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: <FaBullseye />, title: "Targeted Customer Reach" },
            { icon: <FaChartBar />, title: "Boost Sales & Conversions" },
            { icon: <FaSearch />, title: "Improve Google Visibility" },
            { icon: <FaMobileAlt />, title: "Grow Social Media Presence" },
            { icon: <FaHandshake />, title: "Build Brand Trust" },
            { icon: <FaMagic />, title: "Premium Brand Identity" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 p-8 rounded-xl border border-white/10 shadow-xl backdrop-blur-md"
            >
              <div className="text-5xl text-green-300 mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-[#07352c]">
        <h2 className="text-4xl font-bold text-center mb-12">
          Services That Help Your Business Grow Faster
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {[
            "Website Development",
            "Google Ads (Instant Leads)",
            "Meta Ads / Instagram Ads",
            "SEO – Rank #1 on Google",
            "Branding & Logo Design",
            "Social Media Management",
            "Business Automation",
            "Email + WhatsApp Marketing",
            "Creative Content Designing",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 bg-white/10 rounded-xl border border-white/10 shadow-lg"
            >
              <FaCheckCircle className="text-green-300 text-3xl mb-3" />
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          How We Grow Your Business
        </h2>

        <div className="space-y-10">
          {[
            ["Strategy & Market Research", "Industry & audience analysis"],
            ["Branding & Positioning", "Professional brand identity"],
            ["Advertising & SEO", "PPC + organic growth"],
            ["Optimization & Scaling", "Data-driven scaling"],
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white/10 p-8 rounded-lg border border-white/10 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-2">
                {i + 1}. {step[0]}
              </h3>
              <p className="text-gray-200 text-lg">{step[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-green-700">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-lg text-gray-200 mb-6">
          Get a free strategy session with our experts.
        </p>

        <a
          href="/contact"
          className="bg-white text-green-700 font-bold px-10 py-3 rounded-xl shadow-xl"
        >
          Get Free Consultation →
        </a>
      </section>
    </div>
  );
}

/* ================= FEATURE CARDS ================= */
function FeatureCards() {
  return (
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
      <Card icon={<FaRocket />} title="High-Converting Websites" />
      <Card icon={<FaChartLine />} title="SEO Ranking" />
      <Card icon={<FaBullhorn />} title="Digital Advertising" />
      <Card icon={<FaUsers />} title="Brand Identity" />
    </div>
  );
}

function Card({ icon, title }) {
  return (
    <div className="bg-white/10 p-8 rounded-xl shadow-xl text-center border border-white/10">
      <div className="text-4xl text-green-300 mb-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
}
