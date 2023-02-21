// import { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

const ContactForm = ({ onSubmit }) => {
  // [name, setName] = useState('');
  // [number, setNumber] = useState('');
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

  const hadleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const {name, number} = state;

  return (
    <form onSubmit={hadleSubmit}>
      <div className={css.inputWrapper}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className={css.addBtn}>
        Add contact
      </button>
    </form>
  );
};

// const [votes, setVotes] = useState({
//   good: 0,
//   neutral: 0,
//   bad: 0,
// });

// handleChange = event => {
//   const { name, value } = event.currentTarget;
//   this.setState({ [name]: value });
// };

// hadleSubmit = event => {
//   event.preventDefault();
//   this.props.onSubmit(this.state);
//   this.reset();
// };

// reset = () => {
//   this.setState({ name: '', number: '' });
// };

// render() {
// return (
//   <form onSubmit={this.hadleSubmit}>
//     <div className={css.inputWrapper}>
//       <label className={css.label}>
//         Name
//         <input
//           className={css.input}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={this.state.name}
//           onChange={this.handleChange}
//         />
//       </label>
//       <label className={css.label}>
//         Number
//         <input
//           className={css.input}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={this.state.number}
//           onChange={this.handleChange}
//         />
//       </label>
//     </div>
//     <button type="submit" className={css.addBtn}>
//       Add contact
//     </button>
//   </form>
// );
// }
// }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
