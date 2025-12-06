import React from "react";

const quotes = [
  { name: "Ramesh", text: "Axis Media built our company website & brought us new customers." },
  { name: "Priya", text: "Professional team, great communication and results." },
  { name: "Sanjay", text: "Traffic & leads improved after their Google Ads work." }
];

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">What clients say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <p className="text-gray-700 mb-4">“{q.text}”</p>
            <div className="text-sm font-semibold">{q.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
