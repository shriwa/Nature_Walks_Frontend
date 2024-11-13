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
        navigation={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        autoplay={{ delay: autoplayDelay }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: slidesPerView, spaceBetween: 1 },
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
      </Swiper>
    </>
  );
};

export default Banner_2;
