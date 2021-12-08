import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState(() => ({ [name]: value }));
  };

  submitNewContact = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addNewContact(name, number);
    this.clearForm();
  };

  clearForm = () => {
    this.setState(() => ({ name: "", number: "" }));
  };

  render() {
    return (
      <form onSubmit={this.submitNewContact}>
        <label>
          NAME
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          PHONE
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">add contact</button>
      </form>
    );
  }
}

export default ContactForm;
