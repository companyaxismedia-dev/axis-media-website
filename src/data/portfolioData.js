// src/data/portfolioData.js

const portfolioItems = [
  {
    slug: "puja-portfolio",
    title: "Puja Portfolio Website",
    image: "/Portfolio.webp",
    shortDesc:
      "A clean and professional personal portfolio website to showcase skills, projects and experience.",
    liveLink: "https://puja-portfolio-ten.vercel.app/",
    repoLink: "",

    details:
      "A modern, SEO-optimized personal portfolio built for freelancers and professionals. The website focuses on fast loading, clean UI, accessibility and mobile-first design.",
    features: [
      "Responsive & mobile-first design",
      "SEO optimized pages",
      "Project showcase with clean layout",
      "Contact form with validation",
      "Image optimization & lazy loading",
      "Fast performance & smooth animations",
    ],
    tech: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Optional Node.js for contact form"],
      database: ["Not required"],
      deployment: ["Vercel"],
      tools: ["Git", "Figma"],
    },
    auth: "No authentication required (public portfolio website).",
  },

  {
    slug: "foodify-ecommerce",
    title: "Foodify E-Commerce Website",
    image: "/Food-Delivery-Website.webp",
    shortDesc:
      "An e-commerce food ordering platform with cart, checkout and payment integration.",
    liveLink: "https://e-commerce-foodify-website.vercel.app/",
    repoLink: "",

    details:
      "A complete food ordering e-commerce platform designed for restaurants and food startups. Includes product listings, cart, checkout and admin features.",
    features: [
      "Product catalog with categories",
      "Add to cart & checkout flow",
      "Online payment integration",
      "Admin dashboard (optional)",
      "Mobile-optimized UI",
    ],
    tech: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      deployment: ["Vercel"],
      tools: ["Postman", "Git"],
    },
    auth: "User login & admin role supported.",
  },

  {
    slug: "online-food-ordering",
    title: "Online Food Ordering Platform",
    image: "/Food.webp",
    shortDesc:
      "City-based food ordering platform with restaurants, filters and smooth UX.",
    liveLink: "",
    repoLink: "",

    details:
      "A scalable food ordering platform supporting multiple vendors, city-wise search and optimized mobile experience.",
    features: [
      "Restaurant listings",
      "City & cuisine filters",
      "Order tracking",
      "Mobile-first UI",
    ],
    tech: {
      frontend: ["React"],
      backend: ["Node.js"],
      database: ["MongoDB"],
      deployment: ["Cloud hosting"],
      tools: ["Git", "Nginx"],
    },
    auth: "Customer & vendor login system.",
  },

  {
    slug: "corporate-website",
    title: "Corporate Business Website",
    image: "/portfolio-website.webp",
    shortDesc:
      "Professional corporate website for brand presence and lead generation.",
    liveLink: "",
    repoLink: "",

    details:
      "A clean and modern corporate website built to establish trust, showcase services and generate business leads.",
    features: [
      "Service pages",
      "Lead generation forms",
      "SEO-friendly structure",
      "Fast page load",
    ],
    tech: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Optional serverless functions"],
      database: ["Google Sheets / CRM"],
      deployment: ["Vercel"],
      tools: ["Google Analytics"],
    },
    auth: "Public business website.",
  },

  {
    slug: "saas-dashboard",
    title: "SaaS Admin Dashboard",
    image: "/saas-dashboard.webp",
    shortDesc:
      "Admin dashboard with analytics, user management and role-based access.",
    liveLink: "",
    repoLink: "",

    details:
      "A feature-rich SaaS dashboard designed for managing users, analytics and subscriptions.",
    features: [
      "Charts & analytics",
      "Role-based access",
      "User management",
      "Secure admin panel",
    ],
    tech: {
      frontend: ["React", "Chart.js"],
      backend: ["Node.js", "Express"],
      database: ["PostgreSQL"],
      deployment: ["AWS"],
      tools: ["Docker", "Git"],
    },
    auth: "Admin & user authentication with roles.",
  },

  {
    slug: "blog-magazine",
    title: "Blog & Magazine Platform",
    image: "/blog-magazine.webp",
    shortDesc:
      "SEO-focused blog and magazine website with articles and categories.",
    liveLink: "",
    repoLink: "",

    details:
      "A content-driven platform built for publishing blogs, articles and magazines with strong SEO foundations.",
    features: [
      "SEO optimized articles",
      "Categories & tags",
      "Fast loading pages",
      "Responsive layout",
    ],
    tech: {
      frontend: ["Next.js", "Tailwind CSS"],
      backend: ["Headless CMS"],
      database: ["MongoDB"],
      deployment: ["Vercel"],
      tools: ["Google Search Console"],
    },
    auth: "Author & editor login supported.",
  },

  {
    slug: "retail-pos",
    title: "Retail POS & Inventory System",
    image: "/retail-pos.webp",
    shortDesc:
      "Point of Sale system with inventory management for retail stores.",
    liveLink: "",
    repoLink: "",

    details:
      "A retail POS system for billing, inventory tracking and sales reporting.",
    features: [
      "Barcode billing",
      "Inventory management",
      "Sales analytics",
      "Offline support",
    ],
    tech: {
      frontend: ["React"],
      backend: ["Node.js"],
      database: ["MongoDB"],
      deployment: ["Cloud server"],
      tools: ["Docker"],
    },
    auth: "Staff & admin login supported.",
  },

  {
    slug: "education-platform",
    title: "Education / LMS Platform",
    image: "/education-platform.webp",
    shortDesc:
      "Learning management system with courses, quizzes and certificates.",
    liveLink: "",
    repoLink: "",

    details:
      "A complete LMS platform for online courses, student dashboards and progress tracking.",
    features: [
      "Course management",
      "Student dashboard",
      "Quizzes & certificates",
      "Payment integration",
    ],
    tech: {
      frontend: ["React"],
      backend: ["Node.js"],
      database: ["PostgreSQL"],
      deployment: ["AWS"],
      tools: ["Video hosting"],
    },
    auth: "Student & instructor login system.",
  },

  {
    slug: "landing-conversion",
    title: "High Conversion Landing Pages",
    image: "/landing-conversion.webp",
    shortDesc:
      "Fast, SEO-optimized landing pages built for lead generation campaigns.",
    liveLink: "",
    repoLink: "",

    details:
      "Landing pages designed for ads, lead magnets and conversions with analytics and A/B testing.",
    features: [
      "Fast loading pages",
      "SEO optimized",
      "Lead capture forms",
      "Analytics tracking",
    ],
    tech: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Serverless forms"],
      database: ["Not required"],
      deployment: ["Vercel"],
      tools: ["Google Analytics", "Hotjar"],
    },
    auth: "No authentication required.",
  },
];

export default portfolioItems;
