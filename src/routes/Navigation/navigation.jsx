import './navigation.styles.scss'

import MyLogoBanner from '../../assets/images/iMadfxq_Banner.png'

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className='header'>
      <section className="header__logo">
        <Link to="/">
          <img src={MyLogoBanner} alt="iMadfxq's logo" />
        </Link>
      </section>
      <section className="header__links">
        <Link to="/">Profile</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </section>
    </header>
  );
};

export default Navigation;
