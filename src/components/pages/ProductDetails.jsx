import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = ({ productList, wishlist, setWishlist }) => {
  const { id } = useParams();
  const product = productList.find((p) => p.id === Number(id));

  if (!product) return <div className="p-6 text-center">Product not found</div>;

  const [index, setIndex] = React.useState(0);
  const images = product.images?.length
    ? product.images
    : product.image
    ? [product.image]
    : [];

  const isFav = wishlist?.some((w) => w.id === product.id);
  const toggleFav = () => {
    if (!setWishlist) return;
    setWishlist((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white border rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left: Image Section */}
        <div>
          <div className="relative">
            <img
              src={images[index]}
              alt={product.name}
              className="w-full h-80 object-cover rounded"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setIndex((i) => (i - 1 + images.length) % images.length)
                  }
                  className="absolute left-2 top-1/2 bg-white p-2 rounded shadow"
                >
                  ‹
                </button>

                <button
                  onClick={() => setIndex((i) => (i + 1) % images.length)}
                  className="absolute right-2 top-1/2 bg-white p-2 rounded shadow"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto">
              {images.map((img, i) => (
                <img
                  key={i}
                  onClick={() => setIndex(i)}
                  src={img}
                  className={`h-16 w-24 object-cover rounded cursor-pointer border ${
                    i === index ? "ring-2 ring-blue-500" : ""
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-green-600 font-bold text-2xl">₹ {product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          <div className="border-t pt-4">
            <p><strong className="text-gray-700">Seller:</strong> {product.seller}</p>
            <p><strong className="text-gray-700">Contact:</strong> {product.contact}</p>
            <p><strong className="text-gray-700">City:</strong> {product.city}</p>
          </div>

          <div className="flex gap-3 pt-4">
            <a
              href={`https://wa.me/${product.contact.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-green-600 text-white text-center py-2 rounded"
            >
              WhatsApp Seller
            </a>

            <button
              onClick={toggleFav}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              {isFav ? "❤️ Saved" : "🤍 Save"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
