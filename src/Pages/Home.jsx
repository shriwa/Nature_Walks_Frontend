import React from "react";
import Banner_1 from "../Components/Home/Banner_1";
import Gallery_2 from "../Components/Home/Gallery_2";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Services from "../Components/Home/Services";
import WhatWeDo from "../Components/Home/WhatWeDo";

const images = [
  {
    name: "banner 1",
    title: "Title 1",
    description: "Description for slide 1",
    img: "https://example.com/image1.jpg",
    link: "",
  },
  {
    name: "banner 2",
    title: "Title 2",
    description: "Description for slide 2",
    img: "https://example.com/image2.jpg",
    link: "",
  },
  {
    name: "banner 2",
    title: "Title 2",
    description: "Description for slide 2",
    img: "https://example.com/image2.jpg",
    link: "",
  },
  {
    name: "banner 2",
    title: "Title 2",
    description: "Description for slide 2",
    img: "https://example.com/image2.jpg",
    link: "",
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
