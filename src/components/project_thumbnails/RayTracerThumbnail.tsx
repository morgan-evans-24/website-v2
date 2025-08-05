import ProjectThumbnail from "../ProjectThumbnail.tsx";

function RayTracerThumbnail() {
  return (
    <ProjectThumbnail
      header={"Raytracing Engine"}
      pathToBackground={"/assets/ray_tracer_imgs/ray-tracer.png"}
      altImageText={"Bento"}
      flyIn={"right"}
      navigateTo={"raytracer"}
    />
  );
}

export default RayTracerThumbnail;
