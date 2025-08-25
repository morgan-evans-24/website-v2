import ProjectThumbnail from "../ProjectThumbnail.tsx";

function FallingSandThumbnail() {
  return (
    <ProjectThumbnail
      header={"Falling Sand Simulator"}
      pathToBackground={"/assets/falling_sand_imgs/falling-yellow-sand.png"}
      altImageText={"Bento"}
      flyIn={"right"}
      navigateTo={"fallingsand"}
    />
  );
}

export default FallingSandThumbnail;
