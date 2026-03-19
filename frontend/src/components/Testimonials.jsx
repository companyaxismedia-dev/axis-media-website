import React from "react";
import astrowalk from "../assets/astrowalk.jpeg";
import srimandir from "../assets/srimandir.webp";
import glovia from "../assets/glovialogo.jpg";
import imkaa from "../assets/logo.webp";
import booty from "../assets/booty-bloom.webp";
import imkaa1 from "../assets/imkaa (3).png";
import damietree from "../assets/damietree.png";
import pretty from "../assets/pretty.jpeg";
import Blush from "../assets/Blush.jpeg";
import designLogo from "../assets/design.jpeg";
import corporateLogo from "../assets/corporate.jpg";
import hairLogo from "../assets/hair.jpeg";
import yourLogo from "../assets/your.jpeg";
import imagesLogo from "../assets/images.jpeg";
import companyLogo from "../assets/company.jpeg";

const reviews = [
  {
    name: "Ritika Mehra",
    business: "Fashion Boutique Website",
    text: "Axis Media designed our boutique website exactly the way we wanted. The layout looks premium, mobile-friendly and easy for customers to browse. After launch, we started getting regular inquiries from Instagram and Google.",
    img: "/Amit Verma (1).webp",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-700 text-white",
  },
  {
    name: "Vikas Arora",
    business: "Real Estate Business Website",
    text: "We needed a professional real estate website with lead forms, property sections and strong local SEO support. Their team delivered everything on time and the website helped us generate serious buyer and seller leads.",
    img: "/Pooja Singh.webp",
    color: "bg-gradient-to-br from-pink-500 to-rose-600 text-white",
  },
  {
    name: "Neha Kapoor",
    business: "Salon & Beauty Brand",
    text: "They built our salon website and handled our branding creatives as well. The website looks clean, elegant and easy to use. We now get more appointment bookings and our online presence feels much more professional.",
    img: "/Mahesh Kumar (1).webp",
    color: "bg-gradient-to-br from-teal-500 to-cyan-600 text-white",
  },
  {
    name: "Sandeep Chauhan",
    business: "Gym & Fitness Studio",
    text: "Axis Media created a fast and modern fitness website for our gym, including membership inquiry forms and class information. The design is strong, attractive and gives our business a premium identity online.",
    img: "/Divya Kapoor (1).webp",
    color: "bg-gradient-to-br from-yellow-500 to-orange-600 text-white",
  },
  {
    name: "Priya Nanda",
    business: "Dental Clinic Website",
    text: "Our clinic needed a trustworthy website that explained treatments clearly and encouraged appointment bookings. Their team built a clean healthcare website and also improved our visibility on Google for local searches.",
    img: "/Arjun Rao (1).webp",
    color: "bg-gradient-to-br from-red-500 to-red-700 text-white",
  },
  {
    name: "Kunal Bhatia",
    business: "E-commerce Store",
    text: "They developed our e-commerce website with product pages, payment integration and a much smoother shopping experience. The store now feels far more reliable and our conversions improved after the redesign.",
    img: "/Karan Sharma (1).webp",
    color: "bg-gradient-to-br from-sky-500 to-blue-600 text-white",
  },
  {
    name: "Shreya Malhotra",
    business: "Coaching Institute Website",
    text: "We wanted a website for our coaching institute that could showcase courses, collect student inquiries and build trust with parents. Axis Media delivered a professional education website that helped us get more admissions.",
    img: "/Neha Agarwal (1).webp",
    color: "bg-gradient-to-br from-purple-500 to-purple-700 text-white",
  },
  {
    name: "Rohit Bansal",
    business: "Restaurant & Cafe Brand",
    text: "Their team built a stylish restaurant website for us with menu display, contact information and location details. It made our brand look much stronger online and helped customers find us more easily through search.",
    img: "/Rohit Khanna (1).webp",
    color: "bg-gradient-to-br from-green-500 to-emerald-700 text-white",
  },
];

const brands = [
  { img: astrowalk, name: "Astrowalk" },
  { img: srimandir, name: "SriMandirShop" },
  { img: glovia, name: "GloviaGlamour" },
  { img: imkaa, name: "Imkaa" },
  { img: booty, name: "BootyBloom" },
  { img: imkaa1, name: "ImkaaAlt" },
  { img: damietree, name: "DamieTree" },
  { img: pretty, name: "Pretty" },
  { img: Blush, name: "Blush" },
  { img: designLogo, name: "Design" },
  { img: corporateLogo, name: "Corporate" },
  { img: hairLogo, name: "Hair" },
  { img: yourLogo, name: "Your" },
  { img: imagesLogo, name: "Images" },
  { img: companyLogo, name: "Company" },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 bg-[#F4F6FF]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          id="testimonials-heading"
          className="text-4xl font-extrabold text-center mb-4 text-[#0A144A]"
        >
          Client Reviews & Testimonials
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-8">
          We have worked with businesses across fashion, healthcare, real
          estate, fitness, beauty, education, restaurants and e-commerce to
          build websites and digital systems that generate real business growth.
        </p>

        <div className="overflow-x-auto py-4 scrollbar-hide">
          <div className="flex gap-6 w-max">
            {reviews.map((r, i) => (
              <article
                key={i}
                className={`min-w-[320px] max-w-[320px] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition hover:-translate-y-1 ${r.color}`}
              >
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src={r.img}
                    alt={`${r.name} client review`}
                    loading="lazy"
                    width="80"
                    height="80"
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                <p className="text-center text-xs font-semibold uppercase tracking-wide opacity-90 mb-3">
                  {r.business}
                </p>

                <p className="text-sm leading-7 mb-5 text-center italic">
                  “{r.text}”
                </p>

                <h3 className="text-center font-bold text-lg">{r.name}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-lg border">
            <img
              src="/Google.webp"
              alt="Google Reviews"
              loading="lazy"
              width="90"
              height="30"
              className="h-7 object-contain"
            />

            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
            </div>

            <p className="font-semibold text-gray-700 text-lg">
              Rated <span className="text-blue-600">4.9/5</span> by 120+ Clients
            </p>
          </div>
        </div>

              <div className="mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-3xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight mb-3">
            Trusted by Businesses Across Multiple Industries
          </h3>

          <p className="text-center text-gray-600 text-sm md:text-base mb-8">
            Brands we’ve worked with across design, development and digital growth.
          </p>
        </div>

        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden border-y border-[#dbe4f3] bg-[#eef2f8] shadow-[0_10px_35px_rgba(15,23,42,0.08)] py-6 md:py-8">
          <div className="flex w-max animate-logo-marquee items-center">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-5 md:mx-6 w-[120px] md:w-[150px] h-[70px] md:h-[85px] flex items-center justify-center"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  loading="lazy"
                  className="max-h-[90px] md:max-h-[110px] max-w-full object-contain opacity-95 hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-28 bg-gradient-to-r from-[#eef2f8] via-[#eef2f8]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-28 bg-gradient-to-l from-[#eef2f8] via-[#eef2f8]/80 to-transparent" />
        </div>
      </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-6 rounded-3xl shadow-xl text-center">
          <h3 className="text-3xl font-bold mb-3">
            Websites & Digital Growth Solutions for Every Industry
          </h3>

          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            From business websites and e-commerce stores to service-based
            landing pages and lead generation systems, Axis Media helps brands
            build a strong digital presence that drives trust, traffic and
            conversions.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-full shadow-md hover:shadow-xl transition"
          >
            Get a Free Growth Consultation
          </a>
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