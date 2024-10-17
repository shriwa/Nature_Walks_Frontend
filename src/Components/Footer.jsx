import React from "react";
import logo_1 from "../assets/logo_1.png";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPhone,
} from "react-icons/fa";

import { IoMail, IoLocation } from "react-icons/io5";
import SocialMedia from "./SocialMedia";

// Footer Component
const Footer = () => {
  const menus = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Booking", link: "/booking" },
    { name: "About", link: "/aboutus" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    // Footer section with social media icons and newsletter sign-up
    <footer
      class="flex flex-col items-center pt-4 bg-white text-center text-secondary"
      style={{
        boxShadow:
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-1 md:mx-24">
        {/* first column */}
        <div className="md:mb-2 mb-3">
          <div className="md:flex md:items-center items-center justify-center gap-40">
            <div className=" flex items-center justify-center">
              {/* <!-- Logo --> */}
              <a href="/" className="flex items-center">
                <img
                  src={logo_1}
                  className="md:h-32 h-24 rounded-md"
                  alt="DocEase Logo"
                />
                <span className="self-center md:text-4xl text-[20px] font-semibold whitespace-nowrap">
                  Lanka Nature Walks
                </span>
              </a>
            </div>

            {/* <!-- Information --> */}
            <div class="md:mb-6 mx-2 mt-10 hidden md:block">
              <span className="self-center md:text-xl  font-semibold whitespace-nowrap px-4">
                Make Your Holiday Peace a Beautiful Memory!
              </span>

              <p className=" mt-2 text-sm text-gray-800 px-2">
                Discover eco-friendly mountain adventures in Sri Lanka! Our
                tours blend adventure, culture, and sustainability, showcasing
                the country's natural beauty while minimizing environmental
                impact.
              </p>
            </div>
          </div>

          {/* <hr className="hidden md:block mx-4 mt-4 shadow-lg" /> */}

          {/*  */}
        </div>

        {/* second column */}
        {/* <!-- Contact section & Social Media --> */}
        <div className="md:flex items-center justify-start md:mx-24">
          {/* Contact section */}
          <div class="grid md:grid-cols-2 lg:grid-cols-1 md:mt-0">
            <div class="mb-6 flex flex-col items-center justify-center">
              <h5 class="mb-2.5 font-bold text-lg">Contact</h5>

              <ul class="mb-0 md:grid grid-cols-1 flex flex-col items-start gap-2 list-none text-gray-800">
                <li>
                  <a
                    href="https://maps.app.goo.gl/awZFadYu2vuVzsqv6"
                    target="blank"
                    className=" flex items-center justify-center gap-3"
                  >
                    <IoLocation /> Monisha villa Hamparawa Bandarawela
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+94728866776"
                    target="blank"
                    className=" flex items-center justify-center gap-3"
                  >
                    <FaPhone /> +94 72 8866776
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: lankanaturewalks@gmail.com"
                    className=" flex items-center justify-center gap-3"
                  >
                    <IoMail /> lankanaturewalks@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* hr line */}
          <hr className="hidden md:block h-[5rem]  border-l border-gray-300  mx-auto" />
          {/*  */}

          {/* <!-- Social media & Menus --> */}
          <div className="grid md:grid-rows-2 md:grid-cols-1 grid-cols-1 mt-4 md:gap-0 gap-9">
            <div customClass="">
              <SocialMedia customClass="justify-center md:mt-4 mb-2 md:mt-2 md:mb-2 " />
            </div>
            {/*  */}

            {/* Menu Links */}
            <div className=" hidden md:block md:mb-2 md:mt-4 flex-col items-center justify-center md:order-last order-first">
              <ul className="grid lg:grid-cols-5 grid-cols-5 justify-items-center md:gap-0 gap-2 px-4">
                {menus.map((menu, i) => (
                  <li key={i}>
                    <a
                      className="px-4 py-2 text-md font-semibold text-primary hover:text-secondary"
                      href={menu.link}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      {/* <!-- Copyright section --> */}
      <div class="w-full bg-gray-100 p-4 text-center mt-4">
        <span className="text-sm text-primary sm:text-center">
          © 2024{" "}
          <a href="" className="hover:underline">
            Lanka Nature Walks
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
