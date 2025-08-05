import TechnologyTag from "../components/TechnologyTag.tsx";
import "/src/css/ProjectPage.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop.tsx";

function AStarProject() {
  const navigate = useNavigate();

  return (
    <>
      <title>A* Visualiser</title>
      <ScrollToTop />
      <div className="project">
        <div className="project-container">
          {MyTypewriter("A* Visualisation")}
          <hr className={"divider"} />
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/a_star_imgs/a-star-visualisation.png"}
              alt={
                "The A* algorithm finding a short path from the start point to the end point."
              }
            ></img>
            <div className="tech-list-div">
              <p className="tech-list-text">Technologies used:</p>
              <ul className="tech-list-list">
                <TechnologyTag variant={"Unity"} />
                <TechnologyTag variant={"C#"} />
              </ul>
            </div>
            <div className={"github-div"}>
              <a
                className={"github-button"}
                target="_blank"
                href="https://github.com/morgan-evans-24/A-Star-Visualisation"
              >
                Go to GitHub page
              </a>
            </div>
          </div>
          <hr className={"divider"} />
          <p className="description">
            Using Unity, I created a simple visualisation of the A* algorithm.
            While the A* algorithm itself is fairly simple, I used this project
            to introduce myself to Unity and C#, as I would like to use these
            technologies in the future for different projects.
          </p>
          <p>
            The algorithm works as follows: First we define two points, a start
            and an end point. From the start point, we generate all possible
            paths we can take, then use a heuristic to estimate the distance to
            the end point from our current point on the grid for each of those
            possible paths. We sum this with the number of steps we have taken
            to get to this point so far. This value is known as the f-value, and
            is the score that the A* algorithm uses to decide where to explore
            next. We pick the path with the lowest f-value, and continue down
            that path. We also remember the f-values of the other paths we could
            have taken, and if one of those becomes the new-lowest f-value, we
            backtrack and explore that path. Once we have reached the end point,
            we can follow our path back to the start route (by following the
            preceding cell to each cell on the grid), and we have walked along
            our shortest path.
          </p>
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/a_star_imgs/filled-grid.png"}
              alt={
                "A grid entirely filled with squares, with the shortest path following a snaking pattern."
              }
            ></img>
            <p className={"image-caption"}>
              All sorts of interesting patterns can be achieved with the right
              wall configuration.
            </p>
          </div>
          <p>
            The project allows the user to draw walls on the grid with
            left-click, and erase walls with right-click. These walls will
            interfere with the A* algorithm, causing it to take a different
            path. If the algorithm cannot reach the end point, then no path will
            be drawn.
          </p>
          <div className="image-container">
            <img
              className="project-image"
              src={"/assets/a_star_imgs/no-path.png"}
              alt={
                "A grid where the path is blocked entirely, causing no route to be drawn."
              }
            ></img>
            <p className={"image-caption"}>
              The wall along the diagonal of the grid completely blocks the
              path.
            </p>
          </div>
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

export default AStarProject;
