import React from "react";
import tuk_tuk from "../../assets/Services/tuk_tuk.jpg";
import trekking from "../../assets/Services/trekking.png";
import cooking from "../../assets/Services/cooking.jpg";

const slideData = [
  {
    id: 1,
    image: tuk_tuk,
    title: "Pekoe Tuk Tuk Safari",
    link: "/tuktuk",
  },
  {
    id: 2,
    image: trekking,
    title: "Trekking & Hikking",
    link: "/trekking&hiking",
  },
  {
    id: 3,
    image: cooking,
    title: "Sri Lankan Cuisine Cooking Classes",
    link: "/cuisine",
  },
];

const Services = () => {
  return (
    <section id="services" className="mt-24">
      <div className="">
        <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-loose pb-2.5">
          Our Services
        </h2>
      </div>
      <div className="container m-auto px-6 py-4 grid grid-cols-1 md:grid-cols-3 space-y-2 md:space-y-0">
        {/* Map over slideData to create SwiperSlide components */}
        {slideData.map((slide) => (
          <div
            key={slide.id}
            className="w-full md:w-full h-[400px] mx-auto flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center relative">
              <a
                href={slide.link}
                className="hover:scale-95 transition-all duration-700 ease-in-out bg-gray-800 p-2 rounded-xl"
              >
                <img
                  className="w-full h-[320px] md:w-[340px] object-cover rounded-2x opacity-95  rounded-t-xl "
                  src={slide.image}
                  alt={slide.title}
                />
                <div className="relative bottom-1 w-full md:w-[340px] py-2  bg-primary rounded-b-xl">
                  <h2 className="text-white text-center text-sm md:text-lg font-bold">
                    {slide.title}
                  </h2>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
