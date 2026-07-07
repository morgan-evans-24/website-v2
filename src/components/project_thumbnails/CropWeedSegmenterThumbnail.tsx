import ProjectThumbnail from "../ProjectThumbnail.tsx";

function AStarThumbnail() {
  return (
    <ProjectThumbnail
      header={"Crop/Weed Segmentation"}
      pathToBackground={"/assets/crop_weed_segmenter_imgs/labelled-mask.png"}
      altImageText={"Bento"}
      flyIn={"right"}
      navigateTo={"cropweedsegmenter"}
    />
  );
}

export default AStarThumbnail;
