import React, { useEffect, useState } from "react";
import image_2 from "../../assets/tracking_image_10.png";

import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    Aos.init();
  });

  const statsData = [
    {
      value: "12+",
      description: "Years of Experience",
    },
    {
      value: "350+",
      description: "Successful Trips",
    },
    {
      value: "1600+",
      description: "Happy Clients",
    },
  ];

  return (
    <section
      id="about"
      classNameName="md:mt-12 py-8 relative"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 mt-4 mb-4 gap-10 md:gap-20 ">
            <div>
              <h2 className="text-4xl md:mt-4 md:mb-0 mb-8 font-bold leading-tight text-gray-800 sm:text-4xl lg:text-4xl">
                About Us
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-gray-600 md:mt-8">
                Lanka Nature Walks curates immersive experiences in Sri Lanka’s
                hill country, offering travelers the chance to learn traditional
                cooking, embark on tuk-tuk adventures through tea plantations,
                and explore the region’s diverse landscapes on guided treks.
              </p>

              {/* Stats */}
              <div className="flex justify-start items-center space-x-8 mt-8 md:mb-12 animate-fadeIn">
                {statsData.map((stats, i) => (
                  <div className="transition transform text-gray-900" key={i}>
                    <h3 className="text-2xl font-bold">{stats.value}</h3>
                    <p className=" font-normal">{stats.description}</p>
                  </div>
                ))}
              </div>

              {/* Read More Button */}
              <div className=" items-center justify-start mb-4 hidden md:block ">
                <a
                  href="/about-us"
                  onClick={handleToggle}
                  className="sm:w-fit w-full px-3.5 py-2 border-white border bg-primary hover:bg-secondary hover:scale-105 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
                >
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Read More
                  </span>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex flex-col items-center justify-center rounded-xl  ">
              <img
                className="relative md:h-[24rem] h-[16rem] xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src={image_2}
                alt=""
              />
            </div>

            {/* Read More Button */}
            <div className="flex items-center justify-start mb-4 md:hidden ">
              <a
                href="/about-us"
                onClick={handleToggle}
                className="w-full px-3.5 py-2 border-white border hover:bg-secondary bg-primary  hover:scale-105 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
              >
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Read More
                </span>
              </a>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
