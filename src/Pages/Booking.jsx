import React from "react";

const Booking = () => {
  return (
    <section id="gallery" className="mt-12 mb-2">
      <div className="pb-4">
        <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-loose pb-2.5">
          Booking
          <hr className="mx-8" />
        </h2>
      </div>
      <div className="container flex items-center justify-center mx-auto px-4">
        <iframe
          className=" w-full h-[20rem]"
          src="https://docs.google.com/forms/d/e/1FAIpQLScxDwf2UgGeJw27QZHbOQkjCAHPHG8vp-nA-Ab7FRxWa8ji5Q/viewform?embedded=true"
          width="800"
          height="0"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default Booking;
