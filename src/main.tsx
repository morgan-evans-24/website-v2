import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout.tsx";
import Projects from "./routes/Projects.tsx";
import AboutMe from "./routes/AboutMe.tsx";
import Home from "./routes/Home.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <Home/>},
      {path: "aboutme", element: <AboutMe/>},
      {path: "projects", element: <Projects/>},

    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
