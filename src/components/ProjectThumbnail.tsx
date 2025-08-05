import "../css/ProjectThumbnail.css";
import { type RefObject, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

interface Props {
  pathToBackground: string;
  altImageText: string;
  header: string;
  flyIn: "left" | "right";
  navigateTo: string;
}

function ProjectThumbnail(props: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll(".project-thumbnail");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const headerRef: RefObject<HTMLDivElement> = useRef(null!);

  return (
    <div
      className={
        "project-thumbnail " +
        (props.flyIn === "left" ? " fly-in-left" : "fly-in-right")
      }
      onClick={() => {
        navigate("/projects/" + props.navigateTo);
      }}
      onMouseOver={() => {
        headerRef.current.style.backgroundColor = "#A4508B";
      }}
      onMouseOut={() => {
        headerRef.current.style.backgroundColor = "#2b3035";
      }}
    >
      <img
        className="project-thumbnail-img"
        loading={"lazy"}
        src={props.pathToBackground}
        alt={props.altImageText}
      />
      <div className="header-background" ref={headerRef}>
        <h1>{props.header}</h1>
      </div>
    </div>
  );
}

export default ProjectThumbnail;
