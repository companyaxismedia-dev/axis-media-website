import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaPaintBrush,
  FaPenNib,
  FaBullhorn,
  FaPalette,
  FaIcons,
  FaVectorSquare,
} from "react-icons/fa";

export default function BrandingPage() {
  const pageUrl = "https://axismediadigital.com/services/branding";

  /* ================= SERVICE SCHEMA ================= */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Branding & Graphic Design Services",
    provider: {
      "@type": "Organization",
      name: "Axis Media Digital",
      url: "https://axismediadigital.com",
    },
    areaServed: "India",
    description:
      "Professional branding and graphic design services including logo design, brand identity, social media creatives, marketing graphics and print design.",
  };

  /* ================= BREADCRUMB SCHEMA ================= */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://axismediadigital.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://axismediadigital.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Branding & Graphic Design",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Branding & Graphic Design Services in India | Axis Media Digital
        </title>

        <meta
          name="description"
          content="Axis Media Digital offers professional branding & graphic design services in India including logo design, brand identity, social media creatives, marketing graphics and print design."
        />

        <link rel="canonical" href={pageUrl} />

        {/* SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* SEO SAFE H1 */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Branding & Graphic Design Services in India
          </h1>

          <p className="text-lg md:text-xl text-pink-100 max-w-3xl mx-auto">
            Build a strong brand identity with creative designs that connect,
            convert, and leave a lasting impression.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-white text-purple-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
            >
              Get Branding Consultation
            </a>
            <a
              href="/portfolio"
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-700 transition"
            >
              View Design Work
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Creative Branding That Defines Your Business
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Axis Media Digital helps businesses create powerful brand identities
            through visually appealing and strategically designed graphics that
            reflect your brand values and vision.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Branding & Graphic Design Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard
              icon={<FaIcons />}
              title="Logo Design"
              desc="Unique, memorable, and scalable logo designs that represent your brand identity."
            />
            <ServiceCard
              icon={<FaPalette />}
              title="Brand Identity Design"
              desc="Complete brand identity including colors, fonts, and visual guidelines."
            />
            <ServiceCard
              icon={<FaPaintBrush />}
              title="Social Media Creatives"
              desc="Eye-catching graphics for Instagram, Facebook, and other platforms."
            />
            <ServiceCard
              icon={<FaBullhorn />}
              title="Marketing Creatives"
              desc="Banners, posters, brochures, and promotional designs that convert."
            />
            <ServiceCard
              icon={<FaPenNib />}
              title="UI Graphics & Banners"
              desc="Professional UI elements, website banners, and visual assets."
            />
            <ServiceCard
              icon={<FaVectorSquare />}
              title="Print Design"
              desc="Business cards, flyers, hoardings, and all print-ready designs."
            />
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-20 bg-[#0A1B3F] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose Axis Media Digital?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <WhyCard
              title="Creative Experts"
              desc="Experienced designers who understand branding psychology."
            />
            <WhyCard
              title="Brand-Focused Designs"
              desc="Designs aligned with your business goals & target audience."
            />
            <WhyCard
              title="Affordable Pricing"
              desc="High-quality designs at competitive and transparent prices."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build a Strong Brand?
        </h2>
        <p className="text-lg mb-8">
          Let our creative team design a brand that truly stands out.
        </p>
        <a
          href="/contact"
          className="bg-white text-purple-700 font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Talk to Branding Expert
        </a>
      </section>
    </>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition text-center">
      <div className="text-purple-600 text-4xl mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function WhyCard({ title, desc }) {
  return (
    <div className="bg-white/10 p-8 rounded-2xl">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-purple-100 text-sm">{desc}</p>
    </div>
  );
}
