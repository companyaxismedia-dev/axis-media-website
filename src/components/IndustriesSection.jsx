import { NavLink } from "react-router-dom";

export default function IndustriesSection() {
  return (
    <section
      className="px-6 py-20 bg-white border-t"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* MAIN HEADING */}
        <h2
          id="industries-heading"
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6"
        >
          Industries We Serve
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          Axis Media provides digital marketing, SEO, and website development
          solutions across multiple industries to help businesses grow online.
        </p>

        {/* INDUSTRIES GRID */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-12">

          {/* RETAIL */}
          <div>
            <h3 className="font-bold text-green-700 mb-2 tracking-wide">
              Retail Businesses
            </h3>
            <div className="w-12 h-[2px] bg-green-700 mb-3"></div>
            <ul className="space-y-2 text-gray-700">
              <li><NavLink to="/industry/book-store">Book Store Website</NavLink></li>
              <li><NavLink to="/industry/clothing-store">Clothing Store Website</NavLink></li>
              <li><NavLink to="/industry/furniture-store">Furniture Store Website</NavLink></li>
              <li><NavLink to="/industry/grocery-store">Grocery Store Website</NavLink></li>
              <li><NavLink to="/industry/hardware-store">Hardware Store Website</NavLink></li>
              <li><NavLink to="/industry/toy-store">Toy Store Website</NavLink></li>
            </ul>
          </div>

          {/* FOOD & HOSPITALITY */}
          <div>
            <h3 className="font-bold text-blue-700 mb-2 tracking-wide">
              Food & Hospitality
            </h3>
            <div className="w-12 h-[2px] bg-blue-700 mb-3"></div>
            <ul className="space-y-2 text-gray-700">
              <li><NavLink to="/industry/restaurant">Restaurant Marketing</NavLink></li>
              <li><NavLink to="/industry/fast-food">Fast Food Business</NavLink></li>
              <li><NavLink to="/industry/guest-house">Guest House Website</NavLink></li>
              <li><NavLink to="/industry/beverage-distributor">Beverage Distributor</NavLink></li>
              <li><NavLink to="/industry/hotel">Hotel Digital Marketing</NavLink></li>
            </ul>
          </div>

          {/* REAL ESTATE */}
          <div>
            <h3 className="font-bold text-rose-600 mb-2 tracking-wide">
              Real Estate
            </h3>
            <div className="w-12 h-[2px] bg-rose-600 mb-3"></div>
            <ul className="space-y-2 text-gray-700">
              <li><NavLink to="/industry/construction">Construction Company</NavLink></li>
              <li><NavLink to="/industry/architecture-firm">Architecture Firm</NavLink></li>
              <li><NavLink to="/industry/gardening">Gardening Services</NavLink></li>
              <li><NavLink to="/industry/estate-management">Estate Management</NavLink></li>
              <li><NavLink to="/industry/property-owner-association">Property Association</NavLink></li>
            </ul>
          </div>

          {/* CONSULTING */}
          <div>
            <h3 className="font-bold text-purple-700 mb-2 tracking-wide">
              Consulting Services
            </h3>
            <div className="w-12 h-[2px] bg-purple-700 mb-3"></div>
            <ul className="space-y-2 text-gray-700">
              <li><NavLink to="/industry/accounting-firm">Accounting Firm</NavLink></li>
              <li><NavLink to="/industry/marketing-agency">Marketing Agency</NavLink></li>
              <li><NavLink to="/industry/law-firm">Law Firm Website</NavLink></li>
              <li><NavLink to="/industry/talent-acquisition">Talent Acquisition</NavLink></li>
              <li><NavLink to="/industry/audit-certification">Audit & Certification</NavLink></li>
            </ul>
          </div>

          {/* MANUFACTURING */}
          <div>
            <h3 className="font-bold text-indigo-700 mb-2 tracking-wide">
              Manufacturing
            </h3>
            <div className="w-12 h-[2px] bg-indigo-700 mb-3"></div>
            <ul className="space-y-2 text-gray-700">
              <li><NavLink to="/industry/textile">Textile Industry</NavLink></li>
              <li><NavLink to="/industry/metal">Metal Manufacturing</NavLink></li>
              <li><NavLink to="/industry/furnitures">Furniture Manufacturing</NavLink></li>
              <li><NavLink to="/industry/food">Food Manufacturing</NavLink></li>
              <li><NavLink to="/industry/corporate-gifts">Corporate Gifts</NavLink></li>
            </ul>
          </div>

          {/* OTHERS */}
          <div>
            <h3 className="font-bold text-pink-700 mb-2 tracking-wide">
              Other Industries
            </h3>
            <div className="w-12 h-[2px] bg-pink-700 mb-3"></div>
            <ul className="space-y-2 text-gray-700">
              <li><NavLink to="/industry/nonprofit-organization">NGO</NavLink></li>
              <li><NavLink to="/industry/photography">Photography Business</NavLink></li>
              <li><NavLink to="/industry/environmental-agency">Environmental Agency</NavLink></li>
              <li><NavLink to="/industry/bike-leasing">Bike Leasing</NavLink></li>
              <li><NavLink to="/industry/software-reseller">Software Reseller</NavLink></li>
            </ul>
          </div>

        </div>

        {/* BROWSE ALL */}
        <div className="text-center mt-14">
          <NavLink
            to="/industries"
            className="text-green-700 font-semibold hover:text-black transition"
          >
            Browse All Industries →
          </NavLink>
        </div>

      </div>
    </section>
  );
}
