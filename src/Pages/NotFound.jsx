import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-20 mb-8 w-full bg-gray-100 p-4 mx-auto rounded-lg">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-lg text-gray-800">
        Oops! Looks like you're lost.
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600">
        Let's get you back{" "}
        <a href="/" className="text-blue-500">
          home
        </a>
        .
      </p>
    </div>

    // <div className="flex items-center justify-center py-12">
    // <div className="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
    //   <div className="flex flex-col items-center py-16 ">
    //     <img
    //       className="px-4 hidden md:block"
    //       src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png"
    //       alt=""
    //     />
    //     <img
    //       className="md:hidden"
    //       src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
    //       alt=""
    //     />
    //     <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
    //       OOPS!{" "}
    //     </h1>
    //     <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
    //       Looks like you're lost.{" "}
    //     </p>
    //     <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">
    //       Go Home
    //     </button>
    //   </div>
    // </div>
    // </div>
  );
};

export default NotFound;
