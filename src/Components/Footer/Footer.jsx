import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialMedia from "../SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 flex flex-col items-center justify-center ">
      <ItemsContainer />

      <div className="w-[80%] h-[1px] bg-gray-400 shadow-2xl md:p-0 md:mb-4 mb-4 "></div>

      <div
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 md:gap-20 gap-8
      text-center pt-2 text-gray-700 text-sm pb-8"
      >
        <span>
          {" "}
          © 2024{" "}
          <a href="" className="hover:underline">
            Lanka Nature Walks.
          </a>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
