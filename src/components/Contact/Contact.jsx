import { TiUser } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.ContactContainer}>
      <div>
        <p className={css.contactName}>
          <TiUser />
          {name}
        </p>
        <p className={css.contactName}>
          <TiPhone />
          {number}
        </p>
      </div>
      <button className={css.contactDelBtn} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
