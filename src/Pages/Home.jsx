import React from "react";
import Banner_1 from "../Components/Home/Banner_1";
import Gallery_2 from "../Components/Home/Gallery_2";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Services from "../Components/Home/Services";
import WhatWeDo from "../Components/Home/WhatWeDo";

import { home_gallery } from "../images";

const Home = () => {
  return (
    <div id="home">
      <Banner_1 />
      <WhatWeDo />
      <Services />
      <Gallery_2 images={home_gallery} slidesPerView={3} />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Home;
