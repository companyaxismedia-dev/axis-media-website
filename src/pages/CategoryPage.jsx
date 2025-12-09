import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { IndustriesData } from "../data/IndustriesData";

export default function CategoryPage() {
  const { category } = useParams();

  const cat = IndustriesData.find((c) => c.id === category);

  if (!cat) {
    return (
      <div className="pt-40 text-center text-3xl font-bold">Category Not Found</div>
    );
  }

  return (
    <section className="pt-40 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        <p className="text-gray-500 mb-4">
          <NavLink to="/industries" className="underline">
            Industries
          </NavLink>{" "}
          / {cat.title}
        </p>

        <h1 className="text-4xl font-extrabold mb-6">{cat.title} Businesses</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {cat.items.map((item) => (
            <NavLink
              key={item.slug}
              to={`/industry/${item.slug}`}
              className="bg-white p-6 rounded-xl shadow hover:-translate-y-1 transition block"
            >
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-600">
                Learn how we help <b>{item.name}</b> grow using websites, SEO, ads & branding.
              </p>
            </NavLink>
          ))}
        </div>

      </div>
    </section>
  );
}
