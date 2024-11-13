import React, { useEffect } from "react";
import Privacy_Policy from "../Components/Privacy_Policy";

const Booking = () => {
  useEffect(() => {
    document.title = "Booking | Lanka Nature Walks";
  });

  return (
    <section id="gallery" className="mb-2">
      <div className="">
        <h2 className="w-full text-center text-gray-800 text-3xl font-bold leading-loose mb-1">
          Booking
          <hr className="mx-8" />
        </h2>
      </div>
      <div className="container flex flex-col items-start justify-center mx-auto">
        {/* <Privacy_Policy /> */}
        <iframe
          className=" w-full h-[120rem] mt-1"
          src="https://docs.google.com/forms/d/e/1FAIpQLScxDwf2UgGeJw27QZHbOQkjCAHPHG8vp-nA-Ab7FRxWa8ji5Q/viewform?embedded=true"
          width="800"
          height="1000"
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
