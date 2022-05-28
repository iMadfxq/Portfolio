import './profile_info.styles.scss'

import { Link } from "react-router-dom";

import MyPicture from '../../assets/images/myPicture-compressed.png'

const ProfileInfo = () => {
  return (
    <section className="profile__info">
      <img src={MyPicture} alt="iMadfxq's Profile Picture" />
      <div className="profile__info-text">
        <h1>Hi, I'm Oscar Gomez</h1>
        <p>
          I'm a Frontend Developer who loves technology,{" "}
          <Link to="https://www.techtarget.com/searcherp/definition/kaizen-or-continuous-improvement#:~:text=Kaizen%20is%20an%20approach%20to,down%20changes%20to%20achieve%20transformation.">Kaizen</Link>
          , and congruency. That's why I'm always working to get better
          as a professional and as a human being.
        </p>
        <Link to="/skills" className='profile__info-button'>See skills</Link>
      </div>
    </section>

  )
}

export default ProfileInfo