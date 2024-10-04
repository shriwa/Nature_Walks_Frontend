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
      img: "https://static.vecteezy.com/system/resources/previews/030/317/926/large_2x/hikers-paradise-rear-view-shows-tourist-relishing-mountain-vista-embracing-travel-lifestyle-vertical-mobile-wallpaper-ai-generated-free-photo.jpg",
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
              <div className="relative z-10 text-center text-white px-4 max-w-xl">
                <h2 className="text-4xl font-bold mb-4">{image.title}</h2>
                <p className="text-lg mb-6">{image.description}</p>
                <a
                  href={image.link}
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
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
