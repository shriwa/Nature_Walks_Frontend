import React from "react";
import Services from "../Components/Home/Services";
import ServicesCard from "../Layout/ServicesCard";

const ServicesLayout = ({ title, description, servicesDetails }) => {
  return (
    <div className="">
      <div className="sm:max-w-xl mx-auto md:max-w-full lg:max-w-screen-2xl px-4 mt-12">
        <div className="md:flex items-center justify-center gap-2 mx-auto mb-4 ">
          {/* <img
        className="object-cover object-center md:w-[25rem] p-1 mt-4 rounded-lg order-first lg:order-last"
        src={plantation}
        alt="Tuk Tuk Safari"
      /> */}

          <h1 className="lg:text-4xl text-2xl mt-4 mb-4 md:text-5xl font-bold tracking-tight text-gray-800 text-center">
            {title}
            <p className="md:text-lg text-center max-w-5xl font-semibold text-sm mt-8">
              {description}
            </p>
          </h1>
        </div>
        <div className="grid-cols-1 sm:grid gap-8 mb-8">
          {servicesDetails.map((service, index) => (
            <ServicesCard key={index} details={service} />
          ))}
        </div>
        <div className=" flex items-center justify-center ">
          <a
            href="/booking"
            className="mt-12 bg-primary w-[20rem] text-white text-center font-bold py-3 px-8 border border-white rounded-lg hover:bg-secondary hover:text-white transition duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default ServicesLayout;
