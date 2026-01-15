import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = lazy(() => import("./routes/Projects.tsx"));
const AboutMe = lazy(() => import("./routes/AboutMe.tsx"));
const Home = lazy(() => import("./routes/Home.tsx"));

const RayTracerProject = lazy(
    () => import("./project_pages/RayTracerProject.tsx"),
);

const FroggerProject = lazy(() => import("./project_pages/FroggerProject.tsx"));

const NoteissimoProject = lazy(
    () => import("./project_pages/NoteissimoProject.tsx"),
);

const Connect4Project = lazy(
    () => import("./project_pages/Connect4Project.tsx"),
);

const AStarProject = lazy(() => import("./project_pages/AStarProject.tsx"));

const FallingSandProject = lazy(
    () => import("./project_pages/FallingSandProject.tsx"),
);

const SueChefProject = lazy(
    () => import("./project_pages/SueChefProject.tsx"),
);

const CompilerProject = lazy(
    () => import("./project_pages/CompilerProject.tsx"),
);


const PageNotFound = lazy(() => import("./components/PageNotFound.tsx"));

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
                    { path: "suechef", element: <SueChefProject /> },
                    { path: "compiler", element: <CompilerProject /> },
                ],
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Suspense>
            <RouterProvider router={router} />
        </Suspense>
    </StrictMode>,
);
