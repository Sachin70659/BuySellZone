import { useState } from "react";
import { ProductCard } from "../pages/ProductCard";

export const Home = ({ productList, setProductList, wishlist, setWishlist }) => {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredProducts = productList.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterCategory === "All" || item.category === filterCategory)
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6">

      {/* Search + Filter Bar */}
      <div className="bg-white shadow-md p-4 rounded-lg mb-6 flex flex-col sm:flex-row gap-4">

        <input
          type="text"
          placeholder="🔍 Search Products..."
          className="border p-2 rounded w-full sm:w-2/3"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded w-full sm:w-1/3"
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Mobile">Mobile</option>
          <option value="Bike">Bike</option>
          <option value="Car">Car</option>
          <option value="Laptop">Laptop</option>
          <option value="Furniture">Furniture</option>
          <option value="Cycle">Cycle</option>
        </select>

      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <ProductCard 
              key={item.id} 
              product={item}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          ))}
        </div>
      ) : (
        <h2 className="text-center text-gray-600 text-xl mt-10">
          😕 No Product Found
        </h2>
      )}
    </div>
  );
};
