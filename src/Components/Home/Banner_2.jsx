import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, EffectFade, Navigation, Autoplay } from "swiper/modules";

const Banner_2 = ({
  images = [], // Default to an empty array
  autoplayDelay = 4000, // Default autoplay delay
  spaceBetween = 30, // Default space between slides
  slidesPerView = 3, // Default slides per view
}) => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={spaceBetween}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        autoplay={{ delay: autoplayDelay }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: slidesPerView, spaceBetween: 1 },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-center h-[400px] md:mt-2 mx-2">
              {/* Background Image */}
              <img
                src={image.img}
                alt={`Gallery image ${index}`}
                className="absolute w-full h-full object-cover opacity-90 rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
        {/* Slider Control */}
        <div className="flex justify-center items-center space-x-8 mt-8">
          <div className="swiper-button-prev   text-white/80 font-bold flex justify-center items-center text-xl w-14 h-14  rounded-full  shadow-lg "></div>
          <div className="swiper-button-next  text-white/80 font-bold flex justify-center items-center w-14 h-14 rounded-full shadow-lg"></div>
          <div className="swiper-pagination bg-primary text-primary md:mt-8"></div>
        </div>
        <div className=" flex items-center justify-center gap-80"></div>
      </Swiper>
    </>
  );
};

export default Banner_2;
