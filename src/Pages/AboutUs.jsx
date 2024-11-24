import React, { useEffect, useState } from "react";
import image_1 from "../assets/tracking_image_1.jpg";
import image_2 from "../assets/tracking_image_10.png";

import "aos/dist/aos.css";
import Aos from "aos";

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    Aos.init();
  });

  useEffect(() => {
    document.title = "About | Lanka Nature Walks";
  });

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

  const adventureData = [
    { title: "Mountain Trails" },
    { title: "Estate Expeditions" },
    { title: "Tuk Tuk Adventures" },
    { title: "Traditional Cooking" },
  ];

  return (
    <section id="about" className="relative md:mt-4">
      <section class="pt-10 overflow-hidden  bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 md:grid-cols-2 ">
            <div>
              <h2 class="text-4xl md:mt-4 md:mb-0 mb-4 font-bold leading-tight text-gray-800  sm:text-4xl lg:text-4xl">
                About Us
              </h2>
              <p class="max-w-lg mt-3 text-lg leading-relaxed text-gray-600  md:mt-8">
                Lanka Nature Walks curates immersive experiences in Sri Lanka’s
                hill country, offering travelers the chance to learn traditional
                cooking, embark on tuk-tuk adventures through tea plantations,
                and explore the region’s diverse landscapes on guided treks.
              </p>

              {/* Stats */}
              <div class="flex justify-start items-center space-x-8 mt-8 mb-12 animate-fadeIn">
                {statsData.map((stats, i) => (
                  <div class="transition transform text-gray-800" key={i}>
                    <h3 class="text-xl font-bold">{stats.value}</h3>
                    <p class="">{stats.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                className="relative md:h-[20rem] h-[16rem] xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src={image_2}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div class="bg-">
        {/* mission */}
        <section
          class="text-center bg-primary text-gray-200 py-12 px-4 "
          data-aos="fade-up"
          data-aos-duration="300"
        >
          <h2 class="text-2xl font-bold text-center">Mission And Values</h2>
          <p class="mt-4  max-w-3xl mx-auto">
            At Lanka Nature Walks, we envision a world where travelers are not
            just observers but active participants in the vibrant tapestry of
            Sri Lanka’s hill country.{" "}
            <span className=" text-secondary font-bold text-lg">
              Our mission{" "}
            </span>
            is to create transformative experiences that immerse guests in the
            rich cultural heritage and breathtaking natural beauty of this
            extraordinary region. We aspire to be a bridge between visitors and
            locals, fostering authentic connections through traditional cooking
            classes that unveil the secrets of local cuisine, tuk-tuk adventures
            that wind through lush tea plantations, and guided treks that reveal
            the diverse landscapes and hidden gems of the area.
          </p>
        </section>
        {/* vision */}
        <section
          class="text-center  bg-gr text-gray-800 py-12 px-4"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          <h2 class="text-2xl font-bold text-center">Our Vision</h2>
          <p class="mt-4 max-w-3xl mx-auto">
            Through our carefully curated experiences, we aim to empower
            travelers to appreciate the stories behind the scenery, engage with
            the heartfelt traditions of the communities we visit, and cultivate
            a deeper understanding of the ecological wonders that surround them.
            We are committed to sustainable tourism practices that respect the
            environment and support local economies, ensuring that our impact is
            positive and lasting.
            <br />
            <br />
            <span className=" text-secondary font-bold text-lg">
              Our vision{" "}
            </span>{" "}
            is to inspire a profound appreciation for the interconnectedness of
            culture and nature, where every stroll through rolling hills, every
            shared meal, and every laugh-filled tuk-tuk ride creates memories
            that enrich lives. As we guide our guests through the verdant
            valleys and misty peaks of Sri Lanka’s hill country, we hope to
            ignite a passion for exploration and stewardship of the natural
            world, ultimately fostering a movement towards more conscientious
            and sustainable travel for generations to come. Together, we will
            celebrate the beauty of Sri Lanka, one immersive experience at a
            time.
          </p>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
