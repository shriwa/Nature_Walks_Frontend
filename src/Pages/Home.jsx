import React from "react";
import Banner_1 from "../Components/Home/Banner_1";
import Gallery_2 from "../Components/Home/Gallery_2";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Services from "./Services";
import Trekking from "../Components/Home/Trekking";

const Home = () => {
  return (
    <div id="home">
      <Banner_1 />
      <Services />
      <Trekking />
      <Gallery_2 />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Home;
