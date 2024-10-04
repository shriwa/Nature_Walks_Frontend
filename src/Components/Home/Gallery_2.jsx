import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Pagination,
  EffectFade,
  Autoplay,
  Navigation,
  Parallax,
} from "swiper/modules";

const Gallery_2 = () => {
  const images = [
    {
      name: "banner 1",
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea debitisnon aspe",
      img: "https://lh3.googleusercontent.com/IZT03fES_vBmZECrvmmzQLMftqwB99-30sqxCboED1uByspXWnendEsTpdVrcb1L94fruNI00ZV9mQKfq7G06BWEwwnIK4wG7t83W8sTp_ItOMNyaRHYZUzRA5T5Uve1_A=w1280",
      link: "",
    },
    {
      name: "banner 2",
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea debitisnon aspe",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...",
      link: "",
    },
    {
      name: "banner 2",
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea debitisnon aspe",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...",
      link: "",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-center h-[500px] bg-gray-900">
              {/* Background Image */}
              <img
                src={image.img}
                alt={image.name}
                className="absolute w-full h-full object-cover opacity-60"
              />
              {/* Content Overlay */}
              <div className="fixed bottom-14 z-10 text-center text-white px-4 max-w-xl">
                <h2 className="text-4xl font-bold mb-4">{image.title}</h2>
                <p className="text-lg mb-6">{image.description}</p>
                <a
                  href={image.link}
                  className="mt-12 bg-primary text-white font-bold py-3 px-6 border border-white rounded-lg hover:bg-secondary hover:text-white transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery_2;
