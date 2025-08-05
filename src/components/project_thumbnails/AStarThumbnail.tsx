import ProjectThumbnail from "../ProjectThumbnail.tsx";

function AStarThumbnail() {
  return (
    <ProjectThumbnail
      header={"A* Visualisation"}
      pathToBackground={"/assets/a_star_imgs/a-star-visualisation.png"}
      altImageText={"Bento"}
      flyIn={"left"}
      navigateTo={"astarvisualisation"}
    />
  );
}

export default AStarThumbnail;
