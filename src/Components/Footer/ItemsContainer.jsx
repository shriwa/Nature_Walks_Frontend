import React from "react";
import SocialMedia from "../SocialMedia";

import { Item, Logo } from "./Item";
import { Menus, services, ContactDetails } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="lg:flex grid md:grid-cols-2 grid-cols-1 items-start justify-between md:gap-20 gap-8  sm:px-8 px-5 md:py-8 py-4">
      {/* <!-- Information --> */}
      <div class="flex flex-col items-start justify-center gap-8 mx-4 max-w-xs">
        <Logo />
        <div className="flex flex-col items-start justify-center gap-1 ">
          <span className=" md:text-xl text-md md:text-start text-start font-semibold text-primary">
            Make Your Holiday Peace a Beautiful Memory!
          </span>

          <p className=" mt-2 md:text-sm text-xs md:text-start text-start text-gray-800">
            Discover eco-friendly mountain adventures in Sri Lanka! Our tours
            blend adventure, culture, and sustainability, showcasing the
            country's natural beauty while minimizing environmental impact.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-start justify-between md:gap-16 gap-8 mx-auto ">
        <Item Links={Menus} title="Menus" />
        <Item Links={services} title="Services" />
        <div className="flex flex-col items-start justify-start gap-8">
          <Item Links={ContactDetails} title="Contact" />
          <SocialMedia
            customClass="  mb-2 md:mb-0 md:grid-cols-5 grid-cols-5 md:gap-6 gap-8"
            iconClass="p-0"
            IconComponentStyle="text-gray-700 hover:text-secondary transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemsContainer;
