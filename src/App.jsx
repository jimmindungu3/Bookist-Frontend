import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/create-event", element: <CreateEvent /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
