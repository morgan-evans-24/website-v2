import ProjectThumbnail from "../ProjectThumbnail.tsx";

function FroggerThumbnail() {
  return (
    <ProjectThumbnail
      header={"Frogger"}
      pathToBackground={"/assets/frogger_imgs/frogger.png"}
      altImageText={'The arcade game "frogger"'}
      flyIn={"right"}
      navigateTo={"frogger"}
    />
  );
}

export default FroggerThumbnail;
