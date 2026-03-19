import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaTools,
  FaMapMarkerAlt,
  FaPenFancy,
  FaLink,
  FaChartLine,
  FaCheckCircle,
  FaBullseye,
  FaGlobe,
  FaFileAlt,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

export default function SeoServicesPage() {
  const faqs = [
    {
      q: "How long does SEO take to show results?",
      a: "SEO usually starts showing visible progress within a few months, but the exact timeline depends on competition, website condition, keyword difficulty and your current digital presence. It is a long-term growth strategy, not an instant result channel.",
    },
    {
      q: "Do you provide local SEO services?",
      a: "Yes. We provide complete local SEO services including Google Business Profile optimization, local keyword targeting, location page strategy and local search visibility improvements.",
    },
    {
      q: "Is your SEO process safe?",
      a: "Yes. We use white-hat SEO methods that align with search engine guidelines. Our focus is on sustainable rankings, better content quality, technical improvements and long-term growth.",
    },
    {
      q: "Can SEO help generate leads instead of just traffic?",
      a: "Yes. Our SEO strategies are built not only to improve rankings but also to attract relevant users who are more likely to become inquiries, calls, leads, bookings or customers.",
    },
    {
      q: "Do you work with small businesses and local brands?",
      a: "Yes. We work with local businesses, startups, service providers, growing brands and established companies. The SEO strategy is customized according to your business type, audience and growth goals.",
    },
    {
      q: "What is included in your SEO services?",
      a: "Our SEO services can include keyword research, technical SEO, on-page optimization, local SEO, content optimization, website audit, internal linking, performance tracking and monthly reporting.",
    },
  ];

  /* ================= SCHEMA ================= */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SEO Services",
    provider: {
      "@type": "Organization",
      name: "Axis Media Digital",
      url: "https://axismediadigital.com",
    },
    areaServed: "India",
    description:
      "Professional SEO services in India including technical SEO, on-page SEO, local SEO, keyword strategy, content optimization and search visibility improvement for business growth.",
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
        name: "SEO Services",
        item: "https://axismediadigital.com/seo-services",
      },
    ],
  };

  const benefits = [
    "Improve Google rankings for relevant business keywords",
    "Increase qualified organic traffic to your website",
    "Build long-term online visibility and authority",
    "Generate better inquiries, calls and leads",
    "Reduce dependency on paid traffic over time",
    "Improve website structure and user experience",
    "Strengthen local search presence for nearby customers",
    "Create a more sustainable digital growth channel",
  ];

  const challenges = [
    "Website not ranking for important business keywords",
    "Low organic traffic despite having a website",
    "Poor technical structure affecting visibility",
    "Weak local search presence and Maps visibility",
    "Content not matching search intent properly",
    "Competitors ranking higher for target keywords",
    "Traffic coming in but not converting into leads",
    "Lack of SEO direction, reporting and consistency",
  ];

  const reasons = [
    {
      title: "Strategy Based SEO",
      desc: "We do not rely on random tactics. Our SEO work is built around business goals, search intent, competition and conversion opportunities.",
    },
    {
      title: "Technical + Content + Local SEO",
      desc: "We combine technical improvements, keyword targeting, content structure and local visibility work for a more complete SEO system.",
    },
    {
      title: "Business-Focused Growth",
      desc: "We focus on rankings that support real business outcomes such as inquiries, calls, leads and stronger brand visibility.",
    },
    {
      title: "Clear Reporting",
      desc: "We keep the process understandable with transparent reporting and practical communication around what is improving and why.",
    },
  ];

  const processSteps = [
    {
      title: "SEO Audit & Research",
      desc: "We analyze your website, keywords, competitors, technical issues and search opportunities before creating the strategy.",
    },
    {
      title: "Optimization Planning",
      desc: "We prioritize technical SEO, content improvements, on-page fixes and local visibility actions based on your business goals.",
    },
    {
      title: "Implementation & Improvement",
      desc: "We optimize pages, improve structure, refine keyword relevance and strengthen visibility through strategic SEO actions.",
    },
    {
      title: "Tracking & Growth",
      desc: "We monitor rankings, traffic, engagement and lead-focused performance so your SEO progress stays measurable.",
    },
  ];

  const serviceCards = [
    {
      icon: <FaSearch />,
      title: "Keyword Research & Strategy",
      desc: "Target high-intent keywords that match your services, audience and growth goals.",
    },
    {
      icon: <FaTools />,
      title: "On-Page & Technical SEO",
      desc: "Improve page structure, speed, crawlability, indexing and technical search performance.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Local SEO",
      desc: "Improve visibility in local search results, Google Maps and location-based queries.",
    },
    {
      icon: <FaPenFancy />,
      title: "Content Optimization",
      desc: "Create and refine content that is relevant, search-friendly and aligned with user intent.",
    },
    {
      icon: <FaLink />,
      title: "Internal Linking & Authority Support",
      desc: "Improve content relationships and website structure to strengthen search performance.",
    },
    {
      icon: <FaChartLine />,
      title: "SEO Reporting & Performance Tracking",
      desc: "Track progress through practical reports focused on rankings, traffic and business outcomes.",
    },
  ];

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>SEO Services in India | SEO Company & Agency – Axis Media Digital</title>

        <meta
          name="description"
          content="Axis Media Digital is a professional SEO company in India offering white-hat SEO services to improve Google rankings, increase organic traffic and generate quality leads for business growth."
        />

        <meta
          name="keywords"
          content="SEO services in India, SEO company India, local SEO services, technical SEO, on-page SEO, SEO agency India, white hat SEO services, Axis Media Digital"
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/seo-services"
        />

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

      <main className="bg-white text-gray-900">
        {/* ================= HERO ================= */}
        <section className="pt-28 pb-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs md:text-sm font-semibold mb-6">
              Search Engine Optimization Services for Long-Term Business Growth
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Professional SEO Services in India
            </h1>

            <p className="text-sm md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Axis Media Digital helps businesses improve Google rankings,
              increase organic traffic, strengthen online visibility and attract
              more qualified leads with strategic, white-hat SEO services.
            </p>

            <p className="mt-5 text-sm md:text-base text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              Our SEO strategies focus on technical health, keyword relevance,
              on-page optimization, local visibility and long-term search growth
              instead of short-term shortcuts.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                to="/contact"
                className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-lg text-sm md:text-base hover:bg-gray-100 transition"
              >
                Get Free SEO Audit
              </Link>

              <Link
                to="/portfolio"
                className="border border-white px-8 py-4 rounded-xl font-semibold text-sm md:text-base hover:bg-white hover:text-blue-700 transition"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Result-Driven SEO Company for Business Growth
            </h2>

            <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our SEO strategies are built to improve search visibility, support
              brand authority, increase relevant traffic and create stronger
              long-term business growth through ethical, data-driven optimization.
            </p>

            <p className="mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
              Explore our complete{" "}
              <Link to="/services" className="text-blue-600 underline font-semibold">
                digital marketing services
              </Link>{" "}
              and{" "}
              <Link to="/digital-marketing" className="text-blue-600 underline font-semibold">
                growth solutions
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ================= BENEFITS + WHY SEO ================= */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                  Why SEO Matters for Your Business
                </h2>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  SEO helps your business appear when people actively search for
                  your services, products or solutions. Unlike interruption-based
                  marketing, SEO targets users with real intent, making it one of
                  the strongest long-term digital growth channels.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  A good SEO strategy improves more than rankings. It strengthens
                  website quality, user experience, content relevance and trust,
                  all of which support better lead generation and business visibility.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Whether you are a local business, service provider, ecommerce
                  brand or company targeting broader search demand, the right SEO
                  approach helps you grow more consistently.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
                <h3 className="text-xl md:text-2xl font-bold mb-5">
                  Key Benefits of Our SEO Services
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-gray-700">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our SEO Services
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We build complete SEO strategies that improve website visibility,
                search relevance and business-focused organic growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {serviceCards.map((item, index) => (
                <ServiceCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= CHALLENGES ================= */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                  Common SEO Problems We Help Solve
                </h2>

                <ul className="space-y-3 text-sm md:text-base text-gray-700">
                  {challenges.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                  How Our SEO Strategy Solves Them
                </h2>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  We start with analysis, not assumptions. Our SEO process looks
                  at your technical setup, content structure, keyword alignment,
                  competitor landscape and search opportunities before making changes.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  Then we improve the areas that matter most, including crawlability,
                  page relevance, content quality, local visibility, internal linking
                  and overall user experience.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  This creates a stronger foundation for rankings, better traffic
                  quality and more sustainable business growth from organic search.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                Why Choose Axis Media Digital for SEO Services
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We create practical and sustainable SEO strategies that focus on
                visibility, relevance and business growth instead of vanity metrics alone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm"
                >
                  <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                  Our SEO Process
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  We follow a structured process to improve technical quality,
                  keyword relevance and long-term organic search performance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6"
                  >
                    <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-base mb-4">
                      {index + 1}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= LONG CONTENT ================= */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                  What Makes a Good SEO Strategy?
                </h2>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  A good SEO strategy is based on search intent, technical health,
                  content relevance, keyword planning and website usability. It
                  should help both search engines and users understand your pages better.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  Strong SEO is not just about adding keywords. It includes page
                  structure, internal linking, loading performance, local relevance,
                  content depth and a clear connection between search queries and business goals.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  The best SEO strategies are those that build stable visibility
                  over time while improving the overall quality of your website and user journey.
                </p>
              </div>

              <div className="bg-gray-50 rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                  SEO That Supports Real Business Outcomes
                </h2>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  We focus on SEO in a business-focused way. That means improving
                  rankings for the terms that actually matter to your services,
                  audience and conversion goals.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  Our work aims to bring more relevant organic visitors to your
                  website and help those visitors move toward inquiry, booking,
                  purchase or contact actions more easily.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  This makes SEO not just a traffic channel, but a reliable part
                  of your larger digital growth system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SUPPORT BLOCK ================= */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                    SEO, Content and Website Optimization — Working Together
                  </h2>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    SEO works best when it is not isolated. Rankings improve more
                    effectively when technical performance, page structure, content
                    quality and conversion-focused design support each other.
                  </p>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    That is why our approach connects SEO with broader digital
                    growth priorities. We focus on how visitors discover your site,
                    what they see after landing and how easily they can trust and
                    take action.
                  </p>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    This helps create a stronger foundation for search visibility,
                    brand authority and better lead generation over time.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
                  <div className="grid grid-cols-2 gap-5">
                    <SupportMiniCard icon={<FaBullseye />} title="Search Intent" />
                    <SupportMiniCard icon={<FaGlobe />} title="Visibility" />
                    <SupportMiniCard icon={<FaFileAlt />} title="Content Quality" />
                    <SupportMiniCard icon={<FaUsers />} title="User Experience" />
                    <SupportMiniCard icon={<FaRocket />} title="Growth" />
                    <SupportMiniCard icon={<FaCheckCircle />} title="Sustainable SEO" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Here are some common questions businesses ask before investing in SEO services.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg md:text-xl font-bold mb-3">{faq.q}</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Want to Rank Better on Google?
            </h2>
            <p className="text-sm md:text-base mb-8 text-blue-100 leading-relaxed">
              Talk to our SEO experts and get a strategy focused on better rankings,
              stronger visibility and real business growth.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-xl shadow-lg text-sm md:text-base hover:bg-gray-100 transition"
            >
              Talk to SEO Expert
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition text-center border border-gray-100">
      <div className="text-blue-600 text-3xl md:text-4xl mb-4 mx-auto flex justify-center">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{desc}</p>
    </div>
  );
}

function SupportMiniCard({ icon, title }) {
  return (
    <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-blue-100">
      <div className="text-blue-600 text-2xl mb-2 flex justify-center">{icon}</div>
      <p className="text-sm font-semibold text-gray-800">{title}</p>
    </div>
  );
}