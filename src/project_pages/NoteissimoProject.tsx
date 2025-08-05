import TechnologyTag from "../components/TechnologyTag.tsx";
import "/src/css/ProjectPage.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop.tsx";

function NoteissimoProject() {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <div className="project">
        <div className="project-container">
          {MyTypewriter("Note-issimo")}
          <hr className={"divider"} />
          <div className="image-container">
            <img
              className="project-image"
              src={"/src/assets/noteissimo_imgs/note-issimo.png"}
              alt={"The main page of a note taking app called note-issimo."}
            ></img>
            <div className="tech-list-div">
              <p className="tech-list-text">Technologies used:</p>
              <ul className="tech-list-list">
                <TechnologyTag variant={"React"} />
                <TechnologyTag variant={"TypeScript/JavaScript"} />
              </ul>
            </div>
            <div className={"github-div"}>
              <a
                className={"github-button"}
                target="_blank"
                href="https://github.com/morgan-evans-24/Note-issimo"
              >
                Go to GitHub page
              </a>
            </div>
          </div>
          <hr className={"divider"} />
          <p className="description">
            As an introduction to React, I created a markdown note-taking app.
            The app allows users to create and log into an account, and once
            logged in see their previously taken notes, as well as create new
            ones.
          </p>
          <div className="image-container">
            <img
              className="project-image"
              src={"/src/assets/noteissimo_imgs/login.png"}
              alt={
                "The login page for a note-taking webapp called note-issimo."
              }
            ></img>
            <p className={"image-caption"}>
              The login page for Note-issimo, create an account or log in to an
              existing one.
            </p>
          </div>
          <p>
            Note-issimo's most useful feature is its ability to take markdown
            notes. Once logged in and having selected a note, users can choose
            between 'read' and 'edit' mode. In edit mode, the user and input raw
            markdown, and in read mode, can see their markdown in its rendered
            format.
          </p>
          <div className="image-container">
            <img
              className="project-image"
              src={"/src/assets/noteissimo_imgs/fresh-account.png"}
              alt={"A note-issimo account with no notes on it."}
            ></img>
            <p className={"image-caption"}>
              This is the page users see when logging in for the first time.
            </p>
          </div>
          <div className="image-container">
            <img
              className="project-image"
              src={"/src/assets/noteissimo_imgs/account-with-notes.png"}
              alt={"A note-issimo account with multiple notes on it."}
            ></img>
            <p className={"image-caption"}>
              This is the same page after they have added notes to their
              account.
            </p>
          </div>
          <hr className={"divider"} />
          <h3>Going Forward</h3>
          <p>
            Were I to update this project in the future, I would add additional
            functionality to the markdown features of the app, for example, I
            think a good improvement would be letting the user add their own
            images to notes. Also, I would make the app more mobile friendly, as
            currently, a lot of the UI elements don't scale correctly on mobile
            devices. Finally, adding support for languages like LaTeX would be a
            nice feature to have.
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

export default NoteissimoProject;
