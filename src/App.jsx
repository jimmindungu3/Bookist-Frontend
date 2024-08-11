import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
