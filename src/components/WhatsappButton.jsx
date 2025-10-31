export const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20buy%20your%20product"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition-all"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-6 h-6"
      />
      Chat
    </a>
  );
};
