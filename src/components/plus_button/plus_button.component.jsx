import './plus_button.styles.scss'

const PlusButton = ({where, external}) => {
  return (
    <a id='plusButton' href={where} target={external ? '_blank' : '_self'}>+ More</a>
  )
}

export default PlusButton