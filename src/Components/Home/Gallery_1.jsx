import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "ionicons/icons";

import sigiriya from "../../assets/locations/sigiriya.jpeg";
import sinharaja from "../../assets/locations/singaraja.jpg";
import hanthana from "../../assets/locations/hanthana.jpg";
import gartmore from "../../assets/locations/gartmore.jpg";
import sripada from "../../assets/locations/sripada.jpg";
import narangala from "../../assets/locations/narangala.jpg";

const slideData = [
  {
    id: 1,
    image: sinharaja,
    title: "Sinharaja",
    rating: 4.5,
    link: "#",
  },
  {
    id: 2,
    image: hanthana,
    title: "Hanthana",
    rating: 4.8,
    link: "#",
  },
  {
    id: 3,
    image: sigiriya,
    title: "Sigiriya",
    rating: 4.7,
    link: "#",
  },
  {
    id: 4,
    image: gartmore,
    title: "Gartmore",
    rating: 4.9,
    link: "#",
  },
  {
    id: 4,
    image: sripada,
    title: "Sripada",
    rating: 4.9,
    link: "#",
  },
  {
    id: 4,
    image: narangala,
    title: "Narangala",
    rating: 4.9,
    link: "#",
  },
];

const Gallery_1 = () => {
  return (
    <section id="gallery" className="py-16">
      <div className="pb-16">
        <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-loose pb-2.5">
          Our Gallery
        </h2>
        <p className="w-full text-center text-gray-600 text-lg font-normal leading-8">
          Explore the essence of beauty in our gallery's intimate space.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            900: {
              slidesPerView: 3,
              spaceBetween: 15,
              centeredSlides: true,
            },
            200: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
          coverflowEffect={{
            rotate: 10,
            stretch: 20,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
        >
          {/* Map over slideData to create SwiperSlide components */}
          {slideData.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="relative w-[370px] h-[420px]"
            >
              <div className="relative">
                <a href={slide.link}>
                  <img
                    className="w-[370px] h-[420px] object-cover rounded-2xl"
                    src={slide.image}
                    alt={slide.title}
                  />
                  <div className="absolute inset-0 p-4">
                    <div className="absolute bottom-8 left-8 text-white">
                      <h2 className="text-3xl">{slide.title}</h2>

                      <div className="flex text-orange-500">
                        {/* Generate stars based on rating */}
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <ion-icon
                              key={i}
                              name={
                                i < Math.floor(slide.rating)
                                  ? "star"
                                  : "star-outline"
                              }
                            ></ion-icon>
                          ))}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}

          {/* Slider Control */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="swiper-button-prev flex justify-center items-center w-14 h-14 rounded-full bg-white shadow-lg">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next flex justify-center items-center w-14 h-14 rounded-full bg-white shadow-lg">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination mt-4"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery_1;
