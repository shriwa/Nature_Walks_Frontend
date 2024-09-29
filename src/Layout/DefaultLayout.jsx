import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
