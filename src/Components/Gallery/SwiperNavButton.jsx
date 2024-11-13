import React from "react";
import { useSwiper } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-center mt-2 gap-1">
      <button
        onClick={() => swiper.slidePrev()}
        className=" flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white shadow-md transition-all duration-500 hover:bg-primary/90"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className=" flex items-center justify-center  w-8 h-8 rounded-full bg-primary text-white shadow-md transition-all duration-500 hover:bg-primary/90"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};
