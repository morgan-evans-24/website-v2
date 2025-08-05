import ProjectThumbnail from "../ProjectThumbnail.tsx";

function FallingSandThumbnail() {
  return (
    <ProjectThumbnail
      header={"Falling Sand Simulator"}
      pathToBackground={"/assets/pexels-padrinan-255379.jpg"}
      altImageText={"Bento"}
      flyIn={"right"}
      navigateTo={"fallingsand"}
    />
  );
}

export default FallingSandThumbnail;
