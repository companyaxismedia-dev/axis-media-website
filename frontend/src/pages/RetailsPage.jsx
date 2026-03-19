// src/pages/Retail.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaStore,
  FaShoppingCart,
  FaMobileAlt,
  FaChartLine,
  FaBullhorn,
  FaSearch,
  FaLaptop,
  FaCheckCircle,
  FaMapMarkedAlt,
  FaUsers,
  FaTags,
  FaGlobe,
} from "react-icons/fa";

export default function Retail() {
  /* ================= FAQ DATA ================= */
  const faqs = [
    {
      q: "How can a retail website increase my in-store sales?",
      a: "A strong retail website helps customers discover your products online, builds trust before they visit, answers important questions and increases store visits with real buying intent.",
    },
    {
      q: "Do you provide product photography and catalog design?",
      a: "Yes. We can help with product presentation, creative direction, catalog-style layouts, branding support and website sections that showcase your inventory more professionally.",
    },
    {
      q: "Can you help run ads for my retail store?",
      a: "Yes. We run Google Ads and Meta Ads campaigns designed to increase local visibility, product discovery, inquiries, walk-ins and retail sales.",
    },
    {
      q: "Do I need an ecommerce website if I already have a physical store?",
      a: "Not always. Some retail businesses need a full ecommerce store, while others benefit more from a catalog website, inquiry-based product pages, local SEO and ad campaigns. The right setup depends on your business goals.",
    },
    {
      q: "Can local SEO help my retail business?",
      a: "Yes. Local SEO helps your shop appear in nearby searches, Google Maps results and local product-related queries so customers in your area can find and visit your store more easily.",
    },
    {
      q: "What kind of retail businesses do you work with?",
      a: "We work with different retail businesses such as clothing stores, book shops, furniture stores, gift shops, grocery stores, lifestyle outlets, footwear stores and other local or growing retail brands.",
    },
  ];

  /* ================= FAQ SCHEMA ================= */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
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
        name: "Industries",
        item: "https://axismediadigital.com/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Retail Industry",
        item: "https://axismediadigital.com/industries/retail",
      },
    ],
  };

  /* ================= SERVICE SCHEMA ================= */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Retail Digital Marketing Services",
    provider: {
      "@type": "Organization",
      name: "Axis Media Digital",
      url: "https://axismediadigital.com",
    },
    areaServed: "India",
    description:
      "Retail digital marketing services including retail website development, local SEO, Google Ads, Meta Ads, ecommerce support, branding and lead generation solutions for retail businesses.",
  };

  const offerPoints = [
    "Retail-focused website design",
    "Product catalog and enquiry system",
    "Google Business Profile optimization",
    "Local SEO ranking improvement",
    "Social media branding and creatives",
    "Google Ads and Meta Ads campaigns",
    "Customer engagement strategies",
    "E-commerce setup (optional)",
    "Mobile responsive layouts",
    "Analytics and monthly reporting",
  ];

  const benefits = [
    "Increase local store visibility",
    "Build customer trust before store visits",
    "Show products professionally online",
    "Generate more inquiries and walk-ins",
    "Improve Google Maps and local search presence",
    "Promote offers, new arrivals and seasonal collections",
    "Support both offline and online sales growth",
    "Create a stronger brand identity in your market",
  ];

  const challenges = [
    "Low local visibility in Google search and Maps",
    "Customers cannot easily see products before visiting",
    "Weak online branding compared to competitors",
    "Store offers and promotions are not reaching enough people",
    "No proper website or outdated mobile experience",
    "Ad budget gets wasted without strong targeting",
    "Poor product presentation and unclear messaging",
    "Inconsistent lead generation and customer engagement",
  ];

  const reasons = [
    {
      title: "Retail-Specific Strategy",
      desc: "We build strategies around how retail customers browse, compare products, visit stores and make purchase decisions.",
    },
    {
      title: "SEO + Ads + Website Together",
      desc: "We align your website, local SEO and paid campaigns so they work together to improve visibility and conversion.",
    },
    {
      title: "Growth-Focused Execution",
      desc: "Our goal is not just traffic. We focus on walk-ins, calls, product inquiries, brand trust and real business growth.",
    },
    {
      title: "Practical Communication",
      desc: "We explain every step clearly so you understand what is being done, why it matters and how it supports your business.",
    },
  ];

  const processSteps = [
    {
      title: "Retail Business Analysis",
      desc: "We understand your products, target customers, location, competitors and store goals before planning the strategy.",
    },
    {
      title: "Custom Digital Planning",
      desc: "We create the right mix of website structure, SEO, ads, product presentation and promotion strategy for your retail business.",
    },
    {
      title: "Execution & Optimization",
      desc: "We build, improve and optimize pages, campaigns and content to attract the right audience and improve conversions.",
    },
    {
      title: "Reporting & Growth",
      desc: "We monitor visibility, inquiries, ad performance and business growth so your digital investment stays measurable.",
    },
  ];

  return (
    <main
      className="
        pt-24 pb-20 min-h-screen text-gray-900
        bg-gradient-to-b from-[#E9F8F0] via-[#DFF3E8] to-[#D6EBDC]
      "
    >
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Retail Industry Digital Marketing & Website Solutions | Axis Media Digital
        </title>

        <meta
          name="description"
          content="Retail industry digital marketing services including website development, local SEO, Google Ads, Meta Ads, ecommerce support and branding solutions to increase store visits, visibility and sales."
        />

        <meta
          name="keywords"
          content="retail digital marketing, retail website design, retail SEO services, retail Google Ads, local SEO for retail store, retail business marketing, Axis Media Digital"
        />

        <link
          rel="canonical"
          href="https://axismediadigital.com/industries/retail"
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

      <div className="max-w-7xl mx-auto px-6">
        {/* ================= BREADCRUMB UI ================= */}
        <p className="text-xs md:text-sm text-gray-600 mb-4">
          <Link to="/" className="hover:underline text-gray-700">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/industries" className="hover:underline text-green-700">
            Industries
          </Link>{" "}
          / <span className="font-semibold">Retail Industry</span>
        </p>

        {/* ================= HERO ================= */}
        <section className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden mb-14">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-6 md:p-10 lg:p-12">
              <p className="inline-flex items-center rounded-full bg-green-100 text-green-800 px-3 py-1 text-xs md:text-sm font-semibold mb-5">
                Digital Marketing Solutions for Retail Businesses
              </p>

              <div className="flex items-start gap-4 mb-5">
                <div className="p-4 rounded-2xl bg-green-50 shrink-0">
                  <FaStore className="text-3xl md:text-4xl text-green-600" />
                </div>

                <div>
                  <h1 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight">
                    Retail Industry Digital Marketing & Website Solutions
                  </h1>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    We help retail businesses such as clothing shops, furniture
                    stores, book stores, grocery outlets and lifestyle retailers
                    grow visibility, customer trust, inquiries, walk-ins and
                    sales with modern digital marketing strategies.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                Today, customers often search online before visiting a retail
                store. They compare options, check trust signals, browse product
                categories and look for convenience before making a buying decision.
                A strong digital presence helps your retail brand stay visible and relevant.
              </p>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Explore our{" "}
                <Link
                  to="/digital-marketing"
                  className="text-green-700 font-semibold underline"
                >
                  Digital Marketing Services
                </Link>
                ,{" "}
                <Link
                  to="/seo-services"
                  className="text-green-700 font-semibold underline"
                >
                  SEO Services
                </Link>{" "}
                and{" "}
                <Link
                  to="/google-ads"
                  className="text-green-700 font-semibold underline"
                >
                  Google Ads Solutions
                </Link>
                .
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h3 className="font-semibold text-base md:text-lg mb-2">
                    Retail Goals We Support
                  </h3>
                  <ul className="text-sm md:text-base text-gray-700 space-y-2">
                    <li>• More store visits</li>
                    <li>• Better product visibility</li>
                    <li>• More local inquiries</li>
                    <li>• Stronger brand trust</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h3 className="font-semibold text-base md:text-lg mb-2">
                    Services Included
                  </h3>
                  <ul className="text-sm md:text-base text-gray-700 space-y-2">
                    <li>• Website and landing pages</li>
                    <li>• Local SEO and Maps visibility</li>
                    <li>• Google and Meta Ads</li>
                    <li>• Branding and promotions</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold text-sm md:text-base hover:bg-green-700 transition text-center"
                >
                  Get Free Consultation
                </Link>

                <Link
                  to="/industries"
                  className="px-8 py-3 bg-gray-100 text-gray-800 rounded-lg font-medium text-sm md:text-base hover:bg-gray-200 transition text-center"
                >
                  Explore More Industries
                </Link>
              </div>
            </div>

            <div className="h-72 lg:h-auto bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center p-8">
              <div className="grid grid-cols-2 gap-5 w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                  <FaShoppingCart className="text-3xl text-green-600 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-gray-800">
                    Product Discovery
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                  <FaMapMarkedAlt className="text-3xl text-green-600 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-gray-800">
                    Local Reach
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                  <FaUsers className="text-3xl text-green-600 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-gray-800">
                    More Customers
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                  <FaTags className="text-3xl text-green-600 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-gray-800">
                    Promotions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES GRID ================= */}
        <section className="mb-14">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Digital Solutions for Modern Retail Growth
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We create the right digital foundation for retail businesses so
              customers can find your store, understand your products and take
              action more easily.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaLaptop />, title: "Modern Retail Website" },
              { icon: <FaShoppingCart />, title: "Online Store / E-commerce" },
              { icon: <FaMobileAlt />, title: "Mobile Responsive Design" },
              { icon: <FaSearch />, title: "Local SEO Visibility" },
              { icon: <FaChartLine />, title: "Business Growth Strategy" },
              { icon: <FaBullhorn />, title: "Google & Meta Ads" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center"
              >
                <div className="text-green-600 text-3xl md:text-4xl mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg md:text-xl">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================= INTRO CONTENT ================= */}
        <section className="mb-14">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                  Why Retail Businesses Need a Strong Digital Presence
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  Retail customers no longer rely only on physical visibility.
                  They search online, compare store options, look at product variety,
                  check reviews and often decide where to shop before stepping out.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  A strong digital presence builds trust, improves brand recall,
                  supports promotions and helps your business stay visible when
                  customers are actively looking for products like yours.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Whether you run a book store, clothing showroom, furniture shop,
                  electronics outlet, grocery store or a specialty retail brand,
                  we help you create a digital system that supports real business growth.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-5">
                  Key Benefits for Retail Brands
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-gray-700">
                  {benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHAT WE OFFER ================= */}
        <section className="mb-14">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
                What We Offer for Retail Industry
              </h2>

              <ul className="space-y-3 text-sm md:text-base text-gray-800">
                {offerPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                Common Retail Challenges We Help Solve
              </h2>

              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                {challenges.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-600 mt-1 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="mb-14">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Why Choose Axis Media Digital for Retail Marketing
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We help retail businesses create a stronger digital identity, attract
              the right customers and improve both online and offline sales performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="mb-14">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                Our Process for Retail Business Growth
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We follow a clear process to understand your retail business,
                create the right digital strategy and improve performance over time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-green-100 bg-green-50/70 p-6"
                >
                  <div className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-base mb-4">
                    {i + 1}
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
        </section>

        {/* ================= LONG FORM CONTENT ================= */}
        <section className="mb-14">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                What Makes a Good Retail Marketing Strategy?
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                A good retail marketing strategy connects visibility, trust and
                buying intent. It should help customers discover your store,
                understand your products, trust your brand and take action quickly.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Some retail businesses need strong local SEO and Google Maps visibility,
                while others need promotion-based ads, product landing pages or even
                ecommerce support to grow effectively.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                The right strategy depends on your product type, target audience,
                store location, competition and whether your focus is on walk-ins,
                inquiries, direct sales or online orders.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                How We Help Retail Stores Compete Better
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                We help retail businesses present products more professionally,
                improve local discoverability, promote offers effectively and make
                the customer journey smoother from search to purchase.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                This includes website improvements, campaign planning, better
                content structure, conversion-focused design and audience targeting
                that supports both short-term results and long-term brand growth.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Our goal is to help your retail business become easier to find,
                easier to trust and more effective at turning visibility into revenue.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ADDITIONAL SUPPORT SECTION ================= */}
        <section className="mb-14">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                  Retail Website, Local SEO and Promotions — All in One Growth System
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  Retail growth usually does not come from just one channel. A
                  good retail growth system combines website clarity, local search
                  visibility, store trust, promotional campaigns and a smooth
                  customer experience.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  That is why we do not treat your website, SEO and ads as separate
                  pieces. We align them into one complete digital strategy that helps
                  you attract more relevant customers and improve sales opportunities.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Whether your goal is more walk-ins, product inquiries, store branding,
                  local discovery or ecommerce growth, we help you build a system that
                  supports your business practically.
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl border border-green-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaGlobe className="text-2xl text-green-600" />
                  <h3 className="text-lg md:text-xl font-bold">
                    Retail Growth Focus Areas
                  </h3>
                </div>

                <ul className="space-y-3 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>Store discovery in local search results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>Product category visibility and presentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>Offer and promotion campaign support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>Customer trust and conversion improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>Brand consistency across website and ads</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="mb-16">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              These are some common questions retail business owners ask before
              investing in digital marketing and website solutions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow border border-gray-200"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL CONTENT BLOCK ================= */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
              Ready to Build a Stronger Digital Presence for Your Retail Business?
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              If you want your retail brand to attract more customers, improve
              store visibility and create a stronger online identity, the right
              digital strategy can make a major difference.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              At Axis Media Digital, we create customized retail marketing
              solutions that match your business type, store goals, customer
              behavior and growth priorities.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Whether you need a retail website, local SEO, paid ads, promotion
              support or a complete digital growth plan, we help you move forward
              with a strategy built for results.
            </p>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-green-600 text-white p-8 md:p-10 rounded-3xl text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Grow Your Retail Business With Axis Media Digital
          </h2>
          <p className="text-sm md:text-base mb-6 max-w-2xl mx-auto leading-relaxed text-white/90">
            Build a digital presence that brings customers, improves visibility
            and supports real retail growth every day.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-10 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition text-sm md:text-base"
            >
              Get Free Consultation
            </Link>

            <Link
              to="/industries"
              className="px-10 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition text-sm md:text-base"
            >
              View More Industries
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}