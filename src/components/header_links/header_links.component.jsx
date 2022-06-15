import "./header_links.styles.scss";

import ProfileHeader from "../../assets/images/profile-developerHead.png";
import SkillsHeader from "../../assets/images/skills-code.png";
import ContactHeader from "../../assets/images/contact-rocket.svg";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

import { changeTab } from '../../app/currentTabSlice';



const HeaderLinks = () => {
  const dispatch = useDispatch()
  const currentTab = useSelector(state => state.currentTab.value)
  return (
    <section className="header__links">
      <Link to="/" className={currentTab === '' ? 'activeTab' : ''} onClick={() => {
    dispatch(changeTab(''))
        }}>
        <img src={ProfileHeader} alt="Profile" />
        Profile
      </Link>
      <Link to="/skills" className={currentTab === 'skills' ? 'activeTab' : ''} onClick={() => {
    dispatch(changeTab('skills'))
        }}>
        <img src={SkillsHeader} alt="Skills" />
        Skills
      </Link>
      <Link to="/contact" className={currentTab === 'contact' ? 'activeTab' : ''} onClick={() => {
    dispatch(changeTab('contact'))
        }}>
        <img src={ContactHeader} alt="Contact" />
        Contact
      </Link>
    </section>
  );
};

export default HeaderLinks;
