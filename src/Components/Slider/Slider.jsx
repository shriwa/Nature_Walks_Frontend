import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  // Handle next and previous image navigation
  function showNextImage() {
    setImageIndex((index) =>
      index >= Math.ceil(images.length / 2) - 1 ? 0 : index + 1
    );
  }

  function showPrevImage() {
    setImageIndex((index) =>
      index === 0 ? Math.ceil(images.length / 2) - 1 : index - 1
    );
  }

  // Automatically transition to the next image after 7 seconds
  useEffect(() => {
    const interval = setInterval(showNextImage, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-4 md:mt-12 md:mb-8 mb-4 mt-4">
      <h2 className="w-full text-center text-gray-800 text-3xl font-bold leading-loose md:mb-4">
        Gallery
      </h2>

      <section
        aria-label="Image Slider"
        className="relative w-full h-[25rem] overflow-hidden mx-auto"
      >
        {/* Slider container */}
        <div
          className="relative w-full h-full flex transition-transform duration-500 ease-in-out gap-2"
          style={{ transform: `translateX(-${imageIndex * 50}%)` }}
        >
          {images.map(({ image, alt }, index) => (
            <img
              key={index}
              src={image}
              alt={alt}
              className="object-cover w-1/2 h-full flex-shrink-0 rounded-lg"
            />
          ))}
        </div>

        {/* Previous button */}
        <button
          onClick={showPrevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white font-bold p-2 bg-white/50 rounded-full mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={showNextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white p-2 bg-white/50 rounded-full mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </section>
      {/* Dots navigation */}
      <div
        className="bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 mt-4 flex list-none justify-center gap-1 p-0"
        data-twe-carousel-indicators
      >
        {Array(Math.ceil(images.length / 2))
          .fill()
          .map((_, index) => (
            <button
              key={index}
              type="button"
              className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-clip-padding p-0 -indent-[999px] opacity-60 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
                index === imageIndex ? "bg-secondary" : "bg-gray-800"
              }`}
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
              onClick={() => setImageIndex(index)}
            />
          ))}
      </div>
    </div>
  );
};

export default ImageSlider;
