import { useEffect } from 'react'
import './projectsFilter.styles.scss'

const ProjectsFilter = ({setActive, active}) => {
  useEffect(() => {
    let buttons = document.querySelector('.allprojects__filter').children
    for(let i = 0; i < buttons.length; i++) {
      if(active === '' && buttons[i].textContent === 'All') {
        buttons[i].classList.add('item-active')
      } else if (buttons[i].textContent === active) {
        buttons[i].classList.add('item-active')
      } else {
        buttons[i].classList.remove('item-active')
      }
    }
  }, [active])

  const onClickHandler = (e) => {
    if(e.target.className === 'allprojects__filter' || e.target.textContent === 'All') {
      setActive('')
    } else {
      setActive(e.target.textContent)
    }
    console.dir(e.target)
  }
  return (
    <section className="allprojects__filter" onClick={onClickHandler}>
      <button className='item-active'>All</button>
      <button>React</button>
      <button>JavaScript</button>
      <button>Responsive</button>
      <button>localStorage</button>
    </section>
  )
}

export default ProjectsFilter