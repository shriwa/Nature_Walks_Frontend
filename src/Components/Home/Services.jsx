import React, { useEffect } from "react";
import tuk_tuk from "../../assets/Services/tuk_tuk_2.png";
import trekking from "../../assets/Services/trekking_2.png";
import cooking from "../../assets/Services/cooking_2.png";

import trekking_image from "../../assets/tracking_image_11.png";

// import tuk_tuk from "../../assets/Services/tuk_tuk_2.png";
// import trekking from "../../assets/tracking_image_7.png";
// import cooking from "../../assets/Services/cooking_2.png";

import "aos/dist/aos.css";
import Aos from "aos";

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
  useEffect(() => {
    Aos.init();
  });

  useEffect(() => {
    document.title = "Services | Lanka Nature Walks";
  });

  return (
    <section
      className="overflow-hidden bg-gray-50 mt-4"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <h2 className="w-full text-center text-gray-800 text-3xl font-bold leading-loose mb-1 ">
        Our Services
      </h2>

      <div className="grid items-center grid-cols-1 md:grid-cols-2 mb-4 gap-10 md:gap-20 md:mx-20 mx-5">
        <div>
          {/* Image */}
          <div className="flex flex-col items-center justify-center rounded-xl  ">
            <img
              className="relative md:h-[24rem] h-[16rem] xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src={trekking_image}
              alt=""
            />
          </div>
        </div>
        {/*  */}
        <div className="grid gap-8 md:gap-8 grid-cols-1 md:grid-cols-1">
          {slideData.map((slide) => (
            <a href={slide.link}>
              <div
                key={slide.id}
                className=" bg-gray-100 hover:bg-gray-200 flex items-center justify-center  gap-4 p-2 md:p-2 transform transition duration-700 hover:scale-[98%] border md:border-none rounded-xl shadow-lg"
              >
                <div className=" flex items-center justify-between gap-12">
                  <div className="flex justify-center items-center">
                    <img src={slide.image} className="w-16 h-16 mb-3 p-1  " />
                  </div>
                  <h2 className="title-font md:w-60 w-36 font-bold md:text-lg text-sm text-gray-800 md:text-start text-start">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/*  */}

        {/* <section class="bg-gray-00 text-gray-800 text-center py-12 px-4">
        <h2 class="text-3xl font-bold">Our Services</h2>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-gray-100 max-w-5xl mx-auto">
          {slideData.map((slide) => (
            <div class="shadow-lg rounded-lg bg-gray-100 hover:bg-gray-100  transition-colors">
              <a href={slide.link}>
                <div
                  key={slide.id}
                  className="  flex items-center justify-center  gap-4 p-2 md:p-2 transform transition duration-700 hover:scale-[102%] border md:border-none rounded-xl shadow-lg"
                >
                  <div className=" flex items-center justify-center gap-4">
                    <div className="flex justify-center items-center">
                      <img
                        src={slide.image}
                        className="md:w-24 md:h-24 w-20 h-20 mb-3 p-1  "
                      />
                    </div>
                    <h2 className=" title-font max-w-48  md:text-start text-start font-bold md:text-lg text-lg text-gray-800   md:p-0 p-2">
                      {slide.title}
                    </h2>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section> */}
      </div>
    </section>
  );
};

export default Services;
