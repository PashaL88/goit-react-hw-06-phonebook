import { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import actionCreators from '../redux/contacts/actionCreators';

const App = () => {
  const contacts = useSelector(store => store, shallowEqual);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  const [filter, setFilter] = useState('');

  const addContact = data => {
    const action = actionCreators.addContact(data);
    dispatch(action);
  };

  const deleteContact = id => {
    const action = actionCreators.deleteContact(id);
    dispatch(action);
  };

  // const deleteContact = id => {
  //   setContacts(prevContacts => contacts.filter(contact => contact.id !== id));
  // };

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
