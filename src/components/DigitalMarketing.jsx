import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const services = [
  {
    title: "Social Media Marketing",
    description: "Ads, content creation & social campaigns for all platforms.",
    image: "https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg",
    color: "bg-pink-500 text-white",
  },
  {
    title: "SEO Optimization",
    description: "On-page, off-page & technical SEO to boost your rankings.",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    color: "bg-blue-500 text-white",
  },
  {
    title: "Email Marketing",
    description: "Engage your audience with automated email campaigns.",
    image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
    color: "bg-green-500 text-white",
  },
  {
    title: "Google Ads",
    description: "High-ROI PPC campaigns to increase conversions.",
    image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg",
    color: "bg-purple-500 text-white",
  },
  {
    title: "Instagram Ads",
    description: "Boost reach & engagement with Instagram ad creatives.",
    image: "https://images.pexels.com/photos/2041394/pexels-photo-2041394.jpeg",
    color: "bg-yellow-500 text-white",
  },
  {
    title: "Facebook Ads",
    description: "Increase sales & leads with targeted Meta ad campaigns.",
    image: "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg",
    color: "bg-red-500 text-white",
  },
];

const lines = [
  "Grow Faster With High-ROI Advertising",
  "Boost Your Digital Reach With Smart Marketing",
  "Connect With Your Audience Across All Platforms",
  "Smart Strategies Designed For Modern Brands",
];

const CARDS_PER_BATCH = 6;

export default function DigitalMarketing() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [visibleCount, setVisibleCount] = useState(0);

  // ⭐ TYPEWRITER
  useEffect(() => {
    let char = 0;
    const type = setInterval(() => {
      setDisplayText(lines[lineIndex].slice(0, char));
      char++;
      if (char > lines[lineIndex].length) {
        clearInterval(type);
        setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % lines.length);
          setDisplayText("");
        }, 1000);
      }
    }, 70);
    return () => clearInterval(type);
  }, [lineIndex]);

  return (
    <section className="py-24" style={{ background: "#CCF5D3" }}>
      <div className="max-w-7xl mx-auto px-4">

        {/* ===================== HERO HEADING =================== */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-blue-500">
            {displayText}
          </span>
        </h2>

        <p className="text-lg text-center text-green-900 mb-16 font-medium">
          Complete marketing solutions to grow your brand online.
        </p>

        {/* ================= SLIDING SERVICES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`${s.color} p-6 rounded-2xl shadow-xl hover:scale-105 transition-all`}
            >
              <div className="overflow-hidden rounded-xl h-40 mb-4">
                <img src={s.image} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-white/90 mb-4">{s.description}</p>
              <button className="w-full py-2 rounded-lg bg-white/20 text-white border hover:bg-white hover:text-black transition">
                Enquire Now
              </button>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* ⭐ 1. WHY CHOOSE US SECTION */}
        {/* ========================================================= */}
        <div className="mt-24 bg-white p-12 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
            Why Choose Axis Media?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Proven digital marketing experience",
              "High-ROI advertising strategies",
              "Dedicated account manager",
              "Real-time analytics & reporting",
              "Creative graphic & ad design",
              "End-to-end digital support",
            ].map((item, i) => (
              <p key={i} className="flex gap-3 text-lg text-gray-700">
                <FaCheckCircle className="text-green-600 mt-1" /> {item}
              </p>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* ⭐ 2. OUR PROCESS SECTION */}
        {/* ========================================================= */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
            Our Digital Marketing Process
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { step: "01", title: "Research", text: "We study your market & competitors." },
              { step: "02", title: "Strategy", text: "We build a custom marketing plan." },
              { step: "03", title: "Execution", text: "We launch ads & campaigns." },
              { step: "04", title: "Optimization", text: "We improve targeting & ROI." },
            ].map((box, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-4xl font-bold text-green-600 mb-2">{box.step}</h1>
                <h3 className="text-xl font-bold mb-2">{box.title}</h3>
                <p className="text-gray-700">{box.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* ⭐ 3. TESTIMONIALS SECTION */}
        {/* ========================================================= */}
        <div className="mt-24 bg-gradient-to-r from-blue-100 to-blue-200 py-16 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-10 px-6">
            {[
              {
                name: "Amit Sharma",
                text: "Axis Media helped us grow our leads by 3X in just 2 months!",
              },
              {
                name: "Ritika Verma",
                text: "Our social media engagement skyrocketed. Amazing team!",
              },
              {
                name: "Karan Patel",
                text: "Their SEO strategy ranked our website #1 on Google!",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <FaQuoteLeft className="text-blue-600 text-3xl mb-3" />
                <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                <h3 className="font-bold text-lg text-blue-700">{t.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* ⭐ 4. FAQ SECTION */}
        {/* ========================================================= */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "How long does it take to see results?",
                a: "Most clients see improvements within 2–4 weeks depending on the campaign type.",
              },
              {
                q: "Is digital marketing expensive?",
                a: "We offer affordable packages for small businesses to large enterprises.",
              },
              {
                q: "Do you provide monthly reports?",
                a: "Yes, you get complete performance analytics every month.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white p-5 rounded-xl shadow-lg cursor-pointer"
              >
                <summary className="font-bold text-lg">{faq.q}</summary>
                <p className="mt-3 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* ⭐ 5. CALL TO ACTION SECTION */}
        {/* ========================================================= */}
        <div className="mt-24 py-16 bg-green-600 text-white text-center rounded-3xl shadow-xl">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg mb-6">
            Get a free marketing consultation today!
          </p>

          <button className="px-10 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-200 transition">
            Contact Us Now
          </button>
        </div>

      </div>
    </section>
  );
}
