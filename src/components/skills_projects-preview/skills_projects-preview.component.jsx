import "./skills_projects-preview.styles.scss";

import { PROJECTS } from "../../data/data.js";

import ProjectCard from "../../components/project_card/project_card.component";
import PlusButton from "../plus_button/plus_button.component";
import { useNavigate } from "react-router";



const SkillsProjectsPreview = () => {
  let latestProjects = PROJECTS.slice(-3);
    
    const toProjects = useNavigate()
  const handleClick = () => {
    toProjects('/projects')
  }
  return (
    <section className="skills__projects">
      <h2>Latest Projects</h2>
      <div className="skills__projects--cards">
        {latestProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <p id="plusButton" onClick={handleClick}>+ More</p>
    </section>
  );
};

export default SkillsProjectsPreview;
