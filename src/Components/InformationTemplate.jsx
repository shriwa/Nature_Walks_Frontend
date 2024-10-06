import React, { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const InformationTemplate = ({
  title = [],
  subtitle = [],
  paragraph = "",
  schedule = [],
  imageSrc = [],
  duration = [],
  whatsIncluded = [],
  departure = [],
  lowestRate = [],
  trainTimes = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="px-4 mx-auto py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 ">
      <h1 className="lg:text-4xl text-2xl  mt-4 mb-4 md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-gray-700 to-secondary text-center">
        {title}
      </h1>
      <div className=" bg-gray-200 rounded-t-lg py-8 md:p-0">
        <div className="mx-auto px-6 lg:px-2">
          <div className="mx-auto lg:text-center flex flex-col justify-center items-center">
            <h2 className="text-base md:flex items-center justify-between text-center mt-8 p-2 font-semibold leading-7 text-white bg-gradient-to-r from-primary via-gray-800 to-secondary w-full rounded-lg uppercase mb-4">
              {subtitle}
              <button
                onClick={handleToggle}
                className="sm:w-fit w-full px-3.5 py-2 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
              >
                <span className="px-1.5 text-white text-2xl font-medium leading-6">
                  {isExpanded ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
                </span>
              </button>
            </h2>

            <p className="mt-6 text-md text-left text-gray-600 max-w-[100rem]">
              {paragraph && (
                <span>
                  {isExpanded
                    ? paragraph
                    : `${paragraph.substring(0, maxLength)}...`}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      {isExpanded ? (
        <div className="grid bg-gray-200 rounded-b-lg gap-6 p-4 row-gap-10 lg:grid-cols-2">
          {/* Expanded content */}
          <div className="lg:py-6 lg:pr-16">
            {schedule.map((step, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    {!step.isSuccess ? (
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 text-gray-600"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <polyline
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          points="6,12 10,16 18,8"
                        />
                      </svg>
                    )}
                  </div>
                  {!step.isSuccess && (
                    <div className="w-px h-full bg-gray-300" />
                  )}
                </div>
                <div className={`pt-1 ${!step.isSuccess ? "pb-8" : ""}`}>
                  <p className="mb-2 text-lg font-bold">{step.title}</p>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-5/6 lg:ml-8 mt-6 lg:mt-0">
            <img
              className="object-cover object-center w-full rounded shadow-lg transition-all duration-700 ease-in-out"
              src={imageSrc}
              alt="Location Image"
            />
          </div>

          {duration ||
          whatsIncluded ||
          departure ||
          lowestRate ||
          trainTimes ? (
            <div className="grid gap-6 md:grid-cols-3 md:col-span-2 lg:col-span-3">
              {/* Duration */}
              <div className="rounded p-5 bg-primary hover:bg-green-800 text-white transition duration-300">
                <div className="flex items-center mb-1">
                  <p className="text-lg font-semibold sm:text-base">Duration</p>
                </div>
                <p className="text-md"> {duration}</p>
              </div>
              {/* Departure */}
              <div className="rounded p-5 bg-primary hover:bg-green-800 text-white transition duration-300">
                <div className="flex items-center mb-1">
                  <p className="text-lg font-semibold sm:text-base">
                    Departure
                  </p>
                </div>
                <p className="text-sm">{departure}</p>
              </div>
              {/* Rates */}
              <div className="rounded p-5 bg-primary hover:bg-green-800 text-white transition duration-300">
                <div className="flex items-center mb-1">
                  <p className="text-lg font-semibold sm:text-base">Rates</p>
                </div>
                <p className="text-sm ">{lowestRate}</p>
              </div>
              {/* What’s Included */}
              <div className="rounded p-5 bg-primary hover:bg-green-800 text-white transition duration-300">
                <div className="flex items-center mb-1">
                  <p className="text-lg font-semibold sm:text-base">
                    What’s Included
                  </p>
                </div>
                <p className="text-sm ">
                  {whatsIncluded.map((level, index) => (
                    <span key={index}>
                      {level}
                      {index < whatsIncluded.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>

              {/* Train Times */}
              <div className="rounded p-5  bg-primary hover:bg-green-800 text-white transition duration-300">
                <div className="flex items-center mb-1">
                  <p className="text-lg font-semibold sm:text-base">
                    Train Times
                  </p>
                </div>
                <p className="text-sm">
                  {trainTimes.map((level, index) => (
                    <span key={index}>
                      {level}
                      {index < trainTimes.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        // -------------------------------------------- Minimized content --------------------------------------------------------------------------
        <div className="grid bg-gray-200 rounded-b-lg gap-6 row-gap-10 lg:grid-cols-2 transition-all duration-700 ease-in-out">
          {/* Minimized content */}
          <div className="lg:py-8 lg:pr-16">
            {schedule.slice(0, 2).map((step, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    {!step.isSuccess ? (
                      <svg
                        className="w-4 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 text-gray-600"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <polyline
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          points="6,12 10,16 18,8"
                        />
                      </svg>
                    )}
                  </div>
                  {!step.isSuccess && (
                    <div className="w-px h-full bg-gray-300" />
                  )}
                </div>
                <div className={`pt-1 ${!step.isSuccess ? "pb-8" : ""}`}>
                  <p className="mb-2 text-lg font-bold">{step.title}</p>
                  <p className="text-gray-700">
                    {step.description && (
                      <span>
                        {isExpanded
                          ? step.description
                          : `${step.description.substring(0, 150)}...`}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-6/6 lg:ml-8 mt-6 lg:mt-0 m-auto p-2">
            <img
              className="object-cover object-center md:w-[25rem] md:h-[15rem] rounded-md shadow-lg transition-all duration-700 ease-in-out"
              src={imageSrc}
              alt="Location Image"
            />
          </div>
        </div>
      )}

      <button
        onClick={handleToggle}
        className="sm:w-fit w-full px-3.5 py-2 mt-6  m-auto bg-primary hover:bg-secondary transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
      >
        <span className="px-1.5 text-white text-sm font-medium leading-6">
          {isExpanded ? "Show less" : "Read More"}
        </span>
      </button>
    </div>
  );
};

export default InformationTemplate;
