import './skills_languages.styles.scss'

import { LANGUAGES } from '../../data/data'

import PlusButton from "../plus_button/plus_button.component";

const SkillsLanguages = () => {
  return (
    <section className="skills__langs">
      <h2>Languages</h2>
      <div className="skills__langs--cards">
        {LANGUAGES.map((lang) => (
          <a key={lang.id} href={lang.languageVideo} target='_blank'>
            <img src={lang.languageImg} alt={lang.languageName} />
            {lang.languageName}
          </a>
        ))}
      </div>
      <PlusButton where={"https://www.youtube.com/playlist?list=PLYCO_b1Nxk3ztWS310KRWr3SgFT3kM26I"} external={true} />
    </section>

  )
}

export default SkillsLanguages