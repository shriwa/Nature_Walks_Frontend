import React from "react";
import Banner_1 from "../Components/Home/Banner_1";
import Gallery_2 from "../Components/Home/Gallery_2";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Services from "../Components/Home/Services";
import WhatWeDo from "../Components/Home/WhatWeDo";

import banner_1 from "../assets/Banner/banner_1.jpg";
import banner_2 from "../assets/Banner/banner_2.jpg";
import banner_3 from "../assets/Banner/banner_3.jpg";
import banner_4 from "../assets/Banner/banner_4.jpg";
import banner_5 from "../assets/Banner/banner_5.jpg";

const images = [
  {
    name: "banner 1",
    img: banner_1,
  },
  {
    name: "banner 2",

    img: banner_2,
  },
  {
    name: "banner 3",

    img: banner_3,
  },
  {
    name: "banner 4",
    img: banner_4,
  },
  {
    name: "banner 5",
    img: banner_5,
  },
];

const Home = () => {
  return (
    <div id="home">
      <Banner_1 />
      <WhatWeDo />
      <Services />
      <Gallery_2 images={images} />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Home;
