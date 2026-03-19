import React from "react";
import { Helmet } from "react-helmet-async";
import Packages from "../components/Packages";

export default function PackagesPage() {
  const pageUrl = "https://axismediadigital.com/packages";

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
        name: "Packages",
        item: pageUrl,
      },
    ],
  };

  /* ================= PACKAGES / OFFER SCHEMA ================= */
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Website & Digital Marketing Packages",
    description:
      "Affordable website development, SEO, Google Ads and digital marketing packages for startups, SMEs and enterprises.",
    url: pageUrl,
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development Packages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Packages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads & PPC Packages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complete Digital Marketing Packages",
        },
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Affordable Website & Digital Marketing Packages | Axis Media
        </title>

        <meta
          name="description"
          content="Explore affordable website development, SEO, Google Ads and digital marketing packages by Axis Media. Flexible plans for startups, SMEs and enterprises."
        />

        <link rel="canonical" href={pageUrl} />

        {/* SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(offerSchema)}
        </script>
      </Helmet>

      {/* ================= PACKAGES COMPONENT ================= */}
      <section className="pt-0">
        <Packages />
      </section>

      {/* ================= EXTRA CONTENT FOR SEO ================= */}
      <section className="container mx-auto px-6 py-16 text-gray-900">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Affordable Website & Digital Marketing Packages
        </h1>

        <p className="text-center mb-12 max-w-4xl mx-auto text-lg text-gray-600 leading-8">
          Axis Media offers flexible website packages for startups, local businesses,
          service providers, professional brands and e-commerce businesses. Whether
          you need a basic business website, a premium company website or a complete
          online store, our packages are structured to give you the right balance of
          design, performance, SEO readiness, scalability and business support.
        </p>

        <div className="max-w-5xl mx-auto space-y-12 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Basic Website Package – Best for startups and small businesses
            </h2>
            <p className="leading-8">
              The Basic Website package is ideal for startups, freelancers and small
              local businesses that need a simple but professional online presence.
              This package includes a free TLD domain, free cloud hosting, basic SEO,
              responsive layout, basic logo design, one business email, monthly backup
              and mobile-friendly website design. It is a practical choice for
              businesses that want to launch online quickly with a clean, functional
              and budget-friendly website that helps build trust and visibility.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Starter Website Package – Best for growing service brands
            </h2>
            <p className="leading-8">
              The Starter Website package is built for businesses that need a stronger
              and more polished online identity. It includes free domain and hosting,
              SSL certificate, up to 10 website pages, premium SEO, 3 business emails,
              content optimization, monthly backup and a fully responsive layout. This
              package is especially suitable for service-based businesses, consultants,
              agencies and local brands that want a more professional website capable
              of generating better inquiries and presenting their services clearly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Plus Website Package – Best for businesses needing more functionality
            </h2>
            <p className="leading-8">
              The Plus Website package is designed for businesses that want more than
              just a simple website. It includes domain and hosting, SEO optimization,
              mobile optimization, content optimization, social media integration,
              Google Map integration, admin panel access and 24/7 support. This plan
              is ideal for brands that want stronger website control, better customer
              experience and a more complete digital setup that supports both marketing
              and operational convenience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Pro Business Website Package – Best for serious business growth
            </h2>
            <p className="leading-8">
              The Pro Business Website package is a premium solution for established
              businesses that want a powerful and high-performing digital presence.
              It includes a free .com domain, advanced hosting, up to 20 website pages,
              advanced SEO, logo and branding kit, 5 business emails, speed optimization,
              premium security, social media handling for 2 platforms and SEO-friendly
              content writing for up to 10 pages. This package is ideal for businesses
              that want stronger branding, more advanced optimization and a website that
              supports long-term lead generation and brand authority.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              E-Commerce Starter Package – Best for launching an online store
            </h2>
            <p className="leading-8">
              The E-Commerce Starter package is designed for businesses that want to
              start selling online with the essential tools needed to run a reliable
              online store. It includes 10 product uploads, cash on delivery and online
              payment support, admin dashboard, order management, product filters,
              customer login, SEO-ready structure and one year of support. This package
              works well for smaller e-commerce businesses that want to enter the online
              market with a professional storefront and a manageable system.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              E-Commerce Pro Package – Best for scaling a serious e-commerce business
            </h2>
            <p className="leading-8">
              The E-Commerce Pro package is built for advanced e-commerce brands that
              need complete functionality and long-term scalability. It includes
              unlimited products, payment gateway integration, order and stock management,
              coupons and offers system, invoice system, delivery management, advanced
              SEO, 3 years of support, social media handling for 3 platforms and product
              plus website content writing. This package is best for businesses that
              want a feature-rich online store with better automation, stronger growth
              potential and a more complete customer shopping experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Why choose Axis Media packages?
            </h2>
            <p className="leading-8">
              Axis Media packages are designed to match different stages of business
              growth. Whether you are starting with a basic informational website,
              upgrading to a stronger business website or building a full e-commerce
              store, our packages focus on design quality, mobile responsiveness, SEO
              readiness, speed, security and long-term digital growth. We aim to offer
              transparent pricing, practical features and scalable solutions so your
              website can support your business not just today, but as it grows in the
              future.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Who are these packages made for?
            </h2>
            <p className="leading-8">
              These website packages are suitable for startups, freelancers, local
              businesses, clinics, salons, education brands, service providers,
              consultants, agencies and e-commerce businesses. If you want a website
              that helps you look professional, rank better on search engines, improve
              trust with customers and support online lead generation or sales, these
              packages are built to meet those business needs in a practical and
              affordable way.
            </p>
          </div>

          {/* ================= PACKAGE GUIDE ================= */}
          <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-10">
              Which Website Package Is Right For Your Business?
            </h2>

            <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-8">

              <p>
                If you are a startup or freelancer launching your first online presence,
                the <strong>Basic Website Package</strong> is the most affordable way to
                get started with a professional website. It includes essential features
                such as responsive design, domain support, hosting setup and basic SEO.
              </p>

              <p>
                Businesses that want a more professional website with multiple pages and
                better optimization should choose the <strong>Starter Website Package</strong>.
                This package provides stronger branding, SSL security and improved SEO
                performance to help attract customers online.
              </p>

              <p>
                The <strong>Plus Website Package</strong> is best for companies that want
                more control, integrations and ongoing support. With admin panel access,
                Google Maps integration and improved SEO setup, it supports businesses
                that want better digital performance.
              </p>

              <p>
                The <strong>Pro Business Website Package</strong> is ideal for established
                brands that require advanced SEO, premium hosting, branding and content
                optimization. This plan is designed for companies that want a strong
                digital presence and long-term online growth.
              </p>

              <p>
                Businesses that want to sell products online should choose the
                <strong>E-Commerce Starter</strong> or <strong>E-Commerce Pro</strong>
                packages depending on their store size. These packages include payment
                gateways, product management, order systems and SEO-ready structure for
                online sales growth.
              </p>

            </div>
          </section>

          {/* ================= PROCESS ================= */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">

              <h2 className="text-3xl font-bold text-center mb-12">
                Our Website Development Process
              </h2>

              <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 text-center">

                <div>
                  <h3 className="font-semibold mb-2">1. Requirement</h3>
                  <p className="text-gray-600 text-sm">
                    We understand your business goals, services and target audience.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2. Planning</h3>
                  <p className="text-gray-600 text-sm">
                    Our team designs the structure, layout and user experience.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3. Development</h3>
                  <p className="text-gray-600 text-sm">
                    We build your website with modern technology and responsive design.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">4. Review</h3>
                  <p className="text-gray-600 text-sm">
                    You review the website and request revisions if required.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">5. Launch</h3>
                  <p className="text-gray-600 text-sm">
                    After approval we launch the website and provide support.
                  </p>
                </div>

              </div>
            </div>
          </section>
          {/* ================= FAQ ================= */}
          <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions About Website Packages
            </h2>

            <div className="max-w-4xl mx-auto space-y-8 text-gray-700">

              <div>
                <h3 className="font-semibold text-lg">
                  How long does it take to build a website?
                </h3>
                <p>
                  Most websites are completed within 5 to 15 working days depending on
                  package size, design requirements and content availability.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Do your packages include domain and hosting?
                </h3>
                <p>
                  Yes. Most packages include domain support and hosting setup to help
                  businesses launch their website easily.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Will my website be mobile friendly?
                </h3>
                <p>
                  Yes. All websites we build are fully responsive and optimized for
                  mobile, tablet and desktop devices.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Can I upgrade my package later?
                </h3>
                <p>
                  Yes. You can upgrade your website package anytime as your business
                  grows and requires additional features.
                </p>
              </div>

            </div>
          </section>
        </div>
      </section>
    </main>
  );
}