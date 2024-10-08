import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, EffectFade, Navigation, Autoplay } from "swiper/modules";

const Gallery_2 = ({ images = [] }) => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <Swiper
        loop={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 4000 }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 5 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-center h-[450px] bg-gray-900 md:mt-8">
              {/* Background Image */}
              <img
                src={image.img}
                alt={image.name}
                className="absolute w-full h-full object-cover opacity-90"
              />
              {/* Content Overlay */}
              <div className="fixed bottom-14 z-10 text-center text-white px-4 max-w-xl">
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
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery_2;
