import css from './Contact.module.css';
import { FcPhoneAndroid } from 'react-icons/fc';
import { PiCatDuotone } from 'react-icons/pi';
import { AiTwotoneDelete } from 'react-icons/ai';

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.contact}>
      <p className={css.contactName}>
        <PiCatDuotone size={20} className={css.contact_descr_icon} />
        Name: {name}
      </p>
      <p className={css.contactNumber}>
        <FcPhoneAndroid size={20} className={css.contact_descr_icon} />
        Number: {number}
      </p>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => onDelete(id)}
      >
        <AiTwotoneDelete size={20} className={css.contact_descr_icon} />
        Delete
      </button>
    </div>
  );
};

export default Contact;
