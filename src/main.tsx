import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout.tsx";
import Projects from "./routes/Projects.tsx";
import AboutMe from "./routes/AboutMe.tsx";
import Home from "./routes/Home.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import RayTracerProject from "./project_pages/RayTracerProject.tsx";
import FroggerProject from "./project_pages/FroggerProject.tsx";
import NoteissimoProject from "./project_pages/NoteissimoProject.tsx";
import Connect4Project from "./project_pages/Connect4Project.tsx";
import AStarProject from "./project_pages/AStarProject.tsx";
import FallingSandProject from "./project_pages/FallingSandProject.tsx";
import PageNotFound from "./components/PageNotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "aboutme", element: <AboutMe /> },
      {
        path: "projects",
        children: [
          { index: true, element: <Projects /> },
          { path: "raytracer", element: <RayTracerProject /> },
          { path: "frogger", element: <FroggerProject /> },
          { path: "noteissimo", element: <NoteissimoProject /> },
          { path: "connect4minimax", element: <Connect4Project /> },
          { path: "astarvisualisation", element: <AStarProject /> },
          { path: "fallingsand", element: <FallingSandProject /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
