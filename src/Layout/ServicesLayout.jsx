import React from "react";
import Services from "../Components/Home/Services";
import ServicesCard from "../Layout/ServicesCard";
import ServicesCard_2 from "./ServicesCard_2";
import ServicesCard_3 from "./ServicesCard_3";
import Banner_2 from "../Components/Home/Banner_2";

const ServicesLayout = ({ title, description, servicesDetails }) => {
  return (
    <div className="">
      <div className="sm:max-w-xl mx-auto md:max-w-full lg:max-w-screen-2xl px-4 mt-4">
        <div className="md:flex items-center justify-center gap-2 mx-auto mb-4 ">
          <div className="bg-gray-100">
            <div className="container mx-auto flex flex-col items-center py-12 sm:py-12">
              <div className="w-11/12 sm:w-3/3 lg:flex justify-center items-center flex-col  mb-2 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                  {title}
                </h1>
                <p className="mt-5 sm:mt-10 lg:w-12/12 text-gray-500 font-normal text-center text-sm sm:text-lg">
                  {description}
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-8">
          {servicesDetails.map((service, index) => (
            <ServicesCard_3 key={index} details={service} />
          ))}
        </div>
        <div className=" flex items-center justify-center ">
          <a
            href="/booking"
            className="mt-4 mb-8 bg-primary w-[20rem] text-white text-center font-bold py-3 px-8 border rounded-full  hover:bg-secondary hover:text-white transition duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

      {/*  */}

      {/*  */}

      <Services />
    </div>
  );
};

export default ServicesLayout;
