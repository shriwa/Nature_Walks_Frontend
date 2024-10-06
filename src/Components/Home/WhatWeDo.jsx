import React from "react";
import hiking from "../../assets/Services/hiking.png";
import trekking from "../../assets/Services/trekking_1.png";
import natural_trails from "../../assets/Services/natural_trails_1.png";
import eco_adventure from "../../assets/Services/eco_adventure.png";
import taxi from "../../assets/Services/taxi.png";

// ServiceCard component
const ServiceCard = ({ imgSrc, title }) => {
  return (
    <div className="p-4 grid md:grid-cols-1 sm:grid-cols-2">
      <div className="px-8 py-6 transform transition duration-500 hover:scale-110">
        <div className="flex justify-center items-center">
          <img src={imgSrc} className="w-32 h-32 mb-3" alt={title} />
        </div>
        <h2 className="title-font font-regular text-2xl text-gray-900">
          {title}
        </h2>
      </div>
    </div>
  );
};

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
    <section className="text-gray-700 body-font mt-10">
      {/* <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
        Our Services
      </div> */}
      <div className="container px-5 py-12 mx-auto">
        <div className="md:flex md:flex-wrap text-center justify-center">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              imgSrc={service.imgSrc}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
