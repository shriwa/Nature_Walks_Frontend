import React from "react";
import Services from "../../Components/Home/Services";
import Banner_2 from "../../Components/Home/Banner_2";

import image_3 from "../../assets/Cuisine//image_7.jpg";
import image_4 from "../../assets/Cuisine//image_17.jpg";
import image_5 from "../../assets/Cuisine/image_16.jpg";
import image_6 from "../../assets/Cuisine/image_13.jpg";
import image_7 from "../../assets/Cuisine/image_14.jpg";

const bannerImages = [
  {
    name: "Banner 1",
    img: image_5,
    link: "#",
  },
  {
    name: "Banner 2",
    img: image_6,
    link: "#",
  },
  {
    name: "Banner 3",
    img: image_3,
    link: "#",
  },
  {
    name: "Banner 4",
    img: image_4,
    link: "#",
  },
  {
    name: "Banner 5",
    img: image_7,
    link: "#",
  },
];

const Cuisine = () => {
  return (
    <div className="px-4 mx-auto py-4 max-w-2xl md:max-w-7xl  md:px-24 lg:px-8 md:mt-8">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10 mb-4">
          Traditional Cooking Sessions
        </h1>

        <Banner_2 slidesPerView={2} images={bannerImages} />
        <div className="md:pt-8 mt-4 lg:flex flex-col items-center gap-4 relative z-10 rounded-md mx-auto bg-gray-200 p-4">
          <div
            role="contentinfo"
            className="w-full h-full flex flex-col items-center justify-center"
          >
            <p
              tabIndex="0"
              className="text-gray-500 text-sm md:text-md font-bold mb-2 grid grid-cols-1 gap-8"
            >
              <p>
                If you’ve ever wanted to learn how to cook, this is the class
                for you! By following along, you’ll learn all the fundamentals
                of cooking you need to create delicious traditional Srilankan
                meals Our expert chefs will guide and teach you in small groups,
                so you develop and practice with guidance, through the
                fundamentals of cooking, from knife skills to meal preparation
                that you can share with your family and friends.
              </p>

              <p>
                In this hands-on class, you’ll learn how to chop, slice, and
                dice like a pro. Also, master a range of cooking techniques,
                from boiling to frying to steaming. You’ll explore a variety of
                meats, vegetables, pulses, and grains, and discover how to cook
                them to perfection.
              </p>
              <p>
                Rice and curry – Srilanka’s most iconic dish - is simplified in
                language but highly complex in execution. the ‘curry ’ that
                accompanies rice in Srilanka is actually an array of dishes made
                up of different vegetables that might be sautéed in spices,
                boiled in coconut milk , tempered, deep fried, caramelized and
                even served raw with grated coconut.
              </p>

              <p>
                Start the experience with a visit to a local vendor, where you
                can purchase fresh vegetables before heading to meet the chef or
                you can step into the garden where the cooking class is held and
                pick some vegetables by yourself. Then with a welcome drink you
                can start the cooking lessons. Here you will learn how to
                prepare and cook your favorite srilankan dishes such as Sri
                Lankan fried egg plant curry, lentil dhal, potato and more. You
                will also discover how coconut milk is been made, learn to crack
                open and scrape out coconut.
              </p>

              <p>
                The end is feast of eight unique dishes served with red, white
                or yellow rice and with a sweet dessert
              </p>
            </p>
          </div>
        </div>
      </div>

      <Services />
    </div>
  );
};

export default Cuisine;
