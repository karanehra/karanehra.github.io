import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {  createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Careeer from "./Career";
import HomeServer from "./Homeserver";
import DevLogs from "./DevLogs";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/career",
    element: <Careeer />,
  },
  {
    path: "/homeserver",
    element: <HomeServer />,
  },
  {
    path: "/devlogs",
    element: <DevLogs />,
  },
  {
    path: "/devlogs/:id",
    element: <DevLogs />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals(console.log);
