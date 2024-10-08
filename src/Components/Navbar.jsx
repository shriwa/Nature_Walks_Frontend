import React, { useState, useEffect } from "react";
import logo_1 from "../assets/logo_1.png";
import logo_3 from "../assets/logo_3.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menus = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Booking", link: "/booking" },
    { name: "About", link: "/aboutus" },
    { name: "Contact", link: "/contact" },
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

  return (
    <div>
      {/* Top Bar */}
      <div
        className={`fixed w-full top-0 z-[999] transition-all md:duration-700  text-primary 
    ${
      scrolled || menuOpen
        ? "bg-white shadow-xl text-secondary"
        : "bg-transparent"
    } 
    hover:bg-white hover:text-secondary transform md:hover:scale-[102%] hover:scale-100`}
      >
        <div className="antialiase">
          <div className="w-full h-[7rem]">
            <div className="flex flex-row items-center justify-between max-w-screen-xl mx-auto p-4 md:px-6 lg:px-8">
              <div className=" flex items-center justify-center  md:gap-14">
                <a href="/">
                  <img src={logo_1} alt="" className="h-20 rounded-md " />
                </a>
                {/* <a href="/">
                  <img src={logo_3} alt="" className="h-44 rounded-md" />
                </a> */}
                <a href="/" className=" text-[20px] md:text-3xl font-semibold ">
                  Lanka Nature Walks
                </a>
              </div>
              {/* Show menu button only on small screens */}
              <button
                className="rounded-lg focus:outline-none md:hidden"
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
                    className={`px-4 py-2 text-md font-semibold transform md:hover:scale-[103%] ${
                      scrolled
                        ? "text-primary hover:text-secondary "
                        : " text-primary hover:text-secondary "
                    }`}
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

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-100 bg-opacity-95 text-primary transition-transform transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } z-[998] w-48 md:hidden`}
      >
        <div className="flex flex-col h-full">
          <nav className="flex flex-col p-4 space-y-4 mt-28">
            {menus.map((menu, i) => (
              <a
                key={i}
                className="px-4 py-2 text-md font-semibold bg-transparent rounded-lg hover:text-secondary"
                href={menu.link}
              >
                {menu.name}
              </a>
            ))}
          </nav>
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
