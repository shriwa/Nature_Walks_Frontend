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
  return (
    // Footer section with social media icons and newsletter sign-up
    <footer
      class="flex flex-col items-center pt-4 bg-white text-center text-secondary"
      style={{
        boxShadow:
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-16">
        <div className="md:mb-2 mb-6">
          <div className=" flex flex-col md:items-start items-center justify-center gap-4">
            <div className="">
              {/* <!-- Logo --> */}
              <a href="#" className="flex items-center">
                <img
                  src={logo_1}
                  className="mr-3 md:h-32 h-28 rounded-md"
                  alt="DocEase Logo"
                />
                <span className="self-center md:text-4xl text-[20px] font-semibold whitespace-nowrap">
                  Lanka Nature Walks
                </span>
              </a>
              {/* <!-- Social media icons --> */}
              <div customClass="">
                <SocialMedia customClass="justify-center mt-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          {/* <!-- Information --> */}
          <div class="mb-6 mx-2">
            <span className="self-center text-lg  font-semibold whitespace-nowrap">
              MAKE YOUR HOLIDAY <br className="block md:hidden" /> PEACE A
              BEAUTIFUL MEMORY!
            </span>

            <p className=" mt-2 text-sm text-gray-800">
              Discover eco-friendly mountain adventures in Sri Lanka! Our tours
              blend adventure, culture, and sustainability, showcasing the
              country's natural beauty while minimizing environmental impact.
            </p>
          </div>

          {/* <!-- Contact section --> */}
          <div class="grid md:grid-cols-2 lg:grid-cols-1">
            <div class="mb-6 flex flex-col items-center justify-center">
              <h5 class="mb-2.5 font-bold text-lg uppercase">Contact</h5>

              <ul class="mb-0 flex flex-col items-start gap-2 list-none text-gray-800">
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
                    href="https://wa.me/+94728866776"
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
        </div>
      </div>

      {/* <!-- Copyright section --> */}
      <div class="w-full bg-gray-100 p-4 text-center">
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
