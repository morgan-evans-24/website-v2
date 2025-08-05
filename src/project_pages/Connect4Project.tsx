import TechnologyTag from "../components/TechnologyTag.tsx";
import "/src/css/ProjectPage.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop.tsx";

function Connect4Project() {
  const navigate = useNavigate();

  return (
    <>
      <title>Connect-4 Minimax</title>
      <ScrollToTop />
      <div className="project">
        <div className="project-container">
          {MyTypewriter("Connect-4 Minimax")}
          <hr className={"divider"} />
          <div className="image-container">
            <img
              className="project-image"
              src={"/src/assets/connect_4_imgs/connect-4-minimax.png"}
              alt={
                "An image of a command line version of connect-4, with a minimax agent."
              }
            ></img>
            <div className="tech-list-div">
              <p className="tech-list-text">Technologies used:</p>
              <ul className="tech-list-list">
                <TechnologyTag variant={"Haskell"} />
              </ul>
            </div>
          </div>
          <hr className={"divider"} />
          <p>
            For my "Advanced Functional Programming" module during my second
            year of university, I recreated the board game <i>Connect-4</i>, as
            well as creating a Minimax agent to play the game. The project was
            built in Haskell and is nearly entirely functionally pure, the only
            impure parts being user I/O.
          </p>
          <hr className={"divider"} />
          <h3>The Minimax Algorithm</h3>
          <p>
            The Minimax algorithm is a backtracking algorithm widely used in
            two-player games. The algorithm assumes two players, a minimiser
            trying to get the score as low as possible and a maximiser doing the
            opposite. The algorithm works by assigning all possible moves down
            to a given depth a score, and then backtracks to determine which
            move on the top layer should be played.
          </p>
          <div className="image-container">
            <img
              className="project-image"
              src={"/src/assets/connect_4_imgs/minimax-1.png"}
              alt={"A note-issimo account with multiple notes on it."}
            ></img>
            <p className={"image-caption"}>
              The algorithm assigns each leaf node a score.
            </p>
          </div>
          <div className="image-container">
            <img
              className="project-image"
              src={"/src/assets/connect_4_imgs/minimax-2.png"}
              alt={"A note-issimo account with multiple notes on it."}
            ></img>
            <p className={"image-caption"}>
              It then backtracks to decide which move to make at the top level.
              Maximiser should go left.
            </p>
          </div>
          <p>
            Using Minimax, we can be certain that we are making the best
            possible move with the information we have. The main limitation of
            the Minimax algorithm is that it is very computationally expensive,
            and that the depth the move tree is built to is proportional to the
            AI's skill in the game. This Connect-4 Minimax algorithm can build a
            move tree to a depth of 7.
          </p>
          <hr className={"divider"} />
          <h3>Going forward</h3>
          <p>
            Due to the limitations of this coursework, there were limited
            optimisations I could make to the algorithm. In the future, were I
            to make another Minimax agent, I would introduce ways of pruning the
            game tree to make it a lot faster, allowing it to go to a higher
            depth. For example, Alpha-Beta pruning could be used to trim down
            unnecessary branches of the tree, by removing branches that start
            with a move that would never be played.
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

export default Connect4Project;
