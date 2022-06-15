import "./nav_mobile.styles.scss";

import { useState } from "react";

import burgerMenu from "../../assets/images/burgerMenu.svg";
import ProfileHeader from "../../assets/images/profile-developerHead.png";
import SkillsHeader from "../../assets/images/skills-code.png";
import ContactHeader from "../../assets/images/contact-rocket.svg";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../../app/currentTabSlice";

const NavMobile = () => {
  const currentTab = useSelector(state => state.currentTab.value)
  const dispatch = useDispatch();
  let [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="navigation--mobile">
      <img
        src={burgerMenu}
        alt="Burger Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen ? (
        <nav
          className="navigation--mobile-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Link
            to="/"
            className={currentTab === "" ? "activeTab" : ""}
            onClick={() => {
              dispatch(changeTab(""));
            }}
          >
            <img src={ProfileHeader} alt="Profile" />
            Profile
          </Link>
          <Link
            to="/skills"
            className={currentTab === "skills" ? "activeTab" : ""}
            onClick={() => {
              dispatch(changeTab("skills"));
            }}
          >
            <img src={SkillsHeader} alt="Skills" />
            Skills
          </Link>
          <Link
            to="/contact"
            className={currentTab === "contact" ? "activeTab" : ""}
            onClick={() => {
              dispatch(changeTab("contact"));
            }}
          >
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
