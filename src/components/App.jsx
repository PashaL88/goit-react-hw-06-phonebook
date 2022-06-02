import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      const data = localStorage.getItem('contacts');
      const contacts = JSON.parse(data);
      if (contacts?.length) {
        setContacts(contacts);
      }
      firstRender.current = false;
    }
  }, []);

  useEffect(() => {
    if (!firstRender.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = data => {
    const { name } = data;
    const dublicate = contacts.find(contact => contact.name === name);
    if (dublicate) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => {
      const { name, number } = data;
      const newContact = {
        name,
        number,
        id: nanoid(),
      };
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = id => {
    setContacts(prevContacts => contacts.filter(contact => contact.id !== id));
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

// class App extends Component  {
//   state = {
//   contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
//   filter: '',
//   }

//   componentDidMount() {
//     const data = localStorage.getItem('contacts')
//     const contacts = JSON.parse(data)
//     if (contacts?.length) {
//       this.setState({
//         contacts: contacts,
//       })
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts.length !== contacts.length) {
//       console.log("did update");
//       const updateContacts = JSON.stringify(contacts)
//     localStorage.setItem('contacts', updateContacts)
//     }
//   }

//   addContact = (data) => {
//     const { name } = data;
//     const { contacts } = this.state;
//     const dublicate = contacts.find(contact => contact.name === name)
//       if (dublicate) {
//         alert(`${name} is already in contacts`)
//         return
//       }
//     this.setState(prevState => {
//       const { contacts} = prevState;
//       const { name, number } = data;
//       const newContact = {
//         name,
//         number,
//         id: nanoid(),
//       }
//         return {
//           contacts: [...contacts, newContact],
//           name: "",
//           number: "",
//           filter: '',
//          }
//       }
//     )
//   }

//   changeFilter = ({target}) => {
//     this.setState({
//       filter: target.value,
//     })
//   }

//   deleteContact = (id) => {
//     this.setState(prevState => {
//       const { contacts } = prevState;
//       return {
//         contacts: contacts.filter((contact) => contact.id !== id)
//       }
// })
//   }

//   getFilteredContacts() {
//     const { filter, contacts } = this.state;
//     if(!filter) { return contacts}
//     const filterText = filter.toLowerCase();
//     const filteredContacts = contacts.filter(({name}) => {
//       const result = name.toLowerCase().includes(filterText)
//       return result
//     })
//     return filteredContacts
//   }

//   render() {
//     const {  filter } = this.state;
//     const { addContact, changeFilter, deleteContact } = this;
//     const contacts = this.getFilteredContacts();

//     return (
//       <div>
//           <h1>Phonebook</h1>
//         <ContactForm onSubmit={addContact}/>
//           <h2>Contacts</h2>
//           <Filter filter={filter} changeFilter={changeFilter} />
//         <ContactList contacts={contacts} deleteContact={deleteContact } />
//       </div>

// )
//   }
// }
