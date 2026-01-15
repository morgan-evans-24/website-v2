import TechnologyTag from "../components/TechnologyTag.tsx";
import "/src/css/ProjectPage.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop.tsx";

function SueChefProject() {
    const navigate = useNavigate();

    return (
        <>
            <title>Sue Chef</title>
            <ScrollToTop />
            <div className="project">
                <div className="project-container">
                    {MyTypewriter("Sue Chef Chatbot")}
                    <hr className={"divider"} />
                    <div className="image-container">
                        <img
                            className="project-image"
                            src={"/assets/sue_chef_imgs/sue-intro.png"}
                            alt={
                                "The chatbot 'Sue' introducing itself to the user."
                            }
                        ></img>
                        <div className="tech-list-div">
                            <p className="tech-list-text">Technologies used:</p>
                            <ul className="tech-list-list">
                                <TechnologyTag variant={"Python"} />
                            </ul>
                        </div>
                    </div>
                    <hr className={"divider"} />
                    <p>
                        <i>Sue</i> is a chatbot I created as the coursework for my human-AI interaction module during my
                        third year at university. The chatbot is made with the goal of simplifying kitchen management,
                        allowing users to:
                        <ul>
                            <li>Manage a virtual pantry</li>
                            <li>Manage a recipe book that the user can add custom recipes to</li>
                            <li>Suggest meals for the user to make, given the ingredients in their pantry</li>
                            <li>Log meals they make, automatically removing the required ingredients from the pantry</li>
                            <li>Make smalltalk with the chatbot, such as the chatbot telling them jokes, the weather,
                            and general culinary knowledge</li>
                        </ul>
                        As the goal of the chatbot was to be as user-friendly as possible, I employed many conversational
                        user interface (CUI) design principles throughout this coursework, as well as user-testing to
                        improve the chatbot based off my testers feedback.
                    </p>
                    <p>
                        The chatbot understands the user by converting the user's input into a bag-of-words representation.
                        Then, the representation is compared with labelled training data using cosine similarity. The
                        label associated with the training datapoint with the highest similarity is the action the
                        chatbot will take.
                    </p>
                    <div className="image-container">
                        <img
                            className="project-image"
                            src={"/assets/sue_chef_imgs/bow-demo.png"}
                            alt={
                                "The process of converting an input string to a bag-of-words representation."
                            }
                        ></img>
                        <p className={"image-caption"}>
                            Now the input has been converted to a vector, we can compare it to the training data.
                        </p>
                    </div>
                    <p>
                        A large part of the module was more focused on the CUI design of our chatbots.
                        A good CUI should make the chatbot transparent and easy to use for new users, while also not being
                        too overbearing for more experienced users. For example, confirmations are an important part of
                        CUI design. Confirmations are how the chatbot informs the user of what it's doing and whether
                        its correct. They can be explicit, for example "Are you sure you want to quit?", or implicit such
                        as "Sure! I will add 150ml of milk to your pantry!".
                    </p>
                    <p>
                        A confirmation commonly used by Sue is three-tier confidence. This involves determining the chatbot's
                        actions based off of it's confidence that it is correct about the user's intent. For example,
                        if the chatbot is 80% sure that it is correct, it may continue with the action. However, if the chatbot is
                        uncertain, it may ask the user to explicitly confirm, or even ask the user to repeat themselves or
                        rephrase their request.
                    </p>
                    <div className="image-container">
                        <img
                            className="project-image"
                            src={"/assets/sue_chef_imgs/spelling-err-confirm.png"}
                            alt={
                                "An example of Sue using a three-tier confidence system to manage spelling errors."
                            }
                        ></img>
                        <p className={"image-caption"}>
                            The chatbot uses three-tiered confidence to manage situations such as spelling errors.
                        </p>
                    </div>
                    <p>
                        Overall, this coursework was very interesting. Focusing more on the design of the CUI as opposed
                        to the more technical side of the implementation was a refreshing change from my other,
                        more programming focused modules.
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

export default SueChefProject;
