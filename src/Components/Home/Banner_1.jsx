import React from "react";
import video from "../../assets/background_1.mp4";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import SocialMedia from "../SocialMedia";

import banner_image from "../../assets/Banner/main.jpg";

import { logos } from "../../images";

const Banner_1 = () => {
  return (
    <div className="relative mt-[-5rem] font-sans before:absolute before:w-full before:h-full h-[40rem] before:inset-0 before:bg-primary before:opacity-10 before:z-10">
      {/* <video
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
      /> */}

      <img
        src={banner_image}
        alt="Banner Image"
        class="absolute inset-0 w-full h-full object-cover "
      />

      <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6 md:mt-32 mt-16">
          Discover the Wonders of Sri Lanka
        </h2>

        <p className="sm:text-lg text-base text-center text-gray-200">
          Welcome to Lanka Nature Walks – your gateway to unforgettable
          adventures in Sri Lanka. Our curated tours let you discover the
          island's stunning landscapes, vibrant culture, and timeless
          traditions.
        </p>

        <a
          href="/services"
          className="mt-12 bg-primary text-white font-bold py-3 px-6 border border-white rounded-lg hover:bg-secondary hover:text-white hover:scale-[103%] transition duration-300"
        >
          Explore
        </a>

        {/* <!-- Social media icons --> */}
        <SocialMedia customClass="mt-16" />
      </div>
    </div>
  );
};

export default Banner_1;
