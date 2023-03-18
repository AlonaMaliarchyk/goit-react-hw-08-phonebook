import ContactList from "components/ContactList";
import ContactForm from "components/ContactForm";
import Filter from "components/FilterContacts/Filter";
import css from "../Page/LoginPage/Form.module.css";

const Contacts = () => {
    return (
        <div className={css.form}>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    )
}
export default Contacts;