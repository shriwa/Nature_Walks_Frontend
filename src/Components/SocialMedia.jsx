import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaWhatsapp,
  FaTripadvisor,
} from "react-icons/fa"; // Example icons

const SocialMedia = ({ customClass = "", iconClass = "" }) => {
  const SocialMediaIcon = ({ href, IconComponent, iconStyles }) => (
    <a
      href={href}
      target="blank"
      type="button"
      className={`rounded-full bg-primary p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:scale-110 hover:bg-secondary hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 ${iconStyles}`}
    >
      <IconComponent className="h-5 w-5" />
    </a>
  );

  return (
    <div className={`flex space-x-4 ${customClass}`}>
      <SocialMediaIcon
        href="https://facebook.com"
        IconComponent={FaFacebookF} // Facebook icon
        iconStyles={iconClass}
      />
      <SocialMediaIcon
        href="https://instagram.com"
        IconComponent={FaInstagram} // Instagram icon
        iconStyles={iconClass}
      />
      <SocialMediaIcon
        href="https://wa.me/+94728866776"
        IconComponent={FaWhatsapp} // Whatsapp icon
        iconStyles={iconClass}
      />
      <SocialMediaIcon
        href="https://www.tripadvisor.com/"
        IconComponent={FaTripadvisor} // Trip Advisor icon
        iconStyles={iconClass}
      />
      <SocialMediaIcon
        href="mailto: lankanaturewalks@gmail.com"
        IconComponent={FaGoogle} // Google icon
        iconStyles={iconClass}
      />
    </div>
  );
};

export default SocialMedia;
