import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { getContacts } from 'redux/contacts/contactsSelector';

import actions from '../redux/contacts/contactsActions';

const App = () => {
  const contacts = useSelector(getContacts, shallowEqual);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const { name } = data;
    const dublicate = contacts.find(contact => contact.name === name);
    if (dublicate) {
      alert(`${name} is already in contacts`);
      return;
    }
    const action = actions.addContact(data);
    dispatch(action);
  };

  const deleteContact = id => {
    const action = actions.deleteContact(id);
    dispatch(action);
  };

  const changeFilter = ({ target }) => setFilter(target.value);

  const getFilteredContacts = () => {
    const filterText = filter.toLowerCase();
    const result = contacts.filter(item => {
      const name = item.name.toLowerCase().includes(filterText);
      return name;
    });
    return result;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;

// const firstRender = useRef(true);

// // useEffect(() => {
// //   if (firstRender.current) {
// //     const data = localStorage.getItem('contacts');
// //     const contacts = JSON.parse(data);
// //     if (contacts?.length) {
// //       setContacts(contacts);
// //     }
// //     firstRender.current = false;
// //   }
// // }, []);

// // useEffect(() => {
// //   if (!firstRender.current) {
// //     localStorage.setItem('contacts', JSON.stringify(contacts));
// //   }
// // }, [contacts]);

// const addContact = data => {
//   const { name } = data;
//   const dublicate = contacts.find(contact => contact.name === name);
//   if (dublicate) {
//     alert(`${name} is already in contacts`);
//     return;
//   }
//   setContacts(prevContacts => {
//     const { name, number } = data;
//     const newContact = {
//       name,
//       number,
//       id: nanoid(),
//     };
//     return [...prevContacts, newContact];
//   });
// };
