import './skills_languages.styles.scss'

import { LANGUAGES } from '../../data/data'

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
    </section>

  )
}

export default SkillsLanguages