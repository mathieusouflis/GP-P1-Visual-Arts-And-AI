import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactLenis } from "lenis/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Homepage from "./Pages/homepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
  </StrictMode>,
);
