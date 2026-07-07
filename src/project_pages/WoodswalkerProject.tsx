import TechnologyTag from "../components/TechnologyTag.tsx";
import "/src/css/ProjectPage.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop.tsx";

function WoodswalkerProject() {
    const navigate = useNavigate();

    return (
        <>
            <title>Woodswalker</title>
            <ScrollToTop />
            <div className="project">
                <div className="project-container">
                    {MyTypewriter("Woodswalker")}
                    <hr className={"divider"} />
                    <div className="image-container">
                        <img
                            className="project-image"
                            src={"/assets/woodswalker_imgs/ghost.png"}
                            alt={
                                "A dark forest scene with a ghost haunting the player."
                            }
                        ></img>
                        <div className="tech-list-div">
                            <p className="tech-list-text">Technologies used:</p>
                            <ul className="tech-list-list">
                                <TechnologyTag variant={"C"} />
                                <TechnologyTag variant={"C++"} />
                                <TechnologyTag variant={"OpenGL"} />
                            </ul>
                        </div>
                    </div>
                    <hr className={"divider"} />
                    <p>
                        As part of my computer graphics coursework, I had to create a graphics scene using OpenGL. I
                        decided to create a dark, foggy forest scene inspired by the <i>Slenderman</i> and
                        <i> Silent Hill</i> franchises. For the coursework, I used many different computer graphics and
                        procedural generation techniques to make an immersive, eerie scene.
                    </p>
                    <hr className={"divider"} />
                    <h3>Phong Lighting</h3>
                    <p>
                        <i>Phong lighting</i> is a method that has underpinned computer graphics lighting through the
                        last fifty years. While physics-based rendering has taken over most of high-end graphics today,
                        realistic lighting can still be achieved using Phong.
                    </p>

                    <p>
                        Phong lighting is made up of three main components: ambient, diffuse and specular.
                    </p>
                    <p>
                        The ambient term causes all objects in the scene to be lit by a small amount of ambient light.
                        This mimics global illumination from factors such as reflection off objects in the scene.
                    </p>
                    <p>
                        The diffuse term models light that is scattered equally in all directions when light hits a
                        rough surface. It makes surfaces appear brighter when directly facing a light source and darker
                        when they turn away.
                    </p>
                    <p>
                        Finally, the specular term models light that is reflected towards the viewer. It causes bright
                        spots on objects making them look shiny.
                    </p>
                    <hr className={"divider"} />
                    <h3>L-System Trees</h3>
                    <p>
                        <i>L-systems</i> are a method of procedurally generating plant-like structures. The core of the idea
                        is to create a grammar that is iteratively applied to a start symbol. Once a set number of
                        iterations has been met, each grammar symbol in the final string is mapped to a structure in
                        the tree. To create more natural looking trees, I created my grammar to have multiple rules per
                        symbol, where the parser would pick what rule to apply based off random chance. This had the result
                        of creating more random looking, unique trees.
                    </p>
                    <div className="image-container">
                        <img
                            className="project-image"
                            src={"/assets/woodswalker_imgs/trees.png"}
                            alt={
                                "A forest of trees made from L-systems."
                            }
                        ></img>
                        <p className={"image-caption"}>
                            L-systems are able to produce unique, random trees.
                        </p>
                    </div>
                    <hr className={"divider"} />
                    <h3>Bitmap Fonts</h3>
                    <p>
                        <i>Bitmap fonts</i> are used for all the text rendering of the scene. A bitmap font stores all
                        available characters within a single texture. To render a single character, we create a quad,
                        and apply the texture. Writing the correct character to the quad is done by using the
                        UV-coordinates that map to the character on the bitmap font. By doing this over multiple quads,
                        complete words and sentences can be displayed.
                    </p>
                    <div className="image-container">
                        <img
                            className="project-image"
                            src={"/assets/woodswalker_imgs/instructions.png"}
                            alt={
                                "The instructions shown to players at the start of the game, rendered using bitmap fonts."
                            }
                        ></img>
                        <p className={"image-caption"}>
                            The instructions shown to the player at the start of the game, rendered using bitmap fonts.
                        </p>
                    </div>
                    <hr className={"divider"} />
                    <h3>Summary</h3>
                    <p>
                        My goal for <i>Woodswalker</i> was to create a tense, atmospheric forest scene using computer
                        graphics techniques. By combining procedural generation techniques, along with more classical
                        graphics algorithms, I built a strong horror experience while deepening my understanding of
                        computer graphics.
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

export default WoodswalkerProject;
