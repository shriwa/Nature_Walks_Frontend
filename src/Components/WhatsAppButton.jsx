import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-5 left-5 z-[999] cursor-pointer text-white text-4xl bg-secondary w-14 h-14 flex items-center justify-center rounded-full animate-bounce">
      <a href="https://wa.me/+94728866776" target="blank">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton;
