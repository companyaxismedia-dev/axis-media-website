import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { IndustriesData } from "../data/IndustriesData";

export default function IndustriesPage() {
  const faqs = [
    {
      q: "Why does my business need industry-specific digital marketing?",
      a: "Every industry has a different customer journey, search intent, competition level and buying behavior. A generic strategy usually wastes budget. Industry-specific digital marketing helps target the right audience, use the right keywords, create relevant ads and build pages that convert better."
    },
    {
      q: "Do you provide SEO and Google Ads for all industries?",
      a: "Yes. Axis Media Digital offers SEO, Google Ads, website design, landing pages, local SEO, content marketing and lead generation strategies tailored for different industries such as retail, healthcare, real estate, food, manufacturing, education and service businesses."
    },
    {
      q: "Can you help if my business is local and not nationwide?",
      a: "Absolutely. We help local businesses improve Google visibility, rank in location-based searches, generate local leads and attract nearby customers through local SEO, Google Business Profile optimization and geo-targeted ads."
    },
    {
      q: "How do you decide which marketing strategy is right for my industry?",
      a: "We first understand your business model, audience, competitors, goals, budget and current digital presence. Then we create a strategy based on your industry needs, whether that means SEO for long-term growth, Google Ads for quick leads, website improvements for better conversions, or a complete digital marketing plan."
    },
    {
      q: "Do you work with small businesses and startups?",
      a: "Yes. We work with startups, small businesses, growing brands and established companies. We customize the strategy according to your budget, market and growth stage."
    },
    {
      q: "How long does it take to see results?",
      a: "Paid ads can start generating traffic and leads much faster, often within days after launch. SEO usually takes more time and builds momentum over several months. The exact timeline depends on competition, website quality, budget and your industry."
    },
    {
      q: "Will you also improve my website for conversions?",
      a: "Yes. Good traffic alone is not enough. We focus on conversion-friendly website structure, call-to-actions, fast loading pages, service pages, landing pages and user experience improvements so that more visitors turn into leads or customers."
    },
    {
      q: "Can you help generate leads instead of just traffic?",
      a: "Yes, lead generation is one of our main goals. Our strategies are designed not just to increase visibility, but to bring inquiries, calls, form submissions, bookings and real business opportunities."
    }
  ];

  const processSteps = [
    {
      title: "Industry Research",
      desc: "We study your business category, competitors, target audience, location demand and customer behavior before planning any campaign."
    },
    {
      title: "Custom Strategy Planning",
      desc: "We create a tailored roadmap using SEO, paid ads, website improvements, landing pages and content based on your industry needs."
    },
    {
      title: "Execution & Optimization",
      desc: "Our team implements campaigns, optimizes pages, improves targeting and continuously refines performance for better results."
    },
    {
      title: "Reporting & Growth",
      desc: "We track visibility, leads, calls, conversions and overall business growth so you can clearly understand what is working."
    }
  ];

  const benefits = [
    "Industry-specific keyword targeting for better SEO performance",
    "More relevant ad campaigns that reduce wasted budget",
    "Website pages designed around customer intent and conversions",
    "Better local visibility for service-area and location-based businesses",
    "Clear communication of your services, products and unique value",
    "More qualified leads instead of random website traffic",
    "Content strategy aligned with your market and audience questions",
    "Long-term digital growth supported by data and optimization"
  ];

  const reasons = [
    {
      title: "Not Generic Marketing",
      desc: "We do not apply the same digital strategy to every business. Each industry gets its own content, targeting, positioning and lead generation approach."
    },
    {
      title: "SEO + Ads + Website Together",
      desc: "Most businesses need more than one service to grow properly. We combine SEO, Google Ads and conversion-focused design for stronger results."
    },
    {
      title: "Business-Focused Execution",
      desc: "Our goal is not just clicks or impressions. We focus on calls, leads, inquiries, bookings, visibility and measurable business growth."
    },
    {
      title: "Clear Communication",
      desc: "We explain strategies in a simple and practical way so clients understand what is happening, why it matters and what results to expect."
    }
  ];

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Digital Marketing Solutions for Different Industries | Axis Media Digital
        </title>

        <meta
          name="description"
          content="Axis Media Digital provides industry-specific digital marketing services including SEO, Google Ads, local SEO, lead generation and conversion-focused websites for retail, real estate, healthcare, food, manufacturing, education and more industries."
        />

        <meta
          name="keywords"
          content="industry specific digital marketing, digital marketing for industries, SEO for different industries, Google Ads for business, local SEO agency, industry marketing services, Axis Media Digital"
        />

        <link
          rel="canonical"
          href="https://www.axismediadigital.com/industries"
        />

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
                item: "https://www.axismediadigital.com/"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Industries",
                item: "https://www.axismediadigital.com/industries"
              }
            ]
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a
              }
            }))
          })}
        </script>
      </Helmet>

      <main className="bg-gradient-to-b from-[#F4FFF7] to-[#E8F8EE] text-gray-900">
        {/* ================= HERO ================= */}
        <section className="pt-32 pb-16 text-center max-w-6xl mx-auto px-6">
          <p className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-4 py-2 text-xs md:text-sm font-semibold mb-6">
            Customized Marketing Strategies for Different Business Industries
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Industry-Specific Digital Marketing Services That Help Businesses
            Generate More Leads, Visibility and Sales
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Axis Media Digital helps businesses grow with tailored digital marketing
            strategies designed for their industry, audience and goals. Whether
            you need SEO, Google Ads, local lead generation, website development
            or a complete growth plan, we build solutions that match your business
            model instead of using a one-size-fits-all approach.
          </p>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Different industries require different messaging, keywords, ad targeting,
            landing pages and conversion strategies. A healthcare clinic, retail
            store, real estate agency, restaurant or manufacturing business cannot
            grow with the same marketing formula. That is why we create customized
            campaigns that align with your market demand and customer behavior.
          </p>

          {/* INTERNAL LINKS */}
          <p className="mt-6 text-gray-600">
            Explore our{" "}
            <Link
              to="/digital-marketing"
              className="text-emerald-700 font-semibold underline"
            >
              Digital Marketing Services
            </Link>
            ,{" "}
            <Link
              to="/seo-services"
              className="text-emerald-700 font-semibold underline"
            >
              SEO Solutions
            </Link>{" "}
            ,{" "}
            <Link
              to="/google-ads"
              className="text-emerald-700 font-semibold underline"
            >
              Google Ads Management
            </Link>{" "}
            and{" "}
            <Link
              to="/contact"
              className="text-emerald-700 font-semibold underline"
            >
              Request a Free Consultation
            </Link>
            .
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold text-lg hover:bg-emerald-700 transition shadow-md"
            >
              Get Free Consultation
            </Link>

            <Link
              to="/digital-marketing"
              className="px-8 py-3 bg-white text-emerald-700 border border-emerald-200 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition shadow-sm"
            >
              Explore Services
            </Link>
          </div>
        </section>

        {/* ================= INTRO CONTENT ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
                  Why Industry-Specific Digital Marketing Matters
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Many businesses invest in marketing but still struggle to get
                  quality leads because their strategy is too broad or disconnected
                  from their industry. Customers search differently, compare
                  differently and convert differently depending on what they need.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For example, someone searching for a doctor, restaurant,
                  interior designer, manufacturer or property consultant has
                  completely different intent. They use different keywords, expect
                  different content and respond to different offers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At Axis Media Digital, we create marketing systems that fit your
                  business niche. This helps improve search rankings, ad relevance,
                  user trust and conversion rates while making your investment more
                  effective.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-5">
                  What We Help Businesses Achieve
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {benefits.map((item, index) => (
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

        {/* ================= INDUSTRIES GRID ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Industries We Serve with Tailored Digital Marketing Strategies
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We help different types of businesses grow online with custom SEO,
              paid ads, lead generation systems and conversion-focused digital
              experiences. Explore the industries below to see how our strategies
              are adapted to each market.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {IndustriesData.map((cat) => {
              const Icon = cat.icon;

              return (
                <article
                  key={cat.id}
                  className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition min-h-[460px] flex flex-col"
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="p-5 rounded-xl bg-gray-50 shadow-inner shrink-0">
                      <Icon className={`text-5xl ${cat.colorClass}`} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold leading-snug">
                        {cat.title} Digital Marketing
                      </h2>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                        {cat.longDesc?.slice(0, 170)}...
                      </p>
                    </div>
                  </div>

                  <ul className="text-gray-700 mb-8 space-y-3 text-[15px]">
                    {cat.features?.slice(0, 5).map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-emerald-600 font-extrabold mt-1">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex gap-4">
                    <Link
                      to={`/industries/${cat.id}`}
                      className="flex-1 text-center px-5 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
                    >
                      View Industry
                    </Link>

                    <Link
                      to="/contact"
                      className="flex-1 text-center px-5 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition"
                    >
                      Consultation
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Why Businesses Choose Axis Media Digital
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We focus on practical strategies that improve visibility, attract
              the right audience and support real business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                Our Process for Industry-Focused Business Growth
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We follow a structured approach to understand your market, build
                the right digital strategy and optimize performance over time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LONG FORM CONTENT ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
              <h2 className="text-3xl font-extrabold mb-5">
                What Makes a Good Industry Marketing Strategy?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A strong digital marketing strategy starts with understanding how
                customers discover businesses in your industry. Some industries
                depend heavily on local searches, while others need long-form SEO
                content, high-converting landing pages or aggressive paid ad
                campaigns to compete effectively.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For service businesses, trust and lead generation are often the
                priority. For product-based businesses, traffic quality, product
                pages and conversion optimization matter more. For high-ticket
                businesses, the content and user journey must answer important
                questions before a customer is ready to contact you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                That is why our strategies are not based only on channels. They
                are based on your business category, buying cycle, competition,
                offer structure and customer expectations.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
              <h2 className="text-3xl font-extrabold mb-5">
                Common Problems We Help Businesses Solve
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-extrabold mt-1">•</span>
                  <span>Website traffic is low or not converting into leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-extrabold mt-1">•</span>
                  <span>Google Ads budget is being spent without quality inquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-extrabold mt-1">•</span>
                  <span>SEO rankings are weak for industry-relevant keywords</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-extrabold mt-1">•</span>
                  <span>Business is visible online but not standing out against competitors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-extrabold mt-1">•</span>
                  <span>Landing pages are not convincing enough to generate trust</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-extrabold mt-1">•</span>
                  <span>Marketing lacks direction, consistency or measurable reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-extrabold mt-1">•</span>
                  <span>Business needs more local visibility, calls, bookings or form submissions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              These are some of the common questions businesses ask before choosing
              industry-specific digital marketing services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-7"
              >
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL CONTENT BLOCK ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
                Ready to Grow Your Business with the Right Industry Marketing Strategy?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Whether you run a local service business, retail brand, healthcare
                clinic, food business, education company, real estate firm or
                manufacturing business, the right digital marketing plan can help
                you attract better leads and build stronger long-term growth.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At Axis Media Digital, we build customized strategies based on your
                business type, service model, audience behavior and growth goals.
                Instead of generic marketing packages, we focus on the channels,
                keywords and conversion paths that matter most for your industry.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                If you are looking for a digital marketing partner that understands
                business growth, audience targeting, SEO visibility, paid ads
                performance and website conversions, we are here to help.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto bg-emerald-600 text-white p-12 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-extrabold">
                Looking for digital marketing tailored to your industry?
              </h3>
              <p className="text-white/90 mt-3 text-lg leading-relaxed">
                Let us understand your business, identify the best growth
                opportunities and create a strategy designed for your industry,
                audience and goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-emerald-700 rounded-lg font-semibold text-lg hover:bg-gray-100 text-center"
              >
                Book Free Strategy Call
              </Link>

              <Link
                to="/seo-services"
                className="px-8 py-4 bg-emerald-700 text-white rounded-lg font-semibold text-lg hover:bg-emerald-800 text-center"
              >
                Explore SEO Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}