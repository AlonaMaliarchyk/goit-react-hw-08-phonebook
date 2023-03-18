import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();
    const deleteHandler = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <tr className={css.contactItem}>
            <td>{name} &nbsp;</td>
            <td>{number}&nbsp;</td>
            <td>
              <button className={css.delBtn}
                type="button"
                onClick={() => deleteHandler(id)}>
                <i aria-hidden="true" className="trash alternate icon"></i>
                </button>
            </td>
        </tr>
    )
}

ContactItem.propTypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
}

export default ContactItem;
