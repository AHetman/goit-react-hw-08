import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectContacts, selectIsLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";

import DocumentTitle from "../components/DocumentTitle";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsContainer}>
      <DocumentTitle>Your contact list</DocumentTitle>
      <div className={css.sidebar}>
        <ContactForm />
        <SearchBox />
      </div>
      <div className={css.contactsSection}>
        {isLoading && <Loader />}
        {Array.isArray(contacts) &&
          (contacts.length > 0 ? (
            <ContactList />
          ) : (
            <ErrorMessage
              message={"There's no contacts in your contactbook yet"}
            />
          ))}
      </div>
    </div>
  );
};

export default ContactsPage;
