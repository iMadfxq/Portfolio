import "./skills.styles.scss";

import { Link } from "react-router-dom";

import SkillsProjects from "../../components/skills_projects-preview/skills_projects-preview.component";
import SkillsLanguages from "../../components/skills_languages/skills_languages.component";
import SkillsIcons from "../../components/skills_icons-preview/skills_icons-preview.component";

const Skills = () => {
  return (
    <section className="skills">
      <SkillsIcons />
      <SkillsProjects />
      <SkillsLanguages />
    </section>
  );
};

export default Skills;
