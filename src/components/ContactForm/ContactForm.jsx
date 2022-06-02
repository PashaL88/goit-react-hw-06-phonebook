import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });

    setName('');
    setNumber('');
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <p>Name</p>
      <input
        className={styles.input}
        value={name}
        type="tel"
        onChange={handleChange}
        name="name"
        placeholder="name"
      />
      <p>Number</p>
      <input
        className={styles.input}
        value={number}
        type="tel"
        onChange={handleChange}
        name="number"
        placeholder="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     const { handleSubmit, handleChange } = this;
//     return (
//       <form className={styles.form} action="" onSubmit={handleSubmit}>
//         <p>Name</p>
//         <input
//           className={styles.input}
//           value={name}
//           type="tel"
//           onChange={handleChange}
//           name="name"
//           placeholder="name"
//         />
//         <p>Number</p>
//         <input
//           className={styles.input}
//           value={number}
//           type="tel"
//           onChange={handleChange}
//           name="number"
//           placeholder="tel"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <button className={styles.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
