// TODO Maybe look into Bento Grids

import { BentoGrid } from "react-bento";
import ProjectThumbnail from "../components/ProjectThumbnail.tsx";
import "../css/Projects.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import ScrollToTop from "../components/ScrollToTop.tsx";
import { useEffect, useState } from "react";

const bentoItems = [
  {
    id: 1,
    color: "black",
    title: "A* Visualisation",
    element: (
      <ProjectThumbnail
        header={"A* Visualisation"}
        pathToBackground={"src/assets/a_star_imgs/a-star-visualisation.png"}
        altImageText={"Bento"}
        flyIn={"left"}
        navigateTo={"astarvisualisation"}
      />
    ),
    width: 2,
    height: 1,
  },
  {
    id: 2,
    color: "black",
    title: "note-issimo",
    element: (
      <ProjectThumbnail
        header={"Note-issimo"}
        pathToBackground={"src/assets/noteissimo_imgs/note-issimo.png"}
        altImageText={"Bento"}
        flyIn={"right"}
        navigateTo={"noteissimo"}
      />
    ),
    width: 4,
    height: 1,
  },
  {
    id: 3,
    color: "black",
    title: "Raytracing Engine",
    element: (
      <ProjectThumbnail
        header={"Raytracing Engine"}
        pathToBackground={"src/assets/ray_tracer_imgs/ray-tracer.png"}
        altImageText={"Bento"}
        flyIn={"right"}
        navigateTo={"raytracer"}
      />
    ),
    width: 4,
    height: 2,
  },
  {
    id: 4,
    color: "black",
    title: "Frogger",
    element: (
      <ProjectThumbnail
        header={"Frogger"}
        pathToBackground={"src/assets/frogger_imgs/frogger.png"}
        altImageText={'The arcade game "frogger"'}
        flyIn={"right"}
        navigateTo={"frogger"}
      />
    ),
    width: 2,
    height: 2,
  },
  {
    id: 5,
    color: "black",
    title: "Connect-4 MiniMax",
    element: (
      <ProjectThumbnail
        header={"Connect-4 Minimax"}
        pathToBackground={"src/assets/connect_4_imgs/connect-4-minimax.png"}
        altImageText={"Bento"}
        flyIn={"left"}
        navigateTo={"connect4minimax"}
      />
    ),
    width: 3,
    height: 1,
  },
  {
    id: 6,
    color: "black",
    title: "Falling Sand Simulator",
    element: (
      <ProjectThumbnail
        header={"Falling Sand Simulator"}
        pathToBackground={"src/assets/pexels-padrinan-255379.jpg"}
        altImageText={"Bento"}
        flyIn={"right"}
        navigateTo={"fallingsand"}
      />
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
      <ProjectThumbnail
        header={"A* Visualisation"}
        pathToBackground={"src/assets/a_star_imgs/a-star-visualisation.png"}
        altImageText={"Bento"}
        flyIn={"left"}
        navigateTo={"astarvisualisation"}
      />
    ),
    width: 1,
    height: 1,
  },
  {
    id: 2,
    color: "black",
    title: "note-issimo",
    element: (
      <ProjectThumbnail
        header={"Note-issimo"}
        pathToBackground={"src/assets/noteissimo_imgs/note-issimo.png"}
        altImageText={"Bento"}
        flyIn={"right"}
        navigateTo={"noteissimo"}
      />
    ),
    width: 1,
    height: 1,
  },
  {
    id: 3,
    color: "black",
    title: "Raytracing Engine",
    element: (
      <ProjectThumbnail
        header={"Raytracing Engine"}
        pathToBackground={"src/assets/ray_tracer_imgs/ray-tracer.png"}
        altImageText={"Bento"}
        flyIn={"right"}
        navigateTo={"raytracer"}
      />
    ),
    width: 1,
    height: 1,
  },
  {
    id: 4,
    color: "black",
    title: "Frogger",
    element: (
      <ProjectThumbnail
        header={"Frogger"}
        pathToBackground={"src/assets/frogger_imgs/frogger.png"}
        altImageText={'The arcade game "frogger"'}
        flyIn={"right"}
        navigateTo={"frogger"}
      />
    ),
    width: 1,
    height: 1,
  },
  {
    id: 5,
    color: "black",
    title: "Connect-4 MiniMax",
    element: (
      <ProjectThumbnail
        header={"Connect-4 Minimax"}
        pathToBackground={"src/assets/connect_4_imgs/connect-4-minimax.png"}
        altImageText={"Bento"}
        flyIn={"left"}
        navigateTo={"connect4minimax"}
      />
    ),
    width: 1,
    height: 1,
  },
  {
    id: 6,
    color: "black",
    title: "Falling Sand Simulator",
    element: (
      <ProjectThumbnail
        header={"Falling Sand Simulator"}
        pathToBackground={"src/assets/pexels-padrinan-255379.jpg"}
        altImageText={"Bento"}
        flyIn={"right"}
        navigateTo={"fallingsand"}
      />
    ),
    width: 1,
    height: 1,
  },
];

function Projects() {
  // TODO Make this look good on smaller resolutions
  // Shouldn't be bento'd on smaller resolutions

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
