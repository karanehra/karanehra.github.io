import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Careeer from "./Career";
import HomeServer from "./Homeserver";

const router = createBrowserRouter([
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
