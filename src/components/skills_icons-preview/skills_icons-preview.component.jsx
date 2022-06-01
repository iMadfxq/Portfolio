import './skills_icons-preview.styles.scss'
import { SKILLS } from '../../data/data'


const SkillsIcons = () => {
  return (
    <section className="skills__icons">
      <h2>I'm very good with HTML, CSS, and JavaScript; but I can also work with:</h2>
      <div className="skills__icons--cards">
      {SKILLS.map(skill => (
        <div key={skill.id}>
          <img src={skill.skillImg} alt={skill.skillName} />
          {skill.skillName}
        </div>
      ))}
      </div>
    </section>
  )
}

export default SkillsIcons