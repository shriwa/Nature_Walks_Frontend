import React from "react";
import Services from "../../Components/Home/Services";

import cuisine from "../../assets/Cuisine/image_2.png";
import { cuisine_gallery } from "../../images";
import Gallery_2 from "../../Components/Home/Gallery_2";

const Cuisine = () => {
  return (
    <div className="px-4 mx-auto py-4 sm:max-w-xl max-w-6xl lg:max-w-screen-2xl md:px-24 lg:px-8 mt-12">
      <div className="mx-auto p-2 mt-6  max-w-6xl md:full first-line:flex flex-col self-start rounded-lg bg-gray-200 shadow-secondary-1 transition-all duration-700 ease-in-out">
        <div className="p-2  text-secondary md:flex flex-col items-center justify-center">
          <div className=" flex-col flex items-center text-center justify-center text-gray-800 mb-8">
            <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Traditional Sri Lankan Cooking Classes
            </h1>

            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
              Dine in Paradise with Sri Lankan Cuisine
            </p>
            <a class="inline-flex items-center justify-center px-3 py-1 text-base font-medium text-center text-white bg-secondary rounded-lg focus:ring-4 focus:ring-blue-300 ">
              Duration – 3 to 5 hours
            </a>
            <img
              className="object-cover object-center w-full h-[14rem]  md:h-[20rem] rounded-lg mt-8"
              src={cuisine}
              alt="Tuk Tuk Safari"
            />
          </div>

          <div className="mb-4 mx-auto md:h-full max-w-5xl flex flex-col gap-4 text-white bg-primary p-4 rounded-md">
            <div className="flex flex-col gap-2 md:gap-3 ">
              <div className=" text-start text-gray-300 flex flex-col items-start gap-5 mx-3">
                <p>
                  If you’ve ever wanted to learn how to cook, this is the class
                  for you! By following along, you’ll learn all the fundamentals
                  of cooking you need to create delicious traditional Srilankan
                  meals Our expert chefs will guide and teach you in small
                  groups, so you develop and practice with guidance, through the
                  fundamentals of cooking, from knife skills to meal preparation
                  that you can share with your family and friends
                </p>

                <p>
                  In this hands-on class, you’ll learn how to chop, slice, and
                  dice like a pro. Also, master a range of cooking techniques,
                  from boiling to frying to steaming. You’ll explore a variety
                  of meats, vegetables, pulses, and grains, and discover how to
                  cook them to perfection.
                </p>
                <p>
                  Rice and curry – Srilanka’s most iconic dish - is simplified
                  in language but highly complex in execution. the ‘curry ’ that
                  accompanies rice in Srilanka is actually an array of dishes
                  made up of different vegetables that might be sautéed in
                  spices, boiled in coconut milk , tempered, deep fried,
                  caramelized and even served raw with grated coconut.
                </p>

                <p>
                  Start the experience with a visit to a local vendor, where you
                  can purchase fresh vegetables before heading to meet the chef
                  or you can step into the garden where the cooking class is
                  held and pick some vegetables by yourself. Then with a welcome
                  drink you can start the cooking lessons. Here you will learn
                  how to prepare and cook your favorite srilankan dishes such as
                  Sri Lankan fried egg plant curry, lentil dhal, potato and
                  more. You will also discover how coconut milk is been made,
                  learn to crack open and scrape out coconut.
                </p>

                <p>
                  The end is feast of eight unique dishes served with red, white
                  or yellow rice and with a sweet dessert
                </p>
              </div>
            </div>
          </div>
        </div>

        <Gallery_2 images={cuisine_gallery} slidesPerView={2} />
      </div>

      <Services />
    </div>
  );
};

export default Cuisine;
