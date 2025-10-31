export const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      <p className="text-gray-700 text-center mb-5">
        Have any questions? We are here to help you.
      </p>

      <div className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded focus:outline-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded focus:outline-blue-500"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border p-2 rounded focus:outline-blue-500"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center mt-8 text-gray-700">
        📞 Phone: +91 9876543210 <br />
        ✉ Email: support@usedmarket.in
      </div>
    </div>
  );
};
