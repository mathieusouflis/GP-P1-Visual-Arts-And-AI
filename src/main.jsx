import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactLenis } from "lenis/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/homepage.jsx";
import Benchmark from "./Pages/Benchmark.jsx";
import Tutorial from "./Pages/Tutorial.jsx";
import Exploration from "./Pages/Exploration.jsx";
import Research from "./Pages/Research.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/benchmark",
    element: <Benchmark />,
  },
  {
    path: "/tutorial",
    element: <Tutorial />,
  },
  {
    path: "/exploration",
    element: <Exploration />,
  },
  {
    path: "/research",
    element: <Research />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
  </StrictMode>,
);
