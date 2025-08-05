import "../css/AboutMe.css";
import MyTypewriter from "../components/MyTypewriter.tsx";
import { useEffect, useState } from "react";

function AboutMe() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile === null) {
      return;
    }

    const elements = document.querySelectorAll("img");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <>
      <title>About Me</title>
      <div className="align-center-container">
        <div className="My-Main-Content">
          {isMobile ? null : <hr className={"divider"} />}
          <div className="hero-container">
            {isMobile ? null : (
              <img
                className="aboutme-image img-fade-in"
                src="/assets/me.jpg"
                alt="A picture of Morgan Evans."
              />
            )}
            <div>
              {MyTypewriter("My Story")}
              <p className={"header-subtext"}>
                <i>Student - Computer Scientist</i>
              </p>
              <p>
                I'm an aspiring computer scientist with interests ranging from
                web design to cybersecurity. I enjoy exploring new areas of the
                field and am always eager to build new and interesting projects.
              </p>
              <p>
                Outside of academics, I play the violin at a grade 5 (ABRSM)
                level and enjoy painting Warhammer miniatures. It is a good way
                to express my creativity, and spend quality time with friends.
              </p>
              <p>
                I am currently searching for a year in industry placement for
                the 2026/2027 academic year. I would love to do my placement as
                a software engineer, however, I believe any placement would be
                beneficial as it would broaden my knowledge of different fields
                in computer science.
              </p>
            </div>
            {isMobile ? (
              <img
                className="aboutme-image img-fade-in"
                src="/assets/me.jpg"
                alt="A picture of Morgan Evans"
              />
            ) : null}
          </div>
          <hr className={"divider"} />
          <div className="hero-container">
            <div>
              {MyTypewriter("My Education")}
              <p className={"header-subtext"}>
                <i>Computer Science - University of Nottingham</i>
              </p>
              <p>
                I'm currently studying at the University of Nottingham for a
                Masters's degree with a placement year in Computer Science
                (graduating in 2028).
              </p>
              <p>
                During my first year at university, I tried my best to meet new
                people on my course, as well as take part in events like
                hackathons which really helped me feel at home in Nottingham.
              </p>
              <p>
                During my second year, I achieved an average of 78% across all
                my modules, and was the team leader of eight software developers
                for our year-long group project, which we achieved a grade of
                84% in.
              </p>
            </div>

            <img
              className="aboutme-image img-fade-in"
              src="/assets/nottingham-trent-building.jpg"
              alt="A picture of the University of Nottingham Trent building."
            />
          </div>
          <hr className={"divider"} />
          <div className="hero-container">
            {isMobile ? null : (
              <div className={"img-wrapper"}>
                <img
                  className="code-snippet img-fade-in"
                  src="/assets/code.png"
                  alt="A picture of some code from my A* Visualiser project."
                />
              </div>
            )}

            <div>
              {MyTypewriter("My Experience")}
              <p className={"header-subtext"}>
                <i>Programming Projects</i>
              </p>
              <p>
                I've worked on a wide range of projects throughout my time
                studying computer science - from Minimax algorithms to ray
                tracing. I am always working on something new, so be sure to
                check out the '<a href={"/projects"}>My Projects</a>' page
                regularly.
              </p>
            </div>
            {isMobile ? (
              <div className={"img-wrapper"}>
                <img
                  className="code-snippet img-fade-in"
                  src="/assets/code.png"
                  alt="A picture of some code from my A* Visualiser project."
                />
              </div>
            ) : null}
          </div>
          {isMobile ? null : <hr className={"divider"} />}
        </div>
      </div>
    </>
  );
}

export default AboutMe;
