import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaWhatsapp,
  FaTripadvisor,
  FaTiktok,
  FaMailBulk,
} from "react-icons/fa";

import { GoMail } from "react-icons/go";

const SocialMedia = ({
  customClass = "",
  iconClass = "",
  IconComponentStyle = "",
}) => {
  const SocialMediaIcon = ({ href, IconComponent, iconStyles }) => (
    <a
      href={href}
      target="blank"
      type="button"
      className={`rounded-full  uppercase leading-normal text-white transition duration-500 ease-in-out  focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 ${iconStyles}`}
    >
      <IconComponent className={`h-5 w-5 ${IconComponentStyle}`} />
    </a>
  );

  return (
    <div className={`grid ${customClass}`}>
      <SocialMediaIcon
        href="https://web.facebook.com/profile.php?id=61565891180774"
        IconComponent={FaFacebookF} // Facebook icon
        iconStyles={iconClass}
      />
      <SocialMediaIcon
        href="https://www.instagram.com/lankanaturewalks/"
        IconComponent={FaInstagram} // Instagram icon
        iconStyles={iconClass}
      />
      <SocialMediaIcon
        href="https://wa.me/+94728866776"
        IconComponent={FaWhatsapp} // Whatsapp icon
        iconStyles={iconClass}
      />
      <SocialMediaIcon
        href="https://www.tiktok.com/@lankanaturewalk?_t=8qLNYEDWCFm&_r=1"
        IconComponent={FaTiktok} // Tiktok icon
        iconStyles={iconClass}
      />
      {/* <SocialMediaIcon
        href="mailto: lankanaturewalks@gmail.com"
        IconComponent={GoMail} // Google icon
        iconStyles={iconClass}
      /> */}
      <SocialMediaIcon
        href=""
        IconComponent={FaTripadvisor} // Tripadvisor icon
        iconStyles={iconClass}
      />
    </div>
  );
};

export default SocialMedia;
