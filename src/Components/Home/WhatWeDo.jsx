import React from "react";
import hiking from "../../assets/Services/hiking.png";
import trekking from "../../assets/Services/trekking_1.png";
import natural_trails from "../../assets/Services/natural_trails_1.png";
import eco_adventure from "../../assets/Services/eco_adventure.png";
import taxi from "../../assets/Services/taxi.png";

const WhatWeDo = () => {
  const servicesData = [
    {
      imgSrc: hiking,
      title: "Hiking & Trekking",
    },
    {
      imgSrc: natural_trails,
      title: "Natural Trails",
    },
    {
      imgSrc: eco_adventure,
      title: "Eco Adventure",
    },
    {
      imgSrc: taxi,
      title: "Taxi",
    },
  ];

  return (
    <section className="text-gray-700 body-font md:mt-12">
      <div className="container md:px-20 py-0 mx-auto ">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-4 ">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-4 transform transition duration-500 hover:scale-110 "
            >
              <div className="flex justify-center items-center">
                <img
                  src={service.imgSrc}
                  className="w-32 h-32 mb-3"
                  alt={service.title}
                />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900 text-center">
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
