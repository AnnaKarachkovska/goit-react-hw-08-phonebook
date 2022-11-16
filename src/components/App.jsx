import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import styles from './App.module.css';
import { setFilter } from 'redux/filterSlice';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const App = () => {
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

    dispatch(addContact({ name: name, number: number }));
    form.reset();
  };

  const handleChange = ev => {
    dispatch(setFilter(ev.currentTarget.value));
  };

  const handleDelete = (ev) => dispatch(deleteContact(ev.target.id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ErrorBoundary>
        <div className={styles.section}>
          <h1>Phonebook</h1>
          <ContactForm formSubmit={handleSubmit} />
          <h2>Contacts</h2>
          <Filter inputChange={handleChange} />
          {isLoading && !error && <p><b>Request in progress...</b></p>}
          <ContactList listFilter={contacts} listDelete={handleDelete} />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;