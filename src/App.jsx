import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./Router/Route";

function App() {
  return (
    <div className="">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
