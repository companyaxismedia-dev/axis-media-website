// src/data/IndustriesData.js

import {
  FaStore,
  FaUtensils,
  FaBuilding,
  FaIndustry,
  FaHeartbeat,
  FaEllipsisH,
} from "react-icons/fa";

export const IndustriesData = [
  /* =======================
      RETAIL
  ======================= */
  {
    id: "retail",
    title: "Retail",
    slugPrefix: "retail",
    colorClass: "text-emerald-600",
    icon: FaStore,
    heroImage: "/Retail.webp",
    longDesc:
      "Retail businesses need a strong local web presence, conversion-focused product pages and seamless checkout experiences to attract customers and boost sales.",
    features: [
      "Responsive product pages & fast checkout",
      "Category filters, product variants & search",
      "Local SEO (Google Business & schema)",
      "Inventory sync & POS integration",
      "Email & SMS automation",
    ],
    benefits: [
      "Increase online visibility",
      "Boost conversion rates",
      "Reduce cart abandonment",
    ],
    faqs: [
      { q: "Do you integrate online payments?", a: "Yes, Stripe, Razorpay & PayPal supported." },
      { q: "Can inventory be synced?", a: "Yes, POS & marketplace inventory sync available." },
      { q: "Is SEO included?", a: "Yes, on-page & local SEO are included." },
    ],
    items: [
      { slug: "book-store", name: "Book Store" },
      { slug: "clothing-store", name: "Clothing Store" },
      { slug: "furniture-store", name: "Furniture Store" },
      { slug: "grocery-store", name: "Grocery Store" },
      { slug: "hardware-store", name: "Hardware Store" },
      { slug: "toy-store", name: "Toy Store" },
    ],
  },

  /* =======================
      FOOD & HOSPITALITY
  ======================= */
  {
    id: "food-hospitality",
    title: "Food & Hospitality",
    slugPrefix: "food-hospitality",
    colorClass: "text-sky-600",
    icon: FaUtensils,
    heroImage: "/Food-hospitality.webp",
    longDesc:
      "Restaurants, hotels and guest houses need booking-enabled websites, strong menus and local SEO to attract more customers.",
    features: [
      "Online booking & reservation system",
      "Menu pages & promotions",
      "Local SEO & near-me optimization",
      "Ads to fill low-occupancy hours",
      "Review & rating management",
    ],
    benefits: [
      "More direct bookings",
      "Higher local visibility",
      "Better repeat customers",
    ],
    faqs: [
      { q: "Can you enable online ordering?", a: "Yes, full ordering & payment setup available." },
      { q: "Do you design menus?", a: "Yes, professional menu & food photography support." },
      { q: "Is Google Maps SEO included?", a: "Yes, complete local SEO setup included." },
    ],
    items: [
      { slug: "restaurant", name: "Restaurant" },
      { slug: "fast-food", name: "Fast Food" },
      { slug: "hotel", name: "Hotel" },
      { slug: "guest-house", name: "Guest House" },
      { slug: "beverage-distributor", name: "Beverage Distributor" },
    ],
  },

  /* =======================
      REAL ESTATE
  ======================= */
  {
    id: "real-estate",
    title: "Real Estate",
    slugPrefix: "real-estate",
    colorClass: "text-rose-600",
    icon: FaBuilding,
    heroImage: "/real-estate.webp",
    longDesc:
      "Real estate businesses need professional listings, lead capture forms and location-based SEO to generate quality enquiries.",
    features: [
      "Property listings with filters",
      "CRM-integrated enquiry forms",
      "Local landing pages",
      "Analytics & heatmaps",
      "Gallery & virtual tours",
    ],
    benefits: [
      "More property enquiries",
      "Higher ranking in local searches",
      "Better lead quality",
    ],
    faqs: [
      { q: "Can you integrate CRM?", a: "Yes, HubSpot, Zoho & custom CRM supported." },
      { q: "Do you support virtual tours?", a: "Yes, 3D tours & image galleries supported." },
    ],
    items: [
      { slug: "construction", name: "Construction" },
      { slug: "architecture-firm", name: "Architecture Firm" },
      { slug: "estate-management", name: "Estate Management" },
      { slug: "gardening", name: "Gardening" },
      { slug: "property-owner-association", name: "Property Owner Association" },
    ],
  },

  /* =======================
      MANUFACTURING
  ======================= */
  {
    id: "manufacturing",
    title: "Manufacturing",
    slugPrefix: "manufacturing",
    colorClass: "text-purple-600",
    icon: FaIndustry,
    heroImage: "/manufacturing.webp",
    longDesc:
      "Manufacturing companies need B2B websites, catalogs and lead funnels to attract distributors and bulk buyers.",
    features: [
      "B2B product catalogs",
      "RFQ & dealer enquiry forms",
      "Industrial SEO",
      "Case studies & technical pages",
    ],
    benefits: [
      "More vendor enquiries",
      "Shorter sales cycles",
      "Stronger brand credibility",
    ],
    faqs: [
      { q: "Can pricing be hidden?", a: "Yes, gated pricing & partner-only pages available." },
      { q: "Do you support bulk enquiries?", a: "Yes, RFQ & bulk enquiry systems included." },
    ],
    items: [
      { slug: "textile", name: "Textile" },
      { slug: "metal", name: "Metal" },
      { slug: "food", name: "Food" },
      { slug: "brewery", name: "Brewery" },
      { slug: "corporate-gifts", name: "Corporate Gifts" },
    ],
  },

  /* =======================
      HEALTH & FITNESS
  ======================= */
  {
    id: "health-fitness",
    title: "Health & Fitness",
    slugPrefix: "health-fitness",
    colorClass: "text-orange-600",
    icon: FaHeartbeat,
    heroImage: "/health-fitness.webp",
    longDesc:
      "Health & fitness businesses need trust-building websites, appointment booking and strong local SEO.",
    features: [
      "Online appointment booking",
      "Service pages & pricing",
      "Testimonials & trust badges",
      "City-based SEO optimization",
    ],
    benefits: [
      "More bookings",
      "Higher local visibility",
      "Improved customer trust",
    ],
    faqs: [
      { q: "Do you support booking reminders?", a: "Yes, SMS & email reminders available." },
      { q: "Is HIPAA or data security considered?", a: "Yes, secure data handling is ensured." },
    ],
    items: [
      { slug: "sports-club", name: "Sports Club" },
      { slug: "eyewear-store", name: "Eyewear Store" },
      { slug: "fitness-center", name: "Fitness Center" },
      { slug: "wellness-practitioners", name: "Wellness Practitioners" },
      { slug: "pharmacy", name: "Pharmacy" },
      { slug: "hair-salon", name: "Hair Salon" },
    ],
  },

  /* =======================
      OTHERS
  ======================= */
  {
    id: "others",
    title: "Others",
    slugPrefix: "others",
    colorClass: "text-pink-600",
    icon: FaEllipsisH,
    heroImage: "/NGO.webp",
    longDesc:
      "NGOs, creatives and niche businesses need storytelling-driven websites with strong messaging and lead funnels.",
    features: [
      "Portfolio & story-driven pages",
      "Donation & contact funnels",
      "Niche SEO",
      "Easy CMS management",
    ],
    benefits: [
      "Stronger brand story",
      "More leads & supporters",
      "Easy content updates",
    ],
    faqs: [
      { q: "Do you support multilingual websites?", a: "Yes, full multi-language support available." },
      { q: "Can donation payment be added?", a: "Yes, secure donation systems supported." },
    ],
    items: [
      { slug: "nonprofit-organization", name: "Nonprofit Organization" },
      { slug: "environmental-agency", name: "Environmental Agency" },
      { slug: "photography", name: "Photography" },
      { slug: "bike-leasing", name: "Bike Leasing" },
      { slug: "software-reseller", name: "Software Reseller" },
    ],
  },
];

/* =======================
   HELPER FUNCTION
======================= */
export function findIndustryBySlug(slug) {
  if (!slug) return null;

  // Match category
  const category = IndustriesData.find(
    (i) => i.id === slug || i.slugPrefix === slug
  );
  if (category) {
    return { ...category, name: category.title };
  }

  // Match sub-industry
  for (const cat of IndustriesData) {
    const found = cat.items.find((item) => item.slug === slug);
    if (found) {
      return {
        ...found,
        categoryId: cat.id,
        categoryTitle: cat.title,
        longDesc: cat.longDesc,
        features: cat.features,
        benefits: cat.benefits,
        faqs: cat.faqs,
      };
    }
  }

  return null;
}
