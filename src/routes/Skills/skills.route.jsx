import "./skills.styles.scss";

import SkillsProjects from "../../components/skills_projects-preview/skills_projects-preview.component";
import SkillsLanguages from "../../components/skills_languages/skills_languages.component";

const Skills = () => {
  return (
    <section className="skills">
      <section className="skills__icons"></section>
      <SkillsProjects />
      <SkillsLanguages />
    </section>
  );
};

export default Skills;
