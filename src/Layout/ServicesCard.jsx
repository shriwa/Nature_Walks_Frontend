import React, { useEffect, useState } from "react";

const ServicesCard = ({ details }) => {
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
    <div className="mx-auto  p-2 mt-6 w-full md:h-[34rem] md:full md:flex items-center justify-start self-start rounded-lg bg-gray-800 shadow-secondary-1 transition-all hover:scale-[102%] duration-700 ease-in-out">
      <div className="py-5 px-2  text-secondary md:flex flex-col items-center justify-center">
        <h5 className="mb-8  md:py-4 md:mb-0 md:h-[4rem] text-xl text-center font-medium leading-tight text-white">
          {details.title}
        </h5>

        <div className=" md:flex items-center justify-center gap-3">
          <a className="md:flex items-center justify-center">
            <img
              className="object-cover object-center rounded-lg w-full h-[14rem] md:w-[30rem] md:h-[28rem]"
              src={details.image}
              alt="Trekking Image"
            />
          </a>

          {/* 
             <a className="md:flex flex-col gap-5 items-center justify-center">
            <img
              className="object-cover object-center rounded-lg w-full h-[14rem] md:w-[30rem] md:h-[13rem]"
              src={details.image}
              alt="Trekking Image"
            />
            <img
              className="object-cover object-center rounded-lg w-full h-[14rem] md:w-[30rem] md:h-[13rem]"
              src={details.image}
              alt="Trekking Image"
            />
          </a>
           */}

          {isExpanded ? (
            <div className="mb-4 mt-4 mx-auto md:h-[28rem] w-full md:w-[34rem] flex flex-col gap-4 text-white bg-primary p-4 rounded-md">
              <div className="flex flex-col gap-2 md:gap-2 ">
                {details.from ? (
                  <p>
                    <strong>From:</strong> {details.from}
                  </p>
                ) : (
                  <></>
                )}
                {details.days ? (
                  <p>
                    <strong>Days:</strong> {details.days}
                  </p>
                ) : (
                  <></>
                )}
                {details.duration ? (
                  <p>
                    <strong>Duration:</strong> {details.duration}
                  </p>
                ) : (
                  <></>
                )}
                {details.departure ? (
                  <p>
                    <strong>Departure:</strong> {details.departure}
                  </p>
                ) : (
                  <></>
                )}

                {details.whatsIncluded ? (
                  <>
                    <p>
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
                ) : (
                  <></>
                )}

                {details.Train ? (
                  <>
                    <p>
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
                ) : (
                  <></>
                )}

                {details.description ? (
                  <p>
                    <strong></strong> {details.description}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <button
        onClick={handleToggle}
        className=" md:hidden sm:w-fit w-full px-3.5 mb-2 py-2 m-auto hover:scale-95 bg-primary hover:bg-secondary transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
      >
        <span className="px-1.5 text-white text-sm font-medium leading-6">
          {isExpanded ? "Show less" : "Read More"}
        </span>
      </button>
    </div>
  );
};

export default ServicesCard;
