import TechnologyTag from "../components/TechnologyTag.tsx";
import "/src/css/ProjectPage.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop.tsx";

function CompilerProject() {
    const navigate = useNavigate();

    return (
        <>
            <title>Nottran Compiler</title>
            <ScrollToTop />
            <div className="project">
                <div className="project-container">
                    {MyTypewriter("Nottran Compiler")}
                    <hr className={"divider"} />
                    <div className="image-container">
                        <img
                            className="project-image"
                            src={"/assets/compiler_imgs/class-1-program.png"}
                            alt={
                                "A test program written in Nottran"
                            }
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
                        As part of my third-year compilers module at university, I created a compiler for a
                        language called Nottran (a subset of Fortran). The coursework consisted of using a
                        popular tool for writing grammars called ANTLR, creating the front-end, and creating
                        the backend.
                    </p>
                    <div className="image-container">
                        <img
                            className="project-image"
                            src={"/assets/compiler_imgs/antlr.png"}
                            alt={
                                "Part of an ANTLR grammar file detailing the syntax of basic program blocks."
                            }
                        ></img>
                        <p className={"image-caption"}>
                            ANTLR provides a quick and easy way to create grammars.
                        </p>
                    </div>
                    <p>
                        The first part of the front end is the lexer and parser, which convert the input string
                        into the necessary tokens that can be understood by the compiler. Then, the tokens are used to
                        create an abstract syntax tree (AST). The AST is an intermediate representation of the program
                        and is passed around the compiler to generate the final program. Finally, the AST is processed
                        by a type checker that deduces the type of all the expressions in the program and confirms
                        the program is type correct.
                    </p>
                    <div className="image-container">
                        <img
                            className="project-image"
                            src={"/assets/compiler_imgs/derived-types.png"}
                            alt={
                                "Nottran derived types."
                            }
                        ></img>
                        <p className={"image-caption"}>
                            Nottran supports functions, basic I/O, and derived types.
                        </p>
                    </div>
                    <p>
                        The backend starts by converting the AST into a lower-level intermediate representation, more
                        akin to the target language. The final translation is from this lower-level representation into
                        the source language, which is binary code for the <i>triangle abstract machine</i> as laid out
                        <a href="https://www.cs.unc.edu/~prins/Classes/520/Programming-Language-Processors-in-Java_Watt-Brown.pdf?"> here</a>.
                    </p>
                    <p>
                        This was a really interesting coursework overall, having learnt about how complex tools that
                        are often taken for granted can be. To improve this project, I would add optimisations to the
                        compiler using data-flow analysis and scalar optimisation.
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

export default CompilerProject;
