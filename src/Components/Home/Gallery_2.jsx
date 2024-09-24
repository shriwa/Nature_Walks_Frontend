import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation, Parallax } from "swiper/modules";

const Gallery_2 = () => {
  const images = [
    {
      name: "banner 1",
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea debitisnon aspe",
      img: "https://static.vecteezy.com/system/resources/previews/030/317/926/large_2x/hikers-paradise-rear-view-shows-tourist-relishing-mountain-vista-embracing-travel-lifestyle-vertical-mobile-wallpaper-ai-generated-free-photo.jpg",
      link: "#",
    },
    {
      name: "banner 2",
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea debitisnon aspe",
      img: "data:image/jpeg;base64,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",
      link: "#",
    },
    {
      name: "banner 3",
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea debitisnon aspe",
      img: "https://w0.peakpx.com/wallpaper/670/897/HD-wallpaper-long-journey-hiking.jpg",
      link: "#",
    },
    {
      name: "banner 4",
      title: "Title 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea debitisnon aspe",
      img: "https://w0.peakpx.com/wallpaper/670/897/HD-wallpaper-long-journey-hiking.jpg",
      link: "#",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pb-16">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-loose pb-2.5">
            Our Gallery
          </h2>
          <p className="w-full text-center text-gray-600 text-lg font-normal leading-8">
            Explore the essence of beauty in our gallery's intimate space.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="mx-auto w-auto relative">
          <Swiper
            modules={[Navigation, Autoplay, Pagination, Parallax]}
            spaceBetween={20}
            slidesPerView={3}
            parallax={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
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
            className="w-full md:w-[1028px] mx-auto xl:overflow-hidden pt-6"
          >
            {images?.map((image, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="max-w-[319px] grid">
                    <a href={image.link}>
                      <img
                        className="w-[320px] h-[320px] rounded-xl object-cover"
                        src={image.img}
                        alt="Watch"
                      />
                      <div className="mx-auto flex flex-col items-center gap-1 mt-5">
                        <h5 className="text-center text-gray-900 text-xl font-medium">
                          {image.title}
                        </h5>
                        <p className="text-center text-gray-600 text-base">
                          {image.description}
                        </p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery_2;
