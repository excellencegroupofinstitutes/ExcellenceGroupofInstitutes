import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a
  href="https://wa.me/918557081922?text=Hello%20I%20visited%20your%20website.%20I%20am%20interested%20in%20your%20services" 
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp size={28} />
</a>

  );
};

export default WhatsApp;
