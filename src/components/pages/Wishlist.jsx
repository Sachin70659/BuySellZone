import { Link } from "react-router-dom";

export const Wishlist = ({ wishlist, setWishlist }) => {
  if (!wishlist?.length) return <div className="p-6 text-center">No saved items</div>;
  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {wishlist.map(p=>(
        <div key={p.id} className="border p-3 rounded bg-white">
          <img src={p.images?.[0]||p.image} className="h-36 w-full object-cover rounded" />
          <h3 className="font-semibold mt-2">{p.name}</h3>
          <p className="text-green-600">₹ {p.price}</p>
          <div className="flex gap-2 mt-2">
            <Link to={`/product/${p.id}`} className="flex-1 text-center bg-blue-600 text-white py-1 rounded">View</Link>
            <button onClick={()=>setWishlist(prev=>prev.filter(x=>x.id!==p.id))} className="px-3 py-1 border rounded">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};
