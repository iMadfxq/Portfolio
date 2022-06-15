import { useState } from "react";

import "./AllProjects.styles.scss";

import { PROJECTS } from "../../data/data";
import ProjectCard from "../project_card/project_card.component";
import ProjectsFilter from "../projectsFilter/projectsFilter.component";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { changeTab } from "../../app/currentTabSlice";


const AllProjects = () => {
  const dispatch = useDispatch()
  const currentTab = useSelector(state => state.currentTab.value)
  let [active, setActive] = useState("");
  let filteredProjects = PROJECTS.filter((project) => {
    let found = false;
    for (let i = 0; i < project.tags.length; i++) {
      if (
        project.tags[i].toLocaleLowerCase().includes(active.toLocaleLowerCase())
      ) {
        found = true;
      }
    }
    return found;
  });
  console.log(filteredProjects);
  return (
    <section className="allprojects">
      <h2>All Of My Projects</h2>
      <ProjectsFilter setActive={setActive} active={active}/>
      <section className="allprojects__cards">
        {filteredProjects.map((p) => (
          <ProjectCard project={p} key={p.id} />
        ))}
      </section>
      <Link to="/skills" className='next-button' onClick={() => {
    dispatch(changeTab('skills'))
        }}>← Go Back</Link>
    </section>
  );
};

export default AllProjects;
