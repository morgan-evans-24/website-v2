import ProjectThumbnail from "../ProjectThumbnail.tsx";

function NoteissimoThumbnail() {
  return (
    <ProjectThumbnail
      header={"Note-issimo"}
      pathToBackground={"/assets/noteissimo_imgs/note-issimo.png"}
      altImageText={"Bento"}
      flyIn={"right"}
      navigateTo={"noteissimo"}
    />
  );
}

export default NoteissimoThumbnail;
