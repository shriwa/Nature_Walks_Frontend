import React, { useState } from "react";
import image_1 from "../assets/tracking_image_1.jpg";
import image_2 from "../assets/tracking_image_2.jpeg";

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className="md:py-32 py-8 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-4 md:gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-2 lg:order-first order-last">
            <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                class="rounded-xl w-[40rem] h-[16rem] md:h-[20rem] object-cover"
                src={image_1}
                alt="about Us image"
              />
            </div>
            <img
              class="sm:ml-0 ml-auto w-[40rem] h-[16rem] md:h-[20rem] rounded-xl object-cover"
              src={image_2}
              alt="about Us image"
            />
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <div className="flex items-center md:justify-center md:gap-14  flex-col gap-4">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    About Us
                  </h2>
                  <a
                    onClick={handleToggle}
                    className="sm:w-fit w-full px-3.5 py-2 bg-primary hover:bg-secondary transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
                  >
                    <span className="px-1.5 text-white text-sm font-medium leading-6">
                      {isExpanded ? "Show less" : "Read More"}
                    </span>
                  </a>
                </div>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Lanka Nature Walks curates immersive experiences in Sri
                  Lanka’s hill country, offering travelers the chance to learn
                  traditional cooking, embark on tuk-tuk adventures through tea
                  plantations, and explore the region’s diverse landscapes on
                  guided treks At Lanka Nature Walks, we envision a world where
                  travelers are not just observers but active participants in
                  the vibrant tapestry of Sri Lanka’s hill country.
                  <br />
                  {isExpanded && (
                    <>
                      <br />
                      Our mission is to create transformative experiences that
                      immerse guests in the rich cultural heritage and
                      breathtaking natural beauty of this extraordinary region.
                      We aspire to be a bridge between visitors and locals,
                      fostering authentic connections through traditional
                      cooking classes that unveil the secrets of local cuisine,
                      tuk-tuk adventures that wind through lush tea plantations,
                      and guided treks that reveal the diverse landscapes and
                      hidden gems of the area. Through our carefully curated
                      experiences, we aim to empower travelers to appreciate the
                      stories behind the scenery, engage with the heartfelt
                      traditions of the communities we visit, and cultivate a
                      deeper understanding of the ecological wonders that
                      surround them.
                      <br />
                      <br />
                      We are committed to sustainable tourism practices that
                      respect the environment and support local economies,
                      ensuring that our impact is positive and lasting. Our
                      vision is to inspire a profound appreciation for the
                      interconnectedness of culture and nature, where every
                      stroll through rolling hills, every shared meal, and every
                      laugh-filled tuk-tuk ride creates memories that enrich
                      lives. As we guide our guests through the verdant valleys
                      and misty peaks of Sri Lanka’s hill country, we hope to
                      ignite a passion for exploration and stewardship of the
                      natural world, ultimately fostering a movement towards
                      more conscientious and sustainable travel for generations
                      to come. Together, we will celebrate the beauty of Sri
                      Lanka, one immersive experience at a time
                    </>
                  )}
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    5+
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Years of Experience
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    40+
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Successful Trips
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    100+
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Happy Clients
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
