import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from '../App.module.css';

const ContactList = ({ listFilter, listDelete }) => {
  const filter = useSelector(state => state.filter);

  const filterItems = () => {
    const filteredItems = listFilter.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredItems;
  };

  return (
    <ul className={styles.list}>
      {filterItems().map(contact => (
        <li key={contact.id} className={styles.item}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={listDelete}
            id={contact.id}
            className={styles.btnDel}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  listFilter: PropTypes.array,
  listDelete: PropTypes.func,
};
