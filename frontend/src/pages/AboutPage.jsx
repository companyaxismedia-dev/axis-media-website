import React from "react";
import { Helmet } from "react-helmet-async";
import About from "../components/About";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaCheckCircle,
  FaBullhorn,
  FaGlobe,
  FaSearch,
  FaChartLine,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="pt-24 bg-gradient-to-b from-[#F8FAFF] via-[#EEF3FF] to-[#E6ECFF]">
      <Helmet>
        <title>About Axis Media | Digital Marketing & Web Development Agency</title>

        <meta
          name="description"
          content="Axis Media is a trusted digital marketing and web development agency offering SEO, Google Ads, social media marketing, website development and business growth solutions."
        />

        <link rel="canonical" href="https://axismediadigital.com/about" />

        <meta property="og:title" content="About Axis Media" />
        <meta
          property="og:description"
          content="Performance-driven digital marketing, SEO, Google Ads, social media and web development agency."
        />
        <meta property="og:url" content="https://axismediadigital.com/about" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Axis Media",
            url: "https://axismediadigital.com",
            logo: "https://axismediadigital.com/axismedia.webp",
            description:
              "Axis Media is a digital marketing and web development agency providing SEO, Google Ads, social media marketing, website development and business growth solutions.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Delhi NCR",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9871584001",
              contactType: "customer support",
            },
            sameAs: [
              "https://www.facebook.com/profile.php?id=61584611262239",
              "https://www.instagram.com/axismedia123",
              "https://www.linkedin.com/company/axis-media-digital",
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
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
                name: "About Axis Media",
                item: "https://axismediadigital.com/about",
              },
            ],
          })}
        </script>
      </Helmet>

      <About />

      <section className="container mx-auto px-6 py-16 text-gray-800">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-[#0A144A]">
          About Axis Media
        </h1>

        <p className="text-center mb-8 max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Axis Media is a full-service digital marketing and web development
          agency helping businesses grow online with SEO, Google Ads,
          social media marketing, performance creatives and high-converting
          websites.
        </p>

        <p className="text-center max-w-4xl mx-auto text-gray-600 mb-14 leading-relaxed">
          We work with startups, local businesses, service brands, salons,
          fashion labels, spiritual product stores, e-commerce businesses and
          growing companies across India. Our focus is simple — build visibility,
          drive qualified traffic, generate leads and turn digital presence into
          measurable business growth.
        </p>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#E6ECF5]">
            <h2 className="text-2xl font-semibold mb-4 text-[#0A144A]">
              Technologies & Tools We Use
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS</li>
              <li><strong>Backend:</strong> Node.js, Express</li>
              <li><strong>Databases:</strong> MongoDB, MySQL</li>
              <li><strong>E-commerce:</strong> Razorpay, Stripe, product-focused UX flows</li>
              <li><strong>Marketing:</strong> Google Ads, Meta Ads, GA4, Search Console</li>
              <li><strong>SEO Work:</strong> Technical SEO, on-page SEO, local SEO, content optimization</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#E6ECF5]">
            <h2 className="text-2xl font-semibold mb-4 text-[#0A144A]">
              How We Work
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Our process is transparent and growth-focused — research,
              competitor analysis, strategy planning, design, development,
              campaign execution, reporting and continuous optimization.
              Every project is guided by business goals instead of guesswork.
            </p>

            <ul className="list-disc pl-5 mt-4 text-gray-700 space-y-2">
              <li>Project-based website delivery</li>
              <li>Monthly SEO and ad management retainers</li>
              <li>Landing page and lead generation setup</li>
              <li>Dedicated support and performance reporting</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-[#E6ECF5] p-8 md:p-10 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A144A] mb-3">
              What Digital Marketing Means for Modern Businesses
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Digital marketing is no longer optional for businesses that want to
              compete seriously online. Today, customers search on Google,
              compare brands on social media, evaluate trust through websites
              and reviews, and make decisions based on the online experience a
              business provides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E7EEFA]">
              <FaSearch className="text-3xl text-[#2EA3F2] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#0A144A]">SEO & Search Visibility</h3>
              <p className="text-gray-700 leading-relaxed">
                We help businesses improve Google rankings through technical SEO,
                content optimization, internal linking, metadata improvement and
                keyword targeting focused on real business intent.
              </p>
            </div>

            <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E7EEFA]">
              <FaBullhorn className="text-3xl text-[#6D28D9] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#0A144A]">Paid Advertising</h3>
              <p className="text-gray-700 leading-relaxed">
                Google Ads and Meta Ads can generate faster results when campaign
                structure, targeting, creative quality and landing page alignment
                are handled properly. We focus on qualified leads, not vanity clicks.
              </p>
            </div>

            <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E7EEFA]">
              <FaGlobe className="text-3xl text-[#10B981] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#0A144A]">Websites That Convert</h3>
              <p className="text-gray-700 leading-relaxed">
                A website should not only look good — it should load fast, work on
                mobile, build trust, explain services clearly and drive inquiries,
                bookings, sales or calls.
              </p>
            </div>

            <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E7EEFA]">
              <FaChartLine className="text-3xl text-[#F59E0B] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#0A144A]">Growth Strategy</h3>
              <p className="text-gray-700 leading-relaxed">
                We combine search, content, design and campaign data to build
                practical growth systems. The goal is to improve discoverability,
                customer trust and revenue over time.
              </p>
            </div>

            <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E7EEFA]">
              <FaLaptopCode className="text-3xl text-[#EC4899] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#0A144A]">Brand Presentation</h3>
              <p className="text-gray-700 leading-relaxed">
                From landing pages and e-commerce design to service websites and
                creatives, branding affects perception. Better design often leads
                to higher trust and stronger conversion performance.
              </p>
            </div>

            <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#E7EEFA]">
              <FaUsers className="text-3xl text-[#3B82F6] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#0A144A]">Customer Journey Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                We build digital systems around how real customers search,
                compare, evaluate and convert. That makes campaigns more relevant
                and websites more effective.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A144A] mb-3">
              Industries & Brand Types We Have Worked Around
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Our portfolio and brand work spans multiple visual styles and
              business categories. The examples below reflect the kind of
              industries and brand identities we create digital strategies for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-2xl shadow-lg border border-[#E6ECF5]">
              <h3 className="text-2xl font-semibold text-[#0A144A] mb-4">
                Fashion, Beauty & Lifestyle Brands
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Brands like <strong>Glovia Glamour</strong>, <strong>IMKAA</strong>,
                <strong> Pretty</strong>, <strong>Blush Bloom</strong> and
                <strong> Booty Bloom</strong> represent fashion, beauty,
                self-care and aesthetic brand categories. For these businesses,
                digital marketing requires strong visuals, social media-friendly
                creatives, elegant websites, product storytelling and brand-led
                customer journeys.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><FaCheckCircle className="text-[#6D28D9] mt-1" /> Beauty and salon-oriented visual branding</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#6D28D9] mt-1" /> Fashion product-focused website presentation</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#6D28D9] mt-1" /> Social media and paid campaign-ready creatives</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-lg border border-[#E6ECF5]">
              <h3 className="text-2xl font-semibold text-[#0A144A] mb-4">
                Spiritual, Niche & Identity-Based Brands
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Brand examples like <strong>Sri Mandir Shop</strong>,
                <strong> Astro Walk</strong> and <strong>DamieTree</strong>
                reflect spiritual, symbolic, meaningful and niche identity-led
                categories. These brands often need a mix of trust, storytelling,
                emotional connection and search visibility to grow online.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><FaCheckCircle className="text-[#6D28D9] mt-1" /> Symbolic brand identity and design alignment</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#6D28D9] mt-1" /> Trust-building content and clean user journeys</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#6D28D9] mt-1" /> SEO strategy for niche and intent-based discovery</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-lg border border-[#E6ECF5]">
              <h3 className="text-2xl font-semibold text-[#0A144A] mb-4">
                Corporate, Service & Professional Businesses
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We also work around corporate-style digital positioning for
                service businesses, company profiles, local service providers,
                consultancy brands and growth-focused agencies. These businesses
                need authority, clarity, trust signals and strong inquiry systems.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><FaCheckCircle className="text-[#6D28D9] mt-1" /> High-trust website structures</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#6D28D9] mt-1" /> Lead generation landing pages</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#6D28D9] mt-1" /> SEO, ads and local visibility improvement</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-lg border border-[#E6ECF5]">
              <h3 className="text-2xl font-semibold text-[#0A144A] mb-4">
                E-Commerce & Product-Led Growth
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Product-focused brands need more than traffic. They need category
                structure, product page clarity, mobile-first design, trust
                building, faster checkout experiences and campaign-ready
                destination pages. We build digital systems that support both
                discovery and conversion.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2"><FaCheckCircle className="text-[#6D28D9] mt-1" /> Product page optimization</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#6D28D9] mt-1" /> Search-focused category structures</li>
                <li className="flex gap-2"><FaCheckCircle className="text-[#6D28D9] mt-1" /> Better conversion journeys for mobile users</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-[#E6ECF5] p-8 md:p-10 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A144A] mb-6 text-center">
            Why Businesses Choose Axis Media
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
            <div>
              <p className="mb-4">
                Businesses choose Axis Media because we do not treat websites,
                SEO, ads and branding as separate disconnected tasks. We build
                them as one complete growth system.
              </p>
              <p>
                That means your website design, keyword strategy, ad messaging,
                landing page structure and social branding all work together
                instead of pulling in different directions.
              </p>
            </div>

            <div>
              <p className="mb-4">
                We focus on practical results — better visibility, more trust,
                more qualified inquiries and a stronger digital presence.
              </p>
              <p>
                Whether the business is a salon, a fashion label, a local service
                company, a niche store or a product brand, our goal remains the
                same: make your digital presence more effective and more profitable.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl text-center border border-[#E6ECF5]">
          <h2 className="text-2xl font-bold mb-4 text-[#0A144A]">
            Get in Touch with Axis Media
          </h2>

          <p className="text-gray-600 mb-6">
            Need a free consultation, marketing strategy discussion or website
            audit? We usually respond within one business day.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="mailto:companyaxismedia@gmail.com"
              className="inline-flex items-center gap-3 bg-blue-50 hover:bg-blue-100 px-5 py-3 rounded-lg"
            >
              <FaEnvelope /> companyaxismedia@gmail.com
            </a>

            <a
              href="tel:+919871584001"
              className="inline-flex items-center gap-3 bg-blue-50 hover:bg-blue-100 px-5 py-3 rounded-lg"
            >
              <FaPhone /> +91 98715 84001
            </a>
          </div>

          <div className="flex justify-center gap-6 text-xl text-blue-600">
            <a href="https://www.facebook.com/profile.php?id=61584611262239" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/axismedia123" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/axis-media-digital" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}