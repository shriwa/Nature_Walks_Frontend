import React from "react";
import video from "../../assets/background_1.mp4";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import SocialMedia from "../SocialMedia";

const Banner_1 = () => {
  return (
    <div className="relative font-sans before:absolute before:w-full before:h-full h-[40rem] before:inset-0 before:bg-gray-800 before:opacity-30 before:z-10">
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
        src="https://muralsyourway.vtexassets.com/arquivos/ids/239459/Kool-Aid-Lake-Hikers-WA-Wallpaper-Mural.jpg?v=638164554435270000"
        alt="Banner Image"
        class="absolute inset-0 w-full h-full object-cover "
      />

      <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6 mt-12">
          Discover the Wonders of Sri Lanka
        </h2>
        <p className="sm:text-lg text-base text-center text-gray-200">
          Welcome to Lanka Nature Walks, your portal to unforgettable adventures
          in Sri Lanka. Our curated tour packages offer you the chance to
          explore the island's breathtaking landscapes, rich culture, and
          timeless traditions.
        </p>

        <a
          href="/booking"
          className="mt-12 bg-transparent text-white font-bold py-3 px-6 border border-white rounded-lg hover:bg-primary hover:text-white transition duration-300"
        >
          Book Now
        </a>

        {/* <!-- Social media icons --> */}
        <SocialMedia customClass="mt-8" />
      </div>
    </div>
  );
};

export default Banner_1;
