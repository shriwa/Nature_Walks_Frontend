import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollButton from "../Components/ScrollButton";
import WhatsAppButton from "../Components/WhatsAppButton";
import Footer_5 from "../Components/Footer/Footer_5";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" mb-10">
        <Navbar />
      </div>
      <div className="flex-grow mt-20 mb-4">
        <Outlet />
        <ScrollButton />
        <WhatsAppButton />
      </div>
      {/* <Footer /> */}
      <Footer_5 />
    </div>
  );
};

export default DefaultLayout;
