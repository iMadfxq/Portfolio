import "./project_card.styles.scss";

import GithubIcon from "../../assets/images/github_icon.svg";
import LinkIcon from "../../assets/images/link_icon.svg";

const ProjectCard = ({ project }) => {
  return (
    <article className="project">
      <div className="project__info">
        <img src={project.imgUrl} alt={`iMadfxq's ${project.title}`} />
        <ul className="project__info--tags">
          {project.tags.map((tag, i) => {
            if (i < 3) {
              return <li key={i}>{tag}</li>;
            }
            return "";
          })}
        </ul>
        <h2>{project.title}</h2>
      </div>
      <div className="project__buttons">
        <a href={project.website} target="_blank">
          <img src={LinkIcon} alt="Link to projects website" />
          Website
        </a>
        <a href={project.github} target="_blank">
          <img src={GithubIcon} alt="Link to projects Github" />
          Github
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
