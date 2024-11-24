import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, EffectFade, Navigation, Autoplay } from "swiper/modules";

import { SwiperPagination } from "./SwiperPagination";

const Gallery_2 = ({
  images = [],
  autoplayDelay = 4000, // Default autoplay delay
  spaceBetween = 30, // Default space between slides
  slidesPerView = 1, // Default slides per view
  navigation = true, // Enable navigation
}) => {
  return (
    <div className="mx-4 py-4 px-0 md:mt-8 ">
      <h2 className="w-full text-center text-gray-800 text-3xl font-bold leading-loose md:mb-8 ">
        Gallery
      </h2>
      <Swiper
        loop={true}
        spaceBetween={spaceBetween}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        autoplay={{ delay: autoplayDelay }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 10 },
          1024: { slidesPerView: slidesPerView, spaceBetween: 5 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-center h-[350px] ">
              {/* Background Image */}
              <img
                src={image}
                alt={`Gallery image ${index}`}
                className="absolute w-full h-full object-cover transition duration-500 hover:scale-[101%] rounded-lg "
              />
              {/* Content Overlay */}
              {/* Uncomment this section if you want to display title and description */}
              {/* <div className="fixed bottom-14 z-10 text-center text-white px-4 max-w-xl">
                <h2 className="text-4xl font-bold mb-4">{image.title}</h2>
                <p className="text-lg mb-6">{image.description}</p>
                {image.link && (
                  <a
                    href={image.link}
                    className="mt-12 bg-primary text-white font-bold py-3 px-6 border border-white rounded-lg hover:bg-secondary hover:text-white transition duration-300"
                  >
                    Learn More
                  </a>
                )}
              </div> */}
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev text-white/80 font-bold flex justify-center items-center text-xl w-14 h-14  rounded-full  shadow-lg "></div>
        <div className="swiper-button-next  text-white/80 font-bold flex justify-center items-center w-14 h-14 rounded-full shadow-lg"></div>
        {/* <div class="swiper-pagination" className="mt-8" slot="pagination"></div> */}
        <div className="">
          {/* <SwiperNavButtons /> */}
          <SwiperPagination />
        </div>
      </Swiper>
    </div>
  );
};

export default Gallery_2;
