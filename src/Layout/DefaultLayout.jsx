import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ScrollButton from "../Components/ScrollButton";
import WhatsAppButton from "../Components/WhatsAppButton";
import Footer from "../Components/Footer/Footer";

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
      <Footer />
    </div>
  );
};

export default DefaultLayout;
