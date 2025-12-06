import React, { useEffect, useState } from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaGlobe,
  FaPalette,
  FaUsers,
  FaVideo,
  FaCheckCircle,
} from "react-icons/fa";

/* -------------------------------------------------------
   ⭐ ALL SERVICE CARDS 
------------------------------------------------------- */
const allServices = [
  {
    title: "Website Development",
    desc: "Modern, fast and mobile-friendly websites to represent your brand professionally.",
    icon: <FaGlobe className="text-4xl text-white" />,
    color: "bg-blue-500",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  },
  {
    title: "E-commerce Website",
    desc: "Secure and user-friendly online stores that convert visitors into customers.",
    icon: <FaGlobe className="text-4xl text-white" />,
    color: "bg-purple-500",
    image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
  },
  {
    title: "Social Media Marketing",
    desc: "Result-driven campaigns to increase followers and engagement.",
    icon: <FaBullhorn className="text-4xl text-white" />,
    color: "bg-green-500",
    image: "https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg",
  },
  {
    title: "Google Ads Management",
    desc: "High-ROI ad campaigns that bring quality leads and sales.",
    icon: <FaChartLine className="text-4xl text-white" />,
    color: "bg-blue-700",
    image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg",
  },
  {
    title: "SEO Services",
    desc: "Rank higher on Google and increase organic traffic with powerful SEO.",
    icon: <FaChartLine className="text-4xl text-white" />,
    color: "bg-indigo-500",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
  },
  {
    title: "Graphic Designing",
    desc: "Creative logos, posters and social media graphics.",
    icon: <FaPalette className="text-4xl text-white" />,
    color: "bg-pink-500",
    image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
  },
  {
    title: "Video Editing",
    desc: "Eye-catching reels, shorts and promo videos.",
    icon: <FaVideo className="text-4xl text-white" />,
    color: "bg-red-500",
    image: "https://images.pexels.com/photos/276024/pexels-photo-276024.jpeg",
  },
  {
    title: "Social Media Management",
    desc: "We fully manage your social media brand identity.",
    icon: <FaUsers className="text-4xl text-white" />,
    color: "bg-yellow-500",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
  },
  {
    title: "Brand Identity",
    desc: "Make your brand powerful with complete identity creation.",
    icon: <FaPalette className="text-4xl text-white" />,
    color: "bg-orange-500",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
  },
  {
    title: "Content Creation",
    desc: "High-quality content for all social platforms.",
    icon: <FaBullhorn className="text-4xl text-white" />,
    color: "bg-teal-500",
    image: "https://images.pexels.com/photos/4145352/pexels-photo-4145352.jpeg",
  },
  {
    title: "Lead Generation",
    desc: "High converting campaigns built for your business.",
    icon: <FaChartLine className="text-4xl text-white" />,
    color: "bg-lime-600",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    title: "Business Consulting",
    desc: "Grow your business with expert digital consulting.",
    icon: <FaUsers className="text-4xl text-white" />,
    color: "bg-cyan-600",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  },
];

/* -------------------------------------------------------
   ⭐ SENTENCES (TYPEWRITER)
------------------------------------------------------- */
const sentences = [
  "All Your Digital Services in One Place",
  "From Websites to Marketing – Everything You Need",
  "Grow Faster with Professional Online Services",
  "Smart Digital Solutions for Modern Businesses",
  "Services Designed to Bring You Real Results",
];

export default function ServicesGrid() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [batchStart, setBatchStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);

  const CARDS_PER_BATCH = 6;

  /* ⭐ Typewriter Effect */
  useEffect(() => {
    let char = 0;
    const typer = setInterval(() => {
      setDisplayText(sentences[lineIndex].slice(0, char));
      char++;
      if (char > sentences[lineIndex].length) {
        clearInterval(typer);
        setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % sentences.length);
          setDisplayText("");
        }, 1500);
      }
    }, 110);

    return () => clearInterval(typer);
  }, [lineIndex]);

  /* ⭐ Card Animation */
  useEffect(() => {
    setVisibleCount(0);
    const timers = [];
    for (let i = 0; i < CARDS_PER_BATCH; i++) {
      timers.push(setTimeout(() => setVisibleCount((prev) => prev + 1), i * 900));
    }

    timers.push(
      setTimeout(
        () => setBatchStart((prev) => (prev + CARDS_PER_BATCH) % allServices.length),
        CARDS_PER_BATCH * 900 + 6500
      )
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, [batchStart]);

  const batchCards = [...Array(CARDS_PER_BATCH)].map((_, i) => {
    const idx = (batchStart + i) % allServices.length;
    return allServices[idx];
  });

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">

      {/* ⭐ Background */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg')] bg-cover bg-center opacity-50 blur-sm"></div>

      <div className="relative z-10">

        {/* ⭐ Heading */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-green-700 min-h-[70px]">
            {displayText}
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-xl md:text-2xl font-bold text-black/90">
            Explore our powerful digital services built for your business growth.
          </p>
        </div>

        {/* ⭐ Service Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {batchCards.map((s, i) => {
            const isVisible = i < visibleCount;

            return (
              <div
                key={i}
                className={`rounded-2xl shadow-xl p-5 ${s.color}
                transition-all duration-700 transform
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                hover:scale-[1.05] hover:-rotate-1 hover:shadow-2xl`}
              >
                <div className="overflow-hidden rounded-xl mb-4 h-40">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover hover:scale-125 transition-all duration-700"
                  />
                </div>

                <div className="flex justify-center mb-3">{s.icon}</div>

                <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                <p className="text-white mt-2 text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* ⭐ EXTRA DETAILS */}
        <div className="mt-24 max-w-6xl mx-auto px-6">

          {/* How We Help */}
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
            How Our Services Help Your Business
          </h2>

          <ul className="grid sm:grid-cols-2 gap-6 text-lg text-black">
            {[
              "We build modern websites that convert visitors into customers",
              "We create powerful digital marketing campaigns",
              "We manage your brand and social media presence",
              "We help you generate high-quality business leads",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600" /> {item}
              </li>
            ))}
          </ul>

          {/* Simple Process */}
          <h2 className="text-3xl font-bold text-center text-green-700 mt-20 mb-8">
            Our Simple Process
          </h2>

          <div className="grid sm:grid-cols-3 gap-10 text-center">
            {[
              { step: "01", title: "Plan", text: "Understanding your goals & needs." },
              { step: "02", title: "Execute", text: "Launching high-performing campaigns." },
              { step: "03", title: "Grow", text: "Scaling results and business growth." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 text-black p-6 rounded-xl border shadow-lg"
              >
                <h2 className="text-4xl font-bold text-green-700">{item.step}</h2>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <h2 className="text-3xl font-bold text-center text-green-700 mt-20 mb-8">
            Why Choose Axis Media
          </h2>

          <ul className="grid sm:grid-cols-2 gap-6 text-lg text-black">
            {[
              "Highly skilled digital team",
              "Affordable packages for all businesses",
              "Premium quality with fast delivery",
              "Dedicated support & guidance",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" /> {item}
              </li>
            ))}
          </ul>

        </div>

      </div>
    </div>
  );
}

/* ⭐ Section Title Component */
function SectionTitle({ title }) {
  return (
    <h2 className="text-3xl font-bold text-center text-green-700 mt-20 mb-8">
      {title}
    </h2>
  );
}
