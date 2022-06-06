import "./contact.styles.scss";

import ContactCard from "../../components/contact_card/contact_card.component";
import { CONTACTS } from "../../data/data";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Methods</h2>
      <div className="contact__cards">
        {CONTACTS.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
