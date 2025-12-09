import { NavLink } from "react-router-dom";

export default function IndustriesSection() {
  return (
    <div className="px-10 py-16 bg-white border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 lg:grid-cols-6 gap-12">

        {/* RETAIL */}
        <div>
          <h3 className="font-bold text-green-700 mb-2 tracking-wide">RETAIL</h3>
          <div className="w-12 h-[2px] bg-green-700 mb-3"></div>
          <ul className="space-y-2 text-gray-700">

            <li><NavLink to="/industry/book-store">Book Store</NavLink></li>
            <li><NavLink to="/industry/clothing-store">Clothing Store</NavLink></li>
            <li><NavLink to="/industry/furniture-store">Furniture Store</NavLink></li>
            <li><NavLink to="/industry/grocery-store">Grocery Store</NavLink></li>
            <li><NavLink to="/industry/hardware-store">Hardware Store</NavLink></li>
            <li><NavLink to="/industry/toy-store">Toy Store</NavLink></li>

          </ul>
        </div>

        {/* FOOD */}
        <div>
          <h3 className="font-bold text-blue-700 mb-2 tracking-wide">
            FOOD & HOSPITALITY
          </h3>
          <div className="w-12 h-[2px] bg-blue-700 mb-3"></div>
          <ul className="space-y-2 text-gray-700">

            <li><NavLink to="/industry/restaurant">Restaurant</NavLink></li>
            <li><NavLink to="/industry/fast-food">Fast Food</NavLink></li>
            <li><NavLink to="/industry/guest-house">Guest House</NavLink></li>
            <li><NavLink to="/industry/beverage-distributor">Beverage Distributor</NavLink></li>
            <li><NavLink to="/industry/hotel">Hotel</NavLink></li>

          </ul>
        </div>

        {/* REAL ESTATE */}
        <div>
          <h3 className="font-bold text-red-600 mb-2 tracking-wide">
            REAL ESTATE
          </h3>
          <div className="w-12 h-[2px] bg-red-600 mb-3"></div>
          <ul className="space-y-2 text-gray-700">

            <li><NavLink to="/industry/construction">Construction</NavLink></li>
            <li><NavLink to="/industry/architecture-firm">Architecture Firm</NavLink></li>
            <li><NavLink to="/industry/gardening">Gardening</NavLink></li>
            <li><NavLink to="/industry/estate-management">Estate Management</NavLink></li>
            <li><NavLink to="/industry/property-owner-association">Property Association</NavLink></li>

          </ul>
        </div>

        {/* CONSULTING */}
        <div>
          <h3 className="font-bold text-purple-700 mb-2 tracking-wide">
            CONSULTING
          </h3>
          <div className="w-12 h-[2px] bg-purple-700 mb-3"></div>
          <ul className="space-y-2 text-gray-700">

            <li><NavLink to="/industry/accounting-firm">Accounting Firm</NavLink></li>
            <li><NavLink to="/industry/marketing-agency">Marketing Agency</NavLink></li>
            <li><NavLink to="/industry/law-firm">Law Firm</NavLink></li>
            <li><NavLink to="/industry/talent-acquisition">Talent Acquisition</NavLink></li>
            <li><NavLink to="/industry/audit-certification">Audit & Certification</NavLink></li>

          </ul>
        </div>

        {/* MANUFACTURING */}
        <div>
          <h3 className="font-bold text-indigo-700 mb-2 tracking-wide">
            MANUFACTURING
          </h3>
          <div className="w-12 h-[2px] bg-indigo-700 mb-3"></div>
          <ul className="space-y-2 text-gray-700">

            <li><NavLink to="/industry/textile">Textile</NavLink></li>
            <li><NavLink to="/industry/metal">Metal</NavLink></li>
            <li><NavLink to="/industry/furnitures">Furnitures</NavLink></li>
            <li><NavLink to="/industry/food">Food</NavLink></li>
            <li><NavLink to="/industry/corporate-gifts">Corporate Gifts</NavLink></li>

          </ul>
        </div>

        {/* OTHERS */}
        <div>
          <h3 className="font-bold text-pink-700 mb-2 tracking-wide">OTHERS</h3>
          <div className="w-12 h-[2px] bg-pink-700 mb-3"></div>
          <ul className="space-y-2 text-gray-700">

            <li><NavLink to="/industry/nonprofit-organization">NGO</NavLink></li>
            <li><NavLink to="/industry/photography">Photography</NavLink></li>
            <li><NavLink to="/industry/environmental-agency">Environmental Agency</NavLink></li>
            <li><NavLink to="/industry/billboard-rental">Billboard Rental</NavLink></li>
            <li><NavLink to="/industry/bike-leasing">Bike Leasing</NavLink></li>
            <li><NavLink to="/industry/software-reseller">Software Reseller</NavLink></li>

          </ul>
        </div>

      </div>

      <div className="text-center mt-12 text-gray-700 font-medium hover:text-black cursor-pointer">
        Browse all Industries →
      </div>
    </div>
  );
}
