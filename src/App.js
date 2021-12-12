import "./App.css";
import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = (name, number) => {
    this.setState((current) => {
      const { contacts } = current;
      if (contacts.find((el) => el.name === name)) {
        alert(`${name} is already in contacts.`);
        return;
      }
      return {
        contacts: [...contacts, { id: nanoid(), name, number }],
      };
    });
  };

  deleteContact = (id) => {
    this.setState((current) => ({
      contacts: current.contacts.filter((el) => el.id !== id),
    }));
  };

  updateFilter = (e) => {
    const value = e.currentTarget.value;

    this.setState({ filter: value });
  };

  getFilteredContacs = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((e) => {
      return e.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  render() {
    const contactsToShow = this.getFilteredContacs();
    const { filter } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} updateFilterFunc={this.updateFilter} />
        <ContactList
          contactsList={contactsToShow}
          deleteContactBtn={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
