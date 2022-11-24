import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from "nanoid";

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { setFilter } from 'redux/filterSlice'; 
import { fetchContacts, addContactApi, deleteContactApi } from 'redux/operations'; 

import styles from '../../components/App.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContactApi({ name: name, number: number}));
    form.reset();
  };

  const handleChange = ev => {
    dispatch(setFilter(ev.currentTarget.value));
  };

  const handleDelete = ev => dispatch(deleteContactApi(ev.target.id));

  useEffect(() => {
    if (contacts.length > 0) {
      dispatch(fetchContacts());
    }
    
  }, [dispatch]);
  
  return (
    <>
      <div className={styles.section}>
        <h1>Phonebook</h1>
        <ContactForm formSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter inputChange={handleChange} />
        {isLoading && !error && (
          <p>
            <b>Request in progress...</b>
          </p>
        )}
        <ContactList listFilter={contacts} listDelete={handleDelete} />
      </div>
    </>
  );
};

export default Contacts;