import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import Booking from "./pages/Booking";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/create-event", element: <CreateEvent /> },
  { path: "/book-event", element: <Booking /> }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
