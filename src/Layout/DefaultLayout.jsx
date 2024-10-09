import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollButton from "../Components/ScrollButton";
import WhatsAppButton from "../Components/WhatsAppButton";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow mt-20 mb-4">
        <Outlet />
        <ScrollButton />
        <WhatsAppButton />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
