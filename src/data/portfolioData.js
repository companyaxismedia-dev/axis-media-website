// src/data/portfolioData.js
const portfolioItems = [
  {
    slug: "puja-portfolio",
    title: "Puja Portfolio Website",
    image:
      "https://s3-alpha.figma.com/hub/file/2756242010/25c6912f-5dd2-4801-8f94-b752e9930134-cover.png",
    shortDesc:
      "A clean personal portfolio built to showcase skills, projects, and professional experience.",
    liveLink: "https://puja-portfolio-ten.vercel.app/",
    repoLink: "",

    // full details (A→Z)
    details:
      "A modern portfolio site built for individuals and freelancers. Includes project gallery, contact form, resume download, and blog section. Focus on fast load, accessibility and SEO.",
    features: [
      "Responsive layout and mobile-first design",
      "Project case studies with gallery & lightbox",
      "Contact form with validation and email integration",
      "SEO meta & structured data",
      "Image optimization and lazy loading",
      "Smooth animations and accessibility improvements",
    ],
    tech: {
      frontend: ["React", "Tailwind CSS", "Swiper (carousel)", "Framer Motion"],
      backend: ["Node.js (optional contact API)", "Express"],
      database: ["None (static) or Firebase for forms"],
      deployment: ["Vercel / Netlify"],
      tools: ["Git, npm, Photoshop, Figma"],
    },
    auth: "No login required (public site). Optional admin login for CMS if using headless CMS.",
  },

  {
    slug: "foodify-ecommerce",
    title: "Foodify E-Commerce Website",
    image:
      "https://downloadpsd.cc/wp-content/uploads/Online-Food-Delivery-Website-Template-Free-PSD.jpg",
    shortDesc:
      "Full e-commerce store focused on food ordering, product variants and smooth checkout flows.",
    liveLink: "https://e-commerce-foodify-website.vercel.app/",
    repoLink: "",
    details:
      "Food ordering platform supporting categories, product variants, cart, checkout with payment integration, and admin panel for menu management.",
    features: [
      "Product catalog with categories and filtering",
      "Cart + coupon system",
      "Checkout with Stripe/PayPal integration",
      "Order tracking & admin dashboard",
      "Location-based delivery fees and area restriction",
    ],
    tech: {
      frontend: ["React", "Next.js (optional SSR)", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Stripe for payments"],
      database: ["MongoDB (orders, users, products)"],
      deployment: ["Vercel for frontend, Render/Heroku for API"],
      tools: ["Postman, Sentry, Docker (optional)"],
    },
    auth: "User accounts with registration, login, password reset; vendor/admin separate roles.",
  },

  {
    slug: "online-food-ordering",
    title: "Online Food Ordering Platform",
    image:
      "https://i.ytimg.com/vi/x1RtPQ6XApo/maxresdefault.jpg",
    shortDesc:
      "A smooth ordering platform with city-wise search, cuisine filters, and optimized UX for mobile ordering.",
    liveLink: "",
    repoLink: "",
    details:
      "Scalable food-ordering site with merchant onboarding, dynamic menus and push notifications for orders.",
    features: [
      "Merchant dashboard",
      "Real-time order notifications",
      "Search by city, cuisine, and popularity",
      "Customer ratings and reviews",
    ],
    tech: {
      frontend: ["React", "Redux", "Tailwind"],
      backend: ["Node.js", "Socket.io for real-time updates"],
      database: ["PostgreSQL or MongoDB"],
      deployment: ["AWS / DigitalOcean"],
      tools: ["Nginx, PM2, GitHub Actions"],
    },
    auth:
      "Customer sign-up / sign-in, merchant sign-up with verification, admin panel for approvals.",
  },

  // add 6 more items (total 9)
  {
    slug: "corporate-website",
    title: "Corporate Website",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/squarespace-portfolio-website-builder.jpg",
    shortDesc:
      "Professional corporate website built for brand presence, lead forms, and case studies.",
    liveLink: "",
    repoLink: "",
    details:
      "Multi-page corporate site with service pages, case studies, careers page, and an optimized contact funnel.",
    features: [
      "Service pages & case studies",
      "Lead capture forms and CRM integration",
      "Careers page with application form",
    ],
    tech: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Optional Node/Serverless functions for forms"],
      database: ["Airtable or Google Sheets for leads"],
      deployment: ["Vercel / Netlify"],
      tools: ["Figma, Google Analytics"],
    },
    auth: "Public site with admin CMS for content updates (optional).",
  },

  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard (Admin)",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    shortDesc:
      "Admin dashboard for SaaS product with analytics, user management, and integrations.",
    liveLink: "",
    repoLink: "",
    details:
      "Feature-rich admin dashboard including charts, role-based access, multi-tenant support and data exports.",
    features: [
      "Interactive charts and reports",
      "Role-based access control",
      "User & subscription management",
    ],
    tech: {
      frontend: ["React", "Recharts / Chart.js"],
      backend: ["Node.js", "Express", "Stripe Billing"],
      database: ["PostgreSQL"],
      deployment: ["AWS / Heroku"],
      tools: ["Sentry, Prometheus, Docker"],
    },
    auth: "Full auth + 2FA for admins, OAuth for users.",
  },

  {
    slug: "blog-magazine",
    title: "Blog & Magazine Platform",
    image:
      "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
    shortDesc:
      "Content platform with articles, tags, authors and subscription paywall.",
    liveLink: "",
    repoLink: "",
    details:
      "SEO-focused blog platform supporting rich content, AMP pages, author bios, and subscriptions.",
    features: [
      "SEO optimizations, RSS feed",
      "Subscription/paywall support",
      "Rich text editor for authors",
    ],
    tech: {
      frontend: ["Next.js (for SSG/SSR)", "Tailwind CSS"],
      backend: ["Headless CMS (Strapi/Contentful)"],
      database: ["MongoDB or Postgres"],
      deployment: ["Vercel / DigitalOcean"],
      tools: ["Algolia for search"],
    },
    auth:
      "Author login, editor roles, paid subscriber accounts with Stripe integration.",
  },

  {
    slug: "retail-pos",
    title: "Retail POS & Inventory",
    image:
      "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg",
    shortDesc:
      "Point-of-sale + inventory manager for retail businesses with barcode support.",
    liveLink: "",
    repoLink: "",
    details:
      "POS system with offline-first support, invoice generation, and inventory sync.",
    features: [
      "Barcode scan + quick checkout",
      "Inventory alerts and reports",
      "Sales analytics",
    ],
    tech: {
      frontend: ["React", "IndexedDB for offline"],
      backend: ["Node.js", "Socket.io"],
      database: ["MongoDB"],
      deployment: ["AWS / Azure"],
      tools: ["Docker, Redis"],
    },
    auth: "Role-based login for staff and managers.",
  },

  {
    slug: "education-platform",
    title: "Education / LMS Platform",
    image:
      "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
    shortDesc:
      "Learning management system with courses, quizzes, certificates and dashboard.",
    liveLink: "",
    repoLink: "",
    details:
      "Course builder, student dashboard, progress tracking, and payments for courses.",
    features: [
      "Course video hosting & streaming",
      "Quizzes & certificates",
      "Instructor dashboard",
    ],
    tech: {
      frontend: ["React", "Video.js"],
      backend: ["Node.js", "Stripe"],
      database: ["Postgres"],
      deployment: ["AWS / CloudFront for video"],
      tools: ["Moodle (optional), Zoom integration"],
    },
    auth: "Student and instructor accounts with role-based features.",
  },

  {
    slug: "landing-conversion",
    title: "Conversion Landing Pages",
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    shortDesc:
      "High-conversion landing pages for campaigns, lead magnets and A/B testing.",
    liveLink: "",
    repoLink: "",
    details:
      "Campaign-optimized landing pages built for speed with A/B tests, analytics and lead capture.",
    features: [
      "A/B testing & analytics",
      "Fast load and AMP-ready pages",
      "Integration with marketing CRMs",
    ],
    tech: {
      frontend: ["React", "Tailwind", "Lighthouse optimizations"],
      backend: ["Serverless functions for form handling"],
      database: ["None / external CRMs"],
      deployment: ["Vercel"],
      tools: ["Google Optimize, Hotjar"],
    },
    auth: "No user accounts (campaign pages).",
  },
];

export default portfolioItems;
