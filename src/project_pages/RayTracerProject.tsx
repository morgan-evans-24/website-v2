import TechnologyTag from "../components/TechnologyTag.tsx";
import "/src/css/ProjectPage.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop.tsx";

function RayTracerProject() {
  const navigate = useNavigate();

  return (
    <>
      <title>Raytracing Engine</title>
      <ScrollToTop />
      <div className="project">
        <div className="project-container">
          {MyTypewriter("Raytracing Engine")}
          <hr className={"divider"} />
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/ray_tracer_imgs/ray-tracer.png"}
              alt={"A raytraced scene including spheres of varying materials."}
            ></img>
            <div className="tech-list-div">
              <p className="tech-list-text">Technologies used:</p>
              <ul className="tech-list-list">
                <TechnologyTag variant={"C++"} />
              </ul>
            </div>
          </div>
          <hr className={"divider"} />
          <p>
            For this project, I implemented a Ray Tracing engine in C++. I found
            this project really interesting as it was my introduction to C++ and
            also opened my eyes to a far more mathematical style of programming.
            I really enjoyed learning about the models I used to simulate the
            light rays, and I thought the project produced some pretty stunning
            visuals by the end.
          </p>
          <p>
            The ray tracer works by simulating a 3D virtual environment,
            complete with spheres and a camera. The camera's viewport is split
            into segments, with each segment representing a pixel of our final
            image. The camera emits rays that move through each segment of the
            viewport, and then collide with objects in the scene. The material
            the ray collides with dictates its behaviour. Each segment has
            several rays fired at it with each ray given a random offset, and
            the segments final colour is set to the average colour between all
            the fired rays. This gives us the effect of anti-aliasing, giving us
            a far smoother image.
          </p>
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/ray_tracer_imgs/no-anti-aliasing.png"}
              alt={'A raytraced scene without anti-aliasing, showing "jaggies"'}
            ></img>
            <p className={"image-caption"}>
              The ray tracer without anti-aliasing, causing "jaggies".
            </p>
          </div>
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/ray_tracer_imgs/anti-aliasing.png"}
              alt={'A raytraced scene with anti-aliasing, without "jaggies"!'}
            ></img>
            <p className={"image-caption"}>
              We take each pixel's colour to be the average of the colours
              around it. No more jaggies!
            </p>
          </div>
          <p>
            The ray tracer allows for 3 material types: lambertians, metals, and
            dielectrics.
          </p>
          <hr className={"divider"} />
          <h3>Lambertians</h3>
          <p>
            Lambertian materials describe materials that appear matte. These
            materials appear matte because as light rays hit them, they are
            reflected almost entirely randomly. These were the first material I
            implemented, as they are the most simple to start with.
          </p>
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/ray_tracer_imgs/lambertian.png"}
              alt={"A raytraced lambertian sphere"}
            ></img>
            <p className={"image-caption"}>
              Lambertians give smooth, almost fuzzy, looking objects.
            </p>
          </div>
          <hr className={"divider"} />
          <h3>Metals</h3>
          <p>
            Metals materials are materials that reflect a given quantity of
            light. They aren't too complex, and so were the second material I
            implemented. Metal materials have a colour, like a lambertian, as
            well as a fuzziness. When a light ray hits a metal, it is reflected
            along the surface normal, and then the reflected ray is deflected by
            an amount proportional to the fuzziness of the metal.
          </p>
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/ray_tracer_imgs/metal-no-fuzz.png"}
              alt={"A raytraced polished metal sphere"}
            ></img>
            <p className={"image-caption"}>
              A low fuzziness value gives the metal a mirror sheen.
            </p>
          </div>
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/ray_tracer_imgs/metal-fuzz.png"}
              alt={"A raytraced brushed metal sphere"}
            ></img>
            <p className={"image-caption"}>
              A high fuzziness makes the metal look more brushed.
            </p>
          </div>
          <hr className={"divider"} />
          <h3>Dielectrics</h3>
          <p>
            Dielectrics are materials that both reflect and refract light. These
            include materials such as water, glass, and air. This was definitely
            the most difficult material to implement, as there was a lot of
            complex mathematics detailing how light behaves inside different
            materials. Dielectrics, unlike metals and lambertians, don't have a
            colour. They instead have a refractive index. The refractive index
            of a dielectric controls how much light refracts upon moving through
            the material. Using this, we can make glass orbs that refract the
            light moving through a material. The light that hits the top half of
            the sphere is bent downwards towards the center of the sphere, and
            the light hitting the bottom half is bent upwards towards the
            center. This effectively flips the image in the sphere.
          </p>
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/ray_tracer_imgs/glass.png"}
              alt={"A raytraced glass sphere"}
            ></img>
            <p className={"image-caption"}>
              The glass orb flips the image behind it.
            </p>
          </div>
          <p>
            An interesting thing to note is that the glass orb has no shadow,
            which is actually excepted behaviour for a scene with diffuse
            lighting like this. We don't often see glass orbs in real life, so
            the scene above might look a bit odd.
          </p>
          <p>
            As the glass is transparent, we can make some really interesting
            looking effects. For example, a glass sphere with an air bubble
            inside it. I had to change the angle the photo was taken from, as
            well as add a background object, to properly show the effect.
          </p>
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/ray_tracer_imgs/glass-air-bubble.png"}
              alt={
                "A raytraced glass sphere with an air bubble inside it, in-front of a cyan lambertian sphere"
              }
            ></img>
            <p className={"image-caption"}>
              The air bubble stops the image from flipping in the sphere.
            </p>
          </div>
          <hr className={"divider"} />
          <h3>Going Forward</h3>
          <p>
            If I were to continue or redo this project at any point, there are a
            few things I would like to add to it to make the project more
            useable and accurate.
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <b>Rendering quadrilaterals</b> - Currently the only object I
                can render is a sphere, which is nice for learning how
                raytracing works, but not too useful.
              </li>
              <li>
                <b>Lighting system</b> - Currently, the scene isn't lit from a
                light source at all. The shadows seen in the images above are
                caused by the bouncing rays losing some of their colour against
                what they bounce off of. It would be good to add a proper
                lighting system, as I would be able to make some really
                interesting contrasts in lighting.
              </li>
              <li>
                <b>Optimisations</b> - At the moment, the ray tracer takes about
                3 minutes to render on its highest setting. It would be great if
                I could make a real-time renderer one day.
              </li>
            </ul>
          </p>
          <button
            className="back-button"
            onClick={() => {
              navigate("/projects");
            }}
          >
            Back to all projects
          </button>
        </div>
      </div>
    </>
  );
}

export default RayTracerProject;
