import "./skills_projects-preview.styles.scss";

import { PROJECTS } from "../../data/data.js";

import ProjectCard from "../../components/project_card/project_card.component";
import PlusButton from "../plus_button/plus_button.component";
import { useNavigate } from "react-router";

import { changeTab } from "../../app/currentTabSlice";

import { useDispatch, useSelector } from "react-redux";


const SkillsProjectsPreview = () => {
  let latestProjects = PROJECTS.slice(-3);
    const dispatch = useDispatch()
const tab = useSelector(state => state.currentTab.value)

    const toProjects = useNavigate()
  const handleClick = () => {
    toProjects('/projects')
    dispatch(changeTab('/projects'))
    console.log(tab)
    window.scrollTo(0,0)
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
