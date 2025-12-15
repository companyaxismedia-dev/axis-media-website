import React from "react";

const reviews = [
  {
    name: "Amit Verma",
    text: "Their SEO work ranked our website in top Google results. Very happy!",
    img: "/Amit Verma.webp",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-700 text-white",
  },
  {
    name: "Pooja Singh",
    text: "They handled everything—website, ads, social media. Amazing support!",
    img: "/Pooja Singh.webp",
    color: "bg-gradient-to-br from-pink-500 to-rose-600 text-white",
  },
  {
    name: "Mahesh Kumar",
    text: "Affordable and fast service. Perfect for startups looking to grow online.",
    img: "/Mahesh Kumar.webp",
    color: "bg-gradient-to-br from-teal-500 to-cyan-600 text-white",
  },
  {
    name: "Divya Kapoor",
    text: "Marketing campaigns doubled our conversions. Brilliant work!",
    img: "/Divya Kapoor.webp",
    color: "bg-gradient-to-br from-yellow-500 to-orange-600 text-white",
  },
  {
    name: "Arjun Rao",
    text: "Premium-quality website delivered on time. Great communication from the team.",
    img: "/Arjun Rao.webp",
    color: "bg-gradient-to-br from-red-500 to-red-700 text-white",
  },
  {
    name: "Karan Sharma",
    text: "Axis Media helped us scale our e-commerce store profitably. 5/5 stars!",
    img: "/Karan Sharma.webp",
    color: "bg-gradient-to-br from-sky-500 to-blue-600 text-white",
  },
  {
    name: "Neha Agarwal",
    text: "Amazing digital marketing team! Our brand visibility increased massively.",
    img: "/Neha Agarwal.webp",
    color: "bg-gradient-to-br from-purple-500 to-purple-700 text-white",
  },
  {
    name: "Rohit Khanna",
    text: "Professional service & great ROI. Highly recommended for businesses.",
    img: "/Rohit Khanna.webp",
    color: "bg-gradient-to-br from-green-500 to-emerald-700 text-white",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 bg-[#F4F6FF]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2
          id="testimonials-heading"
          className="text-4xl font-extrabold text-center mb-12"
        >
          Client Reviews & Testimonials
        </h2>

        {/* REVIEWS SCROLLER */}
        <div className="overflow-x-auto py-4 scrollbar-hide">
          <div className="flex gap-6 w-max">
            {reviews.map((r, i) => (
              <article
                key={i}
                className={`min-w-[300px] max-w-[300px] p-6 rounded-2xl shadow-xl 
                hover:shadow-2xl transition hover:-translate-y-1 ${r.color}`}
              >
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src={r.img}
                    alt={`${r.name} client review`}
                    loading="lazy"
                    width="80"
                    height="80"
                    className="w-full h-full rounded-full object-cover 
                    border-4 border-white shadow-md"
                  />
                </div>

                <p className="text-sm italic mb-4 text-center">
                  “{r.text}”
                </p>

                <h3 className="text-center font-bold text-lg">
                  {r.name}
                </h3>
              </article>
            ))}
          </div>
        </div>

        {/* GOOGLE RATING */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-5 
            rounded-2xl shadow-lg border"
          >
            <img
              src="/Google.webp"
              alt="Google Reviews"
              loading="lazy"
              width="90"
              height="30"
              className="h-7 object-contain"
            />

            <div className="flex items-center gap-1">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>

            <p className="font-semibold text-gray-700 text-lg">
              Rated <span className="text-blue-600">4.9/5</span> by 120+ Clients
            </p>
          </div>
        </div>

        {/* TRUSTED BRANDS */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold mb-6 text-gray-800">
            Trusted by Leading Indian Brands
          </h3>

          <div className="flex items-center justify-center gap-14 flex-wrap">
            {["Tata", "Amul", "Airtel", "Swiggy"].map((brand) => (
              <img
                key={brand}
                src={`/${brand}.webp`}
                alt={`${brand} brand logo`}
                loading="lazy"
                width="140"
                height="56"
                className="h-14 object-contain"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 
          text-white py-12 px-6 rounded-3xl shadow-xl text-center"
        >
          <h3 className="text-3xl font-bold mb-3">
            1000+ Businesses Trust Axis Media
          </h3>

          <p className="text-lg opacity-90 mb-6">
            Grow your business faster with expert digital marketing solutions.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-bold 
            px-6 py-3 rounded-full shadow-md hover:shadow-xl transition"
          >
            Get a Free Growth Consultation →
          </a>
        </div>

      </div>
    </section>
  );
}
