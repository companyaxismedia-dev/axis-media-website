import React from "react";
import { Link } from "react-router-dom";
import {
  FaStore,
  FaUtensils,
  FaBuilding,
  FaIndustry,
  FaHeartbeat,
  FaEllipsisH,
} from "react-icons/fa";

export default function IndustriesPage() {
  const categories = [
    {
      title: "Retail",
      color: "text-green-400",
      icon: <FaStore className="text-4xl text-green-400" />,
      slug: "retail",
      links: [
        "Book Store",
        "Clothing Store",
        "Furniture Store",
        "Grocery Store",
        "Hardware Store",
        "Toy Store",
      ],
    },
    {
      title: "Food & Hospitality",
      color: "text-blue-400",
      icon: <FaUtensils className="text-4xl text-blue-400" />,
      slug: "food-hospitality",
      links: [
        "Restaurant",
        "Fast Food",
        "Guest House",
        "Beverage Distributor",
        "Hotel",
      ],
    },
    {
      title: "Real Estate",
      color: "text-red-400",
      icon: <FaBuilding className="text-4xl text-red-400" />,
      slug: "real-estate",
      links: [
        "Construction",
        "Architecture Firm",
        "Estate Management",
        "Gardening",
        "Property Owner Association",
      ],
    },
    {
      title: "Manufacturing",
      color: "text-purple-400",
      icon: <FaIndustry className="text-4xl text-purple-400" />,
      slug: "manufacturing",
      links: ["Textile", "Metal", "Furnitures", "Food", "Brewery", "Corporate Gifts"],
    },
    {
      title: "Health & Fitness",
      color: "text-orange-400",
      icon: <FaHeartbeat className="text-4xl text-orange-400" />,
      slug: "health-fitness",
      links: [
        "Sports Club",
        "Eyewear Store",
        "Fitness Center",
        "Wellness Practitioners",
        "Pharmacy",
        "Hair Salon",
      ],
    },
    {
      title: "Others",
      color: "text-pink-400",
      icon: <FaEllipsisH className="text-4xl text-pink-400" />,
      slug: "others",
      links: [
        "Nonprofit Organization",
        "Environmental Agency",
        "Photography",
        "Bike Leasing",
        "Software Reseller",
      ],
    },
  ];

  return (
    <div className="pt-40 pb-20 bg-gradient-to-b from-[#083a34] via-[#0f4f45] to-[#14685c] text-white min-h-screen">

      {/* PAGE TITLE */}
      <h1 className="text-center text-5xl font-extrabold mb-16 drop-shadow-lg">
        Industries We Serve
      </h1>

      {/* GRID OF CATEGORY CARDS */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition hover:-translate-y-1"
          >
            {/* CATEGORY TITLE */}
            <Link to={`/industries/${cat.slug}`}>
              <div className="flex items-center gap-3 mb-3 cursor-pointer">
                {cat.icon}
                <h2
                  className={`${cat.color} text-2xl font-bold drop-shadow-sm hover:underline`}
                >
                  {cat.title}
                </h2>
              </div>
            </Link>

            {/* SUB-LINKS */}
            <ul className="space-y-2 mt-4 text-gray-200">
              {cat.links.map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/industry/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="block hover:text-green-300 transition"
                  >
                    • {item}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
}
