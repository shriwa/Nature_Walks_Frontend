import React from "react";
import logo_1 from "../assets/logo.jpg";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

// OurServices Component
const OurServices = () => {
  const services = [
    { name: "Sample", url: "#" },
    { name: "Sample", url: "#" },
    { name: "Sample", url: "#" },
  ];

  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase">Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index} className="mb-4 hover:text-secondary">
            <a href={service.url} className="">
              {service.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// FollowUs Component
const FollowUs = () => {
  const socialLinks = [
    { name: "Facebook", url: "#", icon: <FaFacebookSquare /> },
    { name: "Instagram", url: "#", icon: <FaInstagramSquare /> },
    { name: "Twitter", url: "#", icon: <FaTwitterSquare /> },
  ];

  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase">Follow Us</h2>
      <ul>
        {socialLinks.map((link, index) => (
          <li
            key={index}
            className="mb-4 flex items-center hover:text-secondary"
          >
            <a href={link.url} className="flex items-center">
              {link.icon} <span className="ml-2">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Legal Component
const Legal = () => {
  const legalLinks = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms & Conditions", url: "#" },
  ];

  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
      <ul>
        {legalLinks.map((link, index) => (
          <li key={index} className="mb-4 hover:text-secondary">
            <a href={link.url} className="">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 font-semibold text-white bg-primary">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          {/* Logo and branding */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src={logo_1}
                className="mr-3 h-24 rounded-md"
                alt="DocEase Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Nature Walks
              </span>
            </a>
          </div>
          {/* Menu Sections */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
            <OurServices />
            <FollowUs />
            <Legal />
          </div>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Your website
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* Social media icons */}
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Social icon content */}
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
