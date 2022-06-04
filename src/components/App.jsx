import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { getContacts } from 'redux/contacts/contactsSelector';

import actionCreators from '../redux/contacts/contactsActionCreators';

const App = () => {
  const contacts = useSelector(getContacts, shallowEqual);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

   useEffect(() => {
     localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts]);

  const addContact = data => {
    const action = actionCreators.addContact(data);
    dispatch(action);
  };

  const deleteContact = id => {
    const action = actionCreators.deleteContact(id);
    dispatch(action);
  };

 

  const changeFilter = ({ target }) => setFilter(target.value);

  const filterText = filter.toLowerCase();
  contacts.filter(({ name }) => {
    const result = name.toLowerCase().includes(filterText);
    return result;
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFilter} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
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
