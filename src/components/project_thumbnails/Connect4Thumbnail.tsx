import ProjectThumbnail from "../ProjectThumbnail.tsx";

function Connect4Thumbnail() {
  return (
    <ProjectThumbnail
      header={"Connect-4 Minimax"}
      pathToBackground={"/assets/connect_4_imgs/connect-4-minimax.png"}
      altImageText={"Bento"}
      flyIn={"left"}
      navigateTo={"connect4minimax"}
    />
  );
}

export default Connect4Thumbnail;
