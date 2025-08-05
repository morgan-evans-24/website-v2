import TechnologyTag from "../components/TechnologyTag.tsx";
import "/src/css/ProjectPage.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop.tsx";

function FroggerProject() {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <div className="project">
        <div className="project-container">
          {MyTypewriter("Frogger")}
          <hr className={"divider"} />
          <div className="image-container">
            <img
              className="project-image"
              src={"/src/assets/frogger_imgs/frogger.png"}
              alt={'A recreation of the classic arcade game "frogger"'}
            ></img>
            <div className="tech-list-div">
              <p className="tech-list-text">Technologies used:</p>
              <ul className="tech-list-list">
                <TechnologyTag variant={"Java"} />
              </ul>
            </div>
          </div>
          <hr className={"divider"} />
          <p>
            As part of my "Developing Maintainable Software" module for my
            second year of university, I had to fix and refactor the arcade game{" "}
            <i>Frogger</i> to make it more maintainable, as well as add some
            features of my own. This involved reimplementing parts of the game
            using various design patterns, as well as ensuring the code was
            covered by high-quality tests using JUnit and Mockito.
          </p>
          <hr className={"divider"} />
          <h3>Model-View-Controller Pattern</h3>
          <p>
            A big part of this coursework was refactoring the game so that it
            was in accordance with the Model-View-Controller (MVC) design
            pattern. MVC helps to split software into smaller, more maintainable
            parts, by separating the responsibilities of the software. This
            helps make the code more understandable and readable overall, as
            future developers only have to understand small parts of code at a
            time.
          </p>
          <p>
            The Model of the MVC is responsible for controlling the data logic
            of the game. This includes things such as the frogs position on the
            board, the users lives remaining, and the current score. The model
            itself should do minimal processing of the data, and should just be
            an object that can be passed around to different objects in order to
            manage the flow of data.
          </p>
          <p>
            The Controller is where the main segment of the logic of the program
            should take place. This helps abstract the inner workings of the
            program away from the other components, only exposing functions
            necessary for the running of the software. This way, there is less
            code that needs to be understood.
          </p>
          <p>
            Finally, the View component controls all the graphical elements of
            the program. This includes drawing the actual scene, as well as
            passing button presses and other user interaction to the controller
            for logic to be handled.
          </p>
          <hr className={"divider"} />
          <h3>Factory Pattern</h3>
          <p>
            The factory pattern abstracts away the need to know how objects are
            created, meaning the class that's creating them just has to input
            parameters such as speed, lane number, and obstacle type. I used
            this to handle the creation of obstacles for the game. Instead of
            having to repeatedly write out the logic for each obstacle I wanted
            to create, I could just call a function I had exposed in the Factory
            class. This ensures the class that calls the functions doesn't have
            to concern itself with the logic of creating the different
            obstacles.
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

export default FroggerProject;
