import React, { useEffect, useState } from "react";

const ServicesCard_2 = ({ details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to check if the screen width is above md size
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (window.innerWidth < 768) {
      // Toggle only for smaller screens
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <section class="container p-2 py-2 md:p-0 antialiased w-full md:mt-4  ">
      <article class=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-5xl group cursor-pointer transform duration-500 hover:-translate-y-1">
        <img
          class="w-full max-h-[500px] object-cover md:w-[400px]"
          src={details.image}
          alt=""
        />
        <div class=" w-full">
          <div class="p-5 pb-10">
            <h1 class="text-2xl font-semibold text-gray-800 mt-4">
              {details.title}
            </h1>
            {/* <p class="text-xl text-gray-400 mt-2 leading-relaxed">
              Located in Rajshahi Division, Bogra is one of the oldest and most
              fascinating towns in Bangladesh
            </p> */}
          </div>

          {isExpanded ? (
            <div className="bg-blue-50 p-5 max-h-[500px]">
              <div className="sm:flex sm:justify-between">
                <div>
                  {/* Replacing details.from */}
                  {details.from && (
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">From:</span>{" "}
                      {details.from}
                    </div>
                  )}

                  {/* Replacing details.days */}
                  {details.days && (
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">Days:</span>{" "}
                      {details.days}
                    </div>
                  )}

                  {/* Replacing details.duration */}
                  {details.duration && (
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">Duration:</span>{" "}
                      {details.duration}
                    </div>
                  )}

                  {/* Replacing details.departure */}
                  {details.departure && (
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">
                        Departure:
                      </span>{" "}
                      {details.departure}
                    </div>
                  )}

                  {/* Replacing details.whatsIncluded */}
                  {details.whatsIncluded &&
                    Array.isArray(details.whatsIncluded) && (
                      <>
                        <p className="text-lg text-gray-700">
                          <strong>What’s Included:</strong>
                        </p>
                        <ul className="list-disc md:grid px-8">
                          {details.whatsIncluded.map((item, index) => (
                            <li key={index} className="md:col-span-1">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                  {/* Replacing details.Train */}
                  {details.Train && Array.isArray(details.Train) && (
                    <>
                      <p className="text-lg text-gray-700">
                        <strong>Train Time:</strong>
                      </p>
                      <ul className="list-disc md:grid px-8">
                        {details.Train.map((item, index) => (
                          <li key={index} className="md:col-span-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Replacing details.description */}
                  {details.description && (
                    <p className="text-lg text-gray-700">
                      {details.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </article>
      <button
        onClick={handleToggle}
        className=" md:hidden sm:w-fit w-full px-3.5 mb-2 py-2 m-auto hover:scale-95 bg-primary hover:bg-secondary transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
      >
        <span className="px-1.5 text-white text-sm font-medium leading-6">
          {isExpanded ? "Show less" : "Read More"}
        </span>
      </button>
    </section>
  );
};

export default ServicesCard_2;
