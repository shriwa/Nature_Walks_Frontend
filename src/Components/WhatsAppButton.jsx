import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-5 left-5 z-[999] cursor-pointer text-white text-4xl bg-secondary md:w-14 md:h-14 w-10 h-10  flex items-center justify-center rounded-full animate-bounce ">
      <a href="https://wa.me/+94728866776" target="_blank">
        <FaWhatsapp className="text-[30px] md:text-[42px]" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
