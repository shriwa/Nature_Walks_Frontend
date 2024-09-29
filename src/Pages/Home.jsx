import React from "react";
import Banner_1 from "../Components/Home/Banner_1";
import Gallery_1 from "../Components/Home/Gallery_1";
import Gallery_2 from "../Components/Home/Gallery_2";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import WhyUs from "../Components/WhyUs";

const Home = () => {
  return (
    <div id="home">
      <Banner_1 />
      <Gallery_1 />
      <AboutUs />
      <WhyUs />
      <ContactUs />
    </div>
  );
};

export default Home;
