export const IndustriesData = [
  {
    id: "retail",
    title: "Retail",
    colorClass: "text-emerald-600",
    items: [
      { slug: "book-store", name: "Book Store" },
      { slug: "clothing-store", name: "Clothing Store" },
      { slug: "grocery-store", name: "Grocery Store" },
      { slug: "hardware-store", name: "Hardware Store" },
      { slug: "toy-store", name: "Toy Store" },
      { slug: "furniture-store", name: "Furniture Store" },
    ],
  },

  {
    id: "food-hospitality",
    title: "Food & Hospitality",
    colorClass: "text-sky-600",
    items: [
      { slug: "restaurant", name: "Restaurant" },
      { slug: "fast-food", name: "Fast Food" },
      { slug: "hotel", name: "Hotel" },
      { slug: "guest-house", name: "Guest House" },
      { slug: "beverage-distributor", name: "Beverage Distributor" },
    ],
  },

  {
    id: "real-estate",
    title: "Real Estate",
    colorClass: "text-rose-600",
    items: [
      { slug: "construction", name: "Construction" },
      { slug: "property-dealers", name: "Property Dealers" },
      { slug: "architecture-firm", name: "Architecture Firm" },
      { slug: "estate-management", name: "Estate Management" },
    ],
  },

  {
    id: "manufacturing",
    title: "Manufacturing",
    colorClass: "text-purple-600",
    items: [
      { slug: "textile", name: "Textile" },
      { slug: "metal", name: "Metal" },
      { slug: "industrial-food", name: "Food" },
      { slug: "brewery", name: "Brewery" },
      { slug: "corporate-gifts", name: "Corporate Gifts" },
    ],
  },

  {
    id: "health-fitness",
    title: "Health & Fitness",
    colorClass: "text-orange-600",
    items: [
      { slug: "sports-club", name: "Sports Club" },
      { slug: "eyewear-store", name: "Eyewear Store" },
      { slug: "fitness-center", name: "Fitness Center" },
      { slug: "wellness-practitioners", name: "Wellness Practitioners" },
      { slug: "pharmacy", name: "Pharmacy" },
      { slug: "hair-salon", name: "Hair Salon" },
    ],
  },

  {
    id: "others",
    title: "Others",
    colorClass: "text-pink-600",
    items: [
      { slug: "nonprofit-organization", name: "Nonprofit Organization" },
      { slug: "environmental-agency", name: "Environmental Agency" },
      { slug: "photography", name: "Photography" },
      { slug: "bike-leasing", name: "Bike Leasing" },
      { slug: "software-reseller", name: "Software Reseller" },
    ],
  },
];

// ⭐ REQUIRED HELPER FUNCTION (Detail page ke liye जरूरी)
export function findIndustryBySlug(slug) {
  for (const cat of IndustriesData) {
    const found = cat.items.find((it) => it.slug === slug);
    if (found) {
      return {
        ...found,
        categoryId: cat.id,
        categoryTitle: cat.title,
      };
    }
  }
  return null;
}
