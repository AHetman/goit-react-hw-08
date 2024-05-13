import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/auth/selectors";

import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactItem} key={nanoid}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
