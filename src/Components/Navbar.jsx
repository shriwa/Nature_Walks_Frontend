import React, { useState } from "react";
import logo_1 from "../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menus = [
    { name: "Home", link: "/" },
    { name: "Gallery", link: "/blog" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="">
      <div className="min-screen shadow-2xl fixed w-full top-0 z-[999] ">
        <div className="antialiase bg-gray-100 text-text_1">
          <div className="w-full h-[7rem] text-white bg-primary">
            <div className="flex flex-col max-w-screen-xl  mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between p-4">
                <a href="/">
                  <img src={logo_1} alt="" className=" h-20 rounded-md" />
                </a>
                <button
                  className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                  onClick={toggleMenu}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    {menuOpen ? (
                      <path
                        fillRule="evenodd"
                        color="white"
                        clipRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        color="white"
                        clipRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      />
                    )}
                  </svg>
                </button>
              </div>
              <nav
                className={`${
                  menuOpen ? "flex" : "hidden"
                } bg-primary text-white flex-col gap-4 flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
              >
                {menus.map((menu, i) => (
                  <a
                    key={i}
                    className="px-4 py-2 mt-2 text-md font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-green-500"
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
    </div>
  );
};

export default Navbar;
