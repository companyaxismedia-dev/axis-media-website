import React from "react";
import { NavLink } from "react-router-dom";
import servicesData from "../data/servicesData";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import gloviaLogo from "../assets/glovialogo.jpg";
import astrowalkLogo from "../assets/astrowalk.jpeg";
import imkaaLogo from "../assets/imkaa (3).png";
import damietreeLogo from "../assets/damietree.png";
import srimandirLogo from "../assets/srimandir.webp";
import blushLogo from "../assets/Blush.jpeg";
import prettyLogo from "../assets/pretty.jpeg";
import bootyBloomLogo from "../assets/booty-bloom.webp";
import designLogo from "../assets/design.jpeg";
import corporateLogo from "../assets/corporate.jpg";
import hairLogo from "../assets/hair.jpeg";
import yourLogo from "../assets/your.jpeg";
import imagesLogo from "../assets/images.jpeg";
import companyLogo from "../assets/company.jpeg";



export default function ServicesGrid() {

    const brandLogos = [
    { img: gloviaLogo, name: "GLOVIA-GLAMOUR" },
    { img: astrowalkLogo, name: "ASTROWALK" },
    { img: imkaaLogo, name: "IMKAA" },
    { img: damietreeLogo, name: "DAMIETREE" },
    { img: srimandirLogo, name: "SRIMANDIR-SHOP" },
    { img: blushLogo, name: "BLUSH" },
    { img: prettyLogo, name: "PRETTY" },
    { img: bootyBloomLogo, name: "BOOTY-BLOOM" },
    { img: designLogo, name: "DESIGN" },
    { img: yourLogo, name: "YOUR" },
    { img: hairLogo, name: "HAIR" },
    { img: imagesLogo, name: "images" },
    { img: corporateLogo, name: "CORPORATE" },
    { img: companyLogo, name: "COMPANY" },
    
  ];

  return (
    <section
      className="py-16 bg-gradient-to-b from-[#F7FAFF] via-[#EEF4FB] to-[#E9F0F8]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6">

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

        <div className="py-10 md:py-14 text-center max-w-[1200px] mx-auto px-6">

          <h3 className="text-[26px] md:text-[42px] font-extrabold uppercase leading-[1.2] text-[#2EA3F2] mb-6 tracking-tight">
            COMPLETE DIGITAL SERVICES FOR MODERN
            <br />
            BUSINESSES
          </h3>

          <p className="text-[#243B63] text-[15px] md:text-[17px] leading-[1.8] max-w-[1000px] mx-auto">
            Building a strong digital presence is essential for every modern
            business. Today customers search, compare and make decisions across
            multiple online platforms before choosing a brand. Axis Media delivers
            complete digital services including professional website development,
            search engine optimization (SEO), social media marketing, performance
            advertising, branding and creative design.

            Our team focuses on creating powerful digital strategies that improve
            online visibility, attract the right audience and convert visitors into
            loyal customers. By combining creativity, data-driven marketing and
            advanced digital tools, we help businesses grow faster and establish a
            strong presence across Google, social media and every major digital
            platform.
          </p>

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
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s) => (
            <article
              key={s.slug}
              className="group bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#201C78]"
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={s.heroImage}
                  alt={`${s.title} service by Axis Media`}
                  width="420"
                  height="260"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h4 className="text-[18px] md:text-[19px] font-bold text-[#0A144A] mb-4 transition-colors duration-300 group-hover:text-white">
                  {s.title}
                </h4>

                <p className="text-[14px] leading-6 text-slate-700 mb-6 transition-colors duration-300 group-hover:text-white/90">
                  {s.details || s.summary}
                </p>

                <NavLink
                  to={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 text-[#2EA3F2] font-semibold transition-all duration-300 group-hover:text-[#FF9B3D]"
                >
                  <span>More Details</span>
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </NavLink>
              </div>
            </article>
          ))}
        </div>

                        {/* TRUSTED BRANDS */}
              {/* TRUSTED BRANDS */}
      <div className="mt-24">
        <div className="max-w-[1440px] mx-auto px-6 text-center mb-10">
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#0A144A] tracking-tight">
            Trusted by Global Brands
          </h3>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Brands we’ve worked with across design, development and digital growth.
          </p>
        </div>

        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden border-y border-[#dbe4f3] bg-[#f3f6fb] shadow-[0_10px_35px_rgba(15,23,42,0.08)] py-6 md:py-8">
          <div className="flex w-max animate-logo-marquee items-center">
            {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-5 md:mx-6 w-[120px] md:w-[150px] h-[70px] md:h-[85px] flex items-center justify-center"
              >
                <img
                  src={brand.img}
                  alt={`${brand.name} brand logo`}
                  loading="lazy"
                  className="max-h-[90px] md:max-h-[110px] max-w-full object-contain opacity-95 hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-28 bg-gradient-to-r from-[#f3f6fb] via-[#f3f6fb]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-28 bg-gradient-to-l from-[#f3f6fb] via-[#f3f6fb]/80 to-transparent" />
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
              {
                img: gloviaLogo,
                logo: gloviaLogo,
                title: "Glovia Glamour",
                text: "Developed a premium lingerie e-commerce website with mobile-first design, boosting online visibility and customer engagement.",
              },
              {
                img: srimandirLogo,
                logo: srimandirLogo,
                title: "Sri Mandir Shop",
                text: "Built a spiritual products store with seamless checkout and SEO optimization, increasing daily organic traffic and conversions.",
              },
              {
                img: imkaaLogo,
                logo: imkaaLogo,
                title: "IMKAA Fashion",
                text: "Created a modern fashion brand website with clean UI and product showcase, helping improve brand identity and sales.",
              },
              {
                img: astrowalkLogo,
                logo: astrowalkLogo,
                title: "Astro Walk",
                text: "Designed astrology-based platform with strong branding and user experience, increasing user trust and session time.",
              },

            ].map((c, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border min-w-[310px] hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-16 object-contain bg-white p-2"
                />

                <div className="p-5">

                  {/* SMALL LOGO */}
                  <img
                    src={c.logo}
                    alt={c.title}
                    loading="lazy"
                    className="h-6 mb-2 object-contain opacity-80"
                  />

                  {/* BRAND NAME */}
                  <h4 className="text-[16px] font-semibold text-[#0A144A] mb-2">
                    {c.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {c.text}
                  </p>

                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
            <style>
        {`
          @keyframes logoMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .animate-logo-marquee {
            animation: logoMarquee 32s linear infinite;
          }

          .animate-logo-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

    </section>
  );
}
