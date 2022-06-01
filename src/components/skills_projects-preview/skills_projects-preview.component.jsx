import "./skills_projects-preview.styles.scss";

import { PROJECTS } from "../../data/data.js";

import ProjectCard from "../../components/project_card/project_card.component";

const SkillsProjects = () => {
  let latestProjects = PROJECTS.slice(-3);

  return (
    <section className="skills__projects">
      <h2>Latest Projects</h2>
      <div className="skills__projects--cards">
        {latestProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default SkillsProjects;
