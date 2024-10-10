import React from "react";
import tuk_tuk from "../../assets/Services/tuk_tuk_1.png";
import trekking from "../../assets/Services/trekking_1.png";
import cooking from "../../assets/Services/cooking_1.png";

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
    title: "Traditional Cooking Classes",
    link: "/cuisine",
  },
];

const Services = () => {
  return (
    <section className="text-gray-700 body-font mt-12 md:mt-20 mb-8">
      <div className="">
        <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-loose pb-2.5 mb-4">
          Our Services
        </h2>
      </div>
      <div className="container md:px-40 px-8 mx-auto ">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 ">
          {slideData.map((slide) => (
            <a href={slide.link}>
              <div
                key={slide.id}
                className="md:grid bg-gray-100 flex items-center md:justify-center justify-start p-2 md:p-4 transform transition duration-700 hover:scale-105 border md:border-none hover:bg-gray-200 rounded-lg"
              >
                <div className="flex justify-center items-center">
                  <img
                    src={slide.image}
                    className="md:w-48 md:h-48 w-20 h-20 mb-3"
                  />
                </div>
                <h2 className="title-font font-bold p-2 md:text-xl text-lg text-gray-800 text-center">
                  {slide.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
