import BentoGrid from "../components/BentoGrid";
import "../css/Projects.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import ScrollToTop from "../components/ScrollToTop.tsx";
import { lazy, Suspense, useEffect, useState } from "react";

const LazyAStarThumbnail = lazy(
  () => import("../components/project_thumbnails/AStarThumbnail.tsx"),
);
const LazyConnect4Thumbnail = lazy(
  () => import("../components/project_thumbnails/Connect4Thumbnail.tsx"),
);
const LazyFallingSandThumbnail = lazy(
  () => import("../components/project_thumbnails/FallingSandThumbnail.tsx"),
);
const LazyFroggerThumbnail = lazy(
  () => import("../components/project_thumbnails/FroggerThumbnail.tsx"),
);
const LazyNoteissimoThumbnail = lazy(
  () => import("../components/project_thumbnails/NoteissimoThumbnail.tsx"),
);
const LazyRayTracerThumbnail = lazy(
  () => import("../components/project_thumbnails/RayTracerThumbnail.tsx"),
);

const bentoItems = [
  {
    id: 1,
    color: "black",
    title: "A* Visualisation",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAStarThumbnail />
      </Suspense>
    ),
    width: 2,
    height: 1,
  },
  {
    id: 2,
    color: "black",
    title: "note-issimo",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyNoteissimoThumbnail />
      </Suspense>
    ),
    width: 4,
    height: 1,
  },
  {
    id: 3,
    color: "black",
    title: "Raytracing Engine",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyRayTracerThumbnail />
      </Suspense>
    ),
    width: 4,
    height: 2,
  },
  {
    id: 4,
    color: "black",
    title: "Frogger",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFroggerThumbnail />
      </Suspense>
    ),
    width: 2,
    height: 2,
  },
  {
    id: 5,
    color: "black",
    title: "Connect-4 MiniMax",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyConnect4Thumbnail />
      </Suspense>
    ),
    width: 3,
    height: 1,
  },
  {
    id: 6,
    color: "black",
    title: "Falling Sand Simulator",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFallingSandThumbnail />
      </Suspense>
    ),
    width: 3,
    height: 1,
  },
];

const bentoItemsMobile = [
  {
    id: 1,
    color: "black",
    title: "A* Visualisation",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAStarThumbnail />
      </Suspense>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 2,
    color: "black",
    title: "note-issimo",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyNoteissimoThumbnail />
      </Suspense>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 3,
    color: "black",
    title: "Raytracing Engine",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyRayTracerThumbnail />
      </Suspense>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 4,
    color: "black",
    title: "Frogger",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFroggerThumbnail />
      </Suspense>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 5,
    color: "black",
    title: "Connect-4 MiniMax",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyConnect4Thumbnail />
      </Suspense>
    ),
    width: 1,
    height: 1,
  },
  {
    id: 6,
    color: "black",
    title: "Falling Sand Simulator",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFallingSandThumbnail />
      </Suspense>
    ),
    width: 1,
    height: 1,
  },
];

function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      <title>My Projects</title>
      <ScrollToTop />
      <div className={"projects-page"}>
        <div className={"content-container"}>
          <div className={"header-container"}>
            {MyTypewriter("My Projects")}
          </div>
          <p className={"header-subtext"}>
            Below is a compilation of some of the biggest projects I have worked
            on. This includes projects completed in my own time and during my
            time at University. Click on a project to learn more!
          </p>
          <hr className={"divider"} />
          <BentoGrid
            gridCols={isMobile ? 1 : 6}
            rowHeight={350}
            items={isMobile ? bentoItemsMobile : bentoItems}
            classNames={{
              container: "container",
              elementContainer: "element-container",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
