// A container for all of the personal projects
// TODO Maybe look into Bento Grids

import { BentoGrid } from "react-bento";
import "../css/Projects.css";
import ProjectThumbnail from "../components/ProjectThumbnail.tsx";

const bentoItems = [
  {
    id: 1,
    color: "black",
    title: "Bento",
    element: (
      <ProjectThumbnail
        header={"Bento"}
        pathToBackground={"src/assets/pexels-padrinan-255379.jpg"}
        altImageText={"Bento"}
      />
    ),
    width: 1,
    height: 2,
  },
  {
    id: 2,
    color: "black",
    title: "BAAAn",
    element: <p>asdasdasd</p>,
    width: 2,
    height: 2,
  },
  {
    id: 3,
    color: "black",
    title: "BEEn",
    element: <p>goog</p>,
    width: 3,
    height: 2,
  },
];

function Projects() {
  return (
    <BentoGrid
      gridCols={3}
      rowHeight={200}
      items={bentoItems}
      classNames={{
        container: "container",
        elementContainer: "element-container",
      }}
    />
  );
}

export default Projects;
