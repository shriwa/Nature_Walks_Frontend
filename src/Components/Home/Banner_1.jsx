import React from "react";
import video from "../../assets/background_1.mp4";

const Banner_1 = () => {
  return (
    <div className="relative font-sans before:absolute before:w-full before:h-full h-[40rem] before:inset-0 before:bg-black before:opacity-30 before:z-10">
      <video
        src={video}
        type="video/mp4"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        onError={(e) => {
          console.error("Video failed to load:", e);
        }}
      />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">
          Explore the Island
        </h2>
        <p className="sm:text-lg text-base text-center text-gray-200">
          "Take only memories, leave only footprints." — Chief Seattle
        </p>

        <a
          href="#contact"
          className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-primary hover:text-white transition duration-300"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Banner_1;
