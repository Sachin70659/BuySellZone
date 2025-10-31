import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold text-white mb-3">BuySellZone</h2>
          <p className="text-sm">
            A trusted platform to buy & sell used items safely.  
            Mobile, Bike, Laptop, Furniture & more.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-700 hover:text-lg hover:border-b">Home</Link></li>
            <li><Link to="/add" className="hover:text-red-700 hover:text-lg hover:border-b">Sell Product</Link></li>
            <li><Link to="/about" className="hover:text-red-700 hover:text-lg hover:border-b">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-red-700 hover:text-lg hover:border-b">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact Info</h2>
          <ul className="space-y-2 text-sm">
            <li>📍 India</li>
            <li>📞 +91 9876543210</li>
            <li>✉ support@usedmarket.in</li>
          </ul>
        </div>

      </div>

      <div className="text-center border-t border-gray-700 py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Used Market — All Rights Reserved.
      </div>
    </footer>
  );
};
