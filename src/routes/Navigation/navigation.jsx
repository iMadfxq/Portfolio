import "./navigation.styles.scss";

import MyLogoBanner from "../../assets/images/iMadfxq_Banner.png";

import HeaderLinks from "../../components/header_links/header_links.component";

import { Link } from "react-router-dom";
import { Outlet } from "react-router";

const Navigation = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <section className="header__logo">
          <Link to="/">
            <img src={MyLogoBanner} alt="iMadfxq's logo" />
          </Link>
        </section>
        <HeaderLinks />
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;
