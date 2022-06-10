import "./nav_mobile.styles.scss";

import { useState } from "react";

import burgerMenu from "../../assets/images/burgerMenu.svg";
import ProfileHeader from "../../assets/images/profile-developerHead.png";
import SkillsHeader from "../../assets/images/skills-code.png";
import ContactHeader from "../../assets/images/contact-rocket.svg";

import { Link } from "react-router-dom";


const NavMobile = () => {
  let [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="navigation--mobile">
      <img
        src={burgerMenu}
        alt="Burger Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen ? (
        <nav className="navigation--mobile-links" onClick={() => setMenuOpen(!menuOpen)}>
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
        </nav>
      ) : (
        ""
      )}
    </section>
  );
};

export default NavMobile;
