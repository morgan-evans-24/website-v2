import ProjectThumbnail from "../ProjectThumbnail.tsx";

function AStarThumbnail() {
  return (
    <ProjectThumbnail
      header={"Woodswalker"}
      pathToBackground={"/assets/woodswalker_imgs/trees.png"}
      altImageText={"Bento"}
      flyIn={"right"}
      navigateTo={"woodswalker"}
    />
  );
}

export default AStarThumbnail;
