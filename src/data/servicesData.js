/* ======================================
   SERVICES MASTER DATA – FULL & SAFE
====================================== */

const servicesData = [

  /* ===========================
     SERVICES LANDING PAGE
     /services  (IMPORTANT)
  =========================== */
  {
    slug: "services",
    title: "Services Provided",

    seoTitle: "Services in Delhi | Axis Media Digital",
    seoDesc:
      "Axis Media Digital provides complete digital marketing services in Delhi including website development, SEO, Google Ads, social media marketing and graphic designing.",

    summary:
      "Complete digital marketing and web development services to grow your business online.",

    heroImage: "/Business-industries.webp",   // ❗ same image, untouched
    colorClass: "bg-slate-800",
    accent: "text-pink-400",

    details:
      "Axis Media Digital is a full-service digital marketing agency in Delhi offering website development, SEO, Google Ads, social media marketing and graphic designing services to help businesses grow online.",

    bullets: [
      "Website Development Services",
      "SEO & Google Ranking",
      "Google Ads Management",
      "Social Media Marketing",
      "Graphic Designing & Branding",
    ],
  },

  /* ===========================
     WEBSITE DEVELOPMENT
  =========================== */
  {
    slug: "website-development",
    title: "Website Development",

    seoTitle: "Website Development Company in Delhi | Axis Media Digital",
    seoDesc:
      "Axis Media Digital provides professional website development services in Delhi including fast, mobile-friendly and SEO-optimized websites for businesses.",

    summary:
      "Modern, high-speed and mobile-friendly websites that elevate your brand credibility and convert visitors into customers.",

    heroImage: "/WebsiteDevelopment (1).webp",
    colorClass: "bg-slate-800",
    accent: "text-sky-400",

    details:
      "We build fully responsive, SEO-friendly and performance-optimized websites tailored to your business goals.",

    bullets: [
      "Responsive & mobile-first website design",
      "Fast loading speed & optimized assets",
      "SEO-friendly HTML structure & schema",
      "Secure and scalable architecture",
      "CMS or headless CMS integration",
    ],
  },

  /* ===========================
     ECOMMERCE DEVELOPMENT
  =========================== */
  {
    slug: "ecommerce-website",
    title: "E-commerce Website Development",

    seoTitle: "E-commerce Website Development in Delhi | Axis Media Digital",
    seoDesc:
      "Professional e-commerce website development services in Delhi with secure payment gateways and conversion-focused design.",

    summary:
      "Secure, conversion-focused e-commerce websites with smooth checkout and online payment integration.",

    heroImage: "/website-development (1).webp",
    colorClass: "bg-slate-800",
    accent: "text-violet-400",

    details:
      "We develop high-performing e-commerce websites with secure payments and inventory management.",

    bullets: [
      "Secure payment gateway integration",
      "Product catalog & inventory management",
      "User-friendly checkout experience",
      "Order tracking & customer accounts",
      "Conversion rate optimization",
    ],
  },

  /* ===========================
     SOCIAL MEDIA MARKETING
  =========================== */
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",

    seoTitle: "Social Media Marketing Company in Delhi | Axis Media Digital",
    seoDesc:
      "Axis Media Digital is a leading social media marketing company in Delhi offering Instagram, Facebook and LinkedIn marketing services.",

    summary:
      "Data-driven social media marketing strategies to grow your audience, engagement and brand awareness.",

    heroImage: "/SocialMediaMarketing.webp",
    colorClass: "bg-slate-800",
    accent: "text-emerald-400",

    details:
      "We manage complete social media marketing including content creation and ads.",

    bullets: [
      "Content strategy & creative design",
      "Instagram & Facebook ad campaigns",
      "Audience research & targeting",
      "Engagement & community management",
      "Performance tracking & reports",
    ],
  },

  /* ===========================
     GOOGLE ADS
  =========================== */
  {
    slug: "google-ads-management",
    title: "Google Ads Management",

    seoTitle: "Google Ads Management Company in Delhi | Axis Media Digital",
    seoDesc:
      "ROI-driven Google Ads management services in Delhi including Search, Display and YouTube ads.",

    summary:
      "ROI-driven Google Ads campaigns to generate quality leads quickly.",

    heroImage: "/GoogleAdsManagement.webp",
    colorClass: "bg-slate-800",
    accent: "text-indigo-400",

    details:
      "We manage Search, Display, YouTube and remarketing campaigns with conversion tracking.",

    bullets: [
      "Keyword & competitor research",
      "Search, Display & YouTube ads",
      "Conversion tracking setup (GA4 + GTM)",
      "Ad copy & landing page optimization",
      "Remarketing & audience segmentation",
    ],
  },

  /* ===========================
     SEO SERVICES
  =========================== */
  {
    slug: "seo-services",
    title: "SEO Services",

    seoTitle: "SEO Services in Delhi | Axis Media Digital",
    seoDesc:
      "Axis Media Digital provides professional SEO services in Delhi to improve Google rankings.",

    summary:
      "Result-driven SEO services to improve Google ranking and organic traffic.",

    heroImage: "/SeoServices (1).webp",
    colorClass: "bg-slate-800",
    accent: "text-indigo-300",

    details:
      "Our SEO services focus on long-term organic growth through technical and on-page SEO.",

    bullets: [
      "Technical SEO audit & fixes",
      "Keyword research & content optimization",
      "On-page & off-page SEO",
      "Local SEO & Google Business Profile",
      "Monthly SEO reports & insights",
    ],
  },

  /* ===========================
     GRAPHIC DESIGNING
  =========================== */
  {
    slug: "graphic-designing",
    title: "Graphic Designing",

    seoTitle: "Graphic Designing Services in Delhi | Axis Media Digital",
    seoDesc:
      "Creative graphic designing services in Delhi including logo design, branding and marketing creatives.",

    summary:
      "Creative graphic design solutions for branding and marketing.",

    heroImage: "/email-marketing (1).webp",
    colorClass: "bg-slate-800",
    accent: "text-pink-400",

    details:
      "We create logos, creatives, banners and marketing materials for strong branding.",

    bullets: [
      "Logo & brand identity design",
      "Social media creatives & ads",
      "Marketing banners & brochures",
      "Consistent brand guidelines",
      "High-quality print & digital designs",
    ],
  },
];

/* ======================================
   HELPER – SERVICE FINDER
====================================== */

export function findServiceBySlug(slug) {
  if (!slug) return null;
  return servicesData.find((service) => service.slug === slug) || null;
}

export default servicesData;
