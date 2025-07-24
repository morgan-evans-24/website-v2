import "../css/ProjectThumbnail.css";

interface Props {
  pathToBackground: string;
  altImageText: string;
  header: string;
}

function ProjectThumbnail(props: Props) {
  return (
    <div className="project-thumbnail">
      <img
        className="project-thumbnail-img"
        src={props.pathToBackground}
        alt={props.altImageText}
      />
      <div className="header-background">
        <h1>{props.header}</h1>
      </div>
    </div>
  );
}

export default ProjectThumbnail;
