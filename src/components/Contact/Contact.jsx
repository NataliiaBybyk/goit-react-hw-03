import css from './Contact.module.css';
import { FcTouchscreenSmartphone } from 'react-icons/fc';

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.contact}>
      <p className={css.contactName}>Name: {name}</p>
      <p className={css.contactNumber}>
        <FcTouchscreenSmartphone size={16} className={css.contact_descr_icon} />
        Number: {number}
      </p>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
