import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    else if (!/^[a-zA-Z\s]+$/.test(form.name))
      newErrors.name = "Name must contain letters only";

    if (!form.contact.trim()) newErrors.contact = "Contact is required";
    else if (!/^\d+$/.test(form.contact))
      newErrors.contact = "Contact must be numeric";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Contact Form Submitted:", form);
    alert("Message sent successfully!");

    setForm({ name: "", contact: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 w-full rounded"
            value={form.name}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[a-zA-Z\s]*$/.test(value)) {
                setForm({ ...form, name: value });
              }
            }}
          />
          {errors.name && <div className="text-red-500 mt-1">{errors.name}</div>}
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label className="block mb-1">Contact Number</label>
          <input
            type="text"
            placeholder="Your Contact Number"
            className="border p-2 w-full rounded"
            value={form.contact}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setForm({ ...form, contact: value });
              }
            }}
          />
          {errors.contact && <div className="text-red-500 mt-1">{errors.contact}</div>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 w-full rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <div className="text-red-500 mt-1">{errors.email}</div>}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block mb-1">Message</label>
          <textarea
            placeholder="Your Message"
            className="border p-2 w-full rounded"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {errors.message && <div className="text-red-500 mt-1">{errors.message}</div>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
