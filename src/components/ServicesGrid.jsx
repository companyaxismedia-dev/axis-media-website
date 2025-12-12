// src/components/ServicesGrid.jsx
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
              src="https://images.pexels.com/photos/6476801/pexels-photo-6476801.jpeg"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
              alt="Digital Services"
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
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Our services are trusted by:
          </h3>

          <div className="flex items-center justify-center gap-12 flex-wrap">
            <img src="https://www.grapheine.com/wp-content/uploads/2017/01/logo_ibm13Bar_large-800x321.jpg" className="h-10" />
            <img src="https://www.liblogo.com/img-logo/sa2839sef2-sap-logo-sap-logo-png-vector-free-download-sap-logo-full-size-png.png" className="h-10" />
            <img src="https://logos-world.net/wp-content/uploads/2020/09/Vodafone-Logo-2017-present.jpg" className="h-10" />
            <img src="https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo-1987-2009.png" className="h-10" />
            <img src="https://img.freepik.com/premium-vector/diagnosis-logo-designs-medical-service-health-care-logo_1093924-535.jpg?w=2000" className="h-10" />
            <img src="https://wallpapers.com/images/featured/sony-logo-png-z15acmyawti9lbs9.png" className="h-10" />
            <img src="https://purepng.com/public/uploads/large/purepng.com-merck-logologobrand-logoiconslogos-251519939205s1lmj.png" className="h-10" />
            <img src="https://smilecareleicester.co.uk/wp-content/uploads/2019/07/straumann-logo-colour.png" className="h-10" />
          </div>
        </div>



        {/* ⭐ CASE STUDY HEADING */}
        <div className="mt-24">
          <h2 className="text-4xl font-extrabold text-center text-[#0A144A] leading-snug">
            Helping 100's of organizations <br />
            find solutions to their unique challenges
          </h2>
        </div>



        {/* ⭐ CASE STUDY — GRID on DESKTOP + SCROLL on MOBILE */}
        <div className="mt-14">
          <div className="overflow-x-auto scrollbar-hide lg:overflow-x-visible">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-max lg:w-full pb-4">

              {[
                {
                  img: "https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg",
                  logo: "https://www.grapheine.com/wp-content/uploads/2017/01/logo_ibm13Bar_large-800x321.jpg",
                  text: "IBM rolled out a digital program for 4,000+ sales teams across 23 countries.",
                  link: "Read IBM Case Study →"
                },
                {
                  img: "https://images.pexels.com/photos/3184408/pexels-photo-3184408.jpeg",
                  logo: "https://www.liblogo.com/img-logo/sa2839sef2-sap-logo-sap-logo-png-vector-free-download-sap-logo-full-size-png.png",
                  text: "SAP improved workflow efficiency by 52% through digital transformation.",
                  link: "Read SAP Case Study →"
                },
                {
                  img: "https://images.pexels.com/photos/3182784/pexels-photo-3182784.jpeg",
                  logo: "https://logos-world.net/wp-content/uploads/2020/09/Vodafone-Logo-2017-present.jpg",
                  text: "Vodafone trained 4,000+ global marketers, improving brand performance.",
                  link: "Read Vodafone Case Study →"
                },
                {
                  img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
                  logo: "https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo-1987-2009.png",
                  text: "Coca-Cola achieved a 29% boost in marketing efficiency.",
                  link: "Read Coca-Cola Case Study →"
                },
                {
                  img: "https://images.pexels.com/photos/8460121/pexels-photo-8460121.jpeg",
                  logo: "https://img.freepik.com/premium-vector/diagnosis-logo-designs-medical-service-health-care-logo_1093924-535.jpg?w=2000",
                  text: "Diagnosis improved medical productivity by 41% through digital learning.",
                  link: "Read Diagnosis Case Study →"
                },
                {
                  img: "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg",
                  logo: "https://wallpapers.com/images/featured/sony-logo-png-z15acmyawti9lbs9.png",
                  text: "Sony upgraded collaboration across global teams.",
                  link: "Read Sony Case Study →"
                },
                {
                  img: "https://images.pexels.com/photos/8460152/pexels-photo-8460152.jpeg",
                  logo: "https://purepng.com/public/uploads/large/purepng.com-merck-logologobrand-logoiconslogos-251519939205s1lmj.png",
                  text: "Merck improved global compliance by 47%.",
                  link: "Read Merck Case Study →"
                },
                {
                  img: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
                  logo: "https://smilecareleicester.co.uk/wp-content/uploads/2019/07/straumann-logo-colour.png",
                  text: "Straumann upskilled 8,000+ professionals worldwide.",
                  link: "Read Straumann Case Study →"
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border min-w-[310px] lg:min-w-0"
                >
                  <img src={c.img} className="w-full h-40 object-cover" />

                  <div className="p-5">
                    <img src={c.logo} className="h-7 mb-3" />

                    <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
                      {c.text}
                    </p>

                    <NavLink className="text-blue-600 font-semibold text-[15px]">
                      {c.link}
                    </NavLink>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>



      </div>
    </div>
  );
}
