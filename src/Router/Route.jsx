import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import DefaultLayout from "../Layout/DefaultLayout";
import NotFound from "../Pages/NotFound";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Information from "../Pages/Information";
import Booking from "../Pages/Booking";

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
        path: "/trekking",
        element: <Information />,
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
