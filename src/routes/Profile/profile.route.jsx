import "./profile.styles.scss";

import { QUOTES } from "../../data/data";

import ProfileInfo from "../../components/profile_info/profile_info.component";

const Profile = () => {
  return (
    <section className="profile">
      <ProfileInfo />
      <section className="profile__quotes">
        <p>{QUOTES[2]}</p>
      </section>
    </section>
  );
};

export default Profile;
