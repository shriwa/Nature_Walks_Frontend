import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./Router/Route";
import React from "react";

function App() {
  return (
    <div className="">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
