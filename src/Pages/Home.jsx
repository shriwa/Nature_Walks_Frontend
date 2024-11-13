import React, { useEffect } from "react";
import Banner_1 from "../Components/Home/Banner_1";
import Banner_2 from "../Components/Home/Banner_2";
import Gallery_2 from "../Components/Gallery/Gallery_2";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Services from "../Components/Home/Services";
import WhatWeDo from "../Components/Home/WhatWeDo";
import Slider from "../Components/Slider/Slider";

import { home_gallery } from "../images";
import About from "../Components/Home/About";
import Gallery from "../Components/Gallery/Gallery";

import horton_plains from "../assets/locations/horton_plains.jpg";
import ella from "../assets/locations/ella.jpg";
import knuckles_mountain_range from "../assets/locations/knuckles_mountain_range.webp";
import sripada from "../assets/locations/sripada.jpg";
import sinharaja from "../assets/locations/singaraja.jpg";
import pekoe_trail from "../assets/locations/pekoe_trail.jpg";

import ImageSlider from "../Components/Slider/Slider";

const IMAGES = [
  {
    id: 1,
    image: horton_plains,
    title:
      "Horton Plains NP, Kirigalpoththa Mountains, Nuwara Eliya, Haputhale and Ohiya",
    link: "",
  },
  {
    id: 2,
    image: ella,
    title: " Ella, Haputale, Ohiya, Belihuloya, Nuwaraeliya & Bandarawela",
    link: "",
  },
  {
    id: 3,
    image: knuckles_mountain_range,
    title: "Knuckles Mountain Range",
    link: "",
  },
  {
    id: 4,
    image: sripada,
    title: "Adam’s Peak and Peak wilderness sanctuary",
    link: "",
  },
  {
    id: 5,
    image: sinharaja,
    title: "Sinharaja Rain Forest and rural areas south of Sinharaja",
    link: "",
  },
  {
    id: 6,
    image: pekoe_trail,
    title: "Pekoe Trail Trekking Tour",
    link: "",
  },
];

const Home = () => {
  useEffect(() => {
    document.title = "Home | Lanka Nature Walks";
  });

  return (
    <div id="home" className="">
      <Banner_1 />
      <WhatWeDo />
      <Services />
      {/* <ImageSlider images={IMAGES} /> */}
      <Gallery />
      {/* <Gallery_2 images={home_gallery} slidesPerView={2} /> */}
      <About />
      <ContactUs />
    </div>
  );
};

export default Home;
