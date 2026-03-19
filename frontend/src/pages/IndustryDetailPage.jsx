import React from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { findIndustryBySlug } from "../data/IndustriesData";

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const industry = findIndustryBySlug(slug);

  if (!industry) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-[#F7FFF6] text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Industry not found
          </h1>
          <NavLink to="/industries" className="text-emerald-600 underline">
            Back to Industries
          </NavLink>
        </div>
      </section>
    );
  }

  const pageUrl = `https://www.axismediadigital.com/industries/${slug}`;
  const Icon = industry.icon;

  const features = industry.features || [];
  const benefits = industry.benefits || [];
  const faqs =
    industry.faqs && industry.faqs.length
      ? industry.faqs
      : [
          {
            q: `Why is digital marketing important for ${industry.title.toLowerCase()} businesses?`,
            a: `${industry.title} businesses need a tailored digital marketing strategy because customer behavior, competition, search intent and conversion journey are different in every industry. A focused strategy helps improve visibility, generate better leads and support long-term business growth.`,
          },
          {
            q: `Which services are best for ${industry.title.toLowerCase()} businesses?`,
            a: `The right mix usually depends on your goals, market and competition. SEO, Google Ads, local SEO, content marketing, website optimization and landing pages are commonly used to improve traffic quality, conversions and business inquiries.`,
          },
          {
            q: `Can Axis Media Digital help generate leads for ${industry.title.toLowerCase()} businesses?`,
            a: `Yes. Our strategies are designed to attract relevant traffic and convert it into calls, inquiries, bookings, leads or sales depending on your business model and growth goals.`,
          },
          {
            q: `How long does it take to see results for ${industry.title.toLowerCase()} marketing campaigns?`,
            a: `Paid campaigns can begin driving visibility and leads faster, while SEO generally takes more time to build momentum. The timeline depends on competition, your website condition, budget and the current digital presence of your business.`,
          },
        ];

  const processSteps = [
    {
      title: "Research & Market Understanding",
      desc: `We analyze your ${industry.title.toLowerCase()} business model, services, competitors, audience behavior and digital opportunities before building the strategy.`,
    },
    {
      title: "Strategy & Positioning",
      desc: "We identify the right services, messaging, targeting approach, keyword opportunities and growth channels for your business category.",
    },
    {
      title: "Execution & Optimization",
      desc: "We implement SEO, ads, landing pages, content and conversion improvements while continuously optimizing performance.",
    },
    {
      title: "Reporting & Growth",
      desc: "We track rankings, traffic, leads, inquiries and campaign performance so your growth stays measurable and aligned with business goals.",
    },
  ];

  const reasons = [
    {
      title: "Industry-Focused Strategy",
      desc: `We do not use one generic plan for every business. Your ${industry.title.toLowerCase()} business gets a strategy aligned with how your customers search, compare and convert.`,
    },
    {
      title: "SEO + Ads + Website Alignment",
      desc: "We combine the right channels together so traffic quality, user experience and conversion performance work as one system.",
    },
    {
      title: "Lead-Driven Approach",
      desc: "Our focus is not only impressions or clicks. We aim for calls, inquiries, form submissions, bookings, leads and real business growth.",
    },
    {
      title: "Clear Communication",
      desc: "We explain the process in a practical and simple way so you understand the strategy, priorities and results without confusion.",
    },
  ];

  const commonProblems = [
    `Low online visibility for ${industry.title.toLowerCase()}-related searches`,
    "Website traffic that is not converting into quality leads",
    "Weak Google Ads performance or wasted ad budget",
    "Poor service page structure and unclear messaging",
    "Stronger competitors dominating search results",
    "Lack of local visibility and trust signals",
    "No clear digital growth strategy or conversion path",
    "Difficulty attracting the right audience consistently",
  ];

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>{industry.seoTitle}</title>

        <meta name="description" content={industry.seoDesc} />

        <meta
          name="keywords"
          content={
            industry.primaryKeyword
              ? `${industry.primaryKeyword}, ${industry.title} digital marketing, ${industry.title} SEO services, ${industry.title} Google Ads, Axis Media Digital`
              : `${industry.title} digital marketing, ${industry.title} SEO services, ${industry.title} Google Ads, Axis Media Digital`
          }
        />

        <link rel="canonical" href={pageUrl} />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.axismediadigital.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Industries",
                item: "https://www.axismediadigital.com/industries",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: industry.title,
                item: pageUrl,
              },
            ],
          })}
        </script>

        {/* FAQ Schema */}
        {faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
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
            })}
          </script>
        )}
      </Helmet>

      <main className="pt-24 pb-20 bg-gradient-to-b from-[#F4FFF7] to-[#E8F8EE] min-h-screen text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <p className="text-xs md:text-sm text-gray-600 mb-3">
            <NavLink to="/" className="hover:underline text-gray-700">
              Home
            </NavLink>{" "}
            /{" "}
            <NavLink
              to="/industries"
              className="hover:underline text-emerald-600"
            >
              Industries
            </NavLink>{" "}
            / <span className="font-semibold">{industry.title}</span>
          </p>

          {/* HERO */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-2 border border-gray-200">
            <div className="p-6 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gray-50 shrink-0">
                  <Icon className={`text-3xl md:text-4xl ${industry.colorClass}`} />
                </div>

                <div>
                  <p className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs md:text-sm font-semibold mb-3">
                    Customized Marketing Strategy for {industry.title} Businesses
                  </p>

                  <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                    {industry.title} Digital Marketing Services
                  </h1>

                  <p className="text-sm md:text-base text-gray-600 mt-3 leading-relaxed">
                    {industry.longDesc}
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-600 mt-4 leading-relaxed">
                At Axis Media Digital, we create tailored marketing strategies
                for {industry.title.toLowerCase()} businesses to improve online
                visibility, attract the right audience, generate quality leads
                and support measurable business growth.
              </p>

              {/* INTERNAL LINKS */}
              <p className="text-sm md:text-base text-gray-600 mt-4 leading-relaxed">
                Explore our{" "}
                <Link
                  to="/digital-marketing"
                  className="text-emerald-700 underline font-semibold"
                >
                  Digital Marketing
                </Link>
                ,{" "}
                <Link
                  to="/seo-services"
                  className="text-emerald-700 underline font-semibold"
                >
                  SEO Services
                </Link>{" "}
                and{" "}
                <Link
                  to="/google-ads"
                  className="text-emerald-700 underline font-semibold"
                >
                  Google Ads Solutions
                </Link>
                .
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 border">
                  <h4 className="font-semibold text-base md:text-lg mb-2">
                    Main Services
                  </h4>
                  <ul className="text-sm md:text-base text-gray-700 space-y-2">
                    {features.length > 0 ? (
                      features.map((f, i) => <li key={i}>• {f}</li>)
                    ) : (
                      <>
                        <li>• SEO strategy and keyword targeting</li>
                        <li>• Google Ads campaign management</li>
                        <li>• Landing page optimization</li>
                        <li>• Conversion-focused website improvements</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border">
                  <h4 className="font-semibold text-base md:text-lg mb-2">
                    Business Benefits
                  </h4>
                  <ul className="text-sm md:text-base text-gray-700 space-y-2">
                    {benefits.length > 0 ? (
                      benefits.map((b, i) => <li key={i}>• {b}</li>)
                    ) : (
                      <>
                        <li>• Better online visibility</li>
                        <li>• More qualified inquiries and leads</li>
                        <li>• Higher relevance in search results</li>
                        <li>• Stronger long-term business growth</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold text-sm md:text-base hover:bg-emerald-700 transition text-center"
                >
                  Book Free Consultation
                </Link>

                <Link
                  to="/industries"
                  className="inline-block px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-medium text-sm md:text-base hover:bg-gray-200 transition text-center"
                >
                  View All Industries
                </Link>
              </div>
            </div>

            <div className="h-72 lg:h-auto bg-emerald-50">
              {industry.heroImage ? (
                <img
                  src={industry.heroImage}
                  alt={industry.primaryKeyword || `${industry.title} digital marketing`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="inline-flex p-5 rounded-2xl bg-white shadow-md mb-4">
                      <Icon className={`text-5xl md:text-6xl ${industry.colorClass}`} />
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                      {industry.title} Digital Marketing Solutions
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* INTRO CONTENT */}
          <section className="mt-12">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                    Why {industry.title} Businesses Need a Specialized Digital Marketing Strategy
                  </h2>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    Every industry has a different customer journey, buying
                    behavior, competition level and search intent. That is why
                    a generic marketing strategy often fails to generate strong
                    results for {industry.title.toLowerCase()} businesses.
                  </p>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    Customers in this industry search with specific needs,
                    expectations and urgency. Your digital presence needs to
                    reflect those needs clearly through relevant content,
                    well-optimized service pages, strategic targeting and a
                    conversion-focused website experience.
                  </p>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    At Axis Media Digital, we help {industry.title.toLowerCase()} businesses
                    build better online visibility, increase trust, attract
                    relevant traffic and turn that traffic into real business
                    opportunities.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-5">
                    What We Help You Achieve
                  </h3>

                  <ul className="space-y-3 text-sm md:text-base text-gray-700">
                    {(benefits.length > 0
                      ? benefits
                      : [
                          "Improve search visibility for relevant customer queries",
                          "Generate better quality leads and inquiries",
                          "Build stronger local or niche market presence",
                          "Increase ad relevance and reduce wasted budget",
                          "Improve conversion rates through better landing pages",
                          "Communicate your services more clearly online",
                          "Strengthen trust and credibility with visitors",
                          "Support long-term business growth with strategy",
                        ]
                    ).map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-emerald-600 font-extrabold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* COMMON CHALLENGES */}
          <section className="mt-12">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                  Common Challenges in {industry.title} Digital Marketing
                </h2>

                <ul className="space-y-3 text-sm md:text-base text-gray-700">
                  {commonProblems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-emerald-600 font-extrabold mt-1">•</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                  How Our Strategy Solves These Problems
                </h2>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  We build a focused strategy around your industry, audience,
                  competition and goals. That includes keyword research, content
                  structuring, search visibility improvements, paid campaign
                  targeting, landing page optimization and trust-building elements.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  Instead of only chasing traffic, we work on attracting the
                  right visitors and guiding them toward action through better
                  messaging, relevant pages and conversion-friendly user journeys.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  This helps your business improve lead quality, reduce wasted
                  budget and create a stronger foundation for long-term growth.
                </p>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="mt-12">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                Why Choose Axis Media Digital for {industry.title} Marketing
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We create practical strategies that improve visibility, lead generation,
                trust and overall digital performance for your business category.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESS */}
          <section className="mt-12">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
              <div className="text-center max-w-4xl mx-auto mb-10">
                <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                  Our Process for {industry.title} Business Growth
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  We follow a structured process to understand your market, build
                  the right strategy and optimize it for better business outcomes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6"
                  >
                    <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-base mb-4">
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
          </section>

          {/* LONG CONTENT */}
          <section className="mt-12">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                  What Makes a Strong {industry.title} Marketing Strategy?
                </h2>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  A strong strategy is built around customer intent, market demand,
                  competition level, local or niche visibility needs and the type
                  of conversion your business wants to generate.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  Some businesses benefit most from SEO and content growth, while
                  others need immediate results from targeted ads, optimized landing
                  pages and stronger lead capture systems.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  The key is choosing the right channels, the right message and the
                  right structure for your audience instead of using generic
                  marketing methods that do not match your business reality.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                  Results-Focused Digital Support for {industry.title} Businesses
                </h2>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  Our work is designed to support real business goals, whether that
                  means more inquiries, bookings, calls, appointments, service
                  requests, quote requests or better quality leads.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  We focus on strategy clarity, campaign performance, website
                  conversion improvements and ongoing optimization so your digital
                  marketing becomes more reliable and measurable.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  This approach helps your business not only get seen online, but
                  also become more competitive and more effective at turning
                  visibility into growth.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-12">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Here are some common questions businesses ask before choosing
                {` ${industry.title.toLowerCase()} `}digital marketing services.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
                >
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL CONTENT BLOCK */}
          <section className="mt-12">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
              <div className="max-w-5xl">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                  Ready to Grow Your {industry.title} Business with the Right Digital Strategy?
                </h2>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  If your business needs better online visibility, stronger lead
                  generation and a marketing approach tailored to your industry,
                  Axis Media Digital can help you build the right growth system.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  We work on the channels, content, targeting and website elements
                  that matter most for your business category so your marketing
                  investment becomes more focused and effective.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Whether you need SEO, Google Ads, local lead generation, landing
                  page support or a complete digital marketing plan, we are here
                  to create a strategy aligned with your business goals.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 pb-8">
            <div className="max-w-7xl mx-auto bg-emerald-600 text-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Looking for digital marketing tailored to the {industry.title} industry?
                </h3>
                <p className="text-white/90 mt-3 text-sm md:text-base leading-relaxed">
                  Let us understand your goals and build a strategy designed to
                  improve visibility, bring better leads and support real business growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-emerald-700 rounded-lg font-semibold text-base hover:bg-gray-100 text-center"
                >
                  Book Free Strategy Call
                </Link>

                <Link
                  to="/industries"
                  className="px-8 py-4 bg-emerald-700 text-white rounded-lg font-semibold text-base hover:bg-emerald-800 text-center"
                >
                  Explore More Industries
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}