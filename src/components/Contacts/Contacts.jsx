import ContactList from "components/ContactList";
import ContactForm from "components/ContactForm";
import Filter from "components/FilterContacts/Filter";
const Contacts = () => {
    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </>
    )
}
export default Contacts;