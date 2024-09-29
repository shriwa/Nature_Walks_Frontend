import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation, Parallax } from "swiper/modules";

const Gallery_2 = () => {
  const images = [
    {
      name: "banner 1",
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea debitisnon aspe",
      img: "https://static.vecteezy.com/system/resources/previews/030/317/926/large_2x/hikers-paradise-rear-view-shows-tourist-relishing-mountain-vista-embracing-travel-lifestyle-vertical-mobile-wallpaper-ai-generated-free-photo.jpg",
      link: "#",
    },
    {
      name: "banner 2",
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea debitisnon aspe",
      img: "data:image/jpeg;base64,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",
      link: "#",
    },
    {
      name: "banner 3",
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea debitisnon aspe",
      img: "https://w0.peakpx.com/wallpaper/670/897/HD-wallpaper-long-journey-hiking.jpg",
      link: "#",
    },
    {
      name: "banner 4",
      title: "Title 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ea debitisnon aspe",
      img: "https://w0.peakpx.com/wallpaper/670/897/HD-wallpaper-long-journey-hiking.jpg",
      link: "#",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="">
      {/* <!-- nav bar section --> */}
      <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
        <div className="text-xl">Bappa Flour mill</div>
        <div className="flex md:hidden">
          <button id="hamburger">
            <img
              className="toggle block"
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
            />
            <img
              className="toggle hidden"
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
            />
          </button>
        </div>
        <div className=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
          <a
            href="#home"
            className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
          >
            Home
          </a>
          <a
            href="#services"
            className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
          >
            Services
          </a>
          <a
            href="#aboutus"
            className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
          >
            About us
          </a>
          <a
            href="#gallery"
            className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
          >
            Gallery
          </a>
          <a
            href="#contactUs"
            className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
          >
            Visit Us
          </a>
        </div>

        <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
          <a href="tel:+123">
            <div className="flex justify-end">
              <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
                {/* <!-- Heroicon name: phone --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Call now
              </div>
            </div>
          </a>
        </div>
      </nav>
      {/* <!-- hero seciton --> */}
      <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-70">
          <img
            src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
              Bappa Flour mill
            </h1>
            <p className="font-regular text-xl mb-8 mt-4">
              One stop solution for flour grinding services
            </p>
            <a
              href="#contactUs"
              className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {/* 
<!-- our services section --> */}
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp"
                alt="wheat flour grinding"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Wheat Flour Grinding
                </h3>
                <p className="text-gray-700 text-base">
                  Our wheat flour grinding service provides fresh, high-quality
                  flour to businesses and individuals in the area. We use
                  state-of-the-art equipment to grind wheat into flour, and we
                  offer a variety of flours to meet the needs of our customers.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Gram Flour Grinding
                </h3>
                <p className="text-gray-700 text-base">
                  Our gram flour is perfect for a variety of uses, including
                  baking, cooking, and making snacks. It is also a good source
                  of protein and fiber.Our gram flour grinding service is a
                  convenient and affordable way to get the freshest gram flour
                  possible.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://image2.jdomni.in/banner/13062021/D2/99/0D/48D7F4AFC48C041DC8D80432E9_1623562146900.png?output-format=webp"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Jowar Flour Grinding
                </h3>
                <p className="text-gray-700 text-base">
                  Our jowar grinding service is a convenient and affordable way
                  to get fresh, high-quality jowar flour. We use
                  state-of-the-art equipment to grind jowar into a fine powder,
                  which is perfect for making roti, bread, and other dishes.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      Our jowar flour is also a good source of protein and
                      fiber, making it a healthy choice for your family.
                    </p>
                  </details>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Chilli pounding
                </h3>
                <p className="text-gray-700 text-base">
                  We specializes in the production of high-quality chili powder.
                  Our chili powder is made from the finest, freshest chilies,
                  and we use traditional pounding methods to ensure that our
                  chili powder retains its full flavor and aroma.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      {" "}
                      We offer a variety of chili powder products, including
                      mild, medium, and hot. We also offer custom blends to meet
                      the specific needs of our customers.
                    </p>
                  </details>
                </p>
              </div>
            </div>
            {/* <!-- special card --> */}
            <div className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
              <div className="text-center text-white font-medium">
                Special product
              </div>
              <img
                src="https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww"
                alt="Coffee"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Flavoured Spaghetti
                </h3>
                <p className="text-gray-700 text-base">
                  <span className="font-medium underline">
                    Our speciality is
                  </span>
                  Bappa Flour Mill offers a variety of flavored spaghetti dishes
                  that are sure to tantalize your taste buds. We use only the
                  freshest ingredients Our flavors include: Mango, spinach
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU="
                alt="papad"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Rice Papad
                </h3>
                <p className="text-gray-700 text-base">
                  Our company produces high-quality rice papad that is made with
                  the finest ingredients. We use traditional methods to make our
                  papad, which gives it a unique flavor and texture. Our papad
                  is also gluten-free and vegan.
                  <details>
                    <summary>Read More</summary>
                    <p>
                      {" "}
                      We offer a variety of rice papad flavors, including plain,
                      salted, spicy, and flavored. We also offer a variety of
                      sizes and shapes to choose from. Our papad is available in
                      bulk or in individual packages.
                    </p>
                  </details>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- about us --> */}
      <section className="bg-gray-100" id="aboutus">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Bappa flour mill provides our customers with the highest quality
                products and services. We offer a wide variety of flours and
                spices to choose from, and we are always happy to help our
                customers find the perfect products for their needs. We are
                committed to providing our customers with the best possible
                experience. We offer competitive prices, fast shipping, and
                excellent customer service. We are also happy to answer any
                questions that our customers may have about our products or
                services. If you are looking for a flour and spices service
                business that can provide you with the highest quality products
                and services, then we are the company for you. We look forward
                to serving you!
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- why us  --> */}
      <section className="text-gray-700 body-font mt-10">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
          Why Us?
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Latest Milling Machinery
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Reasonable Rates
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Time Efficiency
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                    className="w-32 mb-3"
                  />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  Expertise in Industry
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- gallery --> */}
      <section className="text-gray-700 body-font" id="gallery">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
          Gallery
        </div>

        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <div className="group relative">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div className="group relative">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div className="group relative">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className="group relative">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Image 1"
              className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          {/* <!-- Repeat this div for each image --> */}
        </div>
      </section>
      {/* 
<!-- Visit us section --> */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl font-extrabold text-gray-900"
              id="contactUs"
            >
              Visit Our Location
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Let us serve you the best
            </p>
          </div>
          <div className="mt-8 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                    <p className="mt-1 font-bold text-gray-600">
                      <a href="tel:+123">Phone: +91 123456789</a>
                    </p>
                    <a className="flex m-1" href="tel:+919823331842">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-between h-10 w-30 rounded-md bg-indigo-500 text-white p-2">
                          {/* <!-- Heroicon name: phone --> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                          Call now
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Address
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Sale galli, 60 foot road, Latur
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Sunday : 2pm - 9pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden order-none sm:order-first">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.7850672491236!2d76.58802159999999!3d18.402630699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83ca88e84341%3A0x841e547bf3ad066d!2zQmFwcGEgZmxvdXIgbWlsbCB8IOCkrOCkquCljeCkquCkviDgpKrgpYDgpKAg4KSX4KS_4KSw4KSj4KWALCDgpK7gpL_gpLDgpJrgpYAg4KSV4KS-4KSC4KSh4KSqIOCkhuCko-CkvyDgpLbgpYfgpLXgpL7gpK_gpL4!5e0!3m2!1sen!2sin!4v1713433597892!5m2!1sen!2sin"
                  className="w-full"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- footer --> */}
      <section>
        <footer className="bg-gray-200 text-white py-4 px-3">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 md:text-center md:mb-4 mb-8">
              <p className="text-xs text-gray-400 md:text-sm">
                Copyright 2024 &copy; All Rights Reserved
              </p>
            </div>
            <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
              <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                <li>
                  <a
                    href="#contactUs"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li className="mx-4">
                  <a href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Gallery_2;
