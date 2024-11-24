import React, { useEffect } from "react";
import Banner_1 from "../Components/Home/Banner_1";
import ContactUs from "../Pages/ContactUs";
import Services from "../Components/Home/Services";
import WhatWeDo from "../Components/Home/WhatWeDo";

import About from "../Components/Home/About";
import Gallery from "../Components/Gallery/Gallery";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Lanka Nature Walks";
  });

  return (
    <div id="home" className="">
      <Banner_1 />
      <WhatWeDo />
      <Services />
      <Gallery />
      <About />
      <ContactUs />
    </div>
  );
};

export default Home;
