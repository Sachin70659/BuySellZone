import { useState } from "react";

export const AddProduct = ({ setProductList, auth }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    city: "",
    category: "Mobile",
    seller: "",
    contact: "",
    images: []
  });

  const [errors, setErrors] = useState({});

  // Handle image files
  const handleFiles = (e) => {
    const files = Array.from(e.target.files).slice(0, 4);
    Promise.all(
      files.map(
        (file) =>
          new Promise((res, rej) => {
            const reader = new FileReader();
            reader.onload = () => res(reader.result);
            reader.onerror = rej;
            reader.readAsDataURL(file);
          })
      )
    )
      .then((results) => setForm((f) => ({ ...f, images: results })))
      .catch(() => alert("Image read error"));
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Product name is required";
    else if (!/^[a-zA-Z\s]{1,30}$/.test(form.name))
      newErrors.name = "Product name must contain letters only (max 30)";

    if (!form.price.trim()) newErrors.price = "Price is required";
    else if (!/^\d+$/.test(form.price) || parseInt(form.price) <= 0)
      newErrors.price = "Price must be a positive number";

    if (!form.seller.trim()) newErrors.seller = "Seller name is required";
    else if (!/^[a-zA-Z\s]{1,30}$/.test(form.seller))
      newErrors.seller = "Seller name must contain letters only (max 30)";

    if (!form.contact.trim()) newErrors.contact = "Contact number is required";
    else if (!/^\d{1,10}$/.test(form.contact))
      newErrors.contact = "Contact must be numeric (max 10 digits)";

    if (!form.city.trim()) newErrors.city = "City is required";
    else if (!/^[a-zA-Z\s]{1,30}$/.test(form.city))
      newErrors.city = "City must contain letters only (max 30)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newProduct = { id: Date.now(), ...form };
    setProductList((prev) => [newProduct, ...prev]);
    alert("Product added successfully!");

    // Reset form
    setForm({
      name: "",
      price: "",
      description: "",
      city: "",
      category: "Mobile",
      seller: "",
      contact: "",
      images: []
    });
    setErrors({});
  };

  return (
    <form
      className="max-w-lg mx-auto mt-4 p-4 bg-white rounded shadow"
      onSubmit={submit}
    >
      {/* Product Name */}
      <input
        className="border p-2 w-full mb-1"
        type="text"
        placeholder="Product name"
        value={form.name}
        onChange={(e) => {
          const val = e.target.value;
          if (/^[a-zA-Z\s]*$/.test(val)) setForm({ ...form, name: val });
        }}
      />
      {errors.name && <div className="text-red-500 mb-2">{errors.name}</div>}

      {/* Price */}
      <input
        className="border p-2 w-full mb-1"
        type="text"
        placeholder="Price"
        value={form.price}
        onChange={(e) => {
          const val = e.target.value;
          if (/^\d*$/.test(val)) setForm({ ...form, price: val });
        }}
      />
      {errors.price && <div className="text-red-500 mb-2">{errors.price}</div>}

      {/* Category */}
      <select
        className="border p-2 w-full mb-2"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option>Mobile</option>
        <option>Bike</option>
        <option>Car</option>
        <option>Laptop</option>
        <option>Cycle</option>
      </select>

      {/* City */}
      <input
        className="border p-2 w-full mb-1"
        type="text"
        placeholder="City"
        value={form.city}
        onChange={(e) => {
          const val = e.target.value;
          if (/^[a-zA-Z\s]*$/.test(val)) setForm({ ...form, city: val });
        }}
      />
      {errors.city && <div className="text-red-500 mb-2">{errors.city}</div>}

      {/* Seller */}
      <input
        className="border p-2 w-full mb-1"
        type="text"
        placeholder="Seller name"
        value={form.seller}
        onChange={(e) => {
          const val = e.target.value;
          if (/^[a-zA-Z\s]*$/.test(val)) setForm({ ...form, seller: val });
        }}
      />
      {errors.seller && <div className="text-red-500 mb-2">{errors.seller}</div>}

      {/* Contact */}
      <input
        className="border p-2 w-full mb-1"
        type="text"
        placeholder="Contact number"
        value={form.contact}
        onChange={(e) => {
          const val = e.target.value;
          if (/^\d{0,10}$/.test(val)) setForm({ ...form, contact: val });
        }}
      />
      {errors.contact && <div className="text-red-500 mb-2">{errors.contact}</div>}

      {/* Description */}
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      {/* Images */}
      <input
        type="file"
        accept="image/*"
        multiple
        className="mb-2"
        onChange={handleFiles}
      />

      {/* Image Preview */}
      <div className="flex gap-2 mb-2">
        {form.images.map((img, i) => (
          <img key={i} src={img} className="h-20 w-20 object-cover rounded" />
        ))}
      </div>

      <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-700">
        Add Product
      </button>
    </form>
  );
};
