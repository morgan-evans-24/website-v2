import TechnologyTag from "../components/TechnologyTag.tsx";
import "/src/css/ProjectPage.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop.tsx";

function FallingSandProject() {
  const navigate = useNavigate();

  return (
    <>
      <title>Falling Sand Simulator</title>
      <ScrollToTop />
      <div className="project">
        <div className="project-container">
          {MyTypewriter("Falling Sand Simulator")}
          <hr className={"divider"} />
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/falling_sand_imgs/falling-yellow-sand.png"}
              alt={"An image of a falling sand simulator made in python."}
            ></img>
            <div className="tech-list-div">
              <p className="tech-list-text">Technologies used:</p>
              <ul className="tech-list-list">
                <TechnologyTag variant={"Python"} />
              </ul>
            </div>
              <div className={"github-div"}>
                  <a
                      className={"github-button"}
                      target="_blank"
                      href="https://github.com/morgan-evans-24/Falling-Sand-Simulator"
                  >
                      Go to GitHub page
                  </a>
              </div>
          </div>
          <hr className={"divider"} />
          <p>
            I decided to make this project as a way of testing out pygame, a library for python that I had never used before.
              I have a strong interest in cellular automata and so a falling sand simulator seemed like a good idea to figure out how to create using pygame.
          </p>
            <hr className={"divider"} />
            <h3>Run Flags and Features</h3>
            <p>
                Implemented for the project are a number of flags that the program can be called with that control the behaviour of the program.
            </p>
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/falling_sand_imgs/cli-help-screen.png"}
              alt={"A terminal showing the flags available to the software and their effects."}
            ></img>
            <p className={"image-caption"}>
              Flags give the user more control over the look of the program.
            </p>
          </div>
            <p>
                The flags included in the program include:
                <ul>
                    <li><b>-h, --help</b>, this displays the help screen, common in most CLI tools.</li>
                    <li><b>-c, --cell-color</b>, takes a string as a parameter in the form of a hexadecimal colour code, changes the colour of the sand.</li>
                    <li><b>-r, --rainbow</b>, causes the sand to change colour over time while the left mouse button is clicked.</li>
                    <li><b>-rs, --rainbow-speed</b>, sets the speed at which the colour changes when in rainbow mode.</li>
                    <li><b>-nb, --no-borders</b>, removes the borders from cells.</li>
                </ul>
            </p>
            <p>
                These flags allow the user to control how their simulation looks, and makes the project more flexible. Below are some examples of images generated using various flags.
            </p>

            <div className="image-container">
                <img
                    className="project-image"
                    src={"/assets/falling_sand_imgs/rainbow-sand.png"}
                    alt={"A terminal showing the flags available to the software and their effects."}
                ></img>
                <p className={"image-caption"}>
                    A result generated from running the program with the -r and -nb flags.
                </p>
            </div>

            <div className="image-container">
                <img
                    className="project-image"
                    src={"/assets/falling_sand_imgs/pastel-rainbow-pyramids.png"}
                    alt={"A terminal showing the flags available to the software and their effects."}
                ></img>
                <p className={"image-caption"}>
                    Using the -c and -r flags can create rainbows made up of pastel colours.
                </p>
            </div>
            <hr className={"divider"} />
            <h3>Going Forward</h3>
            <p>
                There are quite a few different features I could implement for this project, should I come back to it in the future.
                <ul>
                    <li><b>Different material types</b> - I think adding different materials to the project would really make this project shine. For example, adding a water material, or perhaps a material that isn't effected by gravity.</li>
                    <li><b>GUI</b> - I think adding a GUI to the program instead of having users operate through CLI flags would make the program more usable overall.</li>
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

export default FallingSandProject;
