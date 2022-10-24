import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>

    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="btn-upload"
      >
        GitHub
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="btn-upload"
      >
        {/* <a
          aria-label="live preview"
          className="btn-upload"
          href={project.livePreview}
        >
          Live Preview
        </a> */}
        {/* <LaunchIcon /> */}
        View Project
      </a>
    )}
  </div>
);

export default ProjectContainer;
