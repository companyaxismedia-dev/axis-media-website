/* ======================================
   SERVICES MASTER DATA – FULL & WORKING
====================================== */

const servicesData = [
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
      "We build fully responsive, SEO-friendly and performance-optimized websites tailored to your business goals. Our website development process focuses on fast loading speed, accessibility, clean UI/UX, and strong on-page SEO. From business websites to custom web applications, we deliver scalable and secure solutions that grow with your business.",

    bullets: [
      "Responsive & mobile-first website design",
      "Fast loading speed & optimized assets",
      "SEO-friendly HTML structure & schema",
      "Secure and scalable architecture",
      "CMS or headless CMS integration",
    ],
  },

  {
    slug: "ecommerce-website",
    title: "E-commerce Website Development",

    seoTitle: "E-commerce Website Development in Delhi | Axis Media Digital",
    seoDesc:
      "Professional e-commerce website development services in Delhi with secure payment gateways, inventory management and conversion-focused design.",

    summary:
      "Secure, conversion-focused e-commerce websites with smooth checkout and online payment integration.",

    heroImage: "/website-development (1).webp",
    colorClass: "bg-slate-800",
    accent: "text-violet-400",

    details:
      "We develop high-performing e-commerce websites that provide seamless shopping experiences. Our solutions include product management, secure payment gateways, order tracking, inventory management, and mobile-first UX designed to increase conversions and reduce cart abandonment.",

    bullets: [
      "Secure payment gateway integration",
      "Product catalog & inventory management",
      "User-friendly checkout experience",
      "Order tracking & customer accounts",
      "Conversion rate optimization",
    ],
  },

  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",

    seoTitle: "Social Media Marketing Company in Delhi | Axis Media Digital",
    seoDesc:
      "Axis Media Digital is a leading social media marketing company in Delhi offering Instagram, Facebook and LinkedIn marketing services to grow brand awareness and leads.",

    summary:
      "Data-driven social media marketing strategies to grow your audience, engagement and brand awareness.",

    heroImage: "/SocialMediaMarketing.webp",
    colorClass: "bg-slate-800",
    accent: "text-emerald-400",

    details:
      "Our social media marketing services help brands grow organically and through paid campaigns. We manage content creation, posting schedules, audience targeting, ad optimization and performance tracking across platforms like Instagram, Facebook and LinkedIn.",

    bullets: [
      "Content strategy & creative design",
      "Instagram & Facebook ad campaigns",
      "Audience research & targeting",
      "Engagement & community management",
      "Performance tracking & reports",
    ],
  },

  {
    slug: "google-ads-management",
    title: "Google Ads Management",

    seoTitle: "Google Ads Management Company in Delhi | Axis Media Digital",
    seoDesc:
      "ROI-driven Google Ads management services in Delhi including Search, Display and YouTube ads to generate quality leads quickly.",

    summary:
      "ROI-driven Google Ads campaigns to generate quality leads and increase sales quickly.",

    heroImage: "/GoogleAdsManagement.webp",
    colorClass: "bg-slate-800",
    accent: "text-indigo-400",

    details:
      "We manage high-performing Google Ads campaigns including Search, Display, YouTube and Remarketing ads. Our focus is on keyword research, conversion tracking, ad copy optimization and continuous performance improvements to maximize return on ad spend.",

    bullets: [
      "Keyword & competitor research",
      "Search, Display & YouTube ads",
      "Conversion tracking setup (GA4 + GTM)",
      "Ad copy & landing page optimization",
      "Remarketing & audience segmentation",
    ],
  },

  {
    slug: "seo-services",
    title: "SEO Services",

    seoTitle: "SEO Services in Delhi | SEO Company in Delhi – Axis Media Digital",
    seoDesc:
      "Axis Media Digital provides professional SEO services in Delhi to improve Google rankings, organic traffic and long-term business growth.",

    summary:
      "Result-driven SEO services to improve Google ranking, organic traffic and long-term growth.",

    heroImage: "/SeoServices (1).webp",
    colorClass: "bg-slate-800",
    accent: "text-indigo-300",

    details:
      "Our SEO services focus on long-term organic growth through technical SEO, on-page optimization, content strategy and high-quality backlinks. We improve website health, keyword rankings and search visibility with transparent monthly reporting.",

    bullets: [
      "Technical SEO audit & fixes",
      "Keyword research & content optimization",
      "On-page & off-page SEO",
      "Local SEO & Google Business Profile",
      "Monthly SEO reports & insights",
    ],
  },

  {
    slug: "graphic-designing",
    title: "Graphic Designing",

    seoTitle: "Graphic Designing Services in Delhi | Axis Media Digital",
    seoDesc:
      "Creative graphic designing services in Delhi including logo design, branding, social media creatives and marketing materials.",

    summary:
      "Creative graphic design solutions for branding, marketing and digital campaigns.",

    heroImage: "/email-marketing (1).webp",
    colorClass: "bg-slate-800",
    accent: "text-pink-400",

    details:
      "Our graphic designing services help businesses build a strong brand identity. From logo design to social media creatives and marketing materials, we create visually appealing designs that communicate your brand message clearly and effectively.",

    bullets: [
      "Logo & brand identity design",
      "Social media creatives & ads",
      "Marketing banners & brochures",
      "Consistent brand guidelines",
      "High-quality print & digital designs",
    ],
  },
    {
    slug: "services",
    title: "Services Provided",

    seoTitle: " Services in Delhi | Axis Media Digital",
    seoDesc:
      "Creative services provided in Delhi including logo design, branding, social media creatives and marketing materials.",

    summary:
      "Creative web design solutions for branding, marketing and digital campaigns.",

    heroImage: "/Business-industries.webp",
    colorClass: "bg-slate-800",
    accent: "text-pink-400",

    details:
      "Our web services help businesses build a strong brand identity. From logo design to social media creatives and marketing materials, we create visually appealing designs that communicate your brand message clearly and effectively.",

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
   HELPER – SERVICE FINDER (IMPORTANT)
====================================== */

export function findServiceBySlug(slug) {
  if (!slug) return null;
  return servicesData.find((service) => service.slug === slug) || null;
}

export default servicesData;

