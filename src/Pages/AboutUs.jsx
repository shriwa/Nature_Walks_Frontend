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
    // <section id="about" className="md:mt-12 py-8 relative">
    //   <div className="w-full max-w-6xl px-4 md:px-5 lg:px-5 mx-auto">
    //     <div className="w-full justify-center items-center gap-4 md:gap-12 grid lg:grid-cols-1 grid-cols-1">
    //       <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
    //         <div className="w-full flex-col justify-center items-start gap-8 flex">
    //           <div className="w-full flex-col justify-center lg:items-center items-center gap-3 flex">
    //             <div className="flex items-center md:justify-center md:gap-6 flex-col gap-4">
    //               <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
    //                 About Us
    //               </h2>

    //               {/* Image */}
    //               <div className="w-full justify-center items-start gap-">
    //                 <img
    //                   class="rounded-xl w-[50rem] h-[16rem] md:h-[20rem] object-cover"
    //                   src={image_1}
    //                   alt="about Us image"
    //                 />
    //               </div>

    //   {/* Stats */}
    //   <div className="w-full px-4 py-3 justify-center items-center sm:gap-10 gap-5 inline-flex">
    //     {statsData.map((stat, index) => (
    //       <div
    //         key={index}
    //         className="flex-col justify-start items-start inline-flex"
    //       >
    //         <h3 className="text-primary text-4xl font-bold font-manrope leading-normal">
    //           {stat.value}
    //         </h3>
    //         <h6 className="text-gray-500 text-base font-normal leading-relaxed">
    //           {stat.description}
    //         </h6>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    //             <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
    //               Lanka Nature Walks curates immersive experiences in Sri
    //               Lanka’s hill country, offering travelers the chance to learn
    //               traditional cooking, embark on tuk-tuk adventures through tea
    //               plantations, and explore the region’s diverse landscapes on
    //               guided treks.
    //               <br />
    //               <br />
    //               At Lanka Nature Walks, we envision a world where travelers are
    //               not just observers but active participants in the vibrant
    //               tapestry of Sri Lanka’s hill country.{" "}
    //               <span className=" text-secondary font-bold text-lg">
    //                 Our mission{" "}
    //               </span>
    //               is to create transformative experiences that immerse guests in
    //               the rich cultural heritage and breathtaking natural beauty of
    //               this extraordinary region. We aspire to be a bridge between
    //               visitors and locals, fostering authentic connections through
    //               traditional cooking classes that unveil the secrets of local
    //               cuisine, tuk-tuk adventures that wind through lush tea
    //               plantations, and guided treks that reveal the diverse
    //               landscapes and hidden gems of the area.
    //               <br />
    //               {isExpanded && (
    //                 <>
    //                   <br />
    // Through our carefully curated experiences, we aim to
    // empower travelers to appreciate the stories behind the
    // scenery, engage with the heartfelt traditions of the
    // communities we visit, and cultivate a deeper understanding
    // of the ecological wonders that surround them. We are
    // committed to sustainable tourism practices that respect
    // the environment and support local economies, ensuring that
    // our impact is positive and lasting.
    // <br />
    // <br />
    // <span className=" text-secondary font-bold text-lg">
    //   Our vision{" "}
    // </span>{" "}
    // is to inspire a profound appreciation for the
    // interconnectedness of culture and nature, where every
    // stroll through rolling hills, every shared meal, and every
    // laugh-filled tuk-tuk ride creates memories that enrich
    // lives. As we guide our guests through the verdant valleys
    // and misty peaks of Sri Lanka’s hill country, we hope to
    // ignite a passion for exploration and stewardship of the
    // natural world, ultimately fostering a movement towards
    // more conscientious and sustainable travel for generations
    // to come. Together, we will celebrate the beauty of Sri
    // Lanka, one immersive experience at a time.
    //                 </>
    //               )}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    // {/* Read More Button */}
    // <div className="flex items-center justify-center">
    //   <a
    //     onClick={handleToggle}
    //     className="sm:w-fit w-full px-3.5 py-2 bg-primary hover:bg-secondary transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
    //   >
    //     <span className="px-1.5 text-white text-sm font-medium leading-6">
    //       {isExpanded ? "Show less" : "Read More"}
    //     </span>
    //   </a>
    // </div>
    //     </div>
    //   </div>

    //   {/*  */}
    //   {/* <div class="bg-white">
    //     <header class="bg-primary text-white text-center py-12">
    //       <h1 class="text-4xl font-bold mt-16">About Us</h1>
    //     </header>

    //     <section class="text-center py-12 px-4">
    //       <h2 class="text-2xl font-bold">Mission And Values</h2>
    //       <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
    //         Our mission is to provide exceptional healthcare services with a
    //         focus on availability, reliability, and support.
    //       </p>
    //       <div class="flex justify-center space-x-8 mt-8 animate-fadeIn">
    //         <div class="transition transform hover:scale-110">
    //           <h3 class="text-xl font-bold">85+</h3>
    //           <p class="text-gray-700">Specialists</p>
    //         </div>
    //         <div class="transition transform hover:scale-110">
    //           <h3 class="text-xl font-bold">25+</h3>
    //           <p class="text-gray-700">Years of Experience</p>
    //         </div>
    //       </div>
    //     </section>

    //     <section class="bg-primary text-white py-12 px-4">
    //       <h2 class="text-2xl font-bold text-center">Our Vision</h2>
    //       <p class="mt-4 text-center max-w-2xl mx-auto">
    //         Healthcare anytime, anywhere. We aim to revolutionize the healthcare
    //         industry by making quality healthcare accessible to everyone.
    //       </p>
    //     </section>

    //     <section class="text-center py-12 px-4">
    //       <h2 class="text-2xl font-bold">Our Healthcare Specialties</h2>
    //       <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
    //         <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
    //           <h3 class="text-xl font-bold">Cardiology</h3>
    //         </div>
    //         <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
    //           <h3 class="text-xl font-bold">Neurology</h3>
    //         </div>
    //         <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
    //           <h3 class="text-xl font-bold">Pediatrics</h3>
    //         </div>
    //         <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
    //           <h3 class="text-xl font-bold">Oncology</h3>
    //         </div>
    //       </div>
    //     </section>

    //     <section class="bg-gray-100 py-12 px-4">
    //       <h2 class="text-2xl font-bold text-center">
    //         State-Of-The-Art Technology
    //       </h2>
    //       <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
    //         <div class="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
    //           <h3 class="text-xl font-bold">Advanced Diagnostics</h3>
    //           <p class="text-gray-700 mt-2">
    //             We utilize the latest technology for accurate diagnostics.
    //           </p>
    //         </div>
    //         <div class="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
    //           <h3 class="text-xl font-bold">Telemedicine</h3>
    //           <p class="text-gray-700 mt-2">
    //             Consult with our specialists from the comfort of your home.
    //           </p>
    //         </div>
    //         <div class="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
    //           <h3 class="text-xl font-bold">Robotic Surgery</h3>
    //           <p class="text-gray-700 mt-2">
    //             Minimally invasive procedures with precision.
    //           </p>
    //         </div>
    //         <div class="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
    //           <h3 class="text-xl font-bold">Electronic Health Records</h3>
    //           <p class="text-gray-700 mt-2">
    //             Secure and easy access to your medical records.
    //           </p>
    //         </div>
    //       </div>
    //     </section>

    //     <section class="text-center py-12 px-4">
    //       <h2 class="text-2xl font-bold">
    //         Committed To Your Health And Happiness
    //       </h2>
    //       <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
    //         <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
    //           <h3 class="text-xl font-bold">Book Appointment</h3>
    //         </div>
    //         <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
    //           <h3 class="text-xl font-bold">Informed Staff</h3>
    //         </div>
    //         <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
    //           <h3 class="text-xl font-bold">Total Health</h3>
    //         </div>
    //         <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
    //           <h3 class="text-xl font-bold">Get Consultation</h3>
    //         </div>
    //       </div>
    //     </section>

    //     <section class="bg-green-500 text-white text-center py-12 px-4">
    //       <h2 class="text-2xl font-bold">Patient Testimonials</h2>
    //       <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
    //         <div class="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
    //           <p>
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
    //             sit amet tristique mi."
    //           </p>
    //           <h3 class="mt-4 font-bold">- Patient A</h3>
    //         </div>
    //         <div class="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
    //           <p>
    //             "Nullam ac augue eget diam posuere vehicula. Vivamus quis nulla
    //             ac justo euismod posuere."
    //           </p>
    //           <h3 class="mt-4 font-bold">- Patient B</h3>
    //         </div>
    //         <div class="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
    //           <p>
    //             "Fusce tincidunt, arcu nec vestibulum tincidunt, eros massa
    //             ullamcorper urna."
    //           </p>
    //           <h3 class="mt-4 font-bold">- Patient C</h3>
    //         </div>
    //       </div>
    //     </section>

    //     <section class="text-center py-12 px-4 w-full">
    //       <h2 class="text-2xl font-bold">
    //         Get Answer To Your Most Asked Questions
    //       </h2>
    //       <div class="mt-8">
    //         <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
    //           <h3 class="text-xl font-bold">
    //             How do I make an appointment online?
    //           </h3>
    //           <p class="mt-2 text-gray-700">
    //             You can book an appointment online through our website or mobile
    //             app.
    //           </p>
    //         </div>
    //         <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
    //           <h3 class="text-xl font-bold">
    //             What types of medical tests do you offer?
    //           </h3>
    //           <p class="mt-2 text-gray-700">
    //             We offer a wide range of medical tests including blood tests,
    //             imaging, and more.
    //           </p>
    //         </div>
    //         <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
    //           <h3 class="text-xl font-bold">Do you accept insurance plans?</h3>
    //           <p class="mt-2 text-gray-700">
    //             Yes, we accept most major insurance plans.
    //           </p>
    //         </div>
    //       </div>
    //     </section>

    //     <footer class="bg-green-500 text-white text-center py-8">
    //       <p>
    //         &copy; Copyright [Your Name] . All rights reserved. Made By Binary
    //         Boats⛵
    //       </p>
    //     </footer>
    //   </div> */}
    //   {/*  */}
    // </section>

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
          class="text-center  bg-gray-100 text-gray-800 py-12 px-4"
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

        <section
          className="text-center py-12 px-4"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          <h2 className="text-2xl font-bold">
            Embark on Unforgettable Adventures with Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {adventureData.map((adventure, index) => (
              <div
                key={index}
                className="p-4 shadow-lg rounded-lg text-gray-200 bg-primary  transition-colors"
              >
                <h3 className="text-xl font-bold">{adventure.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* <section class="bg-gray-100 py-12 px-4">
          <h2 class="text-2xl font-bold text-center">
            State-Of-The-Art Technology
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
            <div class="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 class="text-xl font-bold">Advanced Diagnostics</h3>
              <p class="text-gray-700 mt-2">
                We utilize the latest technology for accurate diagnostics.
              </p>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 class="text-xl font-bold">Telemedicine</h3>
              <p class="text-gray-700 mt-2">
                Consult with our specialists from the comfort of your home.
              </p>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 class="text-xl font-bold">Robotic Surgery</h3>
              <p class="text-gray-700 mt-2">
                Minimally invasive procedures with precision.
              </p>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 class="text-xl font-bold">Electronic Health Records</h3>
              <p class="text-gray-700 mt-2">
                Secure and easy access to your medical records.
              </p>
            </div>
          </div>
        </section>

        <section class="bg-green-500 text-white text-center py-12 px-4">
          <h2 class="text-2xl font-bold">Patient Testimonials</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
            <div class="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                sit amet tristique mi."
              </p>
              <h3 class="mt-4 font-bold">- Patient A</h3>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
              <p>
                "Nullam ac augue eget diam posuere vehicula. Vivamus quis nulla
                ac justo euismod posuere."
              </p>
              <h3 class="mt-4 font-bold">- Patient B</h3>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
              <p>
                "Fusce tincidunt, arcu nec vestibulum tincidunt, eros massa
                ullamcorper urna."
              </p>
              <h3 class="mt-4 font-bold">- Patient C</h3>
            </div>
          </div>
        </section>

        <section class="text-center py-12 px-4 w-full">
          <h2 class="text-2xl font-bold">
            Get Answer To Your Most Asked Questions
          </h2>
          <div class="mt-8">
            <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
              <h3 class="text-xl font-bold">
                How do I make an appointment online?
              </h3>
              <p class="mt-2 text-gray-700">
                You can book an appointment online through our website or mobile
                app.
              </p>
            </div>
            <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 class="text-xl font-bold">
                What types of medical tests do you offer?
              </h3>
              <p class="mt-2 text-gray-700">
                We offer a wide range of medical tests including blood tests,
                imaging, and more.
              </p>
            </div>
            <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 class="text-xl font-bold">Do you accept insurance plans?</h3>
              <p class="mt-2 text-gray-700">
                Yes, we accept most major insurance plans.
              </p>
            </div>
          </div>
        </section> */}
      </div>
    </section>
  );
};

export default AboutUs;
