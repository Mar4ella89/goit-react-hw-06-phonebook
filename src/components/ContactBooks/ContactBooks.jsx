import { useEffect, useState } from 'react';
// import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

// import store from 'redux/store';
import ContactForm from 'modules/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { addContact, deleteContact } from 'redux/contacts/contacts-action';

import css from './ContactBooks.module.css';

const ContactBooks = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );
  const contacts = useSelector(store => store.contacts);

  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isDublicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    const contactData = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normalizedName ||
        number.toLowerCase() === normalizedNumber
      );
    });

    return Boolean(contactData);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name, number)) {
      return alert(`Name ${name} or number ${number} is already in contacts`);
    }

    const action = addContact({ name, number });
    dispatch(action);
  };

  const handleDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const changeFilter = event => setFilter(event.currentTarget.value);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={css.container}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
      </div>
      <div>
        <h2>Contacts</h2>

        <Filter value={filter} onChange={changeFilter} />

        <ContactList
          contacts={visibleContacts}
          removeContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default ContactBooks;
