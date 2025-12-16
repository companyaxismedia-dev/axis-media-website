import React from "react";
import { NavLink } from "react-router-dom";
import servicesData from "../data/servicesData";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function ServicesGrid() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-[#EEF3FF] to-[#E8ECF5]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-20">

          <div>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-4"
            >
              Professional Digital Services That Grow Your Business
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Axis Media provides complete digital solutions including website
              development, SEO, social media marketing, branding and online
              advertising to help businesses grow faster.
            </p>

            <ul className="space-y-3 text-gray-900 text-lg">
              {[
                "Custom website & landing page development",
                "SEO strategies that improve Google ranking",
                "High-ROI Facebook, Google & Instagram ads",
                "Brand identity, graphics & creative design",
                "Complete digital marketing & lead generation",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            <NavLink
              to="/contact"
              className="inline-block mt-8 bg-blue-600 text-white py-3 px-8
              rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Get Free Consultation
            </NavLink>
          </div>

          {/* HERO IMAGE */}
          <div className="flex justify-center">
            <img
              src="/DigitalMarketingServices.webp"
              alt="Digital Marketing Services by Axis Media"
              width="800"
              height="520"
              loading="eager"
              className="rounded-3xl shadow-2xl w-full max-w-4xl object-cover"
            />
          </div>
        </div>

        {/* SECTION HEADING */}
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Professional Digital Services
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Website development, SEO, advertising and creative design services
            tailored for business growth.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s) => (
            <article
              key={s.slug}
              className="bg-white rounded-2xl shadow-lg overflow-hidden
              border hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={s.heroImage}
                  alt={`${s.title} service by Axis Media`}
                  width="420"
                  height="260"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {s.title}
                </h4>
                <p className="text-gray-600 mb-4">{s.summary}</p>

                <div className="flex items-center justify-between">
                  <NavLink
                    to={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                  >
                    More Details <FaArrowRight />
                  </NavLink>

                  <ul className="text-sm text-gray-500 space-y-1">
                    {s.bullets?.slice(0, 2).map((b, i) => (
                      <li key={i}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* TRUSTED BRANDS */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Trusted by Global Brands
          </h3>

          <div className="flex items-center justify-center gap-12 flex-wrap">
            {[
              ["ibm", "IBM"],
              ["sap", "SAP"],
              ["vodafone", "Vodafone"],
              ["cocacola", "Coca-Cola"],
              ["diagnosis", "Diagnosis"],
              ["sony", "Sony"],
              ["merck", "Merck"],
              ["straumann", "Straumann"],
            ].map(([img, name]) => (
              <img
                key={name}
                src={`/${img}.webp`}
                alt={`${name} brand logo`}
                loading="lazy"
                width="120"
                height="40"
                className="h-10 object-contain"
              />
            ))}
          </div>
        </div>

        {/* CASE STUDIES */}
        <div className="mt-24">
          <h3 className="text-4xl font-extrabold text-center text-[#0A144A] leading-snug">
            Helping Organizations Solve Unique Digital Challenges
          </h3>
        </div>

        <div className="mt-14 overflow-x-auto lg:overflow-x-visible">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-max lg:w-full pb-4">

            {[
              { img: "/IBMimage (1).webp", logo: "/ibm.webp", text: "IBM rolled out digital programs across 23 countries." },
              { img: "/Straumannimage (1).webp", logo: "/sap.webp", text: "SAP improved workflow efficiency by 52%." },
              { img: "/VODAFONEimage (1).webp", logo: "/vodafone.webp", text: "Vodafone trained 4,000+ global marketers." },
              { img: "/SONYIMAGE (1).webp", logo: "/cocacola.webp", text: "Coca-Cola boosted marketing efficiency by 29%." },
            ].map((c, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border min-w-[310px]"
              >
                <img
                  src={c.img}
                  alt="Enterprise digital transformation case study"
                  loading="lazy"
                  width="320"
                  height="200"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <img
                    src={c.logo}
                    alt="Brand logo"
                    loading="lazy"
                    className="h-7 mb-3 object-contain"
                  />
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    {c.text}
                  </p>
                </div>
              </article>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
