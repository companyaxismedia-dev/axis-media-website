import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import primenestImg from "../assets/primenest.png";
import urbanglowImg from "../assets/urbanglow.png";

const caseStudies = [
  {
    id: 1,
    title: "PrimeNest Interiors SEO Case Study: 613% Growth in Organic Traffic",
    description:
      "PrimeNest is a Shopify-based home furnishings brand selling rugs, mats and cushion covers in a highly competitive online market. The brand needed a stronger SEO foundation to increase organic traffic, improve keyword rankings and turn search visibility into a reliable revenue channel. At the beginning of the project, organic reach was limited, key product and collection pages were not performing well, and most important keywords were ranking beyond page one. Our team built a Shopify-focused SEO strategy that included technical SEO improvements, collection page optimization, product page content enhancement, internal linking upgrades, keyword expansion and on-page structure refinement. We also focused on capturing high-intent non-branded searches so the website could attract customers who were actively looking for rugs, mats and home décor products. As a result, PrimeNest achieved a 613% increase in organic traffic, ranked 90+ keywords on page one and pushed 80% of primary keywords into the top 10 positions.",
    image: primenestImg,
    caseStudyLink: "/packages",
    latestWorkLink: "/packages",
  },
  {
    id: 2,
    title: "UrbanGlow Salon SEO Case Study: 100% Keyword Visibility",
    description:
      "UrbanGlow Salon wanted to improve local keyword visibility and strengthen its search presence for high-conversion beauty and salon-related queries. Before the campaign started, the website had weak keyword visibility, limited service pages, low location relevance and several on-page SEO gaps that were preventing it from ranking effectively on Google. Our team rebuilt the SEO foundation by creating dedicated service and location-focused pages, improving metadata, optimizing headings and content, resolving technical issues and strengthening internal linking. We also worked on keyword targeting aligned with salon services such as hair styling, beauty treatments, makeup services and bridal bookings. With this structured SEO execution, UrbanGlow achieved 100% keyword visibility, moved important keywords from not-found positions into first-page rankings and improved its ability to attract high-intent local customers actively searching for salon services.",
    image: urbanglowImg,
    caseStudyLink: "/packages",
    latestWorkLink: "/packages",
  },
];

export default function HomeCaseStudySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCaseStudy = caseStudies[activeIndex];

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-10 md:py-12 bg-[#f7f7f7]"
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2
            id="case-studies-heading"
            className="text-[34px] md:text-[54px] font-bold uppercase text-[#2EA3F2]"
          >
            REAL RESULTS FOR REAL BUSINESSES
          </h2>
          <div className="w-14 h-[5px] bg-[#2EA3F2] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h3 className="text-[22px] md:text-[30px] font-semibold leading-[1.25] text-[#6D28D9] mb-5">
              {activeCaseStudy.title}
            </h3>

            <p className="text-[14px] md:text-[15px] leading-[1.85] text-[#4b4b4b] mb-6">
              {activeCaseStudy.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <NavLink
                to={activeCaseStudy.caseStudyLink}
                className="inline-flex items-center justify-center bg-[#6D28D9] text-white font-bold uppercase px-6 py-3 rounded-full text-[13px] hover:bg-[#5B21B6] transition"
              >
                View Case Study
              </NavLink>

              <NavLink
                to={activeCaseStudy.latestWorkLink}
                className="inline-flex items-center justify-center bg-[#7C3AED] text-white font-bold uppercase px-6 py-3 rounded-full text-[13px] hover:bg-[#6D28D9] transition"
              >
                View Our Latest Work
              </NavLink>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[560px] border-l border-[#e6e6e6] pl-0 lg:pl-8">
              <img
                src={activeCaseStudy.image}
                alt={activeCaseStudy.title}
                className="w-full max-h-[620px] object-contain transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to case study ${index + 1}`}
              className={`h-[14px] rounded-full border-2 border-[#6D28D9] transition-all duration-300 ${
                activeIndex === index
                  ? "w-[52px] bg-[#6D28D9]"
                  : "w-[52px] bg-transparent hover:bg-[#6D28D9]/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}