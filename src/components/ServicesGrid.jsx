import React from "react";
import { NavLink } from "react-router-dom";
import servicesData from "../data/servicesData";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function ServicesGrid() {
  return (
    <div className="py-16 bg-gradient-to-b from-[#EEF3FF] to-[#E8ECF5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ⭐ HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-4">
              Professional Digital Services  
              <span className="text-blue-600"> That Grow Your Business</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              From websites and branding to SEO, social media and advertising —
              we provide complete digital solutions that help businesses grow
              faster with modern strategy and creativity.
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
              className="inline-block mt-8 bg-blue-600 text-white py-3 px-8 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Get Free Consultation
            </NavLink>
          </div>

          <div className="flex justify-center">
            <img
              src="/DigitalMarketingServices.webp"
              
               className="rounded-3xl shadow-2xl w-full max-w-xl md:max-w-2xl lg:max-w-4xl object-cover"
               alt="Digital Marketing Services"
            />
          </div>
        </div>

        {/* ⭐ SECTION HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Professional Digital Services
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Professional digital solutions — websites, SEO, advertising and creative design.
          </p>
        </div>

        {/* ⭐ SERVICES GRID */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s) => (
            <article
              key={s.slug}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={s.heroImage}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {s.title}
                </h3>
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

        {/* ⭐ TRUSTED BRANDS */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Our services are trusted by:
          </h3>

          <div className="flex items-center justify-center gap-12 flex-wrap">
            <img src="/ibm.webp" className="h-10" />
            <img src="/sap.webp" className="h-10" />
            <img src="/vodafone.webp" className="h-10" />
            <img src="/cocacola.webp" className="h-10" />
            <img src="/diagnosis.webp" className="h-10" />
            <img src="/sony.webp" className="h-10" />
            <img src="/merck.webp" className="h-10" />
            <img src="/straumann.webp" className="h-10" />
          </div>
        </div>

        {/* ⭐ CASE STUDY HEADING */}
        <div className="mt-24">
          <h2 className="text-4xl font-extrabold text-center text-[#0A144A] leading-snug">
            Helping 100's of organizations <br />
            find solutions to their unique challenges
          </h2>
        </div>

        {/* ⭐ CASE STUDY GRID */}
        <div className="mt-14 overflow-x-auto lg:overflow-x-visible">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-max lg:w-full pb-4">

            {[
              { img: "/IBMimage.webp", logo: "/ibm.webp", text: "IBM rolled out a digital program for 4,000+ sales teams across 23 countries." },
              { img: "/SAPimage.webp", logo: "/sap.webp", text: "SAP improved workflow efficiency by 52% through digital transformation." },
              { img: "/VODAFONEimage.webp", logo: "/vodafone.webp", text: "Vodafone trained 4,000+ global marketers." },
              { img: "/COCACOLAimage.webp", logo: "/cocacola.webp", text: "Coca-Cola achieved a 29% boost in marketing efficiency." },
              { img: "/DIAGNOSISimage.webp", logo: "/diagnosis.webp", text: "Diagnosis improved productivity by 41%." },
              { img: "/SONYIMAGE.webp", logo: "/sony.webp", text: "Sony upgraded collaboration globally." },
              { img: "/MERCKimage.webp", logo: "/merck.webp", text: "Merck improved global compliance by 47%." },
              { img: "/Straumannimage.webp", logo: "/straumann.webp", text: "Straumann upskilled 8,000+ professionals." },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border min-w-[310px]">
                <img src={c.img} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <img src={c.logo} className="h-7 mb-3" />
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    {c.text}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
