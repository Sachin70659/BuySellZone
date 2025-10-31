import { Link } from "react-router-dom";

export const ProductCard = ({ product, wishlist, setWishlist }) => {

  const isFav = wishlist?.some(w => w.id === product.id);

  const toggleFav = () => {
    if (!setWishlist) return;
    setWishlist(prev =>
      prev.some(p => p.id === product.id)
        ? prev.filter(p => p.id !== product.id)
        : [...prev, product]
    );
  };

  // Safe Image (Avoid 404)
  const image =
    product?.images?.[0] ||
    product?.image ||
    "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="border p-4 rounded shadow-md hover:shadow-xl transition bg-white">
      <div className="relative">
        <img
          src={image}
          alt={product.name}
          className="h-44 w-full object-cover rounded"
        />

        <button
          onClick={toggleFav}
          className={`absolute top-2 right-2 p-1 rounded ${
            isFav ? "bg-red-500 text-white" : "bg-white text-gray-800"
          }`}
        >
          ♥
        </button>
      </div>

      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-green-600 font-bold">₹ {product.price}</p>
      <p className="text-sm text-gray-500">{product.city || "Unknown"}</p>

      <div className="flex gap-2 mt-3">
        <Link
          to={`/product/${product.id}`}
          className="flex-1 text-center bg-blue-600 text-white py-2 rounded"
        >
          View
        </Link>
      </div>
    </div>
  );
};
