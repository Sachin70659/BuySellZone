import { useState } from "react";

export const AddProduct = ({ setProductList, auth }) => {
  const [form, setForm] = useState({ name:"", price:"", description:"", city:"", category:"Mobile", seller:"", contact:"", images:[] });

  const handleFiles = (e) => {
    const files = Array.from(e.target.files).slice(0,4);
    Promise.all(files.map(file => new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result);
      reader.onerror = rej;
      reader.readAsDataURL(file);
    }))).then(results => setForm(f => ({...f, images: results}))).catch(()=>alert("Image read error"));
  };

  const submit = (e) => {
    e.preventDefault();
    const newProduct = { id: Date.now(), ...form };
    setProductList(prev => [newProduct, ...prev]);
    alert("Product added");
  };

  return (
    <form className="max-w-lg mx-auto  mt-4 p-4 bg-white rounded" onSubmit={submit}>
      <input className="border p-2 w-full mb-2" placeholder="Product name" onChange={(e)=>setForm({...form,name:e.target.value})} />
      <input className="border p-2 w-full mb-2" placeholder="Price" onChange={(e)=>setForm({...form,price:e.target.value})} />
      <select className="border p-2 w-full mb-2" onChange={(e)=>setForm({...form,category:e.target.value})}>
        <option>Mobile</option><option>Bike</option><option>Car</option><option>Laptop</option><option>Cycle</option>
      </select>
      <input className="border p-2 w-full mb-2" placeholder="City" onChange={(e)=>setForm({...form,city:e.target.value})} />
      <input className="border p-2 w-full mb-2" placeholder="Seller name" onChange={(e)=>setForm({...form,seller:e.target.value})} />
      <input className="border p-2 w-full mb-2" placeholder="Contact number" onChange={(e)=>setForm({...form,contact:e.target.value})} />
      <textarea className="border p-2 w-full mb-2" placeholder="Description" onChange={(e)=>setForm({...form,description:e.target.value})} />
      <input type="file" accept="image/*" multiple className="mb-2" onChange={handleFiles} />
      <div className="flex gap-2 mb-2">
        {form.images.map((img,i)=> <img key={i} src={img} className="h-20 w-20 object-cover rounded" />)}
      </div>
      <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-700 ">Add Product</button>
    </form>
  );
};
