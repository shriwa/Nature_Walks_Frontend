import React, { useState, useEffect } from "react";
import logo_1 from "../assets/logo_1.png";

import tuk_tuk from "../assets/Services/tuk_tuk_2.png";
import trekking from "../assets/Services/trekking_2.png";
import cooking from "../assets/Services/cooking_2.png";

import "aos/dist/aos.css";
import Aos from "aos";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menus = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Booking", link: "/booking" },
    { name: "About", link: "/about-us" },
    { name: "Contact", link: "/contact" },
  ];

  const slideData = [
    {
      id: 1,
      image: tuk_tuk,
      title: "Pekoe Tuk Tuk Safari",
      link: "/tuktuk",
    },
    {
      id: 2,
      image: trekking,
      title: "Trekking & Hikking",
      link: "/trekking&hiking",
    },
    {
      id: 3,
      image: cooking,
      title: "Traditional Cooking Classes",
      link: "/cuisine",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    Aos.init();
  });

  return (
    <div>
      {/* Top Bar */}
      <div
        className={`fixed w-full top-0 z-[999] transition-all duration-200 text-primary 
    ${scrolled ? "bg-gray-50 shadow-2xl  transform " : ""} 
   `}
      >
        <div className="antialiase ">
          <div className="w-full h-[7rem] ">
            <div
              className={`flex flex-row items-center md:justify-around  justify-between max-w-scr mx-auto p-3 md:px-6 lg:px-8 transition-all duration-300  ${
                scrolled
                  ? "md:gap-20 md:px-8 mt-0 bg-none"
                  : "gap-4 md:mt-0 mt-0 bg-gray-50/70 "
              }`}
            >
              <div className=" flex items-center justify-center  md:gap-8">
                <a href="/">
                  <img src={logo_1} alt="" className="h-20 rounded-md " />
                </a>

                <a href="/" className="md:text-3xl text-xl font-bold ">
                  Lanka Nature Walks
                </a>
              </div>
              {/* Show menu button only on small screens */}
              <button
                className="rounded-md focus:outline-none md:hidden"
                onClick={toggleMenu}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6 text-primary"
                >
                  {menuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    />
                  )}
                </svg>
              </button>

              {/* Menu for medium (md) and larger screens */}
              <nav className="hidden md:flex md:items-center md:space-x-6">
                {menus.map((menu, i) => (
                  <a
                    key={i}
                    className={`px-4 py-2 text-lg font-bold hover:text-secondary transition-all duration-700 
                   `}
                    href={menu.link}
                  >
                    {menu.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar for small screens */}
      <div
        className={`fixed top-0 left-0 bg-white  text-primary  transition-transform transform duration-500 ease-in-out  ${
          menuOpen ? "translate-x-0" : "-translate-y-full"
        } z-[998] w-full h-5/6 md:hidden rounded-b-md`}
      >
        <div className="flex flex-col items-center justify-evenly mt-28 gap-4 ">
          <nav className="grid grid-cols-1 gap-2 p-4">
            {menus.map((menu, i) => (
              <a
                key={i}
                className="px-4 py-2 text-md font-bold bg-transparent hover:text-secondary"
                href={menu.link}
              >
                {menu.name}
              </a>
            ))}
          </nav>

          <div className="grid mb-8 gap-12 grid-cols-3 items-center justify-center md:mx-0 mx-4">
            {slideData.map((slide) => (
              <a href={slide.link}>
                <div
                  key={slide.id}
                  className="flex  items-center justify-start gap-0 md:p-2 transform transition duration-700 hover:scale-[102%] rounded-xl border "
                >
                  <div className="flex justify-center items-center">
                    <img src={slide.image} className="w-12 h-12 md:mb-3 p-2" />
                  </div>
                  {/* <h2 className="title-font max-w-28 md:text-start text-center font-bold text-xs text-gray-800 md:p-0 p-2">
                    {slide.title}
                  </h2> */}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[997] md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
