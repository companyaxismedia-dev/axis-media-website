import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Puja Portfolio Website",
      image:
        "https://s3-alpha.figma.com/hub/file/2756242010/25c6912f-5dd2-4801-8f94-b752e9930134-cover.png",
      link: "https://puja-portfolio-ten.vercel.app/",
    },
    {
      title: "Foodify E-Commerce Website",
      image:
        "https://downloadpsd.cc/wp-content/uploads/Online-Food-Delivery-Website-Template-Free-PSD.jpg",
      link: "https://e-commerce-foodify-website.vercel.app/",
    },
    {
      title: "Online Food Ordering Platform",
      image: "https://i.ytimg.com/vi/x1RtPQ6XApo/maxresdefault.jpg",
      link: "https://food-ordering-website-ruddy.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      image:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/squarespace-portfolio-website-builder.jpg",
      link: "https://pujashukla2003.github.io/personal-portfolio/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 relative scroll-mt-20 text-white"
    >
      {/* BACKGROUND GOLD-BLACK GRADIENT */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #0D0D0D 0%, #5A3E18 40%, #D4A847 100%)",
        }}
      ></div>

      <div className="relative w-full px-4 sm:px-6 lg:px-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-yellow-300 drop-shadow-xl">
          Our Portfolio
        </h2>
        <p className="text-center text-yellow-100 max-w-2xl mx-auto mb-12">
          Some of our latest website designs and development work — built with
          modern UI, animations & smooth performance.
        </p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          grabCursor
          style={{ paddingBottom: "40px" }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 transition duration-300 overflow-hidden group hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,215,128,0.5)]">

                <div className="overflow-hidden h-60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-200">
                    {item.title}
                  </h3>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* EXTRA DETAIL BOXES BELOW LIKE SERVICES GRID */}
        <div className="max-w-5xl mx-auto mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Creative UI Design",
              text: "Modern, clean & attractive interface designs.",
            },
            {
              title: "Fast Performance",
              text: "Optimized websites for speed & SEO ranking.",
            },
            {
              title: "Responsive Layouts",
              text: "Perfect display on all devices & screen sizes.",
            },
          ].map((box, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl text-center hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                {box.title}
              </h3>
              <p className="text-yellow-100">{box.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
