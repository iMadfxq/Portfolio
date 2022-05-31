import "./profile.styles.scss";

import ProfileInfo from "../../components/profile_info/profile_info.component";

import Quotes from "../../components/profile_quotes/profile_quotes.component";

import ProjectCard from "../../components/project_card/project_card.component";
import { PROJECTS } from "../../data/data";

const Profile = () => {
  return (
    <section className="profile">
      <ProfileInfo />
      <Quotes />
      {PROJECTS.map((project) => (
        <ProjectCard project={project} key={project.id}/>
      ))}
    </section>
  );
};

export default Profile;
