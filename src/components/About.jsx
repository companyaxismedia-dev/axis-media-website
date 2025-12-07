import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const allAbout = [
  {
    title: "Google Ads",
    desc: "High-converting ad campaigns to reach your target audience.",
    image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg",
  },
  {
    title: "Digital Marketing",
    desc: "Complete online marketing solutions for business growth.",
    image: "https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg",
  },
  {
    title: "Grow Your Business",
    desc: "Strategies to scale and expand your business online.",
    image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
  },
  {
    title: "Brand Advertising",
    desc: "Boost your brand reach through targeted campaigns.",
    image: "https://images.pexels.com/photos/3184358/pexels-photo-3184358.jpeg",
  },
  {
    title: "Web Development",
    desc: "Responsive websites that convert visitors into customers.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  },
  {
    title: "Website Design",
    desc: "Modern UI/UX designs that keep users engaged.",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
  },
  {
    title: "Business Partnership",
    desc: "Partner with a team focused on your growth.",
    image: "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg",
  },
  {
    title: "Promote Your Business",
    desc: "Get more visibility, traffic, and leads online.",
    image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
  },
];

const typeLines = [
  "We Help Businesses Grow Smarter 🚀",
  "We Build Brands That People Trust",
  "We Bring Your Digital Vision To Life",
  "Your Growth Is Our Priority",
];

export default function About() {
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");

  const [batchStart, setBatchStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);

  const CARDS_PER_BATCH = 4;

  /* TYPEWRITER */
  useEffect(() => {
    let c = 0;
    const t = setInterval(() => {
      setTyped(typeLines[lineIndex].slice(0, c));
      c++;
      if (c > typeLines[lineIndex].length) {
        clearInterval(t);
        setTimeout(() => {
          setTyped("");
          setLineIndex((prev) => (prev + 1) % typeLines.length);
        }, 1200);
      }
    }, 90);
    return () => clearInterval(t);
  }, [lineIndex]);

  /* CARD ANIMATION */
  useEffect(() => {
    setVisibleCount(0);
    let timers = [];

    for (let i = 0; i < CARDS_PER_BATCH; i++) {
      timers.push(
        setTimeout(() => {
          setVisibleCount((prev) => prev + 1);
        }, i * 700)
      );
    }

    timers.push(
      setTimeout(() => {
        setBatchStart((prev) => (prev + CARDS_PER_BATCH) % allAbout.length);
      }, CARDS_PER_BATCH * 700 + 6000)
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, [batchStart]);

  const cardsToShow = [];
  for (let i = 0; i < CARDS_PER_BATCH; i++) {
    const idx = (batchStart + i) % allAbout.length;
    cardsToShow.push(allAbout[idx]);
  }

  return (
    <section className="
      relative py-24 text-white overflow-hidden
      bg-[#0A1D56]   /* 🔥 FIXED: NO DOUBLE COLOR */
    ">

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-12 
          bg-gradient-to-r from-blue-200 via-white to-blue-100 text-transparent bg-clip-text">
          {typed}
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cardsToShow.map((card, i) => (
            <div
              key={i}
              className={`
                bg-white/10 backdrop-blur-lg border border-white/20
                rounded-2xl p-6 shadow-xl text-center transition-all duration-700
                ${i < visibleCount ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                hover:scale-[1.05]
              `}
            >
              <div className="h-36 rounded-xl overflow-hidden mb-4">
                <img
                  src={card.image}
                  className="w-full h-full object-cover hover:scale-125 transition duration-700"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-white/90 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* EXTRA SECTIONS */}
        <div className="mt-24 max-w-5xl mx-auto">

          <SectionTitle title="Why Businesses Choose Us" />
          <ul className="grid sm:grid-cols-2 gap-6 text-white/90 text-lg">
            {[
              "5+ Years Experience in Digital Services",
              "High Quality & Professional Work",
              "Affordable Packages & Premium Support",
              "Proven Results & Growth Strategies",
            ].map((t, i) => (
              <li key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-300" /> {t}
              </li>
            ))}
          </ul>

          <SectionTitle title="Our Mission & Vision" />
          <p className="text-center text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
            Our mission is to empower businesses with digital solutions that generate real results.
            We aim to be your growth partner, helping you build a strong online presence and achieve long-term success.
          </p>

        </div>

      </div>
    </section>
  );
}

function SectionTitle({ title }) {
  return (
    <h2 className="text-3xl font-bold text-center text-blue-100 mt-20 mb-6">
      {title}
    </h2>
  );
}
