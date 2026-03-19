import React from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaCheckCircle,
  FaBullhorn,
  FaSearch,
  FaLaptopCode,
  FaUsers,
  FaChartLine,
  FaRocket,
  FaClipboardList,
} from "react-icons/fa";
import dmServicesData from "../data/dmServicesData";

export default function DigitalMarketingDetailPage() {
  const { slug } = useParams();
  const service = dmServicesData.find((s) => s.slug === slug);

  if (!service) {
    return <div className="pt-40 text-center text-2xl">Service Not Found</div>;
  }

  const { intro, benefits, features, faqs } = service.longContent;
  const pageUrl = `https://www.axismediadigital.com/digital-marketing/${slug}`;

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white via-[#F8FAFF] to-[#EEF4FF]">
      <Helmet>
        <title>{service.title} Company in Delhi | Axis Media Digital</title>

        <meta
          name="description"
          content={`${intro} Axis Media Digital provides professional ${service.title.toLowerCase()} services in Delhi to help businesses grow online.`}
        />

        <link rel="canonical" href={pageUrl} />

        {faqs && (
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

      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm text-gray-600 mb-4">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>{" "}
          /{" "}
          <NavLink to="/digital-marketing" className="hover:underline">
            Digital Marketing
          </NavLink>{" "}
          / <span className="font-semibold">{service.title}</span>
        </p>

        <div className="bg-white rounded-3xl shadow-xl border border-[#E7EEFA] overflow-hidden mb-12">
          <img
            src={service.heroImage}
            alt={`${service.title} services in Delhi`}
            className="w-full h-auto object-cover"
          />

          <div className="p-8 md:p-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A144A] mb-6">
              {service.title} Services in Delhi
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {intro} We help businesses improve visibility, generate qualified
              leads, strengthen brand trust and increase ROI through
              result-driven digital marketing strategies built around real
              customer intent.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If your business wants more traffic, stronger conversions, better
              campaign performance and a more reliable digital presence, our
              {` ${service.title.toLowerCase()} `}
              services are designed to support long-term business growth.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-[#E7EEFA] p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold text-[#0A144A] mb-5">
            Service Overview
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            {service.title} is one of the most important digital growth
            channels for businesses that want to increase visibility, build
            trust and attract better customers online. A strong strategy in this
            area helps brands improve discoverability, strengthen their digital
            presence and create a better customer journey from first click to
            final conversion.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            At Axis Media Digital, we approach {service.title.toLowerCase()}
            with a business-first mindset. That means we do not just focus on
            activity — we focus on outcomes. We look at traffic quality,
            conversion potential, content clarity, user experience, campaign
            alignment and business relevance.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our goal is to help businesses in Delhi and across India turn digital
            visibility into practical business growth by combining strategy,
            execution and ongoing optimization.
          </p>
        </div>

        <div className="mb-12">
          <p className="text-gray-700 text-lg">
            Explore our complete{" "}
            <Link
              to="/digital-marketing"
              className="text-emerald-600 font-semibold underline"
            >
              digital marketing services
            </Link>{" "}
            or view{" "}
            <Link
              to="/industries"
              className="text-emerald-600 font-semibold underline"
            >
              industry-specific solutions
            </Link>
            .
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-[#E7EEFA] p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold text-[#0A144A] mb-6">
            Benefits of {service.title}
          </h2>

          <ul className="grid md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <li
                key={i}
                className="flex gap-3 bg-[#F8FAFF] border border-[#E7EEFA] rounded-2xl p-5"
              >
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                <span className="text-gray-700 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-[#E7EEFA] p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold text-[#0A144A] mb-6">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 bg-[#F8FAFF] border border-[#E7EEFA] rounded-2xl text-gray-700 leading-relaxed"
              >
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-3xl shadow-lg border border-[#E7EEFA] p-8">
            <FaSearch className="text-3xl text-[#2EA3F2] mb-4" />
            <h2 className="text-2xl font-bold text-[#0A144A] mb-4">
              Why This Service Matters
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Businesses today operate in a market where customers compare,
              search and evaluate online before making decisions. A properly
              managed {service.title.toLowerCase()} strategy helps businesses
              stay visible, relevant and competitive in a crowded digital
              environment.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-[#E7EEFA] p-8">
            <FaChartLine className="text-3xl text-[#10B981] mb-4" />
            <h2 className="text-2xl font-bold text-[#0A144A] mb-4">
              Business Growth Impact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Better digital execution usually leads to higher quality traffic,
              stronger trust, better inquiry rates, improved lead generation
              and stronger conversion performance. That is why this service
              becomes a key part of long-term business growth.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-[#E7EEFA] p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold text-[#0A144A] mb-8">
            Who Needs {service.title} Services?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E7EEFA]">
              <FaUsers className="text-3xl text-[#6D28D9] mb-4" />
              <h3 className="text-xl font-semibold text-[#0A144A] mb-3">
                Local Businesses
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Businesses targeting customers in Delhi or nearby areas can use
                this service to improve local visibility and generate more leads.
              </p>
            </div>

            <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E7EEFA]">
              <FaBullhorn className="text-3xl text-[#F59E0B] mb-4" />
              <h3 className="text-xl font-semibold text-[#0A144A] mb-3">
                Service Providers
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Salons, consultants, clinics, coaches and agencies benefit from
                stronger digital visibility and more inquiry-focused traffic.
              </p>
            </div>

            <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E7EEFA]">
              <FaLaptopCode className="text-3xl text-[#2EA3F2] mb-4" />
              <h3 className="text-xl font-semibold text-[#0A144A] mb-3">
                Growing Brands
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Businesses that already have a website or digital presence can
                use this service to improve performance and scale results.
              </p>
            </div>

            <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E7EEFA]">
              <FaRocket className="text-3xl text-[#EC4899] mb-4" />
              <h3 className="text-xl font-semibold text-[#0A144A] mb-3">
                Startups
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Startups need visibility, trust and traction. This service helps
                create a stronger online foundation for growth.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-[#E7EEFA] p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold text-[#0A144A] mb-8">
            Our Process for {service.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaClipboardList className="text-3xl text-[#2EA3F2] mb-4" />,
                title: "Research",
                text: "We start with understanding your market, audience, competitors and existing performance.",
              },
              {
                icon: <FaSearch className="text-3xl text-[#6D28D9] mb-4" />,
                title: "Strategy",
                text: "We create a practical strategy aligned with business goals, search intent and conversion opportunities.",
              },
              {
                icon: <FaLaptopCode className="text-3xl text-[#10B981] mb-4" />,
                title: "Execution",
                text: "Our team implements improvements, optimizations, campaigns and supporting content assets.",
              },
              {
                icon: <FaChartLine className="text-3xl text-[#F59E0B] mb-4" />,
                title: "Optimization",
                text: "We review performance and keep improving results through data-driven refinements.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E7EEFA]"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-[#0A144A] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-[#E7EEFA] p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold text-[#0A144A] mb-8">
            Why Choose Axis Media Digital
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Business-focused digital strategy instead of generic execution",
              "Transparent communication and practical recommendations",
              "SEO-friendly and conversion-focused website understanding",
              "Support for local businesses, service providers and brands",
              "Focus on quality traffic, visibility and lead generation",
              "Creative plus data-driven thinking",
              "Affordable and scalable service options",
              "Long-term digital growth mindset",
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-3 bg-[#F8FAFF] border border-[#E7EEFA] rounded-2xl p-5"
              >
                <FaCheckCircle className="text-[#6D28D9] mt-1 shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {faqs && (
          <div className="bg-white rounded-3xl shadow-lg border border-[#E7EEFA] p-8 md:p-10 mb-12">
            <h2 className="text-3xl font-bold text-[#0A144A] mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-[#F8FAFF] border border-[#E7EEFA] rounded-2xl p-5"
                >
                  <summary className="font-semibold text-[#0A144A] cursor-pointer">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-lg border border-[#E7EEFA] p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold text-[#0A144A] mb-6">
            Related Digital Marketing Services
          </h2>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/digital-marketing/seo-services"
              className="px-5 py-3 rounded-full bg-[#EEF4FF] text-[#0A144A] font-medium hover:bg-[#dfeaff] transition"
            >
              SEO Services
            </Link>
            <Link
              to="/digital-marketing/google-ads"
              className="px-5 py-3 rounded-full bg-[#EEF4FF] text-[#0A144A] font-medium hover:bg-[#dfeaff] transition"
            >
              Google Ads
            </Link>
            <Link
              to="/digital-marketing/social-media-marketing"
              className="px-5 py-3 rounded-full bg-[#EEF4FF] text-[#0A144A] font-medium hover:bg-[#dfeaff] transition"
            >
              Social Media Marketing
            </Link>
            <Link
              to="/digital-marketing/website-development"
              className="px-5 py-3 rounded-full bg-[#EEF4FF] text-[#0A144A] font-medium hover:bg-[#dfeaff] transition"
            >
              Website Development
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0A144A] to-[#1E3A8A] rounded-3xl shadow-xl p-8 md:p-10 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow with {service.title}?
          </h2>

          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            If you want a stronger digital presence, better visibility, more
            qualified leads and a performance-focused strategy, Axis Media
            Digital is ready to help you move forward.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <NavLink
              to="/contact"
              className="inline-block px-8 py-3 bg-white text-[#0A144A] rounded-xl font-semibold hover:opacity-90 transition"
            >
              Get Free Consultation
            </NavLink>

            <NavLink
              to="/packages"
              className="inline-block px-8 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#0A144A] transition"
            >
              View Packages
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}