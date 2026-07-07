import ProjectThumbnail from "../ProjectThumbnail.tsx";

function AStarThumbnail() {
  return (
    <ProjectThumbnail
      header={"Chess Engine"}
      pathToBackground={"/assets/chess_engine_imgs/chess-engine-example.png"}
      altImageText={"Bento"}
      flyIn={"left"}
      navigateTo={"chessengine"}
    />
  );
}

export default AStarThumbnail;
