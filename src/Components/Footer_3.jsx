import React, { useEffect } from "react";
import logo_1 from "../assets/logo_1.png";
import logo_name from "../assets/logo_3.png";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPhone,
} from "react-icons/fa";

import { IoMail, IoLocation } from "react-icons/io5";
import SocialMedia from "./SocialMedia";

import tuk_tuk from "../assets/Services/tuk_tuk_2.png";
import trekking from "../assets/Services/trekking_2.png";
import cooking from "../assets/Services/cooking_2.png";

import "aos/dist/aos.css";
import Aos from "aos";

// Footer Component
const Footer_3 = () => {
  const menus = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Booking", link: "/booking" },
    { name: "About", link: "/aboutus" },
    { name: "Contact", link: "/contact" },
  ];

  const services = [
    {
      id: 1,
      image: tuk_tuk,
      title: "Pekoe Tuk Tuk Safari",
      link: "/tuktuk",
    },
    {
      id: 2,
      image: trekking,
      title: "Trekking & Hikking",
      link: "/trekking&hiking",
    },
    {
      id: 3,
      image: cooking,
      title: "Traditional Cooking Classes",
      link: "/cuisine",
    },
  ];

  const contactInfo = [
    {
      href: "https://maps.app.goo.gl/awZFadYu2vuVzsqv6",
      icon: <IoLocation />,
      text: "Monisha villa Hamparawa Bandarawela",
      type: "external",
    },
    {
      href: "tel:+94728866776",
      icon: <FaPhone />,
      text: "+94 72 8866776",
      type: "phone",
    },
    {
      href: "mailto:lankanaturewalks@gmail.com",
      icon: <IoMail />,
      text: "lankanaturewalks@gmail.com",
      type: "email",
    },
  ];

  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="bg-gray-50 text-primary">
      <div
        className=" flex flex-col items-center justify-center md:gap-8 gap-2"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="flex md:flex-row flex-col md:items-center justify-center md:gap-32 md:mt-8">
          {/* Logo  */}
          <div className="pt-2 flex flex-col items-center justify-center ">
            <a
              href="/"
              className="flex md:flex-col items-center justify-center md:gap-4 md:p-4 md:pt-0 pt-4"
            >
              <img
                src={logo_1}
                className="md:h-44 h-20 rounded-md"
                alt="Naturewalk Logo"
              />
              <span className="self-center md:text-2xl text-xl font-bold whitespace-nowrap">
                Lanka Nature Walks
              </span>

              {/* 
              <img
                src={logo_name}
                className="md:h-32 h-20 rounded-md"
                alt="Naturewalk Logo"
              /> */}
            </a>
          </div>

          {/* <div className="h-40 w-[2px] bg-gray-300 shadow-2xl md:p-0 hidden md:block"></div> */}

          {/* Menus & Services */}
          <div className="flex md:flex-row flex-row  md:items-start items-center justify-center gap-8 md:gap-20 md:mt-0 mt-8 md:mb-0 mb-8 md:order-first">
            {/* Services Links */}
            <div className="grid md:gap-4 gap-2 grid-cols-1 md:grid-cols-1 items-center justify-center md:mx-0 mx-4 md:mt-">
              {services.map((slide) => (
                <a href={slide.link}>
                  <div
                    key={slide.id}
                    className="md:flex  items-center justify-start md:gap-4 md:p-2 transform transition duration-700 hover:scale-[102%]  rounded-br-3xl rounded-tl-3xl"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        src={slide.image}
                        className="md:w-10 md:h-10 w-8 h-8 md:mb-3 p-1"
                      />
                    </div>
                    <h2 className="title-font md:text-start text-center font-bold md:text-base text-xs text-gray-800 md:p-0 p-2">
                      {slide.title}
                    </h2>
                  </div>
                </a>
              ))}
            </div>
            {/* Menu Links */}
            <div className="md:mt-4 flex md:flex-col items-center justify-center">
              <ul className="grid md:grid-cols-1 grid-cols-1  justify-center items-center md:justify-start md:items-start gap-6 md:gap-6 ">
                {menus.map((menu, i) => (
                  <li key={i}>
                    <a
                      className="px-4 py-2 md:text-md md:text-md text-md font-bold  hover:text-secondary transform duration-700 hover:scale-[103%]"
                      href={menu.link}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social & Contact */}
            <div className=" flex md:flex-col flex-col items-center md:mt-0 mt-2 md:gap-8 gap-1">
              {/* Contact */}
              <div className="mb-4 mt-4 flex md:flex-col flex-col items-start md:gap-4 gap-2 text-sm list-none font-semibold text-gray-800">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      target={item.type === "external" ? "blank" : "_self"}
                      className="flex items-center justify-center md:text-md gap-1 hover:scale-[102%] transition transform duration-500"
                    >
                      {item.icon} {item.text}
                    </a>
                  </li>
                ))}
              </div>
              {/*  */}
              {/* <!-- Social media & Menus --> */}
              <div className=" text-black flex flex-col md:items-center f-f-l md:mt-0 mt-0 ">
                <div customClass="">
                  <SocialMedia
                    customClass="justify-center mb-2 md:mb-2 grid-cols-6 md:gap-2 gap-3 "
                    iconClass="p-2"
                  />
                </div>
              </div>
              {/*  */}
            </div>
            {/*  */}
          </div>
        </div>
        {/* <!-- Information --> */}
        {/* <div class="md:mb-6 mt-10 hidden md:flex flex-col items-start justify-center mx-4">
        <span className=" md:text-xl text-center font-bold text-primary">
          Make Your Holiday Peace a Beautiful Memory!
        </span>

        <p className=" mt-2 text-sm  font-semibold text-gray-800">
          Discover eco-friendly mountain adventures in Sri Lanka! Our tours
          blend adventure, culture, and sustainability, showcasing the country's
          natural beauty while minimizing environmental impact.
        </p>
      </div> */}

        {/* <div className="w-[80%] h-[2px] bg-gray-300 shadow-2xl md:p-0  "></div> */}
      </div>

      <footer class="w-full bg-gray-200 p-1 text-center font-bold mt-4">
        <span className="text-xs md:text-sm text-primary sm:text-center">
          © 2024{" "}
          <a href="" className="hover:underline">
            Lanka Nature Walks.
          </a>
          All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer_3;
