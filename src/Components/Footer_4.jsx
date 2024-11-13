import React, { useEffect } from "react";
import logo_1 from "../assets/logo_1.png";
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
const Footer_4 = () => {
  const menus = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Booking", link: "/booking" },
    { name: "About", link: "/aboutus" },
    { name: "Contact", link: "/contact" },
  ];

  const services = [
    { name: "Pekoe Tuk Tuk Safari", link: "/tuktuk" },
    { name: "Trekking & Hikking", link: "/trekking&hiking" },
    { name: "Traditional Sri Lankan Cooking Classes", link: "/cuisine" },
  ];

  const slideData = [
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

  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="bg-gray-100" data-aos="fade-up" data-aos-duration="300">
      <div className=" flex items-center justify-center gap-16">
        {/* Logo  */}
        <div className="pt-8 flex flex-col items-center justify-center gap-2">
          <a href="/" className="flex md:flex-col items-center justify-center">
            <img
              src={logo_1}
              className="md:h-32 h-20 rounded-md"
              alt="Naturewalk Logo"
            />
            <span className="self-center md:text-2xl text-xl font-bold whitespace-nowrap text-primary">
              Lanka Nature Walks
            </span>
          </a>
        </div>

        {/* Details */}
        <div className=" flex flex-col items-center">
          {/* Menus & Services */}
          <div className="flex md:flex-col  md:items-center items-center justify-center gap-8 md:gap-4 md:mt-8 mt-8 md:mb-0 mb-8">
            {/* Menu Links */}
            <div className="md:mt-4 flex md:flex-col items-center justify-center">
              <ul className="grid lg:grid-cols-5 grid-cols-3 justify-items-center md:justify-items-start items-center md:items-start gap-6 md:gap-4">
                {menus.map((menu, i) => (
                  <li key={i}>
                    <a
                      className="px-4 py-2 md:text-md text-sm font-bold text-primary hover:text-secondary transform duration-700 hover:scale-[103%]"
                      href={menu.link}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Services Links */}
            <div className="grid md:gap-4 gap-2 grid-cols-3 md:grid-cols-3 items-center justify-center md:mx-0 mx-4 md:mt-4">
              {slideData.map((slide) => (
                <a href={slide.link}>
                  <div
                    key={slide.id}
                    className="md:flex  items-center justify-start md:gap-4 md:p-2 transform transition duration-700 hover:scale-[102%]  rounded-br-3xl rounded-tl-3xl"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        src={slide.image}
                        className="md:w-12 md:h-12 w-8 h-8 md:mb-3 p-1"
                      />
                    </div>
                    <h2 className="title-font md:text-start text-center font-bold text-xs text-gray-800 md:p-0 p-2">
                      {slide.title}
                    </h2>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/*  */}
      </div>

      {/* <!-- Information --> */}
      {/* <div class="md:mb-6 mt-10 hidden md:flex flex-col items-start justify-center mx-4">
            <span className=" md:text-xl text-center font-bold text-primary">
              Make Your Holiday Peace a Beautiful Memory!
            </span>

            <p className=" mt-2 text-sm  font-semibold text-gray-800">
              Discover eco-friendly mountain adventures in Sri Lanka! Our tours
              blend adventure, culture, and sustainability, showcasing the
              country's natural beauty while minimizing environmental impact.
            </p>
          </div> */}

      {/* Social & Contact */}
      <div className="flex items-center justify-center mt-8 gap-20">
        {/* <!-- Social media & Menus --> */}
        <div className=" text-black flex flex-col md:items-center f-f-l ">
          <div customClass="">
            <SocialMedia
              customClass="justify-center mb-2 md:mb-2 grid-cols-6"
              iconClass="p-2"
            />
          </div>
        </div>
        {/*  */}
        {/* Contact */}
        <div class="mb-4 mt-4 flex flex-col  items-start gap-3 text-sm list-none font-semibold text-gray-800">
          <li>
            <a
              href="https://maps.app.goo.gl/awZFadYu2vuVzsqv6"
              target="blank"
              className=" flex items-center justify-center gap-1"
            >
              <IoLocation /> Monisha villa Hamparawa Bandarawela
            </a>
          </li>
          <li>
            <a
              href="tel:+94728866776"
              target="blank"
              className=" flex items-center justify-center gap-1"
            >
              <FaPhone /> +94 72 8866776
            </a>
          </li>
          <li>
            <a
              href="mailto: lankanaturewalks@gmail.com"
              className=" flex items-center justify-center gap-1"
            >
              <IoMail /> lankanaturewalks@gmail.com
            </a>
          </li>
        </div>
        {/*  */}
      </div>
      {/*  */}

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

export default Footer_4;
