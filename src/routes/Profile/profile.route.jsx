import "./profile.styles.scss";

import ProfileInfo from "../../components/profile_info/profile_info.component";

import Quotes from "../../components/profile_quotes/profile_quotes.component";

const Profile = () => {
  return (
    <section className="profile">
      <ProfileInfo />
      <Quotes />
    </section>
  );
};

export default Profile;
