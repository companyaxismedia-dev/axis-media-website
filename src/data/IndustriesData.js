import {
  FaStore,
  FaUtensils,
  FaBuilding,
  FaIndustry,
  FaHeartbeat,
  FaEllipsisH
} from "react-icons/fa";

export const IndustriesData = [
  {
    id: "retail",
    title: "Retail",
    slugPrefix: "retail",
    colorClass: "text-emerald-600",
    icon: FaStore,
    heroImage:
      "/Retail.webp",
    longDesc:
      "Retail businesses need a strong local web presence, conversion-focused product pages and seamless checkout flows.",
    features: [
      "Responsive product pages & fast checkout",
      "Category filters, product variants & search",
      "Local SEO (Google Business & schema)",
      "Inventory sync & POS integration",
      "Email & SMS automation"
    ],
    benefits: [
      "Increase online visibility",
      "Boost conversion rates",
      "Reduce cart abandonment"
    ],
    faqs: [
      { q: "Do you integrate payments?", a: "Yes — Stripe / PayPal support." },
      {
        q: "Can you add inventory sync?",
        a: "Yes — POS or marketplace sync available."
      }
    ],

    // 🔥 MISSING ITEMS FIXED HERE
    items: [
      { slug: "book-store", name: "Book Store" },
      { slug: "clothing-store", name: "Clothing Store" },
      { slug: "furniture-store", name: "Furniture Store" },
      { slug: "grocery-store", name: "Grocery Store" },
      { slug: "hardware-store", name: "Hardware Store" },
      { slug: "toy-store", name: "Toy Store" }
    ]
  },

  {
    id: "food-hospitality",
    title: "Food & Hospitality",
    slugPrefix: "food-hospitality",
    colorClass: "text-sky-600",
    icon: FaUtensils,
    heroImage:
      "/Food-hospitality.webp",
    longDesc:
      "Restaurants, hotels and guest houses need booking-capable websites and powerful menu systems.",
    features: [
      "Booking forms & reservation flow",
      "Menu pages & promotions",
      "Local SEO & near-me optimisation",
      "Ads to fill low-occupancy hours",
      "Review & rating management"
    ],
    benefits: [
      "More direct bookings",
      "Higher customer visibility",
      "Better repeat engagement"
    ],
    faqs: [
      { q: "Online ordering available?", a: "Yes — full ordering setup." },
      {
        q: "Photography & menu design?",
        a: "Yes — professional content support."
      }
    ],

    items: [
      { slug: "restaurant", name: "Restaurant" },
      { slug: "fast-food", name: "Fast Food" },
      { slug: "hotel", name: "Hotel" },
      { slug: "guest-house", name: "Guest House" },
      { slug: "beverage-distributor", name: "Beverage Distributor" }
    ]
  },

  {
    id: "real-estate",
    title: "Real Estate",
    slugPrefix: "real-estate",
    colorClass: "text-rose-600",
    icon: FaBuilding,
    heroImage:
      "/real-estate.webp",
    longDesc:
      "Real estate websites need professional listings, lead capture and area-specific SEO.",
    features: [
      "Listing templates & filters",
      "CRM-integrated lead forms",
      "Local landing pages",
      "Heatmap analytics",
      "Virtual tour/galleries"
    ],
    benefits: [
      "More property enquiries",
      "Higher ranking by locality",
      "Better viewing conversions"
    ],
    faqs: [
      { q: "CRM integration?", a: "Yes — HubSpot, Zoho, custom APIs." },
      { q: "Virtual tours?", a: "Yes — 3D & gallery support." }
    ],

    items: [
      { slug: "construction", name: "Construction" },
      { slug: "architecture-firm", name: "Architecture Firm" },
      { slug: "estate-management", name: "Estate Management" },
      { slug: "gardening", name: "Gardening" },
      {
        slug: "property-owner-association",
        name: "Property Owner Association"
      }
    ]
  },

  {
    id: "manufacturing",
    title: "Manufacturing",
    slugPrefix: "manufacturing",
    colorClass: "text-purple-600",
    icon: FaIndustry,
    heroImage:
      "/manufacturing.webp",
    longDesc:
      "Manufacturing needs B2B websites, catalogues & lead funnels.",
    features: [
      "B2B product catalogue",
      "RFQ forms & dealer portal",
      "Industrial SEO",
      "Case studies & technical pages"
    ],
    benefits: [
      "Shorter procurement cycles",
      "More vendor enquiries",
      "Better trust and branding"
    ],
    faqs: [
      {
        q: "Can we protect pricing?",
        a: "Yes — gated or partner-only pages available."
      }
    ],

    items: [
      { slug: "textile", name: "Textile" },
      { slug: "metal", name: "Metal" },
      { slug: "food", name: "Food" },
      { slug: "brewery", name: "Brewery" },
      { slug: "corporate-gifts", name: "Corporate Gifts" }
    ]
  },

  {
    id: "health-fitness",
    title: "Health & Fitness",
    slugPrefix: "health-fitness",
    colorClass: "text-orange-600",
    icon: FaHeartbeat,
    heroImage:
      "/health-fitness.webp",
    longDesc:
      "Gyms, clinics & wellness centres need booking, schedules & trust-building content.",
    features: [
      "Appointment booking",
      "Service pages & pricing",
      "Testimonials & trust badges",
      "Local SEO for city searches"
    ],
    benefits: [
      "More bookings",
      "Higher visibility",
      "Better customer experience"
    ],
    faqs: [
      { q: "Booking reminders?", a: "Yes — SMS/email available." }
    ],

    items: [
      { slug: "sports-club", name: "Sports Club" },
      { slug: "eyewear-store", name: "Eyewear Store" },
      { slug: "fitness-center", name: "Fitness Center" },
      { slug: "wellness-practitioners", name: "Wellness Practitioners" },
      { slug: "pharmacy", name: "Pharmacy" },
      { slug: "hair-salon", name: "Hair Salon" }
    ]
  },

  {
    id: "others",
    title: "Others",
    slugPrefix: "others",
    colorClass: "text-pink-600",
    icon: FaEllipsisH,
    heroImage:
      "/NGO.webp",
    longDesc:
      "NGOs, photographers, creatives & niche services need strong storytelling websites.",
    features: [
      "Portfolio & story-driven pages",
      "Donation/contact funnels",
      "Niche SEO",
      "Easy CMS"
    ],
    benefits: [
      "Showcase work",
      "More leads/supporters",
      "Easy updates"
    ],
    faqs: [
      { q: "Multilingual?", a: "Yes — full language support." }
    ],

    items: [
      { slug: "nonprofit-organization", name: "Nonprofit Organization" },
      { slug: "environmental-agency", name: "Environmental Agency" },
      { slug: "photography", name: "Photography" },
      { slug: "bike-leasing", name: "Bike Leasing" },
      { slug: "software-reseller", name: "Software Reseller" }
    ]
  }
];

// Helper function
export function findIndustryBySlug(slug) {
  if (!slug) return null;

  const byId = IndustriesData.find(
    (i) => i.id === slug || i.slugPrefix === slug
  );
  if (byId) return { ...byId, name: byId.title };

  for (const cat of IndustriesData) {
    const found = (cat.items || []).find((it) => it.slug === slug);

    if (found) {
      return {
        ...found,
        categoryId: cat.id,
        categoryTitle: cat.title,
        name: found.name,
        longDesc: cat.longDesc,
        features: cat.features,
        benefits: cat.benefits,
        faqs: cat.faqs
      };
    }
  }

  return null;
}
