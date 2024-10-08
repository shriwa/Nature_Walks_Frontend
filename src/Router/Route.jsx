import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";
import DefaultLayout from "../Layout/DefaultLayout";
import NotFound from "../Pages/NotFound";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Booking from "../Pages/Booking";
import TrekkingAndHikking from "../Pages/Services/TrekkingAndHikking";
import Cuisine from "../Pages/Services/Cuisine";
import TukTuk from "../Pages/Services/TukTuk";
import Services from "../Components/Home/Services";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/trekking&hiking",
        element: <TrekkingAndHikking />,
      },
      {
        path: "/cuisine",
        element: <Cuisine />,
      },
      {
        path: "/tuktuk",
        element: <TukTuk />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default Router;
