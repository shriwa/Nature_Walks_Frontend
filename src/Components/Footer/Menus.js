import { FaPhone } from "react-icons/fa";
import { IoMail, IoLocation } from "react-icons/io5";

export const Menus = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Booking", link: "/booking" },
  { name: "About", link: "/aboutus" },
  { name: "Contact", link: "/contact" },
];

export const services = [
  {
    name: "Pekoe Tuk Tuk Safari",
    link: "/tuktuk",
  },
  {
    name: "Trekking & Hikking",
    link: "/trekking&hiking",
  },
  {
    name: "Traditional Cooking Classes",
    link: "/cuisine",
  },
];

export const ContactDetails = [
  {
    link: "https://maps.app.goo.gl/awZFadYu2vuVzsqv6",
    // icon: IoLocation,
    name: "Monisha villa Hamparawa Bandarawela",
    type: "external",
  },
  {
    link: "tel:+94728866776",
    // icon: FaPhone,
    name: "+94 72 8866776",
    type: "phone",
  },
  {
    link: "mailto:lankanaturewalks@gmail.com",
    // icon: IoMail,
    name: "lankanaturewalks@gmail.com",
    type: "email",
  },
];
