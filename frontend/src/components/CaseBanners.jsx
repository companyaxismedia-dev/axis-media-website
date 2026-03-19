import React from "react";
import { NavLink } from "react-router-dom";

export default function CaseBanners() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Growth Campaign",
      img: "/E-Commerce Growth Campaign.webp",
      desc:
        "We redesigned the e-commerce website with a cleaner user journey, improved loading speed, optimized product pages and implemented performance-focused ad funnels. This campaign helped the brand improve user engagement, increase conversions and generate more qualified online sales through a stronger digital storefront.",
      link: "/case-studies/ecommerce-growth",
    },
    {
      id: 2,
      title: "Brand Awareness & Social Media Boost",
      img: "/Brand Awareness & Social Media Boost.webp",
      desc:
        "We executed a complete brand awareness campaign through social media strategy, creative content, audience targeting and paid promotion. The project improved visibility, expanded reach and helped the business build stronger customer engagement across key digital platforms.",
      link: "/case-studies/brand-awareness",
    },
    {
      id: 3,
      title: "SEO Ranking & Lead Generation",
      img: "/google-ads (1).webp",
      desc:
        "This project focused on SEO strategy, technical optimization, keyword targeting and lead funnel improvement. As a result, the website achieved stronger Google visibility for competitive keywords and started generating consistent monthly inquiries from high-intent search traffic.",
      link: "/case-studies/seo-lead-generation",
    },
    {
      id: 4,
      title: "Website Redesign for Service Business",
      img: "/WebsiteDevelopment (1).webp",
      desc:
        "We redesigned a service-based business website to improve visual trust, mobile experience and conversion flow. The new structure made the site more professional, easier to navigate and more effective at turning visitors into leads through better layout and call-to-action placement.",
      link: "/case-studies/website-redesign-service-business",
    },
    {
      id: 5,
      title: "Google Ads Campaign for Local Leads",
      img: "/GoogleAdsManagement.webp",
      desc:
        "We launched and optimized a Google Ads campaign for a local business with a focus on qualified lead generation. Through keyword research, ad copy testing and conversion tracking, the campaign reduced wasted spend and improved lead quality from users actively searching for services.",
      link: "/case-studies/google-ads-local-leads",
    },
    {
      id: 6,
      title: "Social Media Growth for a Lifestyle Brand",
      img: "/SocialMediaMarketing.webp",
      desc:
        "This campaign helped a lifestyle brand improve content quality, strengthen its social media identity and increase engagement across Instagram and Facebook. Our work included content planning, design support and growth strategy that helped the brand connect better with its target audience.",
      link: "/case-studies/social-media-lifestyle-brand",
    },
    {
      id: 7,
      title: "Local SEO for Clinic Visibility",
      img: "/SeoServices (1).webp",
      desc:
        "We improved the local SEO presence of a clinic through Google Business Profile optimization, local keyword strategy and website SEO improvements. The result was stronger local visibility, better map presence and a consistent increase in appointment-based inquiry traffic.",
      link: "/case-studies/local-seo-clinic-visibility",
    },
    {
      id: 8,
      title: "Creative Branding for Startup Launch",
      img: "/email-marketing (1).webp",
      desc:
        "For this startup launch, we built a cohesive brand identity through design direction, digital creatives and marketing support. The project helped the business create a professional market presence and communicate its value more effectively across website and social media channels.",
      link: "/case-studies/creative-branding-startup-launch",
    },
    {
      id: 9,
      title: "Lead Funnel Optimization for Business Growth",
      img: "/Business-industries.webp",
      desc:
        "We optimized the lead generation funnel by improving landing page structure, form experience, traffic quality and campaign targeting. This helped the business capture more relevant inquiries, improve conversion rates and build a more reliable pipeline of potential customers.",
      link: "/case-studies/lead-funnel-optimization",
    },
  ];

  return (
    <section
      className="py-20 bg-[#F8F9FB]"
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          id="case-studies-heading"
          className="text-4xl font-extrabold text-center mb-4 text-gray-900"
        >
          Case Studies & Success Stories
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-8">
          Explore how Axis Media has helped businesses improve visibility,
          generate leads, strengthen branding and grow through website
          development, SEO, paid ads and social media campaigns.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} – Axis Media Digital Marketing Case Study`}
                  width="600"
                  height="400"
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {p.title}
                </h3>

                <p className="text-gray-700 leading-8 mb-5">
                  {p.desc}
                </p>

                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}