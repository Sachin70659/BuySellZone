import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-100 text-gray-800 px-10 py-2 flex items-center justify-between sticky top-0 z-50 border-b">

      <h1 className="font-bold text-red-400 text-xl hover:ring hover:px-3 hover:bg-blue-200 transition">
        BuySellZone
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-lg">
        <Link to="/" className="hover:ring hover:px-4 hover:bg-blue-200 hover:text-gray-800 transition">Home</Link>
        <Link to="/add" className="hover:ring hover:px-4 hover:bg-blue-200 hover:text-gray-800 transition">Sell Product</Link>
        <Link to="/about" className="hover:ring hover:px-4 hover:bg-blue-200 hover:text-gray-800 transition">About</Link>
        <Link to="/contact" className="hover:ring hover:px-4 hover:bg-blue-200 hover:text-gray-800 transition">Contact</Link>

        {/* ✅ Wishlist Button */}
        <Link to="/wishlist" className="hover:ring hover:px-4 hover:bg-red-200 text-red-600 flex items-center gap-1 transition">
          <Heart size={20} /> Wishlist
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-200 text-black flex flex-col text-center py-4 space-y-4 md:hidden">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/add" onClick={() => setOpen(false)}>Sell Product</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          {/* ✅ Wishlist Mobile */}
          <Link to="/wishlist" onClick={() => setOpen(false)} className="text-red-600 font-semibold">
            ♥ Wishlist
          </Link>
        </div>
      )}
    </nav>
  );
};
