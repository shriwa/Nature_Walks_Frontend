import React, { useEffect } from "react";
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

import "aos/dist/aos.css";
import Aos from "aos";

import "./Gallery.css";
import { SwiperPagination } from "./SwiperPagination";
import { SwiperNavButtons } from "./SwiperNavButton";

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

const Gallery = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <section id="gallery" className="">
      {/* <div className="pb-16">
        <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-loose pb-2.5">
          Trekking Activities
        </h2>
      </div> */}

      <div
        className="md:mx-auto mx-2 mt-12 md:mt-4 mb-8 "
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <h2 className="w-full text-center text-gray-800 text-3xl font-bold leading-loose md:mb-8 ">
          Gallery
        </h2>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            900: {
              slidesPerView: 3,
              spaceBetween: 2,
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
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id} className="relative ">
              <div className="flex items-center justify-center relative">
                <a>
                  <img
                    className=" md:w-[50rem] md:h-[25rem] h-[30rem] object-cover rounded-2xl transition-transform duration-500 transform hover:scale-105 "
                    src={slide.image}
                    alt={slide.title}
                  />
                  {/* <div className="absolute  bottom-0 w-[370px]   bg-black bg-opacity-50 p-2 rounded-b-2xl">
                    {" "}
                    <h2 className="text-white text-center text-sm md:text-xl font-bold">
                      {slide.title}
                    </h2>
                  </div> */}
                </a>
              </div>
            </SwiperSlide>
          ))}

          {/* Slider Control */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="swiper-button-prev bg-primary/80  text-white/80 font-bold flex justify-center items-center text-xl w-14 h-14  rounded-full  shadow-lg "></div>
            <div className="swiper-button-next bg-primary/80 text-white/80 font-bold flex justify-center items-center w-14 h-14 rounded-full shadow-lg"></div>
            <div className="swiper-pagination bg-primary text-primary md:mt-8"></div>
          </div>
          <div className=" flex items-center justify-center gap-80"></div>
        </Swiper>
      </div>
    </section>

    // <div className="relative  lg:max-w-7xl md:max-w-6xl mx-auto">
    //   <div className="relative">
    //     <img
    //       src={slideData[currentIndex].image}
    //       alt={slideData[currentIndex].title}
    //       className="w-[80rem] h-[30rem] object-cover rounded-lg"
    //     />
    //     <div className="absolute bottom-4 left-0 right-0 text-center text-white">
    //       <h5 className="text-xl">{slideData[currentIndex].title}</h5>
    //     </div>
    //   </div>

    //   {/* Carousel Controls */}
    //   <button
    //     onClick={prevSlide}
    //     className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
    //   >
    //     &#8592;
    //   </button>
    //   <button
    //     onClick={nextSlide}
    //     className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
    //   >
    //     &#8594;
    //   </button>

    //   {/* Indicators */}
    //   <div className="flex justify-center space-x-2 mt-4">
    //     {slideData.map((_, index) => (
    //       <button
    //         key={index}
    //         className={`w-3 h-3 rounded-full ${
    //           index === currentIndex ? "bg-black" : "bg-gray-400"
    //         }`}
    //         onClick={() => setCurrentIndex(index)}
    //       />
    //     ))}
    //   </div>
    // </div>
  );
};

export default Gallery;
