import React, { useState } from "react";
import image_1 from "../assets/tracking_image_1.jpg";
import image_2 from "../assets/tracking_image_2.jpeg";

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const statsData = [
    {
      value: "5+",
      description: "Years of Experience",
    },
    {
      value: "40+",
      description: "Successful Trips",
    },
    {
      value: "100+",
      description: "Happy Clients",
    },
  ];

  return (
    <section id="about" className="mt-24 py-8 relative">
      <div className="w-full max-w-6xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-center items-center gap-4 md:gap-12 grid lg:grid-cols-1 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-center lg:items-center items-center gap-3 flex">
                <div className="flex items-center md:justify-center md:gap-6 flex-col gap-4">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    About Us
                  </h2>

                  {/* Image */}
                  <div className="w-full justify-center items-start gap-">
                    <img
                      class="rounded-xl w-[50rem] h-[16rem] md:h-[20rem] object-cover"
                      src={image_1}
                      alt="about Us image"
                    />
                  </div>

                  {/* Stats */}
                  <div className="w-full px-4 py-3 justify-center items-center sm:gap-10 gap-5 inline-flex">
                    {statsData.map((stat, index) => (
                      <div
                        key={index}
                        className="flex-col justify-start items-start inline-flex"
                      >
                        <h3 className="text-primary text-4xl font-bold font-manrope leading-normal">
                          {stat.value}
                        </h3>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          {stat.description}
                        </h6>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Lanka Nature Walks curates immersive experiences in Sri
                  Lanka’s hill country, offering travelers the chance to learn
                  traditional cooking, embark on tuk-tuk adventures through tea
                  plantations, and explore the region’s diverse landscapes on
                  guided treks.
                  <br />
                  <br />
                  At Lanka Nature Walks, we envision a world where travelers are
                  not just observers but active participants in the vibrant
                  tapestry of Sri Lanka’s hill country.{" "}
                  <span className=" text-secondary font-bold text-lg">
                    Our mission{" "}
                  </span>
                  is to create transformative experiences that immerse guests in
                  the rich cultural heritage and breathtaking natural beauty of
                  this extraordinary region. We aspire to be a bridge between
                  visitors and locals, fostering authentic connections through
                  traditional cooking classes that unveil the secrets of local
                  cuisine, tuk-tuk adventures that wind through lush tea
                  plantations, and guided treks that reveal the diverse
                  landscapes and hidden gems of the area.
                  <br />
                  {isExpanded && (
                    <>
                      <br />
                      Through our carefully curated experiences, we aim to
                      empower travelers to appreciate the stories behind the
                      scenery, engage with the heartfelt traditions of the
                      communities we visit, and cultivate a deeper understanding
                      of the ecological wonders that surround them. We are
                      committed to sustainable tourism practices that respect
                      the environment and support local economies, ensuring that
                      our impact is positive and lasting.
                      <br />
                      <br />
                      <span className=" text-secondary font-bold text-lg">
                        Our vision{" "}
                      </span>{" "}
                      is to inspire a profound appreciation for the
                      interconnectedness of culture and nature, where every
                      stroll through rolling hills, every shared meal, and every
                      laugh-filled tuk-tuk ride creates memories that enrich
                      lives. As we guide our guests through the verdant valleys
                      and misty peaks of Sri Lanka’s hill country, we hope to
                      ignite a passion for exploration and stewardship of the
                      natural world, ultimately fostering a movement towards
                      more conscientious and sustainable travel for generations
                      to come. Together, we will celebrate the beauty of Sri
                      Lanka, one immersive experience at a time.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          {/* Read More Button */}
          <div className="flex items-center justify-center">
            <a
              onClick={handleToggle}
              className="sm:w-fit w-full px-3.5 py-2 bg-primary hover:bg-secondary transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
            >
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                {isExpanded ? "Show less" : "Read More"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
