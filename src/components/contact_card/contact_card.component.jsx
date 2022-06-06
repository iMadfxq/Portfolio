import './contact_card.styles.scss'

const ContactCard = ({contact}) => {
  return (
    <a href={contact.url} target="_blank" className="contact__cards--item">
      <img src={contact.img} alt={contact.name} />
      <h3>{contact.name}</h3>
      <p>{contact.description}</p>
    </a>
  )
}

export default ContactCard