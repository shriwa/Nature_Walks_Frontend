import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const ServicesCard_3 = ({ details }) => {
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

  useEffect(() => {
    Aos.init();
  });

  return (
    <div
      className="mb-0 bg-gray-800 p-2 rounded-lg"
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <img
        className="w-full h-[15rem] rounded-t-lg object-cover"
        src={details.image}
        alt="computer"
      />
      <div className="w-full md:h-[6rem] p-4  bg-primary flex items-center justify-center rounded-b-lg">
        <p className="text-sm md:text-lg text-white font-semibold tracking-wide">
          {details.title}
        </p>
      </div>
      <div className="bg-gray-800 px-5 py-6 rounded-bl-3xl rounded-br-3xl">
        <div className=" flex flex-col gap-4 text-gray-200 text-sm lg:text-md lg:leading-8 tracking-wide mt-2 ">
          {details.description ? (
            <p className=" font-bold">
              <strong></strong> {details.description}
            </p>
          ) : (
            <></>
          )}
          {details.from ? (
            <p className="">
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
                <p>
                  <strong>What’s Included:</strong>
                </p>
                <ul className="list-disc md:grid px-8">
                  {details.whatsIncluded.map((item, index) => (
                    <li key={index} className="">
                      {item}
                    </li>
                  ))}
                </ul>
              </p>
            </>
          ) : (
            <></>
          )}
          {details.Train ? (
            <>
              <p>
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
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard_3;
