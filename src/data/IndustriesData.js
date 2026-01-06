import {
  FaStore,
  FaUtensils,
  FaBuilding,
  FaIndustry,
  FaHeartbeat,
  FaEllipsisH,
  FaGraduationCap,
} from "react-icons/fa";

export const IndustriesData = [

  /* =======================
      RETAIL
  ======================= */
  {
    id: "retail",
    title: "Retail",
    primaryKeyword: "retail digital marketing services",
    seoTitle: "Retail Digital Marketing Services | Axis Media Digital",
    seoDesc:
      "Axis Media Digital provides retail digital marketing services including SEO, Google Ads, ecommerce websites and conversion optimization for retail businesses.",
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
    primaryKeyword: "restaurant digital marketing services",
    seoTitle: "Restaurant & Hotel Digital Marketing Services | Axis Media Digital",
    seoDesc:
      "Get restaurant and hotel digital marketing services including local SEO, Google Ads, booking websites and online ordering systems.",
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
    primaryKeyword: "real estate digital marketing services",
    seoTitle: "Real Estate Digital Marketing Services | Axis Media Digital",
    seoDesc:
      "Axis Media Digital offers real estate digital marketing services including SEO, property lead generation, Google Ads and high-converting websites.",
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
    ],
  },

  /* =======================
      EDUCATION ✅ ADDED
  ======================= */
  {
    id: "education",
    title: "Education",
    primaryKeyword: "education digital marketing services",
    seoTitle: "Education Digital Marketing Services | Axis Media Digital",
    seoDesc:
      "Education digital marketing services for schools, colleges and coaching institutes including SEO, websites and lead generation.",
    slugPrefix: "education",
    colorClass: "text-indigo-600",
    icon: FaGraduationCap,
    heroImage: "/education.webp",
    longDesc:
      "Educational institutions need admission-focused websites, SEO and digital campaigns to increase enrollments.",
    features: [
      "Admission landing pages",
      "Course detail pages",
      "Lead & enquiry forms",
      "Local SEO for institutes",
    ],
    benefits: [
      "More admissions",
      "Higher visibility",
      "Better student enquiries",
    ],
    faqs: [
      { q: "Do you create admission landing pages?", a: "Yes, high-converting admission pages are included." },
      { q: "Is SEO included for institutes?", a: "Yes, complete on-page & local SEO included." },
    ],
    items: [
      { slug: "school", name: "School" },
      { slug: "college", name: "College" },
      { slug: "coaching-institute", name: "Coaching Institute" },
    ],
  },

  /* =======================
      HEALTHCARE ✅ ADDED
  ======================= */
  {
    id: "healthcare",
    title: "Healthcare",
    primaryKeyword: "healthcare digital marketing services",
    seoTitle: "Healthcare Digital Marketing Services | Axis Media Digital",
    seoDesc:
      "Healthcare digital marketing services including appointment booking websites, SEO and Google Maps optimization.",
    slugPrefix: "healthcare",
    colorClass: "text-red-600",
    icon: FaHeartbeat,
    heroImage: "/healthcare.webp",
    longDesc:
      "Healthcare providers need trust-focused websites, appointment booking and local SEO.",
    features: [
      "Appointment booking",
      "Doctor profile pages",
      "Google Maps SEO",
      "Trust & testimonial sections",
    ],
    benefits: [
      "More appointments",
      "Higher patient trust",
      "Improved local visibility",
    ],
    faqs: [
      { q: "Do you support appointment booking?", a: "Yes, booking systems are included." },
      { q: "Is patient data secure?", a: "Yes, secure data handling is ensured." },
    ],
    items: [
      { slug: "clinic", name: "Clinic" },
      { slug: "hospital", name: "Hospital" },
      { slug: "diagnostic-center", name: "Diagnostic Center" },
    ],
  },

  /* =======================
      OTHERS
  ======================= */
  {
    id: "others",
    title: "Others",
    primaryKeyword: "custom digital marketing services",
    seoTitle: "Custom Digital Marketing Solutions | Axis Media Digital",
    seoDesc:
      "Custom digital marketing solutions for NGOs, creatives and niche businesses.",
    slugPrefix: "others",
    colorClass: "text-pink-600",
    icon: FaEllipsisH,
    heroImage: "/NGO.webp",
    longDesc:
      "NGOs, creatives and niche businesses need storytelling-driven websites with strong messaging.",
    features: [
      "Story-driven pages",
      "Donation & contact funnels",
      "Easy CMS management",
    ],
    benefits: [
      "Stronger brand story",
      "More supporters",
      "Easy updates",
    ],
    faqs: [
      { q: "Do you support multilingual websites?", a: "Yes, multi-language support available." },
      { q: "Can donation payment be added?", a: "Yes, secure donation systems supported." },
    ],
    items: [
      { slug: "ngo", name: "NGO" },
      { slug: "photography", name: "Photography" },
    ],
  },
];

/* =======================
   HELPER FUNCTION
======================= */
export function findIndustryBySlug(slug) {
  if (!slug) return null;

  const category = IndustriesData.find(
    (i) => i.id === slug || i.slugPrefix === slug
  );
  if (category) return category;

  for (const cat of IndustriesData) {
    const found = cat.items.find((item) => item.slug === slug);
    if (found) {
      return {
        ...cat,
        title: found.name,
      };
    }
  }
  return null;
}
