import React, { useEffect } from "react";

import { GiFruitTree, GiTrail, GiHiking } from "react-icons/gi";
import { BsTaxiFrontFill } from "react-icons/bs";

import image_2 from "../../assets/tracking_image_10.png";

import "aos/dist/aos.css";
import Aos from "aos";

const WhatWeDo = () => {
  const servicesData = [
    {
      imgSrc: GiHiking,
      title: "Hiking & Trekking",
    },
    {
      imgSrc: GiTrail,
      title: "Natural Trails",
    },
    {
      imgSrc: GiFruitTree,
      title: "Eco Adventure",
    },
    {
      imgSrc: BsTaxiFrontFill,
      title: "Road Tour",
    },
  ];

  useEffect(() => {
    Aos.init();
  });

  // md:rounded-tl-full rounded-br-3xl rounded-tl-3xl

  return (
    // <section
    //   className="text-gray-700 body-font md:bg-primary md:mt-8 mt-4 mx-4 md:rounded-full rounded-lg "
    //   data-aos="fade-up"
    //   data-aos-duration="500"
    // >
    // <div className="container md:px-20 py-0 mx-auto">
    //   <div className="grid md:gap-0 gap-4 grid-cols-2 md:grid-cols-4 px-2">
    //     {servicesData.map((service, index) => (
    //       <div
    //         key={index}
    //         className="p-4 md:w-52  rounded-xl transform duration-700 hover:scale-[102%]  sm:border border-none md:mx-auto mx-4 md:bg-transparent bg-primary"
    //       >
    //         <div className="flex justify-center items-center">
    //           {/* <img
    //             src={service.imgSrc}
    //             className="md:w-32 md:h-32 w-12 h-12 mb-3"
    //             alt={service.title}
    //           /> */}

    //           <service.imgSrc
    //             className="md:w-20 md:h-20 w-12 h-12 mb-3 "
    //             color="white"
    //           />
    //         </div>
    //         <h2 className="title-font font-semibold md:text-xl text-sm text-gray-100 text-center">
    //           {service.title}
    //         </h2>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    // </section>

    <section
      id="about"
      classNameName="md:mt-12 py-8 relative"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 mt-4 md:mt-8 mb-4 gap-10 md:gap-20 ">
            <div>
              <h2 className="text-2xl md:mt-4 md:mb-0 mb-8 font-bold leading-tight text-primary sm:text-4xl lg:text-4xl">
                Embark on the journey, we’ll guide the way.
              </h2>
              <p className="mt-3 md:text-lg text-sm leading-relaxed text-gray-600 md:mt-8">
                With the right gear and preparation, your trekking adventure can
                be safe, enjoyable, and unforgettable. Explore breathtaking
                trails, connect with nature, and conquer new heights, all with
                the support and guidance you need.
              </p>
            </div>

            {/*  */}
            <div className="container md:px-10 py-0 mx-auto">
              <div className="grid md:gap-8 gap-4 grid-cols-2 md:grid-cols-2">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className=" md:flex items-center gap-4 md:gap-8 p-4 md:w-60  bg-gray-00 rounded-xl transform duration-700  sm:border border-none md:mx-auto mx-4 "
                  >
                    <div className="flex justify-center items-center">
                      <service.imgSrc
                        className="md:w-20 md:h-20 w-12 h-12 mb-3 "
                        color="#14532D"
                      />
                    </div>
                    <h2 className="title-font w-40 font-bold md:text-lg text-sm text-primary md:text-start text-center">
                      {service.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhatWeDo;
