import React from "react";
import hiking from "../../assets/Services/hiking.png";
import trekking from "../../assets/Services/trekking_1.png";
import natural_trails from "../../assets/Services/natural_trails_1.png";
import eco_adventure from "../../assets/Services/eco_adventure_2.png";
import taxi from "../../assets/Services/taxi.png";

import { GiFruitTree, GiTrail, GiHiking } from "react-icons/gi";
import { FaTaxi } from "react-icons/fa6";
import { div } from "framer-motion/client";

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
      imgSrc: FaTaxi,
      title: "Taxi",
    },
  ];

  // const servicesData = [
  //   {
  //     imgSrc: hiking,
  //     title: "Hiking & Trekking",
  //   },
  //   {
  //     imgSrc: natural_trails,
  //     title: "Natural Trails",
  //   },
  //   {
  //     imgSrc: eco_adventure,
  //     title: "Eco Adventure",
  //   },
  //   {
  //     imgSrc: taxi,
  //     title: "Taxi",
  //   },
  // ];

  return (
    <section className="text-gray-700 body-font mt-12">
      <div className="container md:px-20 py-0 mx-auto ">
        <div className="grid md:gap-0 gap-y-4 gap-x-0 grid-cols-2 md:grid-cols-4 px-2">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-4 md:w-52 bg-primary rounded-lg transform transition duration-700  sm:border border-none md:mx-auto mx-4"
            >
              <div className="flex justify-center items-center">
                {/* <img
                  src={service.imgSrc}
                  className="md:w-32 md:h-32 w-12 h-12 mb-3"
                  alt={service.title}
                /> */}

                <service.imgSrc
                  className="md:w-16 md:h-16 w-12 h-12 mb-3"
                  color="white"
                />
              </div>
              <h2 className="title-font font-semibold md:text-xl text-sm text-gray-100 text-center">
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
