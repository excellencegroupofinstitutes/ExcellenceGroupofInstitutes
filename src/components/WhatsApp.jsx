import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a
  href="" 
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp size={28} />
</a>

  );
};

export default WhatsApp;
