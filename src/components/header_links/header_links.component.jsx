import "./header_links.styles.scss";

import ProfileHeader from "../../assets/images/profile-developerHead.png";
import SkillsHeader from "../../assets/images/skills-code.png";
import ContactHeader from "../../assets/images/contact-rocket.svg";

import { Link } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <section className="header__links">
      <Link to="/">
        <img src={ProfileHeader} alt="Profile" />
        Profile
      </Link>
      <Link to="/skills">
        <img src={SkillsHeader} alt="Skills" />
        Skills
      </Link>
      <Link to="/contact">
        <img src={ContactHeader} alt="Contact" />
        Contact
      </Link>
    </section>
  );
};

export default HeaderLinks;
