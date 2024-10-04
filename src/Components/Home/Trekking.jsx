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
import horton_plains from "../../assets/locations/horton_plains.jpg";
import ella from "../../assets/locations/ella.jpg";
import knuckles_mountain_range from "../../assets/locations/knuckles_mountain_range.webp";
import pekoe_trail from "../../assets/locations/pekoe_trail.jpg";

const slideData = [
  {
    id: 1,
    image: horton_plains,
    title:
      "Horton Plains NP, Kirigalpoththa Mountains, Nuwara Eliya, Haputhale and Ohiya",
    link: "",
  },
  {
    id: 2,
    image: ella,
    title: " Ella, Haputale, Ohiya, Belihuloya, Nuwaraeliya & Bandarawela",
    link: "",
  },
  {
    id: 3,
    image: knuckles_mountain_range,
    title: "Knuckles Mountain Range",
    link: "",
  },
  {
    id: 4,
    image: sripada,
    title: "Adam’s Peak and Peak wilderness sanctuary",
    link: "",
  },
  {
    id: 5,
    image: sinharaja,
    title: "Sinharaja Rain Forest and rural areas south of Sinharaja",
    link: "",
  },
  {
    id: 6,
    image: pekoe_trail,
    title: "Pekoe Trail Trekking Tour",
    link: "",
  },
];

const Trekking = () => {
  return (
    <section id="gallery" className="">
      <div className="pb-16">
        <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-loose pb-2.5">
          Trekking Activities
        </h2>
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
              slidesPerView: 1,
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
              <div className="flex items-center justify-center relative">
                <a href="/trekking">
                  <img
                    className="w-[370px] h-[420px] object-cover rounded-2xl "
                    src={slide.image}
                    alt={slide.title}
                  />
                  <div className="absolute  bottom-0 w-[370px]   bg-black bg-opacity-50 p-2 rounded-b-2xl">
                    {" "}
                    {/* Positioned title at bottom */}
                    <h2 className="text-white text-center text-sm md:text-xl font-bold">
                      {slide.title}
                    </h2>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}

          {/* Slider Control */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="swiper-button-prev flex justify-center items-center w-14 h-14 rounded-full bg-white/50 shadow-lg">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next flex justify-center items-center w-14 h-14 rounded-full bg-white/50 shadow-lg">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination mt-4"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Trekking;
