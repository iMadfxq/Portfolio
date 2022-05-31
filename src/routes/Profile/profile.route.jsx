import "./profile.styles.scss";

import ProfileInfo from "../../components/profile_info/profile_info.component";

import Quotes from '../../components/profile_quotes/profile_quotes.component'

import ProjectCard from "../../components/project_card/project_card.component";
import { PROJECTS } from "../../data/data";

const Profile = () => {
  return (
    <section className="profile">
      <ProfileInfo />
      <Quotes />
      <ProjectCard project={PROJECTS[11]} />
    </section>
  );
};

export default Profile;
