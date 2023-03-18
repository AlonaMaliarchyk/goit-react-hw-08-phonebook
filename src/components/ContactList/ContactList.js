import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactItem from "../ContactItem";
import { fetchContacts } from "../../redux/contacts/operations";
import {  selectFilteredContacts } from 'redux/selector';

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    },
        [dispatch]
    );

    return (
    <div>
        <table>
          <tbody>
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number} />
            ))}
          </tbody>
        </table>
    </div>
    )
}

export default ContactList;
