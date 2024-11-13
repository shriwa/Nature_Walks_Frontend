import React, { useEffect } from "react";
import video from "../../assets/background_1.mp4";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import SocialMedia from "../SocialMedia";

import banner_image from "../../assets/Banner/main.jpg";

import { logos } from "../../images";

import "aos/dist/aos.css";
import Aos from "aos";

const Banner_1 = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="relative mt-[-120px] font-sans before:absolute before:w-full before:h-full h-[42rem] md:h-[40rem] before:inset-0 before:bg-black before:opacity-20 before:z-10 shadow-xl ">
      <video
        src={video}
        type="video/mp4"
        alt="Banner Video"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        onError={(e) => {
          console.error("Video failed to load:", e);
        }}
      />

      {/* <img
        src={banner_image}
        alt="Banner Image"
        class="absolute inset-0 w-full h-full object-cover "
      /> */}

      <div
        className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center text-white p-6 "
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <h2 className="text-3xl  md:text-5xl font-bold mb-6 md:mt-16 mt-20 md:animate-typing_2 overflow-hidden md:whitespace-nowrap">
          Discover the Wonders of Sri Lanka
        </h2>

        <p className="text-md md:text-xl  text-center font-semibold text-gray-200">
          Welcome to Lanka Nature Walks – your gateway to unforgettable
          adventures in Sri Lanka.
          {/* Our curated tours let you discover the
          island's stunning landscapes, vibrant culture, and timeless
          traditions. */}
        </p>

        <a
          href="/services"
          className=" mt-12 mb-8 bg-primary md:w-40 text-white font-extrabold py-3 px-6 border border-white rounded-full hover:bg-primary/50 transform lg:hover:scale-[105%] duration-700"
        >
          Explore
        </a>

        {/* <!-- Social media icons --> */}
        <SocialMedia
          customClass="mt-16 grid-cols-5 gap-3  "
          iconClass="p-3 hover:bg-secondary bg-primary"
          IconComponentStyle="text-white animate-typing_2"
        />
      </div>
    </div>
  );
};

export default Banner_1;
